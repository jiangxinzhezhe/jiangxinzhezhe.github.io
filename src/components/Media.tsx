// src/components/Media.tsx
import React from "react";
import { asset } from "../utils/asset";

type Props = {
  src: string; // 传你现在的 GIF 路径，比如 "/images/echo/echofire.gif"
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  poster?: string; // 可选：视频封面
};

export default function Media({ src, alt, className, style, poster }: Props) {
  // 如果是 GIF，尝试同名 mp4/webm，再不行回退 GIF
  const lower = src.toLowerCase();
  // 如果是视频文件（gif/mp4/mov/webm），就用 <video>
  if (/\.(gif|mp4|mov|webm)$/.test(lower)) {
    const name = src.replace(/^\/images\//, "").replace(/\.gif$/i, "");
    if (/\.(gif|mp4|mov|webm)$/.test(lower)) {
      // 对于 gif 我们仍然尝试转 mp4/webm 版本，否则直接播放
      if (lower.endsWith(".gif")) {
        const name = src.replace(/^\/images\//, "").replace(/\.gif$/i, "");
        const webm = asset(`/videos/${name}.webm`);
        const mp4 = asset(`/videos/${name}.mp4`);
        const gif = asset(src);
        return (
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              maxWidth: 900,
              display: "block",
              margin: "0 auto",
              ...style,
            }}
          >
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
            <img src={gif} alt={alt} />
          </video>
        );
      } else {
        // 对于 mp4、mov、webm，直接视频播放
        return (
          <video
            src={asset(src)}
            autoPlay
            loop
            muted
            playsInline
            className={className}
            style={{
              width: "100%",
              maxWidth: 900,
              display: "block",
              margin: "0 auto",
              ...style,
            }}
          />
        );
      }
    }

    const webm = asset(`/videos/${name}.webm`);
    const mp4 = asset(`/videos/${name}.mp4`);
    const gif = asset(src);

    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className={className}
        style={{
          width: "100%",
          maxWidth: 900,
          display: "block",
          margin: "0 auto",
          ...style,
        }}
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
        {/* 如果没有视频文件，就显示 GIF */}
        <img src={gif} alt={alt} />
      </video>
    );
  }

  // 其他格式正常 <img>
  return (
    <img
      src={asset(src)}
      alt={alt}
      className={className}
      style={{
        width: "100%",
        maxWidth: 900,
        display: "block",
        margin: "0 auto",
        ...style,
      }}
    />
  );
}
