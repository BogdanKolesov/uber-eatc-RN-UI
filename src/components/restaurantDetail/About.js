import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const image = 'https://cdn.pixabay.com/photo/2020/03/26/20/54/table-4971787_1280.jpg'

const title = 'Famous Kitchn Germany'

const desctiption = 'Germany and Taste food'

const About = () => {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription desctiption={desctiption} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
)

const RestaurantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15
    }}>{props.title}</Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.5
    }}>{props.desctiption}</Text>
)

const styles = StyleSheet.create({})

export default About;
