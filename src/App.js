import "./App.css";
import { Container } from "react-bootstrap";


import NavBarCom from "./NavBarCom";
import UserList from "./component/UserList";




const App = () => {

 return (
    <>
         <NavBarCom/>
         <Container>
             <UserList/>
         </Container>
    </>
 );
};
export default App;

