const app = document.querySelector('#app');

init();

function init(){
    let comment; 
    comment=document.createComment("---------------- header ----------------");
    app.appendChild(comment);
    header(); //call to function header() for create header
    comment=document.createComment("---------------- topnav ----------------");
    app.appendChild(comment);
    topnav(); //call to function topnav() for create topnav
    
    // main();
}

function header(){
    const header = document.createElement('div');
    header.setAttribute("class", "header flex-row wrap");
    header.setAttribute("id", "header");

    // create image peerdiamonds as a link homepage
    let a = document.createElement('a');
    a.setAttribute("id", "linkHomepage");
    a.setAttribute("href","index.html");
    a.innerHTML='<img src="images/logo2.jpg" width="270px" height="70px" alt="פאר דיימונדס יהלומים ותכשיטים מעוצבים במחירים מפתיעים"/>';
    header.appendChild(a);

    // create title <h5>
    const title = document.createElement('div');
    title.setAttribute("class","title");
    title.setAttribute("id","title");

    let h5=document.createElement('h5');
    h5.setAttribute("id","h5-row1");
    h5.innerHTML='החברה המובילה לייבוא וייצור תכשיטי יהלומים לפי מודלים ועיצוב אישי';
    title.appendChild(h5);

    h5=document.createElement('h5');
    h5.setAttribute("id","h5-row2");
    h5.innerHTML='יהלומים ותכשיטים מעוצבים במחירים מפתיעים';
    title.appendChild(h5);

    header.appendChild(title);

    // create image as a link phone
    a = document.createElement('a');
    a.setAttribute("id","linkPhone");
    a.setAttribute("href","tel:054-9919289");
    a.innerHTML='<img src="images/contact.jpg" width="250px" height="80px"/>';
    header.appendChild(a);

    app.appendChild(header);
}


function topnav(){
    const topnav = document.createElement('div');
    topnav.setAttribute("class","topnav");
    topnav.setAttribute("id","myTopnav");

    for (let i=1;i<=8;i++){
        let a=document.createElement("a");
        switch(i) {
            case 1:
                a.href="index.html";
                a.innerHTML="דף הבית";
              break;
            case 2:
                a.href="aboutus.html";
                a.innerHTML="אודותינו";
              break;
            case 3:
                a.href="engagement_rings_catalog.html";
                a.innerHTML="טבעות אירוסין";
            break;
            case 4:
                a.href="specialrings.html";
                a.innerHTML="טבעות בעיצוב אישי";
            break;
            case 5:
                const dropdown = document.createElement('div');
                dropdown.setAttribute("class","dropdown");

                const button = document.createElement('button');
                button.setAttribute("class","dropbtn");
                button.innerHTML='תכשיטי יהלומים <i class="fa fa-caret-down"></i>';
                dropdown.appendChild(button);

                let dropdownContent = document.createElement('div');
                dropdownContent.setAttribute("class","dropdown-content");

                // a=document.createElement("a"); -> we create first element a before switch case
                a.href="engagement_rings_catalog.html";
                a.innerHTML="טבעות אירוסין";
                dropdownContent.appendChild(a);

                a=document.createElement("a");
                a.href="diamond_earrings.html";
                a.innerHTML="עגילי יהלומים";
                dropdownContent.appendChild(a);

                a=document.createElement("a");
                a.href="specialrings.html";
                a.innerHTML="טבעות בעיצוב אישי";
                dropdownContent.appendChild(a);

                dropdown.appendChild(dropdownContent);
                topnav.appendChild(dropdown);
            break;
            case 6:
                a.href="articales.html";
                a.innerHTML="מאמרים";
            break;
            case 7:
                a.href="contactus.html";
                a.innerHTML="צור קשר";
            break;
            case 8:
                //We used JavaScript:void(0) above to prevent the page from reloading when the button is clicked the first time.
                a.setAttribute("href","javascript:void(0);");
                a.style.fontSize="15px";
                a.setAttribute("class","icon");
                a.setAttribute("onclick","myFunction()");
                a.innerHTML="&#9776;"; //icon ☰
          }//end switch case 
          if(i!=5){  
             topnav.appendChild(a);
          } 
          /* when i==5 (case 5) we did 3 things:
                dropdownContent.appendChild(a); -> dropdownContent is the father of a
                dropdown.appendChild(dropdownContent); -> dropdown is the father of dropdownContent
                topnav.appendChild(dropdown); -> topnav is the father of dropdown */
    }//end for
    app.appendChild(topnav);

    let comment; 
    comment=document.createComment("icon ☰");
    topnav.appendChild(comment);
}

/* <div class="topnav" id="myTopnav">
    <a href="index.html">דף הבית</a>
    <a href="aboutus.html">אודותינו</a>
    <a href="engagement_rings_catalog.html">טבעות אירוסין</a>
    <a href="specialrings.html">טבעות בעיצוב אישי</a>
    <div class="dropdown">
        <button class="dropbtn">תכשיטי יהלומים 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="engagement_rings_catalog.html">טבעות אירוסין</a>
          <a href="diamond_earrings.html">עגילי יהלומים</a>
          <a href="specialrings.html">טבעות בעיצוב אישי</a>
        </div>
    </div> 
    <a href="articales.html">מאמרים</a>
    <a href="contactus.html">צור קשר</a>
    <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
</div> */


function myFunction() {
    let div = document.getElementById("myTopnav");
    if (div.className === "topnav") {
        div.className += " responsive"; //div.className="myTopnav responsive"
    } else {
        div.className = "topnav";
    }
}


function main(){
 //do something
}




