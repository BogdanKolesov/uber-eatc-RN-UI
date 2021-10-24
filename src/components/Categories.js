import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { IMAGES } from '../constants/IMAGES'

const items = [
    {
        image: IMAGES.shoppingBag,
        text: 'Pick-up'
    },
    {
        image: IMAGES.bread,
        text: 'Bakery Items'
    },
    {
        image: IMAGES.fastFood,
        text: 'Fast Food'
    },
    {
        image: IMAGES.deals,
        text: 'Deals'
    },
    {
        image: IMAGES.coffee,
        text: 'Coffee & Tea'
    },
    {
        image: IMAGES.desserts,
        text: 'Desserts'
    }
]

const Categories = () => {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingLeft: 15
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
                        <Image source={item.image} style={{
                            width: 50,
                            height: 40,
                            resizeMode: 'contain'
                        }} />
                        <Text style={{
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}
                        >{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Categories;
