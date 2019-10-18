import React, {Component} from "react";
import {FlatList, Image, Text, TouchableWithoutFeedback, View} from "react-native";
import {ListItem} from "native-base";

const utilsStyles = require("../../styles/utilsStyles");

export default class ListCardWithText extends Component {
    render() {
        return (
            <FlatList
                inset={true}
                data={this.props.items}
                style={{width: "100%", height: "100%"}}
                vertical={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <ListItem
                        noBorder={true}
                    >
                        <TouchableWithoutFeedback onPress={() =>
                            !!item.url ? this.props.navigation.navigate(item.url) : alert("This button doesn't have view yet")}>
                            <View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        height: 30,
                                        marginLeft: 10,
                                        marginRight: 10
                                    }}>
                                        <View style={utilsStyles.iconAccordionHeader}>
                                            <Image
                                                style={{alignItems: 'center', width: "50%", height: "60%"}}
                                                source={item.icon}
                                                resizeMode="contain"
                                            /></View>
                                        <View style={utilsStyles.accordionHeader}>
                                            <Text style={utilsStyles.accordionTitle}>
                                                {item.name}</Text>
                                        </View>
                                    </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </ListItem>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}