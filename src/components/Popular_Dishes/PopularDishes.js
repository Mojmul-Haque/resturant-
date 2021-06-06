import React, { useState } from "react";
import meals from "../../FakeData/PopularDishes.json";
import SinglePopularDish from "../../SinglePopularDish/SinglePopularDish";
const PopularDishes = () => {
  const [searchFood, setSearchFood] = useState("");
  console.log(searchFood);

  // search food by name
  let foodItems = [...meals];
  // console.log(foodItems);
  if (searchFood.length) {
    foodItems = meals.filter((food) => {
      return (
        food.name.match(searchFood) ||
        food.name.toLowerCase().match(searchFood) ||
        String(food.price).match(searchFood)
      );
    });
  }

  return (
    <section id="popular-dishes">
      <div className="container">
        <div className="row">
          <div className="dishes-head section-head text-center">
            <h3>Our Popular Dishes</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur placerat nulla, in suscipit erat sodales id. Nullam
              ultricies eu turpis at accumsan. Mauris a sodales mi, eget
              lobortis nulla.
            </p>
          </div>
          <div className="text-center">
            <input
              onChange={(e) => setSearchFood(e.target.value)}
              type="search"
              className="search-food form-control"
              placeholder="search food name or price"
              value={searchFood}
            />
          </div>
          {foodItems.map((item) => (
            <SinglePopularDish foodItem={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
