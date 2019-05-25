import styled from 'styled-components';


export const Content = styled.div`
  padding: 2rem 5rem;
`;

export const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    background: #ea0058;
    position: absolute;
    bottom: -1rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`


`;

export const InfoContainer = styled.div`


`

export const CalendarContainer = styled.div`
  border: 1px red solid;
`

