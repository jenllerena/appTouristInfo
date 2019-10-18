import React, {Component} from 'react';
import {Animated, AsyncStorage, Image, ImageBackground, Keyboard, Text} from "react-native";
import {Button, Content, Input, Item, Label} from "native-base";
import {fetchCollection, setDocument} from "../../firebase";
import RF from "react-native-responsive-fontsize"
import Toast, {DURATION} from 'react-native-easy-toast'
import {connect} from 'react-redux';
import {saveUserToken} from '../../actions';
import {tokenNotifications} from "../../utils";
import moment from "moment";

const utilsStyles = require("../../styles/utilsStyles");

class Login extends Component {

    state = {
        fadeAnim: new Animated.Value(0.8),
        reservations: "",
        reservationID: "",
        loading: false,
    };

    componentWillMount() {
        this.fetchReservations();
    }

    fetchReservations = () => {
        fetchCollection("reservations", (data) => {
            const dataArray = data;
            this.setState({reservations: dataArray});
            Animated.timing(
                this.state.fadeAnim,
                {toValue: 1},
            ).start()
        });
    };

    handleChange = (name, text) => {
        if (text === text.replace(/\D/g, '')) {
            this.setState({[name]: text})
        } else {
            Keyboard.dismiss();
            this.refs.toast.show("Wrong reservation ID format");
        }
    };

    validateReservation = () => {
        const {reservationID, reservations} = this.state;
        if (reservationID.length > 4) {
            const currentReservation = reservations.find(item => item.reservationID === reservationID);
            !!currentReservation
                ? this.settingToken(currentReservation)
                : this.createNewReservationId(reservationID);
        } else {
            Keyboard.dismiss();
            this.refs.toast.show("Wrong reservation ID format");
        }
    };


    createNewReservationId = (reservationID) => {
        const currentReservation = {
            id: reservationID,
            reservationID: reservationID,
            token: {},
            readNews: {},
        };
        setDocument("reservations", reservationID, {
            reservationID: reservationID,
            lastLoggedAt: moment().format("YYYY/MM/DD")
        })
            .then(this.settingToken(currentReservation));
    };

    settingToken = (currentReservation) => {
        tokenNotifications(currentReservation.id).then(() => {
            AsyncStorage.setItem('currentReservation', JSON.stringify(currentReservation), () => {
                this.createLocalToken(currentReservation.id);
            })
        });
        /*
        AsyncStorage.setItem('currentReservation', JSON.stringify(currentReservation), () => {
                tokenNotifications(currentReservation.id)
                    .then(() => this.createLocalToken(currentReservation.id));
        })*/
    };

    createLocalToken = (iduser) => {
        this.props.saveUserToken(iduser)
            .then(() => {
                this.props.navigation.navigate('Dashboard');
            })
            .catch((error) => {
                this.setState({error})
            })
    };

    render() {
        return (
            <ImageBackground
                style={utilsStyles.loginImageBackground}
                source={require("../../assets/images/backgrounds/machu-picchu-montana-7.png")}
            >
                <Image
                    style={{marginTop: "20%", width: "30%", height: "30%", aspectRatio: 1,}}
                    source={require("../../assets/images/logos/PeruHopLogo.png")}
                    resizeMode="contain"
                />
                <Content
                    scrollEnabled={false}
                    style={utilsStyles.loginContent}
                    contentContainerStyle={{
                        alignItems: "flex-end",
                        flex: 1,
                    }}
                >
                    <Animated.View
                        style={{
                            opacity: this.state.fadeAnim,
                            height: "100%",
                            alignItems: "flex-end",
                            flex: 1
                        }}>
                        <Item
                            inlineLabel
                            style={{
                                borderBottomWidth: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                borderRadius: 6,
                                width: "100%",
                                height: "9%"
                            }}
                        >
                            <Label style={{paddingLeft: "5%", color: "#FFF", width: "45%", fontSize: RF(2.5)}}>
                                Reservation ID
                            </Label>
                            <Input keyboardType={"number-pad"}
                                   pattern="[0-9]*"
                                   style={utilsStyles.loginInput}
                                   onChangeText={(text) => {
                                       this.handleChange("reservationID", text)
                                   }}
                                   value={this.state.reservationID}
                            />
                        </Item>
                        <Item style={{borderBottomWidth: 0, marginTop: "3%", height: "8%"}}>
                            <Button
                                style={utilsStyles.loginButton}
                                onPress={() => {
                                    this.validateReservation()
                                }}>
                                <Text style={{color: "#fff", fontSize: RF(2.5)}}>Sign In</Text>
                            </Button>
                        </Item>
                    </Animated.View>
                </Content>
                <Toast ref="toast"/>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    token: state.token,
});


const mapDispatchToProps = dispatch => ({
    saveUserToken: (iduser) => dispatch(saveUserToken(iduser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

