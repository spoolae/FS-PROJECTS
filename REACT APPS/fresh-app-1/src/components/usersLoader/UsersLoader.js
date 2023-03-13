import React, { Component } from "react";

import styles from "./UsersLoader.module.scss";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
      selectedNationality: "",
      selectedGender: "",
    };
  }

  load = () => {
    const { currentPage, selectedNationality, selectedGender } = this.state;
    this.setState({ isPending: true });
    let url = `https://randomuser.me/api/?results=10&page=${currentPage}`;
    if (selectedNationality) {
      url += `&nat=${selectedNationality}`;
    }
    if (selectedGender) {
      url += `&gender=${selectedGender}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, selectedNationality, selectedGender } = this.state;
    if (
      currentPage !== prevState.currentPage ||
      selectedNationality !== prevState.selectedNationality ||
      selectedGender !== prevState.selectedGender
    ) {
      this.load();
    }
  }

  mapUsers = (user) => (
    <li key={user.login.uuid}>
      {user.name.first} {user.name.last} ({user.gender}) {user.nat}:{" "}
      <span>{user.email}</span>
    </li>
  );

  handlePrevBtn = () => {
    if (this.state.currentPage > 1) {
      this.setState((state) => ({ currentPage: state.currentPage - 1 }));
    }
  };

  handleNextBtn = () =>
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));

  handleNationalitySelect = (event) => {
    this.setState({ selectedNationality: event.target.value });
  };

  handleGenderCheckbox = (event) => {
    const gender = event.target.checked ? event.target.value : "";
    this.setState({ selectedGender: gender });
  };

  render() {
    const { users, isPending, error, currentPage } = this.state;
    if (error) {
      return <div className={styles["users-loader"]}>Error!</div>;
    }

    const nationalities = [
      "",
      "AU",
      "BR",
      "CA",
      "CH",
      "DE",
      "DK",
      "ES",
      "FI",
      "FR",
      "GB",
      "IE",
      "IR",
      "NO",
      "NL",
      "NZ",
      "TR",
      "US",
    ];

    return (
      <div className={styles["users-loader"]}>
        <h2>Users List</h2>
        <div>
          <button onClick={this.handlePrevBtn}>&lt; Prev</button>
          <strong> {currentPage} </strong>
          <button onClick={this.handleNextBtn}> Next &gt;</button>
        </div>
        <div>
          <label htmlFor="nationality-select">Nationality:</label>
          <select
            id="nationality-select"
            value={this.state.selectedNationality}
            onChange={this.handleNationalitySelect}
          >
            {nationalities.map((nationality) => (
              <option key={nationality} value={nationality}>
                {nationality || "All"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="gender-checkbox">Gender:</label>
          <input
            id="gender-checkbox"
            type="checkbox"
            value="male"
            checked={this.state.selectedGender === "male"}
            onChange={this.handleGenderCheckbox}
          />
          <label htmlFor="gender-checkbox">Male</label>
          <input
            id="gender-checkbox"
            type="checkbox"
            value="female"
            checked={this.state.selectedGender === "female"}
            onChange={this.handleGenderCheckbox}
          />
          <label htmlFor="gender-checkbox">Female</label>
        </div>
        {isPending ? (
          <div className={styles["loader"]}>Loading...</div>
        ) : (
          <ul className={styles["users-list"]}>
            {users.map((user) => this.mapUsers(user))}
          </ul>
        )}
      </div>
    );
  }
}

export default UsersLoader;
