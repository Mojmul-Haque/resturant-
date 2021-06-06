import React from "react";
import FoodMenus from "../components/FoodMenus/FoodMenus";
import Footer from "../components/Footer/Footer";
import FunFactor from "../components/FunFactor/FunFactor";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Order from "../components/Order/Order";
import PopularDishes from "../components/Popular_Dishes/PopularDishes";
import Nav from "../sharePage/Nav/Nav";
const Home = () => {
  return (
    <main>
      <Nav />
      <HomeBanner />
      <Order />
      <PopularDishes />
      <FoodMenus />
      <FunFactor />
      <Footer />
    </main>
  );
};

export default Home;
