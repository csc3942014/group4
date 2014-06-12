var messageRecord = "";
function writeMessage(message) {
    //text.setText(message);
    if (message == "Enter") {
        OnEnter();
        messageRecord = "";
    }
    else if (message == "BkSp") {
        if (messageRecord != "")
            messageRecord = messageRecord.substr(0, messageRecord.length - 1);
    }
    else if (message == "Spc")
        messageRecord += " ";
    else
        messageRecord += message;
    Output(messageRecord);
        
    layer.draw();
}
function writeCord(cords) {
	cord.setText(cords);
	layer.draw();
      }


//____________________________________
//Defining Stage for Keyboard Area
//____________________________________
      	var stage = new Kinetic.Stage({
        	container: 'container',
        	width: 1100,
        	height: 500
      	});
      	var layer = new Kinetic.Layer();


//___________________________________
//Defining First Row Of Keys
//___________________________________

      	var keyQ = new Kinetic.Rect({
		x: 50,
       		y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      
	var keyTxtQ = new Kinetic.Text({
        	x: 50,
        	y: stage.height()/5,
        	text: 'Q',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyW = new Kinetic.Rect({
		x: 100,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtW = new Kinetic.Text({
        	x: 100,
        	y: stage.height()/5,
        	text: 'W',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyE = new Kinetic.Rect({
		x: 150,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtE = new Kinetic.Text({
        	x: 150,
        	y: stage.height()/5,
        	text: 'E',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyR = new Kinetic.Rect({
		x: 200,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtR = new Kinetic.Text({
        	x: 200,
        	y: stage.height()/5,
        	text: 'R',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyT = new Kinetic.Rect({
		x: 250,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtT = new Kinetic.Text({
        	x: 250,
        	y: stage.height()/5,
        	text: 'T',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyY = new Kinetic.Rect({
		x: 300,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtY = new Kinetic.Text({
        	x: 300,
        	y: stage.height()/5,
        	text: 'Y',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
     	 });

      	var keyU = new Kinetic.Rect({
		x: 350,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtU = new Kinetic.Text({
        	x: 350,
        	y: stage.height()/5,
        	text: 'U',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyI = new Kinetic.Rect({
		x: 400,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtI = new Kinetic.Text({
        	x: 400,
        	y: stage.height()/5,
        	text: 'I',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyO = new Kinetic.Rect({
		x: 450,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtO = new Kinetic.Text({
        	x: 450,
        	y: stage.height()/5,
        	text: 'O',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

      	var keyP = new Kinetic.Rect({
		x: 500,
        	y: stage.height()/5,
        	width: 50,
        	height: 50,
        	fill: 'white',
        	stroke: 'black',
        	strokeWidth: 4
      	});

      	var keyTxtP = new Kinetic.Text({
        	x: 500,
        	y: stage.height()/5,
        	text: 'P',
        	fontSize: 45,
        	fontFamily: 'Calibri',
        	fill: 'green'
      	});

//___________________________________
//Defining Second Row Of Keys
//___________________________________

      var keyA = new Kinetic.Rect({
	x: 50,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtA = new Kinetic.Text({
        x: 50,
        y: 2*(stage.height()/5),
        text: 'A',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyS = new Kinetic.Rect({
	x: 100,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtS = new Kinetic.Text({
        x: 100,
        y: 2*(stage.height()/5),
        text: 'S',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyD = new Kinetic.Rect({
	x: 150,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtD = new Kinetic.Text({
        x: 150,
        y: 2*(stage.height()/5),
        text: 'D',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyF = new Kinetic.Rect({
	x: 200,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtF = new Kinetic.Text({
        x: 200,
        y: 2*(stage.height()/5),
        text: 'F',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyG = new Kinetic.Rect({
	x: 250,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtG = new Kinetic.Text({
        x: 250,
        y: 2*(stage.height()/5),
        text: 'G',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyH = new Kinetic.Rect({
	x: 300,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtH = new Kinetic.Text({
        x: 300,
        y: 2*(stage.height()/5),
        text: 'H',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyJ = new Kinetic.Rect({
	x: 350,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtJ = new Kinetic.Text({
        x: 350,
        y: 2*(stage.height()/5),
        text: 'J',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyK = new Kinetic.Rect({
	x: 400,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtK = new Kinetic.Text({
        x: 400,
        y: 2*(stage.height()/5),
        text: 'K',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyL = new Kinetic.Rect({
	x: 450,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtL = new Kinetic.Text({
        x: 450,
        y: 2*(stage.height()/5),
        text: 'L',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyBkSp = new Kinetic.Rect({
	x: 500,
        y: 2*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtBkSp = new Kinetic.Text({
        x: 500,
        y: 2*(stage.height()/5),
        text: '<-',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

//___________________________________
//Defining Third Row Of Keys
//___________________________________



      var keyZ = new Kinetic.Rect({
	x: 50,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtZ = new Kinetic.Text({
        x: 50,
        y: 3*(stage.height()/5),
        text: 'Z',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyX = new Kinetic.Rect({
	x: 100,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtX = new Kinetic.Text({
        x: 100,
        y: 3*(stage.height()/5),
        text: 'X',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyC = new Kinetic.Rect({
	x: 150,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtC = new Kinetic.Text({
        x: 150,
        y: 3*(stage.height()/5),
        text: 'C',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyV = new Kinetic.Rect({
	x: 200,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtV = new Kinetic.Text({
        x: 200,
        y: 3*(stage.height()/5),
        text: 'V',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyB = new Kinetic.Rect({
	x: 250,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtB = new Kinetic.Text({
        x: 250,
        y: 3*(stage.height()/5),
        text: 'B',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyN = new Kinetic.Rect({
	x: 300,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtN = new Kinetic.Text({
        x: 300,
        y: 3*(stage.height()/5),
        text: 'N',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyM = new Kinetic.Rect({
	x: 350,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtM = new Kinetic.Text({
        x: 350,
        y: 3*(stage.height()/5),
        text: 'M',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keySpc = new Kinetic.Rect({
	x: 400,
        y: 3*(stage.height()/5),
        width: 100,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtSpc = new Kinetic.Text({
        x: 400,
        y: 3*(stage.height()/5),
        text: 'Space',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

      var keyEnter = new Kinetic.Rect({
	x: 500,
        y: 3*(stage.height()/5),
        width: 50,
        height: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 4
      });

      var keyTxtEnter = new Kinetic.Text({
        x: 500,
        y: 3*(stage.height()/5),
        text: '<!',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: 'green'
      });

//_____________________________________
//NON KEY AGGRGATE DISPLAY DEFINITIONS
//_____________________________________
      var text = new Kinetic.Text({
        x: 50,
        y: 70,
        fontFamily: 'Garamond',
        fontSize: 24,
        text: '',
        fill: 'black'
      });

      	var cord = new Kinetic.Text({
	x: 450,
        y: 360,
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
//First row
//______________________________________________      


      keyQ.on('mouseover', function(){
	writeMessage('Q');
      });
      keyW.on('mouseover', function(){
	writeMessage('W');
      });
      keyE.on('mouseover', function(){
	writeMessage('E');
      });
      keyR.on('mouseover', function(){
	writeMessage('R');
      });
      keyT.on('mouseover', function(){
	writeMessage('T');
      });
      keyY.on('mouseover', function(){
	writeMessage('Y');
      });
      keyU.on('mouseover', function(){
	writeMessage('U');
      });
      keyI.on('mouseover', function(){
	writeMessage('I');
      });
      keyO.on('mouseover', function(){
	writeMessage('O');
      });
      keyP.on('mouseover', function(){
	writeMessage('P');
      });


//__________________________________________________
//Key functions
//______________________________________________
//Second row
//______________________________________________  

      keyA.on('mouseover', function(){
	writeMessage('A');
      });
      keyS.on('mouseover', function(){
	writeMessage('S');
      });
      keyD.on('mouseover', function(){
	writeMessage('D');
      });
      keyF.on('mouseover', function(){
	writeMessage('F');
      });
      keyG.on('mouseover', function(){
	writeMessage('G');
      });
      keyH.on('mouseover', function(){
	writeMessage('H');
      });
      keyJ.on('mouseover', function(){
	writeMessage('J');
      });
      keyK.on('mouseover', function(){
	writeMessage('K');
      });
      keyL.on('mouseover', function(){
	writeMessage('L');
      });
      keyBkSp.on('mouseover', function(){
	writeMessage('BkSp');
      });


//__________________________________________________
//Key functions
//______________________________________________
//Third row
//______________________________________________  
      
      keyZ.on('mouseover', function(){
	writeMessage('Z');
      });
      keyX.on('mouseover', function(){
	writeMessage('X');
      });
      keyC.on('mouseover', function(){
	writeMessage('C');
      });
      keyV.on('mouseover', function(){
	writeMessage('V');
      });
      keyB.on('mouseover', function(){
	writeMessage('B');
      });
      keyN.on('mouseover', function(){
	writeMessage('N');
      });
      keyM.on('mouseover', function(){
	writeMessage('M');
      });
      keySpc.on('mouseover', function(){
	writeMessage('Spc');
      });
      keyEnter.on('mouseover', function(){
	writeMessage('Enter');
      });

//______________________________________
//Display Layer
//______________________________________
//First Row
//______________________________________

      layer.add(keyQ);
      layer.add(keyTxtQ);
      layer.add(keyW);
      layer.add(keyTxtW);
      layer.add(keyE);
      layer.add(keyTxtE);
      layer.add(keyR);
      layer.add(keyTxtR);
      layer.add(keyT);
      layer.add(keyTxtT);
      layer.add(keyY);
      layer.add(keyTxtY);
      layer.add(keyU);
      layer.add(keyTxtU);
      layer.add(keyI);
      layer.add(keyTxtI);
      layer.add(keyO);
      layer.add(keyTxtO);
      layer.add(keyP);
      layer.add(keyTxtP);


//______________________________________
//Display Layer
//______________________________________
//Second Row
//______________________________________


      layer.add(keyA);
      layer.add(keyTxtA);
      layer.add(keyS);
      layer.add(keyTxtS);
      layer.add(keyD);
      layer.add(keyTxtD);
      layer.add(keyF);
      layer.add(keyTxtF);
      layer.add(keyG);
      layer.add(keyTxtG);
      layer.add(keyH);
      layer.add(keyTxtH);
      layer.add(keyJ);
      layer.add(keyTxtJ);
      layer.add(keyK);
      layer.add(keyTxtK);
      layer.add(keyL);
      layer.add(keyTxtL);
      layer.add(keyBkSp);
      layer.add(keyTxtBkSp);

//______________________________________
//Display Layer
//______________________________________
//Third Row
//______________________________________


      layer.add(keyZ);
      layer.add(keyTxtZ);
      layer.add(keyX);
      layer.add(keyTxtX);
      layer.add(keyC);
      layer.add(keyTxtC);
      layer.add(keyV);
      layer.add(keyTxtV);
      layer.add(keyB);
      layer.add(keyTxtB);
      layer.add(keyN);
      layer.add(keyTxtN);
      layer.add(keyM);
      layer.add(keyTxtM);
      layer.add(keySpc);
      layer.add(keyTxtSpc);
      layer.add(keyEnter);
      layer.add(keyTxtEnter);

//______________________________________
//Display Layer
//______________________________________
//Aggrgate header footer
//______________________________________

      layer.add(cord);
      layer.add(text);
      stage.add(layer);