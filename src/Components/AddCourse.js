import React, { Fragment, useEffect, useState, useForm } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import baseUrl from "../Integration/serviceApi";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course || Learining React";
  }, []);

  const [course, setCourse] = useState({});

  //form handler function
  const handleForm = (e) => {
    //const { reset, errors } = useForm();
    console.log(course);
    postDataToServer(course);
    //useForm(reset);
    e.preventDefault();
  };
  //creating function for post data on server(backend).
  const postDataToServer = (data) => {
    axios.post(`${baseUrl}/addCourseDb`, data).then(
      (response) => {
        console.log(response);
        toast.success("Course added successfully", {
          position: "bottom-center",
        });
        //setCourse({ id: "", title: "", description: "" });
      },
      (error) => {
        console.log(error);
        toast.error("Error while adding the course", {
          position: "bottom-center",
        });
      }
    );
  };
  return (
    <Container style={{ background: "darkslateblue" }}>
      <Fragment className="text-center" style={{ background: "skyblue" }}>
        <h2 className="text-center">Add Curse</h2>
        <Form onSubmit={handleForm} className="">
          <h4 className="text-center">Fill Course Details</h4>
          <FormGroup>
            <level for="id" />
            CourseID
            <Input
              type="text"
              name="id"
              id="id"
              placeholder="Enter Course"
              //here imp note for all three fields(courseId,title,description) is name given id,title,description
              // should be exact same with the service entity class ok
              //update the Courseid value
              onChange={(e) => {
                setCourse({ ...course, id: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <level for="title" />
            Course Title
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Title"
              //update the title
              onChange={(e) => {
                setCourse({ ...course, title: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <level for="description" />
            Description
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              style={{ height: 110 }}
              //update description
              onChange={(e) => {
                setCourse({ ...course, description: e.target.value });
              }}
            />
          </FormGroup>
          <Container className="text-center">
            <Button type="submit" color="success">
              Add Course
            </Button>
            <Button type="reset" defaultValue="reset" color="secondary">
              Clear
            </Button>
          </Container>
        </Form>
      </Fragment>
    </Container>
  );
};
export default AddCourse;
