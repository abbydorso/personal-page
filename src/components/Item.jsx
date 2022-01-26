import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "react-bootstrap";
// import CardContent from '@material-ui/core/CardContent';

const Item = (props) => {
  console.log(props);

  return (
    <Draggable draggableId={props.text} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            style={{
              width: "50rem",
              height: "10rem",
              borderRadius: "7%",
              marginBottom: "2rem",
              border: "2px black",
              backgroundColor: "#fff8e7",
              display: "block",
            }}
          >
            {props.text}
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default Item;
