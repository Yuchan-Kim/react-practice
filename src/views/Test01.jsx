// src/App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// 스타일을 CSS-in-JS 방식으로 정의
const styles = {
  body: {
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    backgroundColor: '#fafafa',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
    color: '#fff',
  },
  navbarLogo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  navbarLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
  navbarLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '5px 10px',
  },
  navbarLinkHover: {
    backgroundColor: '#555',
    borderRadius: '5px',
  },
  navbarCart: {
    fontSize: '1.5em',
    cursor: 'pointer',
  },
  appHeader: {
    backgroundColor: '#f5f5f7',
    padding: '40px 20px',
    textAlign: 'center',
  },
  appHeaderTitle: {
    fontSize: '2.5em',
    marginBottom: '10px',
  },
  appHeaderSubtitle: {
    fontSize: '1.2em',
    color: '#555',
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    transition: 'box-shadow 0.3s',
    backgroundColor: '#fff',
  },
  productCardHover: {
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  productName: {
    fontSize: '1.2em',
    margin: '10px 0',
  },
  productDescription: {
    color: '#666',
    fontSize: '0.9em',
  },
  productPrice: {
    fontSize: '1.1em',
    margin: '10px 0',
    color: '#e60023',
  },
  buyButton: {
    backgroundColor: '#0071e3',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buyButtonHover: {
    backgroundColor: '#005bb5',
  },
  appFooter: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0',
  },
};

// 네비게이션 바 컴포넌트
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarLogo}>Apple</div>
      <ul style={styles.navbarLinks}>
        <li>
          <a href="/" style={styles.navbarLink}>
            홈
          </a>
        </li>
        <li>
          <a href="/iphone" style={styles.navbarLink}>
            iPhone
          </a>
        </li>
        <li>
          <a href="/mac" style={styles.navbarLink}>
            Mac
          </a>
        </li>
        <li>
          <a href="/accessories" style={styles.navbarLink}>
            액세서리
          </a>
        </li>
        <li>
          <a href="/support" style={styles.navbarLink}>
            지원
          </a>
        </li>
      </ul>
      <div style={styles.navbarCart}>🛒</div>
    </nav>
  );
};

// 제품 카드 컴포넌트
const ProductCard = ({ image, name, description, price }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        ...styles.productCard,
        ...(hover ? styles.productCardHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={name} style={styles.productImage} />
      <h3 style={styles.productName}>{name}</h3>
      <p style={styles.productDescription}>{description}</p>
      <div style={styles.productPrice}>{price}</div>
      <button
        style={{
          ...styles.buyButton,
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buyButtonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.buyButton.backgroundColor)}
      >
        구매하기
      </button>
    </div>
  );
};

// 제품 목록 컴포넌트
const ProductList = () => {
  // 예시 데이터
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x400',
      name: 'iPhone 14',
      description: '최신 iPhone 14, 놀라운 성능과 카메라를 경험하세요.',
      price: '₩1,400,000',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x400',
      name: 'iPhone 14 Pro',
      description: 'iPhone 14 Pro, 프로페셔널한 기능을 갖춘 최고의 선택.',
      price: '₩1,600,000',
    },
    // 추가 제품들...
  ];

  return (
    <div style={styles.productList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

// 메인 애플리케이션 컴포넌트
const App = () => {
  return (
    <div style={{ ...styles.app }}>
      <Navbar />
      <header style={styles.appHeader}>
        <h1 style={styles.appHeaderTitle}>iPhone 쇼핑</h1>
        <p style={styles.appHeaderSubtitle}>최신 iPhone을 만나보세요</p>
      </header>
      <main>
        <ProductList />
      </main>
      <footer style={styles.appFooter}>
        <p>&copy; 2024 Apple Inc. 모든 권리 보유.</p>
      </footer>
    </div>
  );
};

// 전역 스타일 적용
const GlobalStyle = () => (
  <style>
    {`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #fafafa;
      }
      a:hover {
        background-color: #555;
        border-radius: 5px;
      }
      button:hover {
        background-color: #005bb5;
      }
    `}
  </style>
);

// 루트 엘리먼트에 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
