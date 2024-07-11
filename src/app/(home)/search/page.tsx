import ExploreGrid from "@/components/exploreGrid";
import SearchField from "@/components/searchField";
import { getImagePath } from "@/lib/getImagePath";
import { getTrendingMovies, searchAllContent } from "@/lib/tmdb";

const SearchPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
  }) => {
    const query = searchParams?.query || '';
    const { results: searchResults } = await searchAllContent(query);
    const searchedContentPosters = searchResults.map((movie) =>
      getImagePath(movie.poster_path)
    );
  
  const { results: movieResults } = await getTrendingMovies();
  const trendingMoviePosters = movieResults.map((movie) =>
    getImagePath(movie.poster_path)
  );

  return (
    <div className="h-full w-full">
      <SearchField />
      <div className="relative pt-40 pb-10 md:pt-48">
        {searchedContentPosters.length > 0 ? (
          <ExploreGrid
            moviePosters={searchedContentPosters}
            category="Results"
          />
        ) : (
          <ExploreGrid
            moviePosters={trendingMoviePosters}
            category="Explore"
          />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
