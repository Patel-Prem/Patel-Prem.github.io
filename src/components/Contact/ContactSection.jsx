import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { FiSend, FiCheckCircle, FiMail } from "react-icons/fi";
import { contactSchema } from "../Schemas/ConatctSchema";
import Button from "../Common/Button";
import Card from "../Common/Card";
import { Input } from "../Common/Input";
import { Textarea } from "../Common/Textarea";
import { SOCIALLINKS } from "../Constants/SocialLinks";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [emailjsError, setEmailjsError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  /* =========================
     FIELD REFS (FOCUS)
  ========================== */
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const fieldRefs = {
    name: nameRef,
    email: emailRef,
    subject: subjectRef,
    message: messageRef,
  };

  /* =========================
     INPUT HANDLER
  ========================== */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  /* =========================
     SUBMIT HANDLER (ZOD)
  ========================== */
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const result = contactSchema.safeParse(formData);

  //   if (!result.success) {
  //     const tree = z.treeifyError(result.error);
  //     const fieldErrors = {};
  //     let firstErrorField = null;

  //     for (const key in tree.properties) {
  //       // fieldErrors[key] = tree.properties[key]?.errors?.join(" ");

  //       const messages = tree.properties[key]?.errors;
  //       if (messages?.length) {
  //         fieldErrors[key] = messages.join(" ");

  //         if (!firstErrorField) {
  //           firstErrorField = key;
  //         }
  //       }
  //     }

  //     setErrors(fieldErrors);

  //     if (firstErrorField) {
  //       fieldRefs[firstErrorField]?.current?.focus();
  //       fieldRefs[firstErrorField]?.current?.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //       });
  //     }

  //     return;
  //   }

  //   setSubmitted(true);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const tree = z.treeifyError(result.error);
      const fieldErrors = {};

      for (const key in tree.properties) {
        fieldErrors[key] = tree.properties[key].errors?.join(" ");
      }

      setErrors(fieldErrors);

      // Focus first error field
      const firstErrorField = Object.keys(fieldErrors)[0];
      document.querySelector(`[name="${firstErrorField}"]`)?.focus();

      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setEmailjsError(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setEmailjsError(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm block mb-4">
            06. Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <FiCheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thanks for reaching out. I’ll reply soon.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      ref={nameRef}
                      name="name"
                      label="Name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                    />

                    <Input
                      ref={emailRef}
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>

                  <Input
                    ref={subjectRef}
                    name="subject"
                    label="Subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                  />

                  <Textarea
                    ref={messageRef}
                    name="message"
                    label="Message"
                    placeholder="Tell me about your project..."
                    className="min-h-[150px] resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                  />

                  <Button type="submit" size="lg" className="w-full">
                    <FiSend className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>

                  {emailjsError && (
                    <p className="text-sm font-medium text-destructive mt-1">
                      Failed to send message. Please try again later. Or
                      directly mail him to{" "}
                      <Link
                        to="mailto:work.prempatel@gmail.com"
                        className="text-primary hover:underline"
                      >
                        work.prempatel@gmail.com
                      </Link>
                    </p>
                  )}
                </form>
              )}
            </Card>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I’m open to opportunities, collaborations, or just a friendly
                  chat.
                </p>
              </div>

              <div className="text-center">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex items-center justify-center gap-3">
                  {SOCIALLINKS.map((link) => (
                    <Button
                      key={link.label}
                      size="icon"
                      variant="outline"
                      className="h-9 w-9"
                      onClick={() => window.open(link.href, "_blank")}
                    >
                      <link.icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <h4 className="font-semibold mb-2 flex items-center justify-center gap-2">
                    <FiMail className="h-5 w-5 text-primary" />
                    Email me directly
                  </h4>
                  <Link
                    to="mailto:work.prempatel@gmail.com"
                    className="text-primary hover:underline"
                  >
                    work.prempatel@gmail.com
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-muted-foreground">
                  <p>Based in Canada</p>
                  <p>Available for remote work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
