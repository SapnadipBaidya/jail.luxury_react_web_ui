import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImageWrapper from "../components/wrappers/ImageWrapper";
import useDebounce from "../utils/customHooks/useDebounce";

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  width: "99vw",
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

const DotsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: "20px",
  gap: "10px",
}));

const Dot = styled("div")(({ theme, active }) => ({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: active
    ? theme.palette.primary.main
    : theme.palette.secondary.main,
  cursor: "pointer",
  transition: "background-color 0.3s ease",
}));

function HeroSection() {
  const category = useSelector((state) => state.categoryReducer);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Debounced auto-slider effect
  const autoSlide = useDebounce(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % category?.data?.length);
  }, 5000);

  // Trigger the autoSlide function continuously
  React.useEffect(() => {
    autoSlide();
  }, [currentIndex, autoSlide]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Root>
      {category?.data?.map((product, index) => (
        <ImageWrapper
          categoryKey={product.catagory_id} // Ensure unique key for each item
          product={product}
          component={Link}
          index={index}
          currentIndex={currentIndex}
          to={"/items"}
        />
      ))}

      {/* Dots Navigation */}
      <DotsWrapper>
        {category?.data?.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsWrapper>
    </Root>
  );
}

export default HeroSection;