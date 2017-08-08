export default class AuthService {
    constructor($http, $q, SessionService, APIService){
        "ngInject";
        this.session = SessionService;
        this.api = APIService;
        this.$q = $q;

    }

    logIn(user, pass){
        let def = this.$q.defer();
        this.api.post('/users/login', {username: user, password: pass})
        .then((res) => {
            if (res.admin) {
                this.session.setUser(res.username, res.token, res.fullname);
                def.resolve(true);
            }
            else {
                def.reject('Not admin');
            }
        })
        .catch((err) => {
            console.log(err);
            def.reject(err);
        });
        return def.promise;
    }

    register(user) {
        let def = this.$q.defer();
        this.api.post('/users/register-admin', user)
        .then((res) => {
            def.resolve(res);
        })
        .catch((err) => {
            def.reject(err);
        })
        return def.promise;
    }

    changePassword (password) {
        let def = this.$q.defer();
        this.api.post(`/users/changePassword/${this.session.getUsername()}`, {password: password})
        .then((res) => {
            def.resolve(res);
        })
        .catch((err) => {
            def.reject(err);
        })
        return def.promise;
    }
};
