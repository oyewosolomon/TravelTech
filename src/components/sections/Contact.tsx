import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions or want to schedule a demo? Contact us today!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <Input type="text" placeholder="Your Name" className="w-full" required />
          <Input type="email" placeholder="Your Email" className="w-full" required />
          <Input type="tel" placeholder="Your Phone Number" className="w-full" />
          <Textarea placeholder="Your Message" className="w-full" required />
          <Button type="submit" className="w-full">Send Message</Button>
        </motion.form>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
          <p className="text-muted-foreground text-lg">Email: contact@LastMile.com</p>
          <p className="text-muted-foreground text-lg">Phone: +1 (555) 123-4567</p>
          <p className="text-muted-foreground text-lg">Address: 123 LastMile Street, Suite 100, City, State</p>

          <div className='flex justify-center space-x-4 mt-5'>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-primary hover:text-primary/80'>
                <FaFacebookF size={24} />
              </a>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='text-primary hover:text-primary/80'>
                <FaTwitter size={24} />
              </a>
              <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-primary hover:text-primary/80'>
                <FaLinkedinIn size={24} />
              </a>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-primary hover:text-primary/80'>
                <FaInstagram size={24} />
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}
