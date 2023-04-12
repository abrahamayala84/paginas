import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Button from 'react-bootstrap/Button';


function Menu (){
    return( 
      <body>
      <div  style={{height:'500px'}} >
      <h1> Menu</h1>
      <img  src="https://tse2.mm.bing.net/th?id=OIP.S5HcS4YLxO9UbWP9lhIMUgHaFP&pid=Api&P=0" alt="" /><br />
      <br />
      
      
      


<div className="container">
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.ecestaticos.com/imagestatic/clipping/8f8/1d9/8f81d93d33b863ca20c969ac38ab7eba/dim-sum-la-forma-mas-facil-de-preparar-esta-comida-asiatica.jpg?mtime=1579565836" />
        <Card.Body>
          <Card.Title>ROLLOS</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga quos ipsa, explicabo molestias id commodi cum omnis voluptate quae eos veniam eaque eveniet in voluptatibus ducimus blanditiis sed labore.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit possimus ratione totam explicabo incidunt natus beatae voluptatem vel, pariatur officia corporis corrupti dolores delectus quo provident in quasi culpa labore.</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://2.bp.blogspot.com/-wCqnRBPb9Xk/Xcaqyxpqh4I/AAAAAAAAACc/zS9tufZhanIhZigOzCLmnUFl9hmpVnzMgCLcBGAsYHQ/s1600/ge-discovery-comida-oriental-datos-sobre-su-cocina.jpg" />
        <Card.Body>
          <Card.Title>ROLLOS</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus aspernatur deleniti atque repudiandae eaque cupiditate exercitationem voluptates maxime reprehenderit, mollitia magni temporibus impedit eveniet blanditiis voluptate culpa explicabo aut.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate necessitatibus iste tempora. Necessitatibus voluptatem consectetur voluptates, ex odit nesciunt perspiciatis excepturi expedita nam, similique possimus tempore ad illum perferendis officiis?</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/736x/6d/08/97/6d08974cc98a4fdfa9802b33eb5c23fe.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            lorem ipsum dolor sit amet, consectetur adip
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora mollitia, veniam debitis accusantium dignissimos rem earum architecto expedita, praesentium dicta dolore odio veritatis pariatur dolor natus. Alias, repudiandae ratione?</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <Link to="/"><Button variant="outline-warning">home</Button></Link>
    </div>
      </div>
      
      </body>

    )
}
export default Menu