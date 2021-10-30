<?php include "koneksi.php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Barang</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/65cf78e06a.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
     <div class="container"></div>
        <table class="table table-hover">
            <p><?php echo "Selamat Datang User". $_SESSION['username']?>
            </p>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Kd Barang</th>
                    <th>Nama</th>
                    <th>Kode kategori</th>
                    <th>Deskripsi</th>
                    <th>Jumlah</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
        <?php
            $no =1;
            $query=mysqli_query($con,"select * from barang");
            while($data=mysqli_fetch_array($query)){
        ?>
    
            <tr>
            <td><?php echo $no  ?></td>
            <td><?php echo $data['kd_barang']  ?></td>
            <td><?php echo $data['nama']  ?></td>

            <?php $datakategori=mysqli_query($con, "SELECT * FROM kategori WHERE id_kategori='$data[id_kategori]'");
            $data2 = mysqli_fetch_array($datakategori);

            echo"<td>$data2[nama_kategori]</td>";
            ?>
            <td><?php echo $data['deskripsi']  ?></td>
            <td><?php echo $data['jumlah']  ?></td>
            <td>
            <a href='edit.php?kd_barang=<?php echo $data['kd_barang']; ?>'> 
            <button type='button' class='btn btn-primary'>Edit</button>
            </a>
            <a href='hapus.php?kd_barang=<?php echo $data['kd_barang'] ?>'> 
            <button type='button' class='btn btn-danger'>Hapus</button>
            </a>
            </td>
            </tr>
        <?php
            $no++;
        }
        ?>
            </tbody>
        </table>
    </div>
    <div class="footer">
            <p>Dibuat dengan <i class="fa fa-heart"></i> oleh vakbar</p>
     </div>
</body>
</body>
</html>