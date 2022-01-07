import axios from "axios";
import { useState } from "react";
export default function App(){
  return (
    <>
    < Myapp/>
    </>
  );
}

function Myapp(){
  const [applicationName, setApplicationName ] = useState("");
  const [studentName , setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [list,setList ]= useState([]);

  const handleApplicationNameChange = (e) => {
    setApplicationName(e.target.value);
  }

  const handleStudentNamechange = (e) => {
    setStudentName(e.target.value);
  }

  const handleStudentIdchange = (e) => {
    setStudentId(e.target.value);
  }

  const addUser = async () => {
    const url = "http://localhost:4000/1";
    const data = {
      applicationName: applicationName,
      studentName:studentName,
      studentId:studentId,
    };
   await axios.post(url,data);

   const newList = [data, ...list];
   setList(newList);
  }

  const getUser = async () => {
    const url = "http://localhost:4000/2";
  
   const result = await axios.get(url);
   const list = result.data;
   const newList = [ ...list];
   setList(newList);
  };

return (
  <div>
  <div >
    <h1 >
      <input 
    type="text" 
    value={applicationName} 
     onChange={handleApplicationNameChange}
    />
     </h1>
     <h4> <input 
    type="text" 
    value={applicationName} 
     onChange={handleStudentNamechange}
    /></h4>
    <h4>
    <input 
    type="text" 
    value={applicationName} 
     onChange={handleStudentIdchange}
    />
    </h4>
  </div>
  <div>
    <input type="text" placeholder="Let's chat here"/>
    <input type="button" placeholder="SEND" onClick={getUser}/>
  </div>
  <div>
    {list.map((item,index) =>(
      <div key={index}>
        {item.applicationName}{item.studentName}{item.studentId}
        </div>
    ))}
  </div>
  </div>
);
};