import React, { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { getAllOrders } from "../utils/firebaseFunctions";
import { actionType } from "../context/reducer";
import "./orders.css";

const Orders = () => {
  const [{ orders, user }, dispatch] = useStateValue();

  useEffect(
    () => {
      fetchOrders();
    }, // eslint-disable-next-line
    []
  );

  const fetchOrders = async () => {
    await getAllOrders().then((data) => {
      dispatch({
        type: actionType.SET_ORDERS,
        orders: data,
      });
    });
  };

  return (
    <div className="orders">
      <p className="ordersTitle">Orders</p>
      {user && user.email === "habbit.lnmiit@gmail.com" && (
        <div className="outerCard">
          {orders &&
            orders.length > 0 &&
            orders.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="itemNum">{orders.length - index}.</div>
                  <div className="orderCard">
                    {item.items?.map((items, index) => {
                      return (
                        <div className="innerCard" key={index}>
                          <img
                            src={items.imageURL}
                            alt={items.title}
                            className="imageCard"
                          />
                          <div className="itemdata">
                            <div className="shopName">
                              ShopName - {items.category}
                            </div>
                            <div className="itemTitle">
                              Food Title - {items.title}
                            </div>
                            <div className="itemQty">
                              Quantity - {items.qty}
                            </div>
                            <div className="itemPrice">
                              Price - {items.price}
                            </div>
                            <div className="personName">
                              Customer - {item.name}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      )}
      
      {user && user.email === "vinayakfoods.lnmiit@gmail.com" && (
        <div className="outerCard">
          {orders &&
            orders.length > 0 &&
            orders.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.items[0].category === "VinayakFoods" && (
                    <>
                      <div className="itemNum">--</div>
                      <div className="orderCard">
                        {item.items?.map((items, index) => {
                          return (
                            <div className="extra" key={index}>
                              {items.category === "VinayakFoods" ? (
                                <div className="innerCard" key={index}>
                                  <img
                                    src={items.imageURL}
                                    alt={items.title}
                                    className="imageCard"
                                  />
                                  <div className="itemdata">
                                    <div className="shopName">
                                      ShopName - {items.category}
                                    </div>
                                    <div className="itemTitle">
                                      Food Title - {items.title}
                                    </div>
                                    <div className="itemQty">
                                      Quantity - {items.qty}
                                    </div>
                                    <div className="itemPrice">
                                      Price - {items.price}
                                    </div>
                                    <div className="personName">
                                      Customer - {item.name}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      )}

      {user && user.email === "babajuice.lnmiit@gmail.com" && (
        <div className="outerCard">
          {orders &&
            orders.length > 0 &&
            orders.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.items[0].category === "BabaJuice" && (
                    <>
                      <div className="itemNum">--</div>
                      <div className="orderCard">
                        {item.items?.map((items, index) => {
                          return (
                            <div className="extra" key={index}>
                              {items.category === "BabaJuice" ? (
                                <div className="innerCard" key={index}>
                                  <img
                                    src={items.imageURL}
                                    alt={items.title}
                                    className="imageCard"
                                  />
                                  <div className="itemdata">
                                    <div className="shopName">
                                      ShopName - {items.category}
                                    </div>
                                    <div className="itemTitle">
                                      Food Title - {items.title}
                                    </div>
                                    <div className="itemQty">
                                      Quantity - {items.qty}
                                    </div>
                                    <div className="itemPrice">
                                      Price - {items.price}
                                    </div>
                                    <div className="personName">
                                      Customer - {item.name}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      )}

      {user && user.email === "amulparlour.lnmiit@gmail.com" && (
        <div className="outerCard">
          {orders &&
            orders.length > 0 &&
            orders.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.items[0].category === "AmulFoodParlor" && (
                    <>
                      <div className="itemNum">--</div>
                      <div className="orderCard">
                        {item.items?.map((items, index) => {
                          return (
                            <div className="extra" key={index}>
                              {items.category === "AmulFoodParlor" ? (
                                <div className="innerCard" key={index}>
                                  <img
                                    src={items.imageURL}
                                    alt={items.title}
                                    className="imageCard"
                                  />
                                  <div className="itemdata">
                                    <div className="shopName">
                                      ShopName - {items.category}
                                    </div>
                                    <div className="itemTitle">
                                      Food Title - {items.title}
                                    </div>
                                    <div className="itemQty">
                                      Quantity - {items.qty}
                                    </div>
                                    <div className="itemPrice">
                                      Price - {items.price}
                                    </div>
                                    <div className="personName">
                                      Customer - {item.name}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Orders;
