import React, {Component} from "react";
import {ScrollView} from "react-native";
import {Container} from "native-base";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityAccommodation from "../../../../../components/common/guide/city/Accommodation/CommonAccommodation";

const hostels = [
    {
        hostelName: "Wild Rover",
        hostelImage: require("../../../../../assets/images/hostels/hostelArequipa1.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomArequipa1.png"),
        features: [
            "  Swimming  Pool", "Powerful Wifi", "Cleaning Service", "24 Hour Security", "Bar"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/Swimming_Pool.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/Clean_Service.png"),
            require("../../../../../assets/icons/Security.png"),
            require("../../../../../assets/icons/Bar.png")
        ]
    },
    {
        hostelName: "Flying Dog",
        hostelImage: require("../../../../../assets/images/hostels/hostelArequipa2.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomArequipa2.png"),
        features: [
            "Bar", "Chill Out", "Breakfast Included", "Powerful wifi", "24h Reception"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/Bar.png"),
            require("../../../../../assets/icons/chill.png"),
            require("../../../../../assets/icons/Breakfast.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/24h_Reception.png")
        ]
    },
    {
        hostelName: "Dragonfly",
        hostelImage: require("../../../../../assets/images/hostels/hostelArequipa3.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomArequipa3.png"),
        features: [
            "Bar", "Comfortable bed", "Chill Out", "Quality Food", "Multi-lingual Staff"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/Bar.png"),
            require("../../../../../assets/icons/bed.png"),
            require("../../../../../assets/icons/chill.png"),
            require("../../../../../assets/icons/food.png"),
            require("../../../../../assets/icons/staff.png")
        ]
    }
];
export default class ArequipaAccommodation extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCityHeader
                        image={require("../../../../../assets/images/backgrounds/arequipaHeader.png")}
                        title={'Arequipa'}/>
                    <CityAccommodation dataArray={hostels}/>
                </ScrollView>
            </Container>
        )
    }
}