import "./App.css";
import Header from "./Components/Header/Header";
import Header2 from "./Components/Header/Header2";
import { Button, Container, Row, Col } from "reactstrap";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import { ToastContainer, toast } from "react-toastify";

import { useEffect } from "react";
import Home from "./Components/Home";
import Course from "./Components/Course";
import AllCourses from "./Components/AllCourses";
import AddCourse from "./Components/AddCourse";
import Menus from "./Components/Menus";
import Footers from "./Components/Header/Footers";
// switch has removed from readt-router-dom v6
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UpdateCourse from "./Components/UpdateCourse";

function App() {
  useEffect(() => {
    toast.success("Success");
  }, []);

  const Notify = () => toast.error("Error", { position: "top-center" });
  const bndHandle = () =>
    toast("checking toast library", { position: "top-left" });
  return (
    <div className="App">
      <ToastContainer />
      {/* <h3 className="text-center">Welocme to React_APP</h3> */}
      {/* <Header name="I'm header" title="first card" />
      <h1>Welcome to course app</h1>
      <Header name="I'm Footer" title="second card" />
      <h1>This is a reatstrap components</h1>

      <Button color="primary" onClick={Notify}>
        firstbutton
      </Button>
      <Button color="secondary" onClick={bndHandle}>
        second
      </Button>
      <Button color="warning">third</Button>
      <Button outline color="primary">
        primary
      </Button>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>
      <button type="button" class="btn btn-link">
        Link
      </button> */}
      {/* importing home component */}
      {/* <Home />
      <AllCourses />
      <AddCourse /> */}

      <Header2 />
      {/* <ContactUs />
      <AboutUs /> */}
      <BrowserRouter>
        <Container>
          <Row>
            <Col md={4}>
              <Menus></Menus>
            </Col>
            <Col md={8}>
              {/* <Route path="/" element={<Home />}></Route> */}
              {/* <Link to="/">{<Home></Home>}</Link> */}

              {/* <BrowserRouter> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourses />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/update-course/:id" element={<UpdateCourse />} />
              </Routes>
              {/* </BrowserRouter> */}
              {/* <Home /> */}
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
      <Footers />
    </div>
  );
}

export default App;
