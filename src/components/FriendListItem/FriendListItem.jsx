import PropTypes from "prop-types";
import css from "./FriendListItem.module.css"

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <>
            <span className={css.status} style= {{backgroundColor: isOnline ? "green" : "red"}}></span>
            <img className={css.avatar} src={ avatar} alt="User avatar" width="48" />
            <p className={css.name}>{ name}</p>
        </>    
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;