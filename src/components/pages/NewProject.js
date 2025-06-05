import { useNavigate  } from 'react-router-dom';

import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css';

function NewProject() {

  const navigate  = useNavigate();

  function createPost(project) {

    // Initialize the cost and services for the new project
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // Redirect to the project page after creation
        navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } });
      })
      .catch((err) => console.error(err));

  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>  
      <p>Crie seu projeto para depois adicinar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Cria projeto" />
    </div>
  );
} export default NewProject;