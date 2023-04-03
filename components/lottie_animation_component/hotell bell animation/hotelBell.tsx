import hotelBell from "./hotelBell.json"
import Lottie from "react-lottie";

function HotelBell() {
  
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: hotelBell,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
  return (
    <Lottie options={defaultOptions} height={230} width={230} style={{margin: '0'}} />
  )
}

export default HotelBell