import { useState } from "react";

const AddTask = ({addTask}) => {
  const[text,Settext]=useState("")
  const[day,SetDay]=useState("")
  const formSubmit =(e) => {
    e.preventDefault();

    addTask({text,day,isdone:false});
    Settext("");
    SetDay("");
    
  }
  return (
      <form className="add-form" onSubmit={formSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            id="task"
            name="text"
            type="text"
            placeholder="AddTask"
            required
            onChange={(e)=>Settext(e.target.value)}
            value={text}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            id="day"
            name="day"
            type="text"
            placeholder="Add Day & Time"
            required
            onChange={(e)=>SetDay(e.target.value)}
            value={day}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    );
  };
  
  export default AddTask;