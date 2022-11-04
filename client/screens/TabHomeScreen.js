import React, {useState, useEffect} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView, ScrollView, Image} from 'react-native';
import FilteredRestaurants from '../containers/FilteredRestaurants';
import { getRestaurants } from '../services/RestaurantService'
import HomeHeader from '../components/HomeHeader';

const TabHomeScreen = ({ navigation }) => {
        
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        // gets all restaurants to display as 'Available Now!'
        getRestaurants()
            .then(restaurants => setRestaurants(restaurants));
    }, []);

    // image source for featured restaurant
    const highlightedRestoImage = {
        uri: restaurants[0].imageURL,
        width: 350,
        height: 200
    };

    let preset_datetime = new Date('2022-10-01T12:00:00');

    return (
        <SafeAreaView >

            <ScrollView>
                
                <HomeHeader/>

                <View style={styles.homeFeatures}>

                    <Text style={styles.textH2Dark}>Pick of the month</Text>

                    <View style={styles.pinkUnderLine}/>
                        <TouchableOpacity
                            onPress={ () => navigation.navigate(
                                // params are stringified above (not objects)
                                'Restaurant', { 
                                    restaurantId: restaurants[0].id, 
                                    partySize: 2, 
                                    datetime: preset_datetime, 
                                }
                            )}>
                            <Text style={styles.textH3Dark}>
                                {highlightedResto.displayName}
                            </Text>
                            <Text style={styles.paraDark}>
                                {highlightedResto.description}
                            </Text>
                            <Image source={highlightedRestoImage}/>
                        </TouchableOpacity>
                    <View style={styles.featuredRestos}>

                        <Text style={styles.textH2Dark}>
                            Available now!
                        </Text>

                        <View style={styles.pinkUnderLine}/>

                        <FilteredRestaurants restaurants={restaurants}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>


    );
    }

    //! DONE
    
    const styles = StyleSheet.create({
    mainView: {
        padding: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#27233A'
    },
    logo: {
        resizeMode: "contain",
        height: 100,
    },
    baseText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    innerText: {
        color: '#F38599',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    pinkUnderLine : {
        height:1,
        width: 100,
        marginBottom: 20,
        backgroundColor: '#F38599'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F38599',
        borderRadius: 10,
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    ButtonText: {
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
        fontSize: 15,
        color: '#27233A',
    },
    textH2: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
        fontFamily: 'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Light',
    },
    textH2Dark: {
        fontSize: 22,
        textAlign: 'left',
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    textH3Dark: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 3,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-ExtraBold',
    },
    paraDark: {
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 5,
        color: '#27233A',
        fontFamily:'Covered_By_Your_Grace,Karla,Rubik_Dirt/Karla-Regular',
    },
    homeFeatures: {
        padding: 20,
        justifyContent: 'flex-start',
    },
    featuredRestos: {
        paddingTop: 30,
    }
    });
export default TabHomeScreen;