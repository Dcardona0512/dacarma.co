import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // dacarma.co is canonical (it's what metadataBase advertises), so the
      // www host permanently redirects to the apex rather than serving a
      // duplicate copy of the site.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dacarma.co" }],
        destination: "https://dacarma.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
