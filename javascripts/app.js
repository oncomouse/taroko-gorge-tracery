var tracery_grammar; // Define tracery here or load it from the file defined below:
var tracery_grammar_file = 'data/grammar.json'; // Don't need to define this if grammar is defined above.

$(document).ready(function(){
	var grammar, stanza = [];
	
	function makeStanza(grammar) {
		return grammar.flatten('#origin#');
	}
	
	function poem() {
		var GorgeCanvas = $('#Gorge');
		if (stanza.length == 0) {
			stanza = makeStanza(grammar).split(/\s*\/ */);
		}

		if(GorgeCanvas.children().length >= 25) {
			GorgeCanvas.children().first().remove();
		}
		GorgeCanvas.append($('<div>' + stanza.shift() + '</div>'));
	}
	
	function start_poem(data) {
		tracery_grammar = data;
		grammar = tracery.createGrammar(tracery_grammar);
		stanza = [];

		window.setInterval(poem, 1200);
	}
	
	if (tracery_grammar === undefined) {
		$.ajax({
			type: 'GET',
			url: tracery_grammar_file,
			dataType: 'json', // type of data we are expecting in return
			timeout: 300,
			success: function(data){
				start_poem(data);
			},
			error: function(xhr, type){
				alert('Ajax error!')
			}
		});
	} else {
		start_poem(tracery_grammar);
	}
});