import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { blob_url, page_num } = body;

    if (!blob_url || page_num === undefined) {
      return NextResponse.json(
        { error: 'Missing blob_url or page_num' },
        { status: 400 }
      );
    }

    // Instead of rendering server-side, just return the blob URL
    // The client will render it using pdfjs-dist in the browser
    return NextResponse.json({
      success: true,
      blob_url: blob_url,
      page_num: page_num,
    });
  } catch (error) {
    console.error('Preview error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Preview failed' },
      { status: 500 }
    );
  }
}
