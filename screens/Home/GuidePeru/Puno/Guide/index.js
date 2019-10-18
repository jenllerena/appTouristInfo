import React, {Component} from "react";
import {Container, Content, Label, List, ListItem, Text, View} from "native-base";
import Footer from "../../../../../components/common/Footer";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityGuide from "../../../../../components/common/guide/city/Guide/CommonGuide";
import {Image} from "react-native";

const fontStyles = require("../../../../../styles/fontStyles");
const iconSize = require("../../../../../styles/iconsStyles");
const utilsStyles = require("../../../../../styles/utilsStyles");

const guideInfo = [
    {
        title: "Tours and Sightseeing in Puno",
        guides: [
            {
                icon: require("../../../../../assets/icons/lakeTiticaca.png"),
                info: "Take a boat trip on the highest navigable lake in the world, Lake Titicaca.",
            }, {
                icon: require("../../../../../assets/icons/stars.png"),
                info: "Stay overnight on Amantani Island.",
            }, {
                icon: require("../../../../../assets/icons/Frame_2.png"),
                info: "Visit the legendary floating islands of Uros.",
            },
            {
                icon: require("../../../../../assets/icons/shop.png"),
                info: "Shop at the weekend market in Puno.",
            }
        ]
    }, {
        title: "Must see in Puno",
        guides: [
            {
                icon: require("../../../../../assets/icons/burialTowers.png"),
                info: "Go and see the Sillustani burial towers.",
            }, {
                icon: require("../../../../../assets/icons/viewing.png"),
                info: "Visit “Condor Hill” viewpoint.",
            }
        ]
    }
];

export default class PunoGuide extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/punoHeader.png")}
                                      title={'Puno'}/>
                    <CityGuide dataArray={guideInfo}/>
                    <Text style={[fontStyles.bodyText, {marginTop: -30}, {marginBottom: 20}]}>
                        A huge metal condor bird sits at one of the most extraordinary vantage points to view
                        the city and the lake. The monument stands at the end of a 620-step staircase—so wear
                        proper walking shoes. For safety reasons visit in the morning or early afternoon only.
                    </Text>
                    <Label style={fontStyles.title_2}>
                        Extra Info:
                    </Label>
                    <List style={{marginBottom: 20}}>
                        <ListItem style={utilsStyles.listItem}>
                            <View style={iconSize.rectangle_8x7}>
                                <Image style={{width: 33, height: 33}}
                                       source={require("../../../../../assets/icons/food.png")}
                                />
                            </View>
                            <Text style={fontStyles.bodyText}>
                                • Incabar Salon (Jr Lima 661): Typical Andean cuisine. Located on the central Plaza de
                                Armas.{"\n"}
                                • Pizzeria del Buho (Libertad 240): The best wood-oven baked pizzas in town!
                            </Text>
                        </ListItem>
                    </List>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </Content>
            </Container>
        )
    }
}