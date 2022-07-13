import React, {useState} from "react";
import NewCost from "./Components/NewCost/NewCost";
import Costs from "./Components/Costs/Costs";
// import CostsFilter from "./Components/Costs/CostsFilter";

const  INITIALCOST=
[
  {
    id: 'c1',
    date:new Date(2021, 2, 12),
    description:'Холодильник',
    amount:999.99
  },
  {
    id: 'c2',
    date:new Date(2021, 5, 14),
    description:'Тостер',
    amount:91.99
  },
  {
    id: 'c3',
    date:new Date(2021, 11, 24),
    description:'Наушники',
    amount:11.82
 }
];



const App = () => {

  const [costs, setCosts] = useState(INITIALCOST);
  const addCostHandler = (cost)=>{
    setCosts(prevCosts => {
      return[cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/> 
      <Costs costs={costs}/>

    </div>
  )
}

export default App;
