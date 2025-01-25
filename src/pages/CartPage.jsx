import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CartItemComp from "../components/wrappers/cartItemComp";
import CartItemHeader from "../components/wrappers/cartItemHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCart } from "../store/actions/cartActions";
import { useAuth } from "../contexts/AuthProvider";
import CartCartSkeleton from "../components/wrappers/cartCartSkeleton";

// Styled Components
const CheckoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
  gap: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const CartSection = styled(Box)(({ theme }) => ({
  maxWidth: "60%",
  marginLeft: "10vh",
  [theme.breakpoints.up("md")]: {
    width: "65%",
  },
}));

const SummarySection = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(3),
  borderTop: "2px solid #ddd",
  [theme.breakpoints.up("md")]: {
    width: "30%",
    borderTop: "none",
    borderLeft: "2px solid #ddd",
  },
}));

const TableWrapper = styled(Box)(({ theme }) => ({
  maxHeight: "70vh",
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#c0c0c0 transparent",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#c0c0c0",
    borderRadius: theme.shape.borderRadius,
  },
  "&:hover::-webkit-scrollbar-thumb": {
    background: "#909090",
  },
}));

const StyledTable = styled("table")({
  width: "100%",
  borderCollapse: "collapse",
});

const WishlistButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  background: "#ddd",
  color: "#000",
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  margin: theme.spacing(1),
  "&:hover": { background: "#ccc" },
}));

const ProceedButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: theme.typography.pxToRem(14),
  padding: theme.spacing(2),
}));

// Dummy Data
const cartItems = [
  { id: 1, name: "Wallet", size: "S", price: 200, quantity: 1 },
  { id: 2, name: "Shoes", size: "M", price: 500, quantity: 2 },
  { id: 3, name: "Jacket", size: "L", price: 1200, quantity: 1 },
  { id: 4, name: "Bag", size: "M", price: 800, quantity: 1 },
  { id: 5, name: "Belt", size: "L", price: 300, quantity: 1 },
  { id: 6, name: "Socks", size: "M", price: 150, quantity: 3 },
  { id: 7, name: "Cap", size: "M", price: 250, quantity: 1 },
];

const CartPage = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const { user } = useAuth();
  const cartData = useSelector((state) => state.cartReducer);
  useEffect(() => {
    if (user?.id) {
      const reqPayload = {
        userId: user?.id,
      };
      disptach(fetchUserCart(reqPayload));
    }
  }, []);

  console.log("cartData", cartData);
  return (
    <CheckoutContainer>
      {user?.id ? (
        <>
          <CartSection>
            <Typography variant="h5">Checkout</Typography>
            <CartItemHeader />

            {/* Scrollable Table */}
            <TableWrapper>
              <StyledTable>
                <tbody>
                  {cartData?.loading ? (
                    <CartCartSkeleton cardNum={5} />
                  ) : (
                    <>
                      {" "}
                      {cartData?.data?.map((item, index) => (
                        <CartItemComp item={item} key={`cart_td_${index}`} />
                      ))}
                    </>
                  )}
                </tbody>
              </StyledTable>
            </TableWrapper>

            <WishlistButton onClick={() => navigate("/wishlist")}>
              <Typography>Add More From Wishlist</Typography>
              <FavoriteIcon fontSize="medium" />
            </WishlistButton>
          </CartSection>

          {/* Summary Section */}
          <SummarySection>
            <Typography variant="subtitle1">Subtotal: ₹3300</Typography>
            <Typography variant="subtitle1">Discount: ₹300</Typography>
            <Typography variant="subtitle1">Delivery Charge: ₹50</Typography>
            <Typography variant="h6" mt={2}>
              Grand Total: ₹3050
            </Typography>
            <ProceedButton variant="contained" color="primary" fullWidth>
              Proceed to Payment
            </ProceedButton>
          </SummarySection>
        </>
      ) : (
        "please login"
      )}
    </CheckoutContainer>
  );
};

export default CartPage;
