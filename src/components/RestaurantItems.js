import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: 'Bar Stan',
        image_url: 'https://cdn.pixabay.com/photo/2020/03/26/20/54/table-4971787_1280.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$4',
        revievs: 1244,
        rating: 4.5
    },
    {
        name: 'Liferr',
        image_url: 'https://cdn.pixabay.com/photo/2020/02/07/22/42/meal-4828580_1280.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$3',
        revievs: 1212,
        rating: 2.9
    },
    {
        name: 'India',
        image_url: 'https://cdn.pixabay.com/photo/2019/07/01/06/39/sweden-4309297_1280.jpg',
        categories: ['Cafe', 'Indian'],
        price: '$7',
        revievs: 1222,
        rating: 3.2
    },
]

const Restaurantitems = ({ restaurantData }) => {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {restaurantData.map((restaurant, index) => (
                <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            ))}
        </TouchableOpacity>
    );
}

const RestaurantImage = (props) => (
    <>
        <Image source={{
            uri: props.image
        }}
            style={{
                width: '100%',
                height: 180
            }} />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 5
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-50 min</Text>
        </View>
        <View style={{
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15
        }}>
            <Text >{props.rating}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({})

export default Restaurantitems;
