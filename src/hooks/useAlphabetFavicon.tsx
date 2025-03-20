import { useEffect } from "react";

const useAlphabetFavicon = (letter: string, bgColor = "#000", textColor = "#fff") => {
  useEffect(() => {
    if (!letter) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const size = 64;

    canvas.width = size;
    canvas.height = size;

    if (ctx) {
      // Background color
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);

      // Text settings
      ctx.fillStyle = textColor;
      ctx.font = "bold 48px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw letter in the center
      ctx.fillText(letter.toUpperCase(), size / 2, size / 2);

      // Convert canvas to data URL
      const faviconUrl = canvas.toDataURL("image/png");

      // Set the favicon
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = faviconUrl;
    }
  }, [letter, bgColor, textColor]);
};

export default useAlphabetFavicon;
