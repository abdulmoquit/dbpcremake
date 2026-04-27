"use client";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

const groups = [
  "Young Christian Students (YCS)", "Leadership Training Service (LTS)", "Bosco Scouts and Cubs",
  "Science Club", "Media and Cultural", "Savio Sports", "Quiz Club", "Cyber Space",
  "Interact Movement", "Dramatics", "Photography", "Green Movement", "Prerna",
  "Young Entrepreneurs", "CINE Club",
];

export default function GroupsPage() {
  return (
    <>
      <PageBanner title="Action Groups" subtitle="Groups and Movements — an integral part of the Don Bosco System of Education" />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-gray-600 leading-relaxed mb-10 text-lg max-w-3xl">
          Groups and Movements are an integral part of the Don Bosco System of Education. These give students opportunities to develop their leadership qualities and help them to be integrated human beings. For students of Classes 8 to 12, active participation in any one of the Youth Groups and Movements is recommended.
        </motion.p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-lg hover:border-gold/30 transition cursor-pointer">
              <h3 className="font-bold text-navy text-sm">{g}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
