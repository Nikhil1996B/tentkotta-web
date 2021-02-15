import React from 'react';
import { pathOr } from 'ramda';
import Title from './Title/title';
import SliderSection from './SliderSection/slider-section';
import { Container, Row, Col } from 'react-bootstrap';
import { TrayComponentGlobalStyle } from './traycomponentstyle';

export default function TrayWithTitle({
    breakpoint,
    dispatch,
    history,
    themes,
    icons,
    primBtCol,
    pFontClr,
    title = "",
    traycontent,
}) {
    const xl = pathOr('', ['lg'])(breakpoint);
    return (
        <>
            <TrayComponentGlobalStyle />
            <div className="tray-wrapper">
                <SliderSection
                    traycontent={traycontent}
                    breakpoint={breakpoint} title={title} />
            </div>
        </>
    )
}