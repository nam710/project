import {Button,Card} from  "@mui/material"
import Swal from 'sweetalert2'
import app_config from '../config'
import { Formik } from 'formik';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Login = () => {

  const url= app_config.api_url;
  
const loginForm={
  email:'',
  password:''
}
const loginSubmit = (values) => {
  console.log(values);
  fetch(url+'/user/getbyemail/'+values.email)
  .then(res => res.json())
  .then((userdata)=>{
    console.log(userdata);
    if(userdata){
      if(userdata.password==values.password){
        Swal.fire({
          icon:'success',
          title:'SignIn successful',
          text:'Logged in successfully'
        })
        .then(()=>{
          window.location.replace('/chat')
        })
        return;
      }
    }
    Swal.fire({
      icon:'error',
      title:'Oops!',
      text:'Incorrect email or password!'
    })
  })
}

    return(
      <div style={{ width:'100vw',height:'100vh',backgroundImage:'url(https://www.wraltechwire.com/wp-content/uploads/2017/11/NewsletterSignup-Background.jpg)'}}>
        <div className='container pt-5'>
          <Card className='mx-auto px-4' style={{}} sx={{maxWidth: 600}} variant="outlined"> 
          <Stack direction="row" spacing={2} className="mt-3 mb-2">
          <Avatar
          alt="default pfp"
          src="" className="mx-auto"
          sx={{ width: 56, height: 56 }}
          />
           </Stack>

            <Formik
            initialValues={loginForm}
            onSubmit={loginSubmit}
            >
           {({
             values,
             handleChange,
             handleSubmit
           })=>(
            <form onSubmit={handleSubmit}>
            <label className="mt-4">Enter your Email</label>
          <input type="text" id='email' className='form-control mt-1 mb-2' onChange={handleChange} value={values.email} placeholder="Email" ></input>
          <label className="mt-1">Enter your Password</label>
          <input type="password" id='password' className='form-control mt-1 mb-4' onChange={handleChange} value={values.password} placeholder="Password" ></input>
          <Button type="submit" color="success" style={{display:'block'}} variant='contained' className="mx-auto mb-3">Sign In</Button>
          </form>

           )}
            </Formik>
                           
          </Card>
        </div>
        </div>
    )
}
export default Login;