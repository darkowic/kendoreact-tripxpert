import React from 'react';
import MasonryLayout from './MasonryLayout';
import { useMedia } from 'react-use-media';

/* KendoReact Components and CSS */
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

import RecommendationTile from './RecommendationTile'

import preview from '../images/Gallery/Barcelona-and-Tenerife/Arc-de-Triomf,-Barcelona,-Spain_Liliya-Karakoleva.JPG'

const Home = () => {
  document.title = `TripXpert Home`;
  const isMd = useMedia("(min-width: 768px)") ? true : false;
  const offerOptions = [ "All", "Special", "Regular" ];
  const priceOptions = [ "$0 to $999", "$1000 to $1999", "$2000 to $2999" ];
  const destinations = [ "Barcelona", "United States", "Malta", "Italy" ];

  return (
    <>
      <div className="home-header-container">
        <div className="header-centered">

          <h1>Find the best destinations all around the world</h1>

          <div className="tx-search-sm">
            <span>Find your destination</span>
          </div>

          <div className="tx-search-md">
            <div className="row no-gutters">
              <div className="col-2">
                <DropDownList data={offerOptions} placeholder="Offer Type" />
              </div>
              <div className="col-3">
                <DropDownList data={priceOptions} placeholder="Price Range" />
              </div>
              <div className="col-5">
                <DropDownList data={destinations} placeholder="Destinations" />
              </div>
              <div className="col-2">
                <Button primary={true}>Search</Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="content-description text-center">
        <h3 className="title">Tripxpert Recomends</h3>
        <p className="text-muted text-italic">Explore top destinations and attractions</p>
      </div>
      <div className="masonry-grid">
        <MasonryLayout columns={isMd ? 3 : 2} gap={isMd ? 32 : 24}>
          {[...Array(6).keys()].map(
            (key) => <RecommendationTile
              key={`${key}`}
              style={{height: `280px`}}
              img={preview}
              title={"test title"}
              subtitle={"test subtitle"}
              minPrice={400}
            />
          )}
        </MasonryLayout>
      </div>
    </>
  )
}

export default Home;
