
import { useState } from 'react';

function ImageUpload({ onUpload }) {
  const [previews, setPreviews] = useState([]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    const readers = files.map(file => {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve({ name: file.name, base64: reader.result });
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then(results => {
      setPreviews(results);
      onUpload(results);
    });
  };

  return (
    <>
      <input type="file" multiple accept="image/*" onChange={handleChange} />
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        {previews.map((img, idx) => (
          <img key={idx} src={img.base64} alt={img.name} width="100" />
        ))}
      </div>
    </>
  );
}

export default ImageUpload;
