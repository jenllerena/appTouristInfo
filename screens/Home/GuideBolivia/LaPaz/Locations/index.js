import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityLocation from "../../../../../components/common/guide/city/Location/CommonLocation";

const dataLocation = {
    maps: [
        {
            map: require("../../../../../assets/images/maps/laPazMap.png"),
            mapName: "La Paz map",
            description: "Find your way around the city of La Paz with this map.",
        }
    ],
};

const cityLocation = {
    latitude: -13.8348075,
    longitude: -68.194118,
};

export default class LaPazLocations extends Component {
    render() {
        return (
            <ScrollView>
                <CommonCityHeader image={require("../../../../../assets/images/backgrounds/laPazHeader.png")}
                                  title={'La Paz'}/>
                <CityLocation
                    infoç={"See your current location and find the Bolivia Hop meeting point from wherever you are."}
                    dataArray={dataLocation}
                    cityLocation={cityLocation}/>
            </ScrollView>
        );
    }
}