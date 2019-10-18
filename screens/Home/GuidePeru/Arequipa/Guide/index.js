import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../../components/common/Footer";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityGuide from "../../../../../components/common/guide/city/Guide/CommonGuide";

const guideInfo = [
    {
        title: "Tours and Sightseeing in Arequipa",
        guides: [
            {
                icon: require("../../../../../assets/icons/colca.png"),
                info: "Tour or trek the Colca Canyon, the second deepest canyon in the world.",
            }, {
                icon: require("../../../../../assets/icons/Frame.png"),
                info: "Walking tour of Arequipa Historical Centre, a UNESCO world heritage site.",
            }, {
                icon: require("../../../../../assets/icons/monasterio.png"),
                info: "Visit the Monasterio de Santa Catalina and step back in time more than 400 years. " +
                    "Admire this fascinating collection of coloured buildings in Iberian style, formerly home to 450 nuns.",
            },
            {
                icon: require("../../../../../assets/icons/food.png"),
                info: "Try the local cuisine at one of the ‘Picanterias’ around Arequipa.",
            }
        ]
    }, {
        title: "Must see in Arequipa",
        guides: [
            {
                icon: require("../../../../../assets/icons/sunsetIcon.png"),
                info: "Go see the Mummy Juanita also known as the Inca Ice Maiden, the ice preserved mummy of a small child who was killed as an offering to the Inca gods.",
            }, {
                icon: require("../../../../../assets/icons/island.png"),
                info: "Check out the exhibitions from one of the many museums in Arequipa.",
            }
        ]
    }, {
        title: "Extra Info",
        guides: [
            {
                icon: require("../../../../../assets/icons/monasterio.png"),
                info: "Santa Catalina Monastery: Founded in 1579, this historical monastery now opens its doors to the public and is famed for its colorful architecture and intriguing past.",
            }, {
                icon: require("../../../../../assets/icons/Frame.png"),
                info: " Free walking tour: Daily city tour run by local university students operated on a tip - only basis. Highly recommended.",
            }
        ]
    }
];

export default class ArequipaGuide extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/arequipaHeader.png")}
                                      title={'Arequipa'}/>
                    <CityGuide dataArray={guideInfo}/>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </Content>
            </Container>
        )
    }
}