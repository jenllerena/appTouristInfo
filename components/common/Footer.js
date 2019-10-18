import React, {Component} from "react";
import {Button, Card, CardItem, Left, Right} from "native-base";
import {FlatList, Image, Linking, Text, View} from "react-native";
import RF from "react-native-responsive-fontsize"

const utilsStyles = require("../../styles/utilsStyles");
const fontStyles = require("../../styles/fontStyles");
const bannersInfo = [
    {
        name: "airpotexpresslima",
        image: require("../../assets/images/banners/AEL-MOBILE-BANNER.png"),
        url: "https://www.airportexpresslima.com/es/tickets/#precios-desde-el-aeropuerto",
        description: "Reserve your seat on Lima’s Official Airport Bus Service."
    }, {
        name: "airpotexpresslima",
        image: require("../../assets/images/banners/FLT-MOBILE-BANNER.png"),
        url: "https://www.findlocaltrips.com",
        description: "Find the best local tour operators in South America."
    }
];

export default class Footer extends Component {
    render() {
        return (
            <View>
                <FlatList
                    inset={true}
                    data={bannersInfo}
                    renderItem={({item}) => (
                        <Card style={utilsStyles.bannerCard}>
                            <CardItem cardBody>
                                <Image source={item.image}
                                       style={{width: "100%",aspectRatio: 2/1, marginTop: "3%"}}
                                       resizeMode="contain"
                                />
                            </CardItem>
                            <CardItem style={{flexDirection: "row", aspectRatio: 7 / 1}}>
                                <Left>
                                    <Text style={fontStyles.footerText}>
                                        {item.description}
                                    </Text>
                                </Left>
                                <Right>
                                    <Button
                                        style={{
                                            backgroundColor: "#EBECEC",
                                            height: "120%",
                                            width: "70%",
                                            justifyContent: 'center'
                                        }}
                                        onPress={() => Linking.openURL(item.url)}>
                                        <Text style={{fontSize: RF(1.5)}}>Shop Now</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
};