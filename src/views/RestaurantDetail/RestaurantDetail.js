import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../../components/restaurantDetail/About';
import MenuItems from '../../components/restaurantDetail/MenuItems';
import ViewCart from '../../components/restaurantDetail/ViewCart';
const localMenu = [
    {
        title: 'Borsh',
        description: 'Russian and Ukrain soup',
        price: '$3',
        image: 'https://elsol-compress.s3-accelerate.amazonaws.com/imagenes/001/006/495/001006495.jpg'
    },
    {
        title: 'Free',
        description: 'Classic potata',
        price: '$1.24',
        image: 'https://pbs.twimg.com/media/DurKbd2WsAAaTjv.jpg'
    },
    {
        title: 'Burgere',
        description: 'Just burger for you',
        price: '$3',
        image: 'https://f.vividscreen.info/soft/b26d767db99f758c557ce17068bf0e9f/Fast-Food-Burgers-1024x768.jpg'
    },
    {
        title: 'Brokkole',
        description: 'For gourmans',
        price: '$2',
        image: 'https://golos.ua/images/items/2019-05/07/HFmVPS9fFzoG2exP/img_top.jpg'
    },
    {
        title: 'Burger',
        description: 'Just burger for you',
        price: '$3',
        image: 'https://f.vividscreen.info/soft/b26d767db99f758c557ce17068bf0e9f/Fast-Food-Burgers-1024x768.jpg'
    },
    {
        title: 'Borshe',
        description: 'Russian and Ukrain soup',
        price: '$3',
        image: 'https://elsol-compress.s3-accelerate.amazonaws.com/imagenes/001/006/495/001006495.jpg'
    }

]

const RestaurantDetail = ({ route, navigation }) => {
    return (
        <View style={{ marginTop: '7.5%' }}>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems restaurantName={route.params.name} foods={localMenu} />
            <ViewCart
                active
                navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default RestaurantDetail;
