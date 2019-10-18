import React, {Component} from "react";
import {Container, Content} from "native-base";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import CommonCityInfo from "../../../../components/common/guide/city/CommonCityInfo";
import Footer from "../../../../components/common/Footer";

const textInfo = [
    "Puno is the main city on the Peruvian side of Lake Titicaca, the highest navigable lake in the world. " +
    "There are many unique and interesting cultures that live in the area. Among these are the Uros people, " +
    "who have lived on islands of floating reeds for centuries. You can pay a visit to these fascinating man-made islands while in Puno."
];

const items = ["PunoGuide", "PunoLocations", "PunoAccommodation", "PunoExtraTours"];

export default class PunoInfo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/punoHeader.png")}
                                      title={'Puno'}/>

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