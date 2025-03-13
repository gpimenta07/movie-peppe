
import * as React from "react";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import axios from "axios";

function CarouselPopPerson() {
  const [popPerson, setPopPerson] = useState([]);
  
  useEffect(() => {
    const getTop = () => {
      axios({
        method: "get",
        url: "https://api.themoviedb.org/3/person/popular?language=pt-BR&page=1",
        params: {
          api_key: "e4553f1eb0af7c766ac5a0237ec8baeb",
          language: "pt-BR",
        },
      }).then((response) => {
        setPopPerson(response.data.results);
      });
    };
    getTop();
  }, []);
  
  

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 flex-nowrap mb-10">
        {popPerson.map((person, index) => (
          <CarouselItem key={index} className="basis-1/2 xl:basis-1/6">
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                className="rounded-3xl h-80 xl:h-110 cursor-pointer"
                src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                alt=""
              />
              <p className="text-white text-lg font-bold">{person.name}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CarouselPopPerson;


