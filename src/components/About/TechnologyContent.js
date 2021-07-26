import React from 'react';
import { Col, Image } from 'antd';

function TechnologyContent(props)  {

    return (

        <Col>
            <Image 
                alt={props.altText} 
                src={props.source}
                style={{
                    width: '200px',
                    height: '200px'
                }}
            />
        </Col>
    );
}

export default TechnologyContent;