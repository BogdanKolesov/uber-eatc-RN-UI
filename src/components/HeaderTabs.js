import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const HeaderTabs = ({ activeTab, setActiveTab }) => {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: '10%' }}>
            <HeaderButton
                text='Delivery'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text='Pickup'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    );
}

const HeaderButton = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? 'black' : 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{ color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: 'bold' }}> {props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

export default HeaderTabs;
