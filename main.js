const main =document.getElementById('main');
const loading = document.querySelector(".loading")      //querySelector use cheyyannel css le kodukkunna pole kodukkannam
const theme = document.getElementById("theme")
const root = document.querySelector(":root")
const searchIcon = document.getElementById("search-icon")
const moon = document.getElementById("moon")
const modetext = document.querySelector(".mode-text")
const triangle = document.querySelector(".triangle")
const selector = document.querySelector(".selector")
const options = document.querySelector(".options")

countries =[]



async function runProcess(){

    try{
       const res = await fetch ("https://restcountries.com/v2/all")
        const data =await res.json();
        countries =data
        loading.innerHTML=""  ;          // fetch cheyth kazinjal gif pokum (src onnum illa);

        countries.forEach( country => {
            //create the main contanier
            const countryContainer =document.createElement('div');
            countryContainer.classList.add('country');

            // create flag part
            const flagContainer = document.createElement('div');
            flagContainer.classList.add('flag-countainer');

            const imgContainer = document.createElement('img')
            imgContainer.classList.add('flag')
            imgContainer.src = country.flag

            // append elements  parent.appendchild(child)
            flagContainer.appendChild(imgContainer)
            countryContainer.appendChild(flagContainer)

            // create country part
            const countryDetails = document.createElement('div')
            countryDetails.classList.add('country-details')
            countryContainer.appendChild(countryDetails)

            const countryName = document.createElement('h2')
            countryName.classList.add('country-name')
            countryName.textContent =country.name;

            countryDetails.appendChild(countryName);
            

            const population = document.createElement('span');
            population.innerHTML = `<strong>Population : </strong> ${country.population}<br>`;
            countryDetails.appendChild(population)

            const region = document.createElement('span');
            region.innerHTML = `<strong>Region : </strong> ${country.region}<br>`;
            countryDetails.appendChild(region)

            const capital = document.createElement('span');
            capital.innerHTML = `<strong>Capital : </strong> ${country.capital}<br>`;
            countryDetails.appendChild(capital)

            // connecting to html main div
            main.appendChild(countryContainer);
        })

        

    }
    catch(error){

    }
}
runProcess();

let mode =localStorage.getItem("mode");

theme.addEventListener("click",()=>{
    if (mode === "dark"){
        localStorage.setItem('mode', "light");           //already dark annel light akkum
    }
    else{
        localStorage.setItem('mode', "dark")
    }
    mode= localStorage.getItem("mode");
    changeTheme();
})          //ee add event listner kond mode marun but color change kannanam enkil vere function vech color mattannam


function changeTheme(){
    if (mode === "dark"){
        root.style.setProperty("--bg","#202c37");
        root.style.setProperty("--text","#fff");
        root.style.setProperty("--lbg","#2b3945");
        searchIcon.src ="icons/search-regular.svg";
        moon.src ="icons/moon-regular.svg";
        modetext.innerHTML="Light mode"

    }
else{
        root.style.setProperty("--bg","#fafafa");
        root.style.setProperty("--text","#111517");
        root.style.setProperty("--lbg","#fff");
        searchIcon.src ="icons/search-solid.svg";
        moon.src ="icons/moon-solid.svg";
        modetext.textContent="Dark mode"

}

}

let rotation = 0;
selector.addEventListener("click", () => {
    if (rotation === 0) {
        rotation = 90;
        triangle.style.transform = `rotate(${rotation}deg)`;
        options.style.display = "list-item";
    } else {
        rotation = 0;
        triangle.style.transform = `rotate(${rotation}deg)`;
        options.style.display = "none"; // Hide options when rotating back to 0 degrees
    }
});

