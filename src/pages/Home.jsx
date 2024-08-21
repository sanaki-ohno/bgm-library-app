import React from 'react';
import { Helmet } from 'react-helmet-async';
import MusicCard from '../components/music/MusicCard';
import { musicData } from '../data/musicData';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BGM Library | 無料で使える高品質な背景音楽</title>
        <meta
          name="description"
          content="BGM Libraryは、クリエイター向けの無料で使える高品質な背景音楽を提供しています。様々なジャンルのBGMをダウンロードして、あなたの作品に活用しましょう。"
        />
        <link rel="canonical" href="https://convoyafro.com" />
        {/* 追加のメタタグ */}
        <meta
          property="og:title"
          content="BGM Library | 無料で使える高品質な背景音楽"
        />
        <meta
          property="og:description"
          content="BGM Libraryは、クリエイター向けの無料で使える高品質な背景音楽を提供しています。様々なジャンルのBGMをダウンロードして、あなたの作品に活用しましょう。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://convoyafro.com" />
        <meta
          property="og:image"
          content="https://convoyafro.com/path-to-your-og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {musicData.map((music) => (
          <MusicCard key={music.id} {...music} />
        ))}
      </div>
    </>
  );
};

export default Home;
