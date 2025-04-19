import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Meow Gadget – Smart Tech for Clever Living"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <div style={{ fontSize: 64, fontWeight: "bold" }}>
          <span style={{ color: "#f97316" }}>Meow</span> Gadget
        </div>
        <div style={{ fontSize: 36, color: "#666" }}>Smart Tech for Clever Living</div>
        <div style={{ fontSize: 24, marginTop: 24, color: "#888" }}>Coming Soon</div>
      </div>
    </div>,
    { ...size },
  )
}
