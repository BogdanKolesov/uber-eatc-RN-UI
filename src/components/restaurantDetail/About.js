import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


const yelpRestaurantInfo = {
    name: 'Famous Kitchen Germany',
    image: 'https://cdn.pixabay.com/photo/2020/03/26/20/54/table-4971787_1280.jpg',
    price: '$2',
    reviews: '1500',
    rating: 5,
    categories: [{ title: ' Germany' }, { title: 'Comfort Food' }]
}


const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo

const formattedCategories = categories.map((cat) => cat.title).join(' • ')

const description = `${formattedCategories} ${price ? ' • ' : ' '} ${rating} ⭐ (${reviews})`

const About = () => {
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
