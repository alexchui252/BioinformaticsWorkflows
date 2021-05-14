//head
const head = document.querySelector('head');

head.innerHTML = 
`
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${page_name} - BioinformaticsWorkflows</title>
<link rel="stylesheet" href="../styles/styles.css">
`;

//header
const header = document.querySelector('header');

header.innerHTML = 
`
<div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="../index.html">Home</a>
      <a href="../directory.html">Directory</a>
      <a href="../updates.html">Latest Updates</a>
      <a href="../about.html">About</a>
      <a href="../contact.html">Contact</a>
</div>
<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; </span>
<h1>BioinformaticsWorkflows</h1>
`;

//non-home page banner
const banner = document.querySelector('.banner');

banner.innerHTML = 
`
<img src="../img/banner-background-cut.jpg" alt="banner image">
<div class="welcome">
  <h2 class="article">${page_name}</h2>
</div>
`;

//side menu functions
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
}

//footer
const body = document.querySelector('body');

body.innerHTML += 
`
<footer>
      <p class="copyright">Copyright 2021 BioinformaticsWorkflows</p>
    </footer>
`;