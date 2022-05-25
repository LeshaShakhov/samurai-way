import React from "react";
import {connect} from "react-redux";
import {
    decreasePaginationValue, follow, followTC,
    increasePaginationValue, setCurrentPage,
     setUsersTC, unFollow, unFollowTC
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setUsersTC(page, this.props.usersPerPage);
    }

    render() {
        const props = this.props;
        return (<>
                <Users
                    users={this.props.users}
                    follow={this.follow}
                    unFollow={this.unFollow}
                    totalUsersCount={this.props.totalUsersCount}
                    usersPerPage={this.props.usersPerPage}
                    increasePaginationValue={this.props.increasePaginationValue}
                    decreasePaginationValue={this.props.decreasePaginationValue}
                    paginationValue={this.props.paginationValue}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                />
                {props.isFetching && <Preloader/>}
            </>
        )
    }

    unFollow = (id) => {
        this.props.unFollowTC(id);
    }

    follow = (id) => {
        this.props.followTC(id)
    }

    componentDidMount() {
        this.props.setUsersTC(this.props.currentPage, this.props.usersPerPage);
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    increasePaginationValue,
    decreasePaginationValue,
    setUsersTC,
    followTC,
    unFollowTC
})(UsersContainer);