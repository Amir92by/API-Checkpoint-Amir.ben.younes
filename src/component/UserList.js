import React,{useState,useEffect} from 'react'
import { Row,Col } from "react-bootstrap";
import axios from  'axios'
import User from './User';


const UserList = () => {
    useEffect(() => {
        getUsers();
     }, [])


    const [usersData, setUSersData] = useState([]);
    const [loading, setLoading] = useState(false)

    

    const getUsers = async ()=>{
        try {
         const res = await axios.get('https://jsonplaceholder.typicode.com/users')
         setUSersData(res.data)
         setLoading(true)

        } catch (err) {
            alert(err.message)
        }
    }
    return (
        <>
            <Row>
                {loading && 
                 usersData.map(user =>(
                   
                    <Col sm={12} md={6} lg={4} key={user.id}>
                         <User user={user}/>
                      </Col>
                    
                ))}

            </Row>
        </>
    )
}

export default UserList
