<<<<<<< HEAD
# PDF Book Page Trimmer

A Python application for extracting and trimming pages from book-style PDFs. This tool allows you to separate left and right pages from scanned book PDFs, trim the edges independently, and save them as individual image files.

## Features

- 📖 Extract pages from PDF books
- ✂️ Independent trimming for left and right pages
- 👁️ Live preview with adjustable trim settings
- 🎯 Smart page naming (Title, Left_page1, Right_page1, etc.)
# PDF Book Page Trimmer

A Python application for extracting and trimming pages from book-style PDFs. This tool allows you to separate left and right pages from scanned book PDFs, trim the edges independently, and save them as individual image files.

## Features

- � Extract pages from PDF books
- ✂️ Independent trimming for left and right pages
- 👁️ Live preview with adjustable trim settings
- 🎯 Smart page naming (Title, Left_page1, Right_page1, etc.)
- �🖼️ Adjustable DPI for output images
- 💾 Save to your chosen directory
- 🖱️ User-friendly GUI interface

## Requirements

- Python 3.8 or higher
- Windows, macOS, or Linux

## Installation

1. **Clone or download this repository**

2. **Install dependencies:**
   ```powershell
   pip install -r requirements.txt
   ```

   This will install:
   - PyMuPDF (fitz) - For PDF processing
   - Pillow - For image manipulation
   - NumPy - For image processing support

## Usage

### Running the Application

```powershell
python pdf_trimmer.py
```

### Step-by-Step Guide

1. **Select PDF File**
   - Click "Browse" next to "PDF File"
   - Choose your book PDF file

2. **Select Output Folder**
   - Click "Browse" next to "Output Folder"
   - Choose where you want to save the trimmed images

3. **Load PDF for Preview**
   - Click "Load PDF" to preview pages
   - Use "Previous" and "Next" buttons to navigate

4. **Adjust Trim Settings**
   - Set trim percentages for left and right pages independently
   - Default settings:
     - **Left pages**: Trim 5% from left, 50% from right (removes binding area)
     - **Right pages**: Trim 50% from left (removes binding area), 5% from right
     - Top/Bottom: 5% trim on both
   - Adjust values while previewing to get the perfect crop

5. **Configure Output Settings**
   - **DPI**: Set resolution (300 DPI recommended for quality)
   - **Start page number**: Set whether first page is odd/even (affects left/right detection)

6. **Process PDF**
   - Click "Process PDF" to extract and trim all pages
   - Files will be saved with the following naming:
     - `Title.png` - First page
     - `Left_page1.png`, `Right_page1.png` - Pages 2-3
     - `Left_page2.png`, `Right_page2.png` - Pages 4-5
     - And so on...

## Trim Settings Explained

The application uses percentage-based trimming:

- **Left trim %**: Remove this % from the left edge
- **Right trim %**: Remove this % from the right edge
- **Top trim %**: Remove this % from the top edge
- **Bottom trim %**: Remove this % from the bottom edge

### Typical Book Settings

For a scanned book with two pages per PDF page:

**Left Pages (odd):**
- Left: 5% (minimal edge trim)
- Right: 50% (remove the center binding and right page)
- Top/Bottom: 5% (remove margins)

**Right Pages (even):**
- Left: 50% (remove left page and center binding)
- Right: 5% (minimal edge trim)
- Top/Bottom: 5% (remove margins)

## Tips

1. **Preview First**: Always preview a few pages before processing the entire PDF
2. **DPI Settings**: 
   - 150 DPI: Faster, smaller files, good for web
   - 300 DPI: High quality, recommended for printing
   - 600 DPI: Very high quality, large files
3. **Trim Adjustment**: Fine-tune trim percentages based on your specific book's layout
4. **Page Numbering**: The first page is treated as "Title", subsequent pages alternate between left and right

## Troubleshooting

### Import Error for 'fitz'
If you get an error about `fitz` not being found, ensure PyMuPDF is installed:
```powershell
pip install PyMuPDF
```

### Poor Quality Output
Increase the DPI setting (try 300 or 600)

### Wrong Page Trimming
Adjust the "Start page number" setting if your left/right pages are reversed

### Application Won't Start
Ensure all dependencies are installed:
```powershell
pip install -r requirements.txt
```

## Alternative: Using ImageMagick

If you prefer to use ImageMagick directly (as mentioned in your request), you can install it from [imagemagick.org](https://imagemagick.org) and use the Wand library:

```powershell
pip install Wand
```

The current implementation uses PyMuPDF which provides similar functionality with easier Python integration.

## Next.js Frontend Quickstart

This repository also contains a Next.js frontend app. To run the frontend locally:

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the frontend.

## License

This project is provided as-is for personal use.

## Contributing

Feel free to submit issues or pull requests for improvements!

