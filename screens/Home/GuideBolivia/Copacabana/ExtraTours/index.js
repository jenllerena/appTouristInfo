import React, {Component} from "react";
import {Card, Container, Content, Label, Text, View} from "native-base";
import {Image} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import Footer from "../../../../../components/common/Footer";

const utilsStyles = require("../../../../../styles/utilsStyles");
const fontStyles = require("../../../../../styles/fontStyles");
const theme = require("../../../../../styles/themeColors");

export default class CopacabanaExtraTours extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader
                        image={require("../../../../../assets/images/backgrounds/copacabanaHeader.png")}
                        title={'Copacabana'}/>
                    <Label style={fontStyles.title_1}>
                        Isla del Sol
                    </Label>
                    <View style={{alignItems: "center", marginBottom: 100}}>
                        <Image source={require("../../../../../assets/images/tours/copacabanaTour.png")}
                               style={{width: "100%"}}/>
                        <Card style={utilsStyles.cardExtraTour}>
                            <Text style={fontStyles.bodyText}>
                                Join us on our <Text
                                style={[fontStyles.bodyText, {
                                    color: theme.secondaryColor,
                                    fontWeight: 'bold'
                                }]}>private </Text>
                                Bolivia Hop boat to Isla del Sol. The round trip lasts approx.
                                4hrs and costs $10USD (the tour can be purchased on the bus). You will be dropped off by the Pilcokaina Inca Temple from where you have an hour walk passing by the best southern viewpoint on the way to the port of Yumani. This port is famous for an ancient Incan stairway and water fountains that still run to this day.
                                <Text style={[fontStyles.bodyText, {
                                    color: theme.secondaryColor,
                                    fontWeight: 'bold'
                                }]}> NOTE: this
                                    is a private boat trip and NOT a guided tour. </Text>
                                Public boats from Copacabana take 2hrs. to make the crossing to the Island. Our faster
                                twin-engine boat does it in 70mins.<Text
                                style={[fontStyles.bodyText, {color: theme.secondaryColor, fontWeight: 'bold'}]}>Colca
                            </Text>
                            </Text>
                        </Card>
                    </View>
                    <View>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require("../../../../../assets/images/tours/copacabanaTour2.png")}
                                   style={{width: "90%", height: 200}}
                                   resizeMode="contain"/>
                        </View>
                        <View style={utilsStyles.rectangle_color}>
                            <Text style={[fontStyles.bodyText, {color: "white"}]}>
                                IMPORTANT!{"\n"}
                                - The boat MUST leave on time! Please DO NOT BE LATE or the boat may leave without you. Those arriving from Peru remember that Bolivia is +1 hour time difference.{"\n"}
                                - The trail can easily be completed in 40minutes. You have over 1 hour but do not take too long at the sun temple or viewpoint (10 minutes at each).{"\n"}
                                - The trek is done at over 3,800m. Don’t fancy the walk? Just remain on the boat to Yumani where you can visit the island town, have a lakeside drink and wait until the rest catch up to join you.
                            </Text>
                        </View>
                        <View style={utilsStyles.noteCard}>
                            <Text style={[fontStyles.bodyText, {color: "white"}]}>
                                NOTE: None of the extra tours are operated by Bolivia Hop – we work with the local communities.
                                Our partner operators are NOT the cheapest NOR the most expensive. We work with these operators as they are safe,
                                reliable and give the best value for money based on our years of experience trying all operators.
                            </Text>
                        </View>
                        <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                            <Footer/>
                        </Content>
                    </View>
                </Content>
            </Container>
        )
    }
}