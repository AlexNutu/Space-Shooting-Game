window.onload = main;


function main(){
	
	eventListenerCuCapture();
	openIns();
	accesariLikeDislike();
	canvass();
	loop();
	
	
}	
	function eventListenerCuCapture(){
		document.getElementById("base").addEventListener('click',function(){alert("Ati dat refresh paginii!");},true);
		document.getElementById("refresh").addEventListener('click',function(){document.location.reload();});	
	}

	var isDroped = false;
	function allowDrop(ev) {
		ev.preventDefault();
	}
	function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
		if(!isDroped){
			
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		var x = document.getElementById(data);
		ev.target.appendChild(document.getElementById(data));	
		document.getElementById(data).style.top = "13px";
		document.getElementById(data).style.left = "10px";
	
		if(data.localeCompare("drag1")==0){
			if(localStorage.likes){ // session FlikeStorageStorage = dupa inchidere tab, revine la 1 counterul
			var n = Number(localStorage.likes); // local Storage = dupa inchidere tab, revine la ultimul counter
			n++;
			localStorage.likes = n;
			}else{ // daca nu e null ii atribuim val 1
				localStorage.likes = 1;
			}
			}else{ // suntem pe dislike
				if(localStorage.dislikes){ // session Storage = dupa inchidere tab, revine la 1 counterul
				var n = Number(localStorage.dislikes); // local Storage = dupa inchidere tab, revine la ultimul counter
				n++;
				localStorage.dislikes = n;
				}else{ // daca nu e null ii atribuim val 1
					localStorage.dislikes = 1;
				}
			}
		isDroped = true;
		}
	}
function apreciereJoc(){
	var a = document.getElementById("apreciere");
	a.style.visibility = 'visible';
	var a = document.getElementById("divapreciere");
	a.style.visibility = 'visible';
	a = document.getElementById("drag1");
	a.style.visibility = 'visible';
	a = document.getElementById("drag2");
	a.style.visibility = 'visible';
	
}


 var myWindow;
 function openIns() {
	
	 var o = document.getElementById("show");
	 o.addEventListener('click',function (){
		
		 myWindow = window.open("", "myWindow", "width=300,height=190");
		 myWindow.document.write("<h1> Instructiuni: </h1>");
		 myWindow.document.title = "Instructions";
		 myWindow.document.body.style.background = "#FDAD34";
		var linieNoua1 = document.createElement('br');var linieNoua2 = document.createElement('br');var linieNoua3 = document.createElement('br');var linieNoua4 = document.createElement('br');	
		var text1 = document.createTextNode("->Misca SUS:  SAGEATA SUS");
		var text2 = document.createTextNode("->Misca JOS:  SAGEATA JOS");
		var text3 = document.createTextNode("->Misca DREAPTA: SAGEATA DREAPTA");
		var text4 = document.createTextNode("->Misca STANGA:   SAGEATA STANGA");
		var text5 = document.createTextNode("->Trage cu laser:  SPACE");
		myWindow.document.body.appendChild(text1);
		myWindow.document.body.appendChild(linieNoua1);
		myWindow.document.body.appendChild(text2);
		myWindow.document.body.appendChild(linieNoua2);
		myWindow.document.body.appendChild(text3);
		myWindow.document.body.appendChild(linieNoua3);
		myWindow.document.body.appendChild(text4);
		myWindow.document.body.appendChild(linieNoua4);
		myWindow.document.body.appendChild(text5);	
	 });
	   var c = document.getElementById("close");
	   c.addEventListener('click',function (){
       myWindow.close(); 
	   });
 }

function accesariLikeDislike(){
		
	var acces = document.getElementById("accesari");
	if(localStorage.countRefresh){ // session Storage = dupa inchidere tab, revine la 1 counterul
		var n = Number(localStorage.countRefresh); // local Storage = dupa inchidere tab, revine la ultimul counter
		n++;
		localStorage.countRefresh = n;
		
	}else{ // daca nu e null ii atribuim val 1
		localStorage.countRefresh = 1;
	}
	acces.innerHTML =  "ACCESARI: ".bold().big() + localStorage.countRefresh.bold().big();
	 var temp = document.getElementById("likes");
	 temp.innerHTML = "LIKES: ".bold().big() + localStorage.likes;
	 temp = document.getElementById("dislikes");
	 temp.innerHTML = "DISLIKES: ".bold().big() + localStorage.dislikes;
}

var myVar = setInterval(function(){ ceas() }, 1000);
function ceas(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("ceas").innerHTML = t;
}

