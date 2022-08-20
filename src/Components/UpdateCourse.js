import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import baseUrl from "../Integration/serviceApi";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const UpdateCourse = () => {
  useEffect(() => {
    document.title = "Update Course || Learining React";
  }, []);

  const [course, setCourse] = useState({ description: "", title: "" });

  const navigate = useNavigate();
  ///navigate("/home");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const EditUserId = async () => {
      // const reqData = await fetch(`http://localhost:8080/coursesDb/${id}`, {
      //   mode: "no-cors",
      //   headers: {
      //     "Content-Type": "application/json",
      //     mimeType: "multipart/form-data",
      //   },
      // });

      axios.get(`${baseUrl}/coursesDb/${id}`).then(
        (response) => {
          console.log(response.data);
          setCourse(response.data);
          toast.success("Existing data loaded", {
            position: "bottom-center",
          });
          //setCourse({ id: "", title: "", description: "" });
        },
        (error) => {
          console.log(error);
          toast.error("Error while loading the existing data", {
            position: "bottom-center",
          });
        }
      );
      // const res = await reqData.json();
      // console.log("before settig response" + res);
      // //setUseredit(response);
      // console.log("after settig response" + res);
    };
    EditUserId();
  }, []);

  //form handler function
  // const updateForm = (e) => {
  //   //const { reset, errors } = useForm();
  //   console.log(course);
  //   updateDataToServer(course);
  //   //useForm(reset);
  //   e.preventDefault();
  // };
  //creating function for update data on server(backend).
  // const updateDataToServer = (id) => {
  //   axios.put(`${baseUrl}/ucoursesDb/${id}`).then(
  //     (response) => {
  //       console.log("befoe success message" + response);
  //       toast.success("Course Updated successfully", {
  //         position: "bottom-center",
  //       });
  //       //setCourse({ id: "", title: "", description: "" });
  //       setCourse(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //       toast.error("Error while Updating the course", {
  //         position: "bottom-center",
  //       });
  //     }
  //     //headers: {'Content-Type', application/json}
  //   );
  // };

  const handleUpdateForm = (e) => {
    //const { reset, errors } = useForm();
    console.log(course);
    //useForm(reset);
    e.preventDefault();
    updateDataToServer_Id(course);
  };

  const updateDataToServer_Id = (data) => {
    axios.post(`${baseUrl}/addCourseDb`, data).then(
      (response) => {
        console.log(response);
        toast.success("Course updated successfully", {
          position: "bottom-center",
        });
        //setCourse({ id: "", title: "", description: "" });
      },
      (error) => {
        console.log(error);
        toast.error("Error while updating the course", {
          position: "bottom-center",
        });
      }
    );
  };

  return (
    <Fragment className="text-center" style={{ background: "skyblue" }}>
      <Container style={{ background: "darkslateblue" }}>
        <h2 className="text-center">Update Course details</h2>
        {/* onSubmit={handleForm} */}
        <Form onSubmit={handleUpdateForm} className="">
          <h4 className="text-center">
            update all those fields which you want to change
          </h4>
          <FormGroup>
            <level for="title" />
            Course Title
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Title"
              Value={course.title}
              onChange={(e) => {
                setCourse({ ...course, title: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <level for="description" />
            Description
            <Input
              type="text"
              name="description"
              id="description"
              placeholder="Enter description"
              Value={course.description}
              // style={{ height: 110 }}
              // update
              // description
              onChange={(e) => {
                setCourse({ ...course, description: e.target.value });
              }}
            />
          </FormGroup>
          <Container className="text-center">
            <Button type="submit" color="success">
              Update
            </Button>
            <Button type="reset" defaultValue="reset" color="secondary">
              Clear
            </Button>
          </Container>
        </Form>
      </Container>
    </Fragment>
  );
};

export default UpdateCourse;
