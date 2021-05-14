const banner = document.querySelector('.banner');

//console.log(banner.innerHTML);
banner.innerHTML = 
`
<img src="../img/banner-background-cut.jpg" alt="banner image">
<div class="welcome">
  <h2 class="article">${page_name}</h2>
</div>
`;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
}