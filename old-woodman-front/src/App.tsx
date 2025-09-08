import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes/routes.tsx';

function App() {
    const routing = useRoutes(routes);
    return (<Suspense fallback={null}>
            {routing}
        </Suspense>);
}

export default App;