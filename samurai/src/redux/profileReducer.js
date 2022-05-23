const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA_POST = 'CHANGE-TEXT-AREA-POST';

let initialState = {
    newPostText: '',
    user: {
        userId: 1,
        userName: 'Maxim',
        userSurname: 'Petrov',
        userImage: 'http://www.yorki-penza.ru/img/djey/djey_01.jpg',
        userPosts: [
            {id: 1, text: 'Hello, how are you?', likes: 3},
            {id: 2, text: 'I am learn react.', likes: 5},
            {id: 3, text: 'I have very nice day!', likes: 10}
        ],
    },
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return  {...state,
                    user: {...state.user,
                                userPosts:
                                [
                                    ...state.user.userPosts,
                                    {id: ++state.user.userPosts.length, text: state.newPostText, likes: 0}
                                ]
                    },
                    newPostText: '',
            };
        }
        case CHANGE_TEXT_AREA_POST: {
            return {...state, newPostText: action.text};
        }
        default:
            return state
    }

}
export const addPost = () => ({type: ADD_POST});
export const changeTextAreaPost = (text) => ({
    type: CHANGE_TEXT_AREA_POST,
    text: text,
})

export default profileReducer;