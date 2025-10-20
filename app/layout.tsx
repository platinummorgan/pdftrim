import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const BASE = process.env.NEXT_PUBLIC_BASE_URL || 'https://pdftrim.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: "PDF Book Page Trimmer — Crop Left/Right Pages & Export",
  description:
    "Trim margins on left/right pages of a scanned book PDF, preview per-page crops, then export pages in JPG/PNG at chosen DPI. No sign-up required.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "PDF Book Page Trimmer",
    description:
      "Bulk-trim PDF book scans with left/right page controls and export to JPG/PNG.",
    url: BASE,
    type: "website",
    images: [`${BASE}/opengraph-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Book Page Trimmer",
    description:
      "Bulk-trim PDF book scans with left/right page controls and export to JPG/PNG.",
    images: [`${BASE}/opengraph-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";
  const pubId = adsenseClient.replace("ca-", "pub-");

  return (
    <html lang="en">
      <head>
        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-54CR6KE1K8"
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-54CR6KE1K8');
            `,
          }}
        />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="-fog5YgnD4ysBLp5y0nAwPN1pfglBbfOpar-VvfW314" />
        
        {/* Google Funding Choices CMP (EEA/UK/CH) */}
        <script
          id="fc-cmp"
          async
          src={`https://fundingchoicesmessages.google.com/i/${pubId}?ers=1`}
        />
        <script
          id="fc-cmp-signal"
          dangerouslySetInnerHTML={{
            __html: `
            (function signal(){if(!window.frames['__fc_loaded']){if(document.body){const f=document.createElement('iframe');f.style.display='none';f.name='__fc_loaded';document.body.appendChild(f);}else setTimeout(signal,50)}})();
          `,
          }}
        />
        {/* AdSense */}
        <script
          async
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
