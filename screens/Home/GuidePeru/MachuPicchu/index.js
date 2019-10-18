import React, {Component} from "react";
import {Container, Content, Text, View} from "native-base";
import {FlatList, Image, Linking, ScrollView, TouchableOpacity} from "react-native";
import {Row} from "react-native-easy-grid";
import Footer from "../../../../components/common/Footer";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import TravelTips from "../../../../components/common/TravelTips";

const fontStyles = require("../../../../styles/fontStyles");
const utilsStyles = require("../../../../styles/utilsStyles");

const dataArray = [
    {title: "The GuardHouse", img: require("../../../../assets/images/touristSpot/guardhouse.png")},
    {title: "Huayna Picchu", img: require("../../../../assets/images/touristSpot/huaynaPicchu.png")},
    {title: "Intihuatana", img: require("../../../../assets/images/touristSpot/intihuatana.png")},
    {title: "Inca bridge", img: require("../../../../assets/images/touristSpot/incaBridge.png")},
    {title: "Main Temple", img: require("../../../../assets/images/touristSpot/mainTemple.png")},
    {title: "Royal Tomb", img: require("../../../../assets/images/touristSpot/royalTomb.png")},
    {title: "The Sacred Plaza", img: require("../../../../assets/images/touristSpot/sacredPlaza.png")},
    {title: "Sun Gate", img: require("../../../../assets/images/touristSpot/sunGate.png")},
    {title: "Sacred Rock", img: require("../../../../assets/images/touristSpot/sacredRock.png")},
    {title: "Temple of the Moon", img: require("../../../../assets/images/touristSpot/templeofthemoon.png")},
    {title: "Temple of the Sun", img: require("../../../../assets/images/touristSpot/templeofthesun.png")},
    {title: "Temple of the 3 windows", img: require("../../../../assets/images/touristSpot/temple3windows.png")}
];
export default class MachuPicchuInfo extends Component {
    vista1 = () => {
        return (
            <View style={utilsStyles.accordionCollapse}>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/foodwater.png")}/></View>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Food / Water</Text>
                        <Text style={{fontSize: 14}}>
                            It’s a good idea to bring snacks for your trip to Machu Picchu.
                            Prices increase and options decrease as you get into Aguas Calientes. Bring your own water.
                        </Text>
                    </View>
                </Row>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>What should you wear?</Text>
                        <Text style={{fontSize: 14}}>It’s a good idea to bring snacks for your trip to Machu Picchu.
                            Prices increase and options decrease as you get into Aguas Calientes. Bring your own water.
                        </Text>
                    </View>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/tshirt.png")}/></View>
                </Row>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/luggage.png")}/></View>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Essentials</Text>
                        <Text style={{fontSize: 14}}>
                            - Official I.D. (passport)
                            - Entry tickets
                            - Insect repellant - Camera
                            - Water/snacks
                        </Text>
                    </View>
                </Row>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>
                            Currency
                        </Text>
                        <Text style={{fontSize: 14}}>
                            Peruvian Soles (S./)
                            American Dollars ($)
                            If you need to use the bathroom in Machu Picchu, make sure you bring a 1 sol coin.
                        </Text>
                    </View>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/currency.png")}/></View>
                </Row>
            </View>
        )
    };

    vista2 = () => {
        return (
            <View style={utilsStyles.accordionCollapse}>
                <FlatList inset={true}
                          data={dataArray}
                          numColumns={2}
                          renderItem={({item}) => (
                              <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, margin: 10}}>
                                  <Image
                                      source={item.img}
                                  />
                                  <Text style={{color: "#000", fontSize: 13}}>{item.title}</Text>
                              </View>
                          )}
                          keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    };

    vista3 = () => {
        return (
            <View style={utilsStyles.accordionCollapse}>
                <Text style={fontStyles.bodyText}>
                    • If travelling to Machu Picchu on your own, you will probably go by minibus or taxi (at least part
                    of the way).
                    They often drive dangerously on narrow roads on steep cliffs with hairpin turns.
                    Accidents happen all the time so try to avoid travelling like this or at least make sure not to
                    drive
                    after sun down or during rainy season.{"\n"}
                    • Tour operators need two certificates, one from the city and one from the tourist board.{"\n"}
                    • Make sure they have one of each hanging in their office.{"\n"}
                    • Like all touristic sites, keep an eye on your valuable items.
                </Text>
            </View>
        )
    };

    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/machuPicchuHeader.png")}
                                      title={'Machu Picchu'}/>
                    <Row style={{marginVertical: 15}}>
                        <Text style={fontStyles.bodyText}>
                            Machu Picchu, considered one of the 7 New World Wonders, is the most famous tourist
                            attraction in Peru. A 550-year old citadel built close to Cusco in a spectacular setting
                            nestled between Andean peaks. The Inca citadel belongs to that exclusive little club of
                            true global icons, standing alongside the likes of The Great Wall of China and the Taj
                            Mahal as a symbol of wonder and beauty. Cusco is packed full of tour operators and tour
                            agencies offering every type of package to visit the Inca ruins. Controls and restrictions
                            on these agencies are non-exsistent and the quality of many are extremely inconsistent.
                            We recommend FindLocalTrips for operators you can trust.
                        </Text>
                    </Row>
                    <TravelTips vista1={this.vista1()}
                                vista2={this.vista2()}
                                vista3={this.vista3()}/>

                    <View>
                        <TouchableOpacity style={{alignItems: "center", marginVertical: 10}}
                                          onPress={() =>
                                              Linking.openURL("https://www.findlocaltrips.com/tour-details/train-to-machu-picchu-1-day-cusco-native")}>
                            <Image source={require("../../../../assets/images/tours/dataTourMachuPicchu1.png")}
                                   style={{width: "70%", height: 340}}
                                   resizeMode="contain"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: "center", marginVertical: 10}}
                                          onPress={() =>
                                              Linking.openURL("https://www.findlocaltrips.com/tour-details/sacred-valley-machu-picchu-2days-1night-haku-travel")}>
                            <Image source={require("../../../../assets/images/tours/dataTourMachuPicchu2.png")}
                                   style={{width: "70%", height: 400}}
                                   resizeMode="contain"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: "center", marginVertical: 10}}
                                          onPress={() =>
                                              Linking.openURL("https://www.findlocaltrips.com/tour-details/salkantay-trek-5days-4nights-haku-travel")}>
                            <Image source={require("../../../../assets/images/tours/dataTourMachuPicchu3.png")}
                                   style={{width: "65%", height: 540}}
                                   resizeMode="contain"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: "center", marginVertical: 10}}
                                          onPress={() =>
                                              Linking.openURL("https://www.findlocaltrips.com/tour-details/the-inca-jungle-trek-4days-3nights-haku-travel")}>
                            <Image source={require("../../../../assets/images/tours/dataTourMachuPicchu4.png")}
                                   style={{width: "60%", height: 600}}
                                   resizeMode="contain"/>
                        </TouchableOpacity>
                    </View>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}