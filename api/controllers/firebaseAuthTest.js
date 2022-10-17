//import { Auth } from "firebase-admin/auth";
//import { getAuth } from Firebase/Auth;

//const auth = getAuth()

export let testUserController = (Admin) => {
    let postsNewUser = Admin.auth()
        .createUser({
            email: 'wRiker@starfleet.com',
            emailVerified: true,
            phoneNumber: '+12345551701',
            password: 'passwordSecret1144',
            displayName: 'numberOne01',
            disabled: false,
        })
        .then((userRecord) => {
            console.log('Successfully created new user:', userRecord.uid)
        })
        .catch((error) => {
            console.log('Error creating new user: ', error)
        })

        return {
            postsNewUser: postsNewUser
        }
}

//module.exports = testUserController;

