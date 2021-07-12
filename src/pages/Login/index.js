import React, {useState, useEffect} from 'react';
import {Text, Paragraph, Title} from "react-native-paper";
import {View, TextInput} from "react-native";
import {RectButton} from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../sevices/api";
import styles from './styles';

function Login({navigation}) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        isLogado();
    }, []);

    const isLogado = async () => {
        await AsyncStorage.getItem('codigo').then(codigo => {
            if (codigo) {
                navigation.navigate("App");
            }
        });
    }

    const handleLogin = async () => {
        if (login.length === 0 || password.length === 0) {
            setError('Preencha usuário e senha para continuar!');
            return false;
        }

        await api.post('/login/index.php', {login, password}).then(function (response) {
            const {status, msg} = response.data;
            const codigo = response.data.dados.painel_usuario_logado;

            if (status === 'OK') {
                AsyncStorage.setItem('codigo', codigo);
                navigation.push("App");
            } else {
                setError(msg);
            }
        })
            .catch(function (error) {
                alert(error);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.title}>
                    <Title>Faça seu Login</Title>
                </View>

                <Paragraph>Usuário</Paragraph>
                <TextInput
                    style={styles.input}
                    placeholder={"Seu usuário"}
                    placeholderTextColor={"#999"}
                    value={login}
                    onChangeText={setLogin}
                    autoCompleteType="username"
                    autoCapitalize={"none"}
                />

                <Paragraph>Senha</Paragraph>
                <TextInput
                    style={styles.input}
                    placeholder={"Sua senha"}
                    placeholderTextColor={"#999"}
                    autoCapitalize={"none"}
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
                    autoCompleteType="password"
                />
                <View style={{alignItems: "center"}}>
                    {error.length !== 0 && <Text style={styles.errorMessage}>{error}</Text>}
                </View>

                <RectButton style={styles.submitButton} onPress={handleLogin}>
                    <Text style={styles.submitButtonText}>Entrar</Text>
                </RectButton>

            </View>
        </View>
    )
}


export default Login;