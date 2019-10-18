import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../../components/common/Footer";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityGuide from "../../../../../components/common/guide/city/Guide/CommonGuide";

const guideInfo = [
    {
        title: "Tours and Sightseeing in La Paz",
        guides: [
            {
                icon: require("../../../../../assets/icons/bicycle.png"),
                info: "Mountain bike the “World’s Most Dangerous Road”, aka Death Road.",
            }, {
                icon: require("../../../../../assets/icons/shop.png"),
                info: " Wander around the Witches Market (it’s as interesting as it sounds).",
            }, {
                icon: require("../../../../../assets/icons/cableCar.png"),
                info: "Get the best view of the city riding one of the cable cars.",
            },
            {
                icon: require("../../../../../assets/icons/wrestling.png"),
                info: "Watch the uniquely Bolivian tradition of Cholita Wrestling.",
            }
        ]
    }, {
        title: "Must see in La Paz",
        guides: [
            {
                icon: require("../../../../../assets/icons/Frame_1.png"),
                info: "Walk through Jaen Street and go into 5 of La Paz’s most interesting museums.",
            }, {
                icon: require("../../../../../assets/icons/Frame_3.png"),
                info: "Visit the Cementerio General (cemetery) where you’ll learn about the Bolivian traditions for mourning the dead.",
            },
            {
                icon: require("../../../../../assets/icons/viewing.png"),
                info: "View the whole city from various viewpoints in El Alto.",
            }
        ]
    }, {
        title: "Extra Info",
        guides: [
            {
                icon: require("../../../../../assets/icons/food.png"),
                info: "• The Carrot Tree: International cuisine in the centre of La Paz. Great food and great atmosphere. Close to our office.\n" +
                    "• Sol y Luna: Dutch-owned café bar serving great international food and cocktails.\n" +
                    "• Steakhouse: Grilled Meat in every size, Mixed Plates, All-You-Can-Eat-Spareribs and\n" +
                    "free Salad Bar.\n" +
                    "• Gustu: Owned by the co-founder of the second best restaurant in the world, Gustu offers some of the best food in South America. 45 mins. taxi from downtown.\n" +
                    "• Wild Rover: Considered by many the highest Irish bar in the world, it is part of the famous Irish chain. Great food, lively bar and overall amazing atmosphere.",
            }, {
                icon: require("../../../../../assets/icons/level.png"),
                info: "La Paz is the world’s highest administrative capital in the world at 3,640m above sea level.",
            },
            {
                icon: require("../../../../../assets/icons/Frame.png"),
                info: " Daily walking tour: Discover most of the city with one of the main walking tours that include: The Witches’ Market, Cable Cars, Cholita Wrestling and more.",
            }
        ]
    }
];

export default class LaPazGuide extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/laPazHeader.png")}
                                      title={'La Paz'}/>
                    <CityGuide dataArray={guideInfo}/>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </Content>
            </Container>
        )
    }
}