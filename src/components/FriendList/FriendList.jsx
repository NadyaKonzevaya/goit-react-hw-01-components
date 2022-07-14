import PropTypes from "prop-types";
import FriendListItem from "components/FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

function FriendList({ friends }) { 
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    <FriendListItem
                        name={friend.name}
                        avatar={friend.avatar} 
                        isOnline={friend.isOnline}
                    />
                </li>
            )) }
        </ul>    
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
        })
    ) 
}
export default FriendList