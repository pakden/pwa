import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';

function ApplyPage() {
  const [lokasi, setLokasi] = useState('');
  const [datetime, setDatetime] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      lokasi_tujuan: lokasi,
      datetime_keluar: datetime,
      senarai_aset: "Pam, Tangga",
      images: images.map(img => img.base64),
    };

    const res = await fetch('/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    alert(result.message || "Permohonan dihantar.");
  };

  return (
    <div className="container">
      <h2>Permohonan Keluar</h2>
      <form onSubmit={handleSubmit}>
        <label>Lokasi Tujuan:</label><br />
        <input value={lokasi} onChange={e => setLokasi(e.target.value)} required /><br />
        <label>Tarikh & Masa Keluar:</label><br />
        <input type="datetime-local" value={datetime} onChange={e => setDatetime(e.target.value)} required /><br />
        <label>Gambar Aset/Kenderaan:</label><br />
        <ImageUpload onUpload={setImages} />
        <button type="submit">Hantar Permohonan</button>
      </form>
    </div>
  );
}

export default ApplyPage;
