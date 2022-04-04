import React from "react";
import Home from "../screens/home";
import Exercicio from "../screens/exercicio";
import Mapa from "../screens/mapa";

import { Octicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";

const DrawerNavigator = createDrawerNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator.Navigator initialRouteName="MRS">
                <DrawerNavigator.Screen name="Home" component={Home} />
                <DrawerNavigator.Screen name="Mapa" component={Mapa} />
                <DrawerNavigator.Screen name="Exercicio" component={Exercicio} />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;