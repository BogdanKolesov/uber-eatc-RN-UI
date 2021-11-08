import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, SafeAreaView, View, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native'
import MenuItems from '../../components/restaurantDetail/MenuItems';
import firebase from '../../../firebase'


const OrderCompleted = () => {

    const [lastOrder, setLastOrder] = useState({
        items: [
        ],
    })
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items
        .map((item => Number(item.price.replace('$', ''))))
        .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = `$${total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })}`

    useEffect(() => {
        const db = firebase.firestore()
        const unsubscribe = db
            .collection('orders')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .onSnapshot((snapshot => {
                snapshot.docs.map((doc) => {
                    setLastOrder(doc.data())
                })
            }))

        return () => unsubscribe()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{
                margin: 15,
                alignItems: 'center',
                height: '100%'
            }}>
                <LottieView
                    style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
                    source={require('./../../../assets/animations/check-mark.json')}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 15
                }}>
                    You order at {restaurantName} has been placed for {totalUSD}
                </Text>
                <ScrollView>
                    <MenuItems
                        foods={lastOrder.items}
                        hideCheckbox={true}
                        marginLeft={10}
                    />
                    <LottieView
                        style={{ height: 200, alignSelf: "center" }}
                        source={require("./../../../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default OrderCompleted;
