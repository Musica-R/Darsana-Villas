import React, { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

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

  const phoneNumber = "917736257634";

  // WHATSAPP DEFAULT MESSAGE

  const whatsappMessage = encodeURIComponent(
    "Hello Darsana Events,\n\nI would like to know more about your luxury event venue, wedding packages, stay options, and event services. Please share the details.\n\nThank you."
  );

  return (
    <>

      

      {/* WHATSAPP BUTTON */}

      <a
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-btn ${showButtons ? "show" : ""}`}
        aria-label="WhatsApp"
      >
        <span className="whatsapp-pulse"></span>
        <FaWhatsapp />
      </a>

      {/* CALL BUTTON */}

      <a
        href={`tel:+${phoneNumber}`}
        className={`call-btn ${showButtons ? "show" : ""}`}
        aria-label="Call Us"
      >
        <FaPhoneAlt />
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