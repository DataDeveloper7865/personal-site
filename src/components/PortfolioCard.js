import React from 'react';
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

function PortfolioCard(props) {


    return (
        <Col 
            style={
                {
                    marginRight: '50px'
                }
            } 
        >
            <a href={props.gitHubLink}>
                <Card
                    hoverable
                    style={{ 
                        width: 240,
                        marginTop: '50px',
                        marginBottom: '20px'
                    }}
                    cover= 
                        {<img alt={props.cardTitle} src={props.imgLink} />}
                    >
                    <Meta title={props.cardTitle} description={props.cardDescription} />
                </Card>
            </a>
        </Col>
    )
};

export default PortfolioCard;