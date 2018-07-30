


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
  catName.classList.add('name');
  catName.innerText = name;
  return catName;
}

var addAdorablenessLevel = function(adorablenessLevel){
  var catLevel = document.createElement('li');
  catLevel.innerText = `Cat adorableness level is: ${adorablenessLevel}`;
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
  catUl.appendChild(catLevel);
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
  addCat("atchoum", "50",
  "https://i.pinimg.com/736x/54/1a/b1/541ab1519d06e3de3049c9b7f1be36d9--hair-day-the-morning.jpg");
  addCat("Stupid cat1", "2",
  "https://images-3662.kxcdn.com/fidelitynews/wp-content/uploads/2018/02/1519392830_5a90183d04b7c.jpg?w=580");
  addCat("Stupid cat2", "4",
  "https://i.chzbgr.com/full/2391045/h3986ABE4/");
  addCat("Juno", "4,000,000,00",
  "/juno.jpg");



}

window.onload = app;
