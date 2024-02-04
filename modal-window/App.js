import {Text, View} from 'react-native';
import {useState} from "react";
import {NativeBaseProvider, StatusBar} from "native-base";
import CustomButton from "./ui/CustomButton";
import ModalDemoPage from "./components/ModalDemoPage";
import {loadFontFamily} from "./global/GlobalStyles";


export default function App() {

    const [isLoaded] = loadFontFamily()
    const [isShowDemoPage, setIsShowDemoPage] = useState(false);

    if (!isLoaded) {
        return <Text>
            Loading...
        </Text>
    }

    return (
        <NativeBaseProvider>
            <View style={{flex: 1}}>
                <StatusBar hidden={true}/>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>
                        Enjoying...
                    </Text>
                </View>
                <View style={{alignItems: 'center', alignSelf: 'stretch'}}>
                    <View style={{justifyContent: 'center', width: 176, marginBottom: 20}}>
                        <CustomButton title={'Lets go'} onPress={() => setIsShowDemoPage(true)}/>
                    </View>
                    <ModalDemoPage isModalShow={isShowDemoPage} onCancel={() => setIsShowDemoPage(false)}/>
                </View>
            </View>
        </NativeBaseProvider>
    );

}





