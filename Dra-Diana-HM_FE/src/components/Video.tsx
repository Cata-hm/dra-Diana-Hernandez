import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section className="video-section bg-gray-100 pb-20">
      <video 
        src="/videos/video1.mp4"  // Nota la barra inicial: apunta a public/videos/video1.mp4
        poster="/images/profile4.jpg" // opcional
        controls 
        className="w-full max-w-4xl mx-auto aspect-video object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;
