import React, {Component} from "react";
import {Container, Content} from "native-base";
import {Grid, Row,} from "react-native-easy-grid";
import {Image, ScrollView, Text, View} from "react-native";
import Footer from "../../../components/common/Footer";
import RF from "react-native-responsive-fontsize";

const fontStyles = require("../../../styles/fontStyles");
const utilsStyles = require("../../../styles/utilsStyles");

export default class SingleNews extends Component {
    render() {
        const {navigation} = this.props;
        const title = navigation.getParam("title", "no title");
        const content = navigation.getParam("content", "no content");
        const image = navigation.getParam("image", "https://pbs.twimg.com/profile_images/920300287340023809/tWEyJylm_400x400.jpg");
        const createAt=navigation.getParam("createAt", "Create at");
        return (
            <Container>
                <ScrollView>
                    <Grid>
                        <Row style={{margin: 15, textAlign: 'center'}}>
                            <View style={utilsStyles.containers}>
                                <Text style={[fontStyles.title_2, {
                                    textAlign: "center",
                                    fontSize: RF(3.5),
                                }]}>{title}</Text>
                            </View>
                        </Row>
                        <Row>
                            <View style={utilsStyles.containers}>
                                <Text style={[fontStyles.bodyText, {textAlign: "center", fontSize: RF(2.2),}]}>
                                    {content}
                                </Text>
                            </View>
                        </Row>
                        <Row>
                            <View
                                style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 35}}>
                                <Image source={{uri: image}}
                                       style={{width: "100%", height: "100%", aspectRatio: 1 / 1.4}}
                                       resizeMode="contain"/>
                            </View>
                        </Row>
                    </Grid>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
};
