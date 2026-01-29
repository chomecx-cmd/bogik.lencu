// Scroll halus ke anchor jika ada link #...
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: lazy loading iframe (hemat data saat buka halaman)
window.addEventListener('load', () => {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    // Bisa tambah parameter ?rel=0 & modestbranding=1 jika mau lebih clean
    console.log("Video siap dimuat");
  }
});
