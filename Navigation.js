import React from 'react';
import {View, Text} from 'react-native';
import {NativeScreenNavigationContainer} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signup, Login, Home, Services, Message} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createRef} from 'react';
import 'react-native-gesture-handler';
import Onboarding from './src/screens/Main_Home_Screens/onboarding';
import Holder from './src/Navigation/holder';
//import {Home} from './src/screens/main_home_Screen/home';
import OneWayFlight from './src/screens/Header_Screen/onewayFlight';
import RoundTripFlight from './src/screens/Header_Screen/roundTripFlight';
import MultiCityFlight from './src/screens/Header_Screen/multiCityFlight';
import Hotels from './src/screens/Header_Screen/hotels';
import HotelInternational from './src/screens/Header_Screen/hotelInternational';
import TnB from './src/screens/Header_Screen/tnb';
import BookTrain from './src/screens/Header_Screen/bookTrain';
import BookBus from './src/screens/Header_Screen/bookBus';
import HolidayPackages from './src/screens/Header_Screen/holidayPackages';
import Taxi from './src/screens/Main_Home_Screens/taxi';
import TrainPnr from './src/screens/Main_Home_Screens/TrainPnr';
import Forex from './src/screens/Main_Home_Screens/Forex';
import Activities from './src/screens/Main_Home_Screens/Activities';
import SearchFlights from './src/booking/Flights/searchFlight';
import SelectedFlightDetails from './src/booking/Flights/selectedFlightDetails';
import PassengerFlightDetails from './src/booking/Flights/PassengerFlightDetails';
import SearchHotel from './src/booking/Hotels/searchHotel';
import MHome from './src/screens/Main_Home_Screens/home';
import Dummy from './src/screens/Main_Home_Screens/Dummy';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer ref={createRef()}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />

        <Stack.Screen name="Holder" component={Holder} />
        <Stack.Screen name="Home" component={MHome} />
        <Stack.Screen name="OneWayFlight" component={OneWayFlight} />
        <Stack.Screen name="RoundTripFlight" component={RoundTripFlight} />
        <Stack.Screen name="MultiCityFlight" component={MultiCityFlight} />

        <Stack.Screen name="Hotels" component={Hotels} />
        <Stack.Screen
          name="HotelInternational"
          component={HotelInternational}
        />
        <Stack.Screen name="TnB" component={TnB} />
        <Stack.Screen name="BookTrain" component={BookTrain} />
        <Stack.Screen name="BookBus" component={BookBus} />
        <Stack.Screen name="HolidayPackages" component={HolidayPackages} />
        <Stack.Screen name="Taxi" component={Taxi} />
        <Stack.Screen name="TrainPnr" component={TrainPnr} />
        <Stack.Screen name="Forex" component={Forex} />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="SearchFlights" component={SearchFlights} />
        <Stack.Screen
          name="SelectedFlightDetails"
          component={SelectedFlightDetails}
        />
        <Stack.Screen
          name="PassengerFlightDetails"
          component={PassengerFlightDetails}
        />
        <Stack.Screen name="SearchHotel" component={SearchHotel} />
        <Stack.Screen name="Dummy" component={Dummy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
