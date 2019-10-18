import React, {Component} from "react";
import {FlatList, Image, TouchableHighlight} from "react-native";
import {View} from "native-base";

const utilsStyles = require("../../../styles/utilsStyles");

export default class CommonCitiesList extends Component {
    render() {
        return (
            <View>
                <FlatList
                    inset={true}
                    data={this.props.dataArray}
                    numColumns={2}
                    style={{width: "100%", marginTop: "5%"}}
                    renderItem={({item}) => (
                        <TouchableHighlight
                            underlayColor="white"
                            onPress={() =>
                                !!item.url ? this.props.navigation.navigate(item.url) : alert("This button doesn't have view")}>
                            <View style={utilsStyles.GridViewContainer}>
                                <Image
                                    source={item.img}
                                    style={utilsStyles.listCardImage}
                                    resizeMode="contain"
                                />
                            </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}