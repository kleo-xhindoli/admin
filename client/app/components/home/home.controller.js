class HomeController {
    constructor(APIService, $mdSidenav, $scope, $state, SessionService) {
        "ngInject";
        this.name = 'home';
        this.$mdSidenav = $mdSidenav;
        this.defaultFilters = {
            status: [
                'Ne pritje per aprovim',
                'Ne pritje per anullim',
                'Aprovuar'
            ],
            location: [],
            service: [],
            ticketCode: ""
        };

        this.api = APIService;
        this.exportUrl = this.api.url + '/tickets/csv';

        this.filters = JSON.parse(JSON.stringify(this.defaultFilters));
        // this.api.logIn('kleo', 'pass')
        // .then(() => {
        //     this.api.get('/tickets/all').then((tickets) =>{
        //         console.log(tickets);
        //         this.tickets = tickets;
        //     })
        // });

        this.api.get('/tickets/all')
        .then((tickets) =>{
            console.log(tickets);
            this.tickets = tickets;
        })
        .catch((err) => {
            if (err.status === 401) {
                SessionService.logOut();
                $state.go('auth');
            }
        })

        $scope.$watch('$ctrl.status', (newVal) => {
            console.log(newVal);
        });
    }

    toggleFiltersSidebar(componentId) {
        this.showSidebar = !this.showSidebar;
    }

    filterCards(){
        return (card) => {
            return Object.keys(this.filters).every((key) => {
                if (this.filters[key].length === 0) return true;
                if (typeof this.filters[key] === 'string') {
                    return card[key].includes(this.filters[key]);
                }
                return this.filters[key].some((item) => {
                    return card[key] === item;
                })
            })
        } 
    }

    clearFilters(){
        this.filters = JSON.parse(JSON.stringify(this.defaultFilters));
    }

    hasFilters(){
        return JSON.stringify(this.filters) !== JSON.stringify(this.defaultFilters);
    }

}

export default HomeController;
