import { useHistory } from 'react-router-dom';


import './MovieDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Card, Button }  from 'react-bootstrap';

const MovieDetails = ({currentMovie}) => {

    const history = useHistory();

    return(
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
                    <Button variant="primary" size="lg" active onClick={() => history.push('/home')}>Back to Home</Button>
                </Row>
            </Container>
      </Container>
    );
}

export default MovieDetails;