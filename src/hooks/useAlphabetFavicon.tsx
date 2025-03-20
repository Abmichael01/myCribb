import { useEffect } from "react";

const useAlphabetFavicon = (letter: string, bgColor = "#8e44ad", textColor = "#fff") => {
  useEffect(() => {
    if (!letter) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const size = 64; // Favicon size

    canvas.width = size;
    canvas.height = size;

    if (ctx) {
      // Draw circular background
      ctx.fillStyle = bgColor;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();

      // Draw text in the center with padding
      ctx.fillStyle = textColor;
      ctx.font = `bold 36px "Pacifico", cursive`; // Adjust font size for padding
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(letter.toUpperCase(), size / 2, size / 2 + 2); // Adjust text position slightly

      // Convert canvas to a data URL and set as favicon
      const faviconUrl = canvas.toDataURL("image/png");
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
