/* eslint-disable no-console */
/* eslint-disable react/button-has-type */

// import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import React, {lazy, useState, useEffect} from "react";


const T2 = lazy(()=> import("./t2"));


const PageHeaderWrapper=(prop)=>{
    console.log("子组件刷新...");
   return (
     <>
       <div>{prop.loading}</div>
       <div>{prop.content}</div>
     </>
    )
}

// React.memo()可接受2个参数，第一个参数为纯函数的组件，第二个参数用于对比props控制是否刷新，与shouldComponentUpdate()功能类似。
const Memo = React.memo(PageHeaderWrapper);

    // const Memo = React.memo(PageHeaderWrapper, (prevProps, nextProps) => {
    //     console.log(prevProps, nextProps);
    //     return  prevProps.loading === nextProps.loading
    //   });
    
const rand=()=>{
    // console.log("define rand");
    const a=parseInt(Math.random()*10, 10);
    if(a>=5){
        return 1
    }
    return 0
    
}
const test=()=>{
    const [count, setCount] = useState(1);
    console.log('test 组件：',count);
    useEffect(() => {
        console.log('test组件：useEffect test',count);
        document.title = `You clicked ${count} times`;
        // console.log('hello:', document.querySelector("#hello").innerHTML);

        // 让我们传给useEffect的副作用函数 返回一个新的函数。这个新的函数将会在组件下一次重新渲染之后执行。
        return function cleanup() {
            console.log('useEffect hello:',  document.querySelector("#hello").innerHTML);
            console.log('test组件：useEffect return ',count);
        };
    }, []);  // 给useEffect传第二个参数。用第二个参数来告诉react只有当这个参数的值发生改变时，才执行我们传的副作用函数（第一个参数）。

    return (
      <>
        <Memo loading={count} content='test2' />
        <div id="hello">Hell world!{count}</div>
        
        <React.Suspense fallback="T2 loading...">          
          <T2 message={count} />          
        </React.Suspense>

        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(rand)}>
                Click me
          </button>
        </div>
      </>
    );
}



// function Example() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }




export default test;
