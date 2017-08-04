import template from './ticket.html';
import controller from './ticket.controller';
import './ticket.scss';

let ticketComponent = {
  restrict: 'E',
  bindings: {
    ticket: '='
  },
  template,
  controller
};

export default ticketComponent;
