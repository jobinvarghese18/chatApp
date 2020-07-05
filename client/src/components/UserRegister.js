import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Card,CardContent,Typography,TextField,Button} from '@material-ui/core'
import {useFormik} from 'formik'
import {startRegister} from '../actions/userAction'
import {connect} from 'react-redux'

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
 function UserRegister(props) {
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
          username:"",
          email: "",
          password: ""
        },
        // validationSchema,
        onSubmit(values) {
          const redirect = ()=>{
                  return  props.history.push('/user/login')
                }
                props.dispatch(startRegister(values,redirect))
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
                <TextField id="standard-basic" label="Username" values={values.username} 
                onChange={handleChange} name='username'/>
                <TextField id="standard-basic" label="E-mail" values={values.email} 
                onChange={handleChange} name='email'/>
                <TextField id="standard-basic" label="Password" name='password' 
                onChange={handleChange} values={values.password} />
                <Button type='submit' variant="contained" className='mt-3'style={styleB} color="primary" size ='large'>Sgin Up</Button>
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
      user:state.user
    }
}
export default connect(mapStateToProps)(UserRegister)