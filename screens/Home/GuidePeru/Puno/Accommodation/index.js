import React, {Component} from "react";
import {ScrollView} from "react-native";
import {Container} from "native-base";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityAccommodation from "../../../../../components/common/guide/city/Accommodation/CommonAccommodation";

const hostels = [
    {
        hostelName: "Suite Independencia",
        hostelImage: require("../../../../../assets/images/hostels/hostelPuno1.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomPuno1.png"),
        features: [
            "Breakfast Included", "Powerful Wifi", "Cleaning Service", "Tv Room", "Hot Shower"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/Breakfast.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/Clean_Service.png"),
            require("../../../../../assets/icons/tv.png"),
            require("../../../../../assets/icons/thermometer.png")
        ]
    }, {
        hostelName: "Conde de Lemos",
        hostelImage: require("../../../../../assets/images/hostels/hostelPuno2.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomPuno2.png"),
        features: [
            "Breakfast Included", "Comfortable Bed", "Cleaning Service", "Multi-lingual Staff", "Family Hostel"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/Breakfast.png"),
            require("../../../../../assets/icons/bed.png"),
            require("../../../../../assets/icons/Clean_Service.png"),
            require("../../../../../assets/icons/staff.png"),
            require("../../../../../assets/icons/family.png")
        ]
    },
    {
        hostelName: "Pacha Suites",
        hostelImage: require("../../../../../assets/images/hostels/hostelPuno3.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomPuno3.png"),
        features: [
            "Cleaning Service", "Chill Out Area", "Breakfast Included", "Quality Food", "24h Reception"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/Clean_Service.png"),
            require("../../../../../assets/icons/chill.png"),
            require("../../../../../assets/icons/Breakfast.png"),
            require("../../../../../assets/icons/food.png"),
            require("../../../../../assets/icons/24h_Reception.png")
        ]
    }
];

export default class PunoAccommodation extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/punoHeader.png")}
                                      title={'Puno'}/>
                    <CityAccommodation dataArray={hostels}/>
                </ScrollView>
            </Container>
        )
    }
}