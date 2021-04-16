import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    // Se o segundo parâmetro do useEffect for um array vazio
    // a função do useEffect (primeiro parâmetro) será executado só uma vez
    // quando o componente for exibido na tela
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])


    /**
     * Qualque função que estiver dentro do componente
     * será executada toda vez que o componente for renderizado
     * e seu as suas propriedades (que vem do componente pai) mudarem
     * será executado também!
     */

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {/*
                  Com o React, podemos passar propriedades/valores para
                  o componente filho, e acessá-los através do parâmetros
                  recibidos, pelo props 
                */}
                
                {/**
                 * O map retorna algo e o forEach não
                 * se usarmos os parênteses em vez das chaves no map, 
                 * o return fica implícito
                 */}
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}