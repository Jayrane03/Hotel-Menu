import React from 'react'
// import "./style.css"
// import Menu from './menu_api';
const MenuCard = (menuData) => {
  // console.log(menuData)
  const myStyle = { width: "18rem" }
  return (
    <>

      <section className='main card-container'>

        {menuData && menuData.map && menuData.map((curElem) => {
          return (
            <>
   
              <div>

                <div className="card" style={myStyle}>
                  <img src= {curElem.image} className="card-img-top" alt=""> </img>
                  <div className="card-body" key={curElem.id}>
                    <h5 className="card-title">{curElem.name}</h5>
                    <p className="card-text">{curElem.description}</p>
                    <h4 className='card-price'>{curElem.price}</h4>
                    <a href="https://learn-tech-tips.blogspot.com/" className="btn btn-primary">Order now</a>
                  </div>
                </div>
              </div>
                {/* <div className="card" key={curElem.id}>
                  <h5 className="title">{curElem.name}</h5>
                  <p className="text">{curElem.description}</p>

                </div> */}
            </>
          );

        })}
      </section>
    </>
  )
};



export default MenuCard;