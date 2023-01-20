function changeState() {
    const url = window.location.href;
    var ratingID= url.substring(url.lastIndexOf('#') + 1);
    let rating = document.getElementById(ratingID).innerText;
    document.getElementById("rating").innerText = rating;

    const getOnClick = document.querySelector("#onclick");
    const initial = document.querySelector('#initial');

    initial.style.display = "none";
    getOnClick.style.display= "flex";
}



