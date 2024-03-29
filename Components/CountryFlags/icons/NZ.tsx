import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const NZ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#0052B4" />
      <Path
        d="m22.428 7.826.179.55h.578l-.468.34.179.55-.468-.34-.468.34.179-.55-.468-.34h.578l.179-.55Zm-2.067 3.959.268.825h.867l-.701.51.268.824-.702-.51-.701.51.267-.825-.701-.51h.867l.268-.824Zm.078-6.478.224.687h.722l-.584.425.223.687-.585-.425-.584.425.223-.687-.585-.425h.723l.223-.687Zm-1.988 2.495.267.825h.868l-.702.51.268.824-.701-.51-.702.51.268-.824-.702-.51h.867l.269-.825Z"
        fill="#D80027"
      />
      <Path
        d="M13.5 0v1.612l-2.382 1.323H13.5v3.13h-3.117L13.5 7.797V9h-1.407L8.218 6.847V9H5.283V6.438L.673 9H0V7.389l2.382-1.324H0v-3.13h3.117L0 1.203V0h1.407l3.876 2.154V0h2.935v2.561L12.828 0h.672Z"
        fill="#fff"
      />
      <Path
        d="M7.594 0H5.906v3.656H0v1.688h5.906V9h1.688V5.344H13.5V3.656H7.594V0Z"
        fill="#D80027"
      />
      <Path d="M8.217 6.065 13.5 9v-.83L9.711 6.065H8.217Z" fill="#0052B4" />
      <Path d="M8.217 6.065 13.5 9v-.83L9.711 6.065H8.217Z" fill="#fff" />
      <Path
        d="M8.217 6.065 13.5 9v-.83L9.711 6.065H8.217Zm-4.428 0L0 8.17V9l5.283-2.935H3.789Z"
        fill="#D80027"
      />
      <Path d="M5.283 2.935 0 0v.83l3.789 2.105h1.494Z" fill="#0052B4" />
      <Path d="M5.283 2.935 0 0v.83l3.789 2.105h1.494Z" fill="#fff" />
      <Path
        d="M5.283 2.935 0 0v.83l3.789 2.105h1.494Zm4.428 0L13.5.83V0L8.217 2.935h1.494Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default NZ
