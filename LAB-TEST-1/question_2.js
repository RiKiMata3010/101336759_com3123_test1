const resolvedPromise = () =>
    new Promise((resolve, reject)=>{
        setTimeout(resolve({ message : "delayed success!" }), 500)
    });

resolvedPromise().then((msg) => console.log(msg));

const rejectPromise = () =>
    new Promise((resolve, reject)=>{
        setTimeout(reject({ error : "delayed exception!"}), 500)
    });

rejectPromise().then((msg) => console.log(msg));


