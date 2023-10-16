import {createBrowserRouter} from 'react-router-dom';
import {App} from '../components/App';
import CharacterDetails from '../components/CharacterDetails';

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
    },
    {
        path:'/:name',
        element:<CharacterDetails />,
    }
])

export default router;