# Panduan Foto Profil E-Portofolio

## 📸 Cara Memastikan Foto Profil Muncul dengan Benar

### ✅ Langkah 1: Siapkan File Foto
1. **Format file**: JPG, JPEG, atau PNG
2. **Ukuran ideal**: 400x400 pixel (bentuk persegi)
3. **Ukuran file**: Maksimal 2MB
4. **Kualitas**: Bagus dan jelas

### 📁 Langkah 2: Letakkan File di Folder yang Benar
```
d:\Ai portofolio\
├── index.html
├── styles.css
├── script.js
├── profile-latest.jpg ← Letakkan foto di sini
└── modul-ajar/
```

### 🔧 Langkah 3: Verifikasi Path di HTML
Pastikan di `index.html` ada kode ini:
```html
<img src="./profile-latest.jpg" alt="Profile" class="profile-photo">
```

### 🌐 Langkah 4: Test di Browser
1. **Buka website** di browser
2. **Refresh halaman** (F5 atau Ctrl+R)
3. **Check Developer Tools**:
   - Klik kanan → Inspect
   - Cari tab Console
   - Lihat apakah ada error 404 untuk foto

### 🐞 Troubleshooting Common Issues

#### ❌ Foto Tidak Muncul
**Masalah**: Path salah atau file tidak ada
**Solusi**:
- Pastikan file `profile-latest.jpg` ada di folder yang sama
- Check spelling nama file (case-sensitive)
- Gunakan path relatif `./profile-latest.jpg`

#### ❌ Foto Muncul Tapi Rusak
**Masalah**: File corrupt atau format tidak support
**Solusi**:
- Re-save foto dengan format JPG
- Pastikan file tidak corrupt
- Coba dengan foto lain

#### ❌ Foto Muncul Tapi Besar/Kecil
**Masalah**: CSS styling tidak berfungsi
**Solusi**:
- Pastikan CSS sudah di-load
- Check class `profile-photo` di styles.css

### 🔄 Alternatif Jika Masih Bermasalah

#### Opsi 1: Gunakan Absolute Path
```html
<img src="d:/Ai portofolio/profile-latest.jpg" alt="Profile" class="profile-photo">
```

#### Opsi 2: Gunakan Base64 (untuk file kecil)
Convert gambar ke base64 dan embed langsung di HTML.

#### Opsi 3: Upload ke Hosting
Upload foto ke hosting dan gunakan URL external.

### 📱 Test di Multiple Browser
Test di:
- Chrome
- Firefox
- Edge
- (jika bisa) Safari

### 🎯 Final Check
1. ✅ File foto ada di folder
2. ✅ Path di HTML benar
3. ✅ CSS styling ter-load
4. ✅ Browser cache di-clear
5. ✅ Foto muncul di semua browser

---

**Jika masih bermasalah, coba restart browser atau clear cache browser.**
