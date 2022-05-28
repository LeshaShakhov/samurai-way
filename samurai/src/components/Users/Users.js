import React from "react";
import './Users.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const PAGINATOR_PAGES_COUNT = 10;

const Users = ({
                   users, follow, unFollow,
                   totalUsersCount, usersPerPage,
                   currentPage, onPageChanged, followingInProgress,
                    ...props
               }) => {
    return (
        <section>
            <div className="text-title">Users</div>
            {/*<Paginator*/}
            {/*    itemsPerPage={usersPerPage}*/}
            {/*    totalItems={totalUsersCount}*/}
            {/*    currentPage={currentPage}*/}
            {/*    onPageChanged={onPageChanged}*/}
            {/*    pagesCount={PAGINATOR_PAGES_COUNT}*/}
            {/*/>*/}
            {
                users.map(user => {
                    return (
                        <User
                            key={user.id} id={user.id} photo={user.photos.small}
                            name={user.name} status={user.status}
                            isFollowed={user.followed}
                            followingInProgress={followingInProgress}
                            unFollow={unFollow} follow={follow}
                        />
                    )
                })
            }

            <button className='btn-primary blue'>Show more</button>
        </section>
    )
}

export default Users;