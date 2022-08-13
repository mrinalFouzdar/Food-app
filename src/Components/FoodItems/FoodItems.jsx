import React from "react";
import Styled from "./fooditems.module.css";
import img from "../../Image/icon.png";
import { Table, Container, Dropdown, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const FoodItems = () => {
  const [data, setData] = useState([]);
  const { food_data } = useSelector((state) => state.food);
  useEffect(() => {
    setData(food_data);
  }, [food_data]);
  const sort = (e) => {
    if (e.target.name === "Increasing") {
      //  sort in Increasing order by product name
      const sortByIncreasing = [...data];
      sortByIncreasing.sort((a, b) =>
        a.product_name.localeCompare(b.product_name)
      );
      setData(sortByIncreasing);
    } else if (e.target.name === "Decreasing") {
      //  sort in Decreasing order by product name
      const sortByDecreasing = [...data];
      sortByDecreasing.sort((a, b) =>
        b.product_name.localeCompare(a.product_name)
      );
      setData(sortByDecreasing);
    }
  };
  return (
    <Container className={Styled.main_container}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sorting Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={sort} name="Decreasing">
            Decreasing By Product name
          </Dropdown.Item>
          <Dropdown.Item onClick={sort} name="Increasing">
            Increasing By Product name
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Table striped bordered hover variant="dark">
        <thead className="p-4 ">
          <tr className="fs-1 fw-bold">
            <th colSpan={3}>Food List</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.code}>
                <td>
                  <Link to={`/food-item/${item.code}`}>
                    <img src={img} alt="" />
                  </Link>
                </td>
                <td className="text-start fs-5">
                  <Link
                    to={`/food-item/${item.code}`}
                    className={Styled.link_text}
                  >
                    {`${item.product_name} (${item.generic_name})`}
                  </Link>
                </td>
                <td>
                  <Button>ADD FAV List</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FoodItems;
