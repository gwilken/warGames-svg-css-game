
//electoral war, greg wilken

$(document).ready(function() {

	$(window).on('load', function () {	
	

	var User = function() {

	};


	var computerUser = function() {

	};


	var Game = function(test) {

		var that = this;
	
		this.setup = {

			userSelection: function() {
			}
		}


		this.states = {
			alabama = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 9,
				neighbors: [],
				initialTeam: 'south',
				effectivness: null
			},
			arkansas = {
				name: 'Arkansas',
				mapStateListIndex: 1,
				votes: 6,
				neighbors: [],
				initialTeam: 'south',
				effectivness: null
			},
			arizona = {
				name: 'Arizona',
				mapStateListIndex: 2,
				votes: 11,
				neighbors: [],
				initialTeam: 'west',
				effectivness: null
			},
			california = {
				name: 'California',
				mapStateListIndex: 3,
				votes: 55,
				neighbors: [],
				initialTeam: 'west',
				effectivness: null
			},
			colorado = {
				name: 'Colorado',
				mapStateListIndex: 4,
				votes: 9,
				neighbors: [],
				initialTeam: 'west',
				effectivness: null
			},
			connecticut = {
				name: 'Connecticut',
				mapStateListIndex: 5,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			delaware = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			florida = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			georgia = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			iowa = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			idaho = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			illinois = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			indiana = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			kansas = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			kentucky = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			louisiana = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			massachusetts = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			maryland = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			maine = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			michigan = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			minnesota = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			missouri = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			mississippi = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			montana = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			northCarolina = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			northDakota = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			nebraska = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			newHampshire = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			newJersey = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			newMexico = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			nevada = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			newYork = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			ohio = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			oklahoma = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			oregon = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			pennsylvania = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			rhodeIsland = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			southCarolina = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			southDakota = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			tennessee = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			texas = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			utah = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			virgina = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			vermot = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			washington = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			wisconsin = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			westVirgina = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			wyoming = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
			dc = {
				name: 'Alabama',
				mapStateListIndex: 0,
				votes: 0,
				neighbors: [],
				initialTeam: ,
				effectivness
			},
		}



		this.board = {
			
			setup: function() {

				this.boardMap = document.getElementById('usMap').contentDocument;
				this.stateList = this.boardMap.getElementsByTagName("path");
				this.color = 'orange';
		
				var that = this;

				for(var i = 0; i < this.stateList.length; i++  ) {
				
					that.stateList[i].addEventListener('click', function(event) {

						//that.changeStateColor(event.target, that.color) ;

						that.highlightState(event.target, that.color) ;

						that.updateScoreOf(event.target);

						console.log(that.stateList);

					})		
				}
			},

			changeStateColor: function(state, color) {
				state.style.fill = color;
			},
			
			highlightState: function(state, color) {
				state.style.strokeWidth = '.4%';
				state.style.stroke = 'white';
			},

			updateScoreOf: function(state) {
				
				// var text = document.createElement("TEXT");
				// var t = document.createTextNode("test test test");
				// text.appendChild(t);
				// state.appendChild(text);


				var pRect = state.getBoundingClientRect();
				
				//var pRect2 = state.getBBox();

				console.log('boundrect: ', pRect);
				//console.log('bbox: ', pRect2);

				// var xCenter = pRect1.top / 2;
				// var yCenter = pRect1.y / 2;
				
				$('#score').css({'top': pRect.top + (pRect.height / 4), 'left': pRect.left + (pRect.width / 3)});

    //           	var heightRatio = (pRect.height*0.3) / tRect.height;
    //           	var textScale = Math.min(widthRatio, heightRatio);



			}


		}




	};


	$('#button1').on('click', function() {
		//$('#usMap').css('width', '200%');

	})


	var newGame = new Game('test');
	newGame.board.setup();	




	});
})

