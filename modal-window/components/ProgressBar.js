import {StyleSheet, Text, View} from "react-native";
import {HStack} from "native-base";

const ProgressBar = ({mockData, withCompleteInfo = true}) => {
    const bars = [...Array(mockData.max).keys()];

    const colorResolve = () => {
        if (!withCompleteInfo) {
            return StyleSheet.create({
                backgroundCompleted: 'rgba(255, 231, 222, 1)',
                backgroundFullFillCompleted: 'rgba(255, 155, 127, 1)',
                backgroundColor: 'rgba(184, 179, 174, 0.2)',
                backgroundFullFill: 'rgba(184, 179, 174, 0.2)',
            });
        } else {
            return StyleSheet.create({
                backgroundCompleted: 'rgba(255, 255, 255, 0.12)',
                backgroundFullFillCompleted: 'rgba(255, 255, 255, 1)',
                backgroundColor: 'rgba(184, 179, 174, 0.2)',
                backgroundFullFill: 'rgba(184, 179, 174, 0.2)',
            });
        }
    }
    const Stepped = () => {
        return (
            <HStack space={1}>
                {bars.map((bar, index) => (

                    <View key={index}
                          style={{
                              flex: 1,
                              backgroundColor: index + 1 <= mockData.current ? colorResolve().backgroundCompleted : colorResolve().backgroundColor,
                              height: 8,
                              borderRadius: 4,
                              justifyContent: 'center',
                              paddingHorizontal: 2
                          }}>
                        <View style={{
                            width: '100%',
                            backgroundColor: index + 1 <= mockData.current ? colorResolve().backgroundFullFillCompleted : colorResolve().backgroundFullFill,
                            height: 4, borderRadius: 4,
                        }}/>
                    </View>))}
            </HStack>
        )
    }
    const Percent = () => {
        const calculateWith = () => {
            return mockData.current + '%'
        }
        return <View
            style={{
                flex: 1,
                backgroundColor: 100 <= mockData.current ? colorResolve().backgroundCompleted : colorResolve().backgroundColor,
                height: 8,
                borderRadius: 4,
                justifyContent: 'center',
                paddingHorizontal: 2
            }}>
            <View style={{
                width: calculateWith(),
                backgroundColor: colorResolve().backgroundFullFillCompleted,
                height: 4, borderRadius: 4,
            }}/>
        </View>
    }

    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 8}}>
                {mockData.progressBarType === "STEP"
                    ? <Stepped/>
                    : <Percent/>
                }
            </View>

            {withCompleteInfo &&
                <View>
                    <Text style={{
                        marginLeft: 8,
                        color: 'rgba(255, 255, 255, 0.4)',
                        fontFamily: 'Satoshi_700',
                        fontSize: 14,
                        lineHeight: 18,
                    }}>
                        {mockData.current}%
                    </Text>
                </View>}
        </View>
    )

}

export default ProgressBar
