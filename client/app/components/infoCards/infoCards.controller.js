class InfoCardsController {

    constructor(APIService) {
        "ngInject";
        this.infoCards = [];
        this.api = APIService;
        APIService.get('/infocards').then((cards) => {
            this.infoCards = cards;
        })
    }

    deleteCard(id){
        this.api.delete('/infocards/' + id).then((data) => {
            console.log(data);
            let index = this.infoCards.findIndex((card) => {
                return card._id === id
            });
            if(index){
                this.infoCards.splice(index, 1);
            }
        })
    }
}

export default InfoCardsController;
