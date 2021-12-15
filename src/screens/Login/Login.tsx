
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Keyboard, TouchableOpacity } from 'react-native';
import { ListOfAstronod, NearEarthObjectsEntity } from './types/AstronodListType'
import { Astronod } from "./types/Astronod";
import { NavigationProp } from '@react-navigation/native';
import ProgressDiloag from '../../components/ProgressDiloag';
import AlertDiload from '../../components/AlertDiload';

import 'react-native-gesture-handler';
interface LoginScreenProps {
    navigation: NavigationProp<any, any>,
}

const Login = ({ navigation }: LoginScreenProps) => {

    const [astronodId, setAstronodId] = useState<string>('')
    const [isLoding, setIsLoding] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [showMessage, setShowMessage] = useState<boolean>(false)


    useEffect(() => {
        return setIsLoding(false)
    }, [])
    const getListApi = () => {
        Keyboard.dismiss()
        setIsLoding(true)
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=QMbqJOKAJdJepZ6XKhV23xl6atyA3N2Y2b8wZGuk')
            .then((response) => response.json())
            .then((json) => {
                const data = json as ListOfAstronod;
                if (data.near_earth_objects?.length != 0) {
                    var length = data.near_earth_objects ? data.near_earth_objects.length : 0;
                    const randomPosition = Math.floor(Math.random() * length)
                    const randomObj = data?.near_earth_objects ? data.near_earth_objects[randomPosition] : null
                    if (randomObj) {
                        const ojects = randomObj as NearEarthObjectsEntity;
                        setAstronodId(ojects.id)
                        getSingleAstronod(ojects.id)
                    }
                }
            }).catch((e) => {
                setIsLoding(false)
            }).finally(() => {
                setIsLoding(false)
            })

    }
    const getSingleAstronod = (astronodId: string) => {
        Keyboard.dismiss()
        setIsLoding(true)
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/${astronodId}?api_key=QMbqJOKAJdJepZ6XKhV23xl6atyA3N2Y2b8wZGuk`)
            .then((response) => response.json())
            .then((json) => {
                setIsLoding(false)

                navigation.navigate('Home', {
                    data: json
                })


            }).catch((e) => {
                setIsLoding(false)
                setMessage('Wrong Asteroid ID')
                setShowMessage(true)
            }).finally(() => {
                setIsLoding(false)
            })

    }


    return (
        <SafeAreaView>

            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.input}
                    value={astronodId}
                    onChangeText={setAstronodId}
                    placeholder='Enter Asteroid ID'
                />

                <View style={styles.buttonContainer}>

                    <TouchableOpacity
                        style={astronodId == '' ? styles.btnSubmitBlur : styles.btnSubmit}
                        onPress={() => getSingleAstronod(astronodId)}
                        disabled={astronodId == '' ? true : false}
                    >
                        <Text style={styles.btnSubmitText} >Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => getListApi()}
                        style={styles.btnSubmit}>
                        <Text style={styles.btnSubmitText} >Random Asteroid</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <ProgressDiloag
                isViseble={isLoding}
            />
            <AlertDiload
                message={message}
                okPress={() => setShowMessage(false)}
                isViseble={showMessage}
            />
        </SafeAreaView>
    );
}

export default Login;


const styles = StyleSheet.create({
    loginContainer: {
        margin: 20,
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 20,

    },
    input: {
        height: 46,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    btnSubmit: {
        backgroundColor: 'black',
        padding: 14,
        alignItems: 'center',
        margin: 12,
        height: 46,
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },

    btnSubmitBlur: {
        backgroundColor: 'gray',
        padding: 14,
        alignItems: 'center',
        margin: 12,
        height: 46,
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    btnSubmitText: {
        color: '#FFF',

    },
});
