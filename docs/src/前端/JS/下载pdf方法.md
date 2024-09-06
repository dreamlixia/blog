
```ts
/** 下载 PDF 文件 */
export const downloadPDF = (url, fileName) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('downloadPDF function fetch Network response was not ok');
      }
      return response.blob();
    })
    .then((blob) => {
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => {
      console.error('There was an error downloading the PDF:', error);
    });
};
```