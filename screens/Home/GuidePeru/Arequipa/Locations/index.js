import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityLocation from "../../../../../components/common/guide/city/Location/CommonLocation";

const dataLocation = {
    maps: [
        {
            map: require("../../../../../assets/images/maps/arequipaMap.png"),
            mapName: "Arequipa map",
            description: "Use this map to find your way around Arequipa and explore some of its best attractions.",
        }
    ],
};

const cityLocation = {
    latitude: -16.4040105,
    longitude: -71.5565211,
};

export default class ArequipaLocations extends Component {
    render() {
        return (
            <ScrollView>
                <CommonCityHeader image={require("../../../../../assets/images/backgrounds/arequipaHeader.png")}
                                  title={'Arequipa'}/>
                <CityLocation
                    info={"See your current location in Arequipa and find the Peru Hop meeting point from wherever you are"}
                    dataArray={dataLocation}
                    cityLocation={cityLocation}/>
            </ScrollView>
        );
    }
}