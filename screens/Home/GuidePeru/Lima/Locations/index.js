import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityLocation from "../../../../../components/common/guide/city/Location/CommonLocation";

const dataLocation = {
    maps: [
        {
            map: require("../../../../../assets/images/maps/centerLimaMap.png"),
            mapName: "Center Lima map",
            description: "Use this map to help you explore some of the incredible sights in Lima’s Historic Center.",
        },
        {
            map: require("../../../../../assets/images/maps/mirafloresMap.png"),
            mapName: "Miraflores map"
        }
    ],
};

const cityLocation = {
    latitude: -12.1241877,
    longitude: -77.0242352,
};

export default class LimaLocations extends Component {
    render() {
        return (
            <ScrollView>
                <CommonCityHeader image={require("../../../../../assets/images/backgrounds/lima-header.png")}
                                  title={'Lima'}/>
                <CityLocation
                    info={"See your current location in Lima and find the Peru Hop meeting point from wherever you are"}
                    dataArray={dataLocation} cityLocation={cityLocation}/>
            </ScrollView>
        );
    }
}