import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { getDestinationImages, getDestinations } from '../api';


function getImageUrl(folder, url) {
  return `https://demos.telerik.com/aspnet-mvc/tripxpert/Images/Gallery/${folder.trim()}/${url.trim()}`;
}

const CarouselWrapper = styled.div`
  width: 100%;
  margin-top: -100px;
  z-index: -1;
`;

const CarouselImg = styled.div`
  width: 100%;
  height: 600px;
  background-position: center;
  background-size: cover;
`;

const Destination = ({ match }) => {

  const destinationID = match.params.id;

  const [images, setImages] = useState(null);
  const [destinationData, setDestinationData] = useState(null);

  useEffect(() => {
    getDestinationImages(destinationID)
      .then((data) => {
        setImages(data);
      });
  }, [destinationID]);

  useEffect(() => {
    getDestinations()
      .then((data) => {
        setDestinationData(data.Data.find((d) => d.DestinationID.toString() === destinationID));
      });
  }, [destinationID]);

  console.log('destination data', destinationData);

  return (
    <>
      <CarouselWrapper>
        {
          images ? (
            <Carousel emulateTouch showArrows showThumbs={false}>
              {images.map(({ FolderName, ImageURL, ImageID }) => {
                return (
                  <CarouselImg
                    key={ImageID}
                    style={{
                      backgroundImage: `url(${getImageUrl(FolderName, ImageURL)})`,
                    }}
                  />
                );
              })}
            </Carousel>
          ) : (
            <div>Loading images!</div>
          )
        }
      </CarouselWrapper>
      Destination view {destinationID}
    </>
  );
};

export default Destination;
