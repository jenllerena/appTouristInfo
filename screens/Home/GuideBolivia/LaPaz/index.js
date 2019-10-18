import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../components/common/Footer";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import CommonCityInfo from "../../../../components/common/guide/city/CommonCityInfo";

const textInfo = [
    "La Paz is a chaotic frentic city that is abuzz all of the time. Explore the bustling markets and chat to " +
    "the countless street vendors or enjoy the view from inside one of the cable cars. Admire the marvelous " +
    "San Francisco Cathedral, or just walk around the colonial plazas and colorful streets. If by any chance " +
    "you’re looking for a potion or spell to give you good luck, earn more money, spice up your love life or " +
    "just want to visit a very unique place, have a stroll through the Witches Market. Here you’ll find everything " +
    "related to witchcraft, including rituals, spell boxes, totems, and much more."
];

const items = ["LaPazGuide", "LaPazLocations"];

export default class LaPazInfo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/laPazHeader.png")}
                                      title={'La Paz'}/>
                    <CommonCityInfo navigation={this.props.navigation}
                                    description={textInfo}
                                    items={items}/>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </Content>
            </Container>
        )
    }
}