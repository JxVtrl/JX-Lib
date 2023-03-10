import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const MO = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M0 0h27v18H0V0Z" fill="#00745A" />
      <Path
        d="M15.065 8.624c-.22 0-.43.044-.625.115.107-.238.178-.503.178-.785 0-1.118-1.118-1.957-1.118-1.957s-1.118.839-1.118 1.957c0 .282.071.547.178.785a1.844 1.844 0 0 0-.625-.115c-1.118 0-1.957 1.118-1.957 1.118s.839 1.118 1.957 1.118c.655 0 1.214-.384 1.565-.702.35.318.91.702 1.565.702 1.118 0 1.957-1.118 1.957-1.118s-.839-1.118-1.957-1.118Z"
        fill="#fff"
      />
      <Path
        d="m13.5 3.521.231.711h.747l-.604.44.23.71-.604-.44-.604.44.23-.71-.604-.44h.747l.231-.71Zm-2.842 1.244.444.4.518-.3-.243.547.444.4-.594-.063-.243.546-.125-.584-.594-.063.518-.299-.125-.584Zm-2.08 2.08.585.124.299-.518.062.595.585.124-.546.243.062.595-.4-.444-.546.243.299-.518-.4-.444Zm7.764-2.08-.444.4-.518-.3.243.547-.444.4.594-.063.243.546.125-.584.594-.063-.517-.299.124-.584Zm2.08 2.08-.585.124-.299-.518-.062.595-.585.124.546.243-.062.595.4-.444.546.243-.299-.518.4-.444Z"
        fill="#FFDA44"
      />
      <Path
        d="M13.5 13.99c.888 0 1.707-.296 2.363-.794h-4.726a3.894 3.894 0 0 0 2.363.794Zm-3.587-2.347c.123.282.28.549.466.794h6.241c.187-.245.343-.512.467-.794H9.913Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default MO