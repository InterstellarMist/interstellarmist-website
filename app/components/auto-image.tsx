import Image from "next/image";
import path from "path";
const { imageSizeFromFile } = require("image-size/fromFile");

export async function AutoImage({ src, alt = "", width, ...props }) {
  // Only works on the server!
  const imagePath = path.join(
    process.cwd(),
    "public",
    src.startsWith("/") ? src.slice(1) : src
  );
  const dimensions = await imageSizeFromFile(imagePath);
  const origWidth = dimensions.width;
  const origHeight = dimensions.height;

  let finalWidth = width ? Number(width) : origWidth;
  let finalHeight = origHeight;

  if (width) {
    // Calculate height to preserve aspect ratio
    finalHeight = Math.round((origHeight / origWidth) * finalWidth);
  }

  return (
    <div className="flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
        className="rounded-xl"
        {...props}
      />
    </div>
  );
}
