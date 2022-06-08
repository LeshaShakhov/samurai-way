import React, {useEffect, useState} from "react";
import {connect, ConnectedProps} from "react-redux";
import {followTC, setUsersTC, unFollowTC} from "../../redux/usersReducer";
import {usersActions} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getTotalUsersCount,
    getUsers, getUsersFilter,
    getUsersPerPage
} from "../../redux/selectors/userSelectors";
import {StateType} from "../../redux/redux-store";
import {UsersFilterType} from "../../redux/types/types";


const UsersContainer: React.FC<PropsFromRedux> = (props) => {

    const [paginationValue, setPaginationValue] = useState(0);

    useEffect(()=>{
        getUsers(props.currentPage, props.usersPerPage, props.filter);
    },[])

    const onPageChanged = (page: number) => {
        props.setCurrentPage(page);
        getUsers(page, props.usersPerPage, props.filter);
    }
    const getUsers = (page: number, usersPerPage:number, filter:UsersFilterType) => {
        props.setUsersTC(page, usersPerPage, filter);
    }

    const onSearch = (filter:UsersFilterType) => {
        props.setCurrentPage(1);
        setPaginationValue(0);
        props.setUsersTC(1, props.usersPerPage, filter);
    }
    const unFollow = (id: number) => {
        props.unFollowTC(id);
    }

    const follow = (id: number) => {
        props.followTC(id)
    }
    return (<>
            <Users
                users={props.users}
                follow={follow}
                unFollow={unFollow}
                totalUsersCount={props.totalUsersCount}
                usersPerPage={props.usersPerPage}
                currentPage={props.currentPage}
                onPageChanged={onPageChanged}
                followingInProgress={props.followingInProgress}
                onSearch={onSearch}
                paginationValue={paginationValue}
                setPaginationValue={setPaginationValue}
            />
            {props.isFetching && <Preloader/>}
        </>
    )
}


let mapStateToProps = (state: StateType) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        usersPerPage: getUsersPerPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}

const connector = connect(mapStateToProps, {
    setCurrentPage: usersActions.setCurrentPage,
    setUsersTC,
    followTC,
    unFollowTC,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(UsersContainer)
