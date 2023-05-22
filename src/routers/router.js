import { useParams } from 'react-router-dom'

import DominationMain from '../pages/domination/domination-main'

const Router = () => {
    let { tool } = useParams()

    switch ( tool ) {
        case 'domination':
            return <DominationMain />
        default:
            return <h1>ups... error 404!</h1>
    }
}

export default Router