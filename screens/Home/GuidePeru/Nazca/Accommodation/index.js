import React, {Component} from "react";
import {ScrollView} from "react-native";
import {Container} from "native-base";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityAccommodation from "../../../../../components/common/guide/city/Accommodation/CommonAccommodation";

const hostels = [
    {
        hostelName: "NAZCA TRAVEL ONE",
        hostelImage: require("../../../../../assets/images/hostels/hostelNazca1.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomNazca1.png"),
        features: [
            "Breakfast Included", "Powerful Wifi", "Cleaning Service", "Quiet Option", "Breakfast Included"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/Breakfast.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/Clean_Service.png"),
            require("../../../../../assets/icons/angel.png"),
            require("../../../../../assets/icons/Breakfast.png")
        ]
    }, {
        hostelName: "HOTEL ALEGRIA",
        hostelImage: require("../../../../../assets/images/hostels/hostelNazca2.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomNazca2.png"),
        features: [
            "Quiet Option", "Family Hostel", "Breakfast Included", "Powerful Wifi", "24h Reception"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/angel.png"),
            require("../../../../../assets/icons/family.png"),
            require("../../../../../assets/icons/Breakfast.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/24h_Reception.png")
        ]
    }
];

export default class NazcaAccomodation extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/paracasHeader.png")}
                                      title={'Nazca'}/>
                    <CityAccommodation dataArray={hostels}/>
                </ScrollView>
            </Container>
        )
    }
}