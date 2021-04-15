import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

// Componente é um função que que retorna um HTML (jsx)
// Por convenção, um arquivo tem só um componente sendo exportado


export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    );
}