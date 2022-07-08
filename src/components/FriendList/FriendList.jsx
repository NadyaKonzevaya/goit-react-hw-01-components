import PropTypes from "prop-types";
import FriendListItem from "components/FriendListItem/FriendListItem";


function FriendList({ friends }) { 
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li className="item" key={friend.id}>
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