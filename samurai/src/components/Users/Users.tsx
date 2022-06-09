import React, {useEffect, useState} from "react";
import './Users.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import UsersSearch from "./UsersSearch";
import {useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from "../../redux/store";
import {follow, getUsers, setCurrentPage, unFollow} from '../../redux/userSlice'
import {UsersFilterType} from "../../redux/types/types";
import Preloader from "../Common/Preloader/Preloader";

const PAGINATOR_PAGES_COUNT = 10;// length visible pagination

export const Users: React.FC<{}> = () => {
    const {
        usersPerPage, users, totalUsersCount,
        currentPage, followingInProgress, filter,isFetching
    } = useSelector((state: StateType) => state.user)

    const dispatch = useDispatch<DispatchType>()
    const [paginationValue, setPaginationValue] = useState(0)

    const onPageChanged = (page: number) => {
        dispatch(setCurrentPage(page));
        dispatch(getUsers({currentPage: page, usersPerPage, filter}));
    }
    const onSearch = (filter:UsersFilterType) => {
        dispatch(setCurrentPage(1))
        setPaginationValue(0);
        dispatch(getUsers({currentPage: 1, usersPerPage, filter}));
    }
    const followHandler = (id:number) => {
        dispatch(follow(id))
    }
    const unFollowHandler = (id:number) => {
        dispatch(unFollow(id))
    }

    useEffect(()=>{
        dispatch(getUsers({currentPage, usersPerPage,filter}));
    },[])
    return (
        <>
            <div className="text-title">Users</div>
            <div className='app-block'>
                <Paginator
                    itemsPerPage={usersPerPage}
                    totalItems={totalUsersCount}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    pagesCount={PAGINATOR_PAGES_COUNT}
                    paginationValue={paginationValue}
                    setPaginationValue={setPaginationValue}
                />
                <UsersSearch onSearch={onSearch}/>
            </div>
            {
                users.map(user => {
                    return (
                        <User
                            key={user.id} id={user.id} photos={user.photos}
                            name={user.name} status={user.status}
                            followed={user.followed}
                            followingInProgress={followingInProgress}
                            unFollow={unFollowHandler} follow={followHandler}
                        />
                    )
                })
            }
            <button className='btn-primary blue'>Show more</button>
            {isFetching && <Preloader/>}
        </>
    )
}
