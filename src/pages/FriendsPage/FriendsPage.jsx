import "./FriendsPage.scss"
import NavBar from "../../components/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import FriendCard from "../../components/FriendCard/FriendCard.jsx";

const baseURL = import.meta.env.VITE_API_URL;

function FriendsPage() {
    const userID = 1;

    const [friends, setFriends] = useState([]);
    const [user, setUser] = useState([])

    async function getFriends() {
        try {
            const response = await axios.get(`${baseURL}/friends`);
            const friendList = response.data[0].map((f)=>{
                if (f.friend_id === userID) {
                    return {friend_name: f.user_name, status: f.status, completion: f.user_completion, profile: f.user_profile};
                } else {
                    return {friend_name: f.friend_name, status: f.status, completion: f.friend_completion, profile: f.friend_profile};
                };
            })
            setFriends(friendList);    
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=> {getFriends()}, []);
    console.log('this is friends',friends);

    return(
        <>
        <section className="home__header">
            <h2 className="home__title">Friends</h2>
            <svg className="home__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
        </section>
        <section className="friend">
            <p className="friend__label">{friends.length} Friends</p>
            <div className="friend__list">
                {friends.map((friend, i)=> <FriendCard key={i} friend={friend}/>)}
            </div>
        </section>
        <section className="home__padding">
        </section>
        <NavBar/>
        </>
    )
};

export default FriendsPage;