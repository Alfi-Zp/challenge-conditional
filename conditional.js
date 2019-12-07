// No.1 if-else 
/* Petunjuk : Kita akan memasuki dunia game werewolf. Pada saat akan bermain kamu diminta memasukkan nama dan peran .  Untuk memulai game pemain harus memasukkan variable nama dan  peran. Jika pemain tidak memasukkan nama maka game akan mengeluarkan warning "Nama harus diisi!". Jika pemain memasukkan nama tapi tidak memasukkan peran maka game akan mengeluarkan warning "Pilih Peranmu untuk memulai game".  Terdapat tiga peran yaitu penyihir, guard, dan werewolf. Tugas kamu adalah membuat program untuk mengecek input dari pemain dan hasil response dari game sesuai input yang dikirimkan. */

// Output
// // Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

// //Output untuk Input nama = 'John' dan peran = ''
// "Halo John, Pilih peranmu untuk memulai game!"

// //Output untuk Input nama = 'Jane' dan peran 'Penyihir'
// "Selamat datang di Dunia Werewolf, Jane"
// "Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!"

// //Output untuk Input nama = 'Jenita' dan peran 'Guard'
// "Selamat datang di Dunia Werewolf, Jenita"
// "Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf."

// //Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'
// "Selamat datang di Dunia Werewolf, Junaedi"
// "Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!"
// ------------------------------------
// |Hints:                              |
// |Nama dan peran diisi manual dan bisa|
// |diisi apa saja                      |
// |Nama tidak perlu dicek persis sesuai|
// |dengan input/output                 |
// |Buat kondisi if-else untuk          |
// |masing-masing peran                 |

var nama = "Alfi"
var peran = "Guard"

if ( nama == "Alfi" && peran == "" ) {
    console.log("hallo alfi, Pilih Peran mu untuk memulai game!")
    }else if(nama == "Alfi" && peran == "Penyihir") {
        console.log("Selamat Datang di Dunia Werewolf, Alfi")
        console.log("hallo Penyihir Alfi, Kamu dapat melihat siapa yang menjadi werewolf")
    } else if( nama == "Alfi" && peran == "Guard" ) {
        console.log("Selamat Datang di Dunia Werewolf, Alfi")
        console.log("Halo Guard Alfi, Kamu akan membantu melindungi temanmu dari serangan Werewolf")
    } else if ( nama == "Alfi" && peran == "Werewolf") {
        console.log("Selamat Datang di Dunia Werewolf, Alfi")
        console.log("Hallo Werewolf Alfi, Kamu akan memakan mangsa setiap malam") 
    } else{
    console.log("Nama harus diisi!")
}

// ------------------------------------------------------
// No.2 Switchcase
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
// Gunakan switch case untuk kasus ini!
// Contoh:
// var hari = 21; var bulan = 1; var tahun = 1945;
// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

// cara No.1

var tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 10; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1992; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch(tanggal && bulan){
	case 1 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 2 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 3 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 4 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 5 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 6 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 7 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 8 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 9 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 10 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 11 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 12 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 13 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 14 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 15 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 16 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 17 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 18 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 19 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 20 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 21 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 22 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 23 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 24 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 25 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 26 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 27 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 28 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 29 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 30 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 31 && 1: {console.log(tanggal + "Januari" + tahun);break; }
	case 1 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 2 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 3 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 4 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 5 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 6 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 7 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 8 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 9 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 10 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 11 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 12 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 13 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 14 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 15 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 16 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 17 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 18 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 19 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 20 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 21 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 22 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 23 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 24 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 25 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 26 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 27 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 28 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 29 && 2: {console.log(tanggal + " Febuari " + tahun); break; }
    case 1 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 2 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 3 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 4 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 5 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 6 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 7 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 8 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 9 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 10 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 11 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 12 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 13 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 14 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 15 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 16 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 17 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 18 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 19 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 20 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 21 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 22 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 23 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 24 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 25 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 26 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 27 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 28 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 29 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 30 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 31 && 3: {console.log(tanggal + " Maret " + tahun); break; }
    case 1 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 2 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 3 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 4 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 5 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 6 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 7 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 8 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 9 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 10 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 11 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 12 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 13 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 14 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 15 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 16 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 17 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 18 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 19 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 20 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 21 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 22 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 23 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 24 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 25 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 26 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 27 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 28 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 29 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 30 && 4: {console.log(tanggal + " April " + tahun); break; }
    case 1 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 2 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 3 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 4 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 5 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 6 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 7 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 8 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 9 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 10 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 11 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 12 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 13 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 14 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 15 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 16 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 17 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 18 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 19 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 20 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 21 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 22 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 23 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 24 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 25 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 26 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 27 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 28 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 29 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 30 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 31 && 5: {console.log(tanggal + " Mei " + tahun); break; }
    case 1 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 2 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 3 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 4 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 5 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 6 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 7 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 8 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 9 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 10 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 11 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 12 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 13 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 14 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 15 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 16 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 17 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 18 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 19 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 20 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 21 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 22 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 23 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 24 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 25 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 26 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 27 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 28 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 29 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 30 && 6: {console.log(tanggal + " Juni " + tahun); break; }
    case 1 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 2 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 3 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 4 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 5 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 6 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 7 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 8 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 9 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 10 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 11 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 12 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 13 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 14 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 15 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 16 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 17 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 18 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 19 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 20 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 21 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 22 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 23 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 24 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 25 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 26 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 27 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 28 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 29 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 30 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 31 && 7: {console.log(tanggal + " Juli " + tahun); break; }
    case 1 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 2 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 3 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 4 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 5 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 6 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 7 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 8 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 9 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 10 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 11 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 12 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 13 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 14 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 15 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 16 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 17 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 18 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 19 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 20 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 21 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 22 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 23 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 24 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 25 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 26 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 27 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 28 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 29 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 30 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 31 && 8: {console.log(tanggal + " Agustus " + tahun); break; }
    case 1 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 2 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 3 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 4 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 5 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 6 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 7 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 8 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 9 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 10 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 11 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 12 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 13 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 14 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 15 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 16 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 17 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 18 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 19 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 20 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 21 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 22 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 23 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 24 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 25 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 26 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 27 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 28 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 29 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 30 && 9: {console.log(tanggal + " September " + tahun); break; }
    case 1 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 2 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 3 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 4 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 5 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 6 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 7 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 8 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 9 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 10 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 11 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 12 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 13 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 14 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 15 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 16 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 17 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 18 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 19 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 20 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 21 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 22 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 23 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 24 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 25 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 26 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 27 && 10: {console.log(tanggal + " Okteber " + tahun); break; }
    case 28 && 10:{console.log(tanggal + " Okteber " + tahun); break; }
    case 29 && 10:{console.log(tanggal + " Okteber " + tahun); break; }
    case 30 && 10:{console.log(tanggal + " Okteber " + tahun); break; }
    case 31 && 10:{console.log(tanggal + " Okteber " + tahun); break; }
    case 1 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 2 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 3 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 4 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 5 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 6 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 7 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 8 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 9 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 10 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 11 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 12 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 13 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 14 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 15 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 16 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 17 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 18 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 19 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 20 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 21 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 22 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 23 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 24 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 25 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 26 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 27 && 11: {console.log(tanggal + " November " + tahun); break; }
    case 28 && 11:{console.log(tanggal + " November " + tahun); break; }
    case 29 && 11:{console.log(tanggal + " November " + tahun); break; }
    case 30 && 11:{console.log(tanggal + " November " + tahun); break; }
    case 1 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 2 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 3 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 4 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 5 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 6 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 7 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 8 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 9 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 10 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 11 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 12 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 13 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 14 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 15 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 16 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 17 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 18 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 19 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 20 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 21 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 22 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 23 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 24 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 25 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 26 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 27 && 12: {console.log(tanggal + " Desember " + tahun); break; }
    case 28 && 12:{console.log(tanggal + " Desember " + tahun); break; }
    case 29 && 12:{console.log(tanggal + " Desember " + tahun); break; }
    case 30 && 12:{console.log(tanggal + " Desember " + tahun); break; }
    case 31 && 12:{console.log(tanggal + " Desember " + tahun); break; }
    default: (console.log("-"))
}

// cara no.2 alternatif
var tanggal = 31; // assign nilai variabel tanggal disini! 
var bulan = 10; // assign nilai variabel bulan disini! 
var tahun = 1992; // assign nilai variabel tahun disini! 

switch(bulan) {
  case 1: { console.log(tanggal + ' Januari ' + tahun); break; }
  case 2: { console.log(tanggal + ' Februari ' + tahun); break; }
  case 3: { console.log(tanggal + ' Maret ' + tahun); break; }
  case 4: { console.log(tanggal + ' April ' + tahun); break; }
  case 5: { console.log(tanggal + ' Mei ' + tahun); break; }
  case 6: { console.log(tanggal + ' Juni ' + tahun); break; }  
  case 7: { console.log(tanggal + ' Juli ' + tahun); break; }
  case 8: { console.log(tanggal + ' Agustus ' + tahun); break; }
  case 9: { console.log(tanggal + ' September ' + tahun); break; }
  case 10: { console.log(tanggal + ' Oktober ' + tahun); break; }
  case 11: { console.log(tanggal + ' November ' + tahun); break; }
  case 12: { console.log(tanggal + ' Desember ' + tahun); break; }
  default : { console.log('Bulan tidak tersedia'); }
}