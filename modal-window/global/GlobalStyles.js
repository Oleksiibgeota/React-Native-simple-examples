import {StyleSheet} from 'react-native';
import {useFonts} from "expo-font";

export const colors = {
    primaryPink: '#FE0190',
    lightPink: '#FFE4F3',
    defaultTextColor: '#1C274C',
    greyTextColor: '#879298',
    defaultBorderColor: '#E4E4E4',
    successLightColor: 'rgba(114,185,78,0.7)',
    successColor: '#29BD1C',
    errorColor: '#EA1D1D',
    white: '#FFFFFF',
    textPlaceholder: 'rgba(28, 39, 76, 0.5)',
}

const GlobalStyles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 36,
        fontFamily: 'Quicksand_700',
        color: '#9BA2A9',
        lineHeight: 40
    },
    inputTitle: {
        fontSize: 16,
        color: colors.defaultTextColor,
        fontFamily: 'Mulish_700',
    },
    inputValue: {
        fontSize: 14,
        fontFamily: 'Mulish_400',
        color: colors.defaultTextColor,
    },
    errorText: {
        marginVertical: 5,
        fontSize: 14,
        fontFamily: 'Mulish_400',
        color: colors.errorColor,
    },
    documentWrapper: {
        height: '100%',
        padding: 5,
    },
    mulishNormal: {
        fontFamily: 'Mulish_400',
    },
    mulishBold: {
        fontFamily: 'Mulish_700',
    },
    smallBox: {
        height: 44,
        marginTop: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.defaultBorderColor,
        backgroundColor: colors.white,
        justifyContent: 'center',
    }
});

export const loadFontFamily = () => {
    return useFonts({
        "Quicksand_700": require("../assets/fonts/Quicksand-Bold.ttf"),
        "Satoshi_300": require("../assets/fonts/Satoshi-Light.otf"),
        "Satoshi_400": require("../assets/fonts/Satoshi-Regular.otf"),
        "Satoshi_500": require("../assets/fonts/Satoshi-Medium.otf"),
        "Satoshi_700": require("../assets/fonts/Satoshi-Bold.otf"),
        "Satoshi_900": require("../assets/fonts/Satoshi-Black.otf"),
    });

};


export default GlobalStyles
