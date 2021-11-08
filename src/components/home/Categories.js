import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { categoriesData } from '../../data/categoriesData';


const Categories = () => {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingLeft: 15
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categoriesData.map((item, index) => (
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

export default Categories;
