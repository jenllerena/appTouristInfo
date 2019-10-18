import React, {Component} from 'react';
import {FlatList, ImageBackground, ScrollView, View} from 'react-native';
import {Content, Text} from "native-base";
import Footer from "../../../Footer";
import MapLocation from "./CurrentLocation"

const fontStyles = require("../../../../../styles/fontStyles");
const utilsStyles = require("../../../../../styles/utilsStyles");

export default class commonLocation extends Component {
    render() {
        return (
            <ScrollView>
                <FlatList
                    inset={true}
                    data={this.props.dataArray.maps}
                    renderItem={({item}) => (
                        <View>
                            <ImageBackground source={item.map}
                                             style={{width: "100%", height: 280}}
                                             resizeMode="contain">
                                <View style={utilsStyles.labelMap}>
                                    <Text style={{fontSize: 12, color: "#FFF"}}>{item.mapName}</Text>
                                </View>
                            </ImageBackground>
                            <Text style={fontStyles.mapDescription}>
                                {item.description}
                            </Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{margin: 30}}>
                    <Text style={fontStyles.title_1}>Where you are</Text>
                    <Text style={fontStyles.mapDescription}>
                        {this.props.info}
                    </Text>
                </View>
                <View style={{height: 300}}>
                    <MapLocation cityLocation={this.props.cityLocation}/>
                </View>
                <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                    <Footer/>
                </Content>
            </ScrollView>
        );
    }
}