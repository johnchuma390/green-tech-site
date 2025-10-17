import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Building } from 'lucide-react';
import PageHero from '../components/PageHero';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { keyContacts } from '../data/contacts';

export default function Contact() {
  return (
    <div className="pt-16">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for any questions or inquiries"
        bgImage="https://i.postimg.cc/Wb4tpx2D/image.png"
        bgImageMobile="https://i.postimg.cc/Wb4tpx2D/image.png"
        overlayClasses="bg-gradient-to-b from-green-900/75 via-emerald-900/65 to-green-900/85 mix-blend-multiply"
        className="min-h-[60vh]"
        bgPosition="center"
        breadcrumbs={[{ name: 'Contact', href: '/contact' }]}
      />

      {/* Key Contact Persons */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Key Contact Persons
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Reach out to our leadership team for specific inquiries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {keyContacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden hover-lift"
              >
                <div className="relative">
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg mb-1">{contact.name}</h3>
                  <p className="text-primary font-subheading font-semibold text-sm mb-1">{contact.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{contact.organization}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                      <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors truncate">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                      <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors truncate">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-cta hover:opacity-90 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about registration, sponsorship, or the conference? We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-cta p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:esa@students.uonbi.ac.ke"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        esa@students.uonbi.ac.ke
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        General inquiries
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-cta p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold mb-2">Phone</h3>
                      <a
                        href="tel:+254 759 408081"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +254 759 408081
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mon-Fri, 9am-5pm EAT
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-cta p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        University of Nairobi<br />
                        Faculty of Engineering<br />
                        Main Campus<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-cta p-3 rounded-lg">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold mb-2">Bank Details (Donations)</h3>
                      <p className="text-muted-foreground text-sm">
                        <strong>Bank:</strong> ABSA Bank<br />
                        <strong>Branch:</strong> University of Nairobi<br />
                        <strong>Account Name:</strong> Engineering Students Association<br />
                        <strong>Account Number:</strong> 0831042133
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8186405977975!2d36.81685931475393!3d-1.2790562990638678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6c1f39d4d%3A0x3106b3ab1c5e7be7!2sUniversity%20of%20Nairobi%20Main%20Campus!5e0!3m2!1sen!2ske!4v1634567890123!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="University of Nairobi Main Campus Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
