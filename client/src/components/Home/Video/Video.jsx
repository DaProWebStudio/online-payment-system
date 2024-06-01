import cls from './Video.module.scss'
import Cover from '../../../shared/assets/destopAdmin.png'
import VideoPresentation from '../../../shared/assets/Video.mp4'
import {useState} from "react";

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        const video = document.getElementById('videoPlayer');
        if (!isPlaying) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className={cls.Video}>
            <video
                data-aos="fade-up"
                id="videoPlayer"
                loop
                poster={Cover}
                onClick={handleVideoClick}>
                <source src={VideoPresentation} type="video/mp4"/>
            </video>
            {!isPlaying && (
                <button className={cls.Button} onClick={handleVideoClick}></button>
            )}
        </div>
    );
};

export default Video;