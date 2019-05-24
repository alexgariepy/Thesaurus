
function creerObj3DTresor(objgl, intNoTexture) {
    var obj3DTresor = new Object();
    obj3DTresor.fltProfondeur = 15;
    obj3DTresor.fltLargeur = 15;
    obj3DTresor.fltHauteur = 0;

    obj3DTresor.vertex = creerVertexTresor(objgl, obj3DTresor.fltLargeur, obj3DTresor.fltProfondeur);
    obj3DTresor.couleurs = creerCouleursTresor(objgl, [1, 1, 1, 1]);
    obj3DTresor.texels = creerTexelsTresor(objgl, obj3DTresor.fltLargeur, obj3DTresor.fltProfondeur, intNoTexture);
    obj3DTresor.maillage = creerMaillageTresor(objgl);

    obj3DTresor.transformations = creerTransformations();
    return obj3DTresor;
}

function creerVertexTresor(objgl, fltLargeur, fltProfondeur) {
    var tabVertex = [
        // Face avant (Z=1)
        -2.0, 0.25, 4.5,   // 0: Centre
        -1.5, 0.5, 4.5,   // 1: Coin haut droit
        -1.5, 0.0, 4.5,  // 2: Coin bas droit
        -2.5, 0.0, 4.5,  // 3: Coin bas gauche
        -2.5, 0.5, 4.5,  // 4: Coin haut gauche

        // Face arri�re (Z=-1)
        -2.0, 0.25, 4.25,   // 0: Centre
        -1.5, 0.5, 4.25,   // 1: Coin haut droit
        -1.5, 0.0, 4.25,  // 2: Coin bas droit
        -2.5, 0.0, 4.25,  // 3: Coin bas gauche
        -2.5, 0.5, 4.25,  // 4: Coin haut gauche
    ];

    /*var tabVertex = [
             -fltLargeur / 2, 0.0, -fltProfondeur / 2,
             fltLargeur / 2, 0.0, -fltProfondeur / 2,
             -fltLargeur / 2, 0.0, fltProfondeur / 2,
             fltLargeur / 2, 0.0, fltProfondeur / 2
        ];
    */
    var objTresor = objgl.createBuffer();
    objgl.bindBuffer(objgl.ARRAY_BUFFER, objTresor);
    objgl.bufferData(objgl.ARRAY_BUFFER, new Float32Array(tabVertex), objgl.STATIC_DRAW);

    return objTresor;
}

function creerCouleursTresor(objgl, tabCouleur) {
    // Face avant
    tabCouleurs = [1.0, 1.0, 1.0, 1.0]; // Blanc
    for (var i = 1; i <= 4; i++)
        tabCouleurs = tabCouleurs.concat([1.0, 0.0, 0.0, 1.0]); // Rouge

    // Face arri�re
    tabCouleurs = tabCouleurs.concat([1.0, 1.0, 1.0, 1.0]); // Blanc
    for (var i = 1; i <= 4; i++)
        tabCouleurs = tabCouleurs.concat([0.0, 1.0, 0.0, 1.0]); // Vert

    var objCouleursFleche = objgl.createBuffer();
    objgl.bindBuffer(objgl.ARRAY_BUFFER, objCouleursFleche);
    objgl.bufferData(objgl.ARRAY_BUFFER, new Float32Array(tabCouleurs), objgl.STATIC_DRAW);

    return objCouleursFleche;
}

function creerTexelsTresor(objgl, fltLargeur, fltProfondeur, intNoTexture) {
    var tabTexels = [  // Texels de la face avant
        0.5, 0.5,  // 0: Centre
        1.0, 0.0,  // 1: Coin haut droit
        1.0, 1.0,  // 2: Coin bas droit
        0.0, 1.0,  // 3: Coin bas gauche
        0.0, 0.0,  // 4: Coin haut gauche

        // Texels de la face arri�re
        0.5, 0.5,  // 0: Centre
        1.0, 0.0,  // 1: Coin haut droit
        1.0, 1.0,  // 2: Coin bas droit
        0.0, 1.0,  // 3: Coin bas gauche
        0.0, 0.0,  // 4: Coin haut gauche
    ];

    var objTexelsTresor = objgl.createBuffer();
    objgl.bindBuffer(objgl.ARRAY_BUFFER, objTexelsTresor);
    objgl.bufferData(objgl.ARRAY_BUFFER, new Float32Array(tabTexels), objgl.STATIC_DRAW);

    objTexelsTresor.intNoTexture = intNoTexture; objTexelsTresor.pcCouleurTexel = 1.0;

    return objTexelsTresor;
}

function creerMaillageTresor(objgl) {

    var tabMaillage =
        [ // Les 4 triangles de la face avant
            0, 1, 2,
            0, 2, 3,
            0, 3, 4,
            0, 4, 1,
            // Les 4 triangles de la face arri�re
            5, 6, 7,
            5, 7, 8,
            5, 8, 9,
            5, 9, 6,

            1, 7, 2,
            6, 1, 7,
            4, 8, 3,
            4, 9, 8,
            // Les 4 droites
            1, 6,
            2, 7,
            3, 8,
            4, 9
        ];

    var objMaillageTresor = objgl.createBuffer();
    objgl.bindBuffer(objgl.ELEMENT_ARRAY_BUFFER, objMaillageTresor);
    objgl.bufferData(objgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(tabMaillage), objgl.STATIC_DRAW);

    // Le nombre de triangles
    objMaillageTresor.intNbTriangles = 12;
    // Le nombre de droites
    objMaillageTresor.intNbDroites = 4;

    return objMaillageTresor;
}


