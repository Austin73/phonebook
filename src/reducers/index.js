import {combineReducers} from 'redux'
import { allcontactsReducers } from './allcontactReducers'
import { NewContactReducers } from './NewContactReducers';
import { recentreducer } from './recentreducer';

const allReducers= combineReducers({
    allContacts:allcontactsReducers,
    newContact:NewContactReducers,
    recentContacts:recentreducer
})

export default allReducers;