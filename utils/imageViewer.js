import React, {Component} from "react";
import {Modal} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

const images = [{
    props: {
        source: require("../assets/images/tours/colcaDataTour.png")
    }
}];

export default class imageViewer extends Component {
    render() {
        return (
            <Modal visible={this.props.visible} transparent={true}>
                <ImageViewer imageUrls={this.props.image} enableSwipeDown={true}
                             onCancel={() => this.props.handleImageViewer(false, null)}/>
            </Modal>
        );
    }
}