import fetch from "node-fetch";

export async function imageToBase64(url) {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const mime = response.headers.get("content-type") || "image/png";
    return `data:${mime};base64,${Buffer.from(buffer).toString("base64")}`;
  } catch (error) {
    console.error("Image fetch error:", error);
    return ""; 
  }
}
