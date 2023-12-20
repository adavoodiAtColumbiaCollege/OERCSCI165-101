
var items_length= document.getElementById("items_length");

var refresh_button= document.getElementById("refresh_button");
var clear_button= document.getElementById("clear_button");

const section_array = document.getElementById("section_array");

refresh_button.addEventListener("click",()=>{
  run();
});

clear_button.addEventListener("click",()=>{
  section_array.innerHTML= "";
  items_length.innerText=0;
});

let json_text = '{"images":[' +
  '{"author":"Hassan Pasha", "date": "2022-10-31", "location":"City Walk - Dubai", "camera":"Canon, EOS 5D Mark III", "image":"https://images.unsplash.com/photo-1667135154846-ff6139534a66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },' +
  '{"author":"Yasmina H", "date": "2021-01-05", "location":"Marina Walk, Dubai", "camera":"Apple, iPhone 12", "image":"https://images.unsplash.com/photo-1609874351819-8a267932ed67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80" },' +
  '{"author":"Colton Duke", "date": "2018-03-13", "location":"Chiang Mai, Thailand", "camera":"SONY, ILCE-7RM2", "image":"https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80" },' +
  '{"author":"Tobias Reich", "date": "2022-10-23", "location":"Corfu, Greece", "camera":"SONY, ILCE-6000", "image":"https://images.unsplash.com/photo-1666694421187-75957423ee77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },' +
  '{"author":"Krzysztof Kowalik", "date": "2022-04-25", "location":"Liptovský Mikuláš, Slovakia", "camera":"Panasonic, DMC-GX8", "image":"https://images.unsplash.com/photo-1650829072818-2a460af64c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" },' +
  '{"author":"Darcey Beau", "date": "2022-10-30", "location":"Chiang Mai, Thailand", "camera":"SONY, ILCE-7M3", "image":"https://images.unsplash.com/photo-1547710272-f0cd2545f838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }]}';



class timeAgo{
  constructor(date) {
    this.date = date;
  }
  date_convert(){
  const date = (this.date instanceof Date) ? this.date : new Date(this.date);
  const formatter = new Intl.RelativeTimeFormat('en');
  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  for (let key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];
      items_length.innerText=formatter.format(Math.round(delta), key);
      return formatter.format(Math.round(delta), key);
    }
  }
  }
}


function run(){
  section_array.innerHTML= "";
  const obj = JSON.parse(json_text);
  obj.images.forEach(additem);
  items_length.innerText= obj.images.length;
}

function additem(item, index){
  let date= new timeAgo(item.date);
  section_array.innerHTML+= "<div class=\"item_div\">"+
  "<img class=\"item_image\" src=\""+item.image+"\"/>"+"<div class=\"div_detail\">"+
  "<div class=\"div_author\"><img class=\"item_img_author\" src=\"assets/icon_author.png\"/><span class=\"item_author\">"+item.author+"</span></div>"+
  "<div class=\"div_location\"><img class=\"item_img_location\" src=\"assets/icon_location.png\"/><span class=\"item_location\">"+item.location+"</span></div>"+
  "<div class=\"div_camera\"><img class=\"item_img_camera\" src=\"assets/icon_camera.png\"/><span class=\"item_camera\">"+item.camera+"</span></div>"+
  "<div class=\"div_date\"><img class=\"item_img_date\" src=\"assets/icon_date.png\"/><span class=\"item_date\">"+date.date_convert()+"</span></div>"+
  "</div></div>";
}

run();