import React from 'react'

const Blogcontent = () => {
  

  const news={
    'id':1,
    'title':"10 Days of Bioinformatics ",
    'desc':"lorewm skdL;f;RAGRIEOGOIEH4Gih4ighaeoihgoiaergoiaheoga",
    'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
    'content':"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse painsOn the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse painsOn the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse painsOn the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse painsOn the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains",
    'authorName':'John Doe',
    'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'authorDesc':'Web Developer'
  }
  return (
<div className='w-full pb-10 bg-white '>
    <div className='max-w-full mx-auto'>
      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
              <div className='col-span-2 gap-x-8 gap-y-8 '>
                <img className=' h-56 w-full object-cover' src={news.coverImg}/>
                  <h1 className='font-bold text-2xl my-1 pt-5 '>{news.title}</h1>
                  <p className='text-left text-gray-900 font-medium'>{news.content}</p>
                
              </div>
              <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
                  <div>
                         <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={news.authorImg} />
                         <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{news.authorName}</h1>
                        <p className='text-center text-gray-900 font-medium'>{news.authorDesc}</p>
                     </div>

                 </div>

      </div>
    </div>
</div>
 

  )
}

export default Blogcontent;
