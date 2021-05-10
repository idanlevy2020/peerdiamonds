//app is defined in header.js
// console.log('app from index:',app);


let comment; 
comment=document.createComment("---------------- footer ----------------");
app.appendChild(comment);

const footer = document.createElement('div');
footer.setAttribute("class", "footer flex-column");
footer.setAttribute("id", "footer");
app.appendChild(footer);

create_footer();//call to function footer() for create footer

function create_footer(){
    footer_row1(); //call to function footer_row1()
    footer_row2(); //call to function footer_row2()

    //create element <hr>
    let hr = document.createElement('hr');
    footer.appendChild(hr);

    footer_row3(); //call to function footer_row3()
}

function footer_row1(){
    const footerRow1 = document.createElement('div');
    footerRow1.setAttribute("class","footer-row1 flex-row wrap");

    footer_row1_box1(footerRow1);  //call to function footer_row1_box1()
    footer_row1_box2(footerRow1);  //call to function footer_row1_box2()
    footer_row1_box3(footerRow1);  //call to function footer_row1_box3()
}


function footer_row1_box1(footerRow1){
    // the function get element <div class="footer-row1">
    // and create footer_row1_box2 contain navBar links Vertical
    const footerRow1Box1 = document.createElement('div');
    footerRow1Box1.setAttribute("class","footer-row1-box1 flex-column");
    footerRow1Box1.innerHTML='<h3>קטגוריות</h3>';
    
    for (let i=1;i<=7;i++){
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
                a.href="diamond_earrings.html";
                a.innerHTML="עגילי יהלומים";
            break;
            case 6:
                a.href="articales.html";
                a.innerHTML="מאמרים";
            break;
            case 7:
                a.href="contactus.html";
                a.innerHTML="צור קשר";
          }//end switch case 

        footerRow1Box1.appendChild(a);   
   }//end for
   
   footerRow1.appendChild(footerRow1Box1);
   footer.appendChild(footerRow1);
}


function footer_row1_box2(footerRow1){
    // the function get element <div class="footer-row1">
    // and create footer_row1_box2 contain desc about company
    const footerRow1Box2 = document.createElement('div');
    footerRow1Box2.setAttribute("class","footer-row1-box2 flex-column");
    footerRow1Box2.innerHTML='<h3>אודות פאר דיימונדס</h3>';

    let p=document.createElement("p");
    p.innerHTML='באתר פאר דיימונדס תוכלו להתרשם מקולקציית התכשיטים ויהלומים מהגיעים ישירות מהמפעל לצרכן.';
    p.style.marginBottom="20px";
    footerRow1Box2.appendChild(p);

    p=document.createElement("p");
    p.innerHTML='אנו מזמינים אתכם להתרשם מקולקציית תכשיטי היהלומים המוצעת למכירה באתר כגון: טבעות אירוסין , עגילי יהלומים , טבעות בעיצוב אישי , שרשראות ותיליונים.';
    p.style.marginBottom="50px";
    footerRow1Box2.appendChild(p);

    let a=document.createElement("a");
    a.href="aboutus.html";
    a.innerHTML="קרא עוד...";
    footerRow1Box2.appendChild(a);

    footerRow1.appendChild(footerRow1Box2);
    footer.appendChild(footerRow1);
}

function footer_row1_box3(footerRow1){
    // the function get element <div class="footer-row1">
    // and create footer_row1_box2 contain navBar links Vertical
    const footerRow1Box3 = document.createElement('div');
    footerRow1Box3.setAttribute("class","footer-row1-box3 flex-column");
    footerRow1Box3.innerHTML='<h3>נשמח לשמוע ממכם</h3>';
    footerRow1.appendChild(footerRow1Box3);

    const form = document.createElement('form');
    form.setAttribute("action"," ");

    console.log("form:",form);

    let textarea=null;
    let input=null;
    for (let i=1;i<=5;i++){
        if (i!=4) input=document.createElement("input");
        else textarea=document.createElement("textarea"); //else if (i==4)
        switch(i) {
            case 1:
                input.type="text";
                input.id="fname;"
                input.name="name";
                input.placeholder="שם מלא";
                input.required="true";
            break;
            case 2:
                input.type="text";
                input.id="email;"
                input.name="email";
                input.placeholder="דואר אלקטרוני";
            break;
            case 3:
                input.type="text";
                input.id="phone;"
                input.name="phone";
                input.placeholder="טלפון";
                input.required="true";
            break;
            case 4:
                textarea=document.createElement("textarea");
                textarea.type="text";
                textarea.id="messege;"
                textarea.name="messege";
                textarea.placeholder="הודעה";
            break;
            case 5:
                input.type="submit";
                input.value="שליחה";
        }//end switch case 

        if (i!=4) form.appendChild(input);  
        else form.appendChild(textarea); //else if (i==4)
    }//end for

    footerRow1Box3.appendChild(form);
    footerRow1.appendChild(footerRow1Box3);
    footer.appendChild(footerRow1);
}



function footer_row2(){
    const footerRow2 = document.createElement('div');
    footerRow2.setAttribute("class","footer-row2 flex-row wrap");

    // create image peerdiamonds as a link homepage
    let a = document.createElement('a');
    a.setAttribute("id", "linkHomepage");
    a.setAttribute("href","index.html");
    a.innerHTML='<img src="images/logo2.jpg" width="200px" height="45px" alt="פאר דיימונדס יהלומים ותכשיטים מעוצבים במחירים מפתיעים"/>';
    footerRow2.appendChild(a);

    for (let i=1;i<=4;i++){
        const footerBox = document.createElement('div');
        footerBox.setAttribute("class","footer-box flex-row");
        switch(i) {
            case 1:
                footerBox.innerHTML='<img src="icons/address.png"/> <p> רחוב תובל 23 בנין נועם בורסת היהלומים רמת גן  </p>';
              break;
            case 2:
                footerBox.innerHTML='<img src="icons/phone.png"/> <a href="tel:054-9919289"> 054-9919289 </a>';
              break;
            case 3:
                footerBox.innerHTML='<img src="icons/email.png"/> <p>  דואר אלקטרוני: <a href="mailto:info@peerdiamonds.co.il"> info@peerdiamonds.co.il </a> </p>';
            break;
            case 4:
                footerBox.innerHTML='<img src="icons/clock.png"/> <p> שעות פתיחה: א-ה: 09:00-18:00, ו: 09:00-13:00 </p>';
        }//end switch case 
        footerRow2.appendChild(footerBox);
    }//end for

    footer.appendChild(footerRow2);
}

function footer_row3(){
    const footerRow3 = document.createElement('div');
    footerRow3.setAttribute("class","footer-row3 flex-row wrap");
    footerRow3.innerHTML ='<h4> © 2021 כל הזכויות שמורות. פאר דיימונדס . נבנה ע״י עידן לוי. </h4>';
    footer.appendChild(footerRow3);
}