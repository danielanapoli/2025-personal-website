import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function accordionToggle() {
  return (
          <Row className='justify-content-end' xs="auto">
            <Col><Button variant='light'>Expand all</Button></Col>
            <Col><Button variant='light'>Collapse all</Button></Col>
          </Row>
  );
}

export default accordionToggle

function ExpandableAccordion() {
  const [activeKeys, setActiveKeys] = useState([]); // State to hold active keys

  const allKeys = ["0", "1", "2", "3"]; 

  const handleExpandAll = () => {
    setActiveKeys(allKeys);
  };

  const handleCollapseAll = () => {
    setActiveKeys([]);
  };

  const handleToggle = (key) => {
    if (activeKeys.includes(key)) {
      setActiveKeys(activeKeys.filter((k) => k !== key));
    } else {
      setActiveKeys([...activeKeys, key]);
    }
  };
}