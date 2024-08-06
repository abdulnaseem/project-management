import { createContext } from "react";

export const ProjectStateContext = createContext({
    selectedProjectsId: undefined,
    projects: [],
    tasks: [],
    selectedProject: undefined,
    addTask: () => {},
    deleteTask: () => {},
    selectProject: () => {},
    startAddProject: () => {},
    cancelAddProject: () => {},
    addProject: () => {},
    deleteProject: () => {}
})