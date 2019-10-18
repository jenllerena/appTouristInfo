import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../components/common/Footer";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import CommonCityInfo from "../../../../components/common/guide/city/CommonCityInfo";


const textInfo = [
    "This tiny desert Oasis village is located close to the city of Ica in the heart of the Peruvian desert. " +
    "The small natural lagoon and palm trees are surrounded on all sides by huge natural sand dunes. " +
    "Home to less than 100 local people, every day fresh influxes of travellers arrive to do one " +
    "of the must-do activities in Peru...sandboarding down the famous dunes!"
];

const items = ["HuacachinaGuide", "HuacachinaLocations", "HuacachinaAccommodation", "HuacachinaExtraTours"];

export default class HuacachinaInfo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/huacachinaHeader.png")}
                                      title={'Huacachina'}/>

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