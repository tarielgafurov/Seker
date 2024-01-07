import React, { useState } from "react";
import MainImage1 from "../assets/images/MainImage1.png";
import MainImage2 from "../assets/images/MainImage2.png";
import MainImage3 from "../assets/images/MainImage3.png";
import styled from "styled-components";

const MainImageSlider = () => {
  const photos = [MainImage1, MainImage2, MainImage3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const SliderHandler = (images) => {
    setCurrentIndex(images);
  };

  // const autoPlaySlider = () => {
  //     const isLastslide = currentIndex === photos.length - 1
  //     const newIndex = isLastslide ? 0 : currentIndex + 1
  //     setCurrentIndex(newIndex)
  // }

  // useEffect(() => {
  //     setInterval(() => {
  //         autoPlaySlider()
  //     }, 6000)
  // } )

  return (
    <>
      <GlobalContainer>
        <img src={photos[currentIndex]} alt="#" />
      </GlobalContainer>
      <Container>
        {photos.map((slide, slideIndex) => {
          return (
            <ConatinerDots
              onClick={() => SliderHandler(slideIndex)}
              key={slideIndex}
            >
              <SliderDots
                onClick={() => SliderHandler(slideIndex)}
              ></SliderDots>
            </ConatinerDots>
          );
        })}
      </Container>
    </>
  );
};

export default MainImageSlider;

const GlobalContainer = styled.div`
  margin-top: 13px;
`;

const SliderDots = styled.button`
  width: 0.5px;
  height: 13px;
  border: 2px solid #fc3a74;
  border-radius: 50%;
  background: none;
  &:focus {
    background-color: #fc3a74;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  margin: auto;
`;

const ConatinerDots = styled.div`
  display: flex;
  align-items: center;
`;
