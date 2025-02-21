
const videoEl = document.querySelector('#my-video');
let stream = null; //Init stream variable so we can use anywhere

const constraints = {
    audio: true,    //Use your Headphone or be prepared for feedback!
    video: true,
};

const getMicAndCamera = async (e) => {

    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log(stream);
        changeButtons([
            'green','blue','blue', 'grey', 'grey', 'grey', 'grey', 'grey'
        ]);
    } catch (error) {
        console.log("user denied access to constraints, error: " + error);
    }
}

const showMyFeed = e=> {
    console.log("show my feed is working")
    if(!stream){
        alert("stream is still loading...please wait");
        return;
    }
    videoEl.srcObject = stream; // this will show our MediaStream(stream) to our video
    const tracks = stream.getTracks(); // get all tracks from the stream
    console.log(tracks); // log all tracks
    changeButtons([
        'green','green','blue', 'blue', 'blue', 'grey', 'grey', 'blue'
    ]);
}

const stopMyFeed = e=> {
    if(!stream){
        alert("stream is still loading...please wait");
        return;
    }
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop()); // stop all tracks
    changeButtons([
        'blue','grey','grey', 'grey', 'grey', 'grey', 'grey', 'grey '
    ]);
}

document.querySelector('#share').addEventListener('click', e=>getMicAndCamera(e));
document.querySelector('#show-video').addEventListener('click', e=>showMyFeed(e));
document.querySelector('#stop-video').addEventListener('click', e=>stopMyFeed(e));
document.querySelector('#change-size').addEventListener('click', e=>changeVideoSize(e));
document.querySelector('#start-record').addEventListener('click', e=>startRecording(e));
document.querySelector('#stop-record').addEventListener('click', e=>stopRecording(e));
document.querySelector('#play-record').addEventListener('click', e=>playRecording(e));