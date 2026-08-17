export const IMAGE_INPUT_ACCEPT =
  "image/jpeg,image/jpg,image/png,image/webp,image/gif,image/bmp,image/svg+xml,.jpg,.jpeg,.png,.webp,.gif,.bmp,.svg";

export function isAcceptedImageFile(file: File): boolean {
  const type = file.type.toLowerCase();
  const name = file.name.toLowerCase();

  const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp", ".svg"];

  return (
    type.startsWith("image/") ||
    allowedExtensions.some((extension) => name.endsWith(extension))
  );
}
