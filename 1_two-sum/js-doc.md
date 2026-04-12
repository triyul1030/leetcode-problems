# Penjelasan

Solusi ini menggunakan pendekatan **Hash Map (Object/Map di JS)** untuk mencapai efisiensi waktu yang optimal.

## Alur Berpikir

1.  **Masalah**: Kita perlu mencari dua angka yang jika dijumlahkan hasilnya sama dengan `target`.
2.  **Pendekatan Brute Force**: Menggunakan dua loop (`nested loop`) untuk mengecek setiap pasangan. Ini memiliki kompleksitas **O(n²)**, yang lambat untuk array besar.
3.  **Pendekatan Optimal (Hash Map)**:
    *   Sambil kita melewati setiap angka dalam array, kita menghitung "pasangan" yang dibutuhkan agar mencapai target: `complement = target - currentNum`.
    *   Kita simpan angka yang sudah kita lewati ke dalam `Map` sebagai *key*, dan indeksnya sebagai *value*.
    *   Jika `complement` sudah ada di dalam `Map`, artinya kita sudah menemukan pasangannya! Kita tinggal mengembalikan indeks pasangan tersebut dan indeks angka saat ini.

## Langkah-langkah

1.  Inisialisasi `const numMap = new Map();`.
2.  Iterasi array `nums`:
    *   Ambil angka saat ini: `currentNum`.
    *   Hitung `complement = target - currentNum`.
    *   Cek apakah `numMap` punya `complement`.
    *   Jika **YA**: Return `[numMap.get(complement), i]`.
    *   Jika **TIDAK**: Simpan angka saat ini ke Map: `numMap.set(currentNum, i)`.

## Kenapa Pakai `Map`?

Di JavaScript, `Map` memberikan performa pencarian (*lookup*) yang sangat cepat, yaitu rata-rata **O(1)**. Ini jauh lebih cepat daripada mencari angka di dalam array menggunakan `indexOf()` atau `includes()` yang memakan waktu **O(n)**.

## Kompleksitas

- **Time Complexity**: `O(n)` - Kita hanya melewati array satu kali.
- **Space Complexity**: `O(n)` - Kita menyimpan hingga `n` elemen di dalam Map.