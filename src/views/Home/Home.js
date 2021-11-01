import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../../components/home/BottomTabs';
import Categories from '../../components/home/Categories';
import HeaderTabs from '../../components/home/HeaderTabs'
import Restaurantitems from '../../components/home/RestaurantItems';
import SearchBar from '../../components/home/SearchBar'

//TODO: REPLACE SCREENS

const YELP_API_KEY = "R-oK_SU5_3x5L_gsDVXNyxUwUJCHsseOdA5AYAdr_pet5rjDnNJ0Yd-CjIrH855CjRq__qt6sBhg0QrbGNTPH7jrBeN40lDcIk42xWXMkK423-uLjyhI8QWNDUt1YXYx"

const Home = ({ navigation }) => {
    const [restaurantData, setRestaurantData] = useState([])
    const [city, setCity] = useState('Saint-Petersburg')
    const [activeTab, setActiveTab] = useState('Delivery')

    // const clientID = 'KlFzF5h48TIl1UKc2Y7MjQ'

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;


        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))))
    }

    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city, activeTab]);

    return (
        <View style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <Restaurantitems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />

            <BottomTabs />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Home;
