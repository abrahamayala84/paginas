
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { Link } from 'react-router-dom';


function Reservaciones () {
    return(
        <div className="container" style={{backgroundColor: 'orange', height: '500px', width: '100%'}}>
        <  >
        
        <h1>Reservaciones</h1>
        <form >
            <label>nombre</label><br />
            <input type="text" />
            <br />
            <label>dia</label>
            <Datetime />
            
        </form> 
        <br />
        
        </>
        <Link to='/'>ir a home</Link>
        </div>
    )
}

export default Reservaciones