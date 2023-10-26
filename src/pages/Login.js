import {Link} from "react-router-dom";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import styles from "./Login.module.css";
function Login(){
    return (
        <Container>
            <Row xs={12} className="d-flex justify-content-center">
                <Col lg={5} md={6} sm={8} xs={12} className={`${styles[`custom-rounded`]} p-4`}>
                    <h2 className="text-center text-light">Chat-App</h2>
                    <p className="text-center text-light">Login</p>
                    <Form>
                        <Form.Group className="mt-4" controlId="formBasicEmail">
                            <Form.Label className="text-light">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mt-4" controlId="formBasicPassword">
                            <Form.Label className="text-light">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="mt-4" variant="primary" type="submit">
                            Submit
                        </Button>
                        <p className="text-center text-light">You don't have an account <a>Register</a> </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;