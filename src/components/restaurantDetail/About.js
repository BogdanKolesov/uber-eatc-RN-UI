import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';



const About = (props) => {

    const { name, image, price, reviews, rating, categories } = props.route.params

    const formattedCategories = categories.map((cat) => cat.title).join(' • ')

    const description = `${formattedCategories} ${price ? ' • ' : ' '} ${rating} ⭐ (${reviews})`


    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName title={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
)

const RestaurantName = (props) => (
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
    }}>{props.description}</Text>
)

const styles = StyleSheet.create({})

export default About;
