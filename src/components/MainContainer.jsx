import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import { foodItemsList } from "../utils/data";

const MainContainer = () => {
  const [{ foodItems, cartShow, orders, user }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  const [recOrders, setRecOrders] = useState([]);

  useEffect(() => {
    handleRec();
  },[orders]);

  // const getRec = async (e) => {
  //   console.log(prevOrders);
  //   const response = await fetch("https://food-reco.onrender.com/recommend",{
  //     method: "POST",
  //     headers: {
  //       "accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       "orderlist": prevOrders,
  //     }),
  //   }
  //   );
  //   const json = await response.json();
  //   if (response.ok) {
  //     console.log(json);
  //   }
  // };

  const handleRec = async () => {
    let temp = orders?.filter((n) => n.name === user?.displayName);
    let temp2 = [];
    // console.log(temp);
    temp?.map((t) => {
      t.items?.map((tt) => {
        temp2.push(tt.id);
      })
    })

    const response = await fetch("https://food-reco.onrender.com/recommend",{
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "orderlist": temp2,
      }),
    }
    );
    const json = await response.json();
    // if (response.ok) {
    //   console.log(json);
    // }
    let tempFood = [];
    // console.log(foodItems);
    foodItems?.map((food) => {
      json.recommendation?.map((compa) => {
        if (food.id === compa) {
          tempFood.push(food);
        }
      })
    });
    setRecOrders(tempFood);
  }



  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our Personalized Recommendations
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-1850)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(1850)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={recOrders}
        />
      </section>
      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
