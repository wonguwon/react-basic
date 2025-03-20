import React from 'react';
import './VideoList.css'
import VideoCard from './VideoCard';

// VideoList 컴포넌트: 여러 개의 동영상 카드 표시
const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
