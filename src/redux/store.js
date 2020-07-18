import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi!', likesCount: 15},
                {id: 2, message: 'it\'s my first post', likesCount: 25}
            ],
            newPostText: 'Hi!!!!!!'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('StateMy');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}


export default store;