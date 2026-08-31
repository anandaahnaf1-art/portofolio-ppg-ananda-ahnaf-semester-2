@echo off
echo ========================================
echo   E-Portofolio PPG Prajabatan Server
echo ========================================
echo.
echo Memulai server lokal...
echo.

REM Cek apakah Python terinstall
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python tidak ditemukan. Menggunakan metode alternatif...
    echo.
    echo Membuka website langsung di browser...
    start index.html
    echo.
    echo Website terbuka di browser default Anda.
    echo.
    pause
    exit /b
)

REM Jalankan Python HTTP Server
echo Server berjalan di: http://localhost:8000
echo Tekan Ctrl+C untuk menghentikan server.
echo.
python -m http.server 8000

pause
