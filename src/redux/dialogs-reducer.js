const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Gabi'},
        {id: 3, name: 'Svieta'},
        {id: 4, name: 'Sasha'}
    ],
    messages: [
        {id: 1, message: 'Hi!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine:)'}
    ],
    newMessageBody: 'How are you?'
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE :
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        default :
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;