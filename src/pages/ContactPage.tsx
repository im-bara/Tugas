import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import './ContactPage.css';

const Contact = () => {
  const [, setMousePosition] = useState({ x: 0, y: 0 }); // mousePosition tidak dipakai
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-wrapper"
    >

      {/* Glowing Form Box */}
      <motion.div
        className="form-box"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1>Get In Touch</motion.h1>
        <motion.p>
          Let's make something epic. Storytelling, coding, magic - you name it. 🧙‍♂️✨
        </motion.p>

        <motion.form className="contact-form">
          {["name", "email", "message"].map((field) => ( 
            <div key={field} className="form-group">
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>

              {field === "message" ? (
                <motion.textarea
                  id={field}
                  rows={5}
                  placeholder={`Your ${field}`}
                  className={focusedInput === field ? "focused" : ""}
                  onFocus={() => setFocusedInput(field)}
                  onBlur={() => setFocusedInput(null)}
                  whileFocus={{ scale: 1.02 }}
                />
              ) : (
                <motion.input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={`Your ${field}`}
                  className={focusedInput === field ? "focused" : ""}
                  onFocus={() => setFocusedInput(field)}
                  onBlur={() => setFocusedInput(null)}
                  whileFocus={{ scale: 1.02 }}
                />
              )}
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="submit-button"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
