import React, {Component} from "react";
import {Container, Content, Spinner} from "native-base";
import {AsyncStorage, ScrollView, Text, View} from "react-native";
import BusAlertCards from "../../components/BusAlerts/BusAlertsCards";
import Footer from "../../components/common/Footer";
import {Row} from "react-native-easy-grid";
import firebase from "@firebase/app";
import {snapshotToArray} from "../../utils/snapshotToArray";
import {NavigationOptions} from "../../navigation/navigationOptions";

const fontStyles = require("../../styles/fontStyles");
const utilsStyles = require("../../styles/utilsStyles");

export default class BusAlerts extends Component {

    static navigationOptions = ({navigation}) => {
        return NavigationOptions(navigation)
    };

    state = {
        news: null,
        asyncNews: null
    };

    componentWillMount() {
        this.fetchNews();
    }

    fetchNews = () => {
        firebase.firestore().collection("news")
            .orderBy("createAt", "desc").limit(10)
            .onSnapshot(snapshot => {
                const data = snapshotToArray(snapshot);
                this.setState({news: data});
            });
    };

    render() {
        AsyncStorage.getItem('news', (err, result) => {
            const news = JSON.parse(result);
            this.setState({asyncNews: news})
        });
        return (
            <Container>
                <ScrollView>
                    <Row>
                        <View style={utilsStyles.containers}>
                            <Text style={fontStyles.title_1}>News</Text>
                        </View>
                    </Row>
                    <Row>
                        {!this.state.asyncNews
                            ? <Spinner color="red"/>
                            : <BusAlertCards
                                navigation={this.props.navigation}
                                dataArray={this.state.asyncNews}/>
                        }
                    </Row>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}


