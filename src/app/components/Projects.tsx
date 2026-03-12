import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);

  const projects = [
    {
      title: "1-Storey Elegant Finish Residential Building",
      category: "Residential",
      location: "Batangas City",
      gradient: "bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500",
    },
    {
      title: "School Renovation",
      category: "Institutional",
      location: "San Pascual, Batangas",
      gradient: "bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600",
    },
    {
      title: "4-Storey Building with Basement (Ground - Up)",
      category: "Commercial",
      location: "Batangas City",
      gradient: "bg-gradient-to-br from-gray-700 via-gray-600 to-slate-700",
    },
    {
      title: "Food Stall / Shop Fit-Out",
      category: "Commercial",
      location: "Batangas",
      gradient: "bg-gradient-to-br from-orange-600 via-red-500 to-orange-700",
    },
    {
      title: "4-Storey Mausoleum",
      category: "Specialized",
      location: "Sambat, San Pascual",
      gradient: "bg-gradient-to-br from-teal-700 via-emerald-600 to-teal-800",
    },
    {
      title: "Hot Spring Resort",
      category: "Specialized",
      location: "Pansol, Laguna",
      gradient: "bg-gradient-to-br from-amber-600 via-orange-600 to-red-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 tracking-widest text-sm">
            OUR PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our portfolio of exceptional projects that
            showcase our expertise and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-80"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 ${project.gradient} transition-all duration-500 group-hover:scale-110`} />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <div className="inline-block bg-orange-500 text-xs px-3 py-1 rounded-full mb-3">
                  {project.category}
                </div>
                <h3 className="text-2xl mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {project.location}
                </p>

                {/* Hover Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    hoveredIndex === index
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="absolute top-6 right-6 bg-white text-orange-500 p-3 rounded-full"
                >
                  <ExternalLink size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}