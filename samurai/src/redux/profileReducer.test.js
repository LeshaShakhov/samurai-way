import profileReducer, {addPost} from "./profileReducer";
const state = {
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
const action = addPost('new post');

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

test('reducers', () => {
    let state;
    state = addPost({profile:{user:{userId:1,userName:'Maxim',userSurname:'Petrov',userImage:'http://www.yorki-penza.ru/img/djey/djey_01.jpg',userPosts:[{id:1,text:'Hello, how are you?',likes:3},{id:2,text:'I am learn react.',likes:5},{id:3,text:'I have very nice day!',likes:10}]},profile:{aboutMe:null,contacts:{facebook:null,website:null,vk:null,twitter:null,instagram:null,youtube:null,github:null,mainLink:null},lookingForAJob:false,lookingForAJobDescription:null,fullName:'losha',userId:24152,photos:{small:null,large:null}},status:'fg fрп пррп пр пр'},messages:{currentConversation:null,newMessageText:'',user:{userId:1,userName:'Maxim',userSurname:'Petrov',userImage:'http://www.yorki-penza.ru/img/djey/djey_01.jpg',userPosts:[{id:1,text:'Hello, how are you?',likes:3},{id:2,text:'I am learn react.',likes:5},{id:3,text:'I have very nice day!',likes:10}]},messages:[{id:1,authorId:2,text:'Lorem Ipsum - это текст-"рыба",'},{id:2,authorId:2,text:'Hello, my name is Igor'},{id:4,authorId:3,text:'Hello, my name is Sasha'},{id:5,authorId:3,text:'I liked your ava'},{id:6,authorId:4,text:'I hate you'},{id:7,authorId:4,text:'my name is Yorik'},{id:9,authorId:5,text:'Hello, my name is Stanislav'},{id:10,authorId:6,text:'Hello, my name is Kesha'},{id:11,authorId:7,text:'Hello, my name is Sergey'},{id:12,authorId:7,text:'How are you?'}],users:[{userId:2,userName:'Igor',userSurname:'IgorIgor',userImage:'http://www.yorki-penza.ru/img/feya/feya_01.jpg',userPosts:[],messages:[]},{userId:3,userName:'Sasha',userSurname:'SashaSasha',userImage:'http://www.yorki-penza.ru/img/djey/djey_01.jpg',userPosts:[],messages:[]},{userId:4,userName:'Yorik',userSurname:'YorikYorik',userImage:'https://c-fa.cdn.smule.com/rs-s35/arr/9b/60/57f41f9c-ed7e-41a6-afaf-c2886cd11e67.jpg',userPosts:[],messages:[]},{userId:5,userName:'Stanislav',userSurname:'StanislavStanislav',userImage:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye8.jpg?itok=I8zcCWtL',userPosts:[],messages:[]},{userId:6,userName:'Kesha',userSurname:'KeshaKesha',userImage:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye9.jpg?itok=emjbNAgP',userPosts:[],messages:[]},{userId:7,userName:'Sergey',userSurname:'SergeySergey',userImage:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye7.jpg?itok=mHFsRXtQ',userPosts:[],messages:[]},{userId:8,userName:'NoNONO',userSurname:'Not this user',userImage:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye7.jpg?itok=mHFsRXtQ',userPosts:[],messages:[]}]},nav:{},usersPage:{users:[{name:'CheckUser',id:24224,uniqueUrlName:null,photos:{small:null,large:null},status:null,followed:true},{name:'Viktor_vp1',id:24223,uniqueUrlName:null,photos:{small:null,large:null},status:null,followed:true},{name:'Viktor_vp',id:24222,uniqueUrlName:null,photos:{small:null,large:null},status:null,followed:false},{name:'someMyUser',id:24221,uniqueUrlName:null,photos:{small:null,large:null},status:null,followed:false},{name:'Ilijean',id:24220,uniqueUrlName:null,photos:{small:null,large:null},status:null,followed:true}],currentPage:1,totalUsersCount:19232,usersPerPage:5,paginationValue:0,isFetching:true,followingInProgress:[]},auth:{authUserData:{email:'loshasha90@gmail.com',id:24152,login:'losha'},isLogin:true},app:{isInitialized:true}}, {type:'TOGGLE_IS_FETCHING',isFetching:false});
    expect(state).toEqual({profile:{user:{userId:1,userName:'Maxim',userSurname:'Petrov',userImage:'http://www.yorki-penza.ru/img/djey/djey_01.jpg',userPosts:[{id:1,text:'Hello, how are you?',likes:3},{id:2,text:'I am learn react.',likes:5},{id:3,text:'I have very nice day!',likes:10}]},profile:{aboutMe:null,contacts:{facebook:null,website:null,vk:null,twitter:null,instagram:null,youtube:null,github:null,mainLink:null},lookingForAJob:false,lookingForAJobDescription:null,fullName:'losha',userId:24152,photos:{small:null,large:null}},status:'fg fрп пррп пр пр'},messages:{currentConversation:null,newMessageText:'',user:{userId:1,userName:'Maxim',userSurname:'Petrov',userImage:'http://www.yorki-penza.ru/img/djey/djey_01.jpg',userPosts:[{id:1,text:'Hello, how are you?',likes:3},{id:2,text:'I am learn react.',likes:5},{id:3,text:'I have very nice day!',likes:10}]},messages:[{id:1,authorId:2,text:'Lorem Ipsum - это текст-"рыба",'},{id:2,authorId:2,text:'Hello, my name is Igor'},{id:4,authorId:3,text:'Hello, my name is Sasha'},{id:5,authorId:3,text:'I liked your ava'},{id:6,authorId:4,text:'I hate you'},{id:7,authorId:4,text:'my name is Yorik'},{id:9,authorId:5,text:'Hello, my name is Stanislav'},{id:10,authorId:6,text:'Hello, my name is Kesha'},{id:11,authorId:7,text:'Hello, my name is Sergey'},{id:12,authorId:7,text:'How are you?'}],users:[{userId:2,userName:'Igor',userSurname:'IgorIgor',userImage:'http://www.yorki-penza.ru/img/feya/feya_01.jpg',userPosts:[],messages:[]},{userId:3,userName:'Sasha',userSurname:'SashaSasha',userImage:'http://www.yorki-penza.ru/img/djey/djey_01.jpg',userPosts:[],messages:[]},{userId:4,userName:'Yorik',userSurname:'YorikYorik',userImage:'https://c-fa.cdn.smule.com/rs-s35/arr/9b/60/57f41f9c-ed7e-41a6-afaf-c2886cd11e67.jpg',userPosts:[],messages:[]},{userId:5,userName:'Stanislav',userSurname:'StanislavStanislav',userImage:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye8.jpg?itok=I8zcCWtL',userPosts:[],messages:[]},{userId:6,userName:'Kesha',userSurname:'KeshaKesha',userImage:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye9.jpg?itok=emjbNAgP',userPosts:[],messages:[]},{userId:7,userName:'Sergey',userSurname:'SergeySergey',userImage:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye7.jpg?itok=mHFsRXtQ',userPosts:[],messages:[]},{userId:8,userName:'NoNONO',userSurname:'Not this user',userImage:'https://catnames.ru/sites/default/files/styles/article_600/public/inline/images/prikolnye7.jpg?itok=mHFsRXtQ',userPosts:[],messages:[]}]},nav:{},usersPage:{users:[{name:'CheckUser',id:24224,uniqueUrlName:null,photos:{small:null,large:null},status:null,followed:true},{name:'Viktor_vp1',id:24223,uniqueUrlName:null,photos:{small:null,large:null},status:null,followed:true},{name:'Viktor_vp',id:24222,uniqueUrlName:null,photos:{small:null,large:null},status:null,followed:false},{name:'someMyUser',id:24221,uniqueUrlName:null,photos:{small:null,large:null},status:null,followed:false},{name:'Ilijean',id:24220,uniqueUrlName:null,photos:{small:null,large:null},status:null,followed:true}],currentPage:1,totalUsersCount:19232,usersPerPage:5,paginationValue:0,isFetching:false,followingInProgress:[]},auth:{authUserData:{email:'loshasha90@gmail.com',id:24152,login:'losha'},isLogin:true},app:{isInitialized:true}});
});