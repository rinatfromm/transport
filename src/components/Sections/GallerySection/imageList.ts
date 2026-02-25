import type { Image } from "../../../types/ImagesList";

const modules = import.meta.glob("../../../assets/images/image_*.jpeg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const images: Image[] = Object.entries(modules)
  .sort(([a], [b]) => {
    const na = Number(a.match(/image_(\d+)\.jpeg$/)?.[1] ?? 0);
    const nb = Number(b.match(/image_(\d+)\.jpeg$/)?.[1] ?? 0);
    return na - nb;
  })
  .map(([path, src]) => {
    const n = path.match(/image_(\d+)\.jpeg$/)?.[1] ?? "";
    return { src, alt: n };
  });

