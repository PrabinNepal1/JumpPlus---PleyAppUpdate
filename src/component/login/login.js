import React from "react";
import {Link} from 'react-router-dom';
import {Card, Form, Button, Container} from "react-bootstrap";
import {FloatingLabel} from 'react-bootstrap/FloatingLabel';

function Login(){
    return(
        <Container className="d -flex align-items-center justify-our-content mt-5 mb-5">
        
        <Card border="dark" className="mb-2">
            <Card.Header>  <Card.Title className="text-center">USER LOGIN</Card.Title> </Card.Header>
            <Card.Body>
                <Form>
                
                <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name=""
                                value=""
                                onChange = {e => e.currentTarget.value}
                                >
                             </Form.Control>
                    </FloatingLabel>
                             <Form.Text className="text-danger" muted></Form.Text>
                    </Form.Group>

                    <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name=""
                                value=""
                                onChange = {e => e.currentTarget.value}
                                >
                             </Form.Control>
                        </FloatingLabel>
                             <Form.Text className="text-danger" muted></Form.Text>
                    </Form.Group>
                    
                    <Button disabled={true} className="w-100 mt-2" type="submit ">Sign-Up</Button>

                </Form>
             </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
                Don't have an account yet? <Link to='/login'> Resgister Now</Link>
        </div>
    </Container>
    )
}

export default Login;