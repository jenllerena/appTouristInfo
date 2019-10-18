import React, {Component} from "react";
import {Card, Container, Content, Label, Text, View} from "native-base";
import {Image} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import Footer from "../../../../../components/common/Footer";

const utilsStyles = require("../../../../../styles/utilsStyles");
const fontStyles = require("../../../../../styles/fontStyles");

export default class HuacachinaExtraTours extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader
                        image={require("../../../../../assets/images/backgrounds/huacachinaHeader.png")}
                        title={'Huacachina'}/>
                    <View>
                        <Label style={fontStyles.title_1}>
                            sandBoarding
                        </Label>
                        <View style={{flex: 1, justifyContent: "center", alignItems: "center", marginBottom: 100}}>
                            <Image source={require("../../../../../assets/images/tours/tourHuacachina.png")}
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
                                    The incredible desert oasis of Huacachina has quickly become Peru’s sandboarding
                                    capital.
                                    Hop on a dune buggy and be taken on a
                                    <Text style={[fontStyles.bodyText, {color: "#8C1212", fontWeight: 'bold'}]}> roller
                                        coaster </Text>
                                    ride through the stunning desert to the very top of the
                                    <Text style={[fontStyles.bodyText, {color: "#8C1212", fontWeight: 'bold'}]}> LARGEST
                                        DUNES </Text> in South America. Buggy up, sandboard down! Sandboarding should be
                                    done lying flat on your stomach face first. Accidents happen frequently to people
                                    who attempt to
                                    stand up on the boards - do not ruin your trip. We <Text
                                    style={[fontStyles.bodyText,
                                        {color: "#8C1212", fontWeight: 'bold'}]}>strongly
                                </Text> recommend this tour, not just for the
                                    <Text style={[fontStyles.bodyText, {
                                        color: "#8C1212",
                                        fontWeight: 'bold'
                                    }]}> adrenaline </Text>
                                    rush,but for the stunning panoramic views of the desert and oasis.
                                </Text>
                            </Card>
                        </View>
                    </View>
                    <View>
                        <View style={{marginVertical: 20}}>
                            <Text style={fontStyles.title_1}>
                                2 HOUR TOUR {"\n"}
                                <Text style={{fontSize: 20}}>EVERY AFTERNOON</Text>
                            </Text>
                            <Text style={fontStyles.bodyText}>
                                • TOUR OPERATOR – ARENAS{"\n"}
                                • MEETING PLACE – CAROLA DEL SUR - CONFIRM TIME WITH GUIDE (NO HOSTEL PICK UP){"\n"}
                                • DURATION – 2 hours{"\n"}
                                • WHAT TO BRING/WEAR{"\n"}
                                Trainers, sunglasses, sunblock, water and a jumper / hoodie (it gets chilly when the sun
                                goes down!)
                                Remember to bring your camera as well, but be careful about exposing it to the sand.
                            </Text>
                        </View>
                        <View style={{alignItems: 'center', marginVertical: 10}}>
                            <Image source={require("../../../../../assets/images/tours/sunBoarding.png")}
                                   style={{width: "90%", height: 240}}
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
                            <Text style={[fontStyles.bodyText, {textAlign: "center"}]}>
                                Confirm meeting time with guide and do not be late.{"\n"}
                                * Warning: For your safety do not attempt to stand on the boards while sandboarding.
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