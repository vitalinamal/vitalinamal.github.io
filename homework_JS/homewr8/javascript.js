window.onload = () => {
    let divEl = document.querySelector("div");


    function links(myLink) {

        for (let i = 0; i < 10; i++) {
            let a = document.createElement('a');

            a.innerHTML = myLink;

            a.href = `index${i+1}.html`;

            a.className += "menu-item";

            a.setAttribute('target', '_blank');
            a.setAttribute('style', ' display:inline-block; padding:20px; color:red');

            divEl.appendChild(a);
        }
        return divEl;
    }

    console.log(links("LINK"));


    let activeEl = document.querySelector('a:nth-child(3)');
    activeEl.classList.toggle('active');

    // ///////////////////////////////////////////////////////////////// input

    let [...inputEl] = document.querySelectorAll("input");

    function inputArr(arrInputs) {
        for (let b = 0; b < arrInputs.length; b++) {

            arrInputs[b].removeAttribute('disabled');
            arrInputs[b].setAttribute('style', 'background-color:green; color:white');

        }
        return arrInputs;
    }

    console.log(inputArr(inputEl));







    // //////////////////////////////// додаткове завдання

    let people = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            address: {
                street: "Victor Plains",
                suite: "Suite 879",
                city: "Wisokyburgh",
                zipcode: "90566-7771",
                geo: {
                    lat: "-43.9509",
                    lng: "-34.4618"
                }
            },
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: {
                name: "Deckow-Crist",
                catchPhrase: "Proactive didactic contingency",
                bs: "synergize scalable supply-chains"
            }
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            address: {
                street: "Douglas Extension",
                suite: "Suite 847",
                city: "McKenziehaven",
                zipcode: "59590-4157",
                geo: {
                    lat: "-68.6102",
                    lng: "-47.0653"
                }
            },
            phone: "1-463-123-4447",
            website: "ramiro.info",
            company: {
                name: "Romaguera-Jacobson",
                catchPhrase: "Face to face bifurcated interface",
                bs: "e-enable strategic applications"
            }
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
            address: {
                street: "Hoeger Mall",
                suite: "Apt. 692",
                city: "South Elvis",
                zipcode: "53919-4257",
                geo: {
                    lat: "29.4572",
                    lng: "-164.2990"
                }
            },
            phone: "493-170-9623 x156",
            website: "kale.biz",
            company: {
                name: "Robel-Corkery",
                catchPhrase: "Multi-tiered zero tolerance productivity",
                bs: "transition cutting-edge web services"
            }
        }
    ]


    let roWEl = document.querySelector(".row");

    people.forEach(p => {
        let card = document.createElement('div');
        card.className = 'col-3 card shadow cursor-pointer';
        
    
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
    
        let title = document.createElement('h5');
        title.innerText = p.name;
        title.className = 'card-title';
    
        let subtitle = document.createElement('h6');
        subtitle.innerText = p.username;
        subtitle.className = 'card-text';
        
        let email = document.createElement('a');
        email.innerHTML = p.email;
        email.className ='link-info';
        email.href = p.email;
        email.setAttribute('target', '_blank');

        let address = document.createElement('ul');
        address.className = 'list-group list-group-flush';

        let street = document.createElement('li');
        street.className= 'list-group-item';
        street.innerHTML = `Street: ${p.address.street}`;

        let suite = document.createElement('li');
        suite.className= 'list-group-item';
        suite.innerHTML = `Suite: ${p.address.suite}`;

        let city = document.createElement('li');
        city.className= 'list-group-item';
        city.innerHTML = `City: ${p.address.city}`;

        let zipcode = document.createElement('li');
        zipcode.className= 'list-group-item';
        zipcode.innerHTML = `Zipcode: ${p.address.zipcode}`;

        let geoLat = document.createElement('li');
        geoLat.className= 'list-group-item';
        geoLat.innerHTML = `Latitude: ${p.address.geo.lat}`;

        let geoLong = document.createElement('li');
        geoLong.className= 'list-group-item';
        geoLong.innerHTML = `Longitude: ${p.address.geo.lng}`;

        let phone = document.createElement('li');
        phone.innerHTML = `<span>Phone:</span> ${p.phone}`;
        phone.className ='list-group-item';

        let website = document.createElement('li');
        website.innerHTML = `Website: <a href="#" class="link-info">${p.website}</a>`;
        website.className ='list-group-item';


        address.append(street, suite, city, zipcode, geoLat, geoLong, phone, website);

        let company = document.createElement('ul');
        company.className = 'list-group list-group-flush';

        let companyName = document.createElement('li');
        companyName.className= 'list-group-item';
        companyName.innerHTML = `Company: ${p.company.name}`;

        let catchPhrase = document.createElement('li');
        catchPhrase.className= 'list-group-item';
        catchPhrase.innerHTML = `Catch phrase: ${p.company.catchPhrase}`;

        let bs = document.createElement('li');
        bs.className= 'list-group-item';
        bs.innerHTML = `BS: ${p.company.bs}`;

        company.append(companyName, catchPhrase, bs);
        
        cardBody.append(title, subtitle, email, address, company);
        card.append(cardBody);
        roWEl.appendChild(card);


    
    });
}