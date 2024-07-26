import React from "react";
import { data } from "../restApi.json";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>
              Ipsos surveyed 1,000 consumers in 14 Indian cities. Of those
              surveyed, close to 80% of western-food consuming households said
              they prepare such meals at least once a week. Among them, Italian
              is the most preferred western cuisine prepared at home, followed
              by continental, American, and Mexican.
            </p>
          </div>
          <div className="dishes_container">
            {data[0].dishes.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
