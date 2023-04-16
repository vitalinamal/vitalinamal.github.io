window.onload = () => {
    // ////////////// додано в змінні
    let headerEl = document.querySelector("header");
    console.log(headerEl);

    let [...links] = document.querySelectorAll("ul > li");
    console.log(links);

    let navEl = document.getElementsByClassName("navbar");
    console.log(navEl);

    let footerEl = document.querySelector("footer");
    console.log(footerEl);


    // /////////////// заповнення li


    let [...elementArr] = document.getElementsByTagName("li");
    console.log(elementArr);

    for (let i = 0; i < elementArr.length; i++) {
        elementArr[i].innerHTML = "Link number" + i;
    }


    // //////////////  функція з масивом об'єктів

    function createDivs(arrayOfObjects) {
        let divEl = document.createElement("div");
        divEl.className = " product-list"; 

        for (let object of arrayOfObjects) {
            let newDivEl = document.createElement("div");
            newDivEl.className = "card";
            newDivEl.innerHTML = object;
    
            divEl.appendChild(newDivEl);
        }
        
        return divEl;
    }

    document.body.appendChild(createDivs(['Apple','Pear','Orange', 'Grapefruit', 'Pineapple']));
}
