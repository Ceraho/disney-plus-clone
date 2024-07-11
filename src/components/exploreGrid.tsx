import CarouselItem from "./carouselItem";

const ExploreGrid = ({ moviePosters, category }: { moviePosters?: string[], category?: string }) => {
    return (
        <div className="w-full h-full px-10 md:px-16 pt-10">
          <h3 className="text-[44px] font-bold leading-5 tracking-wide mb-10">{category}</h3>
          <div className="relative w-full h-full flex items-center">
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12 w-full h-full">
              {moviePosters?.length === 0 && <p>No movies found.</p>}
              {moviePosters?.map((moviePoster) => (
                <button>
                  <CarouselItem key={moviePoster} moviePoster={moviePoster} />
                </button>
              ))}
            </section>
          </div>
        </div>
      );
};

export default ExploreGrid;