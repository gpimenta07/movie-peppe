import CarouselAction from "@/components/CarouselCategory";
import CarouselComedy from "@/components/CarouselCategory";
import CarouselUp from "@/components/CarouselBreve";
import CarouselPlaying from "@/components/CarouselFilmes";

function Movies() {
  return (
    <div>
      <p className="text-white text-2xl font-extrabold ml-15 mb-10 mt-40">
        Filmes em cartaz
      </p>
      <CarouselPlaying />

      <p className="text-white text-2xl font-extrabold ml-15 mt-10 mb-10">
        Lançamentos
      </p>
      <CarouselUp />

      <p className="text-white text-2xl font-extrabold ml-15 mt-10 mb-10">
        Comédia
      </p>
      <CarouselAction />
    </div>
  );
}

export default Movies;
