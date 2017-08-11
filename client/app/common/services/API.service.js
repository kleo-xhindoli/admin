export default class APIService {
    constructor($http, $q, SessionService){
        "ngInject";
        this.url = 'http://52.233.197.18:3000'
        // this.url = 'http://localhost:3000'
        this.$http = $http;
        this.$q = $q;
        this.session = SessionService;

    }

    get(url){
        let defer = this.$q.defer();
        let options = {headers: this._generateHeaders()};
        this.$http.get(this.url + url, options).then((res) => {
            defer.resolve(res.data);
        })
        .catch((err) => {
            console.log(err);
            defer.reject(err);
        });
        return defer.promise;
    }

    post(url, body){
        let options = {headers: this._generateHeaders()};
        let defer = this.$q.defer();
        this.$http.post(this.url + url, body, options)
        .then((res) => {
            defer.resolve(res.data);
        })
        .catch((err) => {
            console.log(err);
            defer.reject(err);
        });
        return defer.promise;
    }

    put(url, body){
        let options = {headers: this._generateHeaders()};
        let defer = this.$q.defer();
        this.$http.put(this.url + url, body, options)
        .then((res) => {
            defer.resolve(res.data);
        })
        .catch((err) => {
            console.log(err);
            defer.reject(err);
        });
        return defer.promise;
    }

    delete(url){
        let options = {headers: this._generateHeaders()};
        let defer = this.$q.defer();
        this.$http.delete(this.url + url, options)
        .then((res) => {
            defer.resolve(res.data);
        })
        .catch((err) => {
            console.log(err);
            defer.reject(err);
        });
        return defer.promise;
    }

    _generateHeaders(){
        if(this.session.isLogged())
            return {'x-access-token': this.session.getToken()};
        return {};
    }
};
