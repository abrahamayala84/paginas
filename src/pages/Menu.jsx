import { Link } from "react-router-dom"

import Button from 'react-bootstrap/Button';


function Menu (){
    return( 
      
      <div  style={{backgroundColor:'yellow',height:'500px'}} >
      <h1> Menu</h1>
      <img  src="https://tse2.mm.bing.net/th?id=OIP.S5HcS4YLxO9UbWP9lhIMUgHaFP&pid=Api&P=0" alt="" /><br />
      <Link to="/"><button variant="outline-primary">home</button></Link>
      <button variant="outline-secondary">hola</button>
      <Button variant="primary" >Primary</Button>
      </div>
        

    )
}
export default Menu