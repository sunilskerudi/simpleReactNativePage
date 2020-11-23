import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SimpleName extends Component {
    render() {
        return (
            <View style={Styles.mainContainer}>
                <View style={Styles.secondContainer}>
                    <View style={Styles.insideContainerOne}>
                        <View style={Styles.smallBlocks}></View>
                        <Text style={Styles.containerTextOne}>Name</Text>
                        <View style={Styles.smallBlocks}></View>
                    </View>
                    <View style={Styles.insideContainerTwo}>
                        <View style={Styles.insideContainerThree}>
                            <Text style={Styles.containerTextOne}>Balance</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: windowWidth,
        width: windowHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b0b14',
    },
    secondContainer: {
        height: windowHeight / 3.2,
        width: windowWidth / 1.5,
        backgroundColor: "#EAF0F1",
        borderRadius: 20
    },
    insideContainerOne: {
        backgroundColor: "#FFF",
        height: windowHeight / 6,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        borderBottomLeftRadius: 40,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    smallBlocks: {
        height: windowHeight / 15,
        width: windowWidth / 10,
        backgroundColor: "#2B2B52",
        borderRadius: 10
    },
    containerTextOne: {
        textDecorationColor: "#000",
        fontSize: 25
    },
    insideContainerTwo: {
        height: windowHeight / 7,
        backgroundColor: "#FFF",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        // borderColor: "#FFF"
    },
    insideContainerThree: {
        height: windowHeight / 7,
        backgroundColor: "#EAF0F1",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    }

})