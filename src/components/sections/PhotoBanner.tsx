import fs from "fs";
import path from "path";
import Image from "next/image";

const PHOTO_DIR = path.join(process.cwd(), "public", "photos");
const PHOTO_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

// "01-Tübingen-Neckar.jpg" -> "Tübingen Neckar"
const captionFromFilename = (file: string) =>
  path
    .parse(file)
    .name.replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();

// Read at build time, so photos dropped into public/photos/ show up automatically
function getPhotos() {
  if (!fs.existsSync(PHOTO_DIR)) return [];
  return fs
    .readdirSync(PHOTO_DIR)
    .filter((file) => PHOTO_EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({
      src: `/photos/${encodeURIComponent(file)}`,
      caption: captionFromFilename(file),
    }));
}

export default function PhotoBanner() {
  const photos = getPhotos();
  if (photos.length === 0) return null;

  return (
    <section aria-label="Photos" className="pb-16">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {photos.map((photo, index) => (
            <figure
              key={photo.src}
              className="relative shrink-0 w-[85%] md:w-[calc((100%-2rem)/3)] aspect-[4/3] snap-start overflow-hidden rounded-[24px] border"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(min-width: 768px) 33vw, 85vw"
                className="object-cover"
                priority={index < 3}
              />
              {photo.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pt-10 pb-4 font-serif text-body-sm font-semibold text-white">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
