import React ,{useState , useEffect} from 'react';
import "./style.css";
//Useing local storage to save the data permanently
const getLocalData =() =>{
    const list =localStorage.getItem("myTodoList");
    if (list) {
        return JSON.parse(list);
    }
    else{
        return [];
    }
}
const Todo = () => {
    const [inputData, setInputData]=useState("");
    const [items,setItems] = useState(getLocalData());
    const [isEditItem , setIsEditItem] =useState("");
    const [toggleButton ,setToggleButton] =useState(false);

    //add items function
    const addItems=() => {
        if (! inputData){
            alert("Don't be lazy create and do some task");
        }
        else if (inputData && toggleButton) {
            setItems(
                items.map((currElem) => {
                if(currElem.id === isEditItem ) {
                    return{...currElem, name:inputData};
                }
                return currElem;
            })
            );
            setInputData("");
            setIsEditItem(null);
            setToggleButton(false);
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
    //edit the items

    const editItem =(index) => {
        const item_todo_edited =items.find( (currElem) =>{
            return currElem.id === index;
        });
        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
    }
    //how to delete item

    const deleteItem =(index) =>{
     const updatedItems =items.filter((currElem)=>{
         return currElem.id !==index;
     });
     setItems(updatedItems);
    };
    const removeAll =()=>{
               setItems([]);
    };
    //adding local storage functionality
    useEffect (() => {
        localStorage.setItem("myTodoList", JSON.stringify(items));
    } ,[items]);
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
                    { toggleButton ? (
                        <i className="far fa-edit add-btn" onClick={addItems}></i>
                    ) :(
                        <i className="fa fa-plus add-btn" onClick={addItems}></i>
                    )
                    }
                   
                    
                </div>

                {/* show our items*/}
                <div className="showItems">

                    {items.map((currElem, ) => {
                     return (

                        <div className="eachItem" key={currElem.id}>
                        <h3>{currElem.name}</h3>
                        <div className="todo-btn">
                        <i className="far fa-edit add-btn" onClick={() => editItem(currElem.id)}></i>
                        <i className="far fa-trash-alt add-btn" onClick={() =>
                        deleteItem(currElem.id)}></i>

                        </div>
                        </div>
                     
                     );

                     
                    }  ) }
                    

                </div>
                
                
                {/* remove all button*/}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                     <span> CHECK LIST</span>
                    </button>
                </div>

            </div>
        </div>
        </>
    );
};

export default Todo
