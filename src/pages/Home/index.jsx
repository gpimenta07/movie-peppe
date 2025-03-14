// import axios from "axios";
// import { useEffect, useState } from "react";
// import "../../index.css";
// import CarouselSpacing from "../../components/Carousel/index";
// import getImages from "@/lib/getImages";
// import CarouselSeries from "@/components/CarouselSeries";
// import CarouselPopSeries from "@/components/CarouselPopSeries";
// import CarouselPopPerson from "@/components/CarouselPerson";
// import Close from "../../assets/close.svg";
// import { useNavigate } from "react-router";

// function Home() {
//   const [popularMovies, setpopularMovies] = useState([]);
//   const [moviesVideo, setmoviesVideo] = useState([]);
//   const [trailer, setTrailer] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getMovies = () => {
//       // Pegar filme do dia
//       axios({
//         method: "get",
//         url: "https://api.themoviedb.org/3/trending/movie/day",
//         params: {
//           api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
//           language: "pt-BR",
//         },
//       }).then((response) => {
//         setpopularMovies(response.data.results[0]);
//       });
//     };

//     getMovies();
//   }, []);

//   useEffect(() => {
//     if (!popularMovies.id) return; // Verifica se o ID não é undefined

//     const getMoviesTrailer = () => {
//       axios({
//         method: "get",
//         url: `https://api.themoviedb.org/3/movie/${popularMovies.id}/videos`,
//         params: {
//           api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
//           language: "en-US",
//         },
//       }).then((response) => {
//         setmoviesVideo(response.data.results[0]); // Garante que o trailer seja definido corretamente
//       });
//     };

//     getMoviesTrailer();
//   }, [popularMovies?.id]);

//   function clickTrailer() {
//     // Mostrar trailer
//     setTrailer(!trailer);
//   }

//   return (
//     <div className="w-screen">
//       <div className="relative">
//         <div className="capa flex justify-center items-center">
//           <img
//             className="h-screen w-full"
//             src={getImages(popularMovies.backdrop_path)}
//             alt=""
//           />
//           <div className="absolute flex flex-wrap items-center gap-40">
//             <div className="w-100 ml-22  sm:w-1/2 mt-30 sm:mt-0 sm:ml-48 flex flex-col gap-5">
//               <h1 className="text-white text-2xl sm:text-6xl font-bold">
//                 {popularMovies.title}
//               </h1>
//               <p className="text-white w-80 sm:w-auto sm:text-lg font-semibold">
//                 {popularMovies.overview}
//               </p>
//               <div className="flex gap-4 mt-5">
//                 <a>
//                   <button
//                     onClick={() => navigate(`/detalhe/${popularMovies.id}`)}
//                     className="bg-red-700 px-2 py-2 sm:px-8 sm:py-2 rounded-2xl text-lg text-white cursor-pointer duration-300 hover:opacity-70"
//                   >
//                     Assista agora
//                   </button>
//                 </a>
//                 <a>
//                   <button
//                     onClick={clickTrailer}
//                     className="bg-transparent px-2 py-1.5 sm:px-8 sm:py-2 rounded-2xl border-2 border-white text-lg text-white cursor-pointer duration-300  hover:bg-black hover:opacity-60 "
//                   >
//                     Assista o trailer
//                   </button>
//                 </a>
//               </div>
//               <div>
//                 <div
//                   className={`${
//                     trailer === true ? "flex" : "hidden"
//                   } fixed top-0 left-0 w-full h-full back justify-center items-center z-10000`}
//                 >
//                   <div className="bg-black mr-0 sm:mr-15 w-80 sm:w-auto sm:px-4 sm:py-5 flex flex-col items-center justify-center rounded-lg">
//                     <div className="ml-0 mt-2 sm:mt-0 sm:ml-200">
//                       <button
//                         onClick={clickTrailer}
//                         className="bg-zinc-900 px-1 py-1 rounded-lg mb-2 cursor-pointer duration-300 hover:opacity-75"
//                       >
//                         <img className="w-8" src={Close} alt="" />
//                       </button>
//                     </div>
//                     {moviesVideo && moviesVideo.key && (
//                       <iframe
//                         className="h-70 xl:h-120"
//                         width="100%"
//                         height="550px"
//                         src={`https://www.youtube.com/embed/${moviesVideo.key}`}
//                       ></iframe>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <img
//                 className="hidden xl:flex w-96 rounded-4xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
//                 src={getImages(popularMovies.poster_path)}
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <p className="text-white text-2xl font-extrabold ml-5 mt-10">
//           Top Filmes
//         </p>
//         <div className="h-20 mt-10">
//           <CarouselSpacing></CarouselSpacing>
//           <p className="text-white text-2xl font-extrabold ml-5 mt-10 mb-10">
//             Top Séries
//           </p>
//           <CarouselSeries></CarouselSeries>
//           <p className="text-white text-2xl font-extrabold ml-5  mt-10 mb-10">
//             Seriados Populares
//           </p>
//           <CarouselPopSeries></CarouselPopSeries>
//           <p className="text-white text-2xl font-extrabold ml-5 mt-10 mb-10">
//             Artistas Populares
//           </p>
//           <CarouselPopPerson></CarouselPopPerson>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import axios from "axios";
import { useEffect, useState } from "react";
import "../../index.css";
import CarouselSpacing from "../../components/Carousel/index";
import getImages from "@/lib/getImages";
import CarouselSeries from "@/components/CarouselSeries";
import CarouselPopSeries from "@/components/CarouselPopSeries";
import CarouselPopPerson from "@/components/CarouselPerson";
import Close from "../../assets/close.svg";
import { useNavigate } from "react-router";

