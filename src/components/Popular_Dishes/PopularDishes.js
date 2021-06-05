import React from "react";
import meals from "../../FakeData/PopularDishes.json";
import SinglePopularDish from "../../SinglePopularDish/SinglePopularDish";
const PopularDishes = () => {
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
          {meals.map((meal) => (
            <SinglePopularDish foodItem={meal} key={meal._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
