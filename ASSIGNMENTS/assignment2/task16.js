function downloadFile(filename, callback) {
  console.log(`Downloading ${filename}...`);

  setTimeout(() => {
    if (typeof callback === 'function') {
      callback();
    }
  }, 2000);
}

const downloadCompleteMessage = () => {
  console.log("Download complete!");
};

downloadFile("aaha_kalyanam_movie.mp4",downloadCompleteMessage)