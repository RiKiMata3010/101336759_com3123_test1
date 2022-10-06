const lowerCase = (arr) =>
    new Promise((resolve, reject) => {
        if (!arr || arr.length === 0 || !Array.isArray(arr)) 
            reject("Error");
            resolve(arr.filter((item) => isNaN(item)).map((word) => word.toLowerCase()  
        ));
    });

    lowerCase(["Phoenix", 101336759, "ANI", "TeSt PrOdUcT", true, "sEe ME RollIn", 0.39])

        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))