function culoareErou(){
	
	if(cul == false){
	if(document.getElementById('yellow').checked) { //Male radio button is checked
		var he = document.getElementById("hero");
		he.style.background = "yellow";
	}else if(document.getElementById('red').checked) { //Female radio button is checked
		var he = document.getElementById("hero");
		he.style.background = "red";
	}else if(document.getElementById('grey').checked) { //Female radio button is checked
		var he = document.getElementById("hero");
		he.style.background = "grey";
	}
	}
	cul = true;
}

function dificultate(){
	if(dif==-1){
	var dific = document.getElementById("dificultate");
	var selectedText = dific.options[dific.selectedIndex].text;
	if(selectedText.localeCompare("Usor") == 0){
		dif = 70;
	}else if(selectedText.localeCompare("Mediu") == 0){
		dif = 50;
	}else if(selectedText.localeCompare("Greu") == 0){
		dif = 0;
	}
	}
}
function extragInformatii(){
	
	if(!afisInf){
	var numeJucator = document.getElementById("nume");
	
	if(document.getElementById('rb').checked) { //Male radio button is checked
		var el = document.getElementById("afis");
		el.innerHTML = " Domnul " + numeJucator.value + " a obtinut scorul \n" + " <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + score;
	}else if(document.getElementById('rf').checked) { //Female radio button is checked
		el.innerHTML = " Doamna " + numeJucator.value + " a obtinut scorul \n" + " <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + score;
	}
	
	var b = document.getElementById("again");
	b.style.visibility = 'visible';
	b.onclick = function(){
		window.location.reload();
	}
	
	}
	afisInf = true;
}

var LEFT_KEY = 37; // salvam valorile, codurile, butoanelor in variabile pentru ca vom lucra cu ele in functia toogleKey
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
var SPACE_KEY = 32;
var HERO_MOVEMENT = 10; // variabile care o incrementam/decrementam pentru a schimba pozitia eroului nostru

var lastLoopRun = 0;
var score = 0;
var iterations = 0;
var isValid = true;
var start = false;
var afisInf = false;
var dif=-1;
var cul = false;

var controller = new Object();
var enemies = new Array();

function createSprite(element,x,y,w,h){ // ne ajuta sa creem acei spini din joc
	var result = new Object();
	result.element = element;
	result.x = x;
	result.y = y;
	result.w = w;
	result.h = h;	
	return result;
}

function toggleKey(keyCode, isPressed){
	if(keyCode == LEFT_KEY){
		controller.left = isPressed;
	}
	if(keyCode == RIGHT_KEY){
		controller.right = isPressed;
	}
	if(keyCode == UP_KEY){
		controller.up = isPressed;
	}
	if(keyCode == DOWN_KEY){
		controller.down = isPressed;
	}
	if(keyCode == SPACE_KEY){
		controller.space = isPressed;
	}
}

