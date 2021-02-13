import React, { useEffect, useState, useRef } from 'react';
import './style.scss';
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

function PopOverModal(target, show, setShow, ref) {
    return (
        <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref && ref.current}
            containerPadding={20}
        >
            <Popover id="popover-contained">
                <Popover.Title as="h3">Popover bottom</Popover.Title>
                <Popover.Content>
                    <strong>Holy guacamole!</strong> Check this info.
                     </Popover.Content>
            </Popover>
        </Overlay>
    )
};

export default PopOverModal;
