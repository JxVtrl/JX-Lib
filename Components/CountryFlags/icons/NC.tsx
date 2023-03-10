import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NC = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.5 12.36h26v5.632H.5V12.36Z" fill="#009543" />
    <Path d="M.5 5.57h26v6.801H.5v-6.8Z" fill="#ED4135" />
    <Path d="M.5.008h26v5.617H.5V.008Z" fill="#0035AD" />
    <Path
      d="M16.64 8.996c0 3.664-2.863 6.633-6.39 6.633-3.527 0-6.39-2.969-6.39-6.633 0-3.66 2.863-6.629 6.39-6.629 3.527 0 6.39 2.969 6.39 6.63Z"
      fill="#FAE600"
      stroke="#000"
      strokeWidth={0.219}
    />
    <Path
      d="m13.008 14.95-1.293.507-1.465.176-1.535-.102-1.457-.652s1.16-1.234 1.652-1.414c.348-.125.91-.156.91-.156v-8.16L9.81 2.366h.683l-.02 2.844v8.082s.622.05.9.172c.46.207 1.636 1.484 1.636 1.484Z"
      fill="#000"
    />
    <Path
      d="m9.14 4.32 1.747-.902.226.473-1.746.902-.226-.473ZM10.844 11.832c0-.617-.305-1.117-.684-1.117-.375 0-.683.5-.683 1.117s.308 1.117.683 1.117c.38 0 .684-.5.684-1.117ZM10.992 6.05c0 .49-.379.884-.848.884-.468 0-.847-.395-.847-.883 0-.485.379-.88.848-.88.468 0 .847.395.847.88ZM10.992 8.906c0-.281-.36-.511-.808-.511-.446 0-.809.23-.809.511s.363.508.809.508c.449 0 .808-.226.808-.508ZM9.188 7.469h1.906v.422H9.188v-.422Zm0 2.402h1.906v.422H9.188v-.422Z"
      fill="#000"
    />
  </Svg>
)

export default NC