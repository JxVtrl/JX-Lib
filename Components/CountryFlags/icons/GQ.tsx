import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GQ = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M27 0H0v18h27V0Z" fill="#fff" />
    <Path d="M0 0h27v5.988H0V0Z" fill="#6DA544" />
    <Path d="M0 11.98h27V18H0v-6.02Z" fill="#D80027" />
    <Path d="M6.633 8.984 0 17.964V0l6.633 8.984Z" fill="#0070C8" />
    <Path
      d="M12.305 7.336v2.129c0 1.87 1.875 1.87 1.875 1.87s1.87 0 1.87-1.87v-2.13h-3.745Z"
      stroke="#000"
      strokeWidth={0.053}
      strokeMiterlimit={10}
    />
    <Path d="M13.922 9.465h.515l.211 1.355h-.937l.21-1.355Z" fill="#786145" />
    <Path
      d="M15.117 8.527c0-.515-.422-.78-.937-.78-.516 0-.938.265-.938.78a.47.47 0 0 0-.469.47.47.47 0 0 0 .47.468h1.874a.47.47 0 0 0 .469-.469.47.47 0 0 0-.469-.469Z"
      fill="#6DA544"
    />
    <Path
      d="m12.14 6.316.102.172h.2l-.098.176.097.168h-.199l-.101.172-.098-.172h-.2l.098-.168-.097-.176h.199l.098-.172Zm.81 0 .097.172h.195l-.101.176.101.168h-.195l-.098.172-.101-.172h-.2l.098-.168-.098-.176h.2l.101-.172Zm.804 0 .098.172h.195l-.098.176.098.168h-.195l-.098.172-.102-.172h-.199l.098-.168-.098-.176h.2l.1-.172Zm.832 0 .098.172h.199l-.098.176.098.168h-.2l-.097.172-.102-.172h-.195l.094-.168-.094-.176h.195l.102-.172Zm.84 0 .101.172h.2l-.102.176.102.168h-.2l-.101.172-.098-.172h-.195l.094-.168-.094-.176h.195l.098-.172Zm.789 0 .101.172h.196l-.102.176.102.168h-.196l-.101.172-.098-.172h-.203l.102-.168-.102-.176h.203l.098-.172Z"
      fill="#FFDA00"
      stroke="#000"
      strokeWidth={0.053}
      strokeMiterlimit={10}
    />
  </Svg>
)

export default GQ
