class AuthController {
    constructor($state, AuthService) {
        "ngInject";
        this.name = 'auth';
        this.$state = $state;
        this.hasError = false;
        this.errorMessage = '';
        this.auth = AuthService;
        console.log(this.name);
    }

    logIn(){
        this.hasError = false;
        if (!this.username && this.password) return;
        this.auth.logIn(this.username, this.password)
        .then(() => {
            this.$state.go('tickets');
        })
        .catch((err) => {
            this.hasError = true;
            this.errorMessage = "Kredencialet tuaja nuk jane te sakta, ose ju nuk keni te drejta administrative."
        })
    }

    keyPress(event) {
        if(event.key === 'Enter') {
            this.logIn();
        }
    }
}

export default AuthController;
