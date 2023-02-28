import React from "react";

const SelectedUsers = (props) => {
  const { users } = props;
  const selectedUsers = users.filter((user) => user.isSelected);
  const mapUsers = ({ id, firstName }) => <li key={id}>{firstName}</li>;
  return <ul>{selectedUsers.map(mapUsers)}</ul>;
};

export default SelectedUsers;
