
function revenirSol(camera){
    booVueAir = false;
    booDecremente = false;
    setPositionCameraX(fltPositionX, camera);
    setPositionCameraY(0.5, camera);
    setPositionCameraZ(fltPositionZ, camera);

    setCibleCameraX(fltCibleX, camera);
    setCibleCameraY(0.5, camera);
    setCibleCameraZ(fltCibleZ, camera);
    //booTemps = false;

    tabObjets3D.shift();

    var obj3DCiel = creerObj3DCiel(objgl, TEX_CIEL);
    tabObjets3D.push(obj3DCiel);
}

function vueEnHaut(camera){
    
    booDecremente = true;
    var interval = setInterval(increment, 1000);
    
    booVueAir = true;
    // ORIGINE : (0 ; 0.5 ; 0.5)
    fltPositionX = getPositionCameraX(camera);
    fltPositionZ = getPositionCameraZ(camera);
    fltCibleX = getCibleCameraX(camera);
    fltCibleZ = getCibleCameraZ(camera);

    setPositionCameraX(0, camera);
    setPositionCameraY(45, camera);
    setPositionCameraZ(0.01, camera);

    setCibleCameraX(0, camera);
    setCibleCameraY(-0.5, camera);
    setCibleCameraZ(0, camera);
    
    booPgDw = true;
    //var obj3DTornade = creerObj3DTornade(objgl, TEX_TRANSPARENT, fltPositionX, fltPositionZ);
    tabObjets3D.unshift(creerObj3DMur(objgl, TEX_JOUEUR, Math.floor(fltPositionX), 1, Math.ceil(fltPositionZ), 1, 2, 1));

    for (var i = tabObjets3D.length - 1; i >= 0; i--) {
        if (tabObjets3D[i].type == 4) {
            tabObjets3D.splice(i, 1);
        }
    }
}
