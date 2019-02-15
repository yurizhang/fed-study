/* eslint-disable no-console */
/* eslint-disable react/button-has-type */

import React, {useState, useEffect} from "react";

const T2=(prop)=>{

   const [message, setMessage]=useState(()=>{

        return 'start...';
   });

    function temp(){
        axios.get('http://route.showapi.com/1764-1').then(response=> {
            console.log(response.data.showapi_res_error);
            setMessage(response.data.showapi_res_error);
        })
   }   
   useEffect( () => {
         console.log("子组件t2 effect");
         temp();
      },[]
   );  // 给useEffect传第二个参数。用第二个参数来告诉react只有当这个参数的值发生改变时，才执行我们传的副作用函数（第一个参数）。
   return (
     <>
       <div>T2. message: {message} : prop: {prop.message}</div>   
     </>
    )
}

export default T2;