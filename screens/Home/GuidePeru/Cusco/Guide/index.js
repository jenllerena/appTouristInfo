import React, {Component} from "react";
import {Container, Content} from "native-base";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityGuide from "../../../../../components/common/guide/city/Guide/CommonGuide";
import Footer from "../../../../../components/common/Footer";

const guideInfo = [
    {
        title: "Tours and Sightseeing in Cusco",
        guides: [
            {
                icon: require("../../../../../assets/icons/cuscoIcon.png"),
                info: "Take a tour to Machu Picchu, with many options to choose from.",
            }, {
                icon: require("../../../../../assets/icons/sacredValley.png"),
                info: "Venture to the Sacred Valley.",
            }, {
                icon: require("../../../../../assets/icons/rainbow.png"),
                info: "Visit Rainbow Mountain",
            },
            {
                icon: require("../../../../../assets/icons/bicycle.png"),
                info: "Quad biking in Maras and Moray.",
            },
            {
                icon: require("../../../../../assets/icons/horse.png"),
                info: "Horse riding.",
            },
            {
                icon: require("../../../../../assets/icons/nightlife.png"),
                info: "Take part in the lively Cusco nightlife.",
            }
        ]
    }, {
        title: "Must see in Cusco",
        guides: [
            {
                icon: require("../../../../../assets/icons/shop.png"),
                info: "See all the craft and produce at the Pisac market.",
            }, {
                icon: require("../../../../../assets/icons/church.png"),
                info: "Discover the historic city filled with a mixture of Incan and Spanish influences.",
            },
            {
                icon: require("../../../../../assets/icons/stars.png"),
                info: "Gaze at the stars at the Cusco Planetarium.",
            }
        ]
    },
    {
        title: "Extra Info",
        guides: [
            {
                icon: require("../../../../../assets/icons/food.png"),
                info: "• La Boheme: Traditional French Crepes, savoury or sweet. Cheap and very cosy place.\n" +
                    "• El Tabuco: Best pizzas in Cusco. Made in a traditional fire-oven with the freshest ingredients.\n" +
                    "• Marcelo Batata: Peruvian and fusion cuisine. For true food lovers.\n" +
                    "• Wild Rover: Huge Irish bar and restaurant with incredible balcony views. Live sports on big screens. Live DJ and excellent parties. All welcome.\n" +
                    "• Uchu Steakhouse: The best meats you can imagine. speciality: Volcanic stone cooked steaks.\n" +
                    "• La Feria: This Picanteria offers all the traditional dishes of contemporary Peruvian cuisine.\n" +
                    "Amazing gastronomical experience.\n" +
                    "• Las Frescas: Healthy chicken wraps, pastas and salads. You select the ingredients from the buffet.\n" +
                    "• Nuna Raymi: Traditional Peruvian food at a good price. Speciality - Alpaca steak.\n" +
                    "• Limbus Restobar: Delicious local cocktails and Peruvian snacks. View of the city and good music.\n" +
                    "• Paddy’s Bar: Irish bar on the main square with great food + vibe.",
            }
        ]
    }
];

export default class CuscoGuide extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CommonCityHeader
                        image={require("../../../../../assets/images/backgrounds/cuscoHeader.png")}
                        title={'Cusco'}/>
                    <CityGuide dataArray={guideInfo}/>
                    <Content style={{marginLeft: "8%", marginVertical: "5%"}}>
                        <Footer/>
                    </Content>
                </Content>
            </Container>
        )
    }
}