interface RepositoryItemProps{
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {

    // Essa '?' antes da propriedade verifica se a propriedade existe
    // Senão, ela nem procura pelo próximo atributo

    // Os '??' funcionam como o '||', mas não considera o 0 como um valor vazio
    // Ou seja, se esse atributo não existir, escreve "Default"

    return (
        <li>
            <strong>{props.repository?.name ?? "Default"}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
        </li>
    );
}