import { upload } from '@vercel/blob/client';

// No more external API - everything is local!
const API_URL = '';  // Empty = same origin, no CORS!

export interface PageSettings {
  left: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  right: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
}

export interface UploadResponse {
  success: boolean;
  filename: string;
  total_pages: number;
  error?: string;
}

export interface PreviewResponse {
  success: boolean;
  image: string;
  width: number;
  height: number;
  error?: string;
}

export interface ProcessRequest {
  filename: string;
  page_settings: Record<number, PageSettings>;
  selected_pages: Array<{
    page: number;
    export_left: boolean;
    export_right: boolean;
  }>;
  output_format: 'JPG' | 'PNG' | 'TIFF' | 'WebP';
  jpg_quality: number;
  dpi: number;
  use_sequential: boolean;
  single_page_mode: boolean;
}

export interface ProcessResponse {
  success: boolean;
  download_url: string;
  error?: string;
}

export async function uploadPDF(file: File): Promise<UploadResponse> {
  try {
    // Generate unique filename with timestamp
    const timestamp = Date.now();
    const uniqueFilename = `${timestamp}-${file.name}`;
    
    // Upload directly to Vercel Blob from client
    const blob = await upload(uniqueFilename, file, {
      access: 'public',
      handleUploadUrl: '/api/upload',
    });

    console.log('Blob uploaded:', blob.url);

    // Now tell backend to process from this blob URL
    const response = await fetch(`${API_URL}/api/upload-from-url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: blob.url,
        filename: file.name,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Backend error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    return {
      ...data,
      blobUrl: blob.url,
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      success: false,
      filename: '',
      total_pages: 0,
      error: error instanceof Error ? error.message : 'Upload failed',
    };
  }
}

export async function getPreview(
  filename: string,
  pageNum: number,
  leftCrop: PageSettings['left'],
  rightCrop: PageSettings['right']
): Promise<PreviewResponse> {
  const response = await fetch(`${API_URL}/api/preview`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      blob_url: filename, // filename is actually the blob URL
      page_num: pageNum,
      left_crop: leftCrop,
      right_crop: rightCrop,
    }),
  });

  return response.json();
}

export async function processPDF(
  request: ProcessRequest
): Promise<ProcessResponse> {
  const response = await fetch(`${API_URL}/process`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });

  return response.json();
}

export function getDownloadURL(path: string): string {
  return `${API_URL}${path}`;
}
