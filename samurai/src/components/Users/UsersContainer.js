import React from "react";
import {connect} from "react-redux";
import {
    decreasePaginationValue,
    follow,
    increasePaginationValue,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersApiComponent extends React.Component {
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPerPage}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items);
                    this.props.toggleIsFetching(false);
                }

            )
    }

    render() {
        const props = this.props;
        return (<>
                <Users
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    totalUsersCount={this.props.totalUsersCount}
                    usersPerPage={this.props.usersPerPage}
                    increasePaginationValue={this.props.increasePaginationValue}
                    decreasePaginationValue={this.props.decreasePaginationValue}
                    paginationValue={this.props.paginationValue}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                />
                {props.isFetching && <Preloader/>}
            </>
        )
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
        this.props.toggleIsFetching(false);
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersPerPage: state.usersPage.usersPerPage,
        paginationValue: state.usersPage.paginationValue,
        isFetching: state.usersPage.isFetching,
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    increasePaginationValue,
    decreasePaginationValue,
    toggleIsFetching,
})(UsersApiComponent);

export default UsersContainer;