import React from "react";
import { useEffect } from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Learning ReactJs";
  }, []);

  return (
    <div style={{ background: "skyblue", height: 360 }}>
      <Container>
        <h1>Start using Course Application</h1>
        <p>Hey im using course application to learn React js from scratch</p>

        <Button color="primary" outline>
          Let's Get started{" "}
        </Button>
      </Container>
    </div>
  );
};
export default Home;
