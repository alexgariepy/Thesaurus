
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
    
}