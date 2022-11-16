let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();
request.onload = () =>{
    console.log(request);
    if(request.status == 200){
        console.log(JSON.parse(request.response));
    }
    else{
        console.log(request.status);
        console.log(request.statusText);
    }
};

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
