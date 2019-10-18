import React, {Component} from "react";
import {Card, Container, Content, Label, Text, View} from "native-base";
import {Image} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import Footer from "../../../../../components/common/Footer";

const utilsStyles = require("../../../../../styles/utilsStyles");
const fontStyles = require("../../../../../styles/fontStyles");

export default class ParacasExtraTours extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/paracasHeader.png")}
                                      title={'Paracas'}/>
                    <Label style={fontStyles.title_1}>
                        Ballestas Islands
                    </Label>
                    <View style={{marginBottom: 95, alignItems: "center"}}>
                        <Image
                            source={require("../../../../../assets/images/tours/ballestas-islands-tour.png")}
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
                                • Nickname the <Text
                                style={[fontStyles.bodyText, {color: "#8C1212", fontWeight: 'bold'}]}>
                                “Poor Man’s Galapagos” </Text>famous for their abundant wildlife.{"\n"}
                                • They are a group of <Text style={[fontStyles.bodyText, {color: "#8C1212"}]}>rocky
                                islands </Text>located of the pacific coast near the town
                                of Paracas sealions, Inca terns, pelicans and dolphins.{"\n"}
                                • The islands are protected, you <Text
                                style={[fontStyles.bodyText, {color: "#8C1212"}]}>
                                cannot swim </Text>with the animals <Text
                                style={[fontStyles.bodyText, {color: "#8C1212"}]}>
                                and you cannot walk on the islands </Text>themselves.{"\n"}
                                • See great views of <Text
                                style={[fontStyles.bodyText, {color: "#8C1212", fontWeight: 'bold'}]}>
                                El Candelabro </Text>sand sculpture on the way out the islands.
                            </Text>
                        </Card>
                    </View>
                    <View>
                        <Text style={fontStyles.title_1}>
                            2 Hour Speedboat Tour {"\n"}
                            <Text style={{fontSize: 20}}>Daily at 8 am (or 10am)</Text>
                        </Text>
                        <Text style={fontStyles.bodyText}>
                            • <Text style={{fontSize: 13, fontWeight: 'bold'}}>TOUR OPERATOR – PARACAS EXPLORER</Text>
                            {"\n"}Speedboat is safe and very comfortable, sea-sickness should not be an issue.
                            {"\n"}• <Text style={{fontSize: 13, fontWeight: 'bold'}}>PRICE - 50 SOLES / $15</Text>{"\n"}
                            Includes the port fee and park fee unlike the majority of operators.
                            {"\n"}• <Text style={{fontSize: 13, fontWeight: 'bold'}}>MEETING TIME – </Text>
                            07:45am (OR 9:45am FOR 10AM TOUR)
                            {"\n"}• <Text style={{fontSize: 13, fontWeight: 'bold'}}>MEETING PLACE – </Text>
                            LOS FRAYLES RESIDENCIAL HOTEL - (NO HOSTEL PICK UP)
                            {"\n"}• <Text style={{fontSize: 13, fontWeight: 'bold'}}>DURATION – </Text>2 hours
                            {"\n"}• <Text style={{fontSize: 13, fontWeight: 'bold'}}>WHAT TO BRING/WEAR</Text>{"\n"}
                            The wind at sea can be quite cold, so wear a jumper or jacket, a cap and sunblock, make sure
                            to bring your sunglasses and of course your camera as well.
                        </Text>
                        <View style={{alignItems: 'center', margin: "5%"}}>
                            <Image source={require("../../../../../assets/images/tours/tour_ballestas.png")}
                                   style={{width: "90%", height: 240}}
                                   resizeMode="contain"/>
                        </View>
                        <View style={utilsStyles.rectangle_color}>
                            <Text style={[fontStyles.bodyText, {color: "#fff"}]}>
                                HOW TO BOOK ANY OF THE TOURS? {"\n"}
                                1. ON BOARD THE BUS - direct with your Peru Hop guide. CASH ONLY{"\n"}
                                2. ADVANCE BOOKING - via the Peru Hop webpage tour section. CARD ONLY
                                Keep in mind, the speedboat leaves the pier promptly at 8:00am or 10:00am so you must be
                                at the meeting place 15 minutes before departure.
                            </Text>
                        </View>
                        <Text style={fontStyles.bodyText}>
                            As with everything on Peru Hop, the choice is yours, but whether you do this tour with our
                            partner operator or another operator, we strongly recommend visiting the Ballestas
                            Islands...
                            it would be a shame to come all this way and not see Peru’s mini version of the Galapagos.
                        </Text>
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