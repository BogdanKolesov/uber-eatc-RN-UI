import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native'

const OrderCompleted = () => {
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items
        .map((item => Number(item.price.replace('$', ''))))
        .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = `$${total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })}`
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Text>You order at {restaurantName} has been placed for {totalUSD}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default OrderCompleted;
