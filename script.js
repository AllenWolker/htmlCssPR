(function () {
    let date = new Date();
    let year = date.getFullYear();
    let footer = document.getElementById('footer');
    console.log(year, footer);

    footer.innerHTML = `Copyright © ${year} ~ Design Studios ~ All Rights Reserved`;
    window.onbeforeunload = function () {
        return "Закрыть сайт ?";
    };
}());


