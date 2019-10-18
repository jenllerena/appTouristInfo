import React, {Component} from 'react';
import {View, WebView} from 'react-native';
import {NavigationOptions} from "../../navigation/navigationOptions";

export default class YourTimeTable extends Component {

    static navigationOptions = ({navigation}) => {
        return NavigationOptions(navigation)
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <WebView
                    source={{uri: 'https://booking.peruhop.com/CUS/Login.aspx'}}
                />
            </View>
        );
    }
}