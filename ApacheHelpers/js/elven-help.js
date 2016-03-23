$(document).ready(function() {
    $('table').addClass('table table-striped table-hover');
 
    $('#getPresidents').click(getPresidents);
    $('#getApollo').click(getApollo);
    $('#getGemini').click(getGemini);
    $('#getMercury').click(getMercury);
    $('#getVostok').click(getVostok);
    $('#getVoskhod').click(getVoskhod);
    $('#getVoskhod').click(getAllAstronauts);

    function getPresidents() {
        $.getJSON('/cgi-bin/get-presidents.py', function(presidents) {
            presidents.forEach(function(president) {
                $('#bar').append('<li>' + president[1] + ' ' + president[2] + '</li>');
            });
        })
    }
        
    function getApollo() {
        $.getJSON('/cgi-bin/get-apollo.py', function(astronauts) {
            astronauts.forEach(function(astronaut) {
                $('#bar').append('<li>'  + astronaut[2] + ' - ' + astronaut[3] +'</li>');
            });
        })
    }
  
    function getGemini() {
        $.getJSON('/cgi-bin/get-gemini.py', function(astronauts) {
            astronauts.forEach(function(astronaut) {
                $('#bar').append('<li>' + astronaut[2] + ' - ' + astronaut[3] + '</li>');
            });
        })
    }
    
	function getMercury() {
        $.getJSON('/cgi-bin/get-mercury.py', function(astronauts) {
            astronauts.forEach(function(astronaut) {
                $('#bar').append('<li>' + astronaut[2] + ' - ' + astronaut[3] + '</li>');
            });
        })
    }
  
    function getVostok() {
        $.getJSON('/cgi-bin/get-vostok.py', function(astronauts) {
            astronauts.forEach(function(astronaut) {
                $('#bar').append('<li>' + astronaut[2] + ' - ' + astronaut[3] + '</li>');
            });
        })
    }
    
    function getVoskhod() {
        $.getJSON('/cgi-bin/get-voskhod.py', function(astronauts) {
            astronauts.forEach(function(astronaut) {
                $('#bar').append('<li>' + astronaut[2] + ' ' + astronaut[3] + '</li>');
            });
        })
    }
    
    function getAllAstronauts() {
        $.getJSON('/cgi-bin/get-allAstronauts.py', function(astronauts) {
            astronauts.forEach(function(astronaut) {
                $('#bar').append('<li>' + astronaut[2] + ' ' + astronaut[3] + '</li>');
            });
        })
    }
    
});
