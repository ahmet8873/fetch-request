class Request{


    get(url){

        return new Promise((resolve,reject)=>{
        
        fetch(url)
        .then(Response=>Response.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))


        })

      
    }

    post(url,data){

        return new Promise((resolve,reject)=>{

         fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          .then(resolve=>resolve.json())
          .then(data=>resolve(data))
          .catch(err=>reject(err))


        })
    
    }

    put(url,data){

        fetch(url,{ 
            method: 'PUT',
            body: JSON.stringify(data),
             headers: {
             'Content-type': 'application/json; charset=UTF-8',
        },})
        .then(resolve=>resolve.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }

    delete(url){

        return new Promise((resolve,reject)=>{

            fetch(url,{method:'DELETE'})
            .then(response=>resolve("veri silindi"))
            .catch(err=>reject(err))


    })
        
        


    }
}
const request=new Request();

// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data=>{
//     albums=data;
//     console.log(albums)
// })
// .catch(err=>console.log(err));
// ---------------------------------------
    // request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"tarkaan"})
    // .then(data=>console.log(data))
    // .catch(err=>console.log(err))

// ------------------------------------------------------------------

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:1,title:"karmaa"});
// // bunu da yukaridaki fetc i promise icine alarak buradan donus alabiliriz

// --------------------------------------------------------------------
request.delete("https://jsonplaceholder.typicode.com/albums/1").then(resolve=>console.log(resolve))
.catch(err=>console.log(err))