const resPromise = () =>
    new Promise((resolve, reject)=>{
        setTimeout(resolve({ message : "delayed success!" }), 500)
    });
    
resPromise().then((msg) => console.log(msg));

const rejPromise = () =>
    new Promise((resolve, reject)=>{
        setTimeout(reject({ error : "delayed exception!"}), 500)
    });

rejPromise().catch((msg) => console.log(msg));


