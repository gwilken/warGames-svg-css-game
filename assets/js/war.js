
//electoral war, greg wilken

$(document).ready(function() {

	$(window).on('load', function () {	
	

	var Player = function() {
	};


	var computerUser = function() {
	};


	var war = function() {

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
						neighbors: ['MS','FL','GA','TN'],  
						effectivness: 1
					},
					{
						displayName: 'Arkansas',						
						id: 'AR',
						votes: 6,
						neighbors: [],
						team: 'south',
						neighbors: ['LA', 'MS', 'TX', 'OK', 'TN', 'MO'].
						effectivness: 1
					},
					{
						displayName: 'Arizona',						
						id: 'AZ',
						votes: 11,
						neighbors: ['NM', 'CO', 'UT', 'NV', 'CA'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'California',						
						id: 'CA',
						votes: 55,
						neighbors: ['AZ', 'NV', 'OR'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Colorado',
						id: 'CO',						
						votes: 9,
						neighbors: ['OK', 'KS','NE','WY', 'UT', 'AZ', 'NM'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Connecticut',	
						id: 'CT',				
						votes: 7,
						neighbors: ['RI', 'MA', 'NY'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Delaware',
						id: 'DE',					
						votes: 3,
						neighbors: ['NJ', 'PA', 'MD'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Florida',
						id: 'FL',					
						votes: 29,
						neighbors: ['GA', 'AL'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Georgia',
						id: 'GA',						
						votes: 16,
						neighbors: ['SC','NC','TN','AL','FL'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Iowa',
						id: 'IA',						
						votes: 6,
						neighbors: ['IL', 'WI', 'MN', 'SD', 'NE', 'KS', 'MO'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Idaho',
						id: 'ID',
						votes: 4,
						neighbors: ['WY', 'MT', 'WA', 'OR', 'NV', 'UT'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Illinois',
						id: 'IL',
						votes: 20,
						neighbors: ['WI', 'IA', 'MO', 'KY', 'IN'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Indiana',
						id: 'IN',
						votes: 11,
						neighbors: ['KY','OH','MI','IL'],
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
						neighbors: ['MO','NE','CO','OK'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Louisiana',
						id: 'LA',
						votes: 8,
						neighbors: ['MS', 'AR', 'TX'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Massachusetts',
						id: 'MA',
						votes: 11,
						neighbors: ['NH','VT','NY','CT','RI'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Maryland',
						id: 'MD',
						votes: 10,
						neighbors: ['DE','PA','WV','VA'],
						team: 'east' ,
						effectivness: 1
					},
					{
						displayName: 'Maine',
						id: 'ME',
						votes: 4,
						neighbors: ['NH'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Michigan',
						id: 'MI',
						votes: 16,
						neighbors: ['OH', 'IN', 'WI'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Minnesota',
						id: 'MN',
						votes: 10,
						neighbors: ['WI','IA','NE','SD','ND'],
						team: 'midwest' ,
						effectivness: 1
					},
					{
						displayName: 'Missouri',
						id: 'MO',
						votes: 10,
						neighbors: ['AR','TN','KY','IL','IA','NE','KS','OK','AR'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Mississippi',
						id: 'MS',
						votes: 6,
						neighbors: ['AL','TN','AR','LA'],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'Montana',
						id: 'MN',
						votes: 3,
						neighbors: ['ND','SD','WY','ID'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'North Carolina',
						id: 'NC',
						votes: 15,
						neighbors: ['VA','TN','GA','SC'],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'North Dakota',
						id: 'ND',
						votes: 3,
						neighbors: ['MN', 'SD', 'MT'],
						team: 'midwest' ,
						effectivness: 1
					},
					{
						displayName: 'Nebraska',
						id: 'NE',
						votes: 5,
						neighbors: ['MO', 'IA', 'SD', 'WY', 'CO', 'KS'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'New Hampshire',
						id: 'NH',
						votes: 4,
						neighbors: ['ME', 'VT', 'MA'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'New Jersey',
						id: 'NJ',
						votes: 14,
						neighbors: ['NY', 'PA', 'DE'],
						team: 'east' ,
						effectivness: 1
					},
					{
						displayName: 'New Mexico',
						id: 'NM',
						votes: 5,
						neighbors: ['TX','OK','CO','UT','AZ'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Nevada',
						id: 'NV',
						votes: 6,
						neighbors: ['ID', 'OR', 'CA', 'AZ', 'UT'],
						team: 'west' ,
						effectivness: 1
					},
					{
						displayName: 'New York',
						id: 'NY',
						votes: 29,
						neighbors: ['CT', 'MA', 'VT', 'PA', 'NJ'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Ohio',
						id: 'OH',
						votes: 18,
						neighbors: ['PA', 'WV', 'KY', 'IN', 'MI'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Oklahoma',
						id: 'OK',
						votes: 7,
						neighbors: ['AR', 'MO', 'KS', 'CO', 'NM', 'TX'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Oregon',
						id: 'OR',
						votes: 7,
						neighbors: ['CA','NV','ID','WA'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Pennsylvania',
						id: 'PA',
						votes: 20,
						neighbors: ['NY','NJ','MD','WV','OH'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Rhode Island',
						id: 'RI',
						votes: 4,
						neighbors: ['CT','MA'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'South Carolina',
						id: 'SC',
						votes: 9,
						neighbors: ['NC','GA'],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'South Dakota',
						id: 'SD',
						votes: 3,
						neighbors: ['MN','IA','NE','WY','MT','ND'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Tennesse',
						id: 'TN',
						votes: 11,
						neighbors: ['GA','NC','VA','KY','MO','AR','MS','AL'],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'Texas',
						id: 'TX',
						votes: 38,
						neighbors: ['LA','AR','OK','NM'],
						team: 'midwest' ,
						effectivness: 1
					},
					{
						displayName: 'Utah',
						id: 'UT',
						votes: 6,
						neighbors: ['NM','CO','WY','ID','NV','AZ'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Virgina',
						id: 'VA',
						votes: 13,
						neighbors: ['NC','TN','KY','WV','MD'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Vermont',
						id: 'VT',
						votes: 3,
						neighbors: ['NH','MA','NY'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Washington',
						id: 'WA',
						votes: 12,
						neighbors: ['ID', 'OR'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Wisconsin',
						id: 'WI',
						votes: 10,
						neighbors: ['IL','IA','MN', 'MI'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'West Virgina',
						id: 'WV',
						votes: 5,
						neighbors: ['MD','PA','OH','KY','VA'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Wyoming',
						id: 'WY',
						votes: 3,
						neighbors: ['SD','NE','CO','UT','ID','MT'],
						team: 'west',
						effectivness: 1
					}
				];

		var team = null;

		var zoomed = false;

		var initialViewBox = svg.getAttribute('viewBox');

		var that = this;


		var clickChoseTeam = function(event) {

			console.log('fired');

			that.team = event.target.getAttribute('class');

			that.updateMessage('Team ' + that.team + ' chosen');

			highlightTeamOff();

			for(var i = 0; i < statePath.length; i++  ) {

				statePath[i].removeEventListener('mouseover', highlightTeam);
			
				statePath[i].removeEventListener('mouseout', highlightTeamOff);

				statePath[i].removeEventListener('click', clickChoseTeam);

			};


			that.updateStatus(that.gameLoop);

		};

		var zoomToState = function(event) {

			var state = event.target;

			that.updateMessage('Zoom...');

			var scale = 100;

			var stateBBox = state.getBBox();

			var newCoords = (stateBBox.x - scale) + ' ' + (stateBBox.y - scale) + ' ' + (stateBBox.width + scale*2) + ' ' + (stateBBox.height + scale*2);

			svg.setAttribute('viewBox',  newCoords);

			zoomed = true;

			$('#zoomOut').css('display', 'inline');
		}

		var zoomOut = function() {

			console.log('zoom out');

			svg.setAttribute('viewBox', initialViewBox);

			zoomed = false;

			$('#zoomOut').css('display', 'none');
		}


		var clickReturnState = function(event) {

			callback(event.target);
	
		};


		var highlightState = function(event) {

			var state = event.target;

			//that.updateMessage(state.getAttribute('id') + ' selected');

			state.style.strokeWidth = '.5%';
			state.style.stroke = '#33ff33';
		};
 

		var highlightStateOff = function(event) {

			var state = event.target;

			state.style.strokeWidth = '1px';
			state.style.stroke = '#00b300';
		};

		var highlightTeam = function(event) {

			var val = event.target.getAttribute('value');
	
			var tempTeam = stateData[val].team;

			for( var i = 0; i < stateData.length; i++ ) {

				if ( stateData[i].team === tempTeam ) {
					statePath[i].style.strokeWidth = '3px';
					statePath[i].style.stroke = '#33ff33';
				}
			}
		};

		var highlightTeamOff = function() {

			for(var i = 0; i < statePath.length; i++) {

				statePath[i].style.strokeWidth = '1px';
				statePath[i].style.stroke = '#00b300';

			}
		};


		this.setupBoard = function() {
	
			that.updateMessage('Setting up board...');
	
			$('#zoomOut').on('click', zoomOut);


			for(var i = 0; i < statePath.length; i++  ) {
				statePath[i].addEventListener('dblclick', zoomToState);
			};	


			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener('mouseover', highlightTeam);

				statePath[i].addEventListener('mouseout', highlightTeamOff);
			};
			
		};

		this.chooseTeam = function() {

			that.updateMessage('Choose your team');

			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener('click', clickChoseTeam); 
			
			};
		};

		this.removeClickBehavior = function(func) {

			console.log('remove');

		 	for(var i = 0; i < statePath.length; i++) {
			
		 		statePath[i].removeEventListener('click', func);
		 	
		 	};
		 };

		this.assignClickBehavior = function(func) {
			
			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener('click', func);

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


		this.assignPattern = function() {

			for( var i = 0; i < statePath.length; i++  ) {
		
				var pattern = 'url(#' + stateData[i].team + ')';

				statePath[i].setAttribute('fill', pattern);

			};
		};
			



		var showLabel = function(event) {

			var state = event.target;

			that.updateMessage(state.getAttribute('id') + ' data...');

			console.log('label');
		
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

		this.updateStatus = function(callback) {
			
			for(var i = 0; i < stateData.length; i++) {

				if(stateData[i].team === that.team && stateData[i].votes > 0 && $('#' + stateData[i].id + '-ListItem').length != true) {
					
					console.log(stateData[i].displayName);

					var listItem = $('<li>');
					var score = $('<u>');

					listItem.attr('id', stateData[i].id + '-ListItem');
					listItem.attr('data-state', stateData[i].id);

					listItem.text(stateData[i].displayName + '  ');

					score.html(stateData[i].votes);
				//	score.addClass('align-right');

					listItem.append(score);

					$('#userStatusUl').append(listItem);

					console.log('last', $('#userStatusUl').find('li').last() );


				}

			}

			callback();

		};

		this.updateMessage = function(message) {

			var listItem = $('<li>');

			var terminalList = $('#terminalMessageUl');

			listItem.addClass('termMsg');

			listItem.text(message);

			if( $('.termMsg').length > 13) {

				$('.termMsg').last().remove();

			};

			terminalList.prepend(listItem);

		}

		this.gameLoop = function() {

			that.updateMessage('Game loop begin');


			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener('mouseover', highlightState);

			};

			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener('mouseout', highlightStateOff);

			};

			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener('click', showLabel);

			};



		}

	};
	
 	
 	var newgame = new war();

 	newgame.setupBoard();

 	newgame.assignPattern();

 	newgame.chooseTeam();


	});
})

