import React, {Component} from "react";
import {Container, Content, List, ListItem, Text, View} from "native-base";
import {Image, ScrollView} from "react-native";
import {Row} from "react-native-easy-grid";
import Footer from "../../../../components/common/Footer";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import TravelTips from "../../../../components/common/TravelTips";

const fontStyles = require("../../../../styles/fontStyles");
const utilsStyles = require("../../../../styles/utilsStyles");
const iconSize = require("../../../../styles/iconsStyles");

export default class RainbowMountainInfo extends Component {
    vista1 = () => {
        return (
            <View style={{
                backgroundColor: "#F5F5F5",
                padding: 10,
                marginHorizontal: 10
            }}>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/bottle.png")}/></View>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Lots of water</Text>
                        <Text style={{fontSize: 14}}>
                            Make sure to bring plenty of water for your hike to Rainbow Mountain,
                            since high altitude can cause dehydration.
                        </Text>
                    </View>
                </Row>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Rain Jackets</Text>
                        <Text style={{fontSize: 14}}>
                            There is occasional rain or snow at Rainbow Mountain, so make sure you come prepared with a
                            rain jacket or poncho.
                        </Text>
                    </View>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/rainjacket.png")}/></View>
                </Row>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/cocaLeave.png")}/></View>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Coca Leaves</Text>
                        <Text style={{fontSize: 14}}>
                            Chew coca leaves to relieve some of the symptoms of altitude sickness.
                        </Text>
                    </View>
                </Row>
                <Row style={{marginVertical: 10}}>
                    <View style={{width: '60%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Sun block</Text>
                        <Text style={{fontSize: 14}}>
                            The sun can be very dangerous at high altitudes, so make sure you wear sunscreen with a high
                            SPF.
                        </Text>
                    </View>
                    <View style={{width: '40%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../../../../assets/icons/sunBlock.png")}/></View>
                </Row>
            </View>
        )
    };

    vista2 = () => {
        return (
            <View style={{
                backgroundColor: "#F5F5F5",
                padding: 10,
                marginHorizontal: 10
            }}>
                <Text style={fontStyles.bodyText}>
                    • Rainbow Mountain is at an altitude of more than half of Mount Everest{"\n"}
                    • It is also known as Vinicunca, a word originating from Peru’s native tongue Quechua, which
                    translates to “colored mountain”.{"\n"}
                    • The mountain is made up of 14 different, colorful minerals.{"\n"}
                    • Just 4 years ago it was entirely covered in snow, making it impossibe to fully witness the beauty
                    of the mountain.{"\n"}
                    • Temperatures still drop below 0 at night – good to know for anyone visiting Rainbow Mountain on a
                    multi-day Ausangate trek.{"\n"}
                    • Llamas and alpacas can be seen dotted all along the route to Vinicunca.{"\n"}
                    • Weather can change rapidly from snow to rain to blistering sun in the space of an hour.{"\n"}
                    • You can rent a horse at any point on the way if you begin to find the trek difficult – you do not
                    need to have one hired from the beginning
                </Text>
            </View>
        )
    };

    vista3 = () => {
        return (
            <View style={{
                backgroundColor: "#F5F5F5",
                padding: 10,
                marginHorizontal: 10
            }}>
                <Text style={fontStyles.bodyText}>
                    • Beat the altitude by chewing on coca leaves. This trick really works!. {"\n"}
                    • Be sure to bring a small backpack with lots of water, snacks and toilet roll.{"\n"}
                    • The entrance fee to the park is 10 Soles and usually isn’t included in Rainbow Mountain Tour
                    packages.{"\n"}
                    • Make sure to bring a varied range of clothing, the weather changes quite often on the mountain so
                    it is important to be prepared for it all.{"\n"}
                    • It is possible to take a horseback ride up the mountain if you feel it may be too strenuous for
                    parts of the trek.{"\n"}
                    • The tour operates as normal during December, January, and February, however occasionally
                    visibility may be limited due to the changeable weather.
                </Text>
            </View>
        )
    };

    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/rainbowMheader.png")}
                                      title={'Rainbow Mountain'}/>
                    <Row style={{marginVertical: 15}}>
                        <Text style={[fontStyles.bodyText]}>
                            Peru’s latest “Must See” attraction is Rainbow Mountain. It’s local name is Vinicunca, also
                            called Montaña de Siete Colores. The mountain located close to Cusco has an altitude of
                            5,200 meters and can be visited on a one day trip. Use our recommended operator to ensure
                            you beat the flocks of tourists to the summit.
                        </Text>
                    </Row>
                    <TravelTips vista1={this.vista1()}
                                vista2={this.vista2()}
                                vista3={this.vista3()}/>
                    <Row>
                        <View style={utilsStyles.containers}>
                            <Text style={fontStyles.title_1}>
                                Recommended Operator
                            </Text>
                        </View>
                    </Row>
                    <View style={{margin: 30, alignItems: 'center'}}>
                        <Image source={require("../../../../assets/images/logos/rainbowM.png")}/>
                    </View>
                    <Row>
                        <View style={utilsStyles.containers}>
                            <Row style={{justifyContent: 'center'}}>
                                <View style={iconSize.circleIcon}>
                                    <Image source={require("../../../../assets/icons/kit.png")}/>
                                    <Text style={fontStyles.iconText}>First Aid Kits</Text>
                                </View>
                                <View style={iconSize.circleIcon}>
                                    <Image source={require("../../../../assets/icons/oxygen.png")}/>
                                    <Text style={fontStyles.iconText}>Oxygen Tanks</Text>
                                </View>
                                <View style={iconSize.circleIcon}>
                                    <Image
                                        source={require("../../../../assets/icons/guide.png")}
                                    />
                                    <Text style={fontStyles.iconText}>Official Guides</Text>
                                </View>
                            </Row>
                            <Row style={{justifyContent: 'center'}}>
                                <View style={iconSize.circleIcon}>
                                    <Image
                                        source={require("../../../../assets/icons/uinfo.png")}
                                    />
                                    <Text style={fontStyles.iconText}>Updated Info</Text>
                                </View>
                                <View style={iconSize.circleIcon}>
                                    <Image
                                        source={require("../../../../assets/icons/guarante.png")}
                                    />
                                    <Text style={fontStyles.iconText}>Value Guarante</Text>
                                </View>
                            </Row>
                        </View>
                    </Row>
                    <View style={{marginTop: 20}}>
                        <List>
                            <ListItem style={utilsStyles.listItem}>
                                <View style={iconSize.rectangle_8x7}>
                                    <Image
                                        source={require("../../../../assets/icons/allincluded.png")}
                                    />
                                </View>
                                <Text style={fontStyles.bodyText}>
                                    <Text style={[fontStyles.bodyText, {fontWeight: 'bold'}]}>ALL INCLUDED </Text>
                                    Our tours come with all necessary fees and costs included in the price of your
                                    ticket.
                                </Text>
                            </ListItem>
                            <ListItem style={utilsStyles.listItem}>
                                <View style={iconSize.rectangle_8x7}>
                                    <Image
                                        source={require("../../../../assets/icons/guaranteed.png")}
                                    />
                                </View>
                                <Text style={fontStyles.bodyText}>
                                    <Text style={[fontStyles.bodyText, {fontWeight: 'bold'}]}>GUARANTEED </Text>
                                    The only Rainbow Mountain tour operator with a safety guarantee.
                                </Text>
                            </ListItem>
                            <ListItem style={utilsStyles.listItem}>
                                <View style={iconSize.rectangle_8x7}>
                                    <Image
                                        source={require("../../../../assets/icons/discover.png")}
                                    />
                                </View>
                                <Text style={fontStyles.bodyText}>
                                    <Text style={[fontStyles.bodyText, {fontWeight: 'bold'}]}>DISCOVER </Text>
                                    Visit one of the world’s most incredible places, the stunning Vinicunca Rainbow
                                    Mountain.
                                </Text>
                            </ListItem>
                            <ListItem style={utilsStyles.listItem}>
                                <View style={iconSize.rectangle_8x7}>
                                    <Image
                                        source={require("../../../../assets/icons/safest.png")}
                                    />
                                </View>
                                <Text style={[fontStyles.bodyText, {fontWeight: 'bold'}]}>
                                    #1 SAFEST TOUR OPERATOR OF THE BEAUTIFUL VINICUNCA
                                </Text>
                            </ListItem>
                        </List>
                    </View>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}