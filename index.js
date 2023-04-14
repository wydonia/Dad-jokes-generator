const btnEl = document.getElementById("btn");
const jokeEL = document.getElementById("joke")
const apiKey = "OpafnZaX9UJyRYKzMsbh4g==A43jnUmwZC5ptObC";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};


const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke (){
    try {
    jokeEL.innerText ="Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options)
    const data = await response.json();

btnEl.disabled = false;
btnEl.innerText = "Tell me a joke";

    jokeEL.innerText = data[0].joke;
} catch (error){
    jokeEL.innterText = "An error happened, Try again later";
    console.log (error);
}
}
btnEl.addEventListener("click", getJoke);
