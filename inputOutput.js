
const audioInputEl = document.querySelector("audio-input");
const audioOutputEl = document.querySelector("audio-ouput");
const videoInputEl = document.querySelector("video-input");

const getDevices = async () => {

    try{
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
    devices.forEach(d=>{
        const option = document.createElement('option');
        option.value = d.deviceId;
        option.text = d.label;
        if(d.kind === 'audioinput'){
            audioInputEl.appendChild(option);
        }else if(d.kind === 'audiooutput'){
            audioOutputEl.appendChild(option);
        }else if(d.kind === 'videoinput'){
            videoInputEl.appendChild(option);
        }
    })
    }catch(err){
        console.log(err);
    }
}

const changeAudioInput = async (e) => {
    const devicesId =e.target.value;
    const newconstraints = {
        audio: {
            deviceId: { exact: devicesId }
        },
        video:true,
    };
    try{
        stream = await navigator.mediaDevices.getUserMedia(newconstraints);
        console.log(stream);
        const tracks = stream.getAudioTracks();
        console.log(tracks);
    }catch(err){
        console.log(err);
    }
    
}

const changeAudioOutput = async (e) => {
    await videoEl.setSinkId(e.target.value);
    console.log("Changed Audio Device!");
}

const changeVideo = async (e) => {
    const devicesId =e.target.value;
    const newconstraints = {
        audio: true,
        video:{deviceId: { exact: devicesId }},
    };
    try{
        stream = await navigator.mediaDevices.getUserMedia(newconstraints);
        console.log(stream);
        const tracks = stream.getVideoTracks();
        console.log(tracks);
    }catch(err){
        console.log(err);
    }
}

getDevices();