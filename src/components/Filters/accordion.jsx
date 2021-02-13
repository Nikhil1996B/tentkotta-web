import React from 'react';
import {
    Button,
    Accordion,
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";

const accordionStyle = (props) => {
    return {
        background: `${props && props.color ? props.color : "#363A43"}`,
        color: `#E6E6E6`
    }
}

const cardBody = (props) => {
    return {
        background: `#131722 0% 0% no-repeat padding-box`,
        borderRadius: `0px 0px 5px 5px`,
        opacity: 1
    }
}

const Items = (props) => {
    return {
        background: `#363A43 0% 0% no-repeat padding-box`,
        borderRadius: `5px`,
        opacity: `1`,
        padding: `${2}% ${4}%`,
        margin: `${2}%`,
        color: '#E6E6E6',
        textAlign: 'center'
    }
}

function AccordionComponent({ items, filterType }) {
    return (
        <>
            <style type="text/css">
                {`
                .btn-link {
                    color:  ${'#E6E6E6'};
                }

                .card-body {
                    background: ${`#131722 0% 0% no-repeat padding-box`};
                    border-radius: 0px 0px 5px 5px;
                    border: 1px solid #363A43;
                }
                .filter-header-wrapper>button {
                    width: ${`100%`};
                    text-align: left;
                    border: 1px solid #363A43;
                }

                .filter-header-wrapper  .btn-link:hover {
                    color: #FC9E74;
                    text-decoration: none;
                }
                .btn-link:hover{
                    color: #FC9E74;
                    text-decoration: none;
                }

                .filter-wrapper .accordion .card:first-of-type{
                    border: none;
                    border-radius: ${`3%`};
                }
              `}
            </style>
            {
                filterType && filterType.map((type, index) => (
                    <Accordion defaultActiveKey={index == 0 ? '0' : "1"} key={index} style={{ marginBottom: '2%' }}>
                        <Card style={{ border: 'none' }}>
                            <Card.Header style={accordionStyle()} className={'filter-header-wrapper'}>
                                <Accordion.Toggle as={Button} style={{ background: '#363A43' }} variant="link" eventKey="0">
                                    {type}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={cardBody()}>
                                    <Container >
                                        <Row sm={4} md={4} >
                                            {items.map((type, index) =>
                                            (
                                                <Col key={index} style={Items()} md={3}>
                                                    {type}
                                                </Col>
                                            ))
                                            }
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ))
            }
        </>
    )
}
export default AccordionComponent;