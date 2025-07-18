import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectDefault from "./components/NoProjectDefault.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(task) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        task: task,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDelTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        )
      };
    })
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    })
  }

  function handleStartAddProject(){
     setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
     })
  }

  function handleDeleteProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        )
      };
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancel() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    })
  }

  let selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

  let content = (
    <SelectedProject 
      project={selectedProject} 
      onDel={handleDeleteProject} 
      onAddTask={handleAddTask}
      onDelTask={handleDelTask}
      tasks={projectState.tasks}
    />);

  if(projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
  } else if (projectState.selectedProjectId === undefined){
    content = <NoProjectDefault onStartAddProject={handleStartAddProject}/> 
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
