import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';

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
    },
    {
        title: 'Burgere',
        description: 'Just burger for you',
        price: '$3',
        image: 'https://f.vividscreen.info/soft/b26d767db99f758c557ce17068bf0e9f/Fast-Food-Burgers-1024x768.jpg'
    }
]


const MenuItems = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {localMenu.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} />
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
    </View>
)


const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '500'
    }
})

export default MenuItems;
