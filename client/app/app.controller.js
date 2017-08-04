class AppController {

    constructor($transitions) {
        "ngInject";
        this.showSidenav = false;
        $transitions.onStart({ to: '**.**' }, (trans) => {
            if(!trans.$to().name.includes('auth')){
                if (!trans.injector().get('SessionService').isLogged()){
                    return trans.router.stateService.target('auth');
                }
                
                this.showSidenav = true;
            }
            else {
                if (trans.injector().get('SessionService').isLogged()){
                    return trans.router.stateService.target('tickets');
                }
                else {
                    this.showSidenav = false;
                }
            }
            // console.log(trans.injector().get('SessionService'))
        })

    }
}

export default AppController;
