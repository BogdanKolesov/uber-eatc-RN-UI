import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HeaderTabs from '../../components/HeaderTabs'
import SearchBar from '../../components/SearchBar'

const Home = () => {
    return (
        <View style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Home;
