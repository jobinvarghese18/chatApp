import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Card,CardContent,Typography,TextField,Button} from '@material-ui/core'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {connect} from 'react-redux'
import {startLoginUser} from '../actions/userAction'

const validationSchema = Yup.object().shape({
    email:Yup.string().required().email('invalid email'),
    password:Yup.string().required().min(5, 'length must be grater than 4')
    .max(10, 'length must be less than 10')

})
const useStyles = makeStyles((theme) => ({
  root: {
      '& > *': {
        margin: theme.spacing(1),
        height:'4ch'
      },
    flexGrow: 1,
    root: {
        minWidth: 500
       }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const style = {
    height: 400
 }
const styleB = {
    width:120
}
 function UserLogin(props) {
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
          email: "",
          password: ""
        },
        validationSchema,
        onSubmit(values) {
          const redirect = ()=>{
                  return  props.history.push('/user/chat')
                }
                props.dispatch(startLoginUser(values,redirect))
                console.log(values)
        }
      });
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Card className={classes.root} className='mt-3' style={style}variant="outlined">
      <CardContent>

      <Grid container spacing={3}>
        
        <Grid item xs={3}>
         
        </Grid>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography variant='h6'>Login here</Typography>
          <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="E-mail" values={values.email} 
                onChange={handleChange} name='email'/>
                {errors.email ? errors.email : null}
                <TextField id="standard-basic" label="Password" name='password' 
                onChange={handleChange} values={values.password} />
                {errors.password ? errors.password : null}
                <Button type='submit' variant="contained" className='mt-3'style={styleB} color="primary" size ='large'>Login</Button>
    </form>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          
        </Grid>
      </Grid>
    
      </CardContent>
      </Card>
    </div>
  );
}
const mapStateToProps = (state)=>{
    return{
        
    }
}
export default connect(mapStateToProps) (UserLogin)