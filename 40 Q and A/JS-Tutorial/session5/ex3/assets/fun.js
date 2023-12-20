var authors_name= ["Albert Einstein","Confucius","Maya Angelou","Abraham Lincoln","Winston Churchill","Oscar Wilde","Henry David Thoreau","Aristotle"];
var authors_pic= ["alberteinstein.jpg","confucius.png","mayaangelou.png","abrahamlincoln.jpg","winstonchurchill.jpg","oscarwilde.webp","henrydavidthoreau.jpg","aristotle.jpg"];
var quotes= ["The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.","By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.","I have great respect for the past. If you don't know where you've come from, you don't know where you're going. I have respect for the past, but I'm a person of the moment. I'm here, and I do my best to be completely centered at the place I'm at, then I go forward to the next place.","I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live by the light that I have. I must stand with anybody that stands right, and stand with him while he is right, and part with him when he goes wrong.","We shall defend our island, whatever the cost may be, we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.","Beauty is the only thing that time cannot harm. Philosophies fall away like sand, creeds follow one another, but what is beautiful is a joy for all seasons, a possession for all eternity.","I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.","Anybody can become angry - that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way - that is not within everybody's power and is not easy."];

var quote_text= document.getElementById("quote_text");
var author_text= document.getElementById("author_text");
var number_text= document.getElementById("number_text");

var author_image= document.getElementById("author_image");

var last_random_number=0;

function display_quotes(number_item){
    number_text.innerText= "#"+number_item;
    quote_text.innerText= "\""+quotes[number_item]+"\"";
    author_text.innerText= authors_name[number_item];
    author_image.src= "assets/"+authors_pic[number_item];
}

function random_number(){
    let r_number= Math.round( Math.random() * quotes.length-1);
    if(r_number != last_random_number && r_number >= 0){
        last_random_number= r_number;
        return r_number;
    }else{
        last_random_number= 0;
        return 0;
    }
}
function show_quotes(){
    let getnumber= random_number();
    display_quotes(getnumber);
}

show_quotes();