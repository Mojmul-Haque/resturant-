import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Order from "../components/Order/Order";
import Nav from "../sharePage/Nav/Nav";

const Home = () => {
  return (
    <main>
      <Nav />
      <HomeBanner />
      <Order />
    </main>
  );
};

export default Home;
