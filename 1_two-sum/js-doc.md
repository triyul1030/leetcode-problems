# Penjelasan

Solusi ini menggunakan pendekatan **Hash Map (Object/Map di JS)** untuk mencapai efisiensi waktu yang optimal.

## Alur Berpikir

1.  **Masalah**: Kita perlu mencari dua angka yang jika dijumlahkan hasilnya sama dengan `target`.
2.  **Pendekatan Brute Force**: Menggunakan dua loop (`nested loop`) untuk mengecek setiap pasangan.
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

Di JavaScript, `Map` memberikan performa pencarian (*lookup*) yang sangat cepat. Ini jauh lebih cepat daripada mencari angka di dalam array menggunakan `indexOf()` atau `includes()`.

## Kasus Uji

### Contoh 1
```javascript
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0,1]
```
**Penjelasan:** Karena `nums[0] + nums[1] == 9`, kita mengembalikan `[0, 1]`.

### Contoh 2
```javascript
const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target)); // Output: [1,2]
```
**Penjelasan:** `nums[1] + nums[2] == 6`, jadi jawabannya adalah `[1, 2]`.

### Contoh 3
```javascript
const nums = [3, 3];
const target = 6;
console.log(twoSum(nums, target)); // Output: [0,1]
```
**Penjelasan:** `nums[0] + nums[1] == 6`, jadi jawabannya adalah `[0, 1]`.

### Kasus Uji Tambahan
```javascript
const nums = [1, 5, 3, 7, 9];
const target = 12;
console.log(twoSum(nums, target)); // Output: [1,3]
```
**Penjelasan:** `nums[1] + nums[3] == 12` (5 + 7 = 12), jadi jawabannya adalah `[1, 3]`.