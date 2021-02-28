import React from 'react'
import { Card,ListGroup,ListGroupItem ,Button} from "react-bootstrap";

import img from "../assets/7.png";


const User = ({user}) => {
    return (
        <Card className='my-4 p-3' style={{objectFit:'contain' ,height:'720px', border:'4px solid darkorchid', borderRadius:'20px',textAlign:'center' }}  >
                <Card.Img  variant="top" src={img} height='270px' />


             <Card.Body>
                        <Card.Title> {`${user.name + ' - "' + user.username}" `} </Card.Title>
                        {/******Adress*******/}
                        <Card.Subtitle className=' mb-2 text-muted'> Adress : </Card.Subtitle>
                        <Card.Text>
                            <div> <strong>Street :</strong>{user.address.street} </div>
                            <div> <strong>City :</strong>{user.address.city} </div>
                            <div> <strong>Zipcode :</strong>{user.address.zipcode} </div>
                        </Card.Text>
                </Card.Body>

                <ListGroup >
                    <ListGroupItem>Company : {user.company.name } </ListGroupItem>
                    <ListGroupItem>E-mail : {user.email}</ListGroupItem>
                    <ListGroupItem>Phone : {user.phone}</ListGroupItem>
                </ListGroup>

                <Card.Body>
                    <Card.Link href={`mailto${user.email}`} >
                        <Button  style={{borderRadius: '20px'}} variant='info'>E-mail contact</Button> </Card.Link>

                    <Card.Link href="#">
                        <Button style={{borderRadius: '20px'}} variant='danger'> Phone</Button> </Card.Link>
            </Card.Body>
     </Card>
    )
}

export default User
