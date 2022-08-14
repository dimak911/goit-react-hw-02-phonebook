import PropTypes from 'prop-types';
import { Contact } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, deleteContact }) => (
  <Contact>
    {name}: {number}{' '}
    <button type="button" onClick={() => deleteContact(id)} data-id={id}>
      Delete
    </button>
  </Contact>
);

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
