Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KBamkhhaa/model.json',modelLoaded);

function modelLoaded()
{
    console.log("model Loaded!!");
}

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        speak();
        if(results[0].label == "best of luck")
        {
            thumbs_up=window.speechSynthesis("&#128077;");
        }
        if(results[0].label == "this is good looking")
        {
            wow=window.speechSynthesis("&#128076;");
        }
        if(results[0].label == "victroy")
        {
            victroy=window.speechSynthesis("&#9996;");
        }
    }
}