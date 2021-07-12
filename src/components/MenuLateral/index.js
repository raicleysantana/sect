import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Socioeconomico from "../../pages/Socioeconomico";
import Principal from "../../pages/Principal";

export default function MenuLateral() {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Principal" component={Principal} options={{
                headerShown: true,
            }}/>
            <Drawer.Screen name="Socioeconomico" component={Socioeconomico} options={{
                headerShown: true,
            }}/>
        </Drawer.Navigator>
    );
};

