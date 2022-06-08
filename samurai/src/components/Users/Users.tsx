import React from "react";
import './Users.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UsersFilterType, UserType} from "../../redux/types/types";
import UsersTypeSelector from "./UsersTypeSelector";
import UsersSearch from "./UsersSearch";

const PAGINATOR_PAGES_COUNT = 10;// length visible pagination

interface PropsTypes {
    users: Array<UserType>
    totalUsersCount: number
    usersPerPage: number
    followingInProgress: Array<number>
    currentPage: number
    onPageChanged: (page: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
    onSearch: (filter: UsersFilterType) => void
    paginationValue:number
    setPaginationValue: (value : number) => void
}

const Users: React.FC<PropsTypes> = ({
                                         users, follow, unFollow,
                                         totalUsersCount, usersPerPage,
                                         currentPage, onPageChanged, followingInProgress,
                                         onSearch,paginationValue, setPaginationValue,
                                         ...props
                                     }) => {
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
                            unFollow={unFollow} follow={follow}
                        />
                    )
                })
            }
            <button className='btn-primary blue'>Show more</button>

        </>
    )
}

export default Users;