import { useState } from 'react';

export const App = () => {
 function Aboutpage() {
  return (    
  <h1> こんにちは</h1>
  );
 }
const [count,setcount]=useState(0);

   function buttonclic(){
    setcount(count+1);
   }

  function Mybutton({count,onclic}:any){
    return(
      <button onClick={onclic}>
       Clicked {count} Time
      </button>
    )
  }
  function countdel({count}:any){
    setcount(count=0);
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
     <Aboutpage />
     <Mybutton count={count} onclic={buttonclic}/>
     <Mybutton count={count} onclic={buttonclic}/>
     <Mybutton count={count} onclic={countdel}/>
    </div>
  );
}
