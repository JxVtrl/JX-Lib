import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#338AF3" />
    <Path d="M27 0v8.79L0 9.01V0h27Z" fill="#fff" />
    <Path
      d="M17.072 6.21 13.5 9.782 9.928 6.21a4.28 4.28 0 0 0-.732 2.398v1.174a4.312 4.312 0 0 0 2.908 4.072c-.226.442-.188.994.143 1.407l1.28-1.025 1.278 1.025c.335-.418.37-.978.136-1.422a4.312 4.312 0 0 0 2.863-4.057V8.608a4.28 4.28 0 0 0-.732-2.398Z"
      fill="#6DA544"
    />
    <Path
      d="M13.5 12.913a3.134 3.134 0 0 1-3.13-3.13V8.609a3.134 3.134 0 0 1 3.13-3.13 3.134 3.134 0 0 1 3.13 3.13v1.174a3.134 3.134 0 0 1-3.13 3.13Z"
      fill="#FFDA44"
    />
    <Path
      d="M15.457 9.783V8.609A1.959 1.959 0 0 0 13.5 6.652a1.959 1.959 0 0 0-1.957 1.957v1.174l1.957.391 1.957-.391Z"
      fill="#338AF3"
    />
    <Path
      d="M11.543 9.783c0 1.079.878 1.957 1.957 1.957a1.959 1.959 0 0 0 1.957-1.957h-3.914Z"
      fill="#6DA544"
    />
    <Path
      d="M15.848 5.478a1.174 1.174 0 0 0-1.957-.874v-.69h.392V3.13h-.392v-.392h-.782v.392h-.392v.782h.392v.69a1.174 1.174 0 1 0-1.565 1.75v.69h3.913v-.69a1.17 1.17 0 0 0 .39-.875Z"
      fill="#FFDA44"
    />
  </Svg>
)

export default SM
