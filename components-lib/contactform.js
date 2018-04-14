'use strict';

var ContactForm = React.createClass({
  displayName: 'ContactForm',

  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function render() {
    return React.createElement(
      'form',
      { className: 'contactForm' },
      React.createElement('input', { type: 'text', placeholder: 'Imi\u0119', value: this.props.contact.firstName }),
      React.createElement('input', { type: 'text', placeholder: 'Nazwisko', value: this.props.contact.lastName }),
      React.createElement('input', { type: 'email', placeholder: 'Email', value: this.props.contact.email })
    );
  }
});

// class ContactForm extends React.Component {
//   render() {
//     return (
//       <form className='contactForm'>
//         <input type='text' placeholder='Imię' value={this.props.contact.firstName} />
//         <input type='text' placeholder='Nazwisko' value={this.props.contact.lastName} />
//         <input type='email' placeholder='Email' value={this.props.contact.email} />
//       </form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   contact: React.PropTypes.object.isRequired
// }
//# sourceMappingURL=contactform.js.map