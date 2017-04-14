
//electoral war, greg wilken

$(document).ready(function() {

	$(window).on('load', function () {	
	

	var Player = function() {

	};


	var computerUser = function() {

	};


	var Game = function() {

			var that = this;
			
			this.state = //{

					// get: function(state, attr) {

					// 	return( [this.state][attr]) ;
					
					// },

					// getStateByIndex(index) {
					// 	return()
					// }

					// set: function(state, attr, value) {

					// 	this[state][attr] = value;
					
					// },

					[{
						name: 'Alabama',
						mapStateListIndex: 0,
						votes: 9,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1,
					},
					{
						name: 'Arkansas',
						mapStateListIndex: 1,
						votes: 6,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1,
					},
					{
						name: 'Arizona',
						mapStateListIndex: 2,
						votes: 11,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'California',
						mapStateListIndex: 3,
						votes: 55,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'Colorado',
						mapStateListIndex: 4,
						votes: 9,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'Connecticut',
						mapStateListIndex: 5,
						votes: 7,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1,
					},
					{
						name: 'Delaware',
						mapStateListIndex: 6,
						votes: 3,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1,
					},
					{
						name: 'Florida',
						mapStateListIndex: 7,
						votes: 29,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1,
					},
					{
						name: 'Georgia',
						mapStateListIndex: 8,
						votes: 16,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1,
					},
					{
						name: 'Iowa',
						mapStateListIndex: 9,
						votes: 6,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'Idaho',
						mapStateListIndex: 10,
						votes: 4,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'Illinoia',
						mapStateListIndex: 11,
						votes: 20,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'Indiana',
						mapStateListIndex: 12,
						votes: 11,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'Kansas',
						mapStateListIndex: 13,
						votes: 6,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'Kentucky',
						mapStateListIndex: 14,
						votes: 8,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'Louisiana',
						mapStateListIndex: 15,
						votes: 8,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1,
					},
					{
						name: 'Massachusetts',
						mapStateListIndex: 16,
						votes: 11,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1,
					},
					{
						name: 'Maryland',
						mapStateListIndex: 17,
						votes: 10,
						neighbors: [],
						initialTeam: 'east' ,
						effectivness: 1,
					},
					{
						name: 'Maine',
						mapStateListIndex: 18,
						votes: 4,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1,
					},
					{
						name: 'Michigan',
						mapStateListIndex: 19,
						votes: 16,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'Minnesota',
						mapStateListIndex: 20,
						votes: 10,
						neighbors: [],
						initialTeam: 'midwest' ,
						effectivness: 1,
					},
					{
						name: 'Missouri',
						mapStateListIndex: 21,
						votes: 10,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'Mississippi',
						mapStateListIndex: 22,
						votes: 6,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1,
					},
					{
						name: 'Montana',
						mapStateListIndex: 23,
						votes: 3,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'North Carolina',
						mapStateListIndex: 24,
						votes: 15,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1,
					},
					{
						name: 'North Dakota',
						mapStateListIndex: 25,
						votes: 3,
						neighbors: [],
						initialTeam: 'midwest' ,
						effectivness: 1,
					},
					{
						name: 'Nebraska',
						mapStateListIndex: 26,
						votes: 5,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'New Hampshire',
						mapStateListIndex: 27,
						votes: 4,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1,
					},
					{
						name: 'New Jersey',
						mapStateListIndex: 28,
						votes: 14,
						neighbors: [],
						initialTeam: 'east' ,
						effectivness: 1,
					},
					{
						name: 'New Mexico',
						mapStateListIndex: 29,
						votes: 5,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'Nevada',
						mapStateListIndex: 30,
						votes: 6,
						neighbors: [],
						initialTeam: 'west' ,
						effectivness: 1,
					},
					{
						name: 'New York',
						mapStateListIndex: 31,
						votes: 29,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1,
					},
					{
						name: 'Ohio',
						mapStateListIndex: 32,
						votes: 18,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'Oklahoma',
						mapStateListIndex: 33,
						votes: 7,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'Oregon',
						mapStateListIndex: 34,
						votes: 7,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'Pennsylvania',
						mapStateListIndex: 35,
						votes: 20,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1,
					},
					{
						name: 'Rhode Island',
						mapStateListIndex: 36,
						votes: 4,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1,
					},
					{
						name: 'South Carolina',
						mapStateListIndex: 37,
						votes: 9,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1,
					},
					{
						name: 'South Dakota',
						mapStateListIndex: 38,
						votes: 3,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'Tennesse',
						mapStateListIndex: 39,
						votes: 11,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1,
					},
					{
						name: 'Texas',
						mapStateListIndex: 40,
						votes: 38,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1,
					},
					{
						name: 'Utah',
						mapStateListIndex: 41,
						votes: 6,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'Virgina',
						mapStateListIndex: 42,
						votes: 13,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1,
					},
					{
						name: 'Vermont',
						mapStateListIndex: 43,
						votes: 3,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1,
					},
					{
						name: 'Washington',
						mapStateListIndex: 44,
						votes: 12,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'Wisconsin',
						mapStateListIndex: 45,
						votes: 10,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1,
					},
					{
						name: 'West Virgina',
						mapStateListIndex: 46,
						votes: 5,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1,
					},
					{
						name: 'Wyoming',
						mapStateListIndex: 47,
						votes: 3,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1,
					},
					{
						name: 'D.C.',
						mapStateListIndex: 48,
						votes: 3,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					}
				];
			
			this.boardMap = document.getElementById('usMap').contentDocument;
			
			this.stateList = this.boardMap.getElementsByTagName("path");

			this.color = 'orange';


			this.setup = function() {

				//this.state.set('california', 'name', 'bob');
				
				//console.log(this.state.california.name);

				//console.log(this.stateList[this.state.california.mapStateListIndex]);

				 for(var i = 0; i < 49; i++) {

					var box = this.stateList[i].getBoundingClientRect();

					var label = $('<p>');

					label.attr('data-label-',  i).css({'top': box.top + (box.height / 4), 'left': box.left + (box.width / 3)});
				 
				 	label.html(this.state[i].name);

				 	$('#boardContainer').append(label);
				 }
				 
				
				var that = this;

				for(var i = 0; i < this.stateList.length; i++  ) {
				
					that.stateList[i].addEventListener('click', function(event) {

						//that.changeStateColor(event.target, that.color) ;

						that.highlightState(event.target, that.color) ;

						that.updateScoreOf(event.target);

						console.log(event.target);

						//console.log(that.state.california.mapStateListIndex;

					})		
				}
			};

			this.changeStateColor = function(state, color) {
				state.style.fill = color;
			};
			
			this.highlightState = function(state, color) {
				state.style.strokeWidth = '.4%';
				state.style.stroke = 'white';
			};

			this.updateScoreOf = function(state) {
				
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
			};
	};




	


	$('#button1').on('click', function() {
		//$('#usMap').css('width', '200%');
	})


	var newGame = new Game();
		
newGame.setup();



	});
})

