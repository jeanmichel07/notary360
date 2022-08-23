export const getUser = ()=>{
    const userStr = sessionStorage.getItem("user");
    if(userStr){
        return JSON.parse(userStr);
    }else{
        return null
    }
}

export const getToken = ()=>{
    return sessionStorage.getItem("tokken") || null
}

export const setUserSession = (tokken, user)=>{
    sessionStorage.setItem("tokken", tokken);
    sessionStorage.setItem("user", JSON.stringify(user));
}

export const removeUserSession = ()=>{
    sessionStorage.removeItem("tokken");
    sessionStorage.removeItem("user")
}
export const isAuth = ()=>{
    return sessionStorage.getItem("tokken") !== null ? true : false
}