// page.tsx - Updated dengan animasi dan konten lebih banyak
'use client';

import { useState, useEffect } from 'react';

// Interface untuk data
interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
}

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  imageUrl: string;
  cookingTime: string;
  difficulty: string;
  servings: string;
}

export default function Home() {
  // State untuk navigasi
  const [currentPage, setCurrentPage] = useState<'home' | 'resep' | 'artikel' | 'tentang' | 'detail-resep' | 'detail-artikel'>('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [email, setEmail] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fungsi navigasi dengan animasi
  const navigateWithTransition = (page: typeof currentPage) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 150);
  };

  const goToHome = () => navigateWithTransition('home');
  const goToResep = () => navigateWithTransition('resep');
  const goToArtikel = () => navigateWithTransition('artikel');
  const goToTentang = () => navigateWithTransition('tentang');
  
  const openRecipeDetail = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    navigateWithTransition('detail-resep');
  };

  const openArticleDetail = (article: Article) => {
    setSelectedArticle(article);
    navigateWithTransition('detail-artikel');
  };

  const goBack = () => {
    if (currentPage === 'detail-resep' || currentPage === 'detail-artikel') {
      navigateWithTransition(currentPage === 'detail-resep' ? 'resep' : 'artikel');
    } else {
      navigateWithTransition('home');
    }
  };

  // Data artikel diperbanyak dengan fokus sejarah dan asal-usul
  const articles: Article[] = [
    { 
      id: 1, 
      title: "Sejarah Nasi Goreng: Dari Tiongkok Hingga Jadi Primadona Indonesia", 
      excerpt: "Mengungkap perjalanan panjang nasi goreng dari masakan sederhana menjadi ikon kuliner Indonesia.", 
      content: `
        <h2>Asal Usul Nasi Goreng</h2>
        <p>Nasi goreng memiliki akar sejarah yang dalam dari Tiongkok sekitar 4000 tahun yang lalu. Konon, tradisi menggoreng nasi muncul dari kebiasaan menghangatkan nasi yang sudah dingin agar bisa dikonsumsi kembali.</p>
        
        <h2>Masuk ke Indonesia</h2>
        <p>Nasi goreng mulai masuk ke Indonesia melalui para pedagang dan imigran Tiongkok pada abad ke-10. Awalnya, nasi goreng di Indonesia masih sangat sederhana, hanya berupa nasi yang digoreng dengan bawang putih, kecap, dan sedikit bumbu.</p>
        
        <h2>Evolusi Rasa Khas Indonesia</h2>
        <p>Seiring waktu, masyarakat Indonesia mulai mengembangkan nasi goreng dengan bumbu-bumbu lokal seperti terasi, cabai, daun salam, dan lengkuas. Inovasi-inovasi seperti nasi goreng spesial dengan tambahan telur, ayam, dan seafood membuat nasi goreng semakin populer.</p>
        
        <h2>Fakta Menarik</h2>
        <p>Pada tahun 2011, CNN Travel menobatkan nasi goreng sebagai makanan nomor 2 terenak di dunia. Nasi goreng juga menjadi menu wajib di hampir semua warung makan dan restoran Indonesia.</p>
      `,
      date: "25 Sept 2025", 
      category: "Sejarah Kuliner", 
      imageUrl: '/images/nasi-goreng.jpg'
    },
    { 
      id: 2, 
      title: "Rendang: Warisan Kuliner Minang yang Mendunia", 
      excerpt: "Kisah rendang yang tidak hanya lezat tetapi juga penuh filosofi kehidupan masyarakat Minangkabau.", 
      content: `
        <h2>Asal Usul Rendang</h2>
        <p>Rendang berasal dari Minangkabau, Sumatera Barat, dan telah ada sejak abad ke-16. Awalnya, rendang dibuat sebagai bekal para perantau Minang yang membutuhkan makanan tahan lama.</p>
        
        <h2>Filosofi dalam Rendang</h2>
        <p>Rendang mengandung filosofi kehidupan masyarakat Minang. Empat bahan pokok rendang melambangkan keutuhan masyarakat Minang: daging (pemimpin), kelapa (cendekiawan), cabai (ulama), dan bumbu (masyarakat).</p>
        
        <h2>Pengakuan Internasional</h2>
        <p>Pada tahun 2011, rendang dinobatkan sebagai makanan terenak nomor 1 di dunia oleh CNN Travel. Pada tahun 2018, rendang resmi ditetapkan sebagai Warisan Budaya Tak Benda Indonesia oleh UNESCO.</p>
        
        <h2>Varian Rendang</h2>
        <p>Selain rendang daging, terdapat berbagai varian seperti rendang ayam, rendang hati, rendang telur, dan rendang jengkol. Setiap daerah di Minangkabau memiliki ciri khas rendang yang berbeda-beda.</p>
      `,
      date: "24 Sept 2025", 
      category: "Warisan Budaya", 
      imageUrl: '/images/rendang.jpg'
    },
    { 
      id: 3, 
      title: "Gudeg: Kisah Manis dari Yogyakarta", 
      excerpt: "Mengenal lebih dalam gudeg, makanan tradisional Yogyakarta yang telah berusia ratusan tahun.", 
      content: `
        <h2>Sejarah Gudeg</h2>
        <p>Gudeg telah ada sejak abad ke-16 bersamaan dengan berdirinya Kerajaan Mataram di Kotagede. Awalnya, gudeg dimasak oleh para prajurit kerajaan yang memanfaatkan nangka muda dan kelapa yang melimpah.</p>
        
        <h2>Proses Pembuatan Tradisional</h2>
        <p>Gudeg tradisional dimasak dalam kuali besar dari tanah liat selama 6-8 jam dengan kayu bakar. Proses memasak yang lama ini menghasilkan cita rasa yang khas dan warna coklat alami dari daun jati.</p>
        
        <h2>Makna Filosofis</h2>
        <p>Gudeg melambangkan kesabaran dan ketekunan masyarakat Jawa. Proses memasak yang lama mencerminkan nilai-nilai kesabaran, sementara rasa manis gudeg melambangkan harapan kehidupan yang manis.</p>
        
        <h2>Jenis-jenis Gudeg</h2>
        <p>Ada beberapa jenis gudeg seperti gudeg kering (lebih manis dan sedikit kuah), gudeg basah (lebih berkuah), dan gudeg solo (berwarna lebih pucat). Setiap jenis memiliki penggemarnya masing-masing.</p>
      `,
      date: "23 Sept 2025", 
      category: "Kuliner Jawa", 
      imageUrl: '/images/gudeg.jpg'
    },
    { 
      id: 4, 
      title: "Sate: Jejak Kuliner yang Menyebar ke Seluruh Nusantara", 
      excerpt: "Menelusuri perjalanan sate dari makanan jalanan sederhana menjadi ikon kuliner Indonesia.", 
      content: `
        <h2>Asal Usul Sate</h2>
        <p>Sate diperkirakan berasal dari Jawa pada abad ke-19, terinspirasi dari kebiasaan memanggang daging yang dibawa oleh pedagang India dan Arab. Kata "sate" sendiri diduga berasal dari bahasa Tamil "catai" yang berarti daging.</p>
        
        <h2>Penyebaran Sate</h2>
        <p>Dari Jawa, sate menyebar ke seluruh Nusantara dan berkembang dengan ciri khas masing-masing daerah. Sate Madura terkenal dengan bumbu kacangnya, sate Padang dengan kuah kuningnya, dan sate Lilit khas Bali.</p>
        
        <h2>Inovasi dan Variasi</h2>
        <p>Ada lebih dari 20 jenis sate di Indonesia, mulai dari sate ayam, sate kambing, sate kelinci, hingga sate kerang. Setiap daerah memiliki cara penyajian dan bumbu yang unik.</p>
        
        <h2>Sate di Panggung Dunia</h2>
        <p>Sate telah menjadi makanan Indonesia yang paling dikenal di dunia. Banyak restoran Indonesia di luar negeri yang menjadikan sate sebagai menu andalan mereka.</p>
      `,
      date: "22 Sept 2025", 
      category: "Kuliner Nusantara", 
      imageUrl: '/images/sate.jpg'
    }
  ];

  // Data resep diperbanyak
  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Nasi Goreng Spesial",
      description: "Nasi goreng dengan citarasa autentik Indonesia yang mudah dibuat di rumah",
      ingredients: [
        "2 piring nasi putih (lebih baik nasi semalam)",
        "2 butir telur",
        "3 siung bawang putih, cincang halus",
        "5 siung bawang merah, iris tipis",
        "2 sdm kecap manis",
        "1 sdm kecap asin",
        "1 sdt garam",
        "1/2 sdt merica",
        "2 sdm minyak goreng",
        "100 gram ayam suwir (opsional)",
        "50 gram udang kupas (opsional)",
        "2 batang daun bawang, iris halus",
        "1 buah tomat, potong dadu",
        "Kerupuk untuk pelengkap"
      ],
      steps: [
        "Panaskan minyak dalam wajan dengan api sedang",
        "Tumis bawang putih dan bawang merah hingga harum dan kekuningan",
        "Masukkan telur, orak-arik hingga matang sempurna",
        "Tambahkan ayam suwir dan udang, tumis hingga berubah warna",
        "Masukkan nasi putih, aduk rata dengan semua bahan",
        "Bumbui dengan kecap manis, kecap asin, garam, dan merica",
        "Aduk terus selama 5-7 menit hingga semua bumbu tercampur rata",
        "Masukkan daun bawang dan tomat, aduk sebentar",
        "Koreksi rasa, angkat dan sajikan hangat dengan kerupuk"
      ],
      imageUrl: '/images/nasi-goreng.jpg',
      cookingTime: "20 menit",
      difficulty: "Mudah",
      servings: "2-3 porsi"
    },
    {
      id: 2,
      title: "Rendang Daging Sapi",
      description: "Rendang daging sapi empuk dengan bumbu rempah yang meresap sempurna",
      ingredients: [
        "1 kg daging sapi, potong kotak",
        "1 liter santan kental dari 3 butir kelapa",
        "5 lembar daun jeruk",
        "2 batang serai, memarkan",
        "3 cm lengkuas, memarkan",
        "2 sdm gula merah serut",
        "1 sdt garam",
        "Bumbu halus:",
        "10 siung bawang merah",
        "5 siung bawang putih",
        "5 buah cabai merah besar",
        "10 buah cabai rawit (sesuai selera)",
        "3 butir kemiri",
        "1 sdt ketumbar",
        "1/2 sdt jinten",
        "1 cm kunyit"
      ],
      steps: [
        "Tumis bumbu halus bersama daun jeruk, serai, dan lengkuas hingga harum dan matang",
        "Masukkan daging sapi, aduk hingga berubah warna dan terbalut bumbu",
        "Tuangkan santan sedikit demi sedikit sambil terus diaduk",
        "Tambahkan gula merah dan garam, aduk rata",
        "Masak dengan api kecil sambil sesekali diaduk selama 2-3 jam",
        "Saat santan mulai menyusut, aduk lebih sering agar tidak gosong",
        "Masak hingga daging empuk dan bumbu mengering meresap",
        "Angkat dan sajikan hangat dengan nasi putih"
      ],
      imageUrl: '/images/rendang.jpg',
      cookingTime: "3 jam",
      difficulty: "Sulit",
      servings: "6-8 porsi"
    },
    {
      id: 3,
      title: "Sate Ayam Madura",
      description: "Sate ayam dengan bumbu kacang khas Madura yang legit dan gurih",
      ingredients: [
        "500 gram daging ayam fillet, potong dadu",
        "Tusuk sate secukupnya",
        "Bumbu marinasi:",
        "3 siung bawang putih, haluskan",
        "1 sdt ketumbar",
        "1 sdm gula merah",
        "1 sdt garam",
        "2 sdm kecap manis",
        "Bumbu kacang:",
        "200 gram kacang tanah goreng",
        "5 siung bawang putih",
        "5 buah cabai merah",
        "3 sdm kecap manis",
        "1 sdt garam",
        "200 ml air",
        "2 sdm gula merah"
      ],
      steps: [
        "Lumuri daging ayam dengan bumbu marinasi, diamkan 30 menit",
        "Tusuk daging ayam dengan tusuk sate, masing-masing 3-4 potong",
        "Panggang sate di atas bara api hingga matang sambil dibolak-balik",
        "Untuk bumbu kacang: haluskan kacang, bawang putih, dan cabai",
        "Tumis bumbu halus hingga harum, tambahkan air dan bumbu lainnya",
        "Masak hingga mengental, koreksi rasa",
        "Sajikan sate dengan bumbu kacang, lontong, dan irisan bawang merah"
      ],
      imageUrl: '/images/sate.jpg',
      cookingTime: "45 menit",
      difficulty: "Sedang",
      servings: "4 porsi"
    },
    {
      id: 4,
      title: "Gado-gado Jakarta",
      description: "Salad khas Indonesia dengan sayuran segar dan bumbu kacang yang nikmat",
      ingredients: [
        "100 gram kangkung, rebus",
        "100 gram tauge, rebus sebentar",
        "2 buah kentang, rebus potong dadu",
        "2 buah telur rebus, belah dua",
        "100 gram kol, iris rebus",
        "100 gram buncis, rebus",
        "2 buah tahu, goreng potong",
        "2 buah tempe, goreng potong",
        "Kerupuk untuk pelengkap",
        "Bumbu kacang:",
        "150 gram kacang tanah goreng",
        "3 siung bawang putih",
        "5 buah cabai rawit",
        "2 sdm gula merah",
        "1 sdt garam",
        "2 sdm kecap manis",
        "300 ml air",
        "1 sdm air jeruk limau"
      ],
      steps: [
        "Tata semua sayuran yang sudah direbus dalam piring",
        "Tambahkan tahu, tempe, dan telur rebus",
        "Untuk bumbu kacang: haluskan kacang, bawang putih, dan cabai",
        "Tumis bumbu halus hingga harum, tambahkan air sedikit demi sedikit",
        "Masak hingga mendidih, tambahkan gula, garam, dan kecap",
        "Terakhir tambahkan air jeruk limau, aduk rata",
        "Siram bumbu kacang di atas sayuran",
        "Sajikan dengan kerupuk"
      ],
      imageUrl: '/images/gado-gado.jpg',
      cookingTime: "30 menit",
      difficulty: "Mudah",
      servings: "3-4 porsi"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Terima kasih! Email ${email} telah berhasil didaftarkan.`);
      setEmail('');
    }
  };

  // Render header
  const renderHeader = () => (
    <header className="header">
      <div className="container header-content">
        <div className="logo" onClick={goToHome} style={{cursor: 'pointer'}}>
          Resep Nusantara
        </div>
        
        <nav className="nav" aria-label="Main navigation">
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); goToHome(); }}>Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); goToResep(); }}>Resep</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); goToArtikel(); }}>Artikel</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); goToTentang(); }}>Tentang Kami</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );

  // Render footer
  const renderFooter = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Resep Nusantara</h3>
            <p>Portal berita dan resep masakan Indonesia terlengkap.</p>
          </div>
          <div className="footer-section">
            <h3>Kategori</h3>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); goToResep(); }}>Resep Masakan</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); goToArtikel(); }}>Sejarah Kuliner</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); goToArtikel(); }}>Warisan Budaya</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Kontak Kami</h3>
            <p>Email: info@resepnusantara.com</p>
            <p>Telepon: (021) 1234-5678</p>
            <p>Alamat: Jakarta, Indonesia</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Resep Nusantara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  // Render breadcrumb/back button
  const renderBreadcrumb = () => (
    <div className="container">
      <button 
        onClick={goBack}
        className="back-button"
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--primary-color)',
          cursor: 'pointer',
          fontSize: '1rem',
          margin: '1rem 0',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        ← Kembali
      </button>
    </div>
  );

  // Render Home Page
  const renderHomePage = () => (
    <>
      <section className="hero">
        <div className="container">
          <h1>Selamat Datang di Portal Berita Resep Masakan Indonesia</h1>
          <p>Temukan berita terbaru, resep autentik, dan cerita menarik seputar kuliner nusantara.</p>
        </div>
      </section>
      
      <section className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
          Artikel Terbaru
        </h2>
        
        <div className="articles-grid">
          {articles.slice(0, 3).map(article => (
            <article key={article.id} className="article-card">
              <div className="article-image" style={{backgroundImage: `url(${article.imageUrl})`}}/>
              <div className="article-content">
                <span className="article-category">{article.category}</span>
                <h2>{article.title}</h2>
                <p className="article-meta">{article.date}</p>
                <p className="article-excerpt">{article.excerpt}</p>
                <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); openArticleDetail(article); }}>
                  Baca selengkapnya →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      <section className="recipe-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
            Resep Populer
          </h2>
          
          <div className="recipe-grid">
            {recipes.slice(0, 2).map(recipe => (
              <div key={recipe.id} className="recipe-card">
                <div className="recipe-image" style={{backgroundImage: `url(${recipe.imageUrl})`}}/>
                <div className="recipe-content">
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                  <p><strong>Waktu:</strong> {recipe.cookingTime}</p>
                  <p><strong>Tingkat Kesulitan:</strong> {recipe.difficulty}</p>
                  <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); openRecipeDetail(recipe); }}>
                    Lihat Resep Lengkap →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  // Render Resep Page
  const renderResepPage = () => (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-color)' }}>
        Resep Masakan Indonesia
      </h1>
      
      <div className="recipe-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image" style={{backgroundImage: `url(${recipe.imageUrl})`}}/>
            <div className="recipe-content">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem'}}>
                <span style={{background: '#f0f0f0', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem'}}>
                  ⏱️ {recipe.cookingTime}
                </span>
                <span style={{background: '#f0f0f0', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem'}}>
                  🍽️ {recipe.servings}
                </span>
              </div>
              <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); openRecipeDetail(recipe); }}>
                Lihat Resep Lengkap →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render Artikel Page
  const renderArtikelPage = () => (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-color)' }}>
        Artikel Kuliner Indonesia
      </h1>
      
      <div className="articles-grid">
        {articles.map(article => (
          <article key={article.id} className="article-card">
            <div className="article-image" style={{backgroundImage: `url(${article.imageUrl})`}}/>
            <div className="article-content">
              <span className="article-category">{article.category}</span>
              <h2>{article.title}</h2>
              <p className="article-meta">{article.date}</p>
              <p className="article-excerpt">{article.excerpt}</p>
              <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); openArticleDetail(article); }}>
                Baca selengkapnya →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  // Render Tentang Page
  const renderTentangPage = () => (
    <div className="container" style={{ padding: '4rem 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>
          Tentang Resep Nusantara
        </h1>
        
        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center' }}>
          <p style={{ marginBottom: '2rem' }}>
            <strong>Resep Nusantara</strong> adalah portal berita dan resep masakan Indonesia terlengkap yang didedikasikan untuk melestarikan dan mempromosikan kekayaan kuliner Indonesia.
          </p>
          
          <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', marginTop: '2rem' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Visi dan Misi</h3>
            <p>Kami berkomitmen untuk menjadi sumber terpercaya dalam dunia kuliner Indonesia, menyajikan resep autentik, sejarah makanan, dan perkembangan terkini dalam industri kuliner nusantara.</p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Kontak Kami</h3>
            <p><strong>Email:</strong> info@resepnusantara.com</p>
            <p><strong>Telepon:</strong> (021) 1234-5678</p>
            <p><strong>Alamat:</strong> Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Render Detail Resep
  const renderDetailResep = () => {
    if (!selectedRecipe) return null;
    
    return (
      <div className="container" style={{ padding: '2rem 0 4rem' }}>
        {renderBreadcrumb()}
        
        <article className="recipe-detail">
          <div className="recipe-header">
            <div className="recipe-hero-image" style={{backgroundImage: `url(${selectedRecipe.imageUrl})`}}/>
            <div className="recipe-info">
              <h1>{selectedRecipe.title}</h1>
              <p className="recipe-description">{selectedRecipe.description}</p>
              <div className="recipe-meta">
                <span>⏱️ {selectedRecipe.cookingTime}</span>
                <span>📊 {selectedRecipe.difficulty}</span>
                <span>🍽️ {selectedRecipe.servings}</span>
              </div>
            </div>
          </div>

          <div className="recipe-content">
            <div className="ingredients-section">
              <h2>Bahan-bahan</h2>
              <ul className="ingredients-list">
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="steps-section">
              <h2>Cara Membuat</h2>
              <ol className="steps-list">
                {selectedRecipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </article>
      </div>
    );
  };

  // Render Detail Artikel
  const renderDetailArtikel = () => {
    if (!selectedArticle) return null;
    
    return (
      <div className="container" style={{ padding: '2rem 0 4rem' }}>
        {renderBreadcrumb()}
        
        <article className="article-detail">
          <div className="article-header">
            <span className="article-category">{selectedArticle.category}</span>
            <h1>{selectedArticle.title}</h1>
            <p className="article-meta">{selectedArticle.date}</p>
            <div className="article-hero-image" style={{backgroundImage: `url(${selectedArticle.imageUrl})`}}/>
          </div>

          <div 
            className="article-content-full" 
            dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
          />
        </article>
      </div>
    );
  };

  // Render berdasarkan halaman aktif dengan animasi
  const renderCurrentPage = () => {
    const pageContent = (() => {
      switch (currentPage) {
        case 'home':
          return renderHomePage();
        case 'resep':
          return renderResepPage();
        case 'artikel':
          return renderArtikelPage();
        case 'tentang':
          return renderTentangPage();
        case 'detail-resep':
          return renderDetailResep();
        case 'detail-artikel':
          return renderDetailArtikel();
        default:
          return renderHomePage();
      }
    })();

    return (
      <div className={isTransitioning ? 'page-transition-exit-active' : 'page-transition-enter-active'}>
        {pageContent}
      </div>
    );
  };

  return (
    <>
      {renderHeader()}
      
      <main className="main-content">
        {renderCurrentPage()}
      </main>

      {/* Newsletter section untuk halaman home saja */}
      {currentPage === 'home' && (
        <section className="newsletter">
          <div className="container">
            <div className="newsletter-content">
              <h2>Ingin Resep Terbaru Langsung ke Email Anda?</h2>
              <p>Daftar newsletter kami dan dapatkan update resep terbaru serta artikel sejarah kuliner Indonesia.</p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Alamat email Anda" 
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  Daftar
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
      
      {renderFooter()}
    </>
  );
}