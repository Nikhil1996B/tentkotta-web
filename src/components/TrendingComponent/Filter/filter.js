import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { filterTypeTxtStyle, CardBodyStyle } from './filter-style';
export default function Filter({ types = [], active, filtertype }) {
    return (
        <Card className="mx-auto border-0">
            <Card.Body style={CardBodyStyle()}>
                <Row className="mx-auto mt-3 float-right">
                    {
                        filtertype && filtertype.map((filterby, key) => (
                            <Col style={filterTypeTxtStyle.text()} key={key} className={`${filterby} ${key}`}>
                                {filterby}
                            </Col>
                        ))
                    }
                </Row>
            </Card.Body>
        </Card>
    )
}
