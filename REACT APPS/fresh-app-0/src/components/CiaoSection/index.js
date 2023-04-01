import React, { Component } from "react";
import CiaoList from "./CiaoList";
import SortButton from "./SortButton";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 10, firstName: "Brad", lastName: "Pitt" },
        { id: 7, firstName: "Tom", lastName: "Rot" },
        { id: 3, firstName: "Jon", lastName: "Snow" },
        { id: 12, firstName: "Fred", lastName: "Mercury" },
        { id: 9, firstName: "Georg", lastName: "Clune" },
      ],
      isDirectGrowthById: true,
      isDirectGrowthByFirstName: true,
      isDirectGrowthByLastName: true,
    };
  }
  sortById = () => {
    const { users, isDirectGrowthById } = this.state;
    const newUsers = [...users];
    newUsers.sort((a, b) => (isDirectGrowthById ? a.id - b.id : b.id - a.id));
    this.setState({ users: newUsers, isDirectGrowthById: !isDirectGrowthById });
  };
  sortByFirstName = () => {
    const { users, isDirectGrowthByFirstName: direction } = this.state;
    const newUsers = [...users];
    newUsers.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return direction ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return direction ? -1 : 1;
      }
      return 0;
    });
    this.setState({ users: newUsers, isDirectGrowthByFirstName: !direction });
  };
  sortByLastName = () => {
    const { users, isDirectGrowthByLastName: direction } = this.state;
    const newUsers = [...users];
    newUsers.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return direction ? 1 : -1;
      }
      if (a.lastName < b.lastName) {
        return direction ? -1 : 1;
      }
      return 0;
    });
    this.setState({ users: newUsers, isDirectGrowthByLastName: !direction });
  };

  render() {
    const {
      users,
      isDirectGrowthById,
      isDirectGrowthByFirstName,
      isDirectGrowthByLastName,
    } = this.state;
    return (
      <>
        <SortButton
          text="sort by id"
          direction={isDirectGrowthById}
          onClick={this.sortById}
        />
        <SortButton
          text="sort by first name"
          direction={isDirectGrowthByFirstName}
          onClick={this.sortByFirstName}
        />
        <SortButton
          text="sort by last name"
          direction={isDirectGrowthByLastName}
          onClick={this.sortByLastName}
        />
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
