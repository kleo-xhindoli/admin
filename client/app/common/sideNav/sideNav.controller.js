class SideNavController {
    constructor($state) {
        "ngInject";
        this.name = 'sideNav';
        this.state = $state.current.name;
        console.log($state.current);
    }
}

export default SideNavController;
