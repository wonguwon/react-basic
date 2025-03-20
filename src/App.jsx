import "./App.css";
import Hello from "./components/Hello";
import World from "./components/World";
import VideoCard from "./components/VideoCard";
import VideoList from "./components/VideoList";

const videoData = [
  {
    sumbnail: 'https://i.ytimg.com/vi/Jdsgvf-ZcNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ8sDpODND6yFrORDlqOcDVTQE5A', // 유튜브 영상 ID (예시)
    title: '친구들 연봉을 월급으로 받는 21살 대학생',
    channelLogo: 'https://yt3.ggpht.com/gU-n-llr2Xgs-KWaEpHDG5cDyrLzfPlMHrHQbQ7-diLwklhHJeMkJVuPfq0wjQl53dHE-JW9DQ=s68-c-k-c0x00ffffff-no-rj',
    channelName: '요즘 것들의 돈버는 이야기',
    views: '8.3만회',
    date: '1시간 전',
  },
  {
    sumbnail: 'https://i.ytimg.com/vi/Jdsgvf-ZcNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ8sDpODND6yFrORDlqOcDVTQE5A', // 유튜브 영상 ID (예시)
    title: '친구들 연봉을 월급으로 받는 21살 대학생',
    channelLogo: 'https://yt3.ggpht.com/gU-n-llr2Xgs-KWaEpHDG5cDyrLzfPlMHrHQbQ7-diLwklhHJeMkJVuPfq0wjQl53dHE-JW9DQ=s68-c-k-c0x00ffffff-no-rj',
    channelName: '요즘 것들의 돈버는 이야기',
    views: '8.3만회',
    date: '1시간 전',
  },
  {
    sumbnail: 'https://i.ytimg.com/vi/Jdsgvf-ZcNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ8sDpODND6yFrORDlqOcDVTQE5A', // 유튜브 영상 ID (예시)
    title: '친구들 연봉을 월급으로 받는 21살 대학생',
    channelLogo: 'https://yt3.ggpht.com/gU-n-llr2Xgs-KWaEpHDG5cDyrLzfPlMHrHQbQ7-diLwklhHJeMkJVuPfq0wjQl53dHE-JW9DQ=s68-c-k-c0x00ffffff-no-rj',
    channelName: '요즘 것들의 돈버는 이야기',
    views: '8.3만회',
    date: '1시간 전',
  },  
  {
    sumbnail: 'https://i.ytimg.com/vi/Jdsgvf-ZcNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ8sDpODND6yFrORDlqOcDVTQE5A', // 유튜브 영상 ID (예시)
    title: '친구들 연봉을 월급으로 받는 21살 대학생',
    channelLogo: 'https://yt3.ggpht.com/gU-n-llr2Xgs-KWaEpHDG5cDyrLzfPlMHrHQbQ7-diLwklhHJeMkJVuPfq0wjQl53dHE-JW9DQ=s68-c-k-c0x00ffffff-no-rj',
    channelName: '요즘 것들의 돈버는 이야기',
    views: '8.3만회',
    date: '1시간 전',
  },
  {
    sumbnail: 'https://i.ytimg.com/vi/Jdsgvf-ZcNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ8sDpODND6yFrORDlqOcDVTQE5A', // 유튜브 영상 ID (예시)
    title: '친구들 연봉을 월급으로 받는 21살 대학생',
    channelLogo: 'https://yt3.ggpht.com/gU-n-llr2Xgs-KWaEpHDG5cDyrLzfPlMHrHQbQ7-diLwklhHJeMkJVuPfq0wjQl53dHE-JW9DQ=s68-c-k-c0x00ffffff-no-rj',
    channelName: '요즘 것들의 돈버는 이야기',
    views: '8.3만회',
    date: '1시간 전',
  },
  {
    sumbnail: 'https://i.ytimg.com/vi/Jdsgvf-ZcNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ8sDpODND6yFrORDlqOcDVTQE5A', // 유튜브 영상 ID (예시)
    title: '친구들 연봉을 월급으로 받는 21살 대학생',
    channelLogo: 'https://yt3.ggpht.com/gU-n-llr2Xgs-KWaEpHDG5cDyrLzfPlMHrHQbQ7-diLwklhHJeMkJVuPfq0wjQl53dHE-JW9DQ=s68-c-k-c0x00ffffff-no-rj',
    channelName: '요즘 것들의 돈버는 이야기',
    views: '8.3만회',
    date: '1시간 전',
  },  {
    sumbnail: 'https://i.ytimg.com/vi/Jdsgvf-ZcNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ8sDpODND6yFrORDlqOcDVTQE5A', // 유튜브 영상 ID (예시)
    title: '친구들 연봉을 월급으로 받는 21살 대학생',
    channelLogo: 'https://yt3.ggpht.com/gU-n-llr2Xgs-KWaEpHDG5cDyrLzfPlMHrHQbQ7-diLwklhHJeMkJVuPfq0wjQl53dHE-JW9DQ=s68-c-k-c0x00ffffff-no-rj',
    channelName: '요즘 것들의 돈버는 이야기',
    views: '8.3만회',
    date: '1시간 전',
  },
  {
    sumbnail: 'https://i.ytimg.com/vi/Jdsgvf-ZcNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ8sDpODND6yFrORDlqOcDVTQE5A', // 유튜브 영상 ID (예시)
    title: '친구들 연봉을 월급으로 받는 21살 대학생',
    channelLogo: 'https://yt3.ggpht.com/gU-n-llr2Xgs-KWaEpHDG5cDyrLzfPlMHrHQbQ7-diLwklhHJeMkJVuPfq0wjQl53dHE-JW9DQ=s68-c-k-c0x00ffffff-no-rj',
    channelName: '요즘 것들의 돈버는 이야기',
    views: '8.3만회',
    date: '1시간 전',
  },
  {
    sumbnail: 'https://i.ytimg.com/vi/Jdsgvf-ZcNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ8sDpODND6yFrORDlqOcDVTQE5A', // 유튜브 영상 ID (예시)
    title: '친구들 연봉을 월급으로 받는 21살 대학생',
    channelLogo: 'https://yt3.ggpht.com/gU-n-llr2Xgs-KWaEpHDG5cDyrLzfPlMHrHQbQ7-diLwklhHJeMkJVuPfq0wjQl53dHE-JW9DQ=s68-c-k-c0x00ffffff-no-rj',
    channelName: '요즘 것들의 돈버는 이야기',
    views: '8.3만회',
    date: '1시간 전',
  },
];

function App() {
  return (
    <div style={{ padding: 30 }}>
      {/* <Hello /><World /> */}
      {/* <VideoCard video={{
        sumbnail: 'https://i.ytimg.com/vi/Jdsgvf-ZcNY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ8sDpODND6yFrORDlqOcDVTQE5A', // 유튜브 영상 ID (예시)
        title: '친구들 연봉을 월급으로 받는 21살 대학생',
        channelLogo: 'https://yt3.ggpht.com/gU-n-llr2Xgs-KWaEpHDG5cDyrLzfPlMHrHQbQ7-diLwklhHJeMkJVuPfq0wjQl53dHE-JW9DQ=s68-c-k-c0x00ffffff-no-rj',
        channelName: '요즘 것들의 돈버는 이야기',
        views: '8.3만회',
        date: '1시간 전',
      }} /> */}
      <VideoList videos={videoData}/>
    </div>
  );
}

export default App;
