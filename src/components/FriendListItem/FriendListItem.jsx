import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <>
            <span className="status">{ isOnline}</span>
            <img className="avatar" src={ avatar} alt="User avatar" width="48" />
            <p className="name">{ name}</p>
        </>    
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;