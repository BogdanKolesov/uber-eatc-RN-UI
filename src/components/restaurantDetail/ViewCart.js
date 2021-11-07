import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import firebase from '../../../firebase';

const ViewCart = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false)

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items
        .map((item => Number(item.price.replace('$', ''))))
        .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = `$${total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })}`

    const addOrderToFireBase = () => {
        const db = firebase.firestore()
        db.collection('orders').add({
            items: items,
            restaurantName: restaurantName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setModalVisible(false);
        navigation.navigate('OrderCompleted')
    }

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity style={{
                                marginTop: 20,
                                backgroundColor: 'black',
                                alignItems: 'center',
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative'
                            }}
                                onPress={() => {
                                    addOrderToFireBase()
                                }}
                            >
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                }}>Checkout</Text>
                                <Text style={{
                                    position: 'absolute',
                                    color: 'white',
                                    right: 20,
                                    fontSize: 15,
                                    top: 17
                                }}>{total ? totalUSD : ''}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    return (

        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                < View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 20,
                    elevation: (Platform.OS === 'android') ? 50 : 0,
                    zIndex: 5

                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        <TouchableOpacity style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            backgroundColor: 'black',
                            alignItems: 'center',
                            padding: 15,
                            borderRadius: 30,
                            width: 230,
                            position: 'relative',
                        }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginRight: '23%' }}>
                                View cart </Text>
                            <Text style={{ color: 'white', fontSize: 20, marginRight: '5%' }}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            ) : (<Text> </Text>)}
        </>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 500,
        borderWidth: 1
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    subtotalText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    }
})

export default ViewCart;
