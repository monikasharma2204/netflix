import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        
 src="https://media.istockphoto.com/videos/panoramic-tiemalpse-of-la-concha-beach-san-
sebastian-basque-country-video-id1314817535"
      />

    </div>
  );
}