
import * as React from 'react';
import { View, Text, Linking, StyleSheet, SafeAreaView ,TouchableOpacity} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { NearEarthObjectsEntity } from '../Login/types/AstronodListType';

interface HomeScreenProps {
    navigation: NavigationProp<any, any>,
    route: any
}

const Home = ({ route, navigation }: HomeScreenProps) => {
    const astronodInfo = route?.params?.data as NearEarthObjectsEntity;

    return (
        <SafeAreaView>

            <View style={styles.containner}>
                <Text>{astronodInfo ? 'name: ' + astronodInfo.name : ''}</Text>
                <TouchableOpacity onPress={async () => {
                    if (astronodInfo) {
                        await Linking.openURL(astronodInfo.nasa_jpl_url);
                    }
                }}>
                    <Text style={styles.linkStyle}>{astronodInfo ? 'nasa jpl uri: ' + astronodInfo.nasa_jpl_url : ''}</Text>

                </TouchableOpacity>
                <Text>{astronodInfo ? "is_potentially_hazardous_asteroid: "+ astronodInfo.is_potentially_hazardous_asteroid + '' : ''}</Text>

            </View>


        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    containner: {
      
      backgroundColor:'#FFF',
        padding: 30,
        alignSelf:'center',
        margin:30,
        borderRadius:8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    linkStyle: {
        color: 'red'
    }
});
