import { useParams } from 'react-router-dom'

import DominationAside from '../pages/domination/domination-aside'

const RouterAside = ( { isLoading } ) => {
    let { tool } = useParams()

    switch ( tool ) {
        case 'domination':
            return <DominationAside isLoading={isLoading} />
        default:
            return <h1>ups... error 404!</h1>
    }
}

export default RouterAside