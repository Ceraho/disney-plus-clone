import CarouselItem from "./carouselItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ moviePosters, category }: { moviePosters?: string[], category?: string }) => {
  return (
    <div>
      <h3 className="text-[20px] font-bold leading-5 tracking-wide">{category}</h3>
      <div className="relative w-full h-full flex items-center overflow-hidden">
        <button className="absolute top-2/5 left-0 z-10">
          <ChevronLeft width={36} height={100} />
        </button>
        <section className="w-full flex gap-2 overflow-x-scroll no-scrollbar scroll-smooth py-4">
          {moviePosters?.length === 0 && <p>No movies found.</p>}
          {moviePosters?.map((moviePoster) => (
            <button>
              <CarouselItem key={moviePoster} moviePoster={moviePoster} />
            </button>
          ))}
        </section>
        <button className="absolute top-2/5 right-0 z-10">
          <ChevronRight width={36} height={100} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
