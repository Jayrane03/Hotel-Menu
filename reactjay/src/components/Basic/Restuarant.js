import React ,{useState} from 'react';
import "./style.css"
import Menu from "./menu_api"
// import MenuCard  from './MenuCard'
const Resturant = () => {
  const [menuData,setMenuData] = useState(Menu);
  const myStyle = { width: "18rem" }
const filterItem = (category) =>{
  const updateList = Menu.filter((curElem) =>{
    return curElem.category === category;
  });
  setMenuData(updateList);
}
  return (
   <>  
   <nav className="navbar2" id='navbarr'>
    <div className="btn-group">
      <button className="btn-group-item" onClick={() => filterItem("Breakfast")}>Breakfast</button>
      <button className="btn-group-item" onClick={() => filterItem("Lunch")}>Lunch</button>
      <button className="btn-group-item" onClick={() => filterItem("Evening")}>Evening</button>
      <button className="btn-group-item" onClick={() => filterItem("Dinner")}>Dinner</button>
      <button className="btn-group-item" onClick={() => setMenuData(Menu)}>All</button>
    </div>
   </nav>
   
    {/* <MenuCard menuData={menuData}/> */}
    <section className="card-container bg-white">
     {menuData.map((curElem)=>{
      return(
 <>
    <div className="card card-one bg-dark text-white" style={myStyle}>
  <img src={curElem.image}className="card-img-top" alt="Images"></img>
  <div className="card-body" key={curElem.id}>
    <h5 className="card-title">{curElem.name}</h5>
    <h2>{curElem.category}</h2>
    <h3>{curElem.price} Rs</h3>
    <p className="card-text">{curElem.description}</p>
    <button className="btn btn-success">Order</button>
  </div>
</div>
 </>

      );
     })}
    </section>

    
   
    </>
  );
};
export default Resturant;
// export default style;