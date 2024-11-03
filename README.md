# Parking App API 🚗
API untuk mengelola tiket parkir dengan sistem autentikasi pengguna, cocok untuk aplikasi parkir yang mudah diakses dan efisien. API ini menyediakan endpoint untuk registrasi, login, dan pengelolaan tiket parkir.

## 📋 Fitur Utama
- Autentikasi User: Daftar dan login user dengan otentikasi JWT.
- Pengelolaan Tiket Parkir: 
  - Membuat, melihat, memperbarui, dan menghapus tiket parkir.
  - Setiap tiket parkir terhubung dengan user yang membuatnya.
- Pengelolaan User: User bisa melihat data akun mereka.

## 🛠️ Teknologi yang Digunakan
- Express.js: Framework backend yang cepat dan minimalis.
- MySQL: Penyimpanan data menggunakan sistem database relasional.
- JWT (JSON Web Tokens): Untuk autentikasi user.
- bcrypt: Untuk enkripsi kata sandi user.
