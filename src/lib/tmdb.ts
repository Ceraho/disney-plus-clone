const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const getTrendingMovies = async (): Promise<Movies> => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/trending/all/day?api_key=${TMDB_API_KEY}&language=en-US`);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const movies: Movies = await response.json();
    return movies;
  } catch (error) {
    throw new Error(`Failed to fetch movies: ${error}`);
  }
};

export const getPopularTvSeries = async (): Promise<TvSeries> => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error("Failed to fetch tv series");
    }

    const tvSeries: TvSeries = await response.json();
    return tvSeries;
  } catch (error) {
    throw new Error(`Failed to fetch tv series: ${error}`);
  }
};

export const getSeriesAiringToday = async (): Promise<TvSeries> => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/tv/airing_today?api_key=${TMDB_API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error("Failed to fetch tv series airing today");
    }

    const tvSeries: TvSeries = await response.json();
    return tvSeries;
  } catch (error) {
    throw new Error(`Failed to fetch tv series airing today: ${error}`);
  }
};