import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


const Img = styled.img`
  height: 60%;
  width: 100%;
  background-size: cover;
`;

const Body = styled.div`
  padding: 0.75rem 1.25rem;
`;

const Title = styled.span`

  
`;

const BottomRow = styled.h5`
  display: flex;
  justify-content: space-between;  
  padding: 0.75rem 1.25rem;

`;

const Subtitle = styled.h6`
 


`;

const MinPrice = styled.span`
  color: #ea0058;
`;

const ViewDetails = styled(Link)`
  color: #0072ef;
`;


function RecommendationTile({ img, title, subtitle, minPrice, ...props }) {
  return (
    <div {...props}>
      <Img style={{
        backgroundImage: `url(${img})`
      }} />
      <Body>
        <Title>
          {title}
        </Title>
        <Subtitle>
          {subtitle}
        </Subtitle>
      </Body>
      <BottomRow>
        <MinPrice>From ${minPrice}</MinPrice>
        <ViewDetails
          to={'/'}
        >
          View Details
        </ViewDetails>
      </BottomRow>
    </div>
  );
}


RecommendationTile.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  minPrice: PropTypes.number.isRequired,
};


export default RecommendationTile;
