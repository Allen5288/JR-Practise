import React, { useEffect } from "react";
import { fetchProjects } from "../utils/projectApi";
import { CircularProgress, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  useEffect(() => {
    // useEffect should not write asyncronous function
    setLoading(true);
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorMessage(error);
      }
    };
    loadProjects();
  }, []);

  console.log(projects);

  if (loading) {
    return (
      <div className="center-loader">
        <CircularProgress />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <Typography variant="h6" style={{ color: "red", marginTop: "20px" }}>
        {errorMessage}
      </Typography>
    );
  }

  return (
    <div>
      {projects.length > 0 ? (
        <div>
          {projects.map((project) => (
            <div key={project.id} style={{ marginBottom: "20px" }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        <div>No projects found</div>
      )}
    </div>
  );
};

export default Projects;
