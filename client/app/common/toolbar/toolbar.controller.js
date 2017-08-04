class ToolbarController {
    constructor($scope, SessionService, $state) {
        "ngInject";
        this.name = 'toolbar';
        $scope.SessionService = SessionService;
        console.log('toolbar')

        $scope.openMenu = function($mdMenu, ev) {
            $mdMenu.open(ev)
        }

        $scope.logOut = function() {
            SessionService.logOut();
            $state.go('auth');
        }
    }
}

export default ToolbarController;
