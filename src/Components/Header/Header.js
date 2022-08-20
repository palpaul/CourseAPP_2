import React from "react";
import { Card, CardBody } from "reactstrap";
// import { Button } from "reactstrap";
// import { ToastContainer, toast } from "react-toastify";
// props dynamically chnge the vlaue  like interpolation
const Header = ({ name, title }) => {
  return (
    <div className="text-center" style={{ background: "yellow" }}>
      <Card>
        <CardBody>
          <h1>Welcome to Course Application</h1>
          <hr />
        </CardBody>
      </Card>
      <hr />
      <h3>{name}</h3>
      <h3>{title}</h3>
      <hr />
    </div>
  );
};
export default Header;
