import './App.css';
import {useDispatch,useSelector} from "react-redux"
import NavbarComponent from './Components/Navbar/Nav';
import { useEffect } from 'react';
import { fetchFoodsApi } from './Redux/Actions/Food-fetch-action/food-action';
import {Spinner,Container} from "react-bootstrap"
import FoodItems from './Components/FoodItems/FoodItems';
import { Route, Routes } from 'react-router-dom';
import FoodDetails from './Components/FoodDetails/FoodDetails';

function App() {
  const dispatch = useDispatch()
  const {loading}= useSelector(state=>state.food)
  console.log(loading);
  useEffect(()=>{
    dispatch(fetchFoodsApi())
  },[])

  // showing spinner 
  if(loading){
      return (
        <Container className="d-flex align-items-center justify-content-center text-center min-vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </Container>
      );
  }
  return (
    <div className="App">
      {/* Joy Maa tara */}
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<FoodItems/>}/>
        <Route path='/food-item/:foodId'element={<FoodDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
