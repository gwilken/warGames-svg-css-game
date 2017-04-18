
//electoral war, greg wilken

$(document).ready(function() {

	$(window).on('load', function () {	
	

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
						index: 0,
						votes: 9,
						team: 'south',
						neighbors: ['MS','FL','GA','TN'],  
						effectivness: 1
					},
					{
						displayName: 'Arkansas',						
						id: 'AR',
						index: 1,
						votes: 6,
						team: 'midwest',
						neighbors: ['LA', 'MS', 'TX', 'OK', 'TN', 'MO'],
						effectivness: 1
					},
					{
						displayName: 'Arizona',						
						id: 'AZ',
						index: 2,
						votes: 11,
						neighbors: ['NM', 'CO', 'UT', 'NV', 'CA'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'California',						
						id: 'CA',
						index: 3,
						votes: 55,
						neighbors: ['AZ', 'NV', 'OR'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Colorado',
						id: 'CO',						
						index: 4,
						votes: 9,
						neighbors: ['OK', 'KS','NE','WY', 'UT', 'AZ', 'NM'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Connecticut',	
						id: 'CT',				
						index: 5,
						votes: 7,
						neighbors: ['RI', 'MA', 'NY'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Delaware',
						id: 'DE',					
						index: 6,
						votes: 3,
						neighbors: ['NJ', 'PA', 'MD'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Florida',
						id: 'FL',					
						index: 7,
						votes: 29,
						neighbors: ['GA', 'AL'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Georgia',
						id: 'GA',						
						index: 8,
						votes: 16,
						neighbors: ['SC','NC','TN','AL','FL'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Iowa',
						id: 'IA',						
						index: 9,
						votes: 6,
						neighbors: ['IL', 'WI', 'MN', 'SD', 'NE', 'KS', 'MO'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Idaho',
						id: 'ID',
						index: 10,
						votes: 4,
						neighbors: ['WY', 'MT', 'WA', 'OR', 'NV', 'UT'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Illinois',
						id: 'IL',
						index: 11,
						votes: 20,
						neighbors: ['WI', 'IA', 'MO', 'KY', 'IN'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Indiana',
						id: 'IN',
						index: 12,
						votes: 11,
						neighbors: ['KY','OH','MI','IL'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Kansas',
						id: 'KS',
						index: 13,
						votes: 6,
						neighbors: ['AR','MO','NE','CO','OK'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Kentucky',
						id: 'KY',
						index: 14,
						votes: 8,
						neighbors: ['MO','TN','VA','WV', 'OH', 'IN', 'IL'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Louisiana',
						id: 'LA',
						index: 15,
						votes: 8,
						neighbors: ['MS', 'AR', 'TX'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Massachusetts',
						id: 'MA',
						index: 16,
						votes: 11,
						neighbors: ['NH','VT','NY','CT','RI'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Maryland',
						id: 'MD',
						index: 17,
						votes: 10,
						neighbors: ['DE','PA','WV','VA'],
						team: 'east' ,
						effectivness: 1
					},
					{
						displayName: 'Maine',
						id: 'ME',
						index: 18,
						votes: 4,
						neighbors: ['NH'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Michigan',
						id: 'MI',
						index: 19,
						votes: 16,
						neighbors: ['OH', 'IN', 'WI'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Minnesota',
						id: 'MN',
						index: 20,
						votes: 10,
						neighbors: ['WI','IA','NE','SD','ND'],
						team: 'midwest' ,
						effectivness: 1
					},
					{
						displayName: 'Missouri',
						id: 'MO',
						index: 21,
						votes: 10,
						neighbors: ['AR','TN','KY','IL','IA','NE','KS','OK','AR'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Mississippi',
						id: 'MS',
						index: 22,
						votes: 6,
						neighbors: ['AL','TN','AR','LA'],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'Montana',
						id: 'MN',
						index: 23,
						votes: 3,
						neighbors: ['ND','SD','WY','ID'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'North Carolina',
						id: 'NC',
						index: 24,
						votes: 15,
						neighbors: ['VA','TN','GA','SC'],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'North Dakota',
						id: 'ND',
						index: 25,
						votes: 3,
						neighbors: ['MN', 'SD', 'MT'],
						team: 'midwest' ,
						effectivness: 1
					},
					{
						displayName: 'Nebraska',
						id: 'NE',
						index: 26,
						votes: 5,
						neighbors: ['MO', 'IA', 'SD', 'WY', 'CO', 'KS'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'New Hampshire',
						id: 'NH',
						index: 27,
						votes: 4,
						neighbors: ['ME', 'VT', 'MA'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'New Jersey',
						id: 'NJ',
						index: 28,
						votes: 14,
						neighbors: ['NY', 'PA', 'DE'],
						team: 'east' ,
						effectivness: 1
					},
					{
						displayName: 'New Mexico',
						id: 'NM',
						index: 29,
						votes: 5,
						neighbors: ['TX','OK','CO','UT','AZ'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Nevada',
						id: 'NV',
						index: 30,
						votes: 6,
						neighbors: ['ID', 'OR', 'CA', 'AZ', 'UT'],
						team: 'west' ,
						effectivness: 1
					},
					{
						displayName: 'New York',
						id: 'NY',
						index: 31,
						votes: 29,
						neighbors: ['CT', 'MA', 'VT', 'PA', 'NJ'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Ohio',
						id: 'OH',
						index: 32,
						votes: 18,
						neighbors: ['PA', 'WV', 'KY', 'IN', 'MI'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Oklahoma',
						id: 'OK',
						index: 33,
						votes: 7,
						neighbors: ['AR', 'MO', 'KS', 'CO', 'NM', 'TX'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Oregon',
						id: 'OR',
						index: 34,
						votes: 7,
						neighbors: ['CA','NV','ID','WA'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Pennsylvania',
						id: 'PA',
						index: 35,
						votes: 20,
						neighbors: ['NY','NJ','MD','WV','OH'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Rhode Island',
						id: 'RI',
						index: 36,
						votes: 4,
						neighbors: ['CT','MA'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'South Carolina',
						id: 'SC',
						index: 37,
						votes: 9,
						neighbors: ['NC','GA'],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'South Dakota',
						id: 'SD',
						index: 38,
						votes: 3,
						neighbors: ['MN','IA','NE','WY','MT','ND'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'Tennesse',
						id: 'TN',
						index: 39,
						votes: 11,
						neighbors: ['GA','NC','VA','KY','MO','AR','MS','AL'],
						team: 'south' ,
						effectivness: 1
					},
					{
						displayName: 'Texas',
						id: 'TX',
						index: 40,
						votes: 38,
						neighbors: ['LA','AR','OK','NM'],
						team: 'midwest' ,
						effectivness: 1
					},
					{
						displayName: 'Utah',
						id: 'UT',
						index: 41,
						votes: 6,
						neighbors: ['NM','CO','WY','ID','NV','AZ'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Virgina',
						id: 'VA',
						index: 42,
						votes: 13,
						neighbors: ['NC','TN','KY','WV','MD'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Vermont',
						id: 'VT',
						index: 43,
						votes: 3,
						neighbors: ['NH','MA','NY'],
						team: 'east',
						effectivness: 1
					},
					{
						displayName: 'Washington',
						id: 'WA',
						index: 44,
						votes: 12,
						neighbors: ['ID', 'OR'],
						team: 'west',
						effectivness: 1
					},
					{
						displayName: 'Wisconsin',
						id: 'WI',
						index: 45,
						votes: 10,
						neighbors: ['IL','IA','MN', 'MI'],
						team: 'midwest',
						effectivness: 1
					},
					{
						displayName: 'West Virgina',
						id: 'WV',
						index: 46,
						votes: 5,
						neighbors: ['MD','PA','OH','KY','VA'],
						team: 'south',
						effectivness: 1
					},
					{
						displayName: 'Wyoming',
						id: 'WY',
						index: 47,
						votes: 3,
						neighbors: ['SD','NE','CO','UT','ID','MT'],
						team: 'west',
						effectivness: 1
					}
				];

		var zoomed = false;

		var boardReady = false;

		var initialViewBox = svg.getAttribute('viewBox');

		var team = null;

		var currentState = null;

		var currentEnemyState = null;

		var gameActive = false;

		var that = this;


		var zoomToState = function(event) {

			var state = event.target;

			updateMessage('Zoom...');

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

		var getNeighbors = function(event) {

			var index = event.target.getAttribute('value');

			return stateData[index].neighbors;
		}

		var isNeighbor = function(event) {

			//console.log('isneig: ', currentState);

			var clickedStateId = event.target.getAttribute('id');

			if(currentState.neighbors.includes(clickedStateId)) {

				return true;
			
			} else return false;
		}

		var isOnTeam = function(event) {

			var index = event.target.getAttribute('value');

			if( stateData[index].team === team ) { 

				return true;

			} else return false;
		}

		var highlightStateFill = function(event) {

			var state = event.target;

			state.style.fill = '#33ff33';
			state.style.fillOpacity = '.3';
		}

		var highlightStateFillOff = function(event) {

			console.log('fill off');

			var state = event.target;

			var pattern = 'url(#' + stateData[state.getAttribute('value')].team + ')';

			console.log(pattern);

			state.style.fillOpacity = '1';
			state.style.fill = pattern;
		};

		var highlightState = function(event) {

			var state = event.target;

			state.style.strokeWidth = '5px';
			state.style.stroke = '#33ff33';
		};
 
 		var highlightStateIfOnTeam = function(event) {

 			var state = event.target;

 			if(state.getAttribute('class') === team) {

				state.style.strokeWidth = '5px';
				state.style.stroke = '#33ff33';

 			}
 		}

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
					statePath[i].style.strokeWidth = '5px';
					statePath[i].style.stroke = '#33ff33';
				}
			}
		};

		var highlightAllOff = function() {

			for(var i = 0; i < statePath.length; i++) {

				statePath[i].style.strokeWidth = '1px';
				statePath[i].style.stroke = '#00b300';

			}
		};

		var highlightNeighbors = function() {

			for(var i = 0; i < statePath.length; i ++) {

				if (currentState.neighbors.includes ( (statePath[i].getAttribute('id') ) ) && stateData[i].team !== currentState.team) {
					
					statePath[i].style.strokeWidth = '5px';
					//statePath[i].style.strokeDasharray = '1 3 1 3';
					statePath[i].style.stroke = '#33ff33';

				}
			}
		}

		var highlightPair = function(state1, state2) {

			state1.style.strokeWidth = '5px';
			state1.style.stroke = '#33ff33';

			state2.style.strokeWidth = '5px';
			state2.style.stroke = '#33ff33';
		}

		var removeEvent = function(event, func) {

		 	for(var i = 0; i < statePath.length; i++) {
			
		 		statePath[i].removeEventListener(event, func);
		 	
		 	};
		 };

		var assignEvent = function(event, func) {
			
			for(var i = 0; i < statePath.length; i++  ) {
			
				statePath[i].addEventListener(event, func);

			};
		};

		var printTargetInfo = function(state) {

			console.log( 'Path info: ', state );
			console.log( 'Bounding Rectangle: ', state.getBoundingClientRect() );
			console.log( 'BBox: ', state.getBBox() );
			console.log( 'Current viewBox of SVG: ', svg.getAttribute('viewBox'));
		}

		var assignPattern = function() {

			for( var i = 0; i < statePath.length; i++  ) {
		
				var pattern = 'url(#' + stateData[i].team + ')';

				statePath[i].setAttribute('fill', pattern);

			};
		};
			
		var showStateInfo = function(event) {

			var state = stateData[ event.target.getAttribute('value') ];

	
			updateMessage('-----------');
		
			updateMessage('TEAM: ' + state.team.toUpperCase());

			updateMessage('-----------');

			updateMessage('VOTES LEFT: ' + state.votes);

			updateMessage('-----------');

			updateMessage(state.displayName);


			//console.log(getNeighbors(event));

			//console.log(isOnTeam(event));
		};

		var showPlayerTeamStatus = function() {
			
			$('#userStatusUl').empty();

			for(var i = 0; i < stateData.length; i++) {

				if(stateData[i].team === team && stateData[i].votes > 0 && $('#' + stateData[i].id + '-ListItem').length != true) {
					
					var listItem = $('<li>');
					var score = $('<u>');

					listItem.attr('id', stateData[i].id + '-ListItem');
					listItem.attr('data-state', stateData[i].id);

					listItem.text(stateData[i].displayName + '  ');

					score.html(stateData[i].votes);

					listItem.append(score);

					$('#userStatusUl').append(listItem);

				}
			}
		};

		var showPlayerStateStatus = function(state) {

			var userUl = $('#userStatusUl');
			
			userUl.empty();

			userUl.append( $('<li>').addClass('highlight bigger').html(state.displayName));

			userUl.append( $('<li>'). html('-------------------'));

			userUl.append( $('<li>').html('Votes remaining: ' + state.votes) );
		
			userUl.append( $('<li>'). html('-------------------'));
		}

		var showBattleStatus = function(targetState, playerState) {

			var userUl = $('#userStatusUl');

			userUl.empty();
			
			userUl.append( $('<li>').addClass('highlight bigger').html(playerState.displayName));

			userUl.append( $('<li>'). html('-------------------'));

			userUl.append( $('<li>').html('Votes remaining: ' + playerState.votes) );
		
			userUl.append( $('<li>'). html('-------------------'));


			userUl.append( $('<li>').addClass('vs').html('vs.') );


			userUl.append( $('<li>').addClass('highlight bigger').html(targetState.displayName));

			userUl.append( $('<li>'). html('-------------------'));

			userUl.append( $('<li>').html('Votes remaining: ' + targetState.votes) );
		
			userUl.append( $('<li>'). html('-------------------'));
		}

		var updateMessage = function(message) {

			var listItem = $('<li>');

			var terminalList = $('#terminalMessageUl');

			listItem.addClass('termMsg');

			listItem.text(message);

			if( $('.termMsg').length > 9) {

				$('.termMsg').last().remove();

			};

			terminalList.prepend(listItem);
		};

		var clearMessages = function() {

			$('#terminalMessageUl').empty();	
		}

		var setupBoard = function(callback) {
	
			updateMessage('Setting up board');
			
			if(!boardReady) {
			
				assignPattern();

				$('#zoomOut').on('click', zoomOut);

				assignEvent('dblclick', zoomToState);

				boardReady = true;
				
				updateMessage('Board ready');

				callback();
			
			 } 
		};

		var chooseTeam = function() {

			//updateMessage('Choose your team');

			$('#userStatusUl').empty();

			var listItem = $('<li>');
			
			listItem.addClass('highlight').html('Choose your region');

			$('#userStatusUl').append(listItem);

				
			if( team === null ) {

				assignEvent('mouseover', highlightTeam);
				assignEvent('mouseout', highlightAllOff);
				

				var tempFunc = function(event) {

					team = event.target.getAttribute('class');

					console.log('inside choose team', team);

					updateMessage('Team ' + team + ' chosen');

					var teamHeadline = $('<u>').html('TEAM ' + team.toUpperCase());

					$('#teamHeader').html(teamHeadline);

					highlightAllOff();

					removeEvent('mouseover', highlightTeam);
					removeEvent('mouseout', highlightAllOff);

					removeEvent('click', tempFunc);

					showPlayerTeamStatus();

					choosePlayerState();
				};

				assignEvent('click', tempFunc);

			};
		};

		var choosePlayerState = function() {

			updateMessage('-----------');
			updateMessage('Choose a state on your team to launch an attack!');

			assignEvent('mouseover', highlightStateIfOnTeam);
			assignEvent('mouseout', highlightStateOff);

			var tempFunc = function(event) {

				var state = stateData[ event.target.getAttribute('value') ];

				if ( !isOnTeam(event) ) {

					updateMessage('-----------');
					updateMessage('Not on your team!');
				
				} else {

					currentState = state;

					showPlayerStateStatus(state);

					removeEvent('mouseover', highlightStateIfOnTeam);
					removeEvent('mouseout', highlightStateOff);	
				
					highlightAllOff();

					removeEvent('click', tempFunc);

					chooseStateInRange();

					}
			}

			assignEvent('click', tempFunc);	
		};

		var chooseStateInRange = function() {

			updateMessage('-----------');
			updateMessage('Choose a state in range to attack!');

			
			highlightAllOff();

			highlightNeighbors();

			// assignEvent('mouseover', highlightState);
			
			// assignEvent('mouseout', highlightStateOff);

			
			var tempFunc = function(event) {

				var state = stateData[ event.target.getAttribute('value') ];

				if ( !isOnTeam(event) && isNeighbor(event) ) {

					console.log('valid target');
				
					// removeEvent('mouseover', highlightState);
			
					// removeEvent('mouseout', highlightStateOff);

				//	assignPattern();

					userAttack(event);

				} else {

					updateMessage('-----------');
					updateMessage('Not a valid target!');

					}
			}

			assignEvent('click', tempFunc);
		}

		var userAttack = function(event) {

			zoomToState(event);

			highlightAllOff();

			highlightPair(event.target, statePath[currentState.index]);

			clearMessages();

			updateMessage('---------------------');

			updateMessage(currentState.displayName + ' attacks ' + stateData[event.target.getAttribute('value')].displayName + '!');

			battle(stateData[event.target.getAttribute('value')], currentState);
		}

		var computerAttack = function() {




			console.log('comp attack');

		};

		var battle = function(targetState, playerState) {

			showBattleStatus(targetState, playerState);


				console.log('battle loop');


				setTimeout(function() {

		
					var coinToss = Math.floor(Math.random() * 2);


					var voteLostChange = Math.round(Math.random() * targetState.votes);
						
					var voteGainedChange = Math.round(Math.random() * playerState.votes);



					if(coinToss === 1) {

						targetState.votes -= voteLostChange;

						playerState.votes += voteGainedChange;
				
						updateMessage('---------------------');

						updateMessage(targetState.displayName +  ' lost ' + voteLostChange + ' votes!'); 

						updateMessage(playerState.displayName + ' gained ' + voteGainedChange + ' more votes!'); 


							if(targetState.votes < 1) {

								targetState.votes = 0;

								targetState.team = playerState.team;

								statePath[targetState.index].setAttribute('class', playerState.team);

								showBattleStatus(targetState, playerState);
								
								assignPattern();

								zoomOut();

								updateMessage(playerState.displayName + ' wins!');

								updateMessage('---------------------');

								updateMessage('Team ' + playerState.team + ' takes ' + targetState.displayName + '!');

								highlightAllOff();

							//	computerAttack();

								choosePlayerState();

							};


						if(targetState.votes > 0 && currentState.votes > 0) {

							battle(targetState, currentState);

						};


					} else {

						updateMessage('---------------------');

						playerState.votes -= voteLostChange;

						targetState.votes += voteGainedChange;

						updateMessage(targetState.displayName + ' gained ' + voteGainedChange + ' more votes!'); 
				
						updateMessage(playerState.displayName +  ' lost ' + voteLostChange + ' votes!'); 


							if(playerState.votes < 1) {
								
								playerState.votes = 0;

								playerState.team = targetState.team;

								statePath[playerState.index].setAttribute('class', targetState.team);

								showBattleStatus(targetState, playerState);

								assignPattern();

								zoomOut();

								updateMessage(targetState.displayName + ' wins!');

								updateMessage('---------------------');

								updateMessage('Team ' + targetState.team + ' takes ' + playerState.displayName + '!');

								highlightAllOff();

							//	computerAttack();

								choosePlayerState();

							};

 
						if(targetState.votes > 0 && currentState.votes > 0) {

							battle(targetState, currentState);

						};


					};

				
			}, 1000);



			console.log(targetState.votes, playerState.votes);
		};

		var gameOver = function() {		
		};


		setupBoard(chooseTeam);

	};
	
 	
 	var game = new war();


	});
})

