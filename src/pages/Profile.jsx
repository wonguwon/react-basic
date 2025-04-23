import React from 'react'
import { useParams } from "react-router-dom";

const Profile = () => {
    const { username } = useParams();
    return (
        <div>
            <h2>👤 {username}의 프로필 페이지입니다.</h2>
            <p>이 곳에 사용자 정보를 보여줄 수 있어요!</p>
        </div>
    );
}

export default Profile