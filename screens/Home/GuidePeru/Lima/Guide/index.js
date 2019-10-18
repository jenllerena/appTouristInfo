import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../../components/common/Footer";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityGuide from "../../../../../components/common/guide/city/Guide/CommonGuide";

const guideInfo = [
    {
        title: "Tours and Sightseeing in Lima",
        guides: [
            {
                icon: require("../../../../../assets/icons/Frame.png"),
                info: "Free walking tour of downtown Lima and Barranco.",
            }, {
                icon: require("../../../../../assets/icons/Frame_1.png"),
                info: "Evening visit to the Circuito Magico del Agua (Lima’s famous magic water fountain park).",
            }, {
                icon: require("../../../../../assets/icons/Frame_2.png"),
                info: "Eat peruvian cuisine, especially seafood. Lima is latin america's top culinary destination.",
            }
        ]
    }, {
        title: "Must see in Lima",
        guides: [
            {
                icon: require("../../../../../assets/icons/Frame_1.png"),
                info: "Circuito Magico del Agua: One of our favourite activities in Lima, and if you still have energy " +
                    "after a day in Lima’s old town, head to the Parque de la Reserva for this delightful water and " +
                    "light show which takes places after sunset",
            }, {
                icon: require("../../../../../assets/icons/island.png"),
                info: "Costa Verde: Aroad and walkaway along the coast of Lima which joins and pases through the districts of Callao, San Miguel, Magdalena, San Isidro, Miraflores, Barranco and Chorrillos (although we recommend staying within Miraflores and Barranco).",
            }
        ]
    }, {
        title: "Extra Info",
        guides: [
            {
                icon: require("../../../../../assets/icons/restaurantIcon.png"),
                info: "Miraflores is Home to 1 of the top 10 restaurants in the world; Maido It is usually required to book in advance, but if it is feasible budget and time-wise, this restaurant offer trully un-missable experience.",
            }, {
                icon: require("../../../../../assets/icons/fish.png"),
                info: "Due to Lima’s coastal location and world renowed cuisine,it is one of the best places to eat fresh seafood which is brought in daily.",
            }, {
                icon: require("../../../../../assets/icons/Frame_3.png"),
                info: "Visit the catacombs under the convent of San Francisco and see the remains of 75000 bodies stacked in strange decorative patterns.",
            }
        ]
    }
];


export default class LimaGuide extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/lima-header.png")}
                                      title={'Lima'}/>
                    <CityGuide dataArray={guideInfo}/>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </Content>
            </Container>
        )
    }
}