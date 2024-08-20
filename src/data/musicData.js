export const musicData = [
  {
    id: 1,
    title: 'Chill Waves',
    artist: 'LoFi Producer',
    genre: 'Lo-Fi',
    thumbnail: '/images/wave.svg',
    downloadUrl: '/audio/sample.mp3',
    sampleUrl: '/audio/sample.mp3',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 2,
    title: 'Geometric Beats',
    artist: 'Techno Master',
    genre: 'Techno',
    thumbnail: '/images/geometric.svg',
    downloadUrl: '/audio/sample.mp3',
    sampleUrl: '/audio/sample.mp3',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 3,
    title: 'Forest Sounds',
    artist: 'Nature Composer',
    genre: 'Ambient',
    thumbnail: '/images/nature.svg',
    downloadUrl: '/audio/sample.mp3',
    sampleUrl: '/audio/sample.mp3',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 4,
    title: 'Classical Journey',
    artist: 'Virtuoso Violinist',
    genre: 'Classical',
    thumbnail: '/images/musical-notes.svg',
    downloadUrl: '/audio/sample.mp3',
    sampleUrl: '/audio/sample.mp3',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 5,
    title: 'Color Explosion',
    artist: 'Experimental Sound Artist',
    genre: 'Experimental',
    thumbnail: '/images/abstract-color.svg',
    downloadUrl: '/audio/sample.mp3',
    sampleUrl: '/audio/sample.mp3',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 6,
    title: 'Synth Dreams',
    artist: 'Electronic Wizard',
    genre: 'Electronic',
    thumbnail: '/images/wave.svg',
    downloadUrl: '/audio/sample.mp3',
    sampleUrl: '/audio/sample.mp3',
    youtubeUrl: 'https://youtube.com',
  },
  {
    id: 7,
    title: 'Jazz Fusion',
    artist: 'The Smooth Quartet',
    genre: 'Jazz',
    thumbnail: '/images/musical-notes.svg',
    downloadUrl: '/audio/sample.mp3',
    sampleUrl: '/audio/sample.mp3',
    youtubeUrl: 'https://youtube.com',
  },
  // ... 他の楽曲データ ...
];

export const getGenres = () => {
  const genres = new Set(musicData.map((item) => item.genre));
  return ['All', ...genres];
};

export const addMusic = (newMusic) => {
  const newId = Math.max(...musicData.map((item) => item.id)) + 1;
  musicData.push({ ...newMusic, id: newId });
};

export const removeMusic = (id) => {
  const index = musicData.findIndex((item) => item.id === id);
  if (index !== -1) {
    musicData.splice(index, 1);
  }
};
