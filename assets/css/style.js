import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "width": "90%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "fontFamily": "arial"
    },
    "ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "li:first-child": {
        "border": "none"
    },
    "li": {
        "backgroundColor": "#d3d3d3",
        "borderTop": "3px dashed red"
    },
    "row:first-child": {
        "marginTop": 2,
        "color": "gray"
    },
    "test": {
        "height": 3,
        "border": "1px solid black",
        "backgroundColor": "white",
        "textAlign": "center",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 1.5,
        "color": "black",
        "borderRadius": 5
    },
    "profile-picture": {
        "maxHeight": 100,
        "display": "inline-block",
        "borderRadius": "50%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "user_name": {
        "display": "inline-block",
        "position": "absolute",
        "fontWeight": "100",
        "fontSize": 2.7
    },
    "timestamp": {
        "display": "inline-block"
    }
});