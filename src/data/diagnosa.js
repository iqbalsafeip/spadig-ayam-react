const diagnosa = [
    {
        rule: ['G001', 'G002', 'G003', 'G004'],
        penyakit: 'TETELO (Newcastle disease)',
        deskripsi: `Penyakit tetelo memiliki nama latin Newcastle disease disebut juga pseudovogel
        pest rhaniket. Di Indonesia popular dengan sebutan tetelo. Penyakit ini pertama
        kali ditemukan oleh doyle pada tahun 1927, di daerah newcastle on tyne, inggris.
        Berikut adalah gejala yang muncul, diantaranya nafsu makan berkurang, nafas
        sesak, nafas ngorok, bersin-bersin, batuk, produksi telur menurun, tampak lesu,
        mencret kehijau-hijauan, sempoyongan, kepala terputar`,
        videos: ['4g4C2BJekMU', 'lwcVAcwjWIE', 'wx86i49wueM', 'xag1h_5QsIo', 'yFgdSgjx5Wg']
    },
    {
        rule: ['G005', 'G006', 'G007', 'G008'],
        penyakit: 'GUMBORO (Infectious Bursal Diase)',
        deskripsi: `Penyakit gumboro memiliki nama latin infectious Bursal disease. Pertama kali
        ditemukan dan dilaporkan pada tahun 1975 oleh Dr. Csgrove di daerah
        gumboro, deleware, amerika serikat. Berikut adalah gejala yang muncul,
        diantaranya nafsu makan berkurang, bulu kusam dan berkerut, tampak lesu,
        mencret keputih-putihan tidur paruhnya diletakkan dilantai, duduk dengan sikap
        membungkuk.`
    },
    {
        rule: ['G009', 'G006', 'G010', 'G011', 'G012', 'G013', 'G020'],
        penyakit: 'CACAR',
        deskripsi: ``
    },
    {
        rule: ['G014', 'G009', 'G015', 'G016', 'G017'],
        penyakit: 'BATUK DARAH (Infectious Laryngotracheitis)',
        deskripsi: `penyakit batuk darah memiliki nama latin infectious laryngotracheitis. Jenis
        penyakit ini ditemukan pada tahun 1925, dan secara resmi diakui oleh
        committee on Poultry disease of the American Veterinary Medical association,
        pada tahun 1931. Berikut adalah gejala yang muncul, diantaranya nafas sesak,
        nafas ngorok, bersin-bersin, batuk, mata berair, terdapat lendir bercampur darah
        pada rongga mulut.`
    },
    {
        rule: ['G016', 'G017', 'G018', 'G006', 'G023'],
        penyakit: 'BRONCHITIS (Infectious Bronchitis)',
        deskripsi: `Penyakit batuk menahun memiliki nama latin infectious bronchitis. Pertama kali
        ditemukan pada tahun 1930 dan penyakit ini mulai menjadi wabah sejak tahun
        1940. Pada tahun 1950 penyakit infectious bronchitis sudah dapat dikendalikan
        dengan efektif. Berikut gejala yang muncul, diantaranya nafsu makan berkurang,
        nafas ngorok, bersin-bersin, batuk, diare, produksi telur menurun, kelihatan
        ngantuk dan bulu berdiri, kedinginan, tampak lesu, tampak membiru.`
    },
    {
        rule: ['G019', 'G020', 'G022', 'G021'],
        penyakit: 'MAREK (Leukosis Akuta)',
        deskripsi: `Penyakit mareks memiliki nama latin mareks disease. Pada awalnya penyakit ini
        dimasukkan dalam kelompok leukosis complex disease, namun setelah
        ditemukan penyebabnya dan penanggulangannya, penyakit ini dipisahkan dari
        kelompok leukosis complex disease. Berikut adalah gejala yang muncul,
        diantaranya nafsu makan berkurang, nafas cepat, badan kurus, muka pucat,
        sempoyongan, kaki pincang, sayap menggantung.`
    },
    {
        rule: ['G023', 'G024', 'G018', 'G017'],
        penyakit: 'SNOT (Infectious Coryza)',
        deskripsi: `Penyakit salesma memiliki nama latin infectious coryza disebut juga infectious
        cold. Berikut adalah gejala yang muncul, diantaranya nafsu makan berkurang,
        bersin-bersin, diare, produksi telur menurun, kelopak mata kemerahan, keluar
        nanah dari mata dan bau, pembengkakan dari sinus dan mata.`
    },
    {
        rule: ['G026', 'G006', 'G017', 'G025', 'G020'],
        penyakit: 'KOLERA (Fowl Colera)',
        deskripsi: `Penyakit kolera ayam memiliki nama latin Fowl Cholera, merupakan penyakit
        ayam yang dapat menyerang secara pelan-pelan dan juga dapat menyerang
        secara mendadak, berikut adalah gejala yang muncul, diantaranya nafsu makan
        berkurang, nafas sesak, nafas ngorok, batuk, bulu kusam dan berkerut, diare,
        produksi telur menurun, kelihatan ngantuk dan bulu berdiri, tampak lesu,
        mencret kehijau-hijauan, banyak minum, jengger membengkak merah, kaki
        meradang, keluar cairan dari mata dan hidung.`
    },
    {
        rule: ['G009', 'G006', 'G011', 'G029'],
        penyakit: 'TYPUS (Fowl Thypoid)',
        deskripsi: `Penyakit tipus memiliki nama latin fowl typhoid, dikenal sebagai penyakit tipus
        ayam, tergolong penyait menular. Berikut gejala yang muncul, diantaranya nafsu
        makan berkurang, badan kurus, bulu kusam dan berkerut, diare, kelihatan
        ngantuk dan bulu berdiri, tampak lesu, mencret kehijau-hijauan, jengger pucat.`
    },
    {
        rule: ['G006', 'G027', 'G009', 'G028', 'G034'],
        penyakit: 'BERAK KAPUR (Pullorum Dissease)',
        deskripsi: `Penyakit berak kapur memiliki nama latin Pullorum disease disebut juga
        Bacillary White Diarrhea dan yang lebih popular disebut penyakit berak kapur
        atau berak putih. Berikut gejala yang muncul pada penyakit ini, diantaranya
        nafsu makan berkurang, nafas sesak, nafas cepat, badan kurus, bulu kusam dan
        berkerut, diare, produksi telur menurun, kedinginan, mencret keputih-putihan,
        kaki bengkak, terdapat kotoran putih menempel disekitar anus.`
    },
    {
        rule: ['G031', 'G008', 'G032', 'G030'],
        penyakit: 'BERAK KUNING (Granuloma Koli)',
        deskripsi: ``
    },
    {
        rule: ['G012', 'G018', 'G006', 'G010'],
        penyakit: 'Chronis Respirator Dissease (CRD)',
        deskripsi: ``
    },
    {
        rule: ['G031', 'G009', 'G006', 'G012'],
        penyakit: 'WORM DISSEASE',
        deskripsi: ``
    },
    {
        rule: ['G009', 'G034' ,'G008'],
        penyakit: 'BERAK DARAH',
        deskripsi: `Penyakit berak darah memiliki nama latin coccidosis, merupakan penyakit
        menular yang ganas, dikalanagan peternak ayam disebut juga penyakit berak
        darah. Penyakit ini ditemukan pad tahun 1674. Berikut adalah gejala yang
        muncul, diantaranya nafsu makan berkurang, badan kurus, bulu kusam dan
        berkerut, produksi telur menurun, mencret bercampur darah, muka pucat.`
    },
    {
        rule: ['G006', 'G035', 'G034', 'G019', 'G036'],
        penyakit: 'LEUKOZITOZOONOSIS'
    },
    {
        rule: ['G039' ,'G021'],
        penyakit: 'BUTA MATA'
    },
    {
        rule: ['G018', 'G040', 'G0421'],
        penyakit: 'SYNOVITIS'
    },
    {
        rule: ['G018', 'G009', 'G042'],
        penyakit: 'FLU BURUNG (H5N1)',
        deskripsi: `Penyakit flu burung memiliki nama latin Avian Influenza, disebut juga penyakit
        fowl plaque. Pertama kali terjadi di italia sekitar tahun 1800. Selanjutnya
        menyebar luas sampai tahun 1930, setelah itu menjadi sporadis dan terlokalisasi
        terutama di timur tengah. Berikut gejala yang muncul, diantaranya nafsu makan
        berkurang, nafas sesak, nafas ngorok, bersin- bersin, batuk, diare, produksi telur
        menurun, Nampak membiru, keluar cairan berbusa dari mata, kepala bengkak,
        mati secara mendadak.`
    },
    {
        rule: ['G09', 'G006', 'G043'],
        penyakit: 'ASPERGILLOSIS'
    },
]

export default diagnosa