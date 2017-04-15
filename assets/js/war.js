
//electoral war, greg wilken

$(document).ready(function() {

	$(window).on('load', function () {	
	

	var Player = function() {
	};


	var computerUser = function() {
	};


	var game = function() {

		var boardMap = document.getElementById('usMap').contentDocument.getElementById("outlines");

		var pattern = document.getElementById('usMap').contentDocument.getElementsByTagName("pattern");

		var statePath = boardMap.getElementsByTagName("path");
		
		var stateData = [
					{
						displayName: 'Alabama',
						id: 'AL',
						votes: 9,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						displayName: 'Arkansas',						
						id: 'AR',
						votes: 6,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						displayName: 'Arizona',						
						id: 'AZ',
						votes: 11,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						displayName: 'California',						
						id: 'CA',
						votes: 55,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						displayName: 'Colorado',
						id: 'CO',						
						votes: 9,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						displayName: 'Connecticut',	
						id: 'CT',				
						votes: 7,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						displayName: 'Delaware',
						id: 'DE',					
						votes: 3,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						displayName: 'Florida',
						id: 'FL',					
						votes: 29,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						displayName: 'Georgia',
						id: 'GA',						
						votes: 16,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						displayName: 'Iowa',
						id: 'IA',						
						votes: 6,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Idaho',
						id: 'ID',
						votes: 4,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						displayName: 'Illinois',
						id: 'IL',
						votes: 20,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Indiana',
						id: 'IN',
						votes: 11,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Kansas',
						id: 'KS',
						votes: 6,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Kentucky',
						id: 'KY',
						votes: 8,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						displayName: 'Louisiana',
						id: 'LA',
						votes: 8,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						displayName: 'Massachusetts',
						id: 'MA',
						votes: 11,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						displayName: 'Maryland',
						id: 'MD',
						votes: 10,
						neighbors: [],
						initialTeam: 'east' ,
						effectivness: 1
					},
					{
						displayName: 'Maine',
						id: 'ME',
						votes: 4,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						displayName: 'Michigan',
						id: 'MI',
						votes: 16,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Minnesota',
						id: 'MN',
						votes: 10,
						neighbors: [],
						initialTeam: 'midwest' ,
						effectivness: 1
					},
					{
						displayName: 'Missouri',
						id: 'MO',
						votes: 10,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Mississippi',
						id: 'MS',
						votes: 6,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'Montana',
						id: 'MN',
						votes: 3,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						displayName: 'North Carolina',
						id: 'NC',
						votes: 15,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'North Dakota',
						id: 'ND',
						votes: 3,
						neighbors: [],
						initialTeam: 'midwest' ,
						effectivness: 1
					},
					{
						displayName: 'Nebraska',
						id: 'NE',
						votes: 5,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'New Hampshire',
						id: 'NH',
						votes: 4,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						displayName: 'New Jersey',
						id: 'NJ',
						votes: 14,
						neighbors: [],
						initialTeam: 'east' ,
						effectivness: 1
					},
					{
						displayName: 'New Mexico',
						id: 'NM',
						votes: 5,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						displayName: 'Nevada',
						id: 'NV',
						votes: 6,
						neighbors: [],
						initialTeam: 'west' ,
						effectivness: 1
					},
					{
						displayName: 'New York',
						id: 'NY',
						votes: 29,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						displayName: 'Ohio',
						id: 'OH',
						votes: 18,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Oklahoma',
						id: 'OK',
						votes: 7,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Oregon',
						id: 'OR',
						votes: 7,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						displayName: 'Pennsylvania',
						id: 'PA',
						votes: 20,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						displayName: 'Rhode Island',
						id: 'RI',
						votes: 4,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						displayName: 'South Carolina',
						id: 'SC',
						votes: 9,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'South Dakota',
						id: 'SD',
						votes: 3,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Tennesse',
						id: 'TN',
						votes: 11,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'Texas',
						id: 'TX',
						votes: 38,
						neighbors: [],
						initialTeam: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'Utah',
						id: 'UT',
						votes: 6,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						displayName: 'Virgina',
						id: 'VA',
						votes: 13,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						displayName: 'Vermont',
						id: 'VT',
						votes: 3,
						neighbors: [],
						initialTeam: 'east',
						effectivness: 1
					},
					{
						displayName: 'Washington',
						id: 'WA',
						votes: 12,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					},
					{
						displayName: 'Wisconsin',
						id: 'WI',
						votes: 10,
						neighbors: [],
						initialTeam: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'West Virgina',
						id: 'WV',
						votes: 5,
						neighbors: [],
						initialTeam: 'south',
						effectivness: 1
					},
					{
						displayName: 'Wyoming',
						id: 'WY',
						votes: 3,
						neighbors: [],
						initialTeam: 'west',
						effectivness: 1
					}
				];


		var color = 'orange';

		var that = this;

		this.setupBoard = function() {
	
			console.log('board setup');
	
			//var elements = boardMap.getElementsByClassName('state');

			//console.log(elements);

			// elements[0].addEventListener('click', function(event) {
			// 	console.log('state class');
			// });

			that.assignClickBehavior( that.repositionMapOnClick );

			that.assignDoubleClickBehavior( that.highlightState );

			that.refreshLabels();
			
		};


		this.assignClickBehavior = function(callback) {
			
			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener('click', function(event) {

					callback(event.target);
	
				});
			};
			
		};

		this.assignDoubleClickBehavior = function(callback) {
			
			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener('dblclick', function(event) {

					callback(event.target);
	
				});
			};
			
		};

		this.printTarget = function(state) {
			console.log(state);
		}


		this.createLabels = function() {

			for(var i = 0; i < stateData.length; i++) {

				var box = statePath[i].getBoundingClientRect();

				//console.log(box);

				var label = $('<h4>');

				label.css({'top': box.top + (box.height / 4), 'left': box.left + (box.width / 3)});
			 
			 	label.html(stateData[i].displayName);

			 	$('#boardContainer').append(label);
		 	
		 	};
		};

		this.refreshLabels = function() {
			
			console.log('refresh labels');

		};

		this.repositionMapManual = function(top, left, zoom) {

			$('#usMap').animate({'top': top, 'left': left, 'width': zoom}, 500, 'linear', that.refreshLabels);

			console.log('repos');

		};

		this.repositionMapOnClick = function(state) {

			var stateBox = state.getBoundingClientRect();

			console.log(stateBox);

			var currentMapXpos = $('#usMap').css('left');

			console.log(currentMapXpos); 

			$('#usMap').animate({'top': stateBox.top , 'left': stateBox.left}, 500, 'linear', that.refreshLabels);

			console.log('repos');

		};

		this.assignStripPattern = function(state) {

			state.setAttribute('fill', 'url(#stripes)' );

		}

		this.changeStateColor = function(state) {
			

			state.setAttribute('fill', 'url(#stripes)');
			state.setAttribute('stroke', 'white');

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

