# YOUTHON - Concept Pitch Deck Web

Platform presentasi interaktif dan blueprint komprehensif untuk inisiasi gerakan anak muda **YOUTHON** (Fun Run Movement - Chapter 01 Jawa Barat).

---

## Fitur Utama

- **Protected Access (PIN Security Gate)**: Dokumen pitch deck dilindungi PIN akses yang dapat dikonfigurasi melalui Environment Variable (`VITE_ACCESS_PIN`).
- **Opsi 1: Split-Stage Dossier**: Mode presentasi fokus per bagian tanpa distraksi scroll luar (100vh app stage).
- **Interactive Pitch Deck (17 Slides)**: Mode presentasi interaktif dengan catatan presenter, navigasi keyboard (spasi, panah, fullscreen `F`, catatan `N`).
- **Bagan Struktur Pohon Hierarkis (8 Pilar)**: Diagram pohon pengetahuan interaktif dengan card detail mengambang (*floating detail cards*) dan fitur Fullscreen.
- **Brand Concept Vault**: Panduan visual brand, sistem palet warna resmi (`color_pallate.png`), dan mockup merchandise collateral (`mockup.png`) beresolusi tinggi dengan Lightbox modal.

---

## Konfigurasi PIN Akses (.env)

Aplikasi ini menggunakan sistem proteksi PIN berbasis Environment Variable di Vite.

1. Salin `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```

2. Tentukan PIN rahasia Anda pada variabel `VITE_ACCESS_PIN`:
   ```env
   VITE_ACCESS_PIN=2026
   ```

> **Catatan Keamanan:** File `.env` sudah dimasukkan ke `.gitignore` sehingga tidak akan terunggah ke repositori publik GitHub.

---

## Panduan Deploy ke Vercel

### Metode 1: Melalui GitHub (Rekomendasi)

1. Buat repository baru di [GitHub](https://github.com/new).
2. Hubungkan repository lokal dan lakukan push:
   ```bash
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
3. Buka dashboard [Vercel](https://vercel.com) dan klik **Add New Project**.
4. Import repository GitHub Anda.
5. Pada bagian **Environment Variables**, tambahkan:
   - **Key**: `VITE_ACCESS_PIN`
   - **Value**: Masukkan PIN akses Anda (contoh: `2026`)
6. Klik **Deploy**. Selesai!

### Metode 2: Menggunakan Vercel CLI

1. Pasang Vercel CLI (jika belum terpasang):
   ```bash
   npm i -g vercel
   ```
2. Jalankan perintah deploy di folder proyek:
   ```bash
   vercel
   ```
3. Masukkan environment variable saat diminta atau tambahkan via:
   ```bash
   vercel env add VITE_ACCESS_PIN
   ```
4. Deploy ke production:
   ```bash
   vercel --prod
   ```

---

## Pengembangan Lokal

```bash
# Instal dependensi
npm install

# Jalankan server pengembangan lokal (port 5173)
npm run dev

# Validasi build produksi (port 4173)
npm run build
npm run preview
```

---

## Lisensi & Kerahasiaan

Dokumen ini disusun untuk inisiasi kemitraan strategis **YOUTHON Movement**. Seluruh hak cipta dan konsep dilindungi.
