import React from "react";
import { Tabs, Tab } from "@mui/material";
import TodoList from "./TodoList";

function TabApp() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" />
        <Tab label="Todos" />
      </Tabs>
      <div>
        {value === 0 && <h1>Welcome to my Todolist!</h1>}
        {value === 1 && <TodoList />}
      </div>
    </div>
  );
  }
  export default TabApp;