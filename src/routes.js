import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {RectButton} from "react-native-gesture-handler";
import {Feather} from '@expo/vector-icons';
import {StyleSheet} from "react-native";

import Login from "./pages/Login";
import Principal from "./pages/Principal";
import MenuLateral from "./components/MenuLateral";

const Stack = createStackNavigator();

function Routes() {

    const [logado, setLogado] = useState(false);
    useEffect(() => {
        isLogado();
    }, []);

    async function isLogado() {
        await AsyncStorage.getItem('codigo').then(value => {
            console.log(value);
            if (value) {
                setLogado(true);
            }
        });
    }

    return (
        <NavigationContainer>
            {logado}
            <Stack.Navigator initialRouteName={logado ? "App" : "Login"}>
                <Stack.Screen
                    name={"Login"}
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={"App"}
                    component={MenuLateral}
                    options={{
                        headerShown: false,
                    }}
                    /*options={{
                        title: 'SGRF - SECT',
                        headerStyle: {
                            backgroundColor: '#FFF',
                        },
                        headerLeft: () => (
                            <RectButton style={styles.buttonMenu}>
                                <Feather name="menu" size={24} color="black"/>
                            </RectButton>
                        ),
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTitleAlign: 'center'

                    }}*/

                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    buttonMenu: {
        paddingHorizontal: 15
    }
})
export default Routes;
