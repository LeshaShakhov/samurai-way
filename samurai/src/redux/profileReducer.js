import {requestProfileApi} from "../requestApi/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_PHOTO = 'SET_PHOTO';

const initialState = {
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
    profile: null,
    status: '',
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                user: {
                    ...state.user,
                    userPosts:
                        [
                            ...state.user.userPosts,
                            {id: ++state.user.userPosts.length, text: action.post, likes: 0}
                        ]
                },
            };
        }

        case SET_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status};
        }
        case SET_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        default:
            return state
    }

}
export const addPost = (post) => ({type: ADD_POST, post});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const setProfile = (profile) => ({type: SET_PROFILE, profile: profile})
export const setPhoto = (photos) => ({type: SET_PHOTO, photos: photos})


export const setProfileTC = (id) => async (dispatch) => {
    const response = await requestProfileApi.getUserProfile(id);
    dispatch(setProfile(response.data));
}
export const getUserStatus = (id) => async (dispatch) => {
    const response = await requestProfileApi.getUserStatus(id);
    dispatch(setUserStatus(response.data));
}


export const updateUserStatus = (status) => async (dispatch) => {
    const response = await requestProfileApi.updateUserStatus(status);
    !response.data.resultCode && dispatch(setUserStatus(status));
}

export const setPhotoTC = (photo) => async (dispatch) => {
    const response = await requestProfileApi.setPhoto(photo);
    !response.data.resultCode && dispatch(setPhoto(response.data.data.photos));
}

export default profileReducer;