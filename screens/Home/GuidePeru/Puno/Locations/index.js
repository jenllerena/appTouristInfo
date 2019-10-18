import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityLocation from "../../../../../components/common/guide/city/Location/CommonLocation";

const dataLocation = {
    maps: [
        {
            map: require("../../../../../assets/images/maps/punoMap.png"),
            mapName: "Puno map",
            description: "Use this map to find your way around Puno.",
        }
    ],
};

const cityLocation = {
    latitude: -15.8467711,
    longitude: -70.051408,
};

export default class PunoLocations extends Component {
    render() {
        return (
            <ScrollView>
                <CommonCityHeader image={require("../../../../../assets/images/backgrounds/punoHeader.png")}
                                  title={'Puno'}/>
                <CityLocation
                    info={"See your current location in Puno and find the Peru Hop meeting point from wherever you are"}
                    dataArray={dataLocation} cityLocation={cityLocation}/>
            </ScrollView>
        );
    }
}