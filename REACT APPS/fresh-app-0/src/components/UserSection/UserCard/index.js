import React from "react";

const UserCard = (props) => {
  const {
    user: { id, firstName, lastName, isSelected },
    userSelector,
  } = props;
  const styles = { color: isSelected ? "teal" : "pink" };
  const handleSelector = () => {
    userSelector(id);
  };
  return (
    <article style={styles} onClick={handleSelector}>
      <h3>
        <em>{id}) </em>
        {firstName} {lastName}
      </h3>
    </article>
  );
};

export default UserCard;
