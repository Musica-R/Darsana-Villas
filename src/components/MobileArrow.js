import React, { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

function MobileArrow() {

  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.pageYOffset > 50) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  // SCROLL TO TOP

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  // WHATSAPP DEFAULT MESSAGE

  const whatsappMessage = encodeURIComponent(
    "Hello Darsana Villas,\n\nI would like to know more about your luxury event venue, wedding packages, stay options, and event services. Please share the details.\n\nThank you."
  );

  return (
    <>

      {/* WHATSAPP BUTTON */}

      <a
        href={`https://api.whatsapp.com/send?phone=918610766168&text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-btn ${showButtons ? "show" : ""}`}
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* SCROLL TO TOP BUTTON */}

      <button
        className={`scroll-btn ${showButtons ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll To Top"
      >
        <FaArrowUp />
      </button>

    </>
  );
}

export default MobileArrow;