var text_ireland= "Halloween can trace back its origins to Celtic celebrations, such as Samhain. So, it’s no surprise that there the Irish celebrate Halloween in great style. Traditions often include fortune-telling, bonfires, eating fruitcakes, and, of course, dressing up. Ireland’s Derry City hosts the biggest Halloween festival in Europe, the Banks of Foyle Halloween Carnival. Here you can enjoy haunted houses, ghost tours parades, horror-story telling and much more. You can also check out the more relaxed Spirits of Meath festival in Meath, which features pumpkin carving contests.";
var text_scotland= "Much like Ireland, Scotland has Celtic roots and also had many traditions related to Samhain. Even after the advent of Christianity, many of these customs remained. These include “guising,” where children go from door to door carrying lanterns made out of turnips in costumes for sweets or coins, as well as apple dunking, where you must retrieve an apple from a bucket of water using only your mouth. Halloween is such an integral part of Scottish culture that it has become the subject of many poems, most famously ‘Halloween’ by Robert Burns. According to him, Halloween is “thought to be a night when witches, devils, and other mischief-making beings are all abroad on their baneful midnight errands”. If you plan to visit Scotland this Halloween, make sure to check out Edinburgh’s Royal Mile with its creepy vaults, underground passages, and unsolved mysteries.";
var text_london= "While England is full of spooky castles and haunted locations, London is the place to be to celebrate Halloween. With its many dark dungeons, ancient buildings, and ghostly attractions, Lonon puts on tons of festivities across the city for the occasion. One of the most popular are the London Dungeons, which are full of frights, and the Jack the Ripper Walk following the Victorian serial killer’s old haunts across East London. There are also numerous parties and events that take place, such as the horse-drawn rides in Richmond Park, the Camden Halloween Carnival, and much much more.";
var text_transylvania= "Where better to celebrate Halloween that the home of the world’s most famous vampire, Count Dracula? If you’re looking for a truly spooky Halloween you can join the hordes of tourists who flock to Transylvania to celebrate Halloween in the shadow of Bran Castle (the real Dracula’s Castle). Besides this, the beautiful region of Romania also offers various other spooky castles, and numerous events in the capital, Bucharest. Romanians also celebrate the “Day of the Dead” on 1 November, and the Feast of St. Andrew on 30 November which has many customs similar to the traditional All Hallow’s Eve.";

var title_ireland= "Ireland";
var title_scotland= "Scotland";
var title_london= "London";
var title_transylvania= "Transylvania";

var img_ireland= 'assets/ireland.png';
var img_scotland= 'assets/scotland.png';
var img_london= 'assets/london.png';
var img_transylvania= 'assets/transylvania.png';


function get_ireland() {
  document.getElementById("catalog_text").innerText= text_ireland;
  document.getElementById("catalog_img").src = img_ireland;
  document.getElementById("catalog_title").innerText = title_ireland;
}

function get_scotland() {
  document.getElementById("catalog_text").innerText= text_scotland;
  document.getElementById("catalog_img").src = img_scotland;
  document.getElementById("catalog_title").innerText = title_scotland;
}

function get_london() {
  document.getElementById("catalog_text").innerText= text_london;
  document.getElementById("catalog_img").src = img_london;
  document.getElementById("catalog_title").innerText = title_london;
}

function get_transylvania() {
  document.getElementById("catalog_text").innerText= text_transylvania;
  document.getElementById("catalog_img").src = img_transylvania;
  document.getElementById("catalog_title").innerText = title_transylvania;
}
