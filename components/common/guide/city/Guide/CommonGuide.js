import React, {Component} from "react";
import {FlatList, Image, View} from "react-native";
import {Label, List, ListItem, Text} from "native-base";

const fontStyles = require("../../../../../styles/fontStyles");
const iconSize = require("../../../../../styles/iconsStyles");
const utilsStyles = require("../../../../../styles/utilsStyles");

export default class commonGuide extends Component {
    render() {
        return (
            <View>
                <Label style={fontStyles.title_1}>
                    City Guide
                </Label>
                <FlatList
                    inset={true}
                    data={this.props.dataArray}
                    renderItem={({item}) => (
                        <View>
                            <Text style={fontStyles.title_2}>
                                {item.title}
                            </Text>
                            <List style={{marginBottom: 40}}>
                                {item.guides.map((data, i) => (
                                    <ListItem key={i} style={utilsStyles.listItem}>
                                        <View style={iconSize.rectangle_8x7}>
                                            <Image style={{width: "70%", height: 25}}
                                                   source={data.icon}
                                                   resizeMode="contain"
                                            />
                                        </View>
                                        <Text style={fontStyles.bodyText}>
                                            {data.info}
                                        </Text>
                                    </ListItem>
                                ))}
                            </List>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}