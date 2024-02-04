import {Modal, StyleSheet, Text, View} from "react-native";
import ProgressBar from "./ProgressBar";
import {ArrowRight, QuestionIcon} from "../SVGConverter";
import GetIconByKey from "./IconMapResolver";
import {useEffect, useState} from "react";

const QuestBlock = () => {
    const [isShowDemoPage, setIsShowDemoPage] = useState(false);

    const mockData = [
        { questType: 'INVITE', icon: '', title: 'Invite 3 of your contacts', mockData: {progressBarType: 'STEP', max: 3, current: 3}},
        { questType: 'COMPLETE_PROFILE', icon: '', title: 'Complete your profile', mockData: {progressBarType: 'PERCENT', max: 100, current: 25}},
        { questType: 'SEND_MESSAGE', icon: '', title: 'Send your first message', mockData: {progressBarType: 'PERCENT', max: 100, current: 0}},
    ]

    const ResolveIcon = ({icon, type}) => {
        return <GetIconByKey keyType={type}/>
    }

    const Each = ({item}) => {
        return (
            <View style={{
                alignSelf: 'stretch',
                backgroundColor: 'rgba(0, 0, 0, 0.24)',
                borderRadius: 32,
                flexDirection: 'row',
                padding: 16,
                marginTop: 8,
                alignItems: 'center',
            }}>
                <View style={{
                    height: 44,
                    width: 44,
                    borderRadius: 16,
                    backgroundColor: 'rgba(253, 253, 253, 1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ResolveIcon icon={item.icon} type={item.questType}/>
                </View>
                <View style={{flex: 1, flexDirection: 'column', paddingHorizontal: 16}}>
                    <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={styles.text}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={{marginTop: 8}}>
                        <ProgressBar mockData={item.mockData} withCompleteInfo={true}/>
                    </View>
                </View>
                <View style={{justifyContent: 'center',}}>
                    <ArrowRight/>
                </View>
            </View>
        )
    }

    return (
        <View style={{flex: 1, marginTop: 16, alignSelf: 'stretch'}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Text style={{
                        fontFamily: 'Quicksand_700',
                        fontSize: 24,
                        lineHeight: 36,
                        color: 'rgba(253, 253, 253, 1)'
                    }}>
                        Quests
                    </Text>
                </View>
                <View onTouchStart={() => setIsShowDemoPage(true)}>
                    <QuestionIcon/>
                </View>
                <Info isModalShow={isShowDemoPage} onCancel={() => setIsShowDemoPage(false)}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row',}}>
                <View style={{flexDirection: 'column', flex: 1}}>
                    {mockData.map((item, index) => {
                        return <Each item={item} key={index}/>
                    })}
                </View>
            </View>
        </View>

    )
}
const Info = ({
                  isModalShow,
                  onCancel,
              }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log('touch')
        if (isModalShow) {
            setIsVisible(true)
        }
    }, [isModalShow])

    const closeIfOpen = () => {
        setIsVisible(false)
        if (!!onCancel) {
            onCancel()
        }
    }

    return <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
    >
        <View
            onTouchEnd={closeIfOpen}
            style={{
                flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.70)',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <View
                onTouchEnd={closeIfOpen}
                style={{
                    width: '80%',
                    height: 100,
                    padding: 20,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    overflow: 'hidden',
                    justifyContent: 'center'
                }}>

                <Text style={{fontFamily: 'Satoshi_500', textAlign: 'center'}}>
                    Finish quests to level up your profile and get bonuses!
                </Text>

            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Satoshi_500',
        fontSize: 18,
        lineHeight: 24,
        color: 'rgba(253, 253, 253, 1)',
    }
})


export default QuestBlock
