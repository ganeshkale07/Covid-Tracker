document.querySelector("input")
.addEventListener("change", function(){
        fetch("https://api.covid19api.com/summary")
    .then( (api_data) => {
        return api_data.json();
    })
    .then( (specific_data) => {
        const user_Input = document.querySelector("#countryName").value.toLowerCase();
        const country_array = specific_data.Countries;
        console.log(user_Input);
        
        for( let i = 0; i < country_array.length ; i++){
            const country = specific_data.Countries[i].Country.toLowerCase();
            if(country == user_Input){
                console.log();
                document.querySelector("h2").innerHTML = specific_data.Countries[i].Country;
                document.querySelector("h4").innerHTML = specific_data.Countries[i].CountryCode;
                document.querySelector("h6").innerHTML = specific_data.Countries[i].Date;
                document.querySelector(".totalConfirmed").innerHTML = specific_data.Countries[i].TotalConfirmed;
                document.querySelector(".totalDeath").innerHTML = specific_data.Countries[i].TotalDeaths;
                document.querySelector(".totalRecovered").innerHTML = specific_data.Countries[i].TotalRecovered;
                
            }
            /*** these is for coming out of loop if country name does not match ****/
            // else{
            //     alert(` "${user_Input}"  You have misspelled or such country does not exist`);
            //     return;
            // }
            
        }
        
    })
    .catch( (error) => {
        console.log(`Error occured is : ${error}`);
        alert(`Error occured is : ${error}`);
    });
})

document.querySelector("button.clear")
.addEventListener("click" ,function(){
    location.reload();
})

