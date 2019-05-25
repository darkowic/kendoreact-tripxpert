import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import Logo from '../images/App/tripxpert_logo.svg';
import './Topnav.css';

const LogoContainer = styled.div`
  width: 150px;
  display: flex;

  > svg {
    flex: 1
  }
`;

const MenuWrapper = styled.div`
  margin: -1rem 0;
`;

const TopNav = () => {
  return (
    <div className={'topnav'}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
    </div>
  );
};

export default TopNav;
