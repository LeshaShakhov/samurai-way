import profileReducer, {InitialStateType, profileActions} from "./profileReducer";

let state:any;
beforeEach(() =>{
        state = {
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
        }  as InitialStateType
    }
)


const action = profileActions.addPost('new post');

test('after add post posts array length should be increment', () => {
    //1. Testing data

    //2. Action
    const newState = profileReducer(state, action);

    //3. Expect - ожидание
    expect(newState.user.userPosts.length).toBe(4)

})

test('after add post new post text should be correct', () => {
    //1. Testing data

    //2. Action
    const newState = profileReducer(state, action);

    //3. Expect - ожидание
    expect(newState.user.userPosts[3].text).toBe('new post')
})

test('after add post new state should not be immutable', () => {
    //1. Testing data

    //2. Action
    const newState = profileReducer(state, action);

    //3. Expect - ожидание
    expect(newState === state).toBe(false)
})

test('new post should have all properties', () => {
    //1. Testing data

    //2. Action
    const newState = profileReducer(state, action);

    //3. Expect - ожидание
    expect(Object.keys(newState.user.userPosts[3]).length).toBe(3)
})
