class InfoCardsCreateController {
    constructor($scope, APIService, $state, $stateParams, SessionService) {
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
        this.stateParams = $stateParams
        if (this.state.current.name === 'edit') {
            this.api.get(`/infocards/${this.stateParams.infocardId}`).then((card) => {
                this.title = card.title,
                this.description = card.description,
                this.category = card.category,
                this.subcategory = card.subcategory,
                this.content = card.content,
                this.code = card.code,
                this.profitable = card.profitable,
                this.documents = card.documents,
                this.applyLocation = card.applyLocation,
                this.isOnline = card.isOnline,
                this.fee = card.fee,
                this.serviceDuration = card.serviceDuration,
                this.profits = card.profits,
                this.serviceValidDuration = card.serviceValidDuration,
                this.location = card.location,
                this.responsibleInstitution = card.responsibleInstitution,
                this.contact = card.contact,
                this.legalInfo = card.legalInfo
            })
            .catch((err) => {
                this.state.go('info-cards')
            })
        }

        // if (!SessionService.isLogged()){
        //     this.api.logIn('kleo', 'pass');
        // }

        this.documents = [];

    }

    createCard(){
        let card = {
            title: this.title,
            description: this.description,
            category: this.category,
            subcategory: this.subcategory,
            content: this.content,
            code: this.code,
            profitable: this.profitable,
            documents: this.documents,
            applyLocation: this.applyLocation,
            isOnline: this.isOnline,
            fee: this.fee,
            serviceDuration: this.serviceDuration,
            profits: this.profits,
            serviceValidDuration: this.serviceValidDuration,
            location: this.location,
            responsibleInstitution: this.responsibleInstitution,
            contact: this.contact,
            legalInfo: this.legalInfo
        }
        if (this.state.current.name === 'create'){
            this.api.post('/infocards', card).then((res) => {
                console.log(res);
                this.state.go('info-cards');
            })
            .catch((err) => {
                alert(err);
            })

        }
        else {
            this.api.put(`/infocards/${this.stateParams.infocardId}`, card).then((res) => {
                console.log(res);
                this.state.go('info-cards');
            })
            .catch((err) => {
                alert(err);
            })
        }
    }

    addDoc() {
        let newDoc = {
            number: this.documents.length + 1,
            docType: this.document.docType,
            institution: this.document.institution,
            validPeriod: this.document.validPeriod
        }

        this.documents.push(newDoc);
        this.document.docType = "";
        this.document.institution = "";
        this.document.validPeriod = "";
    }
}

export default InfoCardsCreateController;
