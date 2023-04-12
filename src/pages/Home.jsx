import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home () {
    return(
        <>
        <header style={{display: 'flex', justifyContent: 'space-between', backgroundColor:'orangered', color:'gold'}}>
        <img style={{width:'150px', height:'100px'}} src="https://i.pinimg.com/originals/e6/6e/3f/e66e3f50e65f0bf789b9ccbef1ce5f1e.jpg" alt="" />
          <h1 style={{ textAlign:'center',}}>RESTAURANTE DRAGON</h1>
          <img style={{width:'150px', height:'100px'}} src="https://i.pinimg.com/originals/e6/6e/3f/e66e3f50e65f0bf789b9ccbef1ce5f1e.jpg" alt="" />
        </header>

        <nav  style={{backgroundColor:'orange', color:'gold',display:'flex', width:'100%'}}>
                  
        <h2 style={{color:'red'}}>COMIDA CANTONEZ</h2>
          <p style={{textAlign:'center' , color:'red'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eaque labore dicta voluptas, dolorem vero ipsum eveniet nulla! Odio suscipit beatae possimus maiores unde id sed? Perferendis eos nesciunt temporibus!</p>
          <ul  style={{display: 'flex', gap: 20, listStyle: 'none', justifyContent: 'end',backgroundColor:'orange', fontSize:20,alignItems: 'center', height:40}}>
            <li >
          <Link style={{color:'red'}} to= '/menu'> menu</Link>
            </li>
            <li>
            <Link style={{color:'red'}} to="/about">AboutUs</Link>
            </li>
            <li>
            <Link style={{color:'red'}} to= '/reservaciones'>Reservacion</Link>
            </li>
            </ul>
        </nav>
        
       

<div className="container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/porquenosemeocurrioantes.com/wp-content/uploads/2016/10/principal.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.viralistas.com/wp-content/uploads/2017/07/hombre-contaminado-sushi-6.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.viajarsingapur.com/img/gastronomia-singapur.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
    </div>


    
    <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">Scanfco<i>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dicta commodi beatae, iste magni voluptatum harum aut mollitia quas, sapiente voluptate? Optio sed, possimus tempora beatae assumenda deleniti magnam doloribus. </i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aperiam, error numquam placeat iste impedit accusamus nobis corporis molestiae. Dignissimos voluptatibus earum ad impedit eligendi excepturi, obcaecati amet adipisci magnam! </p>
      </div>

      <div className="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul className="footer-links">
          <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
          <li><a href="http://scanfcode.com/category/front-end-development/">UI </a></li>
          <li><a href="http://scanfcode.com/category/back-end-development/">PH</a></li>
          <li><a href="http://scanfcode.com/category/java-programming-language/">Ja</a></li>
          <li><a href="http://scanfcode.com/category/android/">And</a></li>
          <li><a href="http://scanfcode.com/category/templates/">Temps</a></li>
        </ul>
      </div>

      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li><a href="http://scanfcode.com/about/">About Us</a></li>
          <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
          <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
          <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
          <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
        </ul>
      </div>
    </div>
    <hr/>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
          <a href="#">Scanfcode</a>.
        </p>
      </div>

      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</>
    )
  }

export default Home