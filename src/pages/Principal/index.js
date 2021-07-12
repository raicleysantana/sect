import React, {useEffect, useState, useLayoutEffect} from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Card} from "react-native-paper";
import styles from './styles';

function Principal() {
    const [usuario, setUsuario] = useState('');


    useEffect(() => {
        AsyncStorage.getItem('codigo').then(value => setUsuario(value));
    }, []);

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title title={`Bem vindo Raicley Santana`} subtitle="Departamento: TI"/>
            </Card>
        </View>
    )
}

export default Principal;