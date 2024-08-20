import React from 'react';
import { useParams } from 'react-router-dom';
import MusicCard from '../components/music/MusicCard';

const GenrePage = ({ musicData }) => {
  const { genre } = useParams();

  const filteredMusic = musicData.filter((item) => item.genre === genre);

  return (
    <div className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMusic.map((music) => (
          <MusicCard key={music.id} {...music} />
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
