const lowerCaseWords = (arr)=>
    new Promise((resolve, reject)=>{
        if (!arr || arr.length === 0 || !Array.isArray(arr)) reject("Invalid inuput array");
        resolve(arr.filter((item) => isNaN(item)).map((word)=>word.lowerCase()));
    });

    lowerCaseWords(["Phoenix", 101336759, "ANI", "TeSt", true])
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))