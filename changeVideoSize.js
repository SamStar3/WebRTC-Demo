
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstraints);

const changeVideoSize = () => {

    stream.getVideoTracks().forEach(track => {

        const capbilities = track.getCapabilities();
        const height = document.querySelector('#vid-height').value;
        const width = document.querySelector('#vid-width').value;
        const vConstraints = {
            height: {exact: height < capbilities.height.max? height : capbilities.height.max},
            width: {exact: width < capbilities.width.max? width : capbilities.width.max},
            // frameRate: 5,
            aspectRatio: 10,
        }
        track.applyConstraints(vConstraints);
    })
        
    // stream.getTracks().forEach(track=> {
    //     const capbilities = track.getCapbilities();
    //     console.log(capbilities);
    // })
}