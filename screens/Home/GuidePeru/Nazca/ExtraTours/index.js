import React, {Component} from "react";
import {Card, Container, Content, Label, Text, View} from "native-base";
import {Image} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import Footer from "../../../../../components/common/Footer";

const utilsStyles = require("../../../../../styles/utilsStyles");
const fontStyles = require("../../../../../styles/fontStyles");
const iconSize = require("../../../../../styles/iconsStyles");

export default class NazcaExtraTours extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/nazcaHeader.png")}
                                      title={'Nazca'}/>
                    <Label style={fontStyles.title_1}>
                        Nazca Lines
                    </Label>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center", marginBottom: 100}}>
                        <Image source={require("../../../../../assets/images/tours/nazcaLines.png")}
                               style={{width: "100%"}}/>
                        <Card style={{
                            backgroundColor: '#EBECEC',
                            justifyContent: 'center',
                            position: "absolute",
                            width: "90%",
                            top: "50%",
                            padding: "2%"
                        }}>
                            <Text style={fontStyles.bodyText}>
                                Take a flight over the world-famous <Text style={{color: "#8C1212", fontSize: 13}}>
                                Nazca Lines! </Text>These lines, some over 2,000 years old,
                                have <Text style={{color: "#8C1212", fontSize: 13}}>blown away </Text>
                                historians and archeologists for hundreds of years, and even today there
                                is no consensus as to how or why they were created...some even believe they where
                                created by aliens! They vary from simple lines and geometric forms to diverse and
                                complex figures. Spreading over almost 80km of desert and
                                <Text style={{color: "#8C1212", fontSize: 13}}> mysteriously </Text>can only be
                                interpreted from above (yet they date from a time way before there was any means of
                                aerial flight...)
                            </Text>
                        </Card>
                    </View>
                    <View>
                        <Text style={fontStyles.title_1}>
                            FLIGHT TOUR{"\n"}
                            <Text style={{fontSize: 20}}>DAILY 8AM - 2PM</Text>
                        </Text>
                        <Text style={fontStyles.bodyText}>
                            • <Text style={{fontSize: 13, fontWeight: 'bold'}}>TOUR OPERATOR – AERONASCA</Text>
                            {"\n"}• <Text style={{fontSize: 13, fontWeight: 'bold'}}>PRICE – $80 </Text>
                            (not included: 30 soles airport tax, must be paid upon arrival).{"\n"}
                            • <Text style={{fontSize: 13}}> TIME – The time of the flight can be
                            arranged when you book with your Peru Hop guide. Flight conditions are best during the
                            morning when winds are favorable. Flight times vary and it is impossible to get an exact
                            time as it depends on the prevailing weather conditions.</Text>
                            {"\n"}• <Text style={{fontSize: 13, fontWeight: 'bold'}}>DURATION – 25 minutes flight
                            time.</Text>{"\n"}
                            Exclusive for Peru Hop passengers: Includes Cantalloc aqueducts.
                        </Text>
                        <View style={{alignItems: 'center', marginVertical: 10}}>
                            <Image source={require("../../../../../assets/images/tours/nazcaLines2.png")}
                                   style={{width: "90%", height: 190}}
                                   resizeMode="contain"/>
                        </View>
                        <View style={utilsStyles.rectangle_color}>
                            <Text style={[fontStyles.bodyText, {color: "#fff"}]}>
                                HOW TO BOOK ANY OF THE TOURS? {"\n"}
                                1. ON BOARD THE BUS - direct with your Peru Hop guide. CASH ONLY{"\n"}
                                2. ADVANCE BOOKING - via the Peru Hop webpage tour section. CARD ONLY.
                            </Text>
                        </View>
                        <View>
                            <Text style={[fontStyles.bodyText, {textAlign: "center", fontWeight:"bold"}]}>
                                IMPORTANT: You MUST present your ORIGINAL passport at the airport before the flight.
                            </Text>
                        </View>
                        <View style={utilsStyles.noteCard}>
                            <Text style={[fontStyles.bodyText, {color: "#fff"}]}>
                                NOTE: None of the extra tours are operated by Peru Hop –
                                we work with the local communities. Our partner operators are NOT the cheapest
                                NOR the most expensive. We work with these operators as they are safe, reliable
                                and give the best value for money based on our years of experience trying all operators.
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