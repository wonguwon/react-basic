import React from 'react';
import './VideoCard.css';

// VideoCard 컴포넌트
const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      {/* 썸네일 이미지 */}
      <img 
        src={video.sumbnail} 
        alt={video.title} 
        className="video-thumbnail"
      />
      
      {/* 채널 로고, 타이틀, 채널명, 조회수 */}
      <div className="video-info">
        <div className="channel-info">
          <img 
            src={video.channelLogo} 
            alt={video.channelName} 
            className="channel-logo" 
          />
          <div className="channel-details">
            <h3 className="video-title">{video.title}</h3>
            <p className="video-channel">{video.channelName}</p>
            <p className="video-views">{video.views} 조회수 • {video.publishedDate} 전</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
