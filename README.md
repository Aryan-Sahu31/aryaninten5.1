# LUMINA — Modern E-Commerce Capstone Application

![Lumina Store Banner](https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80)

**LUMINA** is a production-ready, full-stack capstone e-commerce web application built with **React**, **React Router**, **Vite**, and custom **Glassmorphism CSS**. It is fully responsive, optimized for maximum performance, and configured for instant deployment to Vercel or Netlify.

---

## 🌟 Key Features

1. **Modular Frontend Architecture**:
   - Built with clean separation of concerns: `components`, `pages`, `context`, `services`, `styles`, and `assets`.
   - Dynamic theme context supporting dark and light mode persistence (`localStorage`).

2. **Client-Side Routing**:
   - Multi-page navigation using `react-router-dom`:
     - `/`: Hero showcase, featured products, category highlights, customer reviews.
     - `/shop`: Product catalog with real-time category, price, rating, and stock filters.
     - `/product/:id`: Interactive gallery, color variants, specs matrix, related products.
     - `/cart`: Full shopping cart view with item quantity management and promo code engine (`LUMINA10`, `WELCOME20`, `CAPSTONE`).
     - `/checkout`: Multi-step checkout workflow with shipping validation, payment form, processing animation, and confirmation receipt.
     - `/wishlist`: Saved favorite items grid.
     - `/orders`: Order history tracking dashboard.

3. **Performance & Asset Optimization**:
   - Minified build bundle using Vite esbuild chunk splitting.
   - Vector SVG icons via `lucide-react`.
   - Lazy image loading and smooth CSS micro-interactions.

4. **Live Deployment Configurations**:
   - Ready-to-deploy single-page app rewrites included for Vercel (`vercel.json`) and Netlify (`netlify.toml`).

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router DOM v6
- **Styling**: Modern CSS with HSL variables & Glassmorphism design tokens
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify ready

---

## 🚀 How to Run Locally

1. **Open terminal** in project root directory:
   ```bash
   cd "C:\Users\Optimus Prime\.gemini\antigravity\scratch\lumina-ecommerce"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploy to GitHub & Vercel / Netlify

### Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit for Task 5 Lumina E-Commerce Capstone"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lumina-ecommerce.git
git push -u origin main
```

### Deploy to Vercel:
Run in your terminal:
```bash
npx vercel
```
*Or connect your GitHub repository directly on [Vercel Dashboard](https://vercel.com).*

### Deploy to Netlify:
Run in your terminal:
```bash
npx netlify-cli deploy --prod
```
*Or drag and drop the generated `dist/` folder to [Netlify Drop](https://app.netlify.com/drop).*

---

## 📝 License
MIT License. Created for Internship Task 5: Full-Stack Deployment & Project Architecture.
