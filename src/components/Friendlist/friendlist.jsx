import PropTypes from 'prop-types';
import css from './Friendlist.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className={css.item}>
    <span
      className={
        css.status + ' ' + (isOnline === true ? css.isOnline : css.isOffline)
      }
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

export const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        id={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
