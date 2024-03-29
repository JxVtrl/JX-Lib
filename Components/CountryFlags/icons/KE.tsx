import * as React from "react"
import Svg, { Path } from "react-native-svg"

const KE = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.012 0h26.976v18H.012V0Z" fill="#fff" />
    <Path d="M.012 0h26.976v4.777H.012V0Z" fill="#000" />
    <Path d="M.012 13.223h26.976V18H.012v-4.777Z" fill="#496E2D" />
    <Path d="M.012 5.973h26.976v6.054H.012V5.973Z" fill="#A2001D" />
    <Path
      d="m17.043 2.871-1.348-.621L13.5 7.227 11.305 2.25l-1.348.621L12.684 9l-2.727 6.129 1.348.621 2.195-4.977 2.195 4.977 1.348-.621L14.316 9l2.727-6.129Z"
      fill="#fff"
    />
    <Path
      d="M14.414 3.46c-.52-.57-.914-.897-.914-.897s-.395.328-.914.898v11.078c.52.57.914.899.914.899s.395-.329.914-.899V3.461Z"
      fill="#fff"
    />
    <Path
      d="M11.027 5.586v6.828c.551.98 1.227 1.781 1.73 2.313V3.273a11.93 11.93 0 0 0-1.73 2.313Zm4.946 0a11.93 11.93 0 0 0-1.73-2.313v11.454a11.933 11.933 0 0 0 1.73-2.313V5.586Z"
      fill="#A2001D"
    />
    <Path
      d="M15.973 5.586v6.828c.558-.988.992-2.16.992-3.414s-.434-2.426-.992-3.414Zm-4.946 0v6.828c-.558-.988-.992-2.16-.992-3.414s.434-2.426.992-3.414Z"
      fill="#000"
    />
  </Svg>
)

export default KE
