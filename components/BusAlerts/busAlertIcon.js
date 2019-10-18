import React, {Component} from 'react';
import {AsyncStorage, Image, Text, View} from 'react-native';
import iconsStyles from "../../styles/iconsStyles";
import {difference, isEmpty, union} from "lodash";
import firebase from "@firebase/app";
import {snapshotToArray} from "../../utils/snapshotToArray";
import {firestore} from "../../firebase/config";

const theme = require('../../styles/themeColors.json');

export default class BusAlertIcon extends Component {

    state = {
        currentReservation: [],
        reservations: [],
        news: [],
        readNews: [],
    };

    componentWillMount() {
        AsyncStorage.getItem('currentReservation', (err, result) => {
            let currentReservation = JSON.parse(result);
            this.setState({currentReservation: currentReservation});
            this.getCollectionReadNews(currentReservation);
        });
        this.fetchReservation();
        this.fetchNews();
    }

    fetchReservation = () => {
        AsyncStorage.getItem('currentReservation', (err, result) => {
            const reservation = JSON.parse(result);
            const reservationID = reservation.reservationID;
            firebase.firestore().collection("reservations")
                .where("reservationID", "==", reservationID)
                .onSnapshot(snapshot => {
                    const data = snapshotToArray(snapshot);
                    this.setState({reservations: data});
                });
        });
    };

    fetchNews = () => {
        firebase.firestore().collection("news")
            .orderBy("createAt", "desc").limit(10)
            .onSnapshot(snapshot => {
                const news = snapshotToArray(snapshot);
                this.setState({news: news});
                this.setState({loading: true});
                AsyncStorage.setItem('news', JSON.stringify(news))
            });
    };

    updateReadNews = (badge, currentReadNews) => {
        const readNews = union(badge, currentReadNews);
        !!this.props.navigation.isFocused() && badge.length > 0
            ? this.setCurrentNews(readNews)
            : null;
    };

    setCurrentNews = (readNews) => {
        readNews.map(news => {
            firestore.collection("reservations").doc(this.state.currentReservation.id)
                .collection("readNews")
                .doc(news)
                .set({idNews: news});
        })
    };

    getCollectionReadNews = (currentReservation) => {
        firestore.collection("reservations").doc(currentReservation.id)
            .collection("readNews")
            .onSnapshot(snapshot => {
                const readNews = snapshotToArray(snapshot);
                this.setState({readNews});
            })
    };

    currentBadge = () => {
        const currentReadNews = this.state.readNews.map(item => item["id"]);
        const badgeReadNews = currentReadNews ? currentReadNews.slice(0, 10) : null;
        const idNews = this.state.news.map(news => {
            return news.id
        });
        const badge = difference(idNews, badgeReadNews);
        this.updateReadNews(badge, currentReadNews);
        return badge.length;
    };

    render() {
        const {loading} = this.state;
        return (
            <View style={iconsStyles.viewTabBar}>
                <Image style={{
                    width: 30,
                    height: 30,
                    tintColor: !!this.props.navigation.isFocused() ? "#939393" : theme.secondaryColor
                }} source={require("../../assets/icons/ic_sms_failed.png")}/>
                {!isEmpty(this.state.currentReservation) && this.currentBadge() > 0 && loading === true
                    ?
                    <View style={iconsStyles.badgeIcon}>
                        <Text>{this.currentBadge()}</Text>
                    </View>
                    : null}
            </View>
        );
    }
}