function showHome() {
    var a = document.getElementById("home");
    var b = document.getElementById("projects");
    var c = document.getElementById("vets");
    var d = document.getElementById("info");
    var e = document.getElementById("contact");

    a.style.display = "block"; // show home
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    
}

function showProjects() {
    var a = document.getElementById("home");
    var b = document.getElementById("projects");
    var c = document.getElementById("vets");
    var d = document.getElementById("info");
    var e = document.getElementById("contact");

    b.style.display = "block"; // show projects
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
}

function showVets() {
    var a = document.getElementById("home");
    var b = document.getElementById("projects");
    var c = document.getElementById("vets");
    var d = document.getElementById("info");
    var e = document.getElementById("contact");

    c.style.display = "block"; // show vets
    a.style.display = "none";
    b.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
}

function showInfo() {
    var a = document.getElementById("home");
    var b = document.getElementById("projects");
    var c = document.getElementById("vets");
    var d = document.getElementById("info");
    var e = document.getElementById("contact");

    d.style.display = "block"; // show info
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    e.style.display = "none";
}

function showContact() {
    var a = document.getElementById("home");
    var b = document.getElementById("projects");
    var c = document.getElementById("vets");
    var d = document.getElementById("info");
    var e = document.getElementById("contact");

    e.style.display = "block"; // show contact
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
}

function showDesc() {
    var x = document.getElementById("desc");
    x.style.display = "block";
}

function copyright() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("n").innerHTML = n;
}

function clearForm() {
    document.getElementById("contactform").reset();
}