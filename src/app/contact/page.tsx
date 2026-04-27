"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" subtitle="Get in touch with Don Bosco School, Park Circus" />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-full shrink-0"><Phone className="text-gold" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Phone</h4>
                    <p className="text-gray-600">+91 33 2287-9202</p>
                    <p className="text-gray-600">+91 33 2287-0414</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-full shrink-0"><Mail className="text-gold" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Email</h4>
                    <a href="mailto:dbkolkata@gmail.com" className="text-gold hover:underline">dbkolkata@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-full shrink-0"><MapPin className="text-gold" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Address</h4>
                    <p className="text-gray-600">23, Darga Road, Park Circus,<br/>Kolkata 700017, West Bengal, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-3 rounded-full shrink-0"><Clock className="text-gold" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Office Hours</h4>
                    <p className="text-gray-600">Monday – Saturday: 8:00 AM – 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6787!2d88.3625!3d22.5407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277500f0b4b89%3A0x5d9280423e23ba37!2sDon%20Bosco%20School%2C%20Park%20Circus!5e0!3m2!1sen!2sin!4v1714123456789!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0, minHeight: "400px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
