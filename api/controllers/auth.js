import { credentials } from '../models/firebase';
import { getAuth, UserRecord } from 'firebase-admin/auth';

const auth = getAuth();

exports.createUser = auth.createUser({
    
})