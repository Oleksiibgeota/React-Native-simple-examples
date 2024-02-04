import {useEffect, useState} from "react";
import {Modal, View, Text, ImageBackground, Image} from "react-native";
import CustomButton from "../ui/CustomButton";
import icon from "../assets/profil.png";
import {AddNewOne} from "../SVGConverter";
import logotype from "../assets/logo.png"
import QuestBlock from "./QuestBlock";
import StepRoadBlock from "./StepRoadBlock";

const ModalDemoPage = ({
                           isModalShow,
                           onCancel,
                       }) => {
    const [isVisible, setIsVisible] = useState(false);
    const profile = icon;

    useEffect(() => {
        if (isModalShow) {
            setIsVisible(true)
        }
    }, [isModalShow])

    return <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
    >
        <View style={{flex: 1, alignItems: 'center',}}>
            <View style={{alignSelf: 'stretch', marginTop: -35}}>
                <ImageBackground source={profile} blurRadius={25} resizeMode={'stretch'} style={{
                    width: '100%',
                    height: '100%',

                }}>
                    <View style={{
                        flex: 1,
                        padding: 16,
                        backgroundColor: 'rgba(128, 128, 128, 0.40)',
                        alignItems: 'center',
                    }}>
                        <Image source={logotype}/>
                        <View style={{marginTop: -35, alignSelf: 'stretch',}}>
                            <VisionaryBlock/>
                        </View>
                        <StepRoadBlock/>
                        <QuestBlock/>

                        <View style={{width: 176}}>
                            <CustomButton style={{width: '100%', borderRadius: 10}} title={'Close'}
                                          onPress={() => {
                                              if (!!onCancel) {
                                                  onCancel()
                                                  setIsVisible(false)
                                              }
                                          }}
                                          size='lg'/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    </Modal>
}


const VisionaryBlock = () => {
    return (
        <View style={{
            backgroundColor: 'rgba(0, 0, 0, 0.68)',
            alignSelf: 'stretch',
            borderRadius: 32,
            padding: 32
        }}>
            <View style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                backgroundColor: 'rgba(255, 255, 255, 0.24)',
                padding: 4,
                paddingLeft: 12,
                borderRadius: 12
            }}>
                <View>
                    <Text
                        style={{
                            fontFamily: 'Satoshi_400',
                            fontSize: 12,
                            lineHeight: 14,
                            color: 'rgba(253, 253, 253, 1)',
                            paddingVertical: 4,
                        }}>
                        CONFIDENCE INDEX
                    </Text>
                </View>

                <View style={{
                    borderRadius: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.24)',
                    justifyContent: 'center',
                    marginLeft: 8,
                }}>
                    <Text style={{
                        fontFamily: 'Satoshi_400',
                        fontSize: 12,
                        lineHeight: 14,
                        color: 'rgba(253, 253, 253, 1)',
                        paddingHorizontal: 4,
                        textAlignVertical: 'center'
                    }}>
                        QUARTZ
                    </Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 32,
                alignItems: 'center',
                alignContent: 'center'
            }}>
                <View style={{flex: 1}}>
                    <Text style={{
                        fontFamily: 'Quicksand_700',
                        fontSize: 24,
                        lineHeight: 36,
                        color: 'rgba(253, 253, 253, 1)'
                    }}>
                        Visionary Quartz
                    </Text>
                </View>

                <View style={{alignItems: 'center', alignContent: 'center'}}>
                    <AddNewOne/>
                </View>

            </View>
        </View>
    )
}


export default ModalDemoPage
