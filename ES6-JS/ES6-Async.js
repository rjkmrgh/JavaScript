
//Callback Hell---------------------------------------------------------------------->
const getTime = (T) =>{
    setTimeout(()=>{
        console.log('Timeout 1');
        setTimeout(() => {
            console.log('Timeout 2');
            setTimeout(() => {
                console.log('Timeout 3');
            }, T);
        }, T);
    }, T)
}
getTime(1000);

//Promises--------------------------------------------------------------------------->
const getProm =  (T)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Timeout 1');
        }, T);
    });
}
const getProm1 =  (T)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Timeout 2');
        }, T);
    });
}
const getProm2 =  (T)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Timeout 3');
        }, T);
    });
}

getProm(1000)
    .then((msg) => {
        console.log(msg);
        return getProm1(1000);
    })
    .then((msg) => {
        console.log(msg);
        return getProm2(1000);
    })
    .then((msg) => {
        console.log(msg)
    }).catch((err) =>{
        console.log(err);
    });


//Async/Await---------------------------------------------------------------------->
 async function getAsync (T){
    let msg = await getProm(T);
    console.log(msg);
    let msg1 = await getProm1(1000);
    console.log(msg1);
    let msg2 = await getProm2(1000);
    console.log(msg2);
};

getAsync(1000);


//Ajax with Promise
const url = 'https://www.metaweather.com/api/location/2487956/';
fetch(url).then(resp =>{
    console.log(resp);
    return resp.json(); // convert to json.
}).then(resp =>{
    console.log(resp);
}).catch(err => {
    console.log(err);
})

//Ajax with Async
async function getAjax(){
    const url = 'https://www.metaweather.com/api/location/2487956/';
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
}