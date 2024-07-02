import Carousel from "@/components/carousel";
import { getTrendingMovies, getPopularTvSeries, getSeriesAiringToday } from "@/lib/tmdb";
import { getImagePath } from "@/lib/getImagePath";

const HomePage = async () => {
  const { results: movieResults } = await getTrendingMovies();
  const trendingMoviePosters = movieResults.map((movie) => getImagePath(movie.poster_path));

  const { results: seriesResults } = await getPopularTvSeries();
  const popularTvPosters = seriesResults.map((tvShow) => getImagePath(tvShow.poster_path));

  const { results: seriesTodayResults } = await getSeriesAiringToday();
  const seriesAiringTodayPosters = seriesTodayResults.map((tvShow) => getImagePath(tvShow.poster_path));
  
  return (
    <div>
      <Carousel moviePosters={trendingMoviePosters} category="Trending Movies" />
      <Carousel moviePosters={popularTvPosters} category="Popular TV Series" />
      <Carousel moviePosters={seriesAiringTodayPosters} category="TV Series Airing Today" />
    </div>
  );
};

export default HomePage;
