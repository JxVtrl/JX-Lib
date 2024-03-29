import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AL = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#ED2024" />
    <Path
      d="M9.75 3.66v4.8l2.13.75-1.5 1.47.72.9 1.59-1.65.36.69-.9 1.47 1.08 1.68-.54.78.84 1.08.81-1.11-.45-.78.9-1.74-.81-1.38.36-.69 1.56 1.65.75-.87-1.56-1.53 2.16-.78V3.66l-1.56.57-.03 1.14-.99.09v-.78l.51-.69 1.68-.66-.69-.12.42-.36.27.12-.24-.42-.42.15-.3-.33-1.65.33.42.33-1.14 1.47-1.14-1.44.39-.33-1.5-.36-.42.33-.45-.12-.24.42.27-.18.48.33-.69.15 1.65.6.48.69v.87l-.99-.09V4.29l-1.62-.63Z"
      fill="#212121"
    />
    <Path
      d="M7.86 7.5h1.92v.75H7.86V7.5Zm0-1.23h1.92v.81H7.86v-.81Zm0-1.26h1.92v.78H7.86v-.78Zm0-1.2h1.92v.75H7.86v-.75ZM17.22 7.5h1.92v.75h-1.92V7.5Zm0-1.23h1.92v.81h-1.92v-.81Zm0-1.26h1.92v.78h-1.92v-.78Zm0-1.2h1.92v.75h-1.92v-.75ZM16.02 10.83h1.92v.57h-1.92v-.57Zm-6.96 0h1.92v.57H9.06v-.57Z"
      fill="#212121"
    />
  </Svg>
)

export default AL
