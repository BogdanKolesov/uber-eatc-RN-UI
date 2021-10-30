import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../../components/restaurantDetail/About';
import MenuItems from '../../components/restaurantDetail/MenuItems';
import ViewCart from '../../components/restaurantDetail/ViewCart';

const RestaurantDetail = ({ route, navigation }) => {
    return (
        <View style={{ marginTop: '7.5%' }}>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems restaurantName={route.params.name} />
            <ViewCart
                active
                navigation={navigation}
                restaurantName={route.params.name} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default RestaurantDetail;
