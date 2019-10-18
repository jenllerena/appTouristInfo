import React, {Component} from "react";
import {ScrollView} from "react-native";
import {Container} from "native-base";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityAccommodation from "../../../../../components/common/guide/city/Accommodation/CommonAccommodation";

const hostels = [
    {
        hostelName: "LOS FRAYLES",
        hostelImage: require("../../../../../assets/images/hostels/hostelParacas1.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomParacas1.png"),
        features: [
            "3 Stars Hostel", "Powerful Wifi", "Cleaning Service", "24 hour Security", "Breakfast Included"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/3stars.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/Clean_Service.png"),
            require("../../../../../assets/icons/Security.png"),
            require("../../../../../assets/icons/Breakfast.png")
        ]
    }, {
        hostelName: "KOKOPELLI BACKPACKERS HOSTEL",
        hostelImage: require("../../../../../assets/images/hostels/hostelParacas2.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomParacas2.png"),
        features: [
            "Small Bar", " Swimming  Pool", "Breakfast Included", "Powerful Wifi", "24h Reception"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/Bar.png"),
            require("../../../../../assets/icons/Swimming_Pool.png"),
            require("../../../../../assets/icons/Breakfast.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/24h_Reception.png")
        ]
    }, {
        hostelName: "PARACAS BACKPACKERS HOUSE",
        hostelImage: require("../../../../../assets/images/hostels/hostelParacas3.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomParacas3.png"),
        features: [
            "Family Hostel", "Kitchen", "Chill Out", "Powerful Wifi", "Good Rating"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/family.png"),
            require("../../../../../assets/icons/kitchen.png"),
            require("../../../../../assets/icons/chill.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/ratings.png")
        ]
    }
];

export default class ParacasAccommodation extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/paracasHeader.png")}
                                      title={'Paracas'}/>
                    <CityAccommodation dataArray={hostels}/>
                </ScrollView>
            </Container>
        )
    }
}