function Home() {
  const [popularMovies, setpopularMovies] = useState([]);
  const [moviesVideo, setmoviesVideo] = useState([]);
  const [trailer, setTrailer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = () => {
      axios({
        method: "get",
        url: "https://api.themoviedb.org/3/trending/movie/day",
        params: {
          api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
          language: "pt-BR",
        },
      }).then((response) => {
        setpopularMovies(response.data.results[0]);
      });
    };

    getMovies();
  }, []);

  useEffect(() => {
    if (!popularMovies.id) return;

    const getMoviesTrailer = () => {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${popularMovies.id}/videos`,
        params: {
          api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
          language: "en-US",
        },
      }).then((response) => {
        setmoviesVideo(response.data.results[0]);
      });
    };

    getMoviesTrailer();
  }, [popularMovies?.id]);

  function clickTrailer() {
    setTrailer(!trailer);
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="capa flex justify-center items-center">
          <img className="h-screen w-full" src={getImages(popularMovies.backdrop_path)} alt="" />
          <div className="absolute flex flex-wrap items-center gap-10 max-w-screen-xl px-5">
            <div className="w-full sm:w-1/2 mt-10 sm:mt-0 flex flex-col gap-5">
              <h1 className="text-white text-2xl sm:text-6xl font-bold">{popularMovies.title}</h1>
              <p className="text-white w-full sm:w-auto sm:text-lg font-semibold">{popularMovies.overview}</p>
              <div className="flex gap-4 mt-5">
                <button
                  onClick={() => navigate(`/detalhe/${popularMovies.id}`)}
                  className="bg-red-700 px-4 py-2 rounded-2xl text-lg text-white cursor-pointer duration-300 hover:opacity-70"
                >
                  Assista agora
                </button>
                <button
                  onClick={clickTrailer}
                  className="bg-transparent px-4 py-2 rounded-2xl border-2 border-white text-lg text-white cursor-pointer duration-300 hover:bg-black hover:opacity-60"
                >
                  Assista o trailer
                </button>
              </div>
              {trailer && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
                  <div className="bg-black w-full max-w-lg px-4 py-5 flex flex-col items-center justify-center rounded-lg">
                    <button onClick={clickTrailer} className="bg-zinc-900 px-2 py-2 rounded-lg mb-2 cursor-pointer hover:opacity-75">
                      <img className="w-8" src={Close} alt="Fechar" />
                    </button>
                    {moviesVideo?.key && (
                      <iframe className="w-full max-w-[800px] h-72" src={`https://www.youtube.com/embed/${moviesVideo.key}`} />
                    )}
                  </div>
                </div>
              )}
            </div>
            <div>
              <img className="hidden xl:flex w-96 rounded-4xl shadow-lg" src={getImages(popularMovies.poster_path)} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <p className="text-white text-2xl font-extrabold mt-10 mb-10">Top Filmes</p>
        <CarouselSpacing />
        <p className="text-white text-2xl font-extrabold mt-10 mb-10">Top Séries</p>
        <CarouselSeries />
        <p className="text-white text-2xl font-extrabold mt-10 mb-10">Seriados Populares</p>
        <CarouselPopSeries />
        <p className="text-white text-2xl font-extrabold mt-10 mb-10">Artistas Populares</p>
        <CarouselPopPerson />
      </div>
    </div>
  );
}

export default Home;