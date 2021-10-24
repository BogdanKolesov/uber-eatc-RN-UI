import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { categoriesContent } from '../content/categoriesContent';


const Categories = () => {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingLeft: 15
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categoriesContent.map((item, index) => (
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
