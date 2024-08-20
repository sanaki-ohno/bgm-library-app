import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">About BGM Library</h1>
      <div className="bg-primary rounded-lg shadow-lg p-6 text-white">
        <p className="mb-4">
          BGM Library is a platform dedicated to providing high-quality
          background music for creators, filmmakers, and content producers. Our
          mission is to offer a diverse range of royalty-free music that
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
  );
};

export default About;
