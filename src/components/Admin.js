import React from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';
import AdminEventList from './AdminEventList';
import PropTypes from 'prop-types';

function Admin(props) {
  return(
    <div>
      <AddForm />
      <AdminEventList
        addresses={props.addresses}
      />
    </div>
  );
}

Admin.propTypes = {
  addresses: PropTypes.object
}

export default Admin;
