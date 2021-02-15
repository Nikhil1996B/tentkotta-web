import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import AccordionComponent from './accordion.jsx';
import { Button, Row, Col } from 'react-bootstrap';
import './style.scss';

const List = ({ items }) => {
    if (!items) {
        return null;
    }
    return (
        <>
            {
                items.map((type, index) => (
                    <section className="list-container" key={index}>
                        <div className="list-item">
                            {type}
                        </div>
                    </section>
                ))
            }
        </>
    )
};

export default function Filter() {
    const [category, setCategory] = useState(['Drama', 'Love', 'Romance', 'horror', 'Sci-fi', 'Action', 'Anime']);
    const [filterType, setFilterType] = useState(['Category', 'Cast Crew', 'Language', 'Year']);
    return (
        <>
            <div className="filter-title">
                <h1 style={{ width: '50%' }}>Filter</h1>
            </div>
            <section className={'filter-wrapper'}>
                <AccordionComponent items={category} filterType={filterType} />
            </section>
            {/* <footer className={"bg-light text-center text-lg-start"}>
                <div className={"Container text-left p-3 fixed-bottom"} style={{ backgroundColor: '#363A43', color: '#E6E6E6' }}>
                    <Row class="">
                        <Col>
                            <h4>101</h4>
                            <p>Movies Found</p>
                        </Col>
                        <Col>
                            <Button className={"align-self-end p-2"} variant="light">Apply</Button>
                        </Col>
                    </Row>
                </div>
            </footer> */}
        </>
    )
}