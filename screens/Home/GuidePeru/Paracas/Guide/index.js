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
        title: "Tours and Sightseeing in Paracas",
        guides: [
            {
                icon: require("../../../../../assets/icons/Frame.png"),
                info: "Paracas National Reserve Tour (Free with your Peru Hop pass).",
            }, {
                icon: require("../../../../../assets/icons/ballestas.png"),
                info: "Ballestas Islands (Islas Ballestas) Tour.",
            }, {
                icon: require("../../../../../assets/icons/kitesurfing.png"),
                info: "Rent quad bikes and drive around the desert and practice kitesurfing.",
            }, {
                icon: require("../../../../../assets/icons/fish.png"),
                info: "Try delicious seafood, sample local Peruvian Chocotejas, a typical Peruvian chocolate.",
            }
        ]
    }, {
        title: "Must see in Paracas",
        guides: [
            {
                icon: require("../../../../../assets/icons/sunsetIcon.png"),
                info: "Watch the sunset along the Pacific coast.",
            }, {
                icon: require("../../../../../assets/icons/island.png"),
                info: "Witness the 2000 year old Candelabro sand sculpture that is etched into the Paracas peninsula and can be seen from the speedboat on the way to the Ballestas Islands."
            }
        ]
    },
];

export default class ParacasGuide extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/paracasHeader.png")}
                                      title={'Paracas'}/>
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
                            <View style={{marginRight: 10}}>
                                <Text style={fontStyles.bodyText}>
                                    <Text style={{fontWeight: 'bold', fontSize: 13}}>Food: {"\n"}</Text>
                                    Fruzion: Great fresh smoothies. Lots of good breakfast options including pancakes
                                    and vegan options.
                                    10% off Peru Hop passengers. {"\n"}
                                    <Text style={{fontWeight: 'bold', fontSize: 13}}>Restaurant Paracas: </Text>
                                    Best view in town! Enjoy a brilliant seafood dish while Chilcano or Pisco Sour -
                                    exclusive to Peru Hop.{"\n"}
                                    <Text style={{fontWeight: 'bold', fontSize: 13}}>Miski: </Text>
                                    Best pizzeria in town. Free welcome drink only for Peru Hop passengers and 10%
                                    discount on all food (drink not included).
                                </Text>
                            </View>
                        </ListItem>
                        <ListItem style={utilsStyles.listItem}
                        >
                            <View style={iconSize.rectangle_8x7}>
                                <Image style={{width: 30, height: 30}}
                                       source={require("../../../../../assets/icons/ATMicon.png")}
                                />
                            </View>
                            <View style={{marginRight: 10}}>
                                <Text style={fontStyles.bodyText}>
                                    <Text style={{fontWeight: 'bold', fontSize: 13}}>ATM: {"\n"}</Text>
                                    Global NET ATM: Keep in mind, this ATM has a higher fee than others.
                                    BCP ATM: Remember to withday money before you go to Huacachina, as there is no ATM
                                    there.
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