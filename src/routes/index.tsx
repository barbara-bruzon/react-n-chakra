import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/not-found'
import Sobre from '../pages/sobre'
import Contato from '../pages/contato'
import Tarefa from '../pages/tarefas'

const router = createBrowserRouter([
{path: '/', element: <Home />, errorElement: <NotFound />},
{path: '/sobre', element: <Sobre />},
{path: '/tarefas', element: <Tarefa />},
{path: '/contato', element: <Contato />}
])

export default router