function intersects(a,b){ // a este patratul rosu si verificam daca se intersecteaza cu marginile inamicilor 
		return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function ensureBounds(sprite, ignoreY){ // functie ce ne asigura ca eroul nostru nu depaseste marginea paginii web, il incadram intr-un "patrat" 	
	
	 if(sprite.x < 230){ // verificam pentru erou sa nu se deplaseze in afarara intervalului stabilit de noi
		 sprite.x = 230;
	 }
	if(!ignoreY && sprite.y < 300){
		sprite.y = 300;
	}
	 if(sprite.x + sprite.w > 1380){// verificam pentru erou sa nu se deplaseze in afarara intervalului stabilit de noi
		 sprite.x = 1380 - sprite.w;
	 }
	if(!ignoreY && sprite.y + sprite.h > 960){
		sprite.y = 960 - sprite.h;
	}
}

function setPosition(sprite){
	
	var e = document.getElementById(sprite.element);//creem un obiect "sprite", iar acesta va avea proprietatea element 
													//ce ne va spune unde gasim "div-ul", sau elementul HTML
	e.style.left = sprite.x + 'px'; // pentru a-i seta pozitia acolo unde dorim
	e.style.top = sprite.y + 'px';
	
													
}

function handleControls(){
	if(controller.up){
		hero.y -= HERO_MOVEMENT;
	}
	if(controller.down){
		hero.y += HERO_MOVEMENT;
	}
	if(controller.right){ 
		hero.x += HERO_MOVEMENT;
	}
	if(controller.left){
		hero.x -= HERO_MOVEMENT;
	}
	if(controller.space && laser.y <= 250){ // va face ca laserul sa nu iasa de pe ecran si sa avem un efect de reload, cand apasam SPACE apare din nou(doar dupa ce iese din ecran)
		 var la = document.getElementById(laser.element);
		 la.style.visibility = 'visible';
		laser.x = hero.x + 9;
		laser.y = hero.y - laser.h;
	} 
	if(laser.y <= 250){ // daca laserul depaseste "ecranul" negru, atunci il vom face element ascuns
		 var la = document.getElementById(laser.element);
		 la.style.visibility = 'hidden';
	 }
	
	ensureBounds(hero); // ignoreY va avea valoarea false 
	
}

function checkCollisions(){
	for(var i=0; i<enemies.length; i++){
		if(intersects(laser, enemies[i])){
			var element = document.getElementById(enemies[i].element);
			element.style.visibility = 'hidden';
			element.parentNode.removeChild(element);	
			enemies.splice(i, 1);// stergem de pe pozitia i, 1 valoare 
			i--;
			laser.y = -laser.h; 
			score += 10;
		}else if(intersects(hero,enemies[i])){
			gameOver(); isValid = false;
		}else if(enemies[i].y + enemies[i].h >=970){
			var element = document.getElementById(enemies[i].element);// modificare dinamica a stilizarii unui grup de elemente
			element.style.visibility = 'hidden'; //  
			element.parentNode.removeChild(element);	
			enemies.splice(i, 1);// stergem de pe pozitia i, 1 valoare 
			i--;
		}
	}
}

function gameOver(){
	
	var element = document.getElementById(hero.element);
	element.style.visibility = 'hidden';
	element = document.getElementById('gameover');
	element.style.visibility = 'visible';
	
	element = document.getElementById('afis');
	element.style.visibility = 'visible';
	
	for(var i=0;i<enemies.length;i++){
		var element = document.getElementById(enemies[i].element);
		element.style.visibility = 'hidden';
	}
	element = document.getElementById(laser.element);
	element.style.visibility = 'hidden';
	
	extragInformatii();
	apreciereJoc();
	
}

function showSprites(){
	setPosition(hero);
	setPosition(laser);
	for(var i=0; i<enemies.length;i++){
		setPosition(enemies[i]); 
	}
	
}

function updatePositions(){ // vrem sa actualizam to ce nu  avem acces direct in jocul nostru, de eX: nu avem control direct pentru laserul nostru, doar il lansam
	
	for(var i=0; i<enemies.length; i++){
		enemies[i].y += 8;
		enemies[i].x += getRandom(7) - 3;
		ensureBounds(enemies[i],true);
	}
	laser.y -= 22;
}

function addEnemy(){ // adauga random un inamic in jocul nostru
	var interval = dif; 
	if(iterations > 1000){
		interval = interval -2;
	}else if(iterations > 700){
		interval = interval - 1;
	}else if(iterations > 500){
		interval = interval - 0.6;
	}else if(iterations > 300){
		interval = interval - 0.4;
	}else if(iterations > 100){
		interval = interval - 0.2;
	}
	
	
		if(getRandom(interval) == 0){ // ne va genera un inamic in aprox 2 secunde 
		var elementName = 'enemy' + getRandom(10000000); // val random e f mare ca sa nu avem nume apropiate, pt a nu avea coliziuni
		
		var ran = getRandom(1550);
		if(ran >=230 && ran <=1380){
		var enemy = createSprite(elementName, ran, 200, 35, 35); // random(x) = intre 0 si x
		
		var element = document.createElement('div');
		element.id = enemy.element;
		element.className = 'enemy';
		document.children[0].appendChild(element);//ADAUGARE add
		
		enemies[enemies.length] = enemy;
		}
	}	
}

function getRandom(maxSize){
	return parseInt(Math.random() * maxSize); // math.random ne genereaza un numar random intre 0 si 1
}

function loop(){ // am creat functia pentru a nu avea incetiniri in timpul miscarii jucatorului, 40 sunt milisecunde 
	if(new Date().getTime() - lastLoopRun > 40){ // Date().getTime() ne va da timpul in milisecunde,
	// getTime va fi foarte mare, la primul apel sigur e mai mare decat 40, pt ca lastLoopRun = 0, dupa care e updatat
	updatePositions(); // actualizeaza pozitiile inamicilor
	handleControls();
	
	checkCollisions();
	
	var h = document.getElementById(hero.element); // laserul nu este vizibil pana cand utilizatorul nu apasa butonul start
	h.style.display = 'none';
	
	var l = document.getElementById(laser.element);
	l.style.display = 'none';
	
	var scoreElement = document.getElementById('score'); // calculam la fiecare pas scorul
	var scoreAfis = ("SCOR: ").concat(score); // FUNCTIE STRING
	scoreElement.innerHTML = scoreAfis.bold().big(); // FUNCTII STRING
	
	
	if(isValid && start){ // cand 'start' este apasat jocul va incepe
						  // cand 'isValid' este false, inseamna ca jocul s-a terminat, cand este true, jocul incepe
	h.style.display = 'block'; // eroul si laserul sunt visiblile cand utilizatorul apasa butonul START
	l.style.display = 'block';
	dificultate();
	culoareErou();
	addEnemy();
	
	showSprites();
	
	lastLoopRun = new Date().getTime();
	iterations++;
	}
	}
	setTimeout('loop();', 2);// 2 milisecunde
}

document.onkeydown = function(evt){ // cand utilizatorul apasa un buton, este un event handler

	toggleKey(evt.keyCode, true);
	
};

document.onkeyup = function(evt){ // cand utilizatorul nu mai apasa un buton
	toggleKey(evt.keyCode, false);
};

var hero = createSprite('hero', 750, 860, 20, 20);
var laser = createSprite('laser', 0, -120, 2, 50);



function canvass(){
	
	
    var ctx = canvas.getContext('2d');
    ctx.font = '15px sans-serif';

    // mouse event variables
    var mousePosition = {
      x: 0,
      y: 0
    };
    var mousePressed = false;

    /**
     * Track the user's mouse position on mouse move.
     * @param {Event} event
     */
    canvas.addEventListener('mousemove', function(event) {
      mousePosition.x = event.offsetX || event.layerX;
      mousePosition.y = event.offsetY || event.layerY;
    });

    /**
     * Track the user's clicks.
     * @param {Event} event
     */
    canvas.addEventListener('mousedown', function(event) {
      mousePressed = true;
    });
    canvas.addEventListener('mouseup', function(event) {
      mousePressed = false;
    });

    /**
     * A button with hover and active states.
     * @param {integer} x     - X coordinate of the button.
     * @param {integer} y     - Y coordinate of the button.
     * @param {integer} w     - Width of the button.
     * @param {integer} h     - Height of the button.
     * @param {string}  text  - Text on the button.
     * @param {object}  colors - Default, hover, and active colors.
     *
     * @param {object} colors.default - Default colors.
     * @param {string} colors.default.top - Top default button color.
     * @param {string} colors.default.bottom - Bottom default button color.
     *
     * @param {object} colors.hover - Hover colors.
     * @param {string} colors.hover.top - Top hover button color.
     * @param {string} colors.hover.bottom - Bottom hover button color.
     *
     * @param {object} colors.active - Active colors.
     * @param {string} colors.active.top - Top active button color.
     * @param {string} colors.active.bottom - Bottom active button color.
     *
     * @param {function} clickCB - The funciton to call when the button is clicked.
     */
    function Button(x, y, w, h, text, colors, clickCB) {
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.colors = colors;
      this.text = text;
		
      this.state = 'default';  // current button state, culorile butonului
        
      var isClicking = false;

      /**
       * Check to see if the user is hovering over or clicking on the button.
       */
      this.update = function() {
        // check for hover
        if (mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
            mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) {
          this.state = 'hover';
			
          // check for click
          if (mousePressed) {
            this.state = 'active';
            if (typeof clickCB === 'function' && !isClicking) {
              clickCB();
              isClicking = true;
            }
          }
          else {
            isClicking = false;
          }
        }
        else {
          this.state = 'default';
        }
      };

      /**
       * Draw the button.
       */
      this.draw = function() {
        ctx.save();

        var colors = this.colors[this.state];
        var halfH = this.height / 2;

        // button
        ctx.fillStyle = colors.top;
        ctx.fillRect(this.x, this.y, this.width, halfH);
        ctx.fillStyle = colors.bottom;
        ctx.fillRect(this.x, this.y + halfH, this.width, halfH);

        // text
        var size = ctx.measureText(this.text);
        var x = this.x + (this.width - size.width) / 2;
        var y = this.y + (this.height - 15) / 2 + 12;

        ctx.fillStyle = '#FFF';
        ctx.fillText(this.text, x, y);

        ctx.restore();
      };
    }

    var playButton = new Button(100, 20, 100, 70, 'PLAY', {
      
	  'default': {
        top: '#1879BD',
        bottom: '#084D79'
	  },
      'hover': {
        top: '#678834',
        bottom: '#093905'
      },
      'active': {
        top: '#EB7723',
        bottom: '#A80000'
      }
    }, function() {
		start = true;
    });

    function animate() {
      requestAnimationFrame(animate);

      playButton.update();
      playButton.draw();
    }

    requestAnimationFrame(animate);
	
}




