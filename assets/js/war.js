
//electoral war, greg wilken

$(document).ready(function() {

	$(window).on('load', function () {	
	

	var Player = function() {
	};


	var computerUser = function() {
	};


	var game = function() {

		var board = document.getElementById('usMap');

		var svg = document.getElementById('usMap').contentDocument.getElementById("mapSVG");

		var boardMap = document.getElementById('usMap').contentDocument.getElementById("outlines");

		var patternArray = document.getElementById('usMap').contentDocument.getElementsByTagName("pattern");

		var statePath = boardMap.getElementsByTagName("path");
		
		var stateData = [
					{
						displayName: 'Alabama',
						id: 'AL',
						votes: 9,
						neighbors: [],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Arkansas',						
						id: 'AR',
						votes: 6,
						neighbors: [],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Arizona',						
						id: 'AZ',
						votes: 11,
						neighbors: [],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'California',						
						id: 'CA',
						votes: 55,
						neighbors: [],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Colorado',
						id: 'CO',						
						votes: 9,
						neighbors: [],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Connecticut',	
						id: 'CT',				
						votes: 7,
						neighbors: [],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Delaware',
						id: 'DE',					
						votes: 3,
						neighbors: [],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Florida',
						id: 'FL',					
						votes: 29,
						neighbors: [],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Georgia',
						id: 'GA',						
						votes: 16,
						neighbors: [],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Iowa',
						id: 'IA',						
						votes: 6,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Idaho',
						id: 'ID',
						votes: 4,
						neighbors: [],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Illinois',
						id: 'IL',
						votes: 20,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Indiana',
						id: 'IN',
						votes: 11,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Kansas',
						id: 'KS',
						votes: 6,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Kentucky',
						id: 'KY',
						votes: 8,
						neighbors: [],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Louisiana',
						id: 'LA',
						votes: 8,
						neighbors: [],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Massachusetts',
						id: 'MA',
						votes: 11,
						neighbors: [],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Maryland',
						id: 'MD',
						votes: 10,
						neighbors: [],
						team: 'east' ,
						effectivness: 1
					},
					{
						displayName: 'Maine',
						id: 'ME',
						votes: 4,
						neighbors: [],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Michigan',
						id: 'MI',
						votes: 16,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Minnesota',
						id: 'MN',
						votes: 10,
						neighbors: [],
						team: 'midwest' ,
						effectivness: 1
					},
					{
						displayName: 'Missouri',
						id: 'MO',
						votes: 10,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Mississippi',
						id: 'MS',
						votes: 6,
						neighbors: [],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'Montana',
						id: 'MN',
						votes: 3,
						neighbors: [],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'North Carolina',
						id: 'NC',
						votes: 15,
						neighbors: [],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'North Dakota',
						id: 'ND',
						votes: 3,
						neighbors: [],
						team: 'midwest' ,
						effectivness: 1
					},
					{
						displayName: 'Nebraska',
						id: 'NE',
						votes: 5,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'New Hampshire',
						id: 'NH',
						votes: 4,
						neighbors: [],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'New Jersey',
						id: 'NJ',
						votes: 14,
						neighbors: [],
						team: 'east' ,
						effectivness: 1
					},
					{
						displayName: 'New Mexico',
						id: 'NM',
						votes: 5,
						neighbors: [],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Nevada',
						id: 'NV',
						votes: 6,
						neighbors: [],
						team: 'west' ,
						effectivness: 1
					},
					{
						displayName: 'New York',
						id: 'NY',
						votes: 29,
						neighbors: [],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Ohio',
						id: 'OH',
						votes: 18,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Oklahoma',
						id: 'OK',
						votes: 7,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Oregon',
						id: 'OR',
						votes: 7,
						neighbors: [],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Pennsylvania',
						id: 'PA',
						votes: 20,
						neighbors: [],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Rhode Island',
						id: 'RI',
						votes: 4,
						neighbors: [],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'South Carolina',
						id: 'SC',
						votes: 9,
						neighbors: [],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'South Dakota',
						id: 'SD',
						votes: 3,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Tennesse',
						id: 'TN',
						votes: 11,
						neighbors: [],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'Texas',
						id: 'TX',
						votes: 38,
						neighbors: [],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'Utah',
						id: 'UT',
						votes: 6,
						neighbors: [],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Virgina',
						id: 'VA',
						votes: 13,
						neighbors: [],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Vermont',
						id: 'VT',
						votes: 3,
						neighbors: [],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Washington',
						id: 'WA',
						votes: 12,
						neighbors: [],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Wisconsin',
						id: 'WI',
						votes: 10,
						neighbors: [],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'West Virgina',
						id: 'WV',
						votes: 5,
						neighbors: [],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Wyoming',
						id: 'WY',
						votes: 3,
						neighbors: [],
						team: 'west',
						effectivness: 1
					}
				];

		var team = 'midwest';

		var zoomed = false;

		var that = this;

		this.setupBoard = function() {
	
			console.log('board setup');
	
			//var elements = boardMap.getElementsByClassName('state');

			//console.log(elements);

			// elements[0].addEventListener('click', function(event) {
			// 	console.log('state class');
			// });

			that.assignClickBehavior( that.printTargetInfo );

			that.assignDoubleClickBehavior( that.zoomToState );

			that.assignHoverBehavior( that.highlightState, that.highlightStateOff );

			//that.refreshLabels();
			
		};


		this.assignClickBehavior = function(callback) {
			
			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener('click', function(event) {

					callback(event.target);
	
				});
			};
			
		};

		this.assignHoverBehavior = function(callbackHover, callbackOut) {

			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener('mouseover', function(event) {

					callbackHover(event.target);			

				});

				statePath[i].addEventListener('mouseout', function(event) {

					callbackOut(event.target);

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

		this.printTargetInfo = function(state) {
			console.log( 'Path info: ', state );
			console.log( 'Bounding Rectangle: ', state.getBoundingClientRect() );
			console.log( 'BBox: ', state.getBBox() );
			console.log( 'Current viewBox of SVG: ', svg.getAttribute('viewBox'));
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

			$('#usMap').css({'top': top, 'left': left, 'width': zoom});

		};

		this.repositionMapCartesianOnClick = function(state) {

			var stateBox = state.getBoundingClientRect();
			var mapBox = board.getBoundingClientRect();

			//quadrant 1

			if(( stateBox.x + (stateBox.width/2) < mapBox.width /2) && (stateBox.y + (stateBox.height/2) < mapBox.height /2)) {
				
				$('#usMap').css({'left': (((mapBox.width /2) - stateBox.x)) - (stateBox.width/2), 'top': (((mapBox.height /2) - stateBox.y)) - (stateBox.height/2)  });

			}

			//quadrant 2

			if(( stateBox.x + (stateBox.width/2) > mapBox.width /2) && (stateBox.y + (stateBox.height/2) < mapBox.height /2))  {

				$('#usMap').css({'left': (mapBox.x - (stateBox.x - (mapBox.width/2)) - (stateBox.width/2))  , 'top': (((mapBox.height /2) - stateBox.y)) - (stateBox.height/2)  });

			}

			//quadrant 3

			if(( stateBox.x + (stateBox.width/2) > mapBox.width /2)&& (stateBox.y + (stateBox.height/2) > mapBox.height /2))  {
				
				$('#usMap').css({'left':  (mapBox.x - (stateBox.x - (mapBox.width/2)) - (stateBox.width/2)),  'top': (mapBox.y - (stateBox.y - mapBox.height/2) - stateBox.height/2) });

			}

			//quadrant 4

			if(( stateBox.x + (stateBox.width/2) < mapBox.width /2) && (stateBox.y + (stateBox.height/2) > mapBox.height /2))  {
				
				$('#usMap').css({'left': (((mapBox.width /2) - stateBox.x)) - (stateBox.width/2), 'top': (mapBox.y - (stateBox.y - mapBox.height/2) - stateBox.height/2) });

			}

			//that.rescaleMap(2);
		};

		this.zoomToState = function(state) {

			var scale = 100;

			var stateBBox = state.getBBox();

			var newCoords = (stateBBox.x - scale) + ' ' + (stateBBox.y - scale) + ' ' + (stateBBox.width + scale*2) + ' ' + (stateBBox.height + scale*2);

			svg.setAttribute('viewBox',  newCoords);
		}

		this.assignPattern = function() {

			for( var i = 0; i < statePath.length; i++  ) {
		
				var pattern = 'url(#' + stateData[i].team + ')';

				statePath[i].setAttribute('fill', pattern);

			};

		};
			
		this.highlightState = function(state, color) {
			state.style.strokeWidth = '.5%';
			state.style.stroke = '#33ff33';
		};
 
		this.highlightStateOff = function(state) {
			state.style.strokeWidth = '.1%';
			state.style.stroke = '#00b300';
		};

		this.showLabel = function(state) {

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

		this.updateStatus = function(state) {
			
			for(var i = 0; i < stateData.length; i++) {

				if(stateData[i].team === team && stateData[i].votes > 0 && $('#' + stateData[i].id + 'ListItem').length != true) {
					console.log(stateData[i].displayName);

					var listItem = $('<li>');
					
					listItem.text(stateData[i].displayName);

					$('#userStatusUl').append(listItem);

				}

			}

 			// && $('#' + stateData[i].id + 'ListItem').length === null
			//if(state is in team 7 state votes > 0 && li doesnt exist already)
		};

		this.updateMessages = function() {

		}

		};
	


		

	    //           	var heightRatio = (pRect.height*0.3) / tRect.height;
	    //           	var textScale = Math.min(widthRatio, heightRatio);

 	
 	var newgame = new game();

 	newgame.setupBoard();

 	newgame.assignPattern();

 	newgame.updateStatus();



	$('#button-1').on('click', function() {

		newgame.repositionMap('200px', '200px', '300%');

	})

	$('#button-2').on('click', function() {

		newgame.repositionMap('200px', '200px', '300%');
			
	})



	});
})

