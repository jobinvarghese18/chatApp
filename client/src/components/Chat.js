import React, {useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Card,CardContent,Typography,TextField,Button,
Table,TableContainer,TableHead,TableRow,TableCell
,TableBody} from '@material-ui/core'
import {useFormik} from 'formik'
import {connect} from 'react-redux'
import {startLoginUser,startGetAllUsers} from '../actions/userAction'
import {startPostMessage,startGetMessage} from '../actions/chatAction'



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
    height: 700,
    width:800
 }
const styleB = {
    width:150
}
 function Chat(props) {
    const [count, setCount] = React.useState(0);
    useEffect(() => {
       if(Object.keys(props.user).length !==0){
          console.log(props.user[0]._id)
          props.dispatch(startGetMessage(props.user[0]._id))
          props.dispatch(startGetAllUsers())
       }
        
    //   props.dispatch(startGetPgs())
      setCount(100)
    },[]);
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
          userid: "",
          message: ""
        },
        onSubmit(values) {
       
                props.dispatch(startPostMessage(values))
                console.log(values)
        }
      });
  const classes = useStyles();
  
  return (
    <div >
        <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <TableContainer component={Paper} className='mt-4'>
      <Table className={classes.table} size='small' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">Message</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.chat.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell align="right">{row.sendingUser}</TableCell>
              <TableCell align="right">{row.message}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
        <Grid item xs={6}>
        <Typography variant='h6' className='mt-3'>Send Message</Typography>
          <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="userid" values={values.userid} 
                onChange={handleChange} name='userid'/><br/>
                <TextField id="standard-basic" className='mt-3' label="Message" name='message' 
                onChange={handleChange} variant="outlined" values={values.userid} /><br/>
                <Button type='submit' variant="contained" className='mt-4'style={styleB} color="secondary" size ='large'>Send</Button>

       </form>
        </Grid>
        
      </Grid>
       
    </div>
  );
}
const mapStateToProps = (state)=>{
    return{
        user:state.user,
        chat:state.chat
    }
}
export default connect(mapStateToProps) (Chat)