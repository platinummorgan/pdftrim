import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url: blobUrl, filename } = body;

    if (!blobUrl) {
      return NextResponse.json({ error: 'No URL provided' }, { status: 400 });
    }

    // Download PDF from blob URL
    const response = await fetch(blobUrl);
    if (!response.ok) {
      throw new Error(`Failed to download PDF: ${response.statusText}`);
    }

    const pdfBuffer = await response.arrayBuffer();

    // Use dynamic import for PyMuPDF (we'll need to install it)
    // For now, let's use pdf-lib which works in Node.js
    const { PDFDocument } = await import('pdf-lib');
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const pageCount = pdfDoc.getPageCount();

    return NextResponse.json({
      success: true,
      filename: blobUrl,  // Use blob URL as reference
      total_pages: pageCount,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Processing failed' },
      { status: 500 }
    );
  }
}
