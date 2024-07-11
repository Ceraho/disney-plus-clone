const NEXT_PUBLIC_TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const NEXT_PUBLIC_TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (!NEXT_PUBLIC_TMDB_API_KEY || !NEXT_PUBLIC_TMDB_BASE_URL) {
  throw new Error("NEXT_PUBLIC_TMDB_BASE_URL and NEXT_PUBLIC_TMDB_API_KEY must be defined");
}

export const searchAllContent = async (query: string): Promise<Movies> => {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_TMDB_BASE_URL}/search/multi?api_key=${NEXT_PUBLIC_TMDB_API_KEY}&query=${query}&language=en-US`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch content");
    }

    const movies: Movies = await response.json();
    return movies;
  } catch (error) {
    throw new Error(`Failed to fetch content: ${error}`);
  }
};

export const getTrendingMovies = async (): Promise<Movies> => {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_TMDB_BASE_URL}/trending/all/day?api_key=${NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
    );
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
    const response = await fetch(
      `${NEXT_PUBLIC_TMDB_BASE_URL}/tv/popular?api_key=${NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
    );
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
    const response = await fetch(
      `${NEXT_PUBLIC_TMDB_BASE_URL}/tv/airing_today?api_key=${NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch tv series airing today");
    }

    const tvSeries: TvSeries = await response.json();
    return tvSeries;
  } catch (error) {
    throw new Error(`Failed to fetch tv series airing today: ${error}`);
  }
};
