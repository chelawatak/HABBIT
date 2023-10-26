import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer, AboutUs, Orders, HomeContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems, getAllOrders } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  // eslint-disable-next-line
  const [{ foodItems, orders }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
    // console.log(foodItems);
  };

  const fetchOrders = async () => {
    await getAllOrders().then((data) => {
      dispatch({
        type: actionType.SET_ORDERS,
        orders: data,
      });
    });
    // console.log(orders);
  };

  useEffect(() => {
    fetchData();
    fetchOrders();
  },// eslint-disable-next-line
  []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
