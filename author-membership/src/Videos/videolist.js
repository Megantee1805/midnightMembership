
import React from 'react';

import VideoPlayer from './VideoPlayer';

function VideoList() {
    const videos = [
        {
            id: 1,
            videoURL: "'https://youtu.be/ro130m-f_yk'",
            title: 'Video 1',
            description: 'This is the first video',
            publishedDate: '2022-03-15'
        },
        {
            id: 2,
            thumbnailUrl: 'https://example.com/video2-thumbnail.jpg',
            title: 'Video 2',
            description: 'This is the second video',
            publishedDate: '2022-03-18'
        },
        // more videos...
    ];
    return (
        <div className="video-list">
            <h2>Video List</h2>
            <ul>
                {videos.map((video) => (
                    <li key={video.id}>
                        <VideoPlayer url={video.thumbnailUrl}></VideoPlayer>
                        <div>
                            <h3>{video.title}</h3>
                            <p>{video.description}</p>
                            <p>Published on: {video.publishedDate}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VideoList;
