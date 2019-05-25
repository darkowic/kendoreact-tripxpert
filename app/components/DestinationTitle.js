import React, {} from 'react';
import styled from 'styled-components';

import {
  Title,
  Content,
  Subtitle,
  TitleWrapper,
  InfoContainer,
  CalendarContainer,
} from './styles';


export default function DestinationTitle(props) {

  console.log('data', props.data);
  const {
    data,
    ...other
  } = props;

  return (
    <Content className="row" {...other}>
      <InfoContainer className="col-lg-8">
        <TitleWrapper>
          <Title>{data.Title}</Title>
          <Subtitle>{data.ShortDescription.join(' • ')}</Subtitle>
        </TitleWrapper>
        <p>
          Price from ${data.LowestPrice} for {data.Duration}
        </p>
        <p>
          View full price info
        </p>
      </InfoContainer>
      <CalendarContainer className="col-lg-4">

      </CalendarContainer>
    </Content>
  );

}
