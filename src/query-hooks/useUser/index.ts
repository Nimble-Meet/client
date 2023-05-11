import GET from './GET';
import { newUser, authenticate } from './POST';

export default {
    GET,
    POST: {
        newUser,
        authenticate
    }
};
