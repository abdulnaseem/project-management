import NewProject from "./components/NewProject/NewProject";
import ProjectsSidebar from "./components/ProjectSideBar/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject/SelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectsId: undefined,
    projects: [],
    tasks: []
  });

  const handleAddTask = (text) => {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectsId,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  const handleDeleteTask = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  const handleSelectProject = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectsId: id
      };
    });
  }

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectsId: null
      };
    });
  }
  //process of adding a new project

  const handleCancelAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectsId: undefined
      };
    });
  }

  const handleAddProjects = (projectData) => {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectsId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  const handleDeleteProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectsId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectsId
        ),
      };
    });
  }

  console.log(projectsState);

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectsId)

  let content = (
    <SelectedProject 
      project={selectedProject} 
      onDelete={handleDeleteProject} 
      onAddTask={handleAddTask} 
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks} />
  );

  if(projectsState.selectedProjectsId === null) {
    content = <NewProject onAdd={handleAddProjects} onCancel={handleCancelAddProject} />;
  }
  else if(projectsState.selectedProjectsId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
