import React, {Component} from "react";
import {ScrollView} from "react-native";
import {Container, Content} from "native-base";
import {Row} from "react-native-easy-grid";
import Footer from "../../components/common/Footer";
import ListCardWithText from "../../components/utils/ListCardWithText";
import {NavigationOptions} from "../../navigation/navigationOptions"

const utilsStyles = require("../../styles/utilsStyles");

export default class Home extends Component {

    static navigationOptions = ({navigation}) => {
        return NavigationOptions(navigation)
    };

    render() {
        const reloadItems = [
            {
                icon: require("../../assets/icons/busTimetable.png"),
                name: 'Your Bus Timetable',
                url: "YourTimeTable"
            },
            {
                icon: require("../../assets/icons/peru.png"),
                name: 'Guide To Peru',
                url: "GuideToPeru"
            },
            {
                icon: require("../../assets/icons/bolivia.png"),
                name: 'Guide To Bolivia',
                url: "GuideToBolivia"
            },
            {
                icon: require("../../assets/icons/machuPicchuIcon.png"),
                name: 'Machu Picchu Info',
                url: "MachuPicchuInfo"
            },
            {
                icon: require("../../assets/icons/rainbowMIcon.png"),
                name: 'Rainbow Mountain Info',
                url: "RainbowMountainInfo"
            },
            {
                icon: require("../../assets/icons/uyuniIcon.png"),
                name: 'Salar Uyuni Info',
                url: "UyuniInfo"
            },
        ];

        return (
            <Container>
                <ScrollView>
                    <Content style={{flexDirection: "column", marginHorizontal: "2%"}}>
                        <Row>
                            <ListCardWithText
                                items={reloadItems}
                                navigation={this.props.navigation}
                            />
                        </Row>
                    </Content>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}