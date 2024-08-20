import React from 'react';
import MusicCard from '../components/music/MusicCard';
import { musicData } from '../data/musicData';

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {musicData.map((music) => (
        <MusicCard key={music.id} {...music} />
      ))}
    </div>
  );
};

export default Home;
