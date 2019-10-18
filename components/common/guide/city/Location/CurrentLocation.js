import React, {Component} from "react";
import {Dimensions, Platform, View, Text, Alert} from "react-native";
import MapViewDirections from 'react-native-maps-directions';
import {Spinner} from 'native-base';
import {Constants, Location, Permissions, MapView} from 'expo';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = -12.1249322;
const LONGITUDE = -77.0247314;
const LATITUDE_DELTA = 0.0200;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8';

export default class currentLocation extends Component {

    state = {
        Location: null,
        currentLocation: "",
        coordinates: [
            {
                latitude: this.props.cityLocation.latitude,
                longitude: this.props.cityLocation.longitude,
            },
        ]
        ,
    };
    mapView = null;

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        let locationServices = await Location.hasServicesEnabledAsync()
        if (status !== 'granted') {
            alert('Permission to access location was denied');
        }else if(!locationServices){
            Alert.alert(
                'Location Services Disable',
                'Go to your phone`s settings to turn on Location Services for this application ',
                [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    {text: 'OK', onPress: () => null},
                ],
                {cancelable: false},
            );
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({location});

        const currentLocation = this.state.location;
        const locationToState = {
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
        };
        this.setState({currentLocation: locationToState});
    };

    render() {
        return (
            <View>
                {
                    this.state.currentLocation === ""
                        ? <View style={{alignItems: "center", justifyContent: "center"}}>
                            <View style={{marginTop: "25%"}}>
                                <Spinner color='red'/>
                                <Text>Loading Map</Text>
                            </View>
                        </View>
                        : <MapView
                            initialRegion={{
                                latitude: LATITUDE,
                                longitude: LONGITUDE,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA,
                            }}
                            style={{height: "100%", width: "100%"}}
                            ref={c => this.mapView = c}
                        >
                            <MapView.Marker coordinate={this.state.currentLocation}/>
                            {this.state.coordinates.map((coordinate, index) =>
                                <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate}/>
                            )}
                            {(this.state.currentLocation) && (
                                <MapViewDirections
                                    origin={this.state.currentLocation}
                                    waypoints={(this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1) : null}
                                    destination={this.state.coordinates[this.state.coordinates.length - 1]}
                                    apikey={GOOGLE_MAPS_APIKEY}
                                    strokeWidth={3}
                                    strokeColor="#3d87ff"
                                    optimizeWaypoints={true}
                                    onReady={result => {
                                        this.mapView.fitToCoordinates(result.coordinates, {
                                            edgePadding: {
                                                right: (width / 20),
                                                bottom: (height / 20),
                                                left: (width / 20),
                                                top: (height / 20),
                                            }
                                        });
                                    }}
                                />
                            )}
                        </MapView>
                }
            </View>
        );
    }
}