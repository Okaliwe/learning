import { useReactMediaRecorder } from "react-media-recorder";

const Create = () => {
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
      } = useReactMediaRecorder({ screen: true });
    
    return ( 
        <div>
      <p>{status}</p>
      <video id="vid" src={mediaBlobUrl} controls autoPlay loop  />
      <div className="btns">
      <button onClick={startRecording} id="btn">Start Recording</button>
      <button onClick={stopRecording}id="btn-1">Stop Recording </button>
          </div>
     
      
    </div>
        
     );
}
 
export default Create;