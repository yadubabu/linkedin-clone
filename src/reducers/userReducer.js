 const initialValue={
     user:null
}

const userReducer=(state=initialValue,action)=>{
    switch(action.type){
         case 'GET_USER':
             return {...state,user:action.user};
        default:
            return state;
    }
}
export default userReducer;