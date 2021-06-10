import React from 'react';
import { Col, Row, CardColumns, Card, CardDeck, CardGroup }  from 'react-bootstrap';

const MovieList = ({movieDisplayData}) => {

    

    if(Object.keys(movieDisplayData).length !== 0 ) {

        const lst = movieDisplayData.map((movie) => {

            return(
                <Col className="col-3 col-md-4 col-sm-12">

                <Card border="primary" style={{ width: '16rem', minHeight: '150px', margin: '20px 0'}} key={movie.No}>
                    <Card.Body>
                        <Card.Title>{movie.Title.slice(0, -7)}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Col>Year: {movie.Title.slice(-5, -1)}</Col>
                        <Col>Rating: {movie.Rating}</Col>
                    </Card.Footer>
                </Card>
                </Col>

            );
        })

        return(
            <>
                {lst}
            </>
        )
    }

    else {
        return(
            <Row></Row>
        );
    }

    

}

export default MovieList;