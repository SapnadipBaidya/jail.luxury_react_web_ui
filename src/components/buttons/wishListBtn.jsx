import React, { useState } from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GenericBtns from "./GenericBtns";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { useDispatch } from "react-redux";
import { addEditUserWishlist } from "../../store/actions/wishlistActions";

// ✅ Styled Animated Icon Wrapper
const AnimatedIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  transition: "opacity 0.3s ease-in-out",
  width: "100%",

  "& .active": {
    display: "none",
    color: "#f52121",
  },

  "& .inactive": {
    color: "#f52121",
  },

  "&.checked .active": {
    display: "inline-block",
    animation: "wiggle 0.5s ease-in-out",
  },

  "&.checked .inactive": {
    display: "none",
  },

  "@keyframes wiggle": {
    "0%, 100%": { transform: "rotate(0deg)" },
    "25%": { transform: "rotate(-10deg)" },
    "50%": { transform: "rotate(10deg)" },
    "75%": { transform: "rotate(-10deg)" },
  },
}));

// ✅ WishList Button Component
function WishListButton({item}) {
  const [isChecked, setIsChecked] = useState(item.product_details.is_wishlisted);
  const [openDialog, setOpenDialog] = useState(false); // Control login dialog
  const { user } = useAuth(); // Using Auth Context
  const navigate = useNavigate(); // For redirection
  const dispatch = useDispatch();
console.log("item",item)
  // ✅ Wishlist Toggle with Authentication Check
  const handleWishlistToggle = (e) => {
    e.preventDefault();

    if (user) {
      setIsChecked((prev) => !prev);
      dispatch(addEditUserWishlist({"userId":user?.id,"productsDetailsId": item?.product_details?.products_details_id,"product_id":item?.product_details?.product_id}))
    } else {
      // Open login confirmation dialog
      setOpenDialog(true);
    }
  };

  // ✅ Handle Dialog Actions
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAgreeToLogin = () => {
    setOpenDialog(false);
    navigate("/login-signup"); // Redirect user to login
  };

  return (
    <>
      <GenericBtns
        type="secondary"
        btnText={
          <AnimatedIcon className={isChecked ? "checked" : ""}>
            <FavoriteBorderIcon className="inactive" fontSize="medium" />
            <FavoriteIcon className="active" fontSize="medium" />
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" ,color:"black"}}>WISHLIST</Typography>
          </AnimatedIcon>
        }
        executableFunction={handleWishlistToggle}
      />

      {/* ✅ Login Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Login Required</DialogTitle>
        <DialogContent>
          <Typography>You need to be logged in to add items to your wishlist.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">Cancel</Button>
          <Button onClick={handleAgreeToLogin} color="primary" variant="contained">Login</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default WishListButton;