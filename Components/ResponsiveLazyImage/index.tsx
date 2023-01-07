import scssStyles from "@/utils/scssStyles";
import { useOnScreen } from "@/hooks";
import { Property } from "csstype";
import {
  CSSProperties,
  FC,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./ResponsiveLazyImage.module.scss";

interface ResponsiveLazyImageProps {
  src: string;
  src2?: string;
  src3?: string;
  alt: string;
  aspectRatio?: Property.AspectRatio;
  width?: Property.Width;
  height?: Property.Height;
  fullBg?: boolean;
  className?: string;
  containerClassName?: string;
  title?: string;
  style?: CSSProperties;
  onLoad?: ReactEventHandler<HTMLImageElement>;
  onScreen?: (isOnScreen: boolean) => void;
  getRef?: (ref: HTMLDivElement | null) => void;
  getPictureRef?: (ref: HTMLPictureElement | null) => void;
  forceLoad?: boolean;
}

const ResponsiveLazyImage: FC<ResponsiveLazyImageProps> = ({
  alt,
  src,
  src2,
  src3,
  aspectRatio = "unset",
  width = "unset",
  height = "unset",
  fullBg = false,
  className = "",
  containerClassName = "",
  style: st = {},
  onLoad,
  onScreen,
  getRef,
  getPictureRef,
  title,
  forceLoad = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const pictureRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const isVisible = useOnScreen(ref);
  const style: CSSProperties = {
    aspectRatio,
    width,
    height,
    maxWidth: "100%",
    ...st,
  };

  const fullBgStyle: CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    if (getRef && ref.current) {
      getRef(ref.current);
    }
  }, [ref, getRef]);

  useEffect(() => {
    if (getPictureRef && pictureRef.current) {
      getPictureRef(pictureRef.current);
    }
  }, [pictureRef, getPictureRef]);

  useEffect(() => {
    if (onScreen) {
      onScreen(isVisible);
    }
  }, [isVisible, onScreen]);

  useEffect(() => {
    if ((!loaded && isVisible) || forceLoad) {
      setLoaded(true);
    }
  }, [isVisible, loaded, forceLoad]);

  return (
    <span
      ref={ref}
      style={fullBg ? { ...style, ...fullBgStyle } : style}
      className={containerClassName}
    >
      <picture
        ref={pictureRef}
        className={scssStyles([styles.picture, className])}
      >
        <source srcSet={src3 ?? src2 ?? src} media="(min-width: 1024.1px)" />
        <source srcSet={src2 ?? src} media="(min-width: 768.1px)" />
        <img
          onLoad={(e) => {
            if (onLoad) {
              onLoad(e);
            }
          }}
          title={title ?? alt}
          srcSet={src}
          alt={alt}
          style={fullBg ? { ...style, ...fullBgStyle } : style}
        />
      </picture>
      {/*)}*/}
    </span>
  );
};

export default ResponsiveLazyImage;
