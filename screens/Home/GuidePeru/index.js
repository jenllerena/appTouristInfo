import React, {Component} from "react";
import {Container, Content} from "native-base";
import {ScrollView} from "react-native";
import Footer from "../../../components/common/Footer";
import CommonCountryGuide from "../../../components/common/guide/CommonCountryGuide";


const items = [
    {title: "Lima", url: 'LimaInfo', img: require("../../../assets/images/cities/Lima.png")},
    {title: "Paracas", url: 'ParacasInfo', img: require("../../../assets/images/cities/Paracas.png")},
    {title: "Huacachina", url: "HuacachinaInfo", img: require("../../../assets/images/cities/Huacachina.png")},
    {title: "Nazca", url: "NazcaInfo", img: require("../../../assets/images/cities/Nazca.png")},
    {title: "Arequipa", url: "ArequipaInfo", img: require("../../../assets/images/cities/Arequipa.png")},
    {title: "Puno", url: "PunoInfo", img: require("../../../assets/images/cities/Puno.png")},
    {title: "Cusco", url: "CuscoInfo", img: require("../../../assets/images/cities/Cusco.png")},
    {
        title: "RainbowMountain",
        url: "RainbowMountainInfo",
        img: require("../../../assets/images/cities/RainbowMountain.png")
    },
    {title: "MachuPicchu", url: "MachuPicchuInfo", img: require("../../../assets/images/cities/MachuPicchu.png")}
];

const info = [
    "Peru is a magical country full of history, culture, and magnificent scenery. We’ve compiled these helpful guides to " +
    "help you learn everything you need to know about each amazing destination."
];

export default class GuideToPeru extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCountryGuide navigation={this.props.navigation}
                                        title={'Guide to Perú'}
                                        data={items}
                                        description={info}/>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
};
