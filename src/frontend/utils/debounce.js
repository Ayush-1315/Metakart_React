const debounce = (fun,delay=200) => {
    let timerId;
     return function (...args) {
       clearTimeout(timerId);
       timerId = setTimeout(() => {
         fun(...args);
       },delay);
     };
   };
   export { debounce };