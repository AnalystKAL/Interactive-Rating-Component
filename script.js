function changeState() {
    const url = window.location.href;
    var ratingID= url.substring(url.lastIndexOf('#') + 1);
    let rating = document.getElementById(ratingID).innerText;
    document.getElementById("rating").innerText = "You selected " + rating + " out of 5";

    const getOnClick = document.querySelector("#onclick");
    const initial = document.querySelector('#initial');

    initial.style.display = "none";
    getOnClick.style.display= "flex";
}



