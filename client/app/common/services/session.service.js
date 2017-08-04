export default class SessionService {
    constructor(){
    }

    setToken(token){
        sessionStorage.token = token;
    }

    getToken(){
        return sessionStorage.token;
    }

    isLogged(){
        if(sessionStorage.token)
            return true;
        return false;
    }

    logOut(){
        sessionStorage.clear();
    }

    setUser(username, token, fullname){
        this.setToken(token);
        sessionStorage.fullname = fullname;
        sessionStorage.username = username;
    }

    getUsername(){
        return sessionStorage.username;
    }
    
    getFullname(){
        return sessionStorage.fullname;
    }
};
