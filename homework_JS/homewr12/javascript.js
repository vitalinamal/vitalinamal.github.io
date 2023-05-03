window.onload = () => {

    // ///////////////// task 1 ///////////////////////////////////////
    function countLowercase(stringEl) {
        let paternLeters = /[A-Z]/g;
        let mathcResult = stringEl.match(paternLeters).length;

        return mathcResult;
    }

    console.log(countLowercase("HelloSA%^$hbf134*ZA"));

    // ///////////////// task 2 ///////////////////////////////////////

    function clearString(numbers) {
        let paternNumber = /\D/g;
        let modifyText = numbers.replace(paternNumber, '');

        return Number(modifyText);
    }
    console.log(clearString("hell5o wor6ld"));
}
