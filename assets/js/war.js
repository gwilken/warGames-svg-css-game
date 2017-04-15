
//electoral war, greg wilken

$(document).ready(function() {

	$(window).on('load', function () {	
	

	var Player = function() {
	};


	var computerUser = function() {
	};


	var game = function() {

		var boardMap = document.getElementById('usMap').contentDocument;
		var stateList = boardMap.getElementsByTagName("path");
		var state = [
					{
						name: 'Alabama',
						votes: 9,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						name: 'Arkansas',						
						votes: 6,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						name: 'Arizona',						
						votes: 11,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'California',						
						votes: 55,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'Colorado',						
						votes: 9,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'Connecticut',					
						votes: 7,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						name: 'Delaware',					
						votes: 3,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						name: 'Florida',					
						votes: 29,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						name: 'Georgia',						
						votes: 16,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						name: 'Iowa',						
						votes: 6,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'Idaho',
						votes: 4,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'Illinoia',
						votes: 20,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'Indiana',
						votes: 11,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'Kansas',
						votes: 6,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'Kentucky',
						votes: 8,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'Louisiana',
						votes: 8,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						name: 'Massachusetts',
						votes: 11,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						name: 'Maryland',
						votes: 10,
						neighbors: [],
						initialTeam: 'east' ,
						effectivness: 1
					},
					{
						name: 'Maine',
						votes: 4,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						name: 'Michigan',
						votes: 16,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'Minnesota',
						votes: 10,
						neighbors: [],
						initialTeam: 'midwest' ,
						effectivness: 1
					},
					{
						name: 'Missouri',
						votes: 10,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'Mississippi',
						votes: 6,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1
					},
					{
						name: 'Montana',
						votes: 3,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'North Carolina',
						votes: 15,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1
					},
					{
						name: 'North Dakota',
						votes: 3,
						neighbors: [],
						initialTeam: 'midwest' ,
						effectivness: 1
					},
					{
						name: 'Nebraska',
						votes: 5,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'New Hampshire',
						votes: 4,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						name: 'New Jersey',
						votes: 14,
						neighbors: [],
						initialTeam: 'east' ,
						effectivness: 1
					},
					{
						name: 'New Mexico',
						votes: 5,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'Nevada',
						votes: 6,
						neighbors: [],
						initialTeam: 'west' ,
						effectivness: 1
					},
					{
						name: 'New York',
						votes: 29,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						name: 'Ohio',
						votes: 18,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'Oklahoma',
						votes: 7,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'Oregon',
						votes: 7,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'Pennsylvania',
						votes: 20,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						name: 'Rhode Island',
						votes: 4,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						name: 'South Carolina',
						votes: 9,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1
					},
					{
						name: 'South Dakota',
						votes: 3,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'Tennesse',
						votes: 11,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1
					},
					{
						name: 'Texas',
						votes: 38,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1
					},
					{
						name: 'Utah',
						votes: 6,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'Virgina',
						votes: 13,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						name: 'Vermont',
						votes: 3,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						name: 'Washington',
						votes: 12,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'Wisconsin',
						votes: 10,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						name: 'West Virgina',
						votes: 5,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						name: 'Wyoming',
						votes: 3,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						name: 'D.C.',
						votes: 3,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					}
				];

		var color = 'orange';

		var that = this;

		this.setupBoard = function() {
	
			console.log('board setup');
	
				for(var i = 0; i < stateList.length; i++  ) {
				
					stateList[i].addEventListener('click', function(event) {

						//that.changeStateColor(event.target, that.color) ;

						//that.highlightState(event.target, that.color) ;

						//that.updateScoreOf(event.target);

						that.changeStateColor(event.target);

						//console.log(event.target);

						//console.log(that.state.cali			})		
					});
				};
			};

			this.refreshLabels = function() {
				
				console.log('refresh labels');

				for(var i = 0; i < 49; i++) {

					var box = stateList[i].getBoundingClientRect();

					var label = $('<h4>');

					label.css({'top': box.top + (box.height / 4), 'left': box.left + (box.width / 3)});
				 
				 	label.html(state[i].name);

				 	$('#boardContainer').append(label);
			 	
			 	};
			};

			this.repositionMap = function(top, left, zoom) {

				$('#usMap').animate({'top': top, 'left': left, 'width': zoom}, 500, 'linear', that.refreshLabels);

				console.log('repos');

			};

			this.changeStateColor = function(state) {
				

				pattern = document.createElementNS(state, 'pattern');

				pattern.setAttribute('id', 'test');

				state.appendChild(pattern);

				state.setAttribute('style', 'fill: url(#test);');

				//console.log(state);

				//var pattern = '<pattern id="boundingPattern" width=".50" height=".50" patternContentUnits="objectBoundingBox"><circle cx=".250" cy=".250” r=".1" fill="#ec7677" /></pattern>';

				//state.style.class = pattern;

			};
				
			this.highlightState = function(state, color) {
				state.style.strokeWidth = '.4%';
				state.style.stroke = 'white';
			};

			this.updateScore = function(state) {
					
					// var text = document.createElement("TEXT");
					// var t = document.createTextNode("test test test");
					// text.appendChild(t);
					// state.appendChild(text);


					//var pRect = state.getBoundingClientRect();
					
					//var pRect2 = state.getBBox();

					//console.log('boundrect: ', pRect);
					//console.log('bbox: ', pRect2);

					// var xCenter = pRect1.top / 2;
					// var yCenter = pRect1.y / 2;
					
					//$('#score').css({'top': pRect.top + (pRect.height / 4), 'left': pRect.left + (pRect.width / 3)});
				};

			};
	


		

	    //           	var heightRatio = (pRect.height*0.3) / tRect.height;
	    //           	var textScale = Math.min(widthRatio, heightRatio);

 	
 	var newgame = new game();

 	newgame.setupBoard();

	$('#button-1').on('click', function() {

		newgame.repositionMap('200px', '200px', '300%');

	})

	$('#button-2').on('click', function() {

		newgame.repositionMap('200px', '200px', '300%');
			
	})



	});
})

