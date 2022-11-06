var form = document.getElementById("getinput");

form.addEventListener("submit", function (formSubmit) {
    formSubmit.preventDefault();
    var name = document.getElementById("name").value;
    fetch("https://countriesnow.space/api/v0.1/countries/population/cities", {
        method: "POST",
        body: JSON.stringify({
        "city": name
        }),
        headers: {
        "content-Type": "application/json; charset=UTF-8",
        },
    })
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        console.log(data.error);
        if(data.error){
            alert("Enter correct city name");
        }else{
            let details = document.getElementById("details");
            var entry = document.createElement('li');
            let text = "Name: "+name + "\tPopulation: "+data.data.populationCounts[0].value;
            entry.appendChild(document.createTextNode(text));
            details.appendChild(entry);
        }
        
    });
});