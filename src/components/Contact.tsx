import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  console.log(emailjs)
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  const form = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // SEND THE EMAIL USING THE TEMPLATE AND PUBLIC KEYS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent Successfully!");
        form.current?.reset(); // ✅ safe
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="
        xl:text-xl_content
        lg:gap-[1rem] lg:pt-[1rem] lg:text-lg_content
        md:gap-[0.75rem] lg:pt-[0.5rem] md:items-start md:text-md_content
        gap-[0.5rem] pt-[1rem] items-start text-sm_content
        w-auto flex flex-col justify-center items-center font-inter 
      "
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="lg:py-[1rem]
        md:py-[0.5rem]
        pl-[0.5rem] py-[0.5rem] w-full bg-white text- focus:ring-2 focus:ring-font border border-misc-300"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className=" lg:py-[1rem]
        pl-[0.5rem] py-[0.5rem] w-full bg-white text-misc outline-none focus:ring-2 focus:ring-misc border border-misc-300"
      />
      <textarea
        rows={5}
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className=" lg:py-[1rem]
        pl-[0.5rem] py-[0.5rem] w-full bg-white text-misc outline-none resize-none focus:ring-2 focus:ring-misc border border-misc-300"
      />

      <button
        type="submit"
        disabled={loading}
        className=" xl:px-[3rem] xl:py-[1rem]
        lg:px-[2.5rem] lg:py-[0.75rem]
        md:px-[1.75rem] md:py-[0.5rem]
        px-[1.75rem] py-[0.5rem] self-start
        text-misc bg-highlight font-bold hover:opacity-90"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
