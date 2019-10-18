import React, {Component} from "react";
import {Image} from "react-native";
import {Card, Container, Content, Label, List, ListItem, Text, View} from "native-base";
import Footer from "../../../../../components/common/Footer";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityGuide from "../../../../../components/common/guide/city/Guide/CommonGuide"

const fontStyles = require("../../../../../styles/fontStyles");
const iconSize = require("../../../../../styles/iconsStyles");
const utilsStyles = require("../../../../../styles/utilsStyles");

const guideInfo = [
    {
        title: "Tours and Sightseeing in Huacachina",
        guides: [
            {
                icon: require("../../../../../assets/icons/car.png"),
                info: "Sunboarding and Dune Buggying.",
            }, {
                icon: require("../../../../../assets/icons/pisco.png"),
                info: "Pisco Vineyard tour.",
            }, {
                icon: require("../../../../../assets/icons/Frame.png"),
                info: "Walk around the famous oasis village.",
            }
        ]
    }, {
        title: "Must see in Huacachina",
        guides: [
            {
                icon: require("../../../../../assets/icons/sunsetIcon.png"),
                info: "Climb the dunes in the late evening and witness a memorable desert sunset.",
            }, {
                icon: require("../../../../../assets/icons/ballestas.png"),
                info: "The incredible view of the sunset from the sand dunes is one you should not miss if you make it" +
                    " to Huacachina. Scramble up the dunes on foot or catch the sunset at the end of a dune buggy tour.",
            }
        ]
    }
];

export default class HuacachinaGuide extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader
                        image={require("../../../../../assets/images/backgrounds/huacachinaHeader.png")}
                        title={'Huacachina'}/>
                    <CityGuide dataArray={guideInfo}/>
                    <Label style={fontStyles.title_2}>
                        Extra Info:
                    </Label>
                    <List style={{marginBottom: 40}}>
                        <ListItem style={utilsStyles.listItem}>
                            <View style={iconSize.rectangle_8x7}>
                                <Image style={{width: 27, height: 26}}
                                       source={require("../../../../../assets/icons/restaurantIcon.png")}
                                />
                            </View>
                            <View>
                                <Text style={fontStyles.bodyText}>
                                    <Text style={{fontWeight: 'bold', fontSize: 13}}>Food: {"\n"}</Text>
                                    Wild Olive: Delicious italian food. <Text style={{color: '#8C1212', fontSize: 13}}>
                                    20% off for Peru Hop passengers.</Text>{"\n"}
                                    Desert Nights Cafe: The best coffee in town. <Text
                                    style={{color: '#8C1212', fontSize: 13}}>
                                    20% off for Peru Hop passengers.</Text>{"\n"}
                                    Wild Rover: Lively bar with great food and excellent parties.{"\n"}
                                </Text>
                                <Card style={{backgroundColor: '#8C1212', marginLeft: 30, marginRight: 30, padding: 3}}>
                                    <Text style={{color: "#fff", fontSize: 13}}>Food and drink
                                        discounts do not apply to special offers such as daily menu or happy hour
                                        since these offers are already at the lowest possible price.
                                    </Text>
                                </Card>
                            </View>
                        </ListItem>
                        <ListItem style={utilsStyles.listItem}>
                            <View style={iconSize.rectangle_8x7}>
                                <Image style={{width: 34, height: 30}}
                                       source={require("../../../../../assets/icons/warning.png")}
                                />
                            </View>
                            <View style={{marginRight: 10}}>
                                <Text style={[fontStyles.bodyText, {fontWeight: 'bold'}]}>
                                    There is NO cash machine in Huacachina. Plan ahead and take out sufficient cash in
                                    Lima or Paracas.
                                </Text>
                            </View>
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