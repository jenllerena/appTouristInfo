import React, {Component} from "react";
import {FlatList, Image, TouchableHighlight} from "react-native";
import {Row} from "react-native-easy-grid";
import {Content, Text, View} from "native-base";
import Footer from "../../../Footer";
import ImageViewer from "../../../../../utils/imageViewer";

const fontStyles = require("../../../../../styles/fontStyles");
const utilsStyles = require("../../../../../styles/utilsStyles");
const iconSize = require("../../../../../styles/iconsStyles");
export default class commonAccommodation extends Component {

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
            <View>
                <Row>
                    <View style={utilsStyles.containers}>
                        <Text style={fontStyles.title_1}>
                            Accommodation
                        </Text>
                    </View>
                </Row>
                <FlatList
                    inset={true}
                    data={this.props.dataArray}
                    renderItem={({item}) => (
                        <View>
                            <Row>
                                <View style={utilsStyles.containers}>
                                    <Text style={fontStyles.title_1}>
                                        {item.hostelName}
                                    </Text>
                                </View>
                            </Row>
                            <Row>
                                <View style={utilsStyles.containers}>
                                    <Row style={{justifyContent: 'center'}}>
                                        <View style={iconSize.circleIcon}>
                                            <Image source={item.featuresIcon[0]}/>
                                            <Text style={fontStyles.iconText}>{item.features[0]}</Text>
                                        </View>
                                        <View style={iconSize.circleIcon}>
                                            <Image source={item.featuresIcon[1]}/>
                                            <Text style={fontStyles.iconText}>{item.features[1]}</Text>
                                        </View>
                                        <View style={iconSize.circleIcon}>
                                            <Image
                                                source={item.featuresIcon[2]}
                                            />
                                            <Text style={fontStyles.iconText}>{item.features[2]}</Text>
                                        </View>
                                    </Row>
                                    <Row style={{justifyContent: 'center'}}>
                                        <View style={iconSize.circleIcon}>
                                            <Image
                                                source={item.featuresIcon[3]}
                                            />
                                            <Text style={fontStyles.iconText}>{item.features[3]}</Text>
                                        </View>
                                        <View style={iconSize.circleIcon}>
                                            <Image
                                                source={item.featuresIcon[4]}
                                            />
                                            <Text style={fontStyles.iconText}>{item.features[4]}</Text>
                                        </View>
                                    </Row>
                                </View>
                            </Row>
                            <View style={{alignItems: 'center', margin: 20}}>
                                <Image
                                    source={item.hostelImage}
                                    style={{width: "100%", height: 250}}
                                    resizeMode="contain"/>
                            </View>
                            <TouchableHighlight style={{alignItems: 'center', marginHorizontal: 20}}
                                                onPress={() => this.handleImageViewer(true, item.dataImage)}>
                                <Image
                                    source={item.dataImage}
                                    style={{width: "100%", height: 190}}
                                    resizeMode="contain"
                                />
                            </TouchableHighlight>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                    <Footer/>
                </Content>
                <ImageViewer visible={this.state.imageViewerVisible} image={this.state.imageViewer}
                             handleImageViewer={this.handleImageViewer}/>
            </View>
        );
    }
};