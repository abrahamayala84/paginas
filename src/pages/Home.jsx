import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
;


function Home () {
    return(
        <>
         <h1 style={{backgroundColor:'orangered', textAlign:'center',}}>RESTAURANTE DRAGON</h1>
        <nav Container-fluid style={{backgroundColor:'white', color:'gold',display:'flex' }}>
        
        <img style={{width:'150px', height:'100px', display:'flex',}} src="https://i.pinimg.com/originals/e6/6e/3f/e66e3f50e65f0bf789b9ccbef1ce5f1e.jpg" alt="" />
          
          <h2 style={{backgroundColor:'red'}}>COMIDA CANTONEZ</h2>

          <p style={{textAlign:'center' , color:'red'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eaque labore dicta voluptas, dolorem vero ipsum eveniet nulla! Odio suscipit beatae possimus maiores unde id sed? Perferendis eos nesciunt temporibus!</p>
          <ul  style={{display: 'flex', gap: 20, listStyle: 'none', justifyContent: 'end',backgroundColor:'red', fontSize:20, }}>
            <li >
          <Link style={{color:'gold'}} to= '/menu'> menu</Link>
            </li>
            <li>
            <Link style={{color:'gold'}} to="/about">AboutUs</Link>
            </li>
            <li>
            <Link style={{color:'gold'}} to= '/reservaciones'>Reservacion</Link>
            </li>
            </ul>
        </nav>
          <Container fluid style={{ backgroundColor: 'orange', height: '500px'}}>
      <Row>
        <Col><h1>hola desde home</h1>
        <Link to="/about">ir a about</Link><br></br>
        <Link to= '/menu'>ir a menu</Link><br></br>
        <Link to= '/reservaciones'>ir a reservacion</Link><br></br>
        </Col>
      </Row>
    </Container>
<h1>hola desde home</h1>
<Link to="/about">ir a about</Link><br></br>
<Link to= '/menu'>ir a menu</Link>
</>
    )
}

export default Home