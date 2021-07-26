import React from "react";
import { Card, Col } from "antd";

const { Meta } = Card;

function PortfolioCard(props) {
  return (
    <Col>
      <a href={props.gitHubLink}>
        <Card
          hoverable
          style={{
            width: 240,
            marginTop: "50px",
            marginBottom: "20px",
          }}
          cover={<img alt={props.cardTitle} src={props.imgLink} />}
        >
          <h3>{props.cardTitle}</h3>
          <p> Description: {props.cardDescription} </p>
          <p> Tech Stack: {props.techStack} </p>
        </Card>
      </a>
    </Col>
  );
}

export default PortfolioCard;
