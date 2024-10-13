import bookSymbol from "/public/bookSymbol.webp";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div id="header-container">
        <img id="book-symbol" src={bookSymbol} />
        <h1 id="symbol-text">ReviewBook</h1>
      </div>
    </>
  );
}
