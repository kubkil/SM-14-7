const Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render() {
    let contacts = this.props.items.map(function (contact) {
      return <Contact item={contact} key={contact.id} />
    });

    return (
      <ul className='contactList'>{contacts}</ul>
    );
  }
});

// class Contacts extends React.Component {
//   render() {
//     let contacts = this.props.items.map(function (contact) {
//       return <Contact item={contact} key={contact.id} />
//     });

//     return (
//       <ul className='contactList'>{contacts}</ul>
//     );
//   }
// }

// Contacts.propTypes = {
//   item: React.PropTypes.object.isRequired
// };