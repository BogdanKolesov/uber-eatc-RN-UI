import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../../components/restaurantDetail/About';
import MenuItems from '../../components/restaurantDetail/MenuItems';

const RestaurantDetail = () => {
    return (
        <View style={{ marginTop: '7.5%' }}>
            <About />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems />
        </View>
    );
}

const styles = StyleSheet.create({})

export default RestaurantDetail;
