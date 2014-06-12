        /*****************************
* page process
******************************/

        function writeMessage(message) {
            //text.setText(message);
            Output(message);
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
            width: 700,
            height: 500
        });
        var layer = new Kinetic.Layer();

        var firstRowHeight = (1 * ((stage.height() - 50) / 9));
        var eX = 10;
        var eY = 5;
        var usrString = "";

        var middleSpace = new Kinetic.Rect({
            x: 100,
            y: 100,
            width: 500,
            height: 250,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        //___________________________________
        //Defining First Row Of Keys
        //___________________________________

        var keyQ = new Kinetic.Rect({
            x: 100,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtQ = new Kinetic.Text({
            x: 100 + eX,
            y: firstRowHeight + eY,
            text: 'Q',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black',
        });

        var keyW = new Kinetic.Rect({
            x: 150,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtW = new Kinetic.Text({
            x: 150 + eX,
            y: firstRowHeight + eY,
            text: 'W',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyE = new Kinetic.Rect({
            x: 200,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtE = new Kinetic.Text({
            x: 200 + eX,
            y: firstRowHeight + eY,
            text: 'E',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyR = new Kinetic.Rect({
            x: 250,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtR = new Kinetic.Text({
            x: 250 + eX,
            y: firstRowHeight + eY,
            text: 'R',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyT = new Kinetic.Rect({
            x: 300,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtT = new Kinetic.Text({
            x: 300 + eX,
            y: firstRowHeight + eY,
            text: 'T',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyY = new Kinetic.Rect({
            x: 350,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtY = new Kinetic.Text({
            x: 350 + eX,
            y: firstRowHeight + eY,
            text: 'Y',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyU = new Kinetic.Rect({
            x: 400,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtU = new Kinetic.Text({
            x: 400 + eX,
            y: firstRowHeight + eY,
            text: 'U',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyI = new Kinetic.Rect({
            x: 450,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtI = new Kinetic.Text({
            x: 450 + eX,
            y: firstRowHeight + eY,
            align: 'center',
            text: 'I',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black',
        });

        var keyO = new Kinetic.Rect({
            x: 500,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtO = new Kinetic.Text({
            x: 500 + eX,
            y: firstRowHeight + eY,
            text: 'O',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyP = new Kinetic.Rect({
            x: 550,
            y: firstRowHeight,
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtP = new Kinetic.Text({
            x: 550 + eX,
            y: firstRowHeight + eY,
            text: 'P',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyBkSp = new Kinetic.Rect({
            x: 600,
            y: firstRowHeight,
            width: 50,
            height: 100,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtBkSp = new Kinetic.Text({
            x: 600 + eX,
            y: 2 * (firstRowHeight),
            text: '<-',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        //___________________________________
        //Defining Middle Keys
        //___________________________________

        var keyA = new Kinetic.Rect({
            x: 50,
            y: 2 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtA = new Kinetic.Text({
            x: 50 + eX,
            y: 2 * (firstRowHeight) + eY,
            text: 'A',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyS = new Kinetic.Rect({
            x: 50,
            y: 3 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtS = new Kinetic.Text({
            x: 50 + eX,
            y: 3 * (firstRowHeight) + eY,
            text: 'S',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyD = new Kinetic.Rect({
            x: 50,
            y: 4 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtD = new Kinetic.Text({
            x: 50 + eX,
            y: 4 * (firstRowHeight) + eY,
            text: 'D',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyF = new Kinetic.Rect({
            x: 50,
            y: 5 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtF = new Kinetic.Text({
            x: 50 + eX,
            y: 5 * (firstRowHeight) + eY,
            text: 'F',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyG = new Kinetic.Rect({
            x: 50,
            y: 6 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtG = new Kinetic.Text({
            x: 50 + eX,
            y: 6 * (firstRowHeight) + eY,
            text: 'G',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyH = new Kinetic.Rect({
            x: 600,
            y: 3 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtH = new Kinetic.Text({
            x: 600 + eX,
            y: 3 * (firstRowHeight) + eY,
            text: 'H',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyJ = new Kinetic.Rect({
            x: 600,
            y: 4 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtJ = new Kinetic.Text({
            x: 600 + eX,
            y: 4 * (firstRowHeight) + eY,
            text: 'J',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyK = new Kinetic.Rect({
            x: 600,
            y: 5 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtK = new Kinetic.Text({
            x: 600 + eX,
            y: 5 * (firstRowHeight) + eY,
            text: 'K',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyL = new Kinetic.Rect({
            x: 600,
            y: 6 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtL = new Kinetic.Text({
            x: 600 + eX,
            y: 6 * (firstRowHeight) + eY,
            text: 'L',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        //___________________________________
        //Defining Third Row Of Keys
        //___________________________________



        var keyZ = new Kinetic.Rect({
            x: 100,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtZ = new Kinetic.Text({
            x: 100 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'Z',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyX = new Kinetic.Rect({
            x: 150,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtX = new Kinetic.Text({
            x: 150 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'X',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyC = new Kinetic.Rect({
            x: 200,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtC = new Kinetic.Text({
            x: 200 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'C',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyV = new Kinetic.Rect({
            x: 250,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtV = new Kinetic.Text({
            x: 250 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'V',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyB = new Kinetic.Rect({
            x: 300,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtB = new Kinetic.Text({
            x: 300 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'B',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyN = new Kinetic.Rect({
            x: 350,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtN = new Kinetic.Text({
            x: 350 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'N',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyM = new Kinetic.Rect({
            x: 400,
            y: 7 * (firstRowHeight),
            width: 50,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtM = new Kinetic.Text({
            x: 400 + eX,
            y: 7 * (firstRowHeight) + eY,
            text: 'M',
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keySpc = new Kinetic.Rect({
            x: 450,
            y: 7 * (firstRowHeight),
            width: 100,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtSpc = new Kinetic.Text({
            x: 450,
            y: 7 * (firstRowHeight) + eY,
            text: 'Space',
            fontSize: 40,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        var keyEntr = new Kinetic.Rect({
            x: 550,
            y: 7 * (firstRowHeight),
            width: 100,
            height: 50,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 4
        });

        var keyTxtEntr = new Kinetic.Text({
            x: 550,
            y: 7 * (firstRowHeight) + eY,
            text: 'Enter',
            fontSize: 40,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        //_____________________________________
        //NON KEY AGGRGATE DISPLAY DEFINITIONS
        //_____________________________________
        var text = new Kinetic.Text({
            x: 50,
            y: 1,
            fontFamily: 'Ariel',
            fontSize: 24,
            text: '',
            fill: 'black'
        });

        var cord = new Kinetic.Text({
            x: 530,
            y: 25,
            fontFamily: 'Garamond',
            fontSize: 24,
            text: '',
            fill: 'black'
        });

        stage.on('mousemove', function () {
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


        keyTxtQ.on('mouseover', function () {
            usrString = usrString + 'Q';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtQ.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtW.on('mouseover', function () {
            usrString = usrString + 'W';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtW.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtE.on('mouseover', function () {
            usrString = usrString + 'E';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtE.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtR.on('mouseover', function () {
            usrString = usrString + 'R';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtR.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtT.on('mouseover', function () {
            usrString = usrString + 'T';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtT.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtY.on('mouseover', function () {
            usrString = usrString + 'Y';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtY.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtU.on('mouseover', function () {
            usrString = usrString + 'U';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtU.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtI.on('mouseover', function () {
            usrString = usrString + 'I';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtI.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtO.on('mouseover', function () {
            usrString = usrString + 'O';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtO.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtP.on('mouseover', function () {
            usrString = usrString + 'P';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtP.on('mouseout', function () {
            this.fill('#000000');
        });



        //__________________________________________________
        //Key functions
        //______________________________________________
        //Second row
        //______________________________________________  

        keyTxtA.on('mouseover', function () {
            usrString = usrString + 'A';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtA.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtS.on('mouseover', function () {
            usrString = usrString + 'S';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtS.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtD.on('mouseover', function () {
            usrString = usrString + 'D';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtD.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtF.on('mouseover', function () {
            usrString = usrString + 'F';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtF.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtG.on('mouseover', function () {
            usrString = usrString + 'G';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtG.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtH.on('mouseover', function () {
            usrString = usrString + 'H';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtH.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtJ.on('mouseover', function () {
            usrString = usrString + 'J';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtJ.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtK.on('mouseover', function () {
            usrString = usrString + 'K';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtK.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtL.on('mouseover', function () {
            usrString = usrString + 'L';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtL.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtBkSp.on('mouseover', function () {
            usrString = usrString.substring(0, usrString.length - 1);
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtBkSp.on('mouseout', function () {
            this.fill('#000000');
        });


        //__________________________________________________
        //Key functions
        //______________________________________________
        //Third row
        //______________________________________________  

        keyTxtZ.on('mouseover', function () {
            usrString = usrString + 'Z';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtZ.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtX.on('mouseover', function () {
            usrString = usrString + 'X';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtX.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtC.on('mouseover', function () {
            usrString = usrString + 'C';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtC.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtV.on('mouseover', function () {
            usrString = usrString + 'V';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtV.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtB.on('mouseover', function () {
            usrString = usrString + 'B';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtB.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtN.on('mouseover', function () {
            usrString = usrString + 'N';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtN.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtM.on('mouseover', function () {
            usrString = usrString + 'M';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtM.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtSpc.on('mouseover', function () {
            usrString = usrString + ' ';
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtSpc.on('mouseout', function () {
            this.fill('#000000');
        });

        keyTxtEntr.on('mouseover', function () {
            OnEnter();
            usrString = "";
            writeMessage(usrString);
            this.fill('#848484');
        });

        keyTxtEntr.on('mouseout', function () {
            this.fill('#000000');
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
        layer.add(keyBkSp);
        layer.add(keyTxtBkSp);


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
        layer.add(keyEntr);
        layer.add(keyTxtEntr);
        //______________________________________
        //Display Layer
        //______________________________________
        //Aggrgate header footer
        //______________________________________
        layer.add(middleSpace);
        layer.add(cord);
        layer.add(text);
        stage.add(layer);