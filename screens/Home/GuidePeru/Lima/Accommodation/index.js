import React, {Component} from "react";
import {ScrollView} from "react-native";
import {Container} from "native-base";
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityAccommodation from "../../../../../components/common/guide/city/Accommodation/CommonAccommodation";

const hostels = [
    {
        hostelName: "Pool Paradise",
        hostelImage: require("../../../../../assets/images/hostels/PoolParadiseLima.png"),
        dataImage: require("../../../../../assets/images/hostels/roomTypeLima.png"),
        features: [
            " Swimming  Pool", "Comfortable Bed", "Chill Out", "Quality Food", "Multilingual Staff"
        ],
        featuresIcon: [
            require("../../../../../assets/icons/Swimming_Pool.png"),
            require("../../../../../assets/icons/bed.png"),
            require("../../../../../assets/icons/chill.png"),
            require("../../../../../assets/icons/food.png"),
            require("../../../../../assets/icons/guide.png")
        ]
    }
];

export default class LimaAccommodation extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <CommonCityHeader image={require("../../../../../assets/images/backgrounds/lima-header.png")}
                                      title={'Lima'}/>
                    <CityAccommodation dataArray={hostels}/>
                </ScrollView>
            </Container>
        )
    }
}