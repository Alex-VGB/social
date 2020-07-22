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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE :
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            }
        default :
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody} )

export default dialogsReducer;