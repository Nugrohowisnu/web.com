const scriptURL = "https://script.google.com/macros/s/AKfycbxouyPYE1MCpQ_4s8q3d1BTZ68jno8numQt0Re6FIrX6gAbrM-sWcHDUUo5TMf5vYZ1nQ/exec";
const form = document.forms["wisnu-web"];

form.addEventListener("submit", (e) => {
    const notif = document.querySelector(".notif");
    notif.classList.toggle("active");
    console.log(notif);

    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            console.log("Success!", response);
            notif.classList.toggle("active");
            alert("Pesan anda sudah dikirim.");
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});