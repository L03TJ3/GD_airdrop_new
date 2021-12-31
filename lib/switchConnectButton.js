import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

/**
 * Styled button used for both connect with provider, and switch network.
 */
const SwitchAndConnectButton = styled(Button)({
  height: "100px",
  width: "100px",
  backgroundSize: "90%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "#9c27b0",
  '&.chain-connected': {
      backgroundColor: "#02c5ff",
      '&:hover': {
          backgroundColor: "#0294c0"
      }
  },
  '&.chain-claimed': {
    backgroundColor: 'grey',
    opacity: '0.4',
    cursor: 'default',
    "span": {
      color: "red",
      fontWeight: "bold",
      opacity: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "22px",
      transform: "rotateZ(45deg);",
      overflow: "visible",
    },
    '&:hover': {
      backgroundColor: 'grey',
    }
  },
  '&:hover': {
      backgroundColor: "#60156c"
  }
});

export default SwitchAndConnectButton;