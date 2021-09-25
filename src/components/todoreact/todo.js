import React from 'react';
import "./style.css";

const Todo = () => {
    return (
        <><div className ="main-div">
            <div className="child-div">
                <figure>
                    <img src ="./images/todo.svg" alt= "todo-logo" />
                    <figcaption>Add Your List here</figcaption>
                </figure>
                <div className="addItems">
                    <input type ="text"
                    placeholder="✒ ADD ITEMS"
                    className="form-control"
                    />
                    <i className="fa fa-plus add-btn"></i>
                </div>

                {/* show our items*/}
                <div className="showItems">
                    <div className="eachItem">
                        <h3>Apple</h3>
                        <div className="todo-btn">
                        <i className="far fa-edit add-btn"></i>
                        <i className="far fa-trash-alt add-btn"></i>

                        </div>

                    </div>
                </div>
                {/* sremove all button*/}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All">
                     <span> CHECK LIST</span>
                    </button>
                </div>

            </div>
        </div>
        </>
    );
};

export default Todo
