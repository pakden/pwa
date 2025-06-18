
# Aplikasi PWA: Keluar Pejabat

Aplikasi ini dibangunkan sebagai Progressive Web App (PWA) untuk memudahkan proses permohonan keluar pejabat oleh kumpulan pengguna Tukang di MADA. Ia juga membolehkan Penolong Jurutera meluluskan permohonan dan Pengawal Keselamatan menyemak serta mengesahkan pelepasan aset.

---

## ✅ Ciri-ciri
- Pengguna Tukang boleh:
  - Isi borang permohonan
  - Pilih tarikh & masa keluar
  - Muat naik gambar aset/kenderaan
- Data dihantar ke backend untuk semakan lanjut
- UI akan dipaparkan mengikut peranan pengguna
- Boleh dipasang sebagai aplikasi di telefon pintar (Android/iOS)
- Siap untuk deployment di Vercel atau Netlify

---

## 📦 Teknologi Digunakan
- React + Vite
- Vite PWA Plugin
- HTML5 + JavaScript + CSS
- Supabase (atau Firebase) sebagai backend API
- PWA standard: `manifest.json`, ikon 192px & 512px, service worker

---

## 🚀 Cara Guna (Local)
```bash
npm install
npm run dev
```

---

## 🌐 Cara Deploy ke Vercel
1. Push projek ini ke GitHub
2. Login ke [https://vercel.com](https://vercel.com)
3. Klik **“Add New Project”**
4. Pilih repo `pwa-keluar-pejabat`
5. Klik **Deploy**

---

## 🗂️ Struktur Folder
- `src/pages/ApplyPage.jsx` – Borang permohonan Tukang
- `src/components/ImageUpload.jsx` – Komponen upload gambar
- `public/manifest.json` – Konfigurasi PWA
- `vite.config.js` – Konfigurasi build dan plugin PWA
- `README.md` – Panduan penggunaan & deploy

---

## 👤 Dibangunkan oleh
**Ir. Ts. Mohd Fadzil Mat Desa**  
Pengarah Bahagian Mekanikal dan Elektrikal  
MADA (Muda Agricultural Development Authority)
