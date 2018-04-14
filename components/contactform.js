const ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <form className='contactForm'>
        <input type='text' placeholder='Imię' value={this.props.contact.firstName} />
        <input type='text' placeholder='Nazwisko' value={this.props.contact.lastName} />
        <input type='email' placeholder='Email' value={this.props.contact.email} />
      </form>
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