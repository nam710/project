import welcome3 from '../media/welcome3.svg'
import welcome2 from '../media/welcome2.svg'
import {Button,Grid,Card} from  "@mui/material"
import Swal from 'sweetalert2'
import app_config from '../config'
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
const Register =()=>{

 const url=app_config.api_url;

const regform = {
    firstname:'',
    lastname:'',
    dob:'',
    mobile:'',
    email:'',
    password:''
}

const formSubmit = (values) => {
    console.log(values);

    const reqOpt={
        method:'POST',
        body:JSON.stringify(values),
        headers:{'Content-Type':'application/json'}
    }

    fetch(url+'/user/add',reqOpt)
    .then(res=> res.json())
    .then((data)=>{
        console.log(data);
        if(data.message == 'success')
        {
            Swal.fire({
                icon:'success',
                title:'Well Done!',
                text:'You have successfully registered.'
            })
        }
    })
}

    return(
        <div className='container mt-5'>
            <Grid container>
                <Grid item xs={5}>
                
                  <img className='img-fluid' src={welcome3}/>
                   <div>
                       <h2 className="mt-4">Connect with your Friends</h2>
                   </div>
                 
                </Grid>
                <Grid item xs={7}>
                    <Card className='px-2'>
                       <h2 className='mb-3 mx-auto mt-3'>Register Here</h2>
                     
                     <Formik
                     initialValues={regform}
                     onSubmit={formSubmit}>
                         {({
                             values,
                             handleChange,
                             handleSubmit

                         }) => (<form onSubmit={handleSubmit}>
                            <label className='mb-1 ms-2'>Enter Firstname</label>
                            <input className='form-control' id='firstname' type='text' onChange={handleChange} placeholder='First Name'value={values.firstname} ></input>
                            <label className='mb-1 ms-2 mt-1'>Enter Lastname</label>
                            <input className='form-control' id='lastname' type='text' id='lastname' onChange={handleChange} value={values.lastname} placeholder='Sur Name'></input>
                            <label className='mb-1 ms-2 mt-1'>Date of Birth</label>
                            <input className='form-control' onChange={handleChange} id='dob'value={values.dob}  type='date'></input>
                            <label className='mb-1 ms-2 mt-1'>Enter Mobile Number </label>
                            <input className='form-control' type='tel' maxLength='10' onChange={handleChange} id='mobile' value={values.mobile} placeholder='Contact Number'></input>
                            <label className='mb-1 ms-2 mt-1'>Enter Email Id</label>
                            <input className='form-control' type='email' onChange={handleChange} id='email' value={values.email} placeholder='Email'></input>
                            <label className='mb-1 ms-2 mt-1'>Create Password</label>
                            <input className='form-control' type='password' minLength='6' onChange={handleChange}  placeholder='*minimum 6 characters*'></input>
                            <label className='mb-1 ms-2 mt-1'>Confirm Password</label>
                            <input className='form-control mb-3' type='password' minLength='6' id='password' onChange={handleChange} value={values.password} placeholder='*minimum 6 characters*'></input>
                            <Button style={{display:'block'}} className='mb-2 mx-auto' type="submit" variant='contained'>Submit Form</Button>
                            <div className='text-center mb-3'>
                            <Link to='/login'>Already Registered? Sign In Here.</Link>
                            </div>
                        </form>
 
                         )}

                     </Formik>

                       
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default Register;