import React from "react";
import Item from "../item/item.component";

import mockTrucks from "../../assets/mock-data";
import "./items.styles.scss";

const Items = ({ cost, filter, condition, search }) => {
  switch (cost) {
    case 1:
      mockTrucks.sort((x, y) => {
        return y.price - x.price;
      });
      break;
    case 2:
      mockTrucks.sort((x, y) => {
        return x.price - y.price;
      });
      break;
    case 3:
      mockTrucks.sort((x, y) => {
        return y.description.milage - x.description.milage;
      });
      break;
    case 4:
      mockTrucks.sort((x, y) => {
        return x.description.milage - y.description.milage;
      });
      break;
    default:
      break;
  }

  const filteredTrucks = mockTrucks.filter((x) => x.name.includes(filter));

  let usedTrucks;
  if (condition) {
    usedTrucks = mockTrucks.filter((x) => x.description.condition === "used");
    console.log(usedTrucks);
  }

  return (
    <div className="items">
      {filter
        ? filteredTrucks.map(({ id, ...otherMockProps }) => (
            <Item key={id} {...otherMockProps} cost={cost} />
          ))
        : condition
        ? usedTrucks.map(({ id, ...otherMockProps }) => (
            <Item key={id} {...otherMockProps} cost={cost} />
          ))
        : mockTrucks
            .filter((e) => {
              if (search === "") {
                return e;
              } else if (e.name.toLowerCase().includes(search.toLowerCase())) {
                return e;
              }
            })
            .map(({ id, ...otherMockProps }) => (
              <Item key={id} {...otherMockProps} cost={cost} />
            ))}
    </div>
  );
};

export default Items;
