'use strict';

var Contact = React.createClass({
  displayName: 'Contact',

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'contactItem' },
      React.createElement('img', { className: 'contactImage', src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico' }),
      React.createElement(
        'p',
        { className: 'contactLabel' },
        'Imi\u0119: ',
        this.props.item.firstName
      ),
      React.createElement(
        'p',
        { className: 'contactLabel' },
        'Nazwisko: ',
        this.props.item.lastName
      ),
      React.createElement(
        'a',
        { className: 'contactEmail', href: 'mailto: {this.props.item.email}' },
        this.props.item.email
      )
    );
  }
});

// class Contact extends React.Component {
//   render() {
//     return (
//       <div className='contactItem'>
//         <img className='contactImage' src='http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico' />
//         <p className='contactLabel'>Imię: {this.props.item.firstName}</p>
//         <p className='contactLabel'>Nazwisko: {this.props.item.lastName}</p>
//         <a className='contactEmail' href='mailto: {this.props.item.email}'>{this.props.item.email}</a>
//       </div>
//     );
//   }
// }

// Contact.propTypes = {
//   item: React.PropTypes.object.isRequired
// };
//# sourceMappingURL=contact.js.map