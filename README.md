# E-Portofolio PPG Prajabatan

## 📋 Deskripsi
Website e-portofolio lengkap untuk PPG Prajabatan yang bisa dijalankan di localhost. Website ini menampilkan profil, portofolio kegiatan, prestasi, dan informasi kontak peserta PPG.

## 📁 File yang Tersedia

### 1. `index.html`
File HTML utama yang berisi struktur lengkap website e-portofolio.

### 2. `styles.css`
File CSS untuk styling modern dan responsif.

### 3. `script.js`
File JavaScript untuk interaktivitas dan animasi.

### 4. `README.md` (file ini)
Informasi overview dan panduan penggunaan.

## 🎯 Fitur Website

### ✅ Fitur Utama
1. **Homepage** - Hero section dengan informasi singkat
2. **Profil** - Informasi lengkap peserta PPG
3. **Portofolio** - Dokumentasi kegiatan mengajar dan pembelajaran
4. **Prestasi** - Penghargaan dan pencapaian akademik
5. **Kontak** - Form kontak dan informasi lengkap

### 🎨 Desain Modern
- Responsive design untuk mobile & desktop
- Color scheme profesional (biru modern)
- Animasi smooth scrolling
- Navigation yang user-friendly
- Interactive elements dan hover effects

## 🚀 Cara Menjalankan di Localhost

### Metode 1: Buka Langsung di Browser
1. Buka File Explorer
2. Navigasi ke folder `d:\Ai portofolio`
3. Klik dua kali file `index.html`
4. Website akan terbuka di browser default Anda

### Metode 2: Menggunakan Live Server (VS Code)
1. Install VS Code jika belum ada
2. Install extension "Live Server"
3. Buka folder project di VS Code
4. Klik kanan pada `index.html`
5. Pilih "Open with Live Server"
6. Website akan otomatis terbuka dengan URL `http://localhost:5500`

### Metode 3: Menggunakan Python
1. Buka Command Prompt/PowerShell
2. Navigasi ke folder project: `cd "d:\Ai portofolio"`
3. Jalankan server: `python -m http.server 8000`
4. Buka browser: `http://localhost:8000`

### Metode 4: Menggunakan Node.js
1. Install Node.js jika belum ada
2. Install http-server: `npm install -g http-server`
3. Navigasi ke folder project
4. Jalankan: `http-server`
5. Buka URL yang ditampilkan di browser

## � Cara Mengedit Konten

### Mengganti Informasi Personal
1. Buka file `index.html`
2. Cari dan ganti placeholder berikut:
   - `[Nama Lengkap]` → Nama Anda
   - `[Bidang Studi]` → Bidang studi Anda
   - `[Nama Universitas]` → Universitas Anda
   - `[Nama Program Studi]` → Program studi Anda
   - `[Tahun]` → Tahun angkatan Anda
   - `[Alamat Lengkap]` → Alamat lengkap Anda
   - `email@example.com` → Email Anda
   - `+62 812-3456-7890` → Nomor telepon Anda

### Menambahkan Foto Profil
1. Siapkan foto profil dengan format JPG/PNG
2. Simpan di folder yang sama dengan nama `profile.jpg`
3. Edit file `index.html` dan ganti icon `<i class="fas fa-user"></i>` dengan:
   ```html
   <img src="profile.jpg" alt="Profile" class="profile-img">
   ```

### Menyesuaikan Warna Tema
1. Buka file `styles.css`
2. Edit CSS variables di bagian `:root`:
   ```css
   --primary-color: #2563eb;  /* Warna utama */
   --secondary-color: #64748b; /* Warna sekunder */
   --accent-color: #f59e0b;  /* Warna aksen */
   ```

## 🛠️ Teknologi yang Digunakan

### Frontend
- **HTML5** Semantic structure
- **CSS3** Modern styling dengan Flexbox & Grid
- **JavaScript** Interactive elements
- **Font Awesome** Icons library
- **Responsive Design** Mobile-first approach

### Design System
- **Colors**: Professional blue theme
- **Typography**: Clean, readable fonts
- **Layout**: Card-based design system
- **Animations**: Smooth scrolling dan hover effects

## 📱 Browser Compatibility

✅ **Supported**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

⚠️ **Limited Support**
- Internet Explorer (tidak direkomendasikan)

## 🔧 Customization

### Branding
- Ganti color scheme di CSS variables
- Update logo dan branding elements
- Sesuaikan typography

### Content
- Edit placeholder text
- Tambah/remove sections sesuai kebutuhan
- Custom portfolio items

### Functionality
- Add progress tracking
- Integrate dengan Google Drive
- Add analytics tracking

## 📞 Support

### Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [Font Awesome](https://fontawesome.com/)

### Troubleshooting
- Pastikan semua file berada di folder yang sama
- Test di multiple browsers
- Check console untuk error messages

## 📄 License

Template ini gratis untuk penggunaan akademik dan non-komersial. 

## 🔄 Version History

- **v1.0** - Initial release dengan fitur lengkap
- Template responsif dan modern

---

**Created by**: AI Assistant  
**Last Updated**: 2024  
**Purpose**: Website e-portofolio PPG Prajabatan untuk localhost
