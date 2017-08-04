class InfoCardsCreateController {
    constructor($scope, APIService, $state, SessionService) {
        "ngInject";
        this.name = 'infoCardsCreate';
        this.tags = [];
        $scope.froalaOptions = {
            placeholderText: 'Permbajtja',
            heightMin: 250,
            toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'specialCharacters', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', '-', 'quote', 'insertHR', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html', 'applyFormat', 'removeFormat', 'fullscreen', 'print', 'help'],
        };
        this.api = APIService;
        this.state = $state;
        if (!SessionService.isLogged()){
            this.api.logIn('kleo', 'pass');
        }

    }

    createCard(){
        let card = {
            title: this.title,
            description: this.description,
            category: this.category,
            subcategory: this.subcategory,
            content: this.content
        }
        this.api.post('/infocards', card).then((res) => {
            console.log(res);
            this.state.go('info-cards');
        })
        .catch((err) => {
            alert(err);
        })
    }
}

export default InfoCardsCreateController;
