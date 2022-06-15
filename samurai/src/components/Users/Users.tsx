import React, {useEffect, useState} from "react";
import './Users.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import UsersSearch from "./UsersSearch";
import {useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from "../../redux/store";
import {follow, getUsers, setCurrentPage, setFilter, unFollow} from '../../redux/userSlice'
import {UsersFilterType} from "../../redux/types/types";
import Preloader from "../Common/Preloader/Preloader";
import {useCondSearchParams} from "../../Utils/Hooks/useCondSearchParams";

const PAGINATOR_PAGES_COUNT = 10;// length visible pagination

export const Users: React.FC<{}> = React.memo(() => {
    const {
        usersPerPage, users, totalUsersCount,
        currentPage, followingInProgress, filter,isFetching
    } = useSelector((state: StateType) => state.user)

    const dispatch = useDispatch<DispatchType>()
    const [paginationValue, setPaginationValue] = useState(0)
    const {searchParams, setCondSearchParams} = useCondSearchParams();
    const onPageChanged = (page: number) => {
        dispatch(setCurrentPage(page))
        dispatch(getUsers({currentPage: page, filter: filter}))
    }

    const onSearch = (filter:UsersFilterType) => {
        dispatch(setCurrentPage(1))
        dispatch(setFilter(filter))
        dispatch(getUsers({currentPage: 1,filter}));
        setPaginationValue(0)
    }
    const followHandler = (id:number) => {
        dispatch(follow(id))
    }
    const unFollowHandler = (id:number) => {
        dispatch(unFollow(id))
    }


    useEffect(()=> {
        const term = searchParams.get('term'),
            page = searchParams.get('page'),
            friend = searchParams.get('friend')

        const actualPage = page ? Number(page) : currentPage
        const actualFilter = {} as UsersFilterType
        actualFilter.term = term ? term : filter.term
        actualFilter.onlyFollowed = friend === 'true' ? true : friend === 'false' ? false : null
        dispatch(setCurrentPage(actualPage))
        dispatch(setFilter(actualFilter))
        dispatch(getUsers({currentPage: actualPage, filter: actualFilter}));
    },[])

    useEffect(() => {
        setCondSearchParams({currentPage,filter})
    },[currentPage, filter])
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
                <UsersSearch onSearch={onSearch} filter={filter}/>
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
})
