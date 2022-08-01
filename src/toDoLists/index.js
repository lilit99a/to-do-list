import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd";
import ToDoItems from "../toDoItems";

const ToDoLists = ({ allData, setAllData, activPage }) => {
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    const filterData = allData.filter((e) => e.type === activPage);
    setCurrentData(filterData);
  }, [activPage, allData]);

  const handleOnDragEnd = (result) => {
    const items = Array.from(allData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setAllData(items);
    console.log(result, "result");
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {currentData.map((toDo, i) => {
                return (
                  <Draggable
                    key={toDo.id}
                    draggableId={"draggable-" + toDo.id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <div
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={{
                          ...provided.dragHandleProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 0 .4rem #666"
                            : "none",
                        }}
                        {...provided.draggableProps}
                        key={toDo?.id}
                      >
                        <ToDoItems
                          toDo={toDo}
                          allData={allData}
                          setAllData={setAllData}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

ToDoLists.propTypes = {
  allData: PropTypes.object.isRequired,
  setAllData: PropTypes.func.isRequired,
  activPage: PropTypes.array.isRequired,
};

export default ToDoLists;
