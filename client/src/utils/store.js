// using legacy_createStore as it is deprecated
import { legacy_createStore as createStore} from 'redux';

// implementing reducers
import reducers from './reducers';

export default createStore(reducers);