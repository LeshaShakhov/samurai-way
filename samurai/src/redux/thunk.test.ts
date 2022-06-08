import {followTC, unFollowTC} from "./usersReducer";
import {requestUsersApi} from "../requestApi/requestUsersApi";
import {ResponseCodes} from "../requestApi/api";
jest.mock("../requestApi/requestUsersApi");



const dispatch = jest.fn();
const getState = jest.fn();
requestUsersApi.follow = () => Promise.resolve({resultCode:ResponseCodes.Error, data:{}, messages:[]});
requestUsersApi.unFollow = () => Promise.resolve({resultCode:ResponseCodes.Error, data:{}, messages:[]});

test('number of calls dispatch', async ()=>{
    const thunk = followTC(24369);
    await thunk(dispatch, getState, {});
    expect(dispatch).toHaveBeenCalledTimes(2)
})

test('number of calls dispatch', async ()=>{
    const thunk = unFollowTC(24369);
    await thunk(dispatch, getState, {});
    expect(dispatch).toHaveBeenCalledTimes(2)
})