import React, {Component} from "react";
import {Container, Content} from "native-base";
import Footer from "../../../../../components/common/Footer";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityGuide from "../../../../../components/common/guide/city/Guide/CommonGuide";

const guideInfo = [
     {
        title: "Extra Info",
        guides: [
            {
                icon: require("../../../../../assets/icons/food.png"),
                info: "• El Condor & the Eagle Bar: Irish-Bolivian Cafe with the best breakfasts in Bolivia. Great coffee and incredible homemade bread. Go early! (Monday - Friday 8:00am - 1:00pm).\n" +
                    "• Restaurant Thai Place: Authentic Asian food served by enthusiastic staff. Various vegan options.\n" +
                    "• Taipi Uta: Lake-side restaurant service. Traditional Bolivian food. Fresh trout. Free bag storage if you eat here (next to bus meeting touristSpot).",
            }, {
                icon: require("../../../../../assets/icons/stars.png"),
                info: "Banco Bisa ATM: Take out Bolivianos from this Bolivian bank ATM.",
            }
        ]
    }
];

export default class CopacabanaGuide extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/copacabanaHeader.png")}
                                      title={'Copacabana'}/>
                    <CityGuide dataArray={guideInfo}/>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </Content>
            </Container>
        )
    }
}