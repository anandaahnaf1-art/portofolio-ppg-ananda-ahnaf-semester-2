# Folder Video Pembelajaran

Folder ini berisi video-video pembelajaran untuk Pendidikan Jasmani.

## Cara Mengunggah Video Pembelajaran:

1. Siapkan file video dalam format MP4, WebM, atau OGG
2. Pastikan ukuran file tidak terlalu besar (maksimal 50MB untuk localhost)
3. Copy file video ke folder ini
4. Update file `index.html` untuk menambahkan video baru
5. Refresh browser untuk melihat perubahan

## Contoh Struktur Video di HTML:
```html
<div class="video-container">
    <video controls poster="thumbnail.jpg">
        <source src="video-pembelajaran/nama-video.mp4" type="video/mp4">
        Browser Anda tidak mendukung video tag.
    </video>
    <div class="video-info">
        <h4>Judul Video</h4>
        <p>Deskripsi singkat video pembelajaran</p>
    </div>
</div>
```

## Tips:
- Gunakan format MP4 untuk kompatibilitas terbaik
- Tambahkan thumbnail/gambar preview
- Pastikan video memiliki kualitas yang baik
- Berikan deskripsi yang jelas untuk setiap video
