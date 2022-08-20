import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import baseUrl from "../Integration/serviceApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
//import UpdateCourse from "./Course";

const Course = ({ course, remove }) => {
  // function for delete the course from the service
  const deleteCourse = (id) => {
    console.log("course deleted" + course.id);
    axios
      .delete(`${baseUrl}/deleteCourseDb/${id}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(
        (response) => {
          console.log(response);
          toast.success("Course deleted, course id is : " + course.id);
          //after delete we want remove this perticualt course from the allCourses component immediately
          remove(id);
        },
        (error) => {
          console.log(error);
          toast.error("course not deleted somting went wrong");
        }
      );
  }; // delete closed

  //function for update
  function UpdateCourse(props) {
    console.log(course);
    props.history.push("/UpdateCourse" + course.id);
  }

  // const updateCourse = (id) => {
  //   console.log("updating the course" + course.id);
  //   axios.put(`${baseUrl}/updateCourseDb/${id}`).then(
  //     (response) => {
  //       console.log("course Updated" + course.id);
  //       console.log(response);
  //       toast.success("course update successfully " + course.id);
  //     },
  //     (error) => {
  //       console.log("course not updated" + course.id);
  //       console.log(error);
  //       toast.error("somting went wrong while updating the course");
  //     }
  //   );
  // };
  //for updaitng the data we need Id
  // const setID = (id) => {
  //   console.log("checking Id getting or not");
  //   console.log(id);
  //   // localStorage.setItem(id);
  // };

  return (
    <Card>
      <CardBody style={{ background: "darkslateblue" }}>
        <CardSubtitle>{course.id}</CardSubtitle>
        <CardSubtitle>{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Link
            to={`/update-course/${course.id}`}
            //to="/update-course"
            className="btn btn-success"
            //onClick={() => setID(course.id)}
          >
            Update Course
          </Link>
          {/* <Button
            color="warning"
            onClick={() => {
              UpdateCourse(course.id);
            }}
          >
            Update
          </Button> */}
          <Button
            color="danger ml-3"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};
export default Course;
