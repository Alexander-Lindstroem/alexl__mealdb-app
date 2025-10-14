interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

const YouTubeEmbed= ({ videoId, title }:YouTubeEmbedProps) => {
  return (
    <div className="relative w-full overflow-hidden pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;