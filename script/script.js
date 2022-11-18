let request = new XMLHttpRequest();
request.open("GET", "https://mocki.io/v1/6b56a448-6214-4f29-b381-fd466a855ea6");
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

