import React from "react";
import {connect} from "react-redux";
import { Button, Card, Container, Badge} from 'react-bootstrap';
const ListData = (props) => {
        const{ responses } = props
            return (
                <React.Fragment>
                    {Object.keys(responses).length > 0 && (
                        <Container>
                            <h1>Respuestas desde Node</h1>
                            {responses.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Card style={{ width: '18rem' }}>
                                            <a
                                                target="_blank"
                                                href={item.status}
                                                rel="noopener noreferrer"
                                                className="card-image-link"
                                            >
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://files.toolboxtve.com/wp-content/uploads/2019/10/25164038/icon-OTT2.png"
                                                        alt=""
                                                    />
                                            </a>
                                            <Card.Body>
                                                <Card.Title>Data enviada: {item.params.data}</Card.Title>
                                                <Card.Text>
                                                    <small>
                                                       Id: {item.id}
                                                    </small><br/>
                                                    <Button variant="info">
                                                        Status: <Badge variant="success">{item.status}</Badge>
                                                        {/*<span className="sr-only">unread messages</span>*/}
                                                    </Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                    </React.Fragment>
                                );
                            })}
                            </Container>
                    )}
                </React.Fragment>
            )
}
const mapStateToProps = ( state) => {
    const { responses } = state
    return {
        responses
    }
}
export default connect( mapStateToProps)(ListData)
