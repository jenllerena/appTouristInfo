import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../components/common/Footer";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import CommonCityInfo from "../../../../components/common/guide/city/CommonCityInfo";

const textInfo = [
    "The main attraction in the Arequipa area is the Colca Valley. Home to one of the world’s deepest canyons, reaching " +
    "a depth of 4,160 meters, it is also Home to the famous Andean Condor birds. The valley also has many examples of " +
    "Inca agricultural terraces, irrigation systems, and hot springs."
];

const items = ["ArequipaGuide", "ArequipaLocations", "ArequipaAccommodation", "ArequipaExtraTours"];

export default class ArequipaInfo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/arequipaHeader.png")}
                                      title={'Arequipa'}/>
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