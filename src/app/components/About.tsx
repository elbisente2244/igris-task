import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Target, Users } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Recognized for excellence and innovation in construction",
    },
    {
      icon: Target,
      title: "Precision Built",
      description:
        "Every project executed with meticulous attention to detail",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Skilled professionals dedicated to your success",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1759542878135-bc80368e74ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzczMDg5NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Construction workers"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-lg shadow-xl">
              <div className="text-4xl">3+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-orange-500 tracking-widest text-sm">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">
              Building Dreams Since 2022
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Inocencio-Berberabe Construction started as a
              small, family-run contracting service in 2022,
              focused on residential builds in Batangas. Through
              hard work and a reputation for delivering quality
              work, the company evolved into IGRIS Balteus
              Construction. Now a full-service construction firm
              servicing commercial, industrial, and residential
              clients across Southern Luzon and NCR. From modest
              renovations to landmark developments, driven by
              excellence and innovation.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Our commitment to excellence, innovation, and
              sustainability has made us a trusted partner for
              residential, commercial, and industrial projects
              worldwide.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <feature.icon
                      className="text-orange-500"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}