import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

export default function Terms() {
  return (
    <div className="pt-16">
      <PageHero
        title="Terms of Service"
        subtitle="Terms and conditions for conference participation"
        breadcrumbs={[{ name: 'Terms of Service', href: '/terms' }]}
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

              <h2 className="text-2xl font-heading font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6">
                By registering for or attending the Green Tech Conference 2025, you agree to be bound by
                these Terms of Service. If you do not agree to these terms, please do not register or attend.
              </p>

              {/* Removed: Registration and Payment */}
              {/* Removed: Cancellation Policy */}

              <h2 className="text-2xl font-heading font-bold mb-4">2. Code of Conduct</h2>
              <p className="text-muted-foreground mb-6">
                All participants are expected to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Treat all attendees, speakers, and staff with respect</li>
                <li>Refrain from harassment, discrimination, or disruptive behavior</li>
                <li>Follow all venue rules and safety protocols</li>
                <li>Respect intellectual property rights</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Violation of the code of conduct may result in removal from the conference.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground mb-6">
                Conference materials, presentations, and content are protected by copyright. Recording,
                photographing, or reproducing conference content without permission is prohibited. Project
                submissions retain ownership with their creators, but grant us permission to display and
                promote them during the conference.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">4. Photography and Media</h2>
              <p className="text-muted-foreground mb-6">
                By attending the conference, you consent to being photographed, filmed, or recorded.
                These materials may be used for promotional purposes. If you do not wish to be included,
                please inform conference staff.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">5. Liability</h2>
              <p className="text-muted-foreground mb-6">
                The conference organizers are not liable for any loss, damage, or injury to persons or
                property during the event. Attendees participate at their own risk and are responsible
                for their personal belongings.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">6. Changes to Event</h2>
              <p className="text-muted-foreground mb-6">
                We reserve the right to modify the conference program, speakers, schedule, or venue.
                In case of disruption due to circumstances beyond our control, we will communicate promptly
                and provide appropriate alternatives or rescheduling.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-4">7. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please contact us at{' '}
                <a
                  href="mailto:esatechsummit@students.uonbi.ac.ke"
                  className="text-primary hover:underline"
                >
                  esatechsummit@students.uonbi.ac.ke
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
