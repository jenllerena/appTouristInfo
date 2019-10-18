import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CommonCityHeader from "../../../../../components/common/guide/city/CommonCityHeader";
import CityLocation from "../../../../../components/common/guide/city/Location/CommonLocation";

const dataLocation = {
    maps: [
        {
            map: require("../../../../../assets/images/maps/huacachinaMap.png"),
            mapName: "Huacachina map",
            description: "Find your way around the Huacachina desert oasis with this map.",
        }
    ],
};

const cityLocation = {
    latitude: -14.087497,
    longitude: -75.764203,
};

export default class HuacachinaLocations extends Component {
    render() {
        return (
            <ScrollView>
                <CommonCityHeader image={require("../../../../../assets/images/backgrounds/huacachinaHeader.png")}
                                  title={'Huacachina'}/>
                <CityLocation
                    info={"See your current location in Huacachina and find the Peru Hop meeting point from wherever you are"}
                    dataArray={dataLocation} cityLocation={cityLocation}/>
            </ScrollView>
        );
    }
}
