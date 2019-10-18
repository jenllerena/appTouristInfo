import React, {Component} from "react";
import {Container, View} from "native-base";
import {StyleSheet, SafeAreaView, Image} from "react-native";
import Carousel from "react-native-snap-carousel";
import {Modal, Text, TouchableHighlight, Alert} from 'react-native';
import {NavigationOptions} from "../../navigation/navigationOptions";

const fontStyles = require("../../styles/fontStyles");
export default class HowItWorks extends Component {

    static navigationOptions = ({navigation}) => {
        return NavigationOptions(navigation)
    };

    state = {
        modalVisible: false,
        carouselItems: [
            {
                title: "Artículo1"
            },
            {
                title: "Artículo2"
            },
            {
                title: "Artículo3"
            },
            {
                title: "Artículosssssssssss4"
            },
            {
                title: "Artículo5"
            }
        ]
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _renderItem({item, index}) {
        return (
            <View>
                <Image
                    source={require('../../assets/images/go.png')}
                />
                {/*<Text style={{color: '#fff'}}>{item.title}</Text>*/}
                {/*{console.log("qqq", item)}*/}
            </View>
        )
    }

    //Modal

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 0}}>
                        <View>
                            <SafeAreaView>
                                <Carousel
                                    data={this.state.carouselItems}
                                    sliderWidth={250}
                                    itemWidth={250}
                                    renderItem={this._renderItem}
                                />
                            </SafeAreaView>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        )
    }

    //modal
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        borderBottomWidth: 0,
        margin: 0,
        padding: 0,
    },
});