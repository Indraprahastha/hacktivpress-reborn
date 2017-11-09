# hacktivpress-reborn

<p> Live Code Hacktivepress</p>

# REST API
<h3> Daftar Route Dasar </h3>
<p> Persiapan </p>

<h3> Daftar List User </h3>
<table>
  <tr>
    <th>Route</th>
    <th>HTTP</th>
    <th>Deskripsi</th>
  </tr>
  <tr>
    <td>/User</td>
    <td>POST</td>
    <td>Buat User Baru</td>
  </tr>
  <tr>
    <td>/User/login</td>
    <td>POST</td>
    <td>Login User</td>
  </tr>
</table>

<h3> Daftar List Artikel </h3>
<table>
<tr>
  <th>Route</th>
  <th>HTTP</th>
  <th>Deskripsi</th>
</tr>
<tr>
  <td>/artikel</td>
  <td>POST</td>
  <td>Membuat Artikel</td>
</tr>
<tr>
  <td>/artikel</td>
  <td>GET</td>
  <td>Cari semua artikel</td>
</tr>
<tr>
  <td>/artikel/:id</td>
  <td>GET</td>
  <td>Membaca satu artikel</td>
</tr>
<tr>
  <td>/artikel/:id</td>
  <td>PUT</td>
  <td>Update artikel</td>
</tr>
<tr>
  <td>/artikel/:id</td>
  <td>DELETE</td>
  <td>Delete satu artikel</td>
</tr>
</table>

# Penggunaan

git clone repository ini
npm install di client & server,
nodemon app.js di server,
npm run dev di client
