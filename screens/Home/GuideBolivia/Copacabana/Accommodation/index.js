import React, {Component} from "react";
import {ScrollView} from "react-native";
import {Container} from "native-base";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityAccommodation from "../../../../../components/common/guide/city/Accommodation/CommonAccommodation";

const hostels = [
    {
        hostelName: "PERLA DEL LAGO HOTEL",
        hostelImage: require("../../../../../assets/images/hostels/hostelCopacabana1.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomCopacabana1.png"),
        features: [
            "3 Stars Hostel", "Powerful Wifi", "Cleaning Service", "Tv Room", "Hot Shower"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/3stars.png"),
            require("../../../../../assets/icons/Powerful_Wifi.png"),
            require("../../../../../assets/icons/Clean_Service.png"),
            require("../../../../../assets/icons/tv.png"),
            require("../../../../../assets/icons/thermometer.png")
        ]
    },
    {
        hostelName: "LA CUPULA",
        hostelImage: require("../../../../../assets/images/hostels/hostelCopacabana2.png"),
        dataImage: require("../../../../../assets/images/hostels/dataRoomCopacabana2.png"),
        features: [
            "Quiet Option", "Family Hostel", "Cleaning Service", "Comfortable Bed", "Multi-lingual Staff"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/angel.png"),
            require("../../../../../assets/icons/family.png"),
            require("../../../../../assets/icons/Clean_Service.png"),
            require("../../../../../assets/icons/bed.png"),
            require("../../../../../assets/icons/staff.png")
        ]
    }
];
export default class CopacabanaAccommodation extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCityHeader
                        image={require("../../../../../assets/images/backgrounds/copacabanaHeader.png")}
                        title={'Copacabana'}/>
                    <CityAccommodation dataArray={hostels}/>
                </ScrollView>
            </Container>
        )
    }
}