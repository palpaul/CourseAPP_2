import { React } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <div style={{ background: "darkslateblue" }}>
      <h1>This is menu </h1>
      <ListGroup className="listgroup" style={{ height: 300 }}>
        <Link
          style={{ background: "darkcyan" }}
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
        <Link
          style={{ background: "darkcyan" }}
          className="list-group-item list-group-item-action"
          tag="a"
          to="add-course"
          action
        >
          Add Course
        </Link>
        <Link
          style={{ background: "darkcyan" }}
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-courses"
          action
        >
          View Courses
        </Link>
        <Link
          style={{ background: "darkcyan" }}
          className="list-group-item list-group-item-action"
          tag="a"
          to="/about-us"
          action
        >
          About
        </Link>
        <Link
          style={{ background: "darkcyan" }}
          className="list-group-item list-group-item-action"
          tag="a"
          to="/contact-us"
          action
        >
          Contact us
        </Link>
      </ListGroup>
    </div>
  );
};
export default Menus;
