import './home.css';
import {Typography,Button} from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {

    return(
        <div className='bg'>
            <div style={{float:'right'}} className='me-5'>
            <Typography gutterBottom variant="h2" align='right'  className='bold'  component="div">
          Manage your 
           <Typography gutterBottom variant="h2" align='right' className='bold ' component="div">
              employees from one
              <Typography gutterBottom variant="h2" align='right' className='bold ' component="div">
                  place.
              </Typography>
          </Typography>
        </Typography>
         <p className='light'>Communicate,operate and train your non-desk
          employees with<br/> our all-in-one employeee app.Easy to use,coustomizable and<br/> affordable like no other.</p>
          <Button sx={{ "&.MuiButtonBase-root:hover": {
                color:'white'}}} variant="contained" component={Link} color="success" to='/register'>Register Now!</Button>
            </div>
           

        </div>
    )
}
export default Home;