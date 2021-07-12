import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {DatabaseConnection} from "../../database/database";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {Card} from "react-native-paper";
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

const db = DatabaseConnection.getConnection();

function Socioeconomico() {
    const [pr, setPr] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();

    useEffect(() => {

    }, []);

    async function loadProcesso() {
        await db.transaction((tx) => {
            const sql = "SELECT s.*,r.codigo AS codigo_rq, p.codigo AS codigo_pr FROM pr p "
                + "INNER JOIN rq r ON r.codigo = p.pr_requerente "
                + "INNER JOIN se_rrj s ON s.se_rrj_cod_processo = p.codigo "
                + "WHERE p.pr_numero_processo = 'C1118'";

            tx.executeSql(sql, [], (tx, results) => {

                    if (results.rows.length > 0) {
                        AsyncStorage.setItem('codigo_pr', results.rows.item(0).codigo_pr);
                    }

                }
            );
        }, (err) => {
            console.error("There was a problem with the tx", err);
            return false;
        }, (success) => {
            console.log("all done", success);
        });
    }

    const buttonTextStyle = {
        color: '#393939'
    };

    const state = {
        isValid: false,
        errors: false
    };

    const onNextStep = () => {
        if (!this.state.isValid) {
            this.setState({errors: true});
        } else {
            this.setState({errors: false});
        }
    };

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <ProgressSteps>
                    <ProgressStep
                        label="Formulário 1"
                        nextBtnTextStyle={buttonTextStyle}
                        previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{flex: 1}}>
                            <Card>
                                <Card.Content>
                                    <Card.Title title="Área de Abrangência"/>

                                    <View style={styles.formContent}>
                                        <Text>Municipios</Text>
                                        <View style={styles.borderSelect}>
                                            <Picker
                                                style={styles.select}
                                                selectedValue={selectedLanguage}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setSelectedLanguage(itemValue)
                                                }
                                                mode="dropdown"
                                            >
                                                <Picker.Item label="Java" value="java"/>
                                                <Picker.Item label="JavaScript" value="js"/>
                                            </Picker>
                                        </View>
                                    </View>

                                    <View style={styles.formContent}>
                                        <Text>Acesso</Text>
                                        <View style={styles.borderSelect}>
                                            <Picker
                                                style={styles.select}
                                                selectedValue={selectedLanguage}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setSelectedLanguage(itemValue)
                                                }
                                                mode="dropdown"
                                            >
                                                <Picker.Item label="Java" value="java"/>
                                                <Picker.Item label="JavaScript" value="js"/>
                                            </Picker>
                                        </View>
                                    </View>

                                    <View style={styles.formContent}>
                                        <Text>Localização</Text>
                                        <View style={styles.borderSelect}>
                                            <Picker
                                                style={styles.select}
                                                selectedValue={selectedLanguage}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setSelectedLanguage(itemValue)
                                                }
                                                mode="dropdown"
                                            >
                                                <Picker.Item label="Java" value="java"/>
                                                <Picker.Item label="JavaScript" value="js"/>
                                            </Picker>
                                        </View>
                                    </View>

                                    <View style={styles.formContent}>
                                        <Text>Setor de Abrangência</Text>
                                        <View style={styles.borderSelect}>
                                            <Picker
                                                style={styles.select}
                                                selectedValue={selectedLanguage}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setSelectedLanguage(itemValue)
                                                }
                                                mode="dropdown"
                                            >
                                                <Picker.Item label="Java" value="java"/>
                                                <Picker.Item label="JavaScript" value="js"/>
                                            </Picker>
                                        </View>
                                    </View>

                                </Card.Content>
                            </Card>
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Formulário 2"
                        nextBtnTextStyle={buttonTextStyle}
                        previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{alignItems: 'center'}}>
                            <Text>This is the content within step 2!</Text>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        </View>
    );
}

export default Socioeconomico;