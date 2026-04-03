import { ImageResponse } from "next/og";
import { SITE_HOST, SITE_NAME } from "@/lib/constants";

/** Edge avoids a Node `@vercel/og` prerender issue when project paths contain spaces. */
export const runtime = "edge";

export const alt = `Ahrefs Group Buy · Compare Ahrefs Plans, Features & Starter Options · ${SITE_HOST}`;

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1e293b",
          backgroundImage:
            "linear-gradient(145deg, #1e293b 0%, #1d4ed8 38%, #1e3a5f 70%, #1e293b 100%)",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 6,
              height: 52,
              backgroundColor: "#f97316",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              width: 6,
              height: 32,
              backgroundColor: "#2563eb",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase" as const,
              color: "#94a3b8",
            }}
          >
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Ahrefs Group Buy
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#cbd5e1",
              lineHeight: 1.35,
              maxWidth: 920,
            }}
          >
            Compare Ahrefs Plans, Features & Starter Options
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(148, 163, 184, 0.25)",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#fb923c",
              letterSpacing: 0.5,
            }}
          >
            {SITE_HOST}
          </div>
          <div style={{ fontSize: 18, color: "#64748b", fontWeight: 500 }}>
            Plans · Guides · Reviews
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
