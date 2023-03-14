
import { FaMicroscope } from "react-icons/fa";

const Service = () => {
  return (
    <div className="bg-blue-100 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-lg px-8 py-10">
           
            <h3 className="text-xl font-semibold mb-2">Bioinformatics</h3>
            <p className="text-gray-700 text-base">
            We provide bioinformatics services to students,
             helping them with various computational biology tasks such as sequence analysis, 
             data mining, and statistical analysis. Our services aim to support their academic research and learning,
              enabling them to gain insights and make discoveries in the field of life sciences using bioinformatics tools and techniques.




            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg px-8 py-10">
          
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-700 text-base">
            We specialize in providing bioinformatics services to students in the community, offering support and guidance in computational biology tasks such as sequence alignment, phylogenetic analysis, and protein structure prediction. Our team of experts works closely with students to ensure that they receive personalized attention and achieve their research goals.
             Our aim is to empower students with the knowledge and tools necessary to succeed in the field of bioinformatics.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg px-8 py-10">
            <h3 className="text-xl font-semibold mb-2">References bioinformatics</h3>
            <p className="text-gray-700 text-base">
            We provide students with access to references and courses in the field of bioinformatics, covering topics such as gene expression analysis, sequence alignment, and protein structure prediction. Our courses are designed to provide a comprehensive understanding of bioinformatics concepts and tools, while our references offer students access to high-quality information and data sources. Our aim is to equip 
            students with the knowledge and skills necessary to excel in their bioinformatics studies and research projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
