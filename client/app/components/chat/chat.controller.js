import io from 'socket.io-client';

class ChatController {
    constructor(SessionService) {
        "ngInject";
        this.name = 'chat';
        this.session = SessionService;
        this.socket = io('http://13.69.76.128:3000');

        this.me = {
            username: this.session.getUsername(),
            fullname: this.session.getFullname()
        };

        this.messages = [
            // {
            //     sender: 'Kleo Xhindoli',
            //     isMine: true,
            //     message: 'Hello world!'
            // },
            // {
            //     sender: 'Lefter Probduari',
            //     isMine: false,
            //     message: 'Hello too!'
            // }
        ]
        this.socket.emit('joined', this.me);

        this.socket.on('message', this.handleNewMessage.bind(this));

        this.$onDestroy = () => {
            this.socket.disconnect();
        }
    }

    sendMessage(message) {
        this.message = '';
        this.socket.emit('message', {sender: this.me, message: message});
        this.messages.push({
            isMine: true,
            sender: this.me.fullname,
            message: message
        });
    }

    onKeyup(ev){
        if(ev.key === 'Enter') this.sendMessage(this.message);
    }

    handleNewMessage(data){
        if(data.sender.username === this.me.username)
            return
        let msgObject = {
            isMine: false,
            sender: data.sender.fullname,
            message: data.message
        }
        this.messages.push(msgObject);
    }

}

export default ChatController;
