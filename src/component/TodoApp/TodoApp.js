import React, { Component } from "react";
import "./TodoApp.css";
class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    // const allItems =this.state.items;
    // allItems.push(input)
    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  deleteItem = (key) => {
    // const allItems = this.state.items;
    // allItems.splice(key,1);
    this.setState({
      // items:allItems
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  render() {
    const { input, items } = this.state;
    console.log(items);

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TodoApp</h1>

          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter your task"
          />
        </form>
        <ul>
          {items.map((data, index) => {
            return (
              <li key={index}>
                {" "}
                {data}{" "}
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => this.deleteItem(index)}
                ></i>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
