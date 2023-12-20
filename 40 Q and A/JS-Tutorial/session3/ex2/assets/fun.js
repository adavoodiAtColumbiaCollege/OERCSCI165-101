var country = new Map();

country.set("Asia", "Asia, the world’s largest and most  diverse continent. It occupies the eastern four-fifths of the giant Eurasian landmass. Asia is more a geographic term than a homogeneous continent, and the use of the term to describe such a vast area always carries the potential of obscuring the enormous diversity among the regions it encompasses. Asia has both the highest and the lowest points on the surface of Earth. has the longest coastline of any continent, is subject overall to the world’s widest climatic extremes, and, consequently, produces the most varied forms of vegetation and animal life on Earth. In addition, the peoples of Asia have established the broadest variety of human adaptionfound on any of the continents.");
country.set("Africa", "The history of Africa begins with the emergence of hominids, archaic humans and — around 300,000–250,000 years ago — anatomically modern humans (Homo sapiens), in East Africa, and continues unbroken into the present as a patchwork of diverse and politically developing nation states. The earliest known recorded history arose in Ancient Egypt, and later in Nubia, the Sahel, the Maghreb, and the Horn of Africa.Following the desertification of the Sahara, North African history became entwined with the Middle East and Southern Europe while the Bantu expansion swept from modern day Cameroon (Central Africa) across much of the sub-Saharan continent in waves between around 1000 BC and 1 AD, creating a linguistic commonality across much of the central and Southern continent.");
country.set("North America", "The indigenous peoples of the Americas have many creation myths by which they assert that they have been present on the land since its creation,but there is no evidence that humans evolved there.The specifics of the initial settlement of the Americas by ancient Asians are subject to ongoing research and discussion.The traditional theory has been that hunters entered the Bering Land Bridge between eastern Siberia and present-day Alaska from 27,000 to 14,000 years ago.A growing viewpoint is that the first American inhabitants sailed from Beringia some 13,000 years ago, with widespread habitation of the Americas during the end of the Last Glacial Period, in what is known as the Late Glacial Maximum, around 12,500 years ago.The oldest petroglyphs in North America date from 15,000 to 10,000 years before present. Genetic research and anthropology indicate additional waves of migration from Asia via the Bering Strait during the Early-Middle Holocene.");
country.set("South America", "South America is thought to have been first inhabited by humans when people were crossing the Bering Land Bridge (now the Bering Strait) at least 15,000 years ago from the territory that is present-day Russia. They migrated south through North America, and eventually reached South America through the Isthmus of Panama. The first evidence for the existence of the human race in South America dates back to about 9000 BC, when squashes, chili peppers and beans began to be cultivated for food in the highlands of the Amazon Basin. Pottery evidence further suggests that manioc, which remains a staple food today, was being cultivated as early as 2000 BC.");
country.set("Antarctica", "Antarctica  is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean (also known as the Antarctic Ocean), it contains the geographic South Pole. Antarctica is the fifth-largest continent, being about 40% larger than Europe, and has an area of 14,200,000 km2 (5,500,000 sq mi). Most of Antarctica is covered by the Antarctic ice sheet, with an average thickness of 1.9 km (1.2 mi).");
country.set("Europe", "During the 2.5 million years of the Pleistocene, numerous cold phases called glacials (Quaternary ice age), or significant advances of continental ice sheets, in Europe and North America, occurred at intervals of approximately 40,000 to 100,000 years. The long glacial periods were separated by more temperate and shorter interglacials which lasted about 10,000–15,000 years. The last cold episode of the last glacial period ended about 10,000 years ago. Earth is currently in an interglacial period of the Quaternary, called the Holoc \n Homo erectus georgicus, which lived roughly 1.8 million years ago in Georgia, is the earliest hominin to have been discovered in Europe. Other hominin remains, dating back roughly 1 million years, have been discovered in Atapuerca, Spain.");

var country_img = new Map();
country_img.set("Asia", "assets/asia.png");
country_img.set("Africa", "assets/africa.png");
country_img.set("North America", "assets/northamerica.png");
country_img.set("South America", "assets/southamerica.png");
country_img.set("Antarctica", "assets/antarctica.png");
country_img.set("Europe", "assets/europe.png");

var image_country= document.getElementById("image_country");


var buttons = new Map();
buttons.set("Asia", "button_asia");
buttons.set("Africa", "button_africa");
buttons.set("North America", "button_northamerica");
buttons.set("South America", "button_southamerica");
buttons.set("Antarctica", "button_antarctica");
buttons.set("Europe", "button_europe");

function showcountry(countryname){
  image_country.src=country_img.get(countryname);
  section_array.innerHTML= "<h1>"+countryname+"</h1><span>" + country.get(countryname)+ "</span>";
  buttons.forEach(function(value, key){
    document.getElementById(value).style.border="none";
  });
}

function show_asia(){
  showcountry("Asia");
  button_asia.style.border="2px solid #356734";
}

function show_africa(){
  showcountry("Africa");
  button_africa.style.border="2px solid #356734";
}

function show_northamerica(){
  showcountry("North America");
  button_northamerica.style.border="2px solid #356734";
}

function show_southamerica(){
  showcountry("South America");
  button_southamerica.style.border="2px solid #356734";
}

function show_antarctica(){
  showcountry("Antarctica");
  button_antarctica.style.border="2px solid #356734";
}

function show_europe(){
  showcountry("Europe");
  button_europe.style.border="2px solid #356734";
}
show_quebec();