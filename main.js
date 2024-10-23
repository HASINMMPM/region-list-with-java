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
const search = document.getElementById("search");
const searchcontainer = document.getElementById("search-container")


const asiaRegion = document.querySelector('.region[data-value="Asia"]')
const africaRegion = document.querySelector('.region[data-value="Africa"]')
const europeRegion = document.querySelector('.region[data-value="Europe"]')
const americasRegion = document.querySelector('.region[data-value="Americas"]')
const oceaniaRegion = document.querySelector('.region[data-value="Oceania"]')
const polarRegion = document.querySelector('.region[data-value="Polar"]')
const allRegion = document.querySelector('.region[data-value="All"]')



countries=[]



async function runProcess() {
    try {
        const res = await fetch("https://restcountries.com/v2/all");
        const data = await res.json();
        countries = data;
        loading.innerHTML = "";
        countries.forEach(country => {
            createCode(country);
        });

        allRegion.addEventListener('click', () => {
            main.innerHTML = ''; // Clear existing countries from the main container
            loading.innerHTML = `<img src="icons/loadingIcon.gif" alt="Loading..." />`;
            countries.forEach(country => {
                createCode(country);
            });

            loading.innerHTML = ""; // Remove loading indicator when done
        });


        asiaRegion.addEventListener('click', () => {
            main.innerHTML = ''; // Clear existing countries from the main container
            loading.innerHTML = `<img src="icons/loadingIcon.gif" alt="Loading..." />`;
        
            const asiaCountries = countries.filter(country => country.region === 'Asia');
            asiaCountries.forEach(country => {
                createCode(country);
            });

            loading.innerHTML = ""; // Remove loading indicator when done
        });

        africaRegion.addEventListener('click', () => {
            main.innerHTML = ''; // Clear existing countries from the main container
            loading.innerHTML = `<img src="icons/loadingIcon.gif" alt="Loading..." />`;
            const africaCountries = countries.filter(country => country.region === 'Africa');
            africaCountries.forEach(country => {
                createCode(country);
            });

            loading.innerHTML = ""; // Remove loading indicator when done
        });

        europeRegion.addEventListener('click', () => {
            main.innerHTML = ''; // Clear existing countries from the main container
            loading.innerHTML = `<img src="icons/loadingIcon.gif" alt="Loading..." />`;
            const europeCountries = countries.filter(country => country.region === 'Europe');
            europeCountries.forEach(country => {
                createCode(country);
            });
            loading.innerHTML = ""; // Remove loading indicator when done
        });

        americasRegion.addEventListener('click', () => {
            main.innerHTML = ''; // Clear existing countries from the main container
            loading.innerHTML = `<img src="icons/loadingIcon.gif" alt="Loading..." />`;
            const americaCountries = countries.filter(country => country.region === 'Americas');
            americaCountries.forEach(country => {
                createCode(country);
            });
            loading.innerHTML = ""; // Remove loading indicator when done
        });

        oceaniaRegion.addEventListener('click', () => {
            main.innerHTML = ''; // Clear existing countries from the main container
            loading.innerHTML = `<img src="icons/loadingIcon.gif" alt="Loading..." />`;
            const oceaniaCountries = countries.filter(country => country.region === 'Oceania');
            oceaniaCountries.forEach(country => {
                createCode(country);
            });
            loading.innerHTML = ""; // Remove loading indicator when done
        });

        polarRegion.addEventListener('click', () => {
            main.innerHTML = ''; // Clear existing countries from the main container
            loading.innerHTML = `<img src="icons/loadingIcon.gif" alt="Loading..." />`;
            const polarCountries = countries.filter(country => country.region === 'Polar');
            polarCountries.forEach(country => {
                createCode(country);
            });
            loading.innerHTML = ""; // Remove loading indicator when done
        });

        
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}

runProcess();


function createCode(country){
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
   
}

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


search.addEventListener("click", ()=>{
    
        const searchList = document.createElement('ul');
        searchList.classList.add('search-list');
    
        const searchItem = document.createElement('li'); 
        searchItem.classList.add('search-item');

        const searchhead = document.createElement("h3")
        searchhead.textContent =country.name;
    

        searchList.appendChild(searchItem)
        searchcontainer.appendChild(searchList)
        searchItem.appendChild(searchhead)

})

function filterCountries(input) {
    return countries.filter(country =>
        country.name.toLowerCase().includes(input.toLowerCase())
    );
}

search.addEventListener("input", () => {
    const searchTerm = search.value.trim(); // Trim any leading/trailing whitespace
    const filteredCountries = filterCountries(searchTerm);

    const searchList = document.createElement('ul');
    searchList.classList.add('search-list');

    filteredCountries.forEach(country => {
        const searchItem = document.createElement('li');
    searchItem.classList.add('search-item');

        const searchHead = document.createElement("h3");
        searchHead.textContent = country.name;

        // Add click event listener to show country on click
        searchHead.addEventListener("click", () => {
            alert(country.name); // Replace with your desired action (e.g., show country details)
        });

        searchItem.appendChild(searchHead);
        searchList.appendChild(searchItem);
    });

    // Clear previous search results
    while (searchcontainer.firstChild) {
        searchcontainer.removeChild(searchcontainer.firstChild);
    }

    searchcontainer.appendChild(searchList);
});