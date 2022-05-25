import React from "react";
import Range from "../../Utils/Range";
import './Users.css'
import {NavLink} from "react-router-dom";
import RoundedAvatar from "../Common/RoundedAvatar/RoundedAvatar";

const Users = (props) => {
    const {
        users,
        follow,
        unFollow,
        totalUsersCount,
        usersPerPage,
        increasePaginationValue,
        decreasePaginationValue,
        paginationValue,
        currentPage,
        onPageChanged,
        followingInProgress
    } = props;
    return (
        <section>
            <div className="text-title">Users</div>
            <div className="pagination">
                {(paginationValue > 0) && <span onClick={() => {
                    decreasePaginationValue()
                }}>&larr;</span>}
                {
                    Range(1 + (5 * paginationValue), 5 + (5 * paginationValue))
                        .map(page => {
                            if (page * usersPerPage <= totalUsersCount) {
                                return <span key={page}
                                             className={(page === currentPage) ? 'active' : ''}
                                             onClick={() => {
                                                 onPageChanged(page)
                                             }}>{page}
                                        </span>
                            }
                        })
                }
                {((paginationValue + 1) * usersPerPage * 5 < totalUsersCount) && <span onClick={() => {
                    increasePaginationValue()
                }}>&rarr;</span>}
            </div>
            {
                users.map(user => {
                    return (
                        <div key={user.id} className='app-block'>
                            <div className='friend-item flex'>
                                <NavLink to={`/profile/${user.id}`}>
                                    <RoundedAvatar
                                        src={user.photos.small}
                                    />
                                </NavLink>
                                <div className='inner column-between'>
                                    <div className="name">
                                        {user.name}
                                    </div>
                                    <div className="status-text">
                                        {user.status || 'Статуса нет'}
                                    </div>
                                </div>
                                <div className="column-between">
                                    <div className='location text-right'>
                                        {'${user.location.country}, ${user.location.city}'}
                                    </div>
                                    <div className="follow-btn text-right">
                                        {
                                            user.followed
                                                ? <button disabled={followingInProgress.includes(user.id)} onClick={() => unFollow(user.id)}
                                                          className='btn-primary'>Unfollow</button>
                                                : <button disabled={followingInProgress.includes(user.id)} onClick={() => follow(user.id)}
                                                          className='btn-primary'>Follow</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <button className='btn-primary blue'>Show more</button>
        </section>
    )
}

export default Users;