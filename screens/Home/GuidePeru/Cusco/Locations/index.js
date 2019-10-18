import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityLocation from "../../../../../components/common/guide/city/Location/CommonLocation";

const dataLocation = {
    maps: [
        {
            map: require("../../../../../assets/images/maps/cuscoMap.png"),
            mapName: "Cusco map",
            description: "Find your way around Cusco with this map.",
        }
    ],
};

const cityLocation = {
    latitude: -13.5298427,
    longitude: -72.0092896,
};

export default class CuscoLocations extends Component {
    render() {
        return (
            <ScrollView>
                <CommonCityHeader image={require("../../../../../assets/images/backgrounds/cuscoHeader.png")}
                                  title={'Cusco'}/>
                <CityLocation
                    info={"See your current location in Cusco and find the Peru Hop meeting point from wherever you are"}
                    dataArray={dataLocation}
                    cityLocation={cityLocation}/>
            </ScrollView>
        );
    }
}