import {auth} from '../firebase';
import {
        
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
        signInWithPopup,
        signOut,
        signInWithEmailAndPassword
} from 'firebase/auth';


export const googleSignIn=()=>{
    const googleAuthProvider=new GoogleAuthProvider();

    return (dispatch)=>{
        signInWithPopup(auth,googleAuthProvider)
        .then((payload)=>
            dispatch(setUser(payload._tokenResponse)))
            .catch(err=>console.log(err));
    }
}
export const signUp=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
   .then(()=>alert('Successfully Registered')).catch(err=>alert('Something went wrong' + err));
}
export const getUserAuth=()=>{
    const googleAuthProvider=new GoogleAuthProvider();

    return (dispatch)=>{
        signInWithPopup(auth,googleAuthProvider).then(async (user)=>{
            if(user){
                dispatch(setUser(user));
            }
        }).catch(err=>console.log(err));

}
}
export const setUser=(payload)=>{
    return{
        type:'GET_USER',
        user:payload
    }
}

export const signOutApi=()=>{
    const googleAuthProvider=new GoogleAuthProvider();
    return (dispatch)=>{
        signOut(auth,googleAuthProvider).then(()=>{
            // console.log(setUser(null));
            dispatch(setUser(null));
        }).catch(err=>console.log(err));


    }
}

export const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
            .then(()=>console.log('successfully created'))
            .catch(err=>console.log(err));
}
