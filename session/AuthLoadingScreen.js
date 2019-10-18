import React from 'react';
import {ActivityIndicator, ImageBackground, StatusBar, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {getUserToken} from '../actions';

const utilsStyles = require("../styles/utilsStyles");

class AuthLoadingScreen extends React.Component {

    componentDidMount() {
        this.verifyAuthLogin();
    }

    verifyAuthLogin = () => {
        this.props.getUserToken('userToken').then(() => {
            this.props.navigation.navigate(this.props.token.token !== null ? 'Dashboard' : 'Login');
        })
            .catch(error => {
                this.setState({error})
            })

    };

    render() {
        return (
            <ImageBackground
                style={utilsStyles.loginImageBackground}
                source={require("../assets/peruhop-splash.png")}
            >
                <Text>Loading...</Text>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = state => ({
    token: state.token,
});

const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);