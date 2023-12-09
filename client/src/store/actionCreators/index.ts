import * as firstChoiceCreator from './firstChoiceCreator';
import * as userCreator from './userCreators';
import * as orgCreator from './orgCreator';
import * as teachersCreator from './teachersCreator';
import * as groupCreator from './groupCreator';
import * as clientCreator from './clientCreator';
import * as childrenCreator from './childrenCreator';
import * as paymentCreator from './paymentCreator';

export default {
    ...firstChoiceCreator,
    ...userCreator,
    ...orgCreator,
    ...teachersCreator,
    ...groupCreator,
    ...clientCreator,
    ...childrenCreator,
    ...paymentCreator
}