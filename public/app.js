


var addCat = function(name, adorablenessLevel, imageUrl){
  var catUl = createCatUl();
  var catName = addName(name);
  var catLevel = addAdorablenessLevel(adorablenessLevel);
  var catImage = addCatImage(imageUrl);

  appendElements(catUl, catName, catLevel, catImage);
};

var createCatUl = function(){
  var catUl = document.createElement('ul');
  catUl.classList.add('cat');
  return catUl;
}

var addName = function(name){
  var catName = document.createElement('li');
  catName.innerText = name;
  return catName;
}

var addAdorablenessLevel = function(adorablenessLevel){
  var catLevel = document.createElement('li');
  catLevel.innerText = adorablenessLevel;
  return catLevel;
}

var addCatImage = function(imageUrl){
  var catImage = document.createElement('li');
  var catImageUrl = document.createElement('img');
  catImageUrl.src = imageUrl;
  catImageUrl.width = "500";
  catImage.appendChild(catImageUrl);
  return catImage;
}

var appendElements = function(catUl, catName, catLevel, catImage){
  catUl.appendChild(catName);
  catUl.appendChild(catLevel;
    catUl.appendChild(catImage);
    var catSection = document.getElementById('cats');
    catSection.appendChild(catUl);
  }

//add li to ul

// //add ul to cats section
//
// <section id="cats">
//   <ul class="cat">
//     <li>Name: Stupid cat1</li>
//     <li>Adorableness Level: 2</li>
//     <li><img width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"></li>
//   </ul>
//
// var appendElements = function(quoteArticle, blockquote, cite){
//   blockquote.appendChild(cite);
//   quoteArticle.appendChild(blockquote);
//   var quotes = document.querySelector('#quotes');
//   quotes.appendChild(quoteArticle);
// };
//
// <article class="quote">
//       <blockquote>
//         The only CSS you need to know is background-color: tomato
//         <cite>
//           Rick
//         </cite>
//       </blockquote>
//     </article>


var app = function(){
  addCat("tara", "50", "/tara.jpg");
}

window.onload = app;
