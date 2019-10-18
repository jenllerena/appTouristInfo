import React, {Component} from "react";
import {Card, Container, Content, Label, Text, View} from "native-base";
import {Image, TouchableHighlight} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import Footer from "../../../../../components/common/Footer";
import ImageViewer from "../../../../../utils/imageViewer";

const utilsStyles = require("../../../../../styles/utilsStyles");
const fontStyles = require("../../../../../styles/fontStyles");

export default class PunoExtraTours extends Component {
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
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/punoHeader.png")}
                                      title={'Puno'}/>
                    <Label style={fontStyles.title_1}>
                        Lake Titicaca
                    </Label>
                    <View style={{marginBottom: 60, alignItems: "center"}}>
                        <Image source={require("../../../../../assets/images/tours/titicaca.png")}
                               style={{width: "100%"}}/>
                        <Card style={{
                            backgroundColor: '#EBECEC',
                            justifyContent: 'center',
                            position: "absolute",
                            width: "90%",
                            top: "30%",
                            padding: "1%"
                        }}>
                            <Text style={[fontStyles.bodyText, {marginVertical: 10}]}>
                                Lake Titicaca is the <Text
                                style={[fontStyles.bodyText, {color: "#8C1212", fontWeight: 'bold'}]}>
                                highest</Text>, navigable lake in the world at over <Text
                                style={[fontStyles.bodyText, {color: "#8C1212", fontWeight: 'bold'}]}>
                                3,800 meters </Text>above sea level! The lake connects Peru and Bolivia and the views
                                here are <Text
                                style={[fontStyles.bodyText, {color: "#8C1212", fontWeight: 'bold'}]}>spectacular</Text>.
                            </Text>
                        </Card>
                    </View>
                    <View>
                        <TouchableHighlight style={{alignItems: 'center', marginHorizontal: 30}}
                                            onPress={() => this.handleImageViewer(true, require("../../../../../assets/images/tours/dataTourPuno.png"))}>
                            <Image source={require("../../../../../assets/images/tours/dataTourPuno.png")}
                                   style={{width: "100%", height: 280}}
                                   resizeMode="contain"/>
                        </TouchableHighlight>
                        <View style={{alignItems: 'center', marginVertical: 10}}>
                            <Image source={require("../../../../../assets/images/tours/tourPuno.png")}
                                   style={{width: "90%", height: 200}}
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
                            <Text style={[fontStyles.bodyText, {fontWeight: "bold"}]}>
                                IMPORTANT INFORMATION ABOUT ALL TOURS: {"\n"}
                                •Price includes boat, entrance tax and transport.{"\n"}
                                •The Floating Islands have become a bit “touristy”. Locals rely on tourism to survive,
                                so they will offer souvenirs and handicrafts for purchase. Do not feel pressured to buy
                                anything!{"\n"}
                                •Bring water/drinks with you – it is expensive to buy them on the islands.
                            </Text>
                        </View>
                        <View style={utilsStyles.noteCard}>
                            <Text style={[fontStyles.bodyText, {color: "#fff"}]}>
                                CANCELLATION POLICY{"\n"}
                                38 Cancel 16 hours before the tour begins = no charge. / Less than 16 hours = 100%
                                charge.
                            </Text>
                        </View>
                        <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
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