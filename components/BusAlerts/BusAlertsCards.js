import React, {Component} from "react";
import {Body, Button, Card, CardItem, Left, Right, View} from "native-base";
import {FlatList, Image, Text, TouchableHighlight} from "react-native";
import {SimpleLineIcons} from "@expo/vector-icons";
import {orderBy} from "lodash";
import moment from "moment";
import RF from "react-native-responsive-fontsize";

export default class BusAlertsCards extends Component {

    state = {
        seeMore: false,
    };

    render() {
        let {dataArray} = this.props;
        let {showMore} = this.state;
        dataArray = orderBy(dataArray).splice(0, showMore ? 10 : 3);

        return (
            <View style={{width: "100%", height: "auto"}}>
                <FlatList
                    inset={true}
                    data={dataArray}
                    style={{height: "100%"}}
                    renderItem={({item}) => (
                        <TouchableHighlight
                            underlayColor="#eaecef"
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                width: "100%",
                                height: "100%",
                                marginBottom: 10,
                            }}
                            onPress={() => this.props.navigation.navigate('SingleNews', {
                                title: item.title,
                                introduction: item.introduction,
                                content: item.content,
                                image: item.image,
                                date: item.date,
                            })}>
                            <View style={{marginHorizontal: "5%",}}>
                                <Card style={{
                                    backgroundColor: "#F5F5F5", borderRadius: 4,
                                    width: "100%", flexDirection: "column",
                                }}>
                                    <CardItem style={{width: "100%", height: "auto", minHeight: "15%"}}>
                                        <Body>
                                        <Text style={{fontWeight: "bold", fontSize: RF(2.5), color: "#3E3E3E"}}
                                        >{item.title}</Text>
                                        </Body>
                                        <Right>
                                            <Button style={{height: "auto"}} transparent>
                                                <SimpleLineIcons name="options-vertical"/>
                                            </Button>
                                        </Right>
                                    </CardItem>
                                    <CardItem style={{width: "100%", height: "auto"}}>
                                        <Left style={{paddingRight: 10}}>
                                            <Text style={{color: "#3C3C3C", fontSize: RF(2), textAlign: "justify"}}>
                                                {item.introduction}
                                            </Text>
                                        </Left>
                                        <View style={{width: "40%", height: "auto"}}>
                                            <Image source={{uri: item.image}}
                                                   style={{width: "100%", aspectRatio: 1}}
                                                   resizeMode="cover"/>
                                        </View>
                                    </CardItem>
                                    <CardItem style={{width: "100%", height: "auto"}}>
                                        <Left>
                                            <Text style={{color: "#838383", fontWeight: 'bold', fontSize: RF(2)}}>
                                                {moment(item.date).format("DD/MM/YYYY")}
                                            </Text>
                                        </Left>
                                    </CardItem>
                                </Card>
                                <Right>
                                </Right>
                            </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor={(item, index) => index.toString()}/>
                <TouchableHighlight onPress={() => this.setState({showMore: !showMore})}
                                    underlayColor="#eaecef"
                                    style={{width: "100%"}}>
                    <Text
                        style={{marginLeft: "40%", color: "#3678e2"}}>{!showMore ? "Show More" : "Show Less"}...</Text>
                </TouchableHighlight>
            </View>
        );
    }
}