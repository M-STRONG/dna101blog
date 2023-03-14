import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './Navbar';



const Sectionblog = ({sectionblog}) => {


    console.log(sectionblog)

    const blogs1=[
        {
            "id":1,
            'title':' Exploring the Applications of Machine Learning in Bioinformatics',
            'desc':"This article discusses the use of machine learning in bioinformatics and its potential applications for analyzing and interpreting biological data. It explores the different types of machine learning algorithms used in bioinformatics, the challenges associated with applying machine learning in this field, and the future directions of this exciting area of research.",
            'coverImg':"https://media.istockphoto.com/id/1319518459/photo/big-genomic-data-in-laboratory-research-biotechnology-bioinformatics-concept.jpg?b=1&s=170667a&w=0&k=20&c=JbNb2Pz5U7mNvp3pp5q75AkbhR7aBSp2k6C9IeOJPqA=",
    
        },
        {
            "id":2,
            'title':' Using Bioinformatics to Predict Protein Structures and Functions',
            'desc':"This article discusses the use of bioinformatics techniques to predict the structures and functions of proteins. It explores the different methods and algorithms used for protein structure and function prediction, the challenges associated with these predictions, and the potential applications of these predictions for drug discovery and personalized medicine.",
            'coverImg':'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/66/fcb8c7bc2b16212736fbd7fad363bb/600_3402.jpg?auto=format%2Ccompress&dpr=1'
            ,
            
        },
        {
            "id":3,
            'title':'Big Data in Bioinformatics: Challenges and Opportunities ',
            'desc':"This article discusses the challenges and opportunities of dealing with big data in bioinformatics, a field that generates and analyzes vast amounts of biological data. It explores the different sources of big data in bioinformatics, the tools and techniques used for handling and analyzing these data, and the potential applications and impact of big data in this field.",
            'coverImg':'https://media.istockphoto.com/id/1425235289/photo/data-analyst-working-on-business-analytics-dashboard-with-charts-metrics-and-kpi-to-analyze.jpg?b=1&s=170667a&w=0&k=20&c=cDL2iq7QOkSavd5TmmxgVECRlkvTyrpeAQzxsVUfYfg=',
            
        },
        {
            "id":3,
            'title':'Big Data in Bioinformatics: Challenges and Opportunities ',
            'desc':"This article discusses the challenges and opportunities of dealing with big data in bioinformatics, a field that generates and analyzes vast amounts of biological data. It explores the different sources of big data in bioinformatics, the tools and techniques used for handling and analyzing these data, and the potential applications and impact of big data in this field.",
            'coverImg':'https://media.istockphoto.com/id/1425235289/photo/data-analyst-working-on-business-analytics-dashboard-with-charts-metrics-and-kpi-to-analyze.jpg?b=1&s=170667a&w=0&k=20&c=cDL2iq7QOkSavd5TmmxgVECRlkvTyrpeAQzxsVUfYfg=',
            
        },
        {
            "id":4,
            'title':'Polymerase Chain Reaction (PCR): A Revolution in Molecular Biology ',
            'desc':"This article explores the history, principles, and applications of the Polymerase Chain Reaction (PCR), a technique that has revolutionized molecular biology and has become an essential tool in many fields of research and medicine.",
            'coverImg':'https://cdn.pixabay.com/photo/2021/12/05/16/08/corona-6848119__340.jpg',
            
        },
        {
            "id":3,
            'title':"Exploring Genetics: From Mendel to CRISPR and Beyond",
            'desc':"Genetics is the study of how traits are inherited and passed down from one generation to the next. It encompasses a wide range of topics, from classical genetics to molecular genetics, and from genomics to genetic engineering. In this article, we will explore the history, principles, and applications of genetics, including the latest advancements in gene editing technology.",
            'coverImg':"https://media.istockphoto.com/id/1301873080/photo/coronavirus-and-dna-virus-mutation-new-variant-and-strain-of-sars-cov-2-microscopic-view.jpg?b=1&s=170667a&w=0&k=20&c=WBVtcTRBY13zcbrdPqV-41iQskb3ryDl6Qa1uE7zVdI=",
            
        },

    ]



  return (
<div>
    <NavBar/>
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                
                {blogs1.map((Sectionblog)=>{
                return(
                  <Link to="/Blogcontent">
                     <div key={Sectionblog.title} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={Sectionblog.coverImg}
                  alt="Placeholder Image"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{Sectionblog.title}</h3>
                <p className="mt-2 text-base leading-6 text-gray-500">{Sectionblog.desc}</p>
              </div>
            </div>
                     </Link>
                )
                }
                
                
                )} 


            </div>

        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Sectionblog
