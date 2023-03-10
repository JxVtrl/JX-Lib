import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DM = (props) => (
  <Svg
    width={27}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M.012 0h26.976v18H.012V0Z" fill="#496E2D" />
    <Path d="M.012 5.84v6.328h26.976V5.84H.012Z" fill="#000" />
    <Path d="M.012 5.84h26.976v2.11H.012V5.84Z" fill="#FFDA44" />
    <Path d="M.012 10.059h26.976v2.109H.012v-2.11Z" fill="#fff" />
    <Path d="M10.34 0h6.32v18h-6.32V0Z" fill="#000" />
    <Path d="M10.34 0h2.105v18H10.34V0Z" fill="#FFDA44" />
    <Path d="M14.484 0h2.11v18h-2.11V0Z" fill="#fff" />
    <Path
      d="M19.984 9.004a6.488 6.488 0 0 1-6.484 6.492 6.488 6.488 0 0 1-6.484-6.492A6.488 6.488 0 0 1 13.5 2.512a6.488 6.488 0 0 1 6.484 6.492Z"
      fill="#D80027"
    />
    <Path
      d="m13.5 3.09.242.75h.79l-.637.469.242.75-.637-.465-.637.465.242-.75-.636-.47h.789l.242-.75Zm-3.473 1.129.645.465.637-.465-.243.754.637.465h-.789l-.242.75-.25-.75h-.79l.638-.465-.243-.754ZM7.883 7.172h.789l.246-.75.246.75h.79l-.642.465.247.754-.641-.465-.64.465.242-.754-.637-.465Zm0 3.656.637-.465-.243-.754.641.465.64-.465-.245.754.64.465h-.789l-.246.754-.246-.754h-.79Zm2.144 2.957.243-.754-.637-.465h.789l.25-.754.242.754h.79l-.638.465.243.754-.637-.469-.645.47Zm3.473 1.13-.242-.755h-.79l.637-.465-.242-.754.637.465.637-.465-.242.754.636.465h-.789l-.242.754Zm3.473-1.13-.645-.469-.637.47.243-.755-.637-.465h.789l.242-.754.25.754h.79l-.637.465.242.754Zm2.144-2.957h-.789l-.246.754-.246-.754h-.79l.642-.465-.247-.754.641.465.64-.465-.242.754.637.465Zm0-3.656-.637.465.243.754-.641-.465-.64.465.245-.754-.64-.465h.789l.246-.75.246.75h.79Zm-2.144-2.953-.242.754.636.465h-.789l-.25.75-.242-.75h-.79l.638-.465-.243-.754.637.465.645-.465ZM14.727 8.898c-.579-1.113-.762-1.324-.762-1.324s.02-.511.02-.824c0-.465-.391-.832-.868-.832-.453 0-.828.152-.87.578-.224.05-.454.219-.454.566 0 .254.05.383.273.489.11-.242.227-.25.493-.336.039.031.086.156.136.18l.016.05s-.703.348-.703 1.633c0 1.555 1.16 2.395 1.16 2.395l-.094.015-.101.371h1.16v-.379l.578.926c.016-.02.539-2.511.016-3.508Z"
      fill="#496E2D"
    />
  </Svg>
)

export default DM