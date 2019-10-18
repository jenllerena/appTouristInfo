import React, {Component} from "react";
import {Image} from "react-native";
import {Container, Content, Label, List, ListItem, Text, View} from "native-base";
import Footer from "../../../../../components/common/Footer";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityGuide from "../../../../../components/common/guide/city/Guide/CommonGuide";

const fontStyles = require("../../../../../styles/fontStyles");
const iconSize = require("../../../../../styles/iconsStyles");
const utilsStyles = require("../../../../../styles/utilsStyles");

const guideInfo = [
    {
        title: "Tours and Sightseeing in Nazca",
        guides: [
            {
                icon: require("../../../../../assets/icons/airplane.png"),
                info: "Fly over the Nazca Lines.",
            }, {
                icon: require("../../../../../assets/icons/viewing.png"),
                info: "Climb up to the top of the Nazca Lines viewing tower to see 3 of the Nazca Line drawings (included in Peru Hop passes).",
            }, {
                icon: require("../../../../../assets/icons/Frame.png"),
                info: "Walk around the town.",
            }
        ]
    }, {
        title: "Must see in Nazca",
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

export default class NazcaGuide extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/nazcaHeader.png")}
                                      title={'Nazca'}/>
                    <CityGuide dataArray={guideInfo}/>

                    <Label style={fontStyles.title_2}>
                        Extra Info:
                    </Label>
                    <List style={{marginBottom: 40}}>
                        <ListItem style={utilsStyles.listItem}>
                            <View style={iconSize.rectangle_8x7}>
                                <Image style={{width: 33, height: 33}}
                                       source={require("../../../../../assets/icons/airplane.png")}
                                />
                            </View>
                            <Text style={fontStyles.bodyText}>
                                <Text style={{color: "#8C1212", fontSize: 13}}>Coming from Lima and want to do the Nazca
                                    flight without staying overnight in Nazca?</Text>{"\n"}
                                There are private shuttles (50 soles, 2.5 hours) that make direct trips from Huacachina
                                to Nazca, which can be booked with your Peru Hop guide. The service includes pick up
                                directly from Huacachina (Casa de Arenas hostel) and drop off at the airport in Nazca
                                for the flight.
                                Afterwards you can Hop On the next Peru Hop bus from Mom’s Cafe.{"\n"}
                                <Text style={{color: "#8C1212", fontSize: 13}}>Coming from Cusco and want to do the
                                    flight?
                                </Text>{"\n"}
                                You can hop off the bus and take the next bus departing Nazca.
                            </Text>
                        </ListItem>
                        <ListItem style={utilsStyles.listItem}>
                            <View style={iconSize.rectangle_8x7}>
                                <Image style={{width: 32, height: 30}}
                                       source={require("../../../../../assets/icons/food.png")}
                                />
                            </View>
                            <Text style={fontStyles.bodyText}>
                                • Mom’s Cafe: Pick-up location in Nazca. {"\n"}
                                • La Encantada: Local peruvian food establishment.
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