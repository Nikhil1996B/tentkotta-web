import React from 'react';
import {
    Button,
    Accordion,
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import { accordionStyle, cardBody, Items, FilterAccordionGlobalStyle } from './accrodionstyle'


function AccordionComponent({ items, filterType }) {
    return (
        <>
            <FilterAccordionGlobalStyle />
            {
                filterType && filterType.map((type, index) => (
                    <Accordion defaultActiveKey={index == 0 ? '0' : "1"} key={index} style={{ marginBottom: '2%' }} className={'filterclass'}>
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