import React, {Component} from "react";
import {FlatList, Image, Text, TouchableOpacity} from "react-native";
import {Row} from "react-native-easy-grid";
import {View} from "native-base";

const fontStyles = require("../../../../styles/fontStyles");
const iconSize = require("../../../../styles/iconsStyles");

const buttons = [
    {title: "Must do & See", icon: require("../../../../assets/icons/mustSee.png")},
    {title: "How to get there", icon: require("../../../../assets/icons/location.png")},
    {title: "Accommodation", icon: require("../../../../assets/icons/room.png")},
    {title: "Extra Tours", icon: require("../../../../assets/icons/tickets.png")}
];

export default class CommonCityInfo extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Row style={{marginVertical: 15}}>
                    <Text style={fontStyles.bodyText}>
                        {this.props.description}
                    </Text>
                </Row>
                <FlatList
                    data={this.props.items}
                    numColumns={2}
                    style={{width: "100%", marginLeft: "15.5%"}}
                    renderItem={({item, index}) => (
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate(item);
                            }}>
                            <View style={iconSize.GridViewContainer}>
                                <View style={iconSize.bigSquare}>
                                    <Image style={{width: "50%", height: "50%"}}
                                           source={buttons[index].icon}
                                           resizeMode="contain"
                                    />
                                    <Text style={fontStyles.titleButtonInfo}>{buttons[index].title}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}