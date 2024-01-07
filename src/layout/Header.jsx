import React from "react";
import BurgerMenuImg from "../assets/images/HeaderBurgerMenu.svg";
import SingInImg from "../assets/icons/SingInIcon.svg";
import LikeImg from "../assets/icons/Like.svg";
import BasketImg from "../assets/icons/Basket.svg";

import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <BurgerMenuStyled src={BurgerMenuImg} alt="BurgerMenuImg" />
      <ContainerTitle>
        <h3>Seker</h3>
        <span>твой лучший гаджет</span>
      </ContainerTitle>
      <ContainerSearch>
        <SearchInput type="text" placeholder="Что вы ищете?" />
        <ContainerSearchIcon>
          <IoSearch color="white" />
        </ContainerSearchIcon>
      </ContainerSearch>
      <Navigation>
        <ContainerSingIn onClick={() => {}} >
          <img src={SingInImg} alt="SingInImg" />
          <span>Войти</span>
        </ContainerSingIn>
        <ContainerАavorites onClick={() => {}}>
          <img src={LikeImg} alt="LikeImg" />
          <span>Закладки</span>
        </ContainerАavorites>
        <ContainerBasket  onClick={() => {}}>
          <img src={BasketImg} alt="BasketImg" />
          <span>Корзина</span>
        </ContainerBasket>
      </Navigation>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  width: 1170px;
  height: 56px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BurgerMenuStyled = styled.img`
  width: 43.105px;
  height: 42px;
`;

const ContainerTitle = styled.div`
  width: 161.132px;
  height: 55px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: #000;
    font-family: Montserrat;
    font-size: 33px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
  span {
    color: #000;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ContainerSearch = styled.div`
  width: 520px;
  height: 40px;
  display: flex;
`;

const SearchInput = styled.input`
  border-radius: 10px 0px 0px 10px;
  background: #f4f4f4;
  border: none;
  outline: none;
  padding: 11px 279px 12px 27.71px;

  ::placeholder {
    color: #000;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ContainerSearchIcon = styled.div`
  width: 52.342px;
  height: 40px;
  border-radius: 0px 10px 10px 0px;
  background: #9292ef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navigation = styled.nav`
  width: 378px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerSingIn = styled.div`
  width: 91.342px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  span {
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const ContainerАavorites = styled.div`
  width: 120.079px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  span {
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const ContainerBasket = styled.div`
  width: 111.868px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  span {
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
