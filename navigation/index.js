import React, {Component} from "react"
import {LogoHeader} from "../components/utils/LogoHeader";
import {Alert, Image, Modal, Text, TouchableHighlight, View} from "react-native";
import Icon from '@expo/vector-icons/Ionicons';
import BusAlertIcon from "../components/BusAlerts/busAlertIcon";
import AuthLoadingScreen from "../session/AuthLoadingScreen";
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator,
} from "react-navigation";
import * as screen from "../screens";

const theme = require('../styles/themeColors.json');

export default class Navigator extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const navigation = ({navigation}) => {
            return {
                headerTitle: LogoHeader,
                headerStyle: {
                    backgroundColor: theme.primaryColor,
                },
                headerTitleStyle: {
                    textAlign: 'center',
                    flex: 1,
                },
                headerTintColor: 'white',
                headerRight: (
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
                                {text: 'OK', onPress: () => navigation.navigate("Login")},
                            ],
                            {cancelable: false},
                        );
                    }} name="ios-log-out" color="#fff"
                          size={30}/>
                )
            };
        };

        const headerNavigation = ({navigation}) => {
            return {
                headerTitle: LogoHeader,
                headerStyle: {
                    backgroundColor: theme.primaryColor,
                },
                headerLeft: (<View/>),
                headerRight: (
                    <Icon style={{paddingRight: 10}} onPress={() => navigation.openDrawer()} name="md-menu" color="#fff"
                          size={30}/>
                )
            }
        };

        const HomeStack = createStackNavigator({
                Home: {
                    screen: screen.Home,
                },
                GuideToPeru: {
                    screen: screen.GuideToPeru,
                    navigationOptions: navigation,
                },
                GuideToBolivia: {
                    screen: screen.GuideToBolivia,
                    navigationOptions: navigation,
                },
                MachuPicchuInfo: {
                    screen: screen.MachuPicchuInfo,
                    navigationOptions: navigation
                },
                RainbowMountainInfo: {
                    screen: screen.RainbowMountainInfo,
                    navigationOptions: navigation,
                },
                LimaInfo: {
                    screen: screen.LimaInfo,
                    navigationOptions: navigation,
                },
                ParacasInfo: {
                    screen: screen.ParacasInfo,
                    navigationOptions: navigation,
                },
                LimaGuide: {
                    screen: screen.LimaGuide,
                    navigationOptions: navigation,
                },
                ParacasGuide: {
                    screen: screen.ParacasGuide,
                    navigationOptions: navigation,
                },
                LimaAccommodation: {
                    screen: screen.LimaAccommodation,
                    navigationOptions: navigation,
                },
                ParacasAccommodation: {
                    screen: screen.ParacasAccommodation,
                    navigationOptions: navigation,
                },
                LimaLocations: {
                    screen: screen.LimaLocations,
                    navigationOptions: navigation,
                },
                ParacasLocations: {
                    screen: screen.ParacasLocations,
                    navigationOptions: navigation,
                },
                ParacasExtraTours: {
                    screen: screen.ParacasExtraTours,
                    navigationOptions: navigation,
                },
                HuacachinaInfo: {
                    screen: screen.HuacachinaInfo,
                    navigationOptions: navigation,
                },
                HuacachinaAccommodation: {
                    screen: screen.HuacachinaAccommodation,
                    navigationOptions: navigation,
                },
                HuacachinaLocations: {
                    screen: screen.HuacachinaLocations,
                    navigationOptions: navigation,
                },
                HuacachinaGuide: {
                    screen: screen.HuacachinaGuide,
                    navigationOptions: navigation,
                },
                HuacachinaExtraTours: {
                    screen: screen.HuacachinaExtraTours,
                    navigationOptions: navigation,
                },
                NazcaInfo: {
                    screen: screen.NazcaInfo,
                    navigationOptions: navigation
                },
                NazcaGuide: {
                    screen: screen.NazcaGuide,
                    navigationOptions: navigation
                },
                NazcaLocations: {
                    screen: screen.NazcaLocations,
                    navigationOptions: navigation
                },
                NazcaAccommodation: {
                    screen: screen.NazcaAccommodation,
                    navigationOptions: navigation
                },
                NazcaExtraTours: {
                    screen: screen.NazcaExtraTours,
                    navigationOptions: navigation
                },
                ArequipaInfo: {
                    screen: screen.ArequipaInfo,
                    navigationOptions: navigation
                },
                ArequipaGuide: {
                    screen: screen.ArequipaGuide,
                    navigationOptions: navigation
                },
                ArequipaLocations: {
                    screen: screen.ArequipaLocations,
                    navigationOptions: navigation
                },
                ArequipaAccommodation: {
                    screen: screen.ArequipaAccommodation,
                    navigationOptions: navigation
                },
                ArequipaExtraTours: {
                    screen: screen.ArequipaExtraTours,
                    navigationOptions: navigation
                },
                PunoInfo: {
                    screen: screen.PunoInfo,
                    navigationOptions: navigation
                },
                PunoGuide: {
                    screen: screen.PunoGuide,
                    navigationOptions: navigation
                },
                PunoAccommodation: {
                    screen: screen.PunoAccommodation,
                    navigationOptions: navigation
                },
                PunoExtraTours: {
                    screen: screen.PunoExtraTours,
                    navigationOptions: navigation
                },
                PunoLocations: {
                    screen: screen.PunoLocations,
                    navigationOptions: navigation
                },
                CuscoInfo: {
                    screen: screen.CuscoInfo,
                    navigationOptions: navigation
                },
                CuscoGuide: {
                    screen: screen.CuscoGuide,
                    navigationOptions: navigation
                },
                CuscoLocations: {
                    screen: screen.CuscoLocations,
                    navigationOptions: navigation
                },
                CopacabanaInfo: {
                    screen: screen.CopacabanaInfo,
                    navigationOptions: navigation
                },
                CopacabanaAccommodation: {
                    screen: screen.CopacabanaAccommodation,
                    navigationOptions: navigation
                },
                CopacabanaGuide: {
                    screen: screen.CopacabanaGuide,
                    navigationOptions: navigation
                },
                CopacabanaLocations: {
                    screen: screen.CopacabanaLocations,
                    navigationOptions: navigation
                },
                CopacabanaExtraTours: {
                    screen: screen.CopacabanaExtraTours,
                    navigationOptions: navigation
                },
                LaPazInfo: {
                    screen: screen.LaPazInfo,
                    navigationOptions: navigation
                },
                LaPazGuide: {
                    screen: screen.LaPazGuide,
                    navigationOptions: navigation
                },
                LaPazLocations: {
                    screen: screen.LaPazLocations,
                    navigationOptions: navigation
                },
                BorderCrossingInfo: {
                    screen: screen.BorderCrossingInfo,
                    navigationOptions: navigation
                },
                UyuniInfo: {
                    screen: screen.UyuniInfo,
                    navigationOptions: navigation
                }
            },
            {
                defaultNavigationOptions: {
                    gesturesEnabled: false
                },
                navigationOptions: {
                    tabBarLabel: 'Home',
                    tabBarIcon: ({focused}) => (
                        <Image
                            style={{width: 30, height: 30, tintColor: !!focused ? "#939393" : theme.secondaryColor}}
                            source={require('../assets/icons/ic_home.png')}
                        />
                    )
                }
            },
        );

        const BusAlertsStack = createStackNavigator({
            BusAlerts: {
                screen: screen.BusAlerts,
            },
            SingleNews: {
                screen: screen.SingleNews,
                navigationOptions: navigation,
            },
        });


        const HowItWorksStack = createStackNavigator({
            HowItWorksScreen: {
                screen: screen.HowItWorksScreen,
            }
        });


        const YourTimeTableStack = createStackNavigator({
            YourTimeTable: {
                screen: screen.YourTimeTable,
            }
        });

        HomeStack.navigationOptions = {
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
                <Image
                    style={{width: 30, height: 30, tintColor: !!focused ? "#939393" : theme.secondaryColor}}
                    source={require('../assets/icons/ic_home.png')}
                />
            )
        };
        BusAlertsStack.navigationOptions = ({navigation}) => {
            return {
                tabBarLabel: 'Bus Alerts',
                tabBarIcon: ({focused}) => <BusAlertIcon focused={focused} navigation={navigation}/>
            }
        };

        HowItWorksStack.navigationOptions = {
            tabBarLabel: 'How it works',
            tabBarIcon: ({focused}) => (
                <Image
                    style={{width: 30, height: 30, tintColor: !!focused ? "#939393" : theme.secondaryColor}}
                    source={require('../assets/icons/ic_local_library.png')}
                />
            )
        };
        YourTimeTableStack.navigationOptions = {
            tabBarLabel: 'Your Timetable',
            tabBarIcon: ({focused}) => (
                <Image
                    style={{width: 30, height: 30, tintColor: !!focused ? "#939393" : theme.secondaryColor}}
                    source={require('../assets/icons/ic_event_available.png')}
                />
            )
        };

        const DashboardTabNavigator = createBottomTabNavigator(
            {
                Home: HomeStack,
                HowItWorks: HowItWorksStack,
                BusAlerts: BusAlertsStack,
                YourTimeTable: YourTimeTableStack,
            }, {
                navigationOptions: () => {
                    return {
                        header: null,
                    };
                },
                tabBarOptions: {
                    showIcon: true,
                    style: {
                        backgroundColor: "#F1F1F1",
                        height: 55
                    },
                    activeTintColor: "#939393",
                    inactiveTintColor: theme.secondaryColor,
                },
            },
        );

        const DashboardStackNavigator = createStackNavigator({
            DashboardTabNavigator: DashboardTabNavigator
        });

        const AppSwitchNavigator = createSwitchNavigator({
                AuthLoading: AuthLoadingScreen,
                Login: {screen: screen.Login},
                Dashboard: {screen: DashboardStackNavigator}
            },
            {
                initialRouteName: 'AuthLoading',
            });

        const AppContainer = createAppContainer(AppSwitchNavigator);
        return <AppContainer/>;
    }
}

