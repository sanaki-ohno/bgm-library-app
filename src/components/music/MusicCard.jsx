import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Download, Youtube } from 'lucide-react';

const MusicCard = ({
  title,
  artist,
  genre,
  thumbnail,
  downloadUrl,
  sampleUrl,
  youtubeUrl,
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullDuration, setFullDuration] = useState(0);
  const [error, setError] = useState(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setError(null);
          })
          .catch((error) => {
            console.error('Error playing audio:', error);
            setIsPlaying(false);
            setError(`Unable to play audio: ${error.message}`);
          });
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * 30;
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio) {
        const currentTime = audio.currentTime;
        setCurrentTime(currentTime);
        setProgress((currentTime / 30) * 100);
        if (currentTime >= 30) {
          audio.pause();
          audio.currentTime = 0;
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        }
      }
    };

    const handleAudioEnd = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const handleLoadedMetadata = () => {
      setFullDuration(audio.duration);
    };

    if (audio) {
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', handleAudioEnd);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        setError(
          `Error loading audio: ${e.target.error?.message || 'Unknown error'}`
        );
      });
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('ended', handleAudioEnd);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('error', () => {});
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-primary rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-2">{artist}</p>
        <p className="text-gray-400 text-sm mb-4">Genre: {genre}</p>
        <div className="flex justify-between mb-2">
          <button
            onClick={handlePlayPause}
            className="bg-green-600 text-white text-xs px-2 py-1 rounded hover:bg-green-700 transition duration-300 flex items-center"
          >
            {isPlaying ? (
              <>
                <Pause size={14} className="mr-1" />
                Pause
              </>
            ) : (
              <>
                <Play size={14} className="mr-1" />
                Sample
              </>
            )}
          </button>
          <a
            href={downloadUrl}
            download
            className="bg-accent text-white text-xs px-2 py-1 rounded hover:bg-accent-dark transition duration-300 flex items-center"
          >
            <Download size={14} className="mr-1" />
            Download
          </a>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white text-xs px-2 py-1 rounded hover:bg-red-700 transition duration-300 flex items-center"
          >
            <Youtube size={14} className="mr-1" />
            YouTube
          </a>
        </div>
        <div
          className="w-full bg-gray-700 rounded-full h-2.5 cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="bg-green-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-gray-400 text-sm mt-1 flex justify-between">
          <span>{formatTime(currentTime)} / 0:30 (Sample)</span>
          <span>Full Duration: {formatTime(fullDuration)}</span>
        </div>
      </div>
      <audio ref={audioRef} src={sampleUrl} />
      {error && <p className="text-red-500 mt-2 px-4">{error}</p>}
    </div>
  );
};

export default MusicCard;
