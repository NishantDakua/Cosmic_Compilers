import Image from "next/image";
import styles from "./page.module.css";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Blue Denim Jeans",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Sneakers",
    price: "$69.99",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "24px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/next.svg" alt="Shop Logo" width={40} height={40} />
          <span style={{ fontWeight: 700, fontSize: 24 }}>Cosmic Shop</span>
        </div>
        <nav style={{ display: "flex", gap: 24, fontWeight: 500 }}>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className={styles.main} style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        <section style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16 }}>Welcome to Cosmic Shop</h1>
          <p style={{ fontSize: 20, color: "#666", marginBottom: 24 }}>
            Discover the latest fashion essentials. Quality products, great prices.
          </p>
          <a href="#products" className={styles.primary} style={{ padding: "12px 32px", fontSize: 18, borderRadius: 32, display: "inline-block" }}>
            Shop Now
          </a>
        </section>
        <section id="products">
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>Featured Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
            {products.map((product) => (
              <div key={product.id} style={{ background: "var(--gray-alpha-100)", borderRadius: 16, padding: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Image src={product.image} alt={product.name} width={180} height={180} style={{ borderRadius: 12, objectFit: "cover" }} />
                <h3 style={{ margin: "16px 0 8px", fontSize: 20 }}>{product.name}</h3>
                <span style={{ fontWeight: 600, color: "#333", marginBottom: 12 }}>{product.price}</span>
                <button className={styles.primary} style={{ padding: "8px 24px", borderRadius: 24, fontSize: 16, marginTop: 8, cursor: "pointer" }} disabled>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className={styles.footer} style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "24px 0", justifyContent: "space-between" }}>
        <span>© {new Date().getFullYear()} Cosmic Shop. All rights reserved.</span>
        <span id="about">Built with Next.js</span>
      </footer>
    </div>
  );
}
