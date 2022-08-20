import React from "react";
import { Card, CardBody } from "reactstrap";
const Header2 = ({ name, title }) => {
  return (
    <div className="text-center">
      <Card className="my-3 bg-blue " style={{ background: "darkslateblue" }}>
        <CardBody>
          <h1>Welcome to Course Application</h1>
        </CardBody>
      </Card>
      <hr />
    </div>
  );
};
export default Header2;
