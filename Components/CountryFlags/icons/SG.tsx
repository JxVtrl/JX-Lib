import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SG = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h27v18H0V0Z" fill="#fff" />
    <Path d="M0 0h27v9H0V0Z" fill="#D80027" />
    <Path
      d="M4.402 4.5a2.74 2.74 0 0 1 2.152-2.676 2.739 2.739 0 1 0 0 5.35 2.74 2.74 0 0 1-2.152-2.674Zm3.522-2.544.194.598h.629l-.509.37.194.598-.508-.37-.509.37.195-.598-.509-.37h.629l.194-.598Z"
      fill="#fff"
    />
    <Path
      d="m6.399 3.13.194.598h.629l-.509.37.195.597-.509-.37-.509.37.195-.598-.509-.37h.629l.194-.597Zm3.05 0 .194.598h.629l-.509.37.194.597-.508-.37-.509.37.195-.598-.509-.37h.629l.194-.597Zm-.587 1.76.194.599h.629l-.509.37.194.597-.508-.37-.509.37.195-.598-.509-.37h.629l.194-.597Zm-1.876 0 .194.599h.629l-.509.37.195.597-.51-.37-.508.37.195-.598-.509-.37h.629l.194-.597Z"
      fill="#fff"
    />
  </Svg>
)

export default SG
