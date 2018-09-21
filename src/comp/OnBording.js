
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Modal, TouchableOpacity, TouchableHighlight, StatusBar,Dimensions,PixelRatio } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Title, Thumbnail, Left, Button, Right } from 'native-base'
import Swiper from 'react-native-swiper';


export default class OnBording extends Component {
   





    render() {
        return (
            <Container style={styles.container}>
            <Body>
                <View style={styles.viewTitle}>
                    <Text style={styles.titleName}>Demo Application</Text>
                </View>
                <View style={styles.viewSlider}>
                    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
                        <View style={styles.slide1}>
                            <Image style={styles.sliderIcon}
                                source={require('../assets/images/1.jpeg')}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image style={styles.sliderIcon}
                                source={require('../assets/images/2.jpeg')}
                            />
                        </View>
                        <View style={styles.slide3}>
                            <Image style={styles.sliderIcon}
                                source={require('../assets/images/3.jpeg')}
                            />
                        </View>
                    </Swiper>
                </View>
                <Button
                        title='Submit'
                        buttonStyle={{
                            backgroundColor: "#000000",
                            width: Dimensions.get('screen').width - 50,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5,
                            marginBottom: 10,
                        }}
                    />
            </Body>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    viewTitle: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    titleName: {
        fontSize:18,
        color:'#000000',
        fontWeight:'bold',
    },
    viewSlider: {
        flex: 6,
        top: -10,

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewContinueBtn:{
        flex:2,
    }
   
   
    
});
