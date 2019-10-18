import React, {Component} from "react";
import {Container, Content, Text, View} from "native-base";
import {Image, Linking, ScrollView, TouchableOpacity} from "react-native";
import {Row} from "react-native-easy-grid";
import Footer from "../../../../components/common/Footer";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import TravelTips from "../../../../components/common/TravelTips";

const fontStyles = require("../../../../styles/fontStyles");
const utilsStyles = require("../../../../styles/utilsStyles");

export default class UyuniInfo extends Component {
    vista1=()=> {
        return (
            <View style={utilsStyles.accordionCollapse}>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/photoProps.png")}/></View>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Photo props</Text>
                        <Text style={{fontSize: 14}}>
                            Props are key to creative and interesting perspective photos on the salt flats.
                            Toy animals, saucepans, etc. can all be used in exciting ways to create unique and
                            intriguing photos.
                        </Text>
                    </View>
                </Row>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Cash</Text>
                        <Text style={{fontSize: 14}}>
                            ATMs are scarce in Uyuni and even the ones you do come across are often out of money.
                            Bring Bolivianos (Bolivian currency) with you for day to day expenses such as food, drink
                            and tipping drivers.
                        </Text>
                    </View>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/cash.png")}/></View>
                </Row>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/warmClothes.png")}/></View>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Thermals and warm gear</Text>
                        <Text style={{fontSize: 14}}>
                            Warm clothes, including hiking boots, a scarf, warm socks, gloves, a blanket,
                            a thermal shirt and a winter coat are essential. The scarf can also be used
                            to cover your nose and mouth from inhaling too much dust.
                        </Text>
                    </View>
                </Row>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Sun block</Text>
                        <Text style={{fontSize: 14}}>
                            There is a big risk of exposure to the sun when you’re out on the
                            flats and at 5,000 meters of altitude the power of the sun is not to be sniffed at.
                            The reflection of the salt flats emphasizes the effect of the sun, leading to intense
                            brightness and potential damage to your vision if you aren’t wearing sunglasses.
                        </Text>
                    </View>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/sunBlock.png")}/></View>
                </Row>
            </View>
        )
    };

    vista2=()=> {
        return (
            <View style={utilsStyles.accordionCollapse}>
                <Text style={fontStyles.bodyText}>
                    No matter what time of year you visit, you will find an incredibly enthralling sight.
                    The Salt Flats are blindingly glistening at any time of year, either resplendent in their
                    arid whiteness at dry season, or breathtaking under a layer of water in rain season.
                    Either way, you’ll no doubt cherish the visual spectacle they offer. Photographic outings
                    are the order of the day here, with stop overs on cactus-filled islets and salt-made hotels
                    also included in all explorations. The best highlight for many, however, is overnighting on the Salt
                    Flats,
                    enjoying a spectacular sunset and, if at all fathomable, an even more impressive sunrise. The
                    stillness and remoteness of the Uyuni Salt Flats is soul-reviving, so try not to rush your
                    experience if you can. Once here, we can guarantee, you’ll never want to leave.
                </Text>
            </View>
        )
    };

    vista3=()=> {
        return (
            <View style={utilsStyles.accordionCollapse}>
                <Text style={fontStyles.bodyText}>
                    • Do not lose sight of you luggage when taking public buses from Uyuni. Some bus companies might
                    'forget' and then it will be nearly impossible to get your luggage back. Watch them actually put
                    your luggage on the bus and make sure it is coming to your destination.{"\n"}
                    • It is better to spend a little more money on a tour company than go for the cheapest. A lot of
                    people going on an Uyuni trip, spend 3 days with car trouble in the cold desert instead of enjoying
                    the breath taking views. There are also some guides that steal from their passengers or drive drunk.
                    That can be dangerous on the road.{"\n"}
                    • Do not attempt to walk into the desert or cross it walking unless you are under expert advice.
                    People die there.
                </Text>
            </View>
        )
    };

    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/uyuniHeader.png")}
                                      title={'Uyuni'}/>
                    <Row style={{marginVertical: 15}}>
                        <Text style={fontStyles.bodyText}>
                            Bolivia’s Salar de Uyuni is considered one of the most and remarkable landscapes in all of
                            South America, if not the entire world. Stretching more than 10,582 square kilometers (4,050
                            square miles) of the Altiplano (a high plateau in the south of Bolivia) it is the world’s
                            largest salt flats, formed by evaporated prehistoric lakes.
                            The salt flats are Bolivia’s most popular attraction and visitors indulge in tours of the
                            area that include the nearby volcanoes, geysers, hot springs, and high-altitude lakes. One
                            and three day tours are most common.
                            The huge flat surface is famous around the world and truly has to be seen to be appreciated.
                        </Text>
                    </Row>
                    <TravelTips vista1={this.vista1()}
                                vista2={this.vista2()}
                                vista3={this.vista3()}/>
                    <TouchableOpacity style={{alignItems: "center", marginVertical: 30}}
                                      onPress={() =>
                                          Linking.openURL("https://www.findlocaltrips.com/salar-de-uyuni-tours-bolivia")}>
                        <Image source={require("../../../../assets/images/tours/uyuni-02.png")}
                               style={{width: "100%", height: 420}}
                               resizeMode="contain"/>
                    </TouchableOpacity>
                    <View style={{marginTop: 20}}>
                        <Image source={require("../../../../assets/images/tours/uyuni-01.png")}
                               style={{width: "100%", height: 620}}
                               resizeMode="contain"/>
                    </View>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
