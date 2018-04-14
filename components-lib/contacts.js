'use strict';

var Contacts = React.createClass({
  displayName: 'Contacts',

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function render() {
    var contacts = this.props.items.map(function (contact) {
      return React.createElement(Contact, { item: contact, key: contact.id });
    });

    return React.createElement(
      'ul',
      { className: 'contactList' },
      contacts
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
//# sourceMappingURL=contacts.js.map