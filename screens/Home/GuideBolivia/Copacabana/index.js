import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../components/common/Footer";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import CommonCityInfo from "../../../../components/common/guide/city/CommonCityInfo";

const textInfo = [
    "A small enchanting town on the edge of Lake Titicaca on the Bolivian side. It is known as the gateway to Isla " +
    "del Sol which, according to myth, is the birthplace of the Sun and the first Incas. Enjoy the stunning view from " +
    "El Calvario or visit the famous church Virgen de Copacabana, an important site for South American religious pilgrims."
];

const items = ["CopacabanaGuide", "CopacabanaLocations","CopacabanaAccommodation","CopacabanaExtraTours"];

export default class CopacabanaInfo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/copacabanaHeader.png")}
                                      title={'Copacabana'}/>
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