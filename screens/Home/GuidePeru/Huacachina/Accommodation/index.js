import React, {Component} from "react";
import {ScrollView} from "react-native";
import {Container} from "native-base";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityAccommodation from "../../../../../components/common/guide/city/Accommodation/CommonAccommodation";

const hostels = [
    {
        hostelName: "WILD ROVER HOSTEL",
        hostelImage: require("../../../../../assets/images/hostels/hostelHuacachina1.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomHuacachina1.png"),
        features: [
            " Swimming   Pool", "Powerful Wifi", "Cleaning Service", "24 Hour Security", "Bar"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/Swimming_Pool.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/Clean_Service.png"),
            require("../../../../../assets/icons/Security.png"),
            require("../../../../../assets/icons/Bar.png")
        ]
    }, {
        hostelName: "LA CASA DE BAMBOO",
        hostelImage: require("../../../../../assets/images/hostels/hostelHuacachina2.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomHuacachina2.png"),
        features: ["Quiet Option", "Family Hostel", "Vegan food available", "Powerful wifi", "24h Reception"],
        featuresIcon: [
            require("../../../../../assets/icons/angel.png"),
            require("../../../../../assets/icons/family.png"),
            require("../../../../../assets/icons/fruit.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/24h_Reception.png")
        ]
    }, {
        hostelName: "CURASI",
        hostelImage: require("../../../../../assets/images/hostels/hostelHuacachina3.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomHuacachina3.png"),
        features: ["Family Hostel", "3 Start Hostel", "Chill Out", "Powerful Wifi", " Swimming  Pool"],
        featuresIcon: [
            require("../../../../../assets/icons/family.png"),
            require("../../../../../assets/icons/3stars.png"),
            require("../../../../../assets/icons/chill.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/Swimming_Pool.png")
        ]
    }
];
export default class HuacachinaAccommodation extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCityHeader
                        image={require("../../../../../assets/images/backgrounds/huacachinaHeader.png")}
                        title={'Huacachina'}/>
                    <CityAccommodation dataArray={hostels}/>
                </ScrollView>
            </Container>
        )
    }
}