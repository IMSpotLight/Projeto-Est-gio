import React from "react";
import Home from "../screens/home";
import Exercicio from "../screens/exercicio";
import Mapa from "../screens/mapa";
import Pulsaçao from "../screens/pulsaçao";
import { Octicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";

const RootStack = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator.Navigator initialRouteName="MRS">
                <DrawerNavigator.Screen name="Home Page" component={Home} />
                <DrawerNavigator.Screen name="Exercicio" component={Exercicio} />
                <DrawerNavigator.Screen name="Mapa" component={Mapa} />
                <DrawerNavigator.Screen name="Pulsaçao" component={Pulsaçao} />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;