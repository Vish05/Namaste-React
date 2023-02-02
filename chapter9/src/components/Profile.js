import {useState} from "react";

const Profile = (props) => {
    const [count] =useState(0);
    return (
        <div>
            <h2>This is a Functional Component made by Mitika Gupta</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count: {count}</h3>
        </div>
    )
};

export default Profile;