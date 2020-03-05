import React from "react";

import "./PlaceList.css";
import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <Card className="place-list center">
        <h2>No Place Found. Add New One...</h2>
        <button>Share Place</button>
      </Card>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
