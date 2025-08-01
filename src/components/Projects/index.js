import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Whether it’s a stunning UI or a robust backend, I build it all. Check
          out some of my recent projects below.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "fullstack app" ? (
            <ToggleButton
              active
              value="fullstack app"
              onClick={() => setToggle("fullstack app")}
            >
              FullStack App
            </ToggleButton>
          ) : (
            <ToggleButton
              value="fullstack app"
              onClick={() => setToggle("fullstack app")}
            >
              FullStack App
            </ToggleButton>
          )}
          <Divider />
          {toggle === "frontend app" ? (
            <ToggleButton
              active
              value="frontend app"
              onClick={() => setToggle("frontend app")}
            >
              Frontend App
            </ToggleButton>
          ) : (
            <ToggleButton
              value="frontend app"
              onClick={() => setToggle("frontend app")}
            >
              Frontend App
            </ToggleButton>
          )}
          <Divider />
          {toggle === "backend app" ? (
            <ToggleButton
              active
              value="backend app"
              onClick={() => setToggle("backend app")}
            >
              Backend App
            </ToggleButton>
          ) : (
            <ToggleButton
              value="backend app"
              onClick={() => setToggle("backend app")}
            >
              Backend App
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
