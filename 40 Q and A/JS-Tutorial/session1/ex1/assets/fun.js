var text_model3= "Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.";
var text_modelx= "With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. All Model X powertrains, with updated battery architecture, can deliver instant torque at any speed.";
var text_modely= "Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.";

var img_model3= 'assets/model_3.jpg';
var img_modelx= 'assets/model_x.jpg';
var img_modely= 'assets/model_y.jpg';

function get_model3() {
  document.getElementById("catalog_text").innerText= text_model3;
  document.getElementById("catalog_img").src = img_model3;
}

function get_modelx() {
  document.getElementById("catalog_text").innerText= text_modelx;
  document.getElementById("catalog_img").src = img_modelx;
}

function get_modely() {
  document.getElementById("catalog_text").innerText= text_modely;
  document.getElementById("catalog_img").src = img_modely;
}

get_model3();