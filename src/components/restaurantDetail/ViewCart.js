import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ViewCart = ({ restaurantName, active }) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 20,
            elevation: (Platform.OS === 'android') ? 50 : 0,
            zIndex: 5,
            opacity: active ? 1 : 0

        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%'
            }}>
                <TouchableOpacity style={{
                    marginTop: 20,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    padding: 13,
                    borderRadius: 30,
                    width: 300,
                    position: 'relative',
                }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        {restaurantName}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ViewCart;
