import {Col, Grid, Row} from "react-native-easy-grid";
import {Text, View} from "native-base";
import CommonCitiesList from "./CommonCitiesList";
import React, {Component} from "react";

const fontStyles = require("../../../styles/fontStyles");
const utilsStyles = require("../../../styles/utilsStyles");

export default class CommonCountryGuide extends Component {
    render() {
        return (
            <Grid style={{alignItems: 'baseline'}}>
                <Col>
                    <Row>
                        <View style={utilsStyles.containers}>
                            <Text style={[fontStyles.title_1, {textAlign: "center"}]}>
                                {this.props.title}
                            </Text>
                        </View>
                    </Row>
                    <Row>
                        <Text style={fontStyles.bodyText}>
                            {this.props.description}
                        </Text>
                    </Row>
                    <Grid style={{alignItems: "center",justifyContent: "center"}}>
                        <View style={utilsStyles.containers}>
                            <CommonCitiesList navigation={this.props.navigation}
                                              dataArray={this.props.data}/>
                        </View>
                    </Grid>
                </Col>
            </Grid>
        )
    }
}