import { useParams } from 'react-router-dom'

import DominationMain from '../pages/domination/domination-main'
import NotFound from '../pages/not-found/not-found'

const toolComponentMap = {
    'domination': DominationMain,
    // Agregar aquí otras herramientas según sea necesario
}

const Router = ( { isLoading } ) => {
    let { tool } = useParams()

    const Component = toolComponentMap[tool] || NotFound

    return <Component isLoading={isLoading} />
}

export default Router