import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

export function RepositoryList() {

    const repository = {
        name: "unform",
        description: "Forms in React",
        link: 'https://github.com/unform/unform'
    }
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {/*
                  Com o React, podemos passar propriedades/valores para
                  o componente filho, e acessá-los através do parâmetros
                  recibidos, pelo props 
                */}
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}