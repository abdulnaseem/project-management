import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectsId: undefined,
    projects: []
  });

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectsId: null
      };
    });
  }
  //process of adding a new project

  const handleAddProjects = (projectData) => {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  console.log(projectsState);

  let content;

  if(projectsState.selectedProjectsId === null) {
    content = <NewProject onAdd={handleAddProjects} />;
  }
  else if(projectsState.selectedProjectsId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
