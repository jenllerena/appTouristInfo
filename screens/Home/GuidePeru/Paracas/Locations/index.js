import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityLocation from "../../../../../components/common/guide/city/Location/CommonLocation";

const dataLocation = {
    maps: [
        {
            map: require("../../../../../assets/images/maps/paracasMap.png"),
            mapName: "Paracas map",
            description: "Find your way around the town of Paracas with this convenient map.",
        }
    ],
};

const cityLocation = {
    latitude: -13.8348075,
    longitude: -76.2676264,
};

export default class ParacasLocations extends Component {
    render() {
        return (
            <ScrollView>
                <CommonCityHeader image={require("../../../../../assets/images/backgrounds/paracasHeader.png")}
                                  title={'Paracas'}/>
                <CityLocation
                    info={"See your current location in Paracas and find the Peru Hop meeting point from wherever you are"}
                    dataArray={dataLocation} cityLocation={cityLocation}/>
            </ScrollView>
        );
    }
}
