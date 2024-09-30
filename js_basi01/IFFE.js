

//IIFE INVOKED
(()=>
    {
        console.log("my name is khan");
    })();


(()=>
    {
        console.log("my name is khan");
    })();

((name)=>(console.log(`my name is ${name}`)))("aman");

(() => {
    const obj = {
        name: "aman",
        welcome: () => (console.log("hello there"))
    };
    obj.welcome(); // Call the method here
})();
