import React, {useState} from 'react';
import {Button} from 'native-base';

const CustomButton = (props) => {

    const myRef = React.useRef({});
    React.useEffect(() => {
        const styleObj = {
            backgroundColor: "#280303",
            borderRadius: 24,
        }; //@ts-ignore

        myRef.current.setNativeProps({
            style: styleObj
        });
    }, [myRef, props]);
    return (
        <Button
            size={'lg'}
            py="5"
            variant={"solid"}
            _text={{
                fontSize: 16,
                lineHeight: 26,
                color: "#FFF",
                ...props.style
            }}
            ref={myRef}
            onPress={props.onPress}

        >
            {props.title}
        </Button>

    );
}

export default CustomButton;
