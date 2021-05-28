import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

function Portfolio() {


    return (
        <>
            <h1 style={{marginTop: '10px'}}> Projects </h1>
            <div class="body-content">
                <div className="site-card-wrapper">
                <Row >

                    <Col style={{marginRight: '50px'}} >
                        <Card
                            hoverable
                            style={{ width: 240}}
                            cover={<img alt="Jobly" src="https://www.ivywise.com/core/wp-content/uploads/2017/01/What-Happens-to-Your-College-Application-After-Its-Submitted-1024x1024.jpg" />}
                            >
                            <Meta title="Jobly" description="Mock Job Board Application" />
                        </Card>
                    </Col>

                    <Col >
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="Warbler" src="data:image/jpeg;base64,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" />}
                            >
                            <Meta title="Warbler" description="Twitter Clone" />
                        </Card>
                    </Col>

                </Row>
                </div>
            </div>
        </>
    )

}

export default Portfolio;