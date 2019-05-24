/*
    Legende:

    Soit un couloir = 0
    Soit un mur ouvrable = 1
    Soit un mur non ouvrable = 2
    Soit une cellule qui fait partie de l’enclos = 3
*/
var arrGrille = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 2, 2, 0, 2, 2, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2, 3, 3, 3, 2, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 3, 3, 3, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2, 3, 3, 3, 2, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 2, 2, 2, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 2],
    [2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2],
    [2, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 2],
    [2, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 2],
    [2, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 2],
    [2, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 2],
    [2, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

var objgl = null;
var objProgShaders = null;
var objScene3D = null;

var OBJ3D_SOL = 0;
var OBJ3D_MURS = 1;
var OBJ3D_CRENEAUX = 2;
var OBJ3D_TUNNELS = 3;

var tabImages = ['Transparent.gif', '../Image/sol.jpg', '../Image/mur ext.png', '../Image/mur int.jpg', '../Image/Ciel.jpg', '../Image/imgJoueur2.png'];
var TEX_TRANSPARENT = 0;
var TEX_SOL = 1;
var TEX_MUR_EXT = 2;
var TEX_MUR_INT = 3;
var TEX_CIEL = 4;
var TEX_JOUEUR = 5;

var fltPositionX = 0;
var fltPositionZ = 0;
var fltCibleX = 0;
var fltCibleZ = 0;

var start = 0
var end = 0
var diff = 0
var score = 300;

var booScore = true;
var booDecremente = false;

var timerID = 0
var booTemps = false;
var booPgDw = false;
var booVueAir = false;
var tabObjets3D = new Array();
var tabKey = new Array();
var camera = null;
// objet qui manipule les donnees
// contient un array de tous les objets de la grille
var Grille;

// remet les variables a leurs
// valeurs par defauts
function remettreVariables() {

    Grille = fct_Grille({});
    document.getElementById("score").innerHTML = "Score : " + score;
}

// Objet de la grille qui contient 
// sa postion, texture ...etc 
function object_Grille() {
    var object_Grille = {};

    object_Grille.objgl = null;

    object_Grille.TEX = null;
    object_Grille.strType = null;

    object_Grille.PosGrilleX = null;
    object_Grille.PosGrilleZ = null;

    object_Grille.PosMinX = null;
    object_Grille.PosMinY = null;
    object_Grille.PosMinZ = null;

    object_Grille.PosMaxX = null;
    object_Grille.PosMaxY = null;
    object_Grille.PosMaxZ = null;

    object_Grille.obj3DMur = null;

    return object_Grille;
}

// fonction qui manipule les donnees
// de la grille
function fct_Grille() {
    var fct_Grille = {};

    fct_Grille.arrObjGrille = [];

    // Math.floor(x) pour le x
    // Math.ceil(z) pour le z
    fct_Grille.getObjAtPosition = function (cameraPosX, cameraPosZ) {
        //console.log(x + "x,\n" + Math.floor(x) + " floor x,\n" + z + " z,\n" + Math.ceil(z) + " floor z\n\n");

        //console.log(arrGrille[Math.ceil(z) + Math.floor(arrGrille.length / 2)][Math.floor(x) + Math.floor(arrGrille.length / 2)]);

        for (var objGrille of this.arrObjGrille) {
            if (objGrille.PosMinX == Math.floor(cameraPosX) && objGrille.PosMinZ == Math.ceil(cameraPosZ)) {
                //console.log(objGrille.strType);

                // save bcp d'espace dans la memoire et recherche plus rapidement
                return objGrille;
                //break;
            }
        }
    }

    fct_Grille.blnCollision = function (cameraPosX, cameraPosY, cameraPosZ) {
        for (var objGrille of this.arrObjGrille) {
            if ((objGrille.TEX == TEX_MUR_INT || objGrille.TEX == TEX_MUR_EXT) &&
                objGrille.PosMinX == Math.floor(cameraPosX) &&
                objGrille.PosMinZ == Math.ceil(cameraPosZ)
                /*(cameraPosX >= objGrille.PosMinX && cameraPosX <= objGrille.PosMaxX) &&
                (cameraPosY >= objGrille.PosMinY && cameraPosY <= objGrille.PosMaxY) &&
                (cameraPosZ >= objGrille.PosMinZ && cameraPosZ <= objGrille.PosMaxZ)*/
            ) {
                //console.log(objGrille.strType);

                /*console.log((objGrille.PosMinX <= cameraPosX+1 && objGrille.PosMaxX >= cameraPosX) + " x, " +
                            (objGrille.PosMinY <= 1 && objGrille.PosMaxY >= 0) + " y, " +
                            (objGrille.PosMinZ <= cameraPosZ+1 && objGrille.PosMaxZ >= cameraPosZ) + " z");*/

                // save bcp d'espace dans la memoire et recherche plus rapidement
                return true;
                //break;
            }
        }

        return false;
    }

    fct_Grille.listGrille = function () {
        console.log(this.arrObjGrille);
    }

    return fct_Grille;
}

function demarrer() {
    remettreVariables();

    var objCanvas = document.getElementById('monCanvas');
    objgl = initWebGL(objCanvas); // Initialise le contexte WebGL
    objProgShaders = initShaders(objgl);
    objScene3D = initScene3D(objgl); // Créer la scène

    //console.log(objScene3D.tabObjets3D);

    effacerCanevas(objgl);
    dessiner(objgl, objProgShaders, objScene3D);

    objCanvas.focus();

    document.getElementById("idMeter").low = 10 / 60;
    document.getElementById("idMeter").high = 30 / 60;
    document.getElementById("idMeter").optimum = 1
    document.getElementById("idMeter").value = document.getElementById("idMeter").optimum;

    chronoReset();
    booTemps = true;
    chrono();

    setInterval(function () {
        document.getElementById("idMeter").value = parseFloat(document.getElementById("idMeter").value) - (1 / 60);
    }, 1000);

}

function initScene3D(objgl) {
    var objScene3D = new Object();

    // Mettre les textures dans la scène
    objScene3D.textures = creerTextures(objgl, tabImages);

    // Créer le sol
    var obj3DSol = creerObj3DSol(objgl, TEX_SOL);
    tabObjets3D.push(obj3DSol);

    // -Math.floor(arrGrille.length/2) Math.floor(arrGrille.length/2)
    for (var x = 0; x < arrGrille.length; x++) {
        for (var z = 0; z < arrGrille.length; z++) {
            var obj3DMur;

            var objGrille = object_Grille({});

            objGrille.objgl = objgl;

            objGrille.PosGrilleX = x;
            objGrille.PosGrilleZ = z;

            objGrille.PosMinX = x - Math.floor(arrGrille.length / 2);
            objGrille.PosMinY = 0;
            objGrille.PosMinZ = z - Math.floor(arrGrille.length / 2);

            objGrille.PosMaxX = objGrille.PosMinX + 1;
            objGrille.PosMaxY = objGrille.PosMinY + 2;
            objGrille.PosMaxZ = objGrille.PosMinZ + 1;

            switch (arrGrille[z][x]) {
                case 1:
                    obj3DMur = creerObj3DMur(objgl, TEX_MUR_INT, x - Math.floor(arrGrille.length / 2), 0, z - Math.floor(arrGrille.length / 2), 1, 2, 1);

                    objGrille.TEX = TEX_MUR_INT;
                    objGrille.strType = "Mur int";
                    objGrille.obj3DMur = obj3DMur;
                    break;

                case 2:
                    obj3DMur = creerObj3DMur(objgl, TEX_MUR_EXT, x - Math.floor(arrGrille.length / 2), 0, z - Math.floor(arrGrille.length / 2), 1, 2, 1);

                    objGrille.TEX = TEX_MUR_EXT;
                    objGrille.strType = "Mur ext";
                    objGrille.obj3DMur = obj3DMur;
                    break;

                    // save bcp d'espace dans la memoire et load plus rapidement
                case 3:
                default:
                    continue;
            }

            Grille.arrObjGrille.push(objGrille);

            tabObjets3D.push(obj3DMur);
        }
    }
    var obj3DCiel = creerObj3DCiel(objgl, TEX_CIEL);
    tabObjets3D.push(obj3DCiel);


    /*// Créer les murs
    var obj3DMur = creerObj3DMur(objgl, obj3DSol, TEX_MUR_EXT);
    tabObjets3D.push(obj3DMur);*/

    /*// Créer les créneaux
    var obj3DCreneaux = creerObj3DCreneaux(objgl, obj3DMur, TEX_MUR_EXT);
    tabObjets3D.push(obj3DCreneaux);*/



    // Mettre les objets 3D sur la scène
    objScene3D.tabObjets3D = tabObjets3D;

    // La caméra
    var camera = creerCamera();
    //console.log('Positions: ' + getPositionsCameraXYZ(camera).slice(0,3));
    setPositionsCameraXYZ([0, 0.5, 0.01], camera);
    setCiblesCameraXYZ([0, 0.5, 0], camera);
    setOrientationsXYZ([0, 1, 0], camera);
    objScene3D.camera = camera;

    return objScene3D;
}

function dessiner(objgl, objProgShaders, objScene3D) {
    // La vue
    objgl.viewport(0, 0, objgl.drawingBufferWidth, objgl.drawingBufferHeight);

    // Matrice de projection
    var matProjection = mat4.create();
    var fltRapportCanevas = objgl.drawingBufferWidth / objgl.drawingBufferHeight;
    mat4.perspective(45, fltRapportCanevas, 0.01, 100, matProjection);

    // Relier la matrice aux shaders
    objgl.uniformMatrix4fv(objProgShaders.matProjection, false, matProjection);

    for (var i = 0; i < objScene3D.tabObjets3D.length; i++) {
        var vertex = objScene3D.tabObjets3D[i].vertex;
        var couleurs = objScene3D.tabObjets3D[i].couleurs;
        var texels = objScene3D.tabObjets3D[i].texels;
        var maillage = objScene3D.tabObjets3D[i].maillage;
        var transformations = objScene3D.tabObjets3D[i].transformations;

        // Matrice du modèle            
        var matModeleVue = mat4.create();
        mat4.identity(matModeleVue);

        // Placer la caméra sur la scène
        mat4.lookAt(getPositionsCameraXYZ(objScene3D.camera),
            getCiblesCameraXYZ(objScene3D.camera),
            getOrientationsXYZ(objScene3D.camera),
            matModeleVue);

        // Appliquer les transformations sur le modèle 
        mat4.translate(matModeleVue, getPositionsXYZ(transformations));
        mat4.scale(matModeleVue, getEchellesXYZ(transformations));
        mat4.rotateX(matModeleVue, getAngleX(transformations) * Math.PI / 180);
        mat4.rotateY(matModeleVue, getAngleY(transformations) * Math.PI / 180);
        mat4.rotateZ(matModeleVue, getAngleZ(transformations) * Math.PI / 180);

        // Relier la matrice aux shaders
        objgl.uniformMatrix4fv(objProgShaders.matModeleVue, false, matModeleVue);

        if (maillage == null) {
            // Dessiner les sous-objets
            for (var j = 0; j < vertex.length; j++) {

                // Relier les vertex aux shaders
                objgl.bindBuffer(objgl.ARRAY_BUFFER, vertex[j]);
                objgl.vertexAttribPointer(objProgShaders.posVertex, 3, objgl.FLOAT, false, 0, 0);
                var intNbVertex = (objgl.getBufferParameter(objgl.ARRAY_BUFFER, objgl.BUFFER_SIZE) / 4) / 3;

                // Relier les couleurs aux shaders
                objgl.bindBuffer(objgl.ARRAY_BUFFER, couleurs[j]);
                objgl.vertexAttribPointer(objProgShaders.couleurVertex, 4, objgl.FLOAT, false, 0, 0);

                // Activer la texture
                objgl.activeTexture(objgl.TEXTURE0 + texels[j].intNoTexture);
                objgl.bindTexture(objgl.TEXTURE_2D, objScene3D.textures[texels[j].intNoTexture]);

                // Relier les texels aux shaders
                objgl.bindBuffer(objgl.ARRAY_BUFFER, texels[j]);
                objgl.vertexAttribPointer(objProgShaders.posTexel, 2, objgl.FLOAT, false, 0, 0);

                // Relier le no de texture et le taux de couleur aux shaders                 
                objgl.uniform1i(objProgShaders.noTexture, texels[j].intNoTexture);
                objgl.uniform1f(objProgShaders.pcCouleurTexel, texels[j].pcCouleurTexel);

                // Dessiner
                objgl.drawArrays(vertex[j].typeDessin, 0, intNbVertex);
            }
        } else { // Dessiner le maillage
            // Relier les vertex aux shaders
            objgl.bindBuffer(objgl.ARRAY_BUFFER, vertex);
            objgl.vertexAttribPointer(objProgShaders.posVertex, 3, objgl.FLOAT, false, 0, 0);

            // Relier les couleurs aux shaders
            objgl.bindBuffer(objgl.ARRAY_BUFFER, couleurs);
            objgl.vertexAttribPointer(objProgShaders.couleurVertex, 4, objgl.FLOAT, false, 0, 0)

            // Activer la texture
            objgl.activeTexture(objgl.TEXTURE0 + texels.intNoTexture);
            objgl.bindTexture(objgl.TEXTURE_2D, objScene3D.textures[texels.intNoTexture]);

            // Relier les texels aux shaders
            objgl.bindBuffer(objgl.ARRAY_BUFFER, texels);
            objgl.vertexAttribPointer(objProgShaders.posTexel, 2, objgl.FLOAT, false, 0, 0);

            // Relier le no de texture et le taux de couleur aux shaders                 
            objgl.uniform1i(objProgShaders.noTexture, texels.intNoTexture);
            objgl.uniform1f(objProgShaders.pcCouleurTexel, texels.pcCouleurTexel);

            // Sélectionner le maillage qu'on va utiliser pour les triangles et les droites
            objgl.bindBuffer(objgl.ELEMENT_ARRAY_BUFFER, maillage);

            // Dessiner les triangles
            objgl.drawElements(objgl.TRIANGLES, maillage.intNbTriangles * 3, objgl.UNSIGNED_SHORT, 0);
            // Dessiner les droites à la suite des triangles
            objgl.drawElements(objgl.LINES, maillage.intNbDroites * 2, objgl.UNSIGNED_SHORT, maillage.intNbTriangles * 2 * 3);
        }
    }
}

function effacerCanevas(objgl) {
    // Met la couleur d'effacement au noir et complétement opaque
    objgl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Efface les couleurs et le buffer de profondeur.
    objgl.clear(objgl.COLOR_BUFFER_BIT | objgl.DEPTH_BUFFER_BIT);
}

function deplacerCamera() {
    camera = objScene3D.camera;

    if (!booVueAir) {
        if (event.keyCode == 37 || event.keyCode == 39 ||
            event.keyCode == 65 || event.keyCode == 68) {
            // 37:  Flèche-à-gauche; 39:Flèche-à-droite
            // 65: a, 68: d
            var fltX = getCibleCameraX(camera) - getPositionCameraX(camera);
            var fltZ = getCibleCameraZ(camera) - getPositionCameraZ(camera);
            var intDirection = (event.keyCode == 37 || event.keyCode == 65) ? -1 : 1;
            var fltAngle = intDirection * (Math.PI / 180 * 11.25); // Tourner 11.25 degrés
            var fltXPrime = fltX * Math.cos(fltAngle) - fltZ * Math.sin(fltAngle);
            var fltZPrime = fltX * Math.sin(fltAngle) + fltZ * Math.cos(fltAngle);
            setCibleCameraX(getPositionCameraX(camera) + fltXPrime, camera);
            setCibleCameraZ(getPositionCameraZ(camera) + fltZPrime, camera);
        } else if (event.keyCode == 38 || event.keyCode == 40 ||
            event.keyCode == 87 || event.keyCode == 83) {
            // 38:  Flèche-en-haut; 40:Flèche-en-bas
            // 87: w, 83: s
            var fltX = getCibleCameraX(camera) - getPositionCameraX(camera);
            var fltZ = getCibleCameraZ(camera) - getPositionCameraZ(camera);
            var fltRayon = Math.sqrt(fltX * fltX + fltZ * fltZ);
            var intDirection = (event.keyCode == 38 || event.keyCode == 87) ? 1 : -1;

            var fltXPrime = intDirection * 0.2 * Math.cos(Math.acos(fltX / fltRayon));
            var fltZPrime = intDirection * 0.2 * Math.sin(Math.asin(fltZ / fltRayon));

            //console.log((getPositionX(camera) + fltXPrime) + " x, " + getPositionY(camera) + " y, " + (getPositionZ(camera) + fltZPrime) + " z");

            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! COLLISIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (!Grille.blnCollision((getPositionX(camera) + fltXPrime), getPositionY(camera), (getPositionZ(camera) + fltZPrime))) {
                setCibleCameraX(getCibleCameraX(camera) + fltXPrime, camera);
                setCibleCameraZ(getCibleCameraZ(camera) + fltZPrime, camera);
                setPositionCameraX(getPositionCameraX(camera) + fltXPrime, camera);
                setPositionCameraZ(getPositionCameraZ(camera) + fltZPrime, camera);
            }
        }
        if (event.keyCode == 33 && score > 0) {
            vueEnHaut(camera);

        }
    }
    if (event.keyCode == 34 && booPgDw) {
        revenirSol(camera);
    }

    if (event.keyCode == 16 || event.keyCode == 17 || event.keyCode == 32) {
        tabKey.push(event.keyCode);
    }

    effacerCanevas(objgl);
    dessiner(objgl, objProgShaders, objScene3D);
}

function chrono() {
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    var msec = diff.getMilliseconds()
    var sec = diff.getSeconds()
    var min = diff.getMinutes()
    var hr = diff.getHours() - 1
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    if (msec < 10) {
        msec = "00" + msec
    } else if (msec < 100) {
        msec = "0" + msec
    }
    if (booTemps) {
        document.getElementById("chronotime").innerHTML = min + ":" + sec
    }

    timerID = setTimeout("chrono()", 10)
}

function chronoReset() {
    document.getElementById("idMeter").value = document.getElementById("idMeter").optimum;

    document.getElementById("chronotime").innerHTML = "00:00"
    start = new Date()
}

var i = 0;

function increment() {
    if (booDecremente) {
        if (score >= 50) {
            booScore = true;
            score -= 50;
            document.getElementById("score").innerHTML = "Score : " + (score);
        } else {
            revenirSol(camera);
            if (booScore) {
                dessiner(objgl, objProgShaders, objScene3D);
                booScore = false;
            }
        }
    }
    clearInterval(interval);
}