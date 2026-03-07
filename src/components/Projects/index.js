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
          {toggle === "FullStack App" ? (
            <ToggleButton
              active
              value="FullStack App"
              onClick={() => setToggle("FullStack App")}
            >
              FullStack App
            </ToggleButton>
          ) : (
            <ToggleButton value="FullStack App" onClick={() => setToggle("FullStack App")}>
              FullStack App
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Frontend App" ? (
            <ToggleButton
              active
              value="Frontend App"
              onClick={() => setToggle("Frontend App")}
            >
              Frontend App
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Frontend App"
              onClick={() => setToggle("Frontend App")}
            >
              Frontend App
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Backend App" ? (
            <ToggleButton
              active
              value="Backend App"
              onClick={() => setToggle("Backend App")}
            >
              Backend App
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Backend App"
              onClick={() => setToggle("Backend App")}
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
