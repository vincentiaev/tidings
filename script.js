
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("tidings").style.fontsize = "10px";
    document.getElementById("tidings").style.padding = "0px 20px";
  } else {
    document.getElementById("tidings").style.fontsize = "30px";
    document.getElementById("tidings").style.padding = "20px";
  }
}


function latest() {
    document.getElementById("main-content").style.display = "block";
    document.getElementById("side-content").style.display = "none";
    document.getElementById("latest").style.backgroundColor = "black";
    document.getElementById("latest").style.color = "white";
    document.getElementById("trending").style.backgroundColor = "rgb(233, 233, 233)";
    document.getElementById("trending").style.color = "black";
}

function trending() {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("side-content").style.display = "block";
  document.getElementById("trending").style.backgroundColor = "black";
  document.getElementById("trending").style.color = "white";
  document.getElementById("latest").style.backgroundColor = "rgb(233, 233, 233)";
  document.getElementById("latest").style.color = "black";
}

window.onresize = function(event) {
document.location.reload(true);
}


//source code formspree
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert("Thank you for contacting us. We will response to your messages in 24 hour. Have a nice day");
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              alert("Error submitting. Try again");
            }
          })
        }
      }).catch(error => {
        alert("Error submitting. Try again");
      });
    }
    form.addEventListener("submit", handleSubmit)

    function back() {
      document.getElementById('votw-pict').src='image/bagas-fikri.jpg'
      document.getElementById('caption-votw').innerHTML = "Baru debut di All England, Bagas/Fikri tuntaskan dengan gelar juara setelah kalahakn 3 pemain unggulan"
    }

    function next() {
      document.getElementById('votw-pict').src='image/joham-zarco.jpeg'
      document.getElementById('caption-votw').innerHTML = "Johann Zarco menjadi yang tercepat pada hari pertama MotoGP Amerika 2022 dengan Marc Marquez melakukan comeback yang impresif."
    }
