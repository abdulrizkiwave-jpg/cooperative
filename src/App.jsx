function App() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="brand">
          <span className="logoMark">BA</span>
          <div>
            <h3>Bhumi Atlas</h3>
            <p>Koperasi Hijau</p>
          </div>
        </div>

        <nav>
          <a href="#tentang">Tentang</a>
          <a href="#layanan">Layanan</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <span className="eyebrow">Koperasi Hijau Masa Depan</span>
          <h1>Membangun Ekonomi Rakyat Berbasis Keberlanjutan</h1>
          <p>
            Koperasi Hijau Bhumi Atlas hadir untuk menghubungkan masyarakat,
            UMKM, petani, dan pelaku usaha dengan ekosistem ekonomi hijau,
            sertifikasi karbon, pembiayaan hijau, dan green building.
          </p>

          <div className="heroButtons">
            <a className="btnPrimary" href="#kontak">Gabung Sekarang</a>
            <a className="btnSecondary" href="#layanan">Lihat Program</a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="glassCard">
            <h2>Green Cooperative</h2>
            <p>Karbon • Energi • Pertanian • Pembiayaan • Green Building</p>
          </div>
        </div>
      </section>

      <section id="tentang" className="section">
        <span className="sectionLabel">Tentang Kami</span>
        <h2>Koperasi untuk Transisi Hijau Indonesia</h2>
        <p>
          Bhumi Atlas dirancang sebagai koperasi modern yang membantu anggota
          mengembangkan usaha ramah lingkungan, meningkatkan nilai ekonomi
          komunitas, dan membuka akses terhadap peluang ekonomi karbon.
        </p>
      </section>

      <section id="layanan" className="section dark">
        <span className="sectionLabel">Layanan Utama</span>
        <h2>Ekosistem Bhumi Atlas</h2>

        <div className="cards">
          <div className="card">
            <h3>Sertifikasi Karbon</h3>
            <p>
              Agregasi proyek karbon masyarakat, UMKM, petani, dan komunitas
              agar lebih mudah masuk ke ekosistem ekonomi karbon.
            </p>
          </div>

          <div className="card">
            <h3>Pembiayaan Hijau</h3>
            <p>
              Skema pembiayaan untuk usaha berkelanjutan seperti energi bersih,
              pertanian hijau, pengelolaan limbah, dan bisnis ramah lingkungan.
            </p>
          </div>

          <div className="card">
            <h3>Green Building</h3>
            <p>
              Pengembangan kawasan, kantor, hotel, taman, dan fasilitas publik
              dengan konsep hemat energi dan rendah emisi.
            </p>
          </div>

          <div className="card">
            <h3>Green Entertainment</h3>
            <p>
              Kawasan hiburan modern yang tetap membawa konsep hijau, edukatif,
              estetis, dan memiliki nilai ekonomi tinggi.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="sectionLabel">Program Prioritas</span>
        <h2>Yang Akan Dibangun</h2>

        <div className="programGrid">
          <div>Agregasi proyek karbon komunal</div>
          <div>Pertanian dan perkebunan berkelanjutan</div>
          <div>Pembiayaan anggota berbasis usaha hijau</div>
          <div>Pelatihan UMKM hijau</div>
          <div>Green building dan kawasan produktif</div>
          <div>Marketplace produk hijau anggota</div>
        </div>
      </section>

      <section id="kontak" className="cta">
        <h2>Bergabung dengan Bhumi Atlas</h2>
        <p>
          Saatnya membangun koperasi modern yang menghasilkan keuntungan
          sekaligus menjaga bumi.
        </p>
        <a href="https://wa.me/6281234567890" className="btnWhite">
          Hubungi via WhatsApp
        </a>
      </section>

      <footer>
        <p>© 2026 Koperasi Hijau Bhumi Atlas. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
