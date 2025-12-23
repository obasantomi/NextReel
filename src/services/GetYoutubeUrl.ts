const getYouTubeUrl = (key: string | undefined, autoplay: boolean) => {
  if (!key) return "";

  if (autoplay) return `https://www.youtube.com/embed/${key}?autoplay=1&mute=1`;
  return `https://www.youtube.com/embed/${key}`;
};

export default getYouTubeUrl;
