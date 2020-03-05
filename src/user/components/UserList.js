import React from "react";

import UserItem from "../components/UserItem";
import "./UserList.css";
import Card from "../../shared/components/UIElements/Card";

const UserList = props => {
  if (props.items.length === 0) {
    return (
      <Card className="center">
        <h3>No User(s) found</h3>
      </Card>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map(user => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
