import React, {Component} from "react";
import {Card, Container, Content, Label, Text, View} from "native-base";
import {Image, TouchableHighlight} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import Footer from "../../../../../components/common/Footer";
import ImageViewer from "../../../../../utils/imageViewer";

const utilsStyles = require("../../../../../styles/utilsStyles");
const fontStyles = require("../../../../../styles/fontStyles");

export default class ArequipaExtraTours extends Component {

    state = {
        imageViewer: {},
        imageViewerVisible: false,
    };

    handleImageViewer = (visible, image) => {
        const imageToView = [{
            props: {
                source: image
            }
        }];
        this.setState({imageViewer: imageToView, imageViewerVisible: visible})
    };

    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader
                        image={require("../../../../../assets/images/backgrounds/arequipaHeader.png")}
                        title={'Arequipa'}/>
                    <Label style={fontStyles.title_1}>
                        Colca Canyon
                    </Label>
                    <View style={{marginBottom: 100, alignItems: "center"}}>
                        <Image source={require("../../../../../assets/images/tours/colcaTour.png")}
                               style={{width: "100%"}}
                        />
                        <Card style={{
                            backgroundColor: '#EBECEC',
                            justifyContent: 'center',
                            position: "absolute",
                            width: "90%",
                            top: "50%",
                            padding: "2%"
                        }}>
                            <Text style={fontStyles.bodyText}>
                                • 4 hours from Arequipa you can find the <Text
                                style={[fontStyles.bodyText, {color: "#8C1212", fontWeight: 'bold'}]}>second
                                deepest </Text>
                                canyon in the world!{"\n"}<Text
                                style={[fontStyles.bodyText, {color: "#8C1212", fontWeight: 'bold'}]}>Colca
                                Canyon </Text>is TWICE as deep as the Grand Canyon.{"\n"}
                                • Spectacular views over the huge valley and the best place in South America to see the
                                majestic
                                <Text style={[fontStyles.bodyText, {color: "#8C1212", fontWeight: 'bold'}]}> Andean
                                    Condor </Text>birds in full
                                flight.{"\n"}
                                • If you want to do the trek, it requires at least one day in Arequipa (the day before
                                to
                                <Text style={[fontStyles.bodyText, {
                                    color: "#8C1212",
                                    fontWeight: 'bold'
                                }]}> acclimatize</Text>).
                                Keep in mind, 2 & 3 day routes follow the same itinerary at a different pace.
                                The 3 day option offers more time to relax and enjoy the canyon.
                            </Text>
                        </Card>
                    </View>
                    <View style={{marginVertical: 10}}>
                        <TouchableHighlight style={{alignItems: 'center', marginVertical: 10, marginHorizontal: 30}}
                                            onPress={() => this.handleImageViewer(true, require("../../../../../assets/images/tours/colcaDataTour.png"))}>
                            <Image source={require("../../../../../assets/images/tours/colcaDataTour.png")}
                                   style={{width: "100%", height: 260}}
                                   resizeMode="contain"
                            />
                        </TouchableHighlight>
                        <View style={{alignItems: 'center', margin: 30}}>
                            <Image source={require("../../../../../assets/images/tours/colcaTour2.png")}
                                   style={{width: "100%", height: 240}}
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
                                • Colca Canyon ENTRY TAX of 70 soles is NOT INCLUDED and must be paid upon
                                arrival. {"\n"}
                                • Optional Hot Springs in Chivay – 15 soles entry.{"\n"}
                                • The operators CANCELLATION POLICY is 16 HOURS before the Tour begins.
                            </Text>
                        </View>
                        <View style={utilsStyles.noteCard}>
                            <Text style={[fontStyles.bodyText, {color: "#fff"}]}>
                                As with everything on Peru Hop, the choice is yours, but whether you do this tour with
                                our partner operator, or another operator, we strongly recommend visiting the Colca
                                Canyon...there is incredible scenery, indigenous villages and a chance to see the
                                huge Condor birds up close.
                            </Text>
                        </View>
                        <Content style={{marginLeft: "8%", marginTop: "5%"}}>
                            <Footer/>
                        </Content>
                    </View>
                    <ImageViewer visible={this.state.imageViewerVisible} image={this.state.imageViewer}
                                 handleImageViewer={this.handleImageViewer}/>
                </Content>
            </Container>
        )
    }
}