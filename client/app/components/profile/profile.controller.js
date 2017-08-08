import template from '../../common/templates/dialog.html';

class ProfileController {
    constructor(SessionService, $mdDialog, AuthService) {
        "ngInject";
        this.name = 'profile';
        this.fullname = SessionService.getFullname();
        this.username = SessionService.getUsername();
        this.$mdDialog = $mdDialog;
        this.auth = AuthService;
    }

    showDialog(ev) {
        this.$mdDialog.show({
            controller: DialogController,
            template: template,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
        })
        .then((answer) => {
            this.$mdDialog.show(
                this.$mdDialog.alert()
                    .parent(angular.element(document.body))
                    .clickOutsideToClose(true)
                    .title('Sukses!')
                    .textContent('Profili i Administratorit u krijua me sukses!')
                    .ok('OK')
                    .targetEvent(ev)
                );
        }, function() {
        });
    }

    changePassword() {
        this.hasError = false;
        if (this.password === this.confirm) {
            this.auth.changePassword(this.password)
            .then(() => {
                this.$mdDialog.show(
                this.$mdDialog.alert()
                    .parent(angular.element(document.body))
                    .clickOutsideToClose(true)
                    .title('Sukses!')
                    .textContent('Password-i juaj u ndryshua me sukses!');
                    .ok('OK')
                    .targetEvent(ev)
                );
            })
            .catch((err) => {
                this.hasError = true;
                this.errorMsg = err.message;
                console.log(err);
            })
        }
        else {
            this.hasError = true;
            this.errorMsg = "Password-et nuk perputhen."
        }
    }
}

export default ProfileController;

class DialogController {
    constructor(AuthService, $mdDialog, $scope) {
        "ngInject";
        $scope.hasError = false;
        $scope.errorMsg = '';

        $scope.register = () => {
            $scope.hasError = false;
            if($scope.password !== $scope.confirm) {
                $scope.hasError = true;
                $scope.errorMsg = "Password-et nuk perputhen!";
                return;
            }
            let user = {
                username: $scope.username,
                password: $scope.password,
                firstname: $scope.firstname,
                lastname: $scope.lastname
            }
            AuthService.register(user)
            .then(() => {
                console.log('success');
                $mdDialog.hide();
            })
            .catch((err) => {
                $scope.hasError = true;
                $scope.errorMsg = "Llogaria nuk mund te krijohet per momentin."
            })

        }

        $scope.cancel = () => {
            $mdDialog.cancel();
        }
    }

    
}
