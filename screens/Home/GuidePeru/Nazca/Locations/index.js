import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityLocation from "../../../../../components/common/guide/city/Location/CommonLocation";

const dataLocation = {
    maps: [
        {
            map: require("../../../../../assets/images/maps/nazcaMap.png"),
            mapName: "Nazca map",
            description: "Use this map to find your way around the town of Nazca.",
        }
    ],
};

const cityLocation = {
    latitude: -14.8357889,
    longitude: -74.9487306,
};

export default class NazcaLocations extends Component {

    render() {
        return (
            <ScrollView>
                <CommonCityHeader image={require("../../../../../assets/images/backgrounds/nazcaHeader.png")}
                                  title={'Nazca'}/>
                <CityLocation
                    info={"See your current location in Nazca and find the Peru Hop meeting point from wherever you are"}
                    dataArray={dataLocation} cityLocation={cityLocation}/>
            </ScrollView>
        );
    }
}
