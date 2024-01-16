import { CSSProperties } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

const canvasStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function Confetti() {
    return (
        <Fireworks autorun={{ speed: 0.8 }} style={canvasStyles} />
    );
}

export default Confetti;