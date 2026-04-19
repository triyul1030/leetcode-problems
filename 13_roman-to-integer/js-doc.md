# Penjelasan

## Alur Berpikir

1. **Masalah**: Mengonversi sebuah string yang berisi angka Romawi menjadi bilangan bulat (integer).
2. **Hal penting yang perlu diperhatikan**:
   - Setiap simbol Romawi memiliki nilai tetap (`I=1, V=5, X=10, L=50, C=100, D=500, M=1000`).
   - Secara umum nilai dituliskan dari terbesar ke terkecil, namun jika sebuah simbol lebih kecil ditempatkan sebelum simbol yang lebih besar, nilainya dikurangkan.
3. **Pendekatan umum**:
   - Iterasi sepanjang string, tambahkan nilai simbol saat nilai selanjutnya tidak lebih besar.
   - Jika simbol berikutnya memiliki nilai lebih besar, kurangkan nilai simbol saat ini (ini menangani pasangan seperti `IV`, `IX`, `XL`, dll.).
4. **Pendekatan optimal**:
   - Gunakan peta nilai (object) untuk lookup O(1).
   - Lakukan satu pass dari kiri ke kanan, bandingkan nilai saat ini dengan nilai berikutnya untuk menentukan tambah atau kurang.

## Langkah-langkah

1. Buat mapping nilai untuk setiap simbol: `I, V, X, L, C, D, M`.
2. Inisialisasi `total = 0`.
3. Untuk setiap indeks `i` pada string `s`:
   - Ambil `curr = map[s[i]]` dan `next = map[s[i+1]]` (jika ada).
   - Jika `next` ada dan `next > curr`, lakukan `total -= curr`.
   - Kalau tidak, lakukan `total += curr`.
4. Setelah loop selesai, `total` berisi nilai integer dari numeral Romawi.

## Kenapa pakai pendekatan ini?

- Satu pass linear O(n) — efisien untuk panjang string hingga 15.
- Hanya membutuhkan space O(1) selain object mapping kecil.
- Menangani aturan subtractive (mis. `IV`, `IX`, `CM`) secara alami dengan membandingkan nilai selanjutnya.

## Kasus Uji

### Contoh 1
```javascript
const s1 = "III";
console.log(romanToInt(s1)); // Output: 3
```
**Penjelasan:** `III` = 1 + 1 + 1 = 3.

### Contoh 2
```javascript
const s2 = "LVIII";
console.log(romanToInt(s2)); // Output: 58
```
**Penjelasan:** `L = 50`, `V = 5`, `III = 3` → 50 + 5 + 3 = 58.

### Contoh 3
```javascript
const s3 = "MCMXCIV";
console.log(romanToInt(s3)); // Output: 1994
```
**Penjelasan:** `M = 1000`, `CM = 900`, `XC = 90`, `IV = 4` → 1000 + 900 + 90 + 4 = 1994.

### Kasus Uji Tambahan
```javascript
const s4 = "IV";
console.log(romanToInt(s4)); // Output: 4
```
**Penjelasan:** `IV` adalah kasus subtractive: 5 - 1 = 4.
