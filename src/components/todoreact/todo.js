import React ,{useState} from 'react';
import "./style.css";

const Todo = () => {
    const [inputData, setInputData]=useState("");
    const [items,setItems] = useState([]);
    //add items function
    const addItems=() => {
        if (! inputData){
            alert("Don't be lazy create and do some task")
        }
        else{
            const myNewInputData ={
                id : new Date().getTime().toString(),
                name : inputData,
            }
            setItems([...items,myNewInputData])
            setInputData("");

        }
    };
    //how to delete item

    const deleteItem =(index) =>{
     const updatedItems =items.filter((currElem)=>{
         return currElem.id !==index;
     });
     setItems(updatedItems);
    };
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
                    value={inputData}
                    onChange={(event) => setInputData(event.target.value)}
                    />
                    <i className="fa fa-plus add-btn" onClick={addItems}></i>
                </div>

                {/* show our items*/}
                <div className="showItems">

                    {items.map((currElem, ) => {
                     return (

                        <div className="eachItem" key={currElem.id}>
                        <h3>{currElem.name}</h3>
                        <div className="todo-btn">
                        <i className="far fa-edit add-btn"></i>
                        <i className="far fa-trash-alt add-btn" onClick={() =>
                        deleteItem(currElem.id)}></i>

                        </div>
                        </div>
                     
                     );

                     
                    }  ) }
                    

                </div>
                
                
                {/* remove all button*/}
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
