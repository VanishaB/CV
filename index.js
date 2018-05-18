//----PARTIE FORMATION--//

var text1 = document.querySelector("#text1"); 
var secours = document.querySelector("#college");
var bafa = document.querySelector("#bafa");
var terminale = document.querySelector('#terminale');

secours.addEventListener("mouseover", function(){ text1.innerHTML = "2016: Lycée Jean Renoir à Bondy FRANCE" ;  });

secours.addEventListener("mouseout", function(){ text1.innerHTML =""; });

bafa.addEventListener("mouseover", function(){ text1.innerHTML = "2014: Lycée Jean Renoir à Bondy FRANCE";  });

bafa.addEventListener("mouseout", function(){ text1.innerHTML =""; });

terminale.addEventListener("mouseover", function(){ text1.innerHTML = "2012: Collège Eric Tabarly à Pavillons-sous-bois FRANCE";  });

terminale.addEventListener("mouseout", function(){ text1.innerHTML =""; });

//------------PARTIE EXPERIENCE PRO---//
var text2 = document.querySelector("#text2")
var baby = document.querySelector("#babysitting");
var London = document.querySelector("#London");
var monop = document.querySelector("#monop"); 
var hotesse = document.querySelector("#hotesse");
var garde = document.querySelector("#garde");
var aide = document.querySelector("#aide");
var stage = document.querySelector("#stage");


baby.addEventListener("mouseover", function(){ text2.innerHTML = "2018 : Babysitting à Bondy FRANCE";  });

baby.addEventListener("mouseout", function(){ text2.innerHTML =""; });

London.addEventListener("mouseover", function(){ text2.innerHTML = "2017: Hôtesse d'acceuil et serveuse au Sofitel et Hilton à Heathrow LONDRES";  });

London.addEventListener("mouseout", function(){ text2.innerHTML =""; });

monop.addEventListener("mouseover", function(){ text2.innerHTML = "2017: Hôtesse de caisse au Monoprix à Drancy et Bondy FRANCE ";  });

monop.addEventListener("mouseout", function(){ text2.innerHTML =""; });

hotesse.addEventListener("mouseover", function(){ text2.innerHTML = "2015: Hôtesse d'acceuil dans un centre d'amincissement à Bondy FRANCE"; });

hotesse.addEventListener("mouseout", function(){ text2.innerHTML =""; });

garde.addEventListener("mouseover", function(){ text2.innerHTML = "2015: Garde d'enfant au Raincy et Bondy FRANCE";  });

garde.addEventListener("mouseout", function(){ text2.innerHTML =""; });

aide.addEventListener("mouseover", function(){ text2.innerHTML = "2014: Aide aux devoirs au Raincy FRANCE";  });

aide.addEventListener("mouseout", function(){ text2.innerHTML =""; });
 
stage.addEventListener("mouseover", function(){ text2.innerHTML ="cdc"; });

