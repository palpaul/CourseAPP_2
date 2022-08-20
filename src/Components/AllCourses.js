import React, { useState, useEffect } from "react";
import Course from "./Course";

import baseUrl from "../Integration/serviceApi";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
const AllCourses = () => {
  useEffect(() => {
    document.title = "All Curses || Learn Courses";
  }, []);

  // function to call service api from backend
  //header("Access-Control-Allow-Origin: *");
  const getAllCoursesFromService = () => {
    axios.get(`${baseUrl}/coursesDb`).then(
      (response) => {
        //this is for success
        //console.log(response);
        console.log(response.data);
        toast.success("Courses Loaded", { position: "bottom-center" });
        setCourses(response.data);
      },
      (error) => {
        //this is for erorr
        console.log(error);
        toast.error("Somthing went worng check service", {
          position: "bottom-center",
        });
      }
    );
  };
  //calling this function getAllCoursesFromService
  useEffect(() => {
    getAllCoursesFromService();
  }, []);

  const [courses, setCourses] = useState([
    // {
    //   title: "Java",
    //   description: "Java course for beginers",
    // },
  ]);

  const removeCourseAfterDelete = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };
  const updateCourse1 = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  return (
    <div className="text-center">
      <Container style={{ background: "darkcyan" }}>
        <h1>All Courses</h1>
        <p>List of all courses...</p>
        {courses.length > 0
          ? courses.map((item) => (
              <Course
                key={item.id}
                course={item}
                remove={removeCourseAfterDelete}
                update1={updateCourse1}
              ></Course>
            ))
          : "No Course found"}
      </Container>
    </div>
  );
};
export default AllCourses;
