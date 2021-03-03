import React, { useState } from "react";
import { Card, Container} from "react-bootstrap";
import ExStockAvaibilty from "./ExStockAvaibilty";
import ProductApplication from "./ProductApplication";
import ProductRelatedVideo from "./ProductRelatedVideo";

const NavbarProductsDetail = () => {
  const [screenType, setScreenType] = useState(1)

  const [navArray, setNavArray]= useState([
    {
      id:1,
      name: 'Product Application',
      active: true
    },
    {
      id:2,
      name: 'Product Related Video',
      active: false
    },
    {
      id:3,
      name: 'Ex Stock Avaibilty',
      active: false
    }
  ])
  const onNavClick=(id)=>{
    let tempArr= [...navArray]
    for(let i=0; i<tempArr.length;i++){
      if(tempArr[i].id=== id){
        tempArr[i]= {...tempArr[i], active: true}
      }else{
        tempArr[i]= {...tempArr[i], active: false}
      }
    }
    // console.log(tempArr)
    setNavArray(tempArr)
    setScreenType(id)
  }
  const renderScreen=(ser)=>{
    switch (ser) {
      case 1:
        return <ProductApplication />
      case 2:
        return <ProductRelatedVideo />
      case 3:
        return <ExStockAvaibilty />
      default: 
      return <ProductApplication />
    }
  }

  return (
    <>
      <Card className="mt-3">
        <Container className="mt-3">
          <div style={{display:"flex", justifyContent:"space-around"}}>
            {navArray.map((item)=>(
              <div key={item.id} onClick={()=>onNavClick(item.id)} style={ item.active ? {borderBottom:" 1px solid black", fontWeight: 'bold'} : {color:"silver"}}>{item.name}</div>
            ))}
             </div>
          { renderScreen(screenType)}
        </Container>
      </Card>
    </>
  );
};

export default NavbarProductsDetail;
