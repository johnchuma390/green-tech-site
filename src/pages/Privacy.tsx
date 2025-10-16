import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

export default function Privacy() {
  return (
    <div className="pt-16">
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        breadcrumbs={[{ name: 'Privacy Policy', href: '/privacy' }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto prose prose-lg"
          >
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <p className="text-sm text-muted-foreground mb-8">
                Last updated: January 2025
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-6">
                We collect information you provide directly to us when you register for the conference, 
                submit projects, sign up for newsletters, or contact us. This may include your name, 
                email address, phone number, organization, and other relevant details.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Process your registration and manage your participation</li>
                <li>Send you important updates about the conference</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Improve our conference experience and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as required by law or as necessary to provide conference services 
                (e.g., sharing attendee lists with sponsors with your permission).
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-6">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mb-4">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-6">
                Our website uses cookies to enhance your browsing experience. You can control cookie 
                settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or how we handle your information, 
                please contact us at{' '}
                <a href="mailto:privacy@greentechconf.org" className="text-primary hover:underline">
                  privacy@greentechconf.org
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
