import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Card, }  from 'react-bootstrap';

const MovieDetails = ({currentMovie}) => {

    console.log(currentMovie)

    return(
        <Container fluid className="d-flex page-div">
        <Container className="content-div">
            <Row className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }} bg="secondary">
                    <Card.Header>Movie Details</Card.Header>
                    <Card.Body className="text-left">
                        <Card.Title>Name: {currentMovie.Title.slice(0, -7)}</Card.Title>
                        <Card.Title>Rating: {currentMovie.Rating}</Card.Title>
                        <Card.Title>Genre: {currentMovie.Genre}</Card.Title>
                    </Card.Body>
                    <Card.Footer >Year: {currentMovie.Title.slice(-5, -1)}</Card.Footer>
                </Card>
            </Row>
        </Container>
      </Container>
    );
}

export default MovieDetails;