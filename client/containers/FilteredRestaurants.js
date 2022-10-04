import React, {useState} from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RestaurantPreviewSmall from '../components/RestaurantPreviewSmall';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const logo1 = {
  uri: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1878&q=80',
  width: 140,
  height: 100

};
const logo2 = {
  uri: 'https://images.unsplash.com/photo-1521001561976-a717fb67bce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  width: 140,
  height: 100

};


    let current_date = moment().format('YYYY-MM-DD')
    let current_time = moment().format('HH:mm')



const FilteredRestaurants = ({restaurants, route}) => {

  const navigation = useNavigation();
//   const restaurantNodes = restaurants.map((restaurant, index)=>{
//     return(
//         <RestaurantPreviewSmall
//             key={index}
//             name={restaurant.displayName}
//             index={index}
//         />
//     )
// })


  return (
  <>
        <ScrollView>{restaurants.map((restaurant, index) => { 
          return ( 
            <TouchableOpacity key={index} index={index}
            onPress={
              () => navigation.navigate(
                // params are stringified above (not objects)
                'Restaurant', { 
                    restaurantId: restaurant.id, 
                    partysize: 2, 
                    date: current_date, 
                    time: current_time 
                })}
                

            
                  >


            <View horizontal={true}>
              <Text  >{restaurant.displayName}</Text>
              <Image source={logo2}/>
            </View>
            </TouchableOpacity>
            );})}
        </ScrollView>
</>

)};


export default FilteredRestaurants;



  // <View >
  //     <ScrollView>
  //       {/* <Text style={{ fontSize: 20, color: 'black', paddingBottom: 20}}>
  //         [Filter Value] Restaurants
  //       </Text> */}
  //       <View style={{flex: 2}}>
  //         <ScrollView horizontal={true}>


  //             <RestaurantPreviewSmall/>
  //             <RestaurantPreviewSmall/>
  //             <RestaurantPreviewSmall/>
  //             <RestaurantPreviewSmall/>


  //         </ScrollView>
  //       </View>
  //   </ScrollView>
  // </View>
