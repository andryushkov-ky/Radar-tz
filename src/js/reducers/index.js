import {combineReducers} from 'redux'

import marks from './marks'
import connections from './connections'

const rootReducer = combineReducers({
    marks,
    connections
})

export default rootReducer