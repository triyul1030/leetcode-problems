# Penjelasan

## Alur Berpikir

1. **Masalah**: Kita perlu mencari indeks elemen yang sama dengan `target` dan memiliki jarak minimum dari indeks `start`.
2. **Pendekatan Brute Force**: Menggunakan satu loop untuk memeriksa setiap elemen dan menghitung jaraknya.
3. **Pendekatan Optimal (Linear Search)**:
   - Iterasi melalui setiap elemen dalam array
   - Ketika menemukan elemen yang sama dengan `target`, hitung jarak absolut dari `start`
   - Simpan jarak minimum yang ditemukan
   - Lanjutkan iterasi untuk memastikan tidak ada jarak yang lebih kecil

## Langkah-langkah

1. Inisialisasi `let minDistance = Infinity;`.
2. Iterasi array `nums`:
   - Ambil elemen saat ini: `nums[i]`.
   - Jika `nums[i] === target`:
     - Hitung jarak: `const distance = Math.abs(i - start)`.
     - Jika `distance < minDistance`: Update `minDistance`.
3. Return `minDistance`.

## Kenapa Pakai Linear Search?

Di JavaScript, pendekatan linear search adalah yang paling efisien untuk masalah ini karena:
- Kita harus memeriksa setiap elemen untuk menemukan semua kemunculan `target`
- Tidak ada cara untuk menemukan jarak minimum tanpa memeriksa semua kemunculan target
- Pendekatan ini sudah optimal untuk masalah ini

## Kasus Uji

### Contoh 1
```javascript
const nums = [1, 2, 3, 4, 5];
const target = 5;
const start = 3;
console.log(getMinDistance(nums, target, start)); // Output: 1
```
**Penjelasan:** `nums[4] = 5` adalah satu-satunya nilai yang sama dengan target, jadi jawabannya adalah `abs(4 - 3) = 1`.

### Contoh 2
```javascript
const nums = [1];
const target = 1;
const start = 0;
console.log(getMinDistance(nums, target, start)); // Output: 0
```
**Penjelasan:** `nums[0] = 1` adalah satu-satunya nilai yang sama dengan target, jadi jawabannya adalah `abs(0 - 0) = 0`.

### Contoh 3
```javascript
const nums = [1,1,1,1,1,1,1,1,1,1];
const target = 1;
const start = 0;
console.log(getMinDistance(nums, target, start)); // Output: 0
```
**Penjelasan:** Setiap nilai dalam `nums` adalah `1`, tetapi `nums[0]` meminimalkan `abs(i - start)`, yaitu `abs(0 - 0) = 0`.

### Kasus Uji Tambahan
```javascript
const nums = [5, 3, 6, 1, 5];
const target = 5;
const start = 2;
console.log(getMinDistance(nums, target, start)); // Output: 1
```
**Penjelasan:** Target `5` muncul pada indeks 0 dan 3. Jaraknya adalah `abs(0-2) = 2` dan `abs(3-2) = 1`. Minimumnya adalah 1.