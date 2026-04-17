# Penjelasan

## Alur Berpikir

1. **Masalah**: Menentukan apakah sebuah bilangan bulat `x` merupakan palindrome, yaitu nilainya tetap sama saat dibaca dari kiri ke kanan maupun dari kanan ke kiri.
2. **Hal penting yang perlu diperhatikan**:
   - Bilangan negatif pasti **bukan palindrome** karena tanda `-` hanya ada di depan.
   - Bilangan yang berakhir dengan `0` juga **bukan palindrome**, kecuali angkanya memang `0`.
3. **Pendekatan umum**:
   - Cara paling mudah adalah mengubah angka menjadi string lalu membandingkan dari dua arah.
   - Tetapi pada problem ini ada follow-up: **usahakan tanpa mengubah integer menjadi string**.
4. **Pendekatan optimal**:
   - Balik **setengah bagian belakang** dari angka, bukan seluruh angkanya.
   - Setelah itu, bandingkan bagian depan dengan hasil reverse dari bagian belakang.
   - Ini lebih efisien karena loop berhenti saat setengah digit sudah diproses.

## Langkah-langkah

1. Jika `x < 0`, langsung return `false`.
2. Jika digit terakhir `x` adalah `0` dan `x !== 0`, return `false`.
3. Inisialisasi `let reverseHalf = 0;`.
4. Selama `x > reverseHalf`:
   - Ambil digit terakhir dengan `x % 10`
   - Tambahkan digit itu ke `reverseHalf`
   - Hapus digit terakhir dari `x` dengan `Math.floor(x / 10)`
5. Setelah loop selesai:
   - Jika jumlah digit genap, cek `x === reverseHalf`
   - Jika jumlah digit ganjil, buang digit tengah dari `reverseHalf` dengan `Math.floor(reverseHalf / 10)`, lalu cek apakah sama dengan `x`
6. Return hasil perbandingan tersebut.

## Kenapa Pakai Reverse Half?

- Tidak perlu mengubah angka menjadi string
- Tidak perlu membalik seluruh angka
- Lebih efisien karena hanya memproses **setengah digit**
- Tetap menggunakan **constant space O(1)**

Selain itu, pendekatan ini langsung menangani dua kondisi penting:
- angka negatif
- angka dengan trailing zero selain `0`

## Kasus Uji

### Contoh 1
```javascript
const x = 121;
console.log(isPalindrome(x)); // Output: true
```
**Penjelasan:** `121` dibaca dari kiri ke kanan maupun kanan ke kiri tetap sama.

### Contoh 2
```javascript
const x = -121;
console.log(isPalindrome(x)); // Output: false
```
**Penjelasan:** Dari kiri ke kanan nilainya `-121`, tetapi dari kanan ke kiri menjadi `121-`, jadi bukan palindrome.

### Contoh 3
```javascript
const x = 10;
console.log(isPalindrome(x)); // Output: false
```
**Penjelasan:** Jika dibalik menjadi `01`, sehingga nilainya tidak sama dengan bentuk awal.

### Kasus Uji Tambahan
```javascript
const x = 1221;
console.log(isPalindrome(x)); // Output: true
```
**Penjelasan:** Bagian depan `12` sama dengan reverse dari bagian belakang `21`, sehingga angka ini merupakan palindrome.
