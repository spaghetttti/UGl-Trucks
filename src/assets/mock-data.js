import Truck1 from './Truck1.png';
import Truck2 from './Truck2.png';
import Truck3 from './Truck3.png';

const mockTrucks = [ 
 
    {id:1, 
      imgId : 1,
   
      name: "Volvo Truck", 
   
      img: Truck1, 
   
      description :  { 
   
        engine: "DD 15 - 14.8L", 
   
        color: "white", 
   
        power: "455 HP", 
   
        condition: "used", 
   
        milage: 470000 
   
      }, 
   
      price: 140000, 
   
      contactNumber: "999-888-777" 
   
      }, 
   
      {id:2, 
        imgId : 2,
   
      name: "Cascadia Truck", 
   
      img: Truck2, 
   
      description :  { 
   
        engine: "DD 12 - 17.8L", 
   
        color: "black", 
   
        power: "480 HP", 
   
        condition: "new", 
   
        milage: 0 
   
      }, 
   
      price: 185000, 
   
      contactNumber:" 999-888-777" 
   
      }, 
   
      {id:3, 
        imgId : 3,
      name: "Freightliner Truck", 
   
      img: Truck3, 
   
      description : { 
   
        engine: "TT 16 - 15.8L", 
   
        color: "red", 
   
        power: "355 HP", 
   
        condition: "used", 
   
        milage: 120000 
   
      }, 
   
      price: 155000, 
   
      contactNumber: "999-888-777" 
   
      },]

export default mockTrucks;