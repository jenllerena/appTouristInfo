import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../components/common/Footer";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import CommonCityInfo from "../../../../components/common/guide/city/CommonCityInfo";

let textInfo = ["Lima is an amazing and underrated city. It has a lot to offer for every type of " +
"traveller with its oceanfront setting, world-class cuisine, incredible museums, booming nightlife and colonial era architecture"
];

const items = ["LimaGuide", "LimaLocations"];

export default class LimaInfo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/lima-header.png")}
                                      title={'Lima'}/>

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