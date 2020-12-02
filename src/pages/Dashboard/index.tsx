import React, { useEffect, useState } from 'react';
import { BiBath, BiRestaurant, BiBed, BiCar } from 'react-icons/bi';
import { RiSlideshow3Line } from 'react-icons/ri';
import { FaRestroom } from 'react-icons/fa';

import api from '../../services/api';

import { Slideshow, SlideshowItem, SlideshowItemText } from './styles';

interface ISlideimoveis {
  code: number | string;
  title: string;
  description: string;
  details: IDetails;
  image: string;
}
interface IDetails {
  dormitorios: string;
  banheiros: string;
  garagem: string;
  sala: string;
  cozinha: string;
  suite: string;
}
const Dashboard: React.FC = () => {
  const [Slides, setSlides] = useState<ISlideimoveis[]>([]);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    const response = await api.get('/imoveis');
    setSlides(response.data);
  }

  return (
    <Slideshow>
      {Slides.map((slide, i = Slides.length - 1) => (
        <SlideshowItem style={{ animationDelay: `${i * 10}s` }}>
          <img
            src={slide.image}
            alt={slide.title}
            style={{ animationDelay: `${i * 10}s` }}
          />

          <SlideshowItemText style={{ animationDelay: `${i * 10}s` }}>
            <h5 style={{ animationDelay: `${i * 10}s` }}>Cod: {slide.code}</h5>

            <p style={{ animationDelay: `${i * 10}s` }}>{slide.description}</p>

            <p style={{ animationDelay: `${i * 10}s` }}>
              <ul>
                {slide.details.suite && (
                  <li>
                    <BiBath size="32" />
                    {slide.details.suite}
                  </li>
                )}
                {slide.details.dormitorios && (
                  <li>
                    <BiBed size="32" />
                    {slide.details.dormitorios}
                  </li>
                )}

                {slide.details.banheiros && (
                  <li>
                    <FaRestroom size="32" />
                    {slide.details.banheiros}
                  </li>
                )}

                {slide.details.sala && (
                  <li>
                    <RiSlideshow3Line size="32" />
                    {slide.details.sala}
                  </li>
                )}

                {slide.details.cozinha && (
                  <li>
                    <BiRestaurant size="32" />
                    {slide.details.cozinha}
                  </li>
                )}
                {slide.details.garagem && (
                  <li>
                    <BiCar size="32" />
                    {slide.details.garagem}
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
