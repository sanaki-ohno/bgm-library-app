import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MusicCard from '../components/music/MusicCard';

const GenrePage = ({ musicData }) => {
  const { genre } = useParams();

  const filteredMusic = musicData.filter((item) => item.genre === genre);

  const getDescription = (genre) => {
    switch (genre) {
      case 'Lo-Fi':
        return 'Lo-Fi音楽の無料BGMコレクション。リラックスした雰囲気を演出するのに最適なBGMをダウンロードできます。';
      case 'Techno':
        return 'テクノ音楽の無料BGMライブラリー。エネルギッシュでリズミカルな楽曲があなたのプロジェクトを盛り上げます。';
      case 'Ambient':
        return 'アンビエント音楽の無料BGMコレクション。静かで瞑想的な雰囲気を作り出す楽曲を提供しています。';
      case 'Classical':
        return 'クラシック音楽の無料BGMライブラリー。優雅で洗練された雰囲気を演出する楽曲をお探しの方に最適です。';
      case 'Experimental':
        return '実験的な音楽の無料BGMコレクション。独特で革新的なサウンドがあなたの作品に新しい息吹を吹き込みます。';
      case 'Electronic':
        return 'エレクトロニック音楽の無料BGMライブラリー。現代的でダイナミックなサウンドがあなたのプロジェクトを彩ります。';
      case 'Jazz':
        return 'ジャズ音楽の無料BGMコレクション。洗練されたメロディとリズムがあなたの作品に深みを与えます。';
      default:
        return `${genre}ジャンルの無料BGMコレクション。あなたのプロジェクトに最適な背景音楽を見つけてください。`;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${genre} BGM | BGM Library - 無料でダウンロード可能な背景音楽`}</title>
        <meta name="description" content={getDescription(genre)} />
        <link rel="canonical" href={`https://convoyafro.com/genre/${genre}`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://convoyafro.com/genre/${genre}`}
        />
        <meta
          property="og:title"
          content={`${genre} BGM | BGM Library - 無料でダウンロード可能な背景音楽`}
        />
        <meta property="og:description" content={getDescription(genre)} />
        <meta
          property="og:image"
          content="https://convoyafro.com/path-to-your-og-image.jpg"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://convoyafro.com/genre/${genre}`}
        />
        <meta
          property="twitter:title"
          content={`${genre} BGM | BGM Library - 無料でダウンロード可能な背景音楽`}
        />
        <meta property="twitter:description" content={getDescription(genre)} />
        <meta
          property="twitter:image"
          content="https://convoyafro.com/path-to-your-og-image.jpg"
        />
      </Helmet>
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-6">{genre} BGM</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMusic.map((music) => (
            <MusicCard key={music.id} {...music} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GenrePage;
