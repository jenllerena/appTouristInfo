import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../components/common/Footer";
import CommonCityHeader from "../../../../components/common/guide/city/CommonCityHeader";
import CommonCityInfo from "../../../../components/common/guide/city/CommonCityInfo";


const textInfo = [
    "Cusco is more than just Machu Picchu. Go on a tour to the famous Rainbow Mountain and see the breath-taking " +
    "colours of this enormous mountain located a few hours from Cusco. The nightlife in Cusco is excellent " +
    "and is renowned as the craziest place to party in Peru. There are bars, restaurants and clubs all situated " +
    "within and around Plaza de Armas just a walk away from most hostels"
];

const items = ["CuscoGuide", "CuscoLocations"];

export default class CuscoInfo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../assets/images/backgrounds/cuscoHeader.png")}
                                      title={'Cusco'}/>

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