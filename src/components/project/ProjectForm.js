import { useState, useEffect } from 'react'

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css';

function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        // Efeito colateral para buscar categorias quando o componente é montado
        // Faz uma requisição para obter as categorias do servidor local, mas não trata a resposta ou atualiza o estado.
        // A URL 'http://localhost:5000/categories' é um exemplo e deve ser ajustada conforme necessário.
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json' //
            }
        }).then((resp) => resp.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => console.error(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value });
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        });
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''} // Preenche o campo com o nome do projeto, se disponível
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''} // Preenche o campo com o valor do orçamento, se disponível
            />
            <Select name="category_id"
                    text="Selecione a categoria"
                    options={categories} 
                    handleOnChange={handleCategory}
                    value={project.category ? project.category.id : ''} // Preenche o campo com o ID da categoria, se disponível
                    />
            <SubmitButton text={btnText} />
        </form>
    )
} export default ProjectForm;