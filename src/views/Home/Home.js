import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Categories from '../../components/Categories';
import HeaderTabs from '../../components/HeaderTabs'
import Restaurantitems from '../../components/RestaurantItems';
import SearchBar from '../../components/SearchBar'

const YELP_API_KEY = "R-oK_SU5_3x5L_gsDVXNyxUwUJCHsseOdA5AYAdr_pet5rjDnNJ0Yd-CjIrH855CjRq__qt6sBhg0QrbGNTPH7jrBeN40lDcIk42xWXMkK423-uLjyhI8QWNDUt1YXYx"

const Home = () => {
    const [restaurantData, setRestaurantData] = useState([]);

    const [city, setCity] = useState('Saint-Petersburg')

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
            .then((json) => setRestaurantData(json.businesses))
    }

    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city]);

    return (
        <View style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <Restaurantitems restaurantData={restaurantData} />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({

})

export default Home;
