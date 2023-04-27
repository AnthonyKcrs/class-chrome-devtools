const buttonElement = document.getElementById("procesar");

buttonElement.addEventListener("click", () => {
    let jobs = document.querySelectorAll('.item-0-2-764');
    jobs = [...jobs];

    const peruSalarios = jobs.filter((el) => {
        const country = el.firstElementChild.firstElementChild.innerText;
        return country.includes("PERU");
      }).map((el) => el.innerText);

    const peruData = {
        país: "PERU",
        rangos: peruSalarios
    };  

    alert(JSON.stringify(peruData));
});
