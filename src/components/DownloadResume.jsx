import React from 'react';

const DownloadResume = () => (
  <div className="p-4">
    <h2 className="text-3xl font-bold mb-4">Download Resume</h2>
    <p><a href="/resume.pdf" download className="text-blue-500">Click here to download my resume.</a></p>
  </div>
);

export default DownloadResume;
