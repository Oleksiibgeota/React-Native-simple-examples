import {Complete, Invite, Message} from "../SVGConverter";

const GetIconByKey = ({keyType}) => {
    return iconMap()[keyType]
}

const iconMap = () => {
    return {
        INVITE: <Invite/>,
        COMPLETE_PROFILE: <Complete/>,
        SEND_MESSAGE: <Message/>
    }
}

export default GetIconByKey
