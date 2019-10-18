import React, {Component} from "react";
import {Container, Content} from "native-base";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import CommonCityInfo from "../../../../components/common/guide/city/CommonCityInfo";
import Footer from "../../../../components/common/Footer";

const textInfo = [
    "Paracas is perfect for all types, of travellers. With its relaxed vibes, this Pacific town has a surprinsing variety " +
    "of activities to choose from. The Paracas National Reserve is one of the main attractions in Paracas, " +
    "its main function is to preserve the marine life ecosystem. You will find many different species ofbirds here, " +
    "most sitting on the shore’s edge basking in the sunshine that refletcs of the water"
];

const items = ["ParacasGuide", "ParacasLocations", "ParacasAccommodation", "ParacasExtraTours"];

export default class ParacasInfo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/paracasHeader.png")}
                                      title={'Paracas'}/>

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