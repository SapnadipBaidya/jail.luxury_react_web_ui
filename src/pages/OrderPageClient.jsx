import React from "react";
import OrderCardWrapper from "../components/OrderCardWrapper";

const orders = [
  {
    status: "IN TRANSIT",
    deliveryDate: "Sat, 25 Jan",
    product: {
      name: "Jacket",
      size: "S",
      quantity: 1,
      image: "/images/jacket1.jpg",
    },
    paymentMethod: "Prepaid/EMI/COD",
    exchangeWindow: "7 days from delivery",
    actions: ["CANCEL"],
  },
  {
    status: "DELIVERED",
    deliveryDate: "Mon, 20 Jan",
    product: {
      name: "Jacket",
      size: "S",
      quantity: 1,
      image: "/images/jacket2.jpg",
    },
    exchangeWindow: "Mon, 27 Jan",
    warranty: "20 Jan, 2026",
    actions: ["RATE AND REVIEW", "EXCHANGE / RETURN"],
  },
  {
    status: "DELIVERED",
    deliveryDate: "Wed, 15 Jan",
    product: {
      name: "Jacket",
      size: "S",
      quantity: 1,
      image: "/images/jacket3.jpg",
    },
    exchangeWindow: "Closed on Wed, 22 Jan",
    warranty: "15 Jan, 2026",
    actions: ["RATE AND REVIEW"],
  },
];

const OrderPageClient = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {orders.map((order, index) => (
          <OrderCardWrapper key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderPageClient;