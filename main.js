function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xXKsUv2s4v/model.json',modelReady);
}function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
if (error) {
    console.error(error);
} else {
console.log(results);
random_number_r = Math.floor(Math.random() * 255)+1;
random_number_g = Math.floor(Math.random() * 255)+1;
random_number_b = Math.floor(Math.random() * 255)+1;

document.getElementById("result_label").innerHTML = 'I can hear - '+
results[0].label;

document.getElementById("result_cofidence").innerHTML = 'Accuracy - '+(results[0].cofidence*100).toFixed(2)+" %";

document.getElementById("result_label").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

document.getElementById("results_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

img = document.getElementById('cat.png')
img1 = document.getElementById('dogi.png')
img2 = document.getElementById('ear.png')

if (results[0].label == "meowing") {
    img.src = 'cat.gif';
    img1.src = 'dogi.png';
    img2.src = 'ear.png';
}  else if (resutlts[0].label == "barking") {
    img.src = 'cat.png';
    img1.src = 'dogi.gif';
    img2.src = 'ear.png';
} else { 
    img.src = 'cat.png';
    img1.src = 'dogi.png';
    img2.src = 'ear.gif';
}
}
}
