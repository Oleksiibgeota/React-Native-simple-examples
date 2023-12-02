import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {LazyInterpolationApproach} from "./LazyInterpolationApproach";


export default function App() {
    return (

        <View style={{flex: 1, marginTop: 50, paddingHorizontal: 10}}>
            <StatusBar hidden={false}/>

                <LazyInterpolationApproach debug={false}/>
        </View>

    );
}

