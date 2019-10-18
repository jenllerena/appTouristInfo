import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../components/common/Footer";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import CommonCityInfo from "../../../../components/common/guide/city/CommonCityInfo";

const textInfo = "It is believed that the Nazca Lines were some form of religious worship associated with the " +
    "availability of water for crop growth (Nazca is one of the driest places in the world). Whatever their reason, " +
    "these lines are as fascinating as they are mysterious to both historians and tourists. They were officially made " +
    "a UNESCO World Heritage site in 1994. The lines vary in size from 30 metres to 200 meters and often take on the " +
    "form of animals such as monkeys, lizards and sharks among others.";

const items = ["NazcaGuide", "NazcaLocations", "NazcaAccommodation", "NazcaExtraTours"];

export default class NazcaInfo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/nazcaHeader.png")}
                                      title={'Nazca'}/>
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