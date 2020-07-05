import React from 'react';
import {Container} from '@material-ui/core'
import {Route,BrowserRouter,Link} from 'react-router-dom'
import {Nav,Navbar} from 'react-bootstrap'
import UserLogin from './components/UserLogin'
import UserRegister from './components/UserRegister'
import Chat from './components/Chat'
import {connect} from 'react-redux'
import {startLogout} from './actions/userAction'



function App(props) {
  function handleLogout(){
    props.dispatch(startLogout())
   
  }
  return (
     <BrowserRouter>
    <div>
    {
      Object.keys(props.user).length ==0?
      <div className='App'>
         
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         {/* <Navbar.Brand /></Navbar.Brand> */}
         <Navbar.Brand href="/">Home</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Nav>
         <Link className='nav-link mr-4' to='/user/login'>Login</Link>
         <Link className='nav-link mr-4' to='/user/register'>Register</Link>
        
         </Nav>
       </Navbar>
       </div>
       :
       <div className='App'>
         
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       {/* <Navbar.Brand /></Navbar.Brand> */}
       <Navbar.Brand href="/">Home</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Nav>
       <Link className='nav-link mr-4' to='/user/chat'>Chat</Link>
       <Link className='nav-link mr-4' onClick={handleLogout} >Logout</Link>
      
       </Nav>
     </Navbar>
     </div>
    }
    
      <Container maxWidth="sm">
      <Route path='/user/login' component={UserLogin}/>
      <Route path='/user/register' component={UserRegister}/>
      
      </Container>
      <Container maxWidth="xl">
      <Route path='/user/chat' component={Chat}/>
         </Container>
    </div>
    </BrowserRouter>
  );
}
const mapStateToProps =(state)=> {
  return{
    user:state.user
  }
}
export default connect(mapStateToProps) (App);
