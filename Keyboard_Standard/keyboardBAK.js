function writeMessage(message) {
        text.setText(message);
        layer.draw();
      }
function writeCord(cords) {
	cord.setText(cords);
	layer.draw();
      }

      var strCord;
      var stage = new Kinetic.Stage({
        container: 'container',
        width: 1100,
        height: 500
      });
      var layer = new Kinetic.Layer();
//__________________
//First Row Of Keys
//__________________

      var keyQ = new Kinetic.Rect({
	x: 50,
        y: stage.height()/5,
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      



//_____________________________________
//NON KEY AGGRGATE FUNCTIONS
//_____________________________________
      var text = new Kinetic.Text({
        x: 10,
        y: 10,
        fontFamily: 'Garamond',
        fontSize: 24,
        text: '',
        fill: 'black'
      });

      	var cord = new Kinetic.Text({
	x: 500,
        y: 275,
        fontFamily: 'Garamond',
        fontSize: 24,
        text: '',
        fill: 'black'	
      	});
      

	stage.on('mousemove', function() {
        	var mousePos = stage.getPointerPosition();
        	var x = mousePos.x;
        	var y = mousePos.y;
        	writeCord('x: ' + x + ', y: ' + y);
      	});

//__________________________________________________
//Key functions
//______________________________________________

      
      keyQ.on('mouseover', function(){
	writeMessage('Q');
      });



      layer.add(keyQ);
      layer.add(keyTxtQ);





      layer.add(cord);
      layer.add(text);
      stage.add(layer);