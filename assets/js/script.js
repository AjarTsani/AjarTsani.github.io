var data = [
  {
    nama: 'Barang',
    jumlah: 'Jumlah',
    total: 0,
  },
];

function showBarang() {
  var listBarang = document.getElementById('tabel');

  listBarang.innerHTML = '<tr><th>Barang</th><th>Jumlah</th><th>Total</th><th>Action</th></tr>';

  for (let i = 0; i < data.length; i++) {
    if (i !== 0) {
      var btnEdit = "<a href='#' class='btn-edit' onclick='editBarang(" + i + ")'>Edit</a>";
      var btnHapus = "<a href='#' class='btn-hapus' onclick='deleteBarang(" + i + ")'>Hapus</a>";
      listBarang.innerHTML += '<tr><td>' + data[i].nama_Barang + '</td><td>' + data[i].jumlah + '</td><td>' + data[i].total + '</td><td>' + btnEdit + ' ' + btnHapus + '</td></tr>';
    } else {
    }
  }

  const sum = data.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const totalBayar = document.getElementById('total_bayar');
  totalBayar.innerHTML = sum;
}

function addBarang() {
  var jenisBarang = document.getElementById('jenis_barang').value;
  var jumlah = document.getElementById('jumlah').value;

  const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
  data.push(newDataBarang);
  showBarang();
}

function editBarang(id) {
  var newjumlah = prompt('Edit jumlah', data[id].jumlah);
  const detailjenisBarang = data[id].nama_Barang;

  const newDataBarang = cekTotalHarga(detailjenisBarang, newjumlah || data[id].jumlah);

  data[id] = newDataBarang;
  showBarang();
}

function deleteBarang(id) {
  data.splice(id, 1);
  showBarang();
}
function Beli() {
  if (data.length === 1) {
    alert('Tidak ada barang dalam list, silahkan isi dulu.');
  } else {
    data = [
      {
        nama_barang: 'Barang',
        jumlah: 'Hari',
        total: 0,
      },
    ];
    alert('Pembelian Anda Berhasil!');
    showBarang();
  }
}

function cekTotalHarga(jenisBarang, jumlah) {
  if (jenisBarang == 'coca-cola' && jumlah > 5) {
    const total = jumlah * 100000;
    const totalFinal = total - 100000;

    return {
      nama_Barang: jenisBarang,
      jumlah: jumlah,
      total: totalFinal,
    };
  } else if (jenisBarang == 'coca-cola' && jumlah <= 5) {
    const total = jumlah * 100000;
    return {
      nama_Barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == 'indomie' && jumlah > 5) {
    const total = jumlah * 100000;
    const totalFinal = total - 100000;

    return {
      nama_Barang: jenisBarang,
      jumlah: jumlah,
      total: totalFinal,
    };
  } else if (jenisBarang == 'indomie' && jumlah <= 5) {
    const total = jumlah * 100000;
    return {
      nama_Barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == 'minola' && jumlah > 5) {
    const total = jumlah * 25000;
    const totalFinal = total - 25000;

    return {
      nama_Barang: jenisBarang,
      jumlah: jumlah,
      total: totalFinal,
    };
  } else if (jenisBarang == 'minola' && jumlah <= 5) {
    const total = jumlah * 25000;
    return {
      nama_Barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == 'taro' && jumlah > 5) {
    const total = jumlah * 80000;
    const totalFinal = total - 80000;

    return {
      nama_Barang: jenisBarang,
      jumlah: jumlah,
      total: totalFinal,
    };
  } else if (jenisBarang == 'taro' && jumlah <= 5) {
    const total = jumlah * 80000;
    return {
      nama_Barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == 'bengbeng' && jumlah > 5) {
    const total = jumlah * 3000000;
    const totalFinal = total - 300000;

    return {
      nama_Barang: jenisBarang,
      jumlah: jumlah,
      total: totalFinal,
    };
  } else if (jenisBarang == 'bengbeng' && jumlah <= 5) {
    const total = jumlah * 30000;
    return {
      nama_Barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }
}
showBarang();
