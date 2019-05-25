import React, { useState, useEffect } from 'react';
import MasonryLayout from './MasonryLayout';
import { useMedia } from 'react-use-media';

import RecommendationTile from './RecommendationTile';

import { getDestinations } from '../api';

const Destinations = () => {
  document.title = `TripXpert Destinations`;
  const isMd = useMedia('(min-width: 768px)') ? true : false;

  const [destinations, setDestinations] = useState(null);
  useEffect(() => {
    getDestinations()
      .then((data) => {
        setDestinations(data.Data);
      });
  }, []);

  return (
    <>
      <div className="content-description text-center">
        <h3 className="title">Available Destinations</h3>
      </div>
      <div className="masonry-grid">
        {
          destinations ? (
            <MasonryLayout columns={isMd ? 3 : 2} gap={isMd ? 32 : 24}>
              {
                destinations.map(({ DestinationID, DefaultImage, Title, ShortDescription, LowestPrice }) => {
                  const height = 250 + Math.random() * 200;
                  return (
                    <RecommendationTile
                      key={DestinationID}
                      id={DestinationID}
                      style={{ height: `${height}px` }}
                      img={DefaultImage}
                      title={Title}
                      subtitle={ShortDescription}
                      minPrice={LowestPrice}
                    />
                  );
                })
              }
            </MasonryLayout>
          ) : (
            <div>Loading...</div>
          )
        }

      </div>
    </>
  );
};

export default Destinations;
