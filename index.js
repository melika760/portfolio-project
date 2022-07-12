let content = document.querySelector(".content")
let personalbtn = document.querySelector("#personal-btn")
let expbtn =document.querySelector("#Exprience-btn")
let edubtn = document.querySelector("#Education-btn")
personalbtn.addEventListener("click",personalshow)
expbtn.addEventListener("click",exprienceshow)
edubtn.addEventListener("click",edushow)
function personalshow(){
  content.innerHTML =`<ul class="list-group">
  <h3 >Personal Info</h3>
<li><i class="fa fa-user fa-color "></i> Melika Tafazoli</li>
<li><i class="fa fa-phone fa-color"></i> +98 9128391276</li>
<li><i class="fa fa-envelope fa-color"></i> melikaaatafazoli@gmail.com</li>
</ul>`
personalbtn.classList.add("color-btn")
expbtn.classList.remove("color-btn")
edubtn.classList.remove("color-btn")
}
function exprienceshow(){
  content.innerHTML = `  <ul class="list-group">
            <h3>Experience & Awards</h3>
          <li>Completed SheCodes.io web development training</li>
          <li>Finished the leitec web development courses ( Sharif University)</li>
          <li>Accomplished the fourth-best ranking in the nation in psychology at the Kharazmi Festival</li>
          <li>Won the second position in the category of website design in the Sharif University Makeathon competition.</li>
          <li>Participated in workshops concerning business at Sharif University</li>
          <li>Completed German classes at the Goethe-Institute up to the B2 level</li>
          </ul>` 
    expbtn.classList.add("color-btn")
    personalbtn.classList.remove("color-btn")
    edubtn.classList.remove("color-btn")
}
function edushow(){
  content.innerHTML =`<ul class="list-group">
  <h3>Education</h3>
<li>Electrical engineer Bachelor Shahid Beheshti University-Tehran, Iran(2017-2021)</li>
<li>High school diploma at Salam High school(2015)</li>
</ul>`
personalbtn.classList.remove("color-btn")
expbtn.classList.remove("color-btn")
edubtn.classList.add("color-btn")
}
  let slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  slideshows.forEach(initSlideShow);
  
  function initSlideShow(slideshow) {
  
    let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
  
    let index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      index++;
      
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');
  
    }, time);
  }