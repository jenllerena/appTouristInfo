import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityLocation from "../../../../../components/common/guide/city/Location/CommonLocation";

const dataLocation = {
    maps: [
        {
            map: require("../../../../../assets/images/maps/copacabanaMap.png"),
            mapName: "Copacabana map",
            description: "Find your way around the town of Copacabana with this map.",
        }
    ],
};

const cityLocation = {
    latitude: -16.1744899,
    longitude: -69.1145398,
};

export default class CopacabanaLocations extends Component {
    render() {
        return (
            <ScrollView>
                <CommonCityHeader image={require("../../../../../assets/images/backgrounds/copacabanaHeader.png")}
                                  title={'Copacabana'}/>
                <CityLocation
                    info={"See your current location and find the Bolivia Hop meeting point from wherever you are"}
                    dataArray={dataLocation}
                    cityLocation={cityLocation}/>
            </ScrollView>
        );
    }
}