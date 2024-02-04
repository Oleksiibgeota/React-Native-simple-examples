import {Text, View, StyleSheet} from "react-native";
import ProgressBar from "./ProgressBar";

const StepRoadBlock = () => {

    let mockData = {progressBarType: 'STEP', max: 3, current: 1}

    return (
        <View style={{
            flexDirection: 'column',
            alignSelf: 'stretch',
            marginTop: 16,
            paddingHorizontal: 24,
            paddingTop: 16,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 32
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={styles.text}>
                    Next milestone
                </Text>
                <Text style={[styles.text, {
                    overflow: 'hidden',
                    borderRadius: 12,
                    backgroundColor: 'rgba(255, 231, 222, 1)',
                    height: 32,
                    width: 32,
                    textAlign: 'center',
                }]}>
                    {mockData.max - mockData.current}
                </Text>
                <Text style={styles.text}>
                    actions away
                </Text>

            </View>
            <View style={{marginVertical: 16}}>
                <ProgressBar mockData={mockData} withCompleteInfo={false}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Satoshi_500',
        fontSize: 20,
        lineHeight: 28,
        color: 'rgba(24, 24, 24, 1)',
    }
})

export default StepRoadBlock
