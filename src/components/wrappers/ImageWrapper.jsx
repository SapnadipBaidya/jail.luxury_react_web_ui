import { Card } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteCatagoryIdGlobally, storeCatagoryIdGlobally } from "../../store/actions/itemActions";
const ImageWrapperComp = styled(Card)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "opacity 0.5s ease-in-out, transform 2s ease-in-out",
  opacity: 0,
  transform: "scale(1.3)",
  pointerEvents:"none",
  "&.active": {
    opacity: 1,
    transform: "scale(1)",
    pointerEvents:"all",
  },
});
const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
function ImageWrapper({ product, index, currentIndex, to }) {
  const dispatch = useDispatch();

    const handleClick =(id)=>{
     dispatch(deleteCatagoryIdGlobally())
     dispatch(storeCatagoryIdGlobally(id))
    }
  
  return (
    <ImageWrapperComp
      key={product?.catagory_id}
      variant="body1"
      component={Link}
      to={to}
      className={index === currentIndex ? "active" : ""}
      onClick={(e) => {
        handleClick(product?.catagory_id);
      }}
    >
      <Image
        src={product.catagory_img}
        alt={product.name}
      />
    </ImageWrapperComp>
  );
}

export default ImageWrapper;
