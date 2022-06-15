import usersReducer, {InitUsersType, usersActions} from "./usersReducer";

const state = {
    users: [
        {id: 24369, name: "ahtoh01", status: '', photos: {small: null, large: null}, followed: false},
        {id: 24368, name: "ahtoh02", status: '', photos: {small: null, large: null}, followed: true},
        {id: 24367, name: "ahtoh03", status: '', photos: {small: null, large: null}, followed: true},
        {id: 24366, name: "ahtoh04", status: '', photos: {small: null, large: null}, followed: false},
        {id: 24365, name: "ahtoh05", status: '', photos: {small: null, large: null}, followed: false},

    ],
    currentPage: 1,
    totalUsersCount: 0,
    usersPerPage: 10,
    isFetching: false,
    followingInProgress: [] as Array<number>,
} as InitUsersType;


test('followed user attribute follow is true', () => {
        const newState = usersReducer(state, usersActions.follow(24369));
        expect(newState.users[0].followed).toBeTruthy()
    }
)

test('unfollow user attribute follow is false', () => {
    const newState = usersReducer(state, usersActions.unFollow(24368));
    expect(newState.users[3].followed).toBeFalsy();
    }
)