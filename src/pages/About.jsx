import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About BGM Library | 高品質な背景音楽を提供するプラットフォーム
        </title>
        <meta
          name="description"
          content="BGM Libraryは、クリエイター、映像制作者、コンテンツプロデューサーに高品質な背景音楽を提供するプラットフォームです。多様なジャンルのロイヤリティフリー音楽で、あなたのプロジェクトを彩ります。"
        />
        <link rel="canonical" href="https://convoyafro.com/about" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://convoyafro.com/about" />
        <meta
          property="og:title"
          content="About BGM Library | 高品質な背景音楽を提供するプラットフォーム"
        />
        <meta
          property="og:description"
          content="BGM Libraryは、クリエイター、映像制作者、コンテンツプロデューサーに高品質な背景音楽を提供するプラットフォームです。多様なジャンルのロイヤリティフリー音楽で、あなたのプロジェクトを彩ります。"
        />
        <meta
          property="og:image"
          content="https://convoyafro.com/path-to-your-og-image.jpg"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://convoyafro.com/about" />
        <meta
          property="twitter:title"
          content="About BGM Library | 高品質な背景音楽を提供するプラットフォーム"
        />
        <meta
          property="twitter:description"
          content="BGM Libraryは、クリエイター、映像制作者、コンテンツプロデューサーに高品質な背景音楽を提供するプラットフォームです。多様なジャンルのロイヤリティフリー音楽で、あなたのプロジェクトを彩ります。"
        />
        <meta
          property="twitter:image"
          content="https://convoyafro.com/path-to-your-og-image.jpg"
        />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-white">
          About BGM Library
        </h1>
        <div className="bg-primary rounded-lg shadow-lg p-6 text-white">
          <p className="mb-4">
            BGM Library is a platform dedicated to providing high-quality
            background music for creators, filmmakers, and content producers.
            Our mission is to offer a diverse range of royalty-free music that
            enhances your projects and brings your stories to life.
          </p>
          <p className="mb-4">
            Founded in 2024, we have been collaborating with talented musicians
            and composers from around the world to build a comprehensive library
            of original tracks across various genres and moods.
          </p>
          <p>
            Whether you're working on a video, podcast, game, or any other
            creative project, BGM Library is here to provide the perfect
            soundtrack. We're committed to continually expanding our collection
            and improving our platform to meet the evolving needs of our users.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
