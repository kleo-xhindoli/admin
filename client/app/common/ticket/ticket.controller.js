class TicketController {
    constructor(APIService, $mdDialog) {
        "ngInject";
        this.name = 'ticket';
        this.API = APIService;
        this.$mdDialog = $mdDialog;
    }

    approve(){
        let newTicket = this.ticket;
        newTicket.status = "Aprovuar";
        this.API.put(`/tickets/${this.ticket._id}`, newTicket)
        .then((res) => {
            console.log(res);
            this.ticket = newTicket;
        });
    }

    cancel(){
        let newTicket = this.ticket;
        newTicket.status = "Anulluar";
        this.API.put(`/tickets/${this.ticket._id}`, newTicket)
        .then((res) => {
            console.log(res);
            this.ticket = newTicket;
        });
    }

    attemptApprove(ev){
        let confirm = this.$mdDialog.confirm()
            .title('Aprovo kerkesen')
            .textContent('Jeni te sigurt qe doni te aprovoni kete kerkese?')
            .targetEvent(ev)
            .ok('Po')
            .cancel('Jo');

        this.$mdDialog.show(confirm).then(() => {
            this.approve();
        },
        () => {

        });
    }

    attemptCancel(ev){
        let confirm = this.$mdDialog.confirm()
            .title('Anullo kerkesen')
            .textContent('Jeni te sigurt qe doni te anulloni kete kerkese?')
            .targetEvent(ev)
            .ok('Po')
            .cancel('Jo');

        this.$mdDialog.show(confirm).then(() => {
            this.cancel();
        },
        () => {
            
        });
    }
}

export default TicketController;
