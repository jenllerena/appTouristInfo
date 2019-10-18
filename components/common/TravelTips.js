import React, {Component} from "react";
import {Accordion, Text, View} from "native-base";
import {Image, ImageBackground} from "react-native";

const utilsStyles = require("../../styles/utilsStyles");

export default class TravelTips extends Component{
     dataArray = [
         {title: "What to Bring", content: this.props.vista1, icon: require("../../assets/icons/arrowDown.png")},
         {title: "Hightlights", content: this.props.vista2, icon: require("../../assets/icons/arrowDown.png")},
         {title: "Safety Tips", content: this.props.vista3, icon: require("../../assets/icons/arrowDown.png")}
    ];
    renderHeader=(item)=>{
        return (
            <View style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                height: 45,
            }}>
                <ImageBackground style={utilsStyles.iconAccordionHeader}>
                    <Image
                        style={{alignItems:'center'}}
                        source={item.icon}
                    />
                </ImageBackground>
                <View style={utilsStyles.accordionHeader}>
                    <Text style={utilsStyles.accordionTitle}>
                        {item.title}
                    </Text>
                </View>
            </View>
        );
    };

    renderContent=(item)=>{
        return (
            <View>
                {item.content}
            </View>
        );
    };

    render(){
        return(
            <Accordion style={{margin: 5}}
                       dataArray={this.dataArray}
                       animation={true}
                       expanded={true}
                       renderHeader={this.renderHeader}
                       renderContent={this.renderContent}
            />
        )
    }
}