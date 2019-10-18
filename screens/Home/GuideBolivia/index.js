import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../components/common/Footer";
import {ScrollView} from "react-native";
import CommonCountryGuide from "../../../components/common/guide/CommonCountryGuide";

const items = [
    {title: "Copacabana", url: "CopacabanaInfo", img: require("../../../assets/images/cities/Copacabana.png")},
    {title: "La Paz", url: "LaPazInfo", img: require("../../../assets/images/cities/LaPaz.png")},
    {title: "Uyuni", url: "UyuniInfo", img: require("../../../assets/images/cities/Uyuni.png")},
    {title: "Border Crossing", url: "BorderCrossingInfo", img: require("../../../assets/images/cities/BorderCrossing.png")}
];

const info = [
    "Bolivia is an amazing country, full of beautiful sights to see and places to explore. " +
    "We’ve compiled these guides to help you learn everything you need to know about each destination."
];
export default class GuideToBolivia extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCountryGuide navigation={this.props.navigation}
                                        title={'Guide to Bolivia'}
                                        data={items}
                                        description={info}/>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}