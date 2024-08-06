import ProjectStateContextProvider from "./store/project-state-context";
import ProjectsSidebar from "./components/ProjectSideBar/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectStateContextProvider>
        <ProjectsSidebar />
      </ProjectStateContextProvider>
    </main>
  );
}

export default App;
