window.onload = async () => {
    // /////////// task 1 //////////////////////////////////////
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(finalResult => {
    //         let people = finalResult;
    //         let roWEl = document.querySelector(".row");

    //         people.forEach(p => {
    //             let card = document.createElement('div');
    //             card.className = 'col-3 card shadow cursor-pointer';


    //             let cardBody = document.createElement('div');
    //             cardBody.className = 'card-body';

    //             let title = document.createElement('h5');
    //             title.innerText = p.name;
    //             title.className = 'card-title';

    //             let subtitle = document.createElement('h6');
    //             subtitle.innerText = p.username;
    //             subtitle.className = 'card-text';

    //             let email = document.createElement('a');
    //             email.innerHTML = p.email;
    //             email.className = 'link-info';
    //             email.href = p.email;
    //             email.setAttribute('target', '_blank');

    //             let address = document.createElement('ul');
    //             address.className = 'list-group list-group-flush';

    //             let street = document.createElement('li');
    //             street.className = 'list-group-item';
    //             street.innerHTML = `Street: ${p.address.street}`;

    //             let suite = document.createElement('li');
    //             suite.className = 'list-group-item';
    //             suite.innerHTML = `Suite: ${p.address.suite}`;

    //             let city = document.createElement('li');
    //             city.className = 'list-group-item';
    //             city.innerHTML = `City: ${p.address.city}`;

    //             let zipcode = document.createElement('li');
    //             zipcode.className = 'list-group-item';
    //             zipcode.innerHTML = `Zipcode: ${p.address.zipcode}`;

    //             let geoLat = document.createElement('li');
    //             geoLat.className = 'list-group-item';
    //             geoLat.innerHTML = `Latitude: ${p.address.geo.lat}`;

    //             let geoLong = document.createElement('li');
    //             geoLong.className = 'list-group-item';
    //             geoLong.innerHTML = `Longitude: ${p.address.geo.lng}`;

    //             let phone = document.createElement('li');
    //             phone.innerHTML = `<span>Phone:</span> ${p.phone}`;
    //             phone.className = 'list-group-item';

    //             let website = document.createElement('li');
    //             website.innerHTML = `Website: <a href="#" class="link-info">${p.website}</a>`;
    //             website.className = 'list-group-item';


    //             address.append(street, suite, city, zipcode, geoLat, geoLong, phone, website);

    //             let company = document.createElement('ul');
    //             company.className = 'list-group list-group-flush';

    //             let companyName = document.createElement('li');
    //             companyName.className = 'list-group-item';
    //             companyName.innerHTML = `Company: ${p.company.name}`;

    //             let catchPhrase = document.createElement('li');
    //             catchPhrase.className = 'list-group-item';
    //             catchPhrase.innerHTML = `Catch phrase: ${p.company.catchPhrase}`;

    //             let bs = document.createElement('li');
    //             bs.className = 'list-group-item';
    //             bs.innerHTML = `BS: ${p.company.bs}`;

    //             company.append(companyName, catchPhrase, bs);

    //             cardBody.append(title, subtitle, email, address, company);
    //             card.append(cardBody);
    //             roWEl.appendChild(card);
    //         });
    //     });

    // /////////// task 2 & 3 //////////////////////////////////////

    let planetUrl = 'https://swapi.dev/api/planets';

    // fetch(planetUrl)
    //     .then(response => response.json())
    //     .then(finalResult => {
    //         taskTwoAndThree(finalResult);
    //     });


    const xhr = new XMLHttpRequest();
    xhr.open('GET', planetUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let obj = xhr.response;
            taskTwoAndThree(obj);
        }
    };
    xhr.responseType = 'json';
    xhr.send(null);



    function taskTwoAndThree(finalResult) {
        let people = finalResult.results;
        let roWEl = document.querySelector(".row");

        function createCard(p) {
            let card = document.createElement('div');
            card.className = 'col-3 card shadow cursor-pointer';


            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            let title = document.createElement('h5');
            title.innerText = p.name;
            title.className = 'card-title';

            let url = document.createElement('a');
            url.innerHTML = p.url;
            url.className = 'link-info';
            url.href = p.email;
            url.setAttribute('target', '_blank');

            let planetInfo = document.createElement('ul');
            planetInfo.className = 'list-group list-group-flush';

            let population = document.createElement('li');
            population.className = 'list-group-item';
            population.innerHTML = `Population: ${p.population}`;

            let rotation_period = document.createElement('li');
            rotation_period.className = 'list-group-item';
            rotation_period.innerHTML = `Rotation period: ${p.rotation_period}`;

            let orbital_period = document.createElement('li');
            orbital_period.className = 'list-group-item';
            orbital_period.innerHTML = `Orbital period: ${p.orbital_period}`;

            let diameter = document.createElement('li');
            diameter.className = 'list-group-item';
            diameter.innerHTML = `Diameter: ${p.diameter}`;

            let climate = document.createElement('li');
            climate.className = 'list-group-item';
            climate.innerHTML = `Climate: ${p.climate}`;

            let gravity = document.createElement('li');
            gravity.className = 'list-group-item';
            gravity.innerHTML = `Gravity: ${p.gravity}`;

            let terrain = document.createElement('li');
            terrain.className = 'list-group-item';
            terrain.innerHTML = `Terrain: ${p.terrain}`;

            let surface_water = document.createElement('li');
            surface_water.innerHTML = `Surface water: ${p.surface_water}`;
            surface_water.className = 'list-group-item';


            planetInfo.append(population, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water);

            cardBody.append(title, planetInfo, url);
            card.append(cardBody);
            roWEl.appendChild(card);
        }

        let sortButtonState = {
            diameterSort: 'asc',
            populationSort: 'asc'
        }
        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }

        function sortByDiameter() {

            if (sortButtonState.diameterSort == 'asc') {
                people.sort((a, b) => b.diameter - a.diameter);
                sortButtonState.diameterSort = 'desc';
            } else {
                people.sort((a, b) => a.diameter - b.diameter);
                sortButtonState.diameterSort = 'asc';
            }

            removeAllChildNodes(roWEl);
            people.forEach(p => createCard(p));
        }


        function sortByPopulation() {
            if (sortButtonState.populationSort == 'asc') {
                people.sort((a, b) => {
                    if (a.population == 'unknown') {
                        return 1;
                    } else if (b.population == 'unknown') {
                        return -1;
                    } else {
                        return b.population - a.population
                    }
                });
                sortButtonState.populationSort = 'desc';
            } else {
                people.sort((a, b) => {
                    if (a.population == 'unknown') {
                        return -1;
                    } else if (b.population == 'unknown') {
                        return 1;
                    } else {
                        return a.population - b.population
                    }
                });
                sortButtonState.populationSort = 'asc';
            }

            removeAllChildNodes(roWEl);
            people.forEach(p => createCard(p));
        }

        // initial html

        let buttonsGroup = document.querySelector('.btn-group');
        let diameterSortButton = document.createElement('button');
        diameterSortButton.innerHTML = 'Sort by diameter';
        diameterSortButton.className = "btn btn-primary";
        diameterSortButton.addEventListener('click', sortByDiameter)
        let populationSortButton = document.createElement('button');
        populationSortButton.className = "btn btn-primary";
        populationSortButton.innerHTML = 'Sort by population';
        populationSortButton.addEventListener('click', sortByPopulation)
        buttonsGroup.append(diameterSortButton, populationSortButton);

        people.forEach(p => createCard(p));
    }

}