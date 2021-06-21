import { useHistory } from 'react-router-dom';
import { useState  } from 'react';

import './MovieDetails.css';
import baseurl from '../../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Card, Button, Modal, Form, Col }  from 'react-bootstrap';

const MovieDetails = ({currentMovie, reload}) => {

    const history = useHistory();
    const [showForm, setShowForm] = useState(false);
    const [newGenre, setNewGenre] = useState("");

    function handleChangeGenreClick() {
        setShowForm(true);
    }

    function handleModalClose() {
        setShowForm(false)
    }

    async function postData() {

        let url = `${baseurl}/movies/updateGenre/${currentMovie._id}`;

        let data = {
            "Genre" : `${newGenre}`
        }

        try {
            await fetch(url, {
                method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
              })
            setTimeout(() => {
                window.alert("change successful. Redirecting to home");
                reload();
                history.go(-1);
            }, 2000);
            
        }

        catch(error) {
            console.log(error)
            reload();
            history.go(-1);
            window.alert("Problem with updation. Redirecting to home");

        };
    }

    function handleSubmit() {
        setShowForm(false);
        postData();
    }

    if( currentMovie && Object.keys(currentMovie).length !== 0) {

        return(
            <>
                <Modal show={showForm} onHide={handleModalClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Change Genre</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                                    <Row className="align-items-center">
                                        <Col xs="auto" className="my-1">
                                        <Form.Label
                                            className="me-sm-2"
                                            htmlFor="inlineFormCustomSelect"
                                            visuallyHidden
                                        >
                                            Type new genre 
                                        </Form.Label>
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                            <Form.Control size="md" type="text" value={newGenre} onChange={(e)=> setNewGenre(e.target.value)} />
                                        </Col>
                                        <Col xs="auto" className="my-1">
                                        </Col>
                                    </Row>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Cancel
                            </Button>
                            <Button onClick={() => handleSubmit()}>Save Changes</Button>
                            </Modal.Footer>
    
                    </Modal>
    
    
                <Container fluid className="d-flex page-div">
                    <Container className="content-div">
                        <Row className="d-flex justify-content-center">
                            <Card style={{ width: '30rem',  }} bg="secondary">
                                <Card.Header style={{ fontSize: "40px"}}>Movie Details</Card.Header>
                                <Card.Body className="text-left" >
                                    <Card.Title className="card-text">Name: {currentMovie.Title.slice(0, -7)}</Card.Title>
                                    <Card.Title className="card-text">Rating: {currentMovie.Rating}</Card.Title>
                                    <Card.Title className="card-text">Genre: {currentMovie.Genre}</Card.Title>
                                    <Card.Title className="card-text">Year: {currentMovie.Title.slice(-5, -1)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="d-flex justify-content-center mt-2">
                            <Button style={{margin: "1rem 2rem"}} variant="primary" size="lg" active onClick={() => history.push('/home')}>Back To Home</Button>
                            <Button style={{margin: "1rem 2rem"}} variant="primary" size="lg" active onClick={() => handleChangeGenreClick()}>Change Genre</Button>
                        </Row>
                    </Container>
                </Container>
            </>
        );
    }

    else {
        console.log("what")
        history.push('/home');

        return(<div></div>)
    }

}

export default MovieDetails;