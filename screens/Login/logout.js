import React, {Component} from "react";
import {connect} from 'react-redux';
import {removeUserToken} from '../../actions';
import {Alert, AsyncStorage} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

class LogOut extends Component {
    render() {
        return (
            <Icon style={{paddingRight: 10}} onPress={() => {
                Alert.alert(
                    'Log Out',
                    'Are you sure you want to log out?',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => null,
                            style: 'cancel',
                        },
                        {
                            text: 'OK', onPress: () => {

                                AsyncStorage.getItem('currentReservation', (err, result) => {
                                    const currentReservation = JSON.parse(result);
                                    //setDocument("reservations", currentReservation.id, {token: ""});
                                    AsyncStorage.setItem('currentReservation', null);
                                });
                                this.props.removeUserToken();
                                this.props.navigation.navigate("Login");
                                //const currentReservation = SyncStorage.get("currentReservation");
                                //setDocument("reservations", currentReservation.id, {token: ""});
                                //SyncStorage.set("currentReservation", null);

                            }
                        },
                    ],
                    {cancelable: false},
                );
            }
            }
                  name="ios-log-out" color="#fff"
                  size={30}/>

        );
    }
}

const mapStateToProps = state => ({
    token: state.token,
});

const mapDispatchToProps = dispatch => ({
    removeUserToken: () => dispatch(removeUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);