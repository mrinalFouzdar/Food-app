import React from "react";
import Styled from "./foodDetails.module.css"
import {  Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const FoodDetails = () => {
  const { foodId } = useParams();
  let navigate = useNavigate()
  const { food_data } = useSelector((state) => state.food);
  let data = food_data.find((item) => +item.code === +foodId);

  const handleNavigate=()=>{
    navigate("/")
  }
  //If data is undefined then redirect to home page
 if(!data){
  handleNavigate()
 }

  // console.log(foodId);
  return (
    <Container  className={Styled.foodContainer}>
      <div>
      <button className={Styled.btn} onClick={handleNavigate}>❌</button>
      </div>
      <Table striped bordered hover variant="dark">
        <thead className="p-4">
          <tr className="fs-1 fw-bold">
            <th colSpan={3}>Food Details</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(data).map(([key,value])=> <tr key={Date.now()+Math.random()}>
              <td>{key.toUpperCase()}</td>
              <td className='text-start fs-5' >{value===null? "Null" : key ==="url" ? <a href={value} target="_blank"  rel="noreferrer"> Link</a>: value}</td>
            </tr>)
          }
        </tbody>
      </Table>
    </Container>
  );
};

export default FoodDetails;
