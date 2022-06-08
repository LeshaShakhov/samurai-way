import React from "react";
import {NavLink} from "react-router-dom";
import RoundedAvatar from "../Common/RoundedAvatar/RoundedAvatar";
import {UserType} from "../../redux/types/types";

interface PropsTypes extends UserType {
    followingInProgress: Array<number>,
    unFollow: (id:number) => void,
    follow: (id: number) => void
}
const User: React.FC<PropsTypes> = ({id, photos, name, status, followed, followingInProgress, unFollow, follow}) => {
  return (
      <div className='app-block'>
          <div className='friend-item flex'>
              <NavLink to={`/profile/${id}`}>
                  <RoundedAvatar
                      src={photos.small}
                  />
              </NavLink>
              <div className='inner column-between'>
                  <div className="name">
                      {name}
                  </div>
                  <div className="status-text">
                      {status || 'Статуса нет'}
                  </div>
              </div>
              <div className="column-between">
                  <div className='location text-right'>
                      {'${user.location.country}, ${user.location.city}'}
                  </div>
                  <div className="follow-btn text-right">
                      {
                          followed
                              ? <button disabled={followingInProgress.includes(id)} onClick={() => unFollow(id)}
                                        className='btn-primary'>Unfollow</button>
                              : <button disabled={followingInProgress.includes(id)} onClick={() => follow(id)}
                                        className='btn-primary'>Follow</button>
                      }
                  </div>
              </div>
          </div>
      </div>
  )
}

export default User;