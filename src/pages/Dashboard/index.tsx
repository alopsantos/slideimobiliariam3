import React, { useEffect, useState } from 'react';
import { BiBath, BiRestaurant, BiBed, BiCar } from 'react-icons/bi';
import { RiSlideshow3Line } from 'react-icons/ri';
import { FaRestroom } from 'react-icons/fa';

import api from '../../services/api';

import { Slideshow, SlideshowItem, SlideshowItemText } from './styles';

interface ISlideimoveis {
  id: number;
  code: number | string;
  title: string;
  //description: string;
  dormitorios: string;
  banheiros: string;
  garagem: string;
  sala: string;
  cozinha: string;
  suite: string;
  image: string;
}
const Dashboard: React.FC = () => {
  const [Slides, setSlides] = useState<ISlideimoveis[]>([]);

  useEffect(() => {
    console.log("teste");
    loadApi();
  }, []);
  
  async function loadApi() {
    const response = await api.get('imoveis');
    setSlides(response.data);
  }
  
  return (
    <Slideshow>
      <div>teste</div>
      {Slides.map((slide, i = Slides.length - 1) => (
        <SlideshowItem key={slide.id} style={{ animationDelay: `${i * 10}s` }}>
          <img
            src={slide.image}
            alt={slide.title}
            style={{ animationDelay: `${i * 10}s` }}
          />

          <SlideshowItemText style={{ animationDelay: `${i * 10}s` }}>
            <h5 style={{ animationDelay: `${i * 10}s` }}>Cod: {slide.code}</h5>

            {/* <p style={{ animationDelay: `${i * 10}s` }}>{slide.description}</p> */}

            <p style={{ animationDelay: `${i * 10}s` }}>
              <ul>
                {slide.suite && (
                  <li>
                    <BiBath size="32" />
                    {slide.suite}
                  </li>
                )}
                {slide.dormitorios && (
                  <li>
                    <BiBed size="32" />
                    {slide.dormitorios}
                  </li>
                )}

                {slide.banheiros && (
                  <li>
                    <FaRestroom size="32" />
                    {slide.banheiros}
                  </li>
                )}

                {slide.sala && (
                  <li>
                    <RiSlideshow3Line size="32" />
                    {slide.sala}
                  </li>
                )}

                {slide.cozinha && (
                  <li>
                    <BiRestaurant size="32" />
                    {slide.cozinha}
                  </li>
                )}
                {slide.garagem && (
                  <li>
                    <BiCar size="32" />
                    {slide.garagem}
                  </li>
                )}
              </ul>
            </p>
          </SlideshowItemText>
        </SlideshowItem>
      ))}
    </Slideshow>
  );
};

export default Dashboard;
