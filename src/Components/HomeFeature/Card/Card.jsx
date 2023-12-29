import React from 'react';
import img from '../../../../public/image/post.png'
import postImg from '../../../../public/image/postImage.png'
import bannerImg from '../../../../public/image/bannerpost.png'
import heartImg from '../../../../public/image/heart.svg'
import editImg from '../../../../public/image/edit.svg'


const Card = () => {
    return (
        <div>
            <div  className='flex flex-col lg:flex-row mx-[10px] my-4 '>
                <div>
                <div className=' '>
{/* FIRST POST */}
  
<div className='w-[300px]  lg:w-[680px] border-[1px] border-[rgba(0, 0, 0, 0.10)] h-[429px] lg:h-[520px] bg-[#F8F8F8] mt-4 rounded-md mr-2'>

<img src={bannerImg} className=' rounded-lg mt-[20px] h-auto lg:h-[329px] w-[290px] lg:w-[650px] mx-[5px] lg:mx-[20px] '></img>
<div className='flex mx-[10px] my-2'>
    {/* image */}
    <img src={postImg}  className='w-[41px] h-[41px] rounded-full'></img>
    <div className='ml-2'>
        {/* details */}
        <div className='flex justify-between w-[240px] lg:w-[600px]'>
<div className='flex justify-start'>

        <h2 className='text-[14px] lg:text-[20px] font-semibold  mt-1 lg:mt-0'>Shiblu Ahmad</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='mt-4 mx-1' >
<circle cx="2" cy="2" r="2" fill="black" fillOpacity="0.7"/>

</svg>
        <p className='text-[12px] font-normal text-[#00000099] mt-2'>10 hours ago</p>
</div>
<img src={editImg} className=' lg:justify-end'></img>
        </div>
        <p className='text-[14px] font-normal text-[#00000099]'>Sunday, Dec 12, 07:10 AM</p>
        <h2 className='text-[11px] lg:text-[20px] mt-[15px] font-medium text-[#000000CC]'>Successful marriage from our biyekorun app</h2>
        <div className='flex flex-col lg:flex-row'>
            <div className='flex'>

            <p className='text-[14px] font-normal text-[#F42A41] mr-[20px]'>#engagement</p>
            <p className='text-[14px] font-normal text-[#F42A41] mr-[20px]'>#wedding</p>
            </div>
            <div className='flex'>

            <p className='text-[14px] font-normal text-[#F42A41] mr-[20px]'>#marriage</p>
            <p className='text-[14px] font-normal text-[#F42A41]'>#marry</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row mt-[10px] justify-between w-[250px] lg:w-[600px] '>
           
{/* comments */}
            <div className='flex mr-[50px] justify-start'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"  className='mr-1'>
<g clipPath="url(#clip0_1692_7126)">
<path d="M12.3106 11.2202L12.5706 13.3268C12.6373 13.8802 12.044 14.2668 11.5706 13.9802L8.77729 12.3202C8.47062 12.3202 8.17062 12.3002 7.87729 12.2602C8.38261 11.6744 8.66165 10.9271 8.66396 10.1535C8.66396 8.26016 7.02396 6.72683 4.99729 6.72683C4.22396 6.72683 3.51062 6.94683 2.91729 7.3335C2.89729 7.16683 2.89062 7.00016 2.89062 6.82683C2.89062 3.7935 5.52396 1.3335 8.77729 1.3335C12.0306 1.3335 14.664 3.7935 14.664 6.82683C14.664 8.62683 13.7373 10.2202 12.3106 11.2202Z" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.66927 10.1532C8.66927 10.9466 8.37594 11.6799 7.88261 12.2599C7.22261 13.0599 6.17594 13.5732 5.0026 13.5732L3.2626 14.6066C2.96927 14.7866 2.59594 14.5399 2.63594 14.1999L2.8026 12.8866C1.90927 12.2666 1.33594 11.2732 1.33594 10.1532C1.33594 8.97989 1.9626 7.94656 2.9226 7.33323C3.51594 6.94656 4.22927 6.72656 5.0026 6.72656C7.02927 6.72656 8.66927 8.2599 8.66927 10.1532Z" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1692_7126">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
<p className='text-[14px] font-normal text-[#636363]'> 120 Comments</p>
            </div>
            {/* liked */}
            <div className='flex ml-[150px] lg:ml-0 -mt-5 lg:-mt-0 mr-[50px]  justify-center '>
                <img src={heartImg}  className=' w-[24px] h-[24] mr-1'></img>
                <p className='text-[14px] font-medium text-[#636363]'>Liked 120</p>
            </div>
           
            {/* read */}
            <div>
<p className='text-[14px] font-medium text-[#636363] justify-end'>10 minute read</p>
            </div>
        </div>
    </div>
</div>
</div>
 {/* second post */}
 <div className='bg-[#F8F8F8] w-[300px]  lg:w-[680px]  border-[1px] border-[rgba(0, 0, 0, 0.10)]  h-[230px] mt-[50px] lg:mt-[30px] rounded-lg mr-2'>
 <div className='flex my-[30px] mx-[10px] my-2'>
     {/* image */}
     <img src={postImg}  className='w-[41px] h-[41px] rounded-full'></img>
     <div className='ml-2'>
        {/* details */}
        <div className='flex justify-between w-[240px] lg:w-[600px]'>
<div className='flex justify-start'>

        <h2 className='text-[14px] lg:text-[20px] font-semibold  mt-1 lg:mt-0'>Shiblu Ahmad</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='mt-4 mx-1' >
<circle cx="2" cy="2" r="2" fill="black" fillOpacity="0.7"/>

</svg>
        <p className='text-[12px] font-normal text-[#00000099] mt-2'>10 hours ago</p>
</div>
<img src={editImg} className=' lg:justify-end'></img>
        </div>
        <p className='text-[14px] font-normal text-[#00000099]'>Sunday, Dec 12, 07:10 AM</p>
        <h2 className='text-[11px] lg:text-[20px] mt-[15px] font-medium text-[#000000CC]'>Successful marriage from our biyekorun app</h2>
        <div className='flex flex-col lg:flex-row'>
            <div className='flex'>

            <p className='text-[14px] font-normal text-[#F42A41] mr-[20px]'>#engagement</p>
            <p className='text-[14px] font-normal text-[#F42A41] mr-[20px]'>#wedding</p>
            </div>
            <div className='flex'>

            <p className='text-[14px] font-normal text-[#F42A41] mr-[20px]'>#marriage</p>
            <p className='text-[14px] font-normal text-[#F42A41]'>#marry</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row mt-[10px] justify-between w-[250px] lg:w-[600px] '>
           
{/* comments */}
            <div className='flex mr-[50px] justify-start'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"  className='mr-1'>
<g clipPath="url(#clip0_1692_7126)">
<path d="M12.3106 11.2202L12.5706 13.3268C12.6373 13.8802 12.044 14.2668 11.5706 13.9802L8.77729 12.3202C8.47062 12.3202 8.17062 12.3002 7.87729 12.2602C8.38261 11.6744 8.66165 10.9271 8.66396 10.1535C8.66396 8.26016 7.02396 6.72683 4.99729 6.72683C4.22396 6.72683 3.51062 6.94683 2.91729 7.3335C2.89729 7.16683 2.89062 7.00016 2.89062 6.82683C2.89062 3.7935 5.52396 1.3335 8.77729 1.3335C12.0306 1.3335 14.664 3.7935 14.664 6.82683C14.664 8.62683 13.7373 10.2202 12.3106 11.2202Z" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.66927 10.1532C8.66927 10.9466 8.37594 11.6799 7.88261 12.2599C7.22261 13.0599 6.17594 13.5732 5.0026 13.5732L3.2626 14.6066C2.96927 14.7866 2.59594 14.5399 2.63594 14.1999L2.8026 12.8866C1.90927 12.2666 1.33594 11.2732 1.33594 10.1532C1.33594 8.97989 1.9626 7.94656 2.9226 7.33323C3.51594 6.94656 4.22927 6.72656 5.0026 6.72656C7.02927 6.72656 8.66927 8.2599 8.66927 10.1532Z" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1692_7126">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
<p className='text-[14px] font-normal text-[#636363]'> 120 Comments</p>
            </div>
            {/* liked */}
            <div className='flex ml-[150px] lg:ml-0 -mt-5 lg:-mt-0 mr-[50px]  justify-center '>
                <img src={heartImg}  className=' w-[24px] h-[24] mr-1'></img>
                <p className='text-[14px] font-medium text-[#636363]'>Liked 120</p>
            </div>
           
            {/* read */}
            <div>
<p className='text-[14px] font-medium text-[#636363] justify-end '>10 minute read</p>
            </div>
        </div>
    </div>
 </div>
 </div>
 {/* third post */}
 <div className='bg-[#F8F8F8] w-[300px]  lg:w-[680px] border-[1px] border-[rgba(0, 0, 0, 0.10)]  h-[230px] mt-[50px] lg:mt-[30px] rounded-lg mr-2'>
 <div className='flex my-[30px] mx-[10px] my-2'>
     {/* image */}
     <img src={postImg}  className='w-[41px] h-[41px] rounded-full'></img>
     <div className='ml-2'>
        {/* details */}
        <div className='flex justify-between w-[240px] lg:w-[600px]'>
<div className='flex justify-start'>

        <h2 className='text-[14px] lg:text-[20px] font-semibold  mt-1 lg:mt-0'>Shiblu Ahmad</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='mt-4 mx-1' >
<circle cx="2" cy="2" r="2" fill="black" fillOpacity="0.7"/>

</svg>
        <p className='text-[12px] font-normal text-[#00000099] mt-2'>10 hours ago</p>
</div>
<img src={editImg} className=' lg:justify-end'></img>
        </div>
        <p className='text-[14px] font-normal text-[#00000099]'>Sunday, Dec 12, 07:10 AM</p>
        <h2 className='text-[11px] lg:text-[20px] mt-[15px] font-medium text-[#000000CC]'>Successful marriage from our biyekorun app</h2>
        <div className='flex flex-col lg:flex-row'>
            <div className='flex'>

            <p className='text-[14px] font-normal text-[#F42A41] mr-[20px]'>#engagement</p>
            <p className='text-[14px] font-normal text-[#F42A41] mr-[20px]'>#wedding</p>
            </div>
            <div className='flex'>

            <p className='text-[14px] font-normal text-[#F42A41] mr-[20px]'>#marriage</p>
            <p className='text-[14px] font-normal text-[#F42A41]'>#marry</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row mt-[10px] justify-between w-[250px] lg:w-[600px] '>
           
{/* comments */}
            <div className='flex mr-[50px] justify-start'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"  className='mr-1'>
<g clipPath="url(#clip0_1692_7126)">
<path d="M12.3106 11.2202L12.5706 13.3268C12.6373 13.8802 12.044 14.2668 11.5706 13.9802L8.77729 12.3202C8.47062 12.3202 8.17062 12.3002 7.87729 12.2602C8.38261 11.6744 8.66165 10.9271 8.66396 10.1535C8.66396 8.26016 7.02396 6.72683 4.99729 6.72683C4.22396 6.72683 3.51062 6.94683 2.91729 7.3335C2.89729 7.16683 2.89062 7.00016 2.89062 6.82683C2.89062 3.7935 5.52396 1.3335 8.77729 1.3335C12.0306 1.3335 14.664 3.7935 14.664 6.82683C14.664 8.62683 13.7373 10.2202 12.3106 11.2202Z" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.66927 10.1532C8.66927 10.9466 8.37594 11.6799 7.88261 12.2599C7.22261 13.0599 6.17594 13.5732 5.0026 13.5732L3.2626 14.6066C2.96927 14.7866 2.59594 14.5399 2.63594 14.1999L2.8026 12.8866C1.90927 12.2666 1.33594 11.2732 1.33594 10.1532C1.33594 8.97989 1.9626 7.94656 2.9226 7.33323C3.51594 6.94656 4.22927 6.72656 5.0026 6.72656C7.02927 6.72656 8.66927 8.2599 8.66927 10.1532Z" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1692_7126">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
<p className='text-[14px] font-normal text-[#636363]'> 120 Comments</p>
            </div>
            {/* liked */}
            <div className='flex ml-[150px] lg:ml-0 -mt-5 lg:-mt-0 mr-[50px]  justify-center '>
                <img src={heartImg}  className=' w-[24px] h-[24] mr-1'></img>
                <p className='text-[14px] font-medium text-[#636363]'>Liked 120</p>
            </div>
           
            {/* read */}
            <div>
<p className='text-[14px] font-medium text-[#636363] justify-end'>10 minute read</p>
            </div>
        </div>
    </div>
 </div>
 </div>
       
</div>
                </div>
                  {/* second post */}
                  <div className='w-[300px] my-4 h-[1030px] bg-[#F8F8F8] border-[1px] border-[rgba(0, 0, 0, 0.10)] rounded-lg'>
{/*trendy title */}
<div>

<h1 className='text-[24px] font-semibold text-[#000000CC] ml-[30px] mt-[20px]'>Trendy Post</h1>
{/* post  1*/}
<div className='border-1 mt-[10px] ml-[30px] flex w-[262px] h-[100px] bg-[#FFFFFF] rounded-xl'> 
<img src={img} className='w-[70px] h-[70px] rounded-lg m-4'></img>
<div className='my-4'>
<h3 className='text-[16px] font-medium w-[147px]'>Connect with our social media</h3>
<div className='flex '>
<img src={postImg} className='w-[19px] h-[19px] rounded-full mr-2'></img>
<p className='text-[12px] font-normal text-[#636363]'>Shiblu Ahmad</p>
</div>
</div>
</div>
{/* post  2*/}
<div className='border-1 mt-[20px] ml-[30px] flex w-[262px] h-[100px] bg-[#FFFFFF] rounded-xl'> 
<img src={img} className='w-[70px] h-[70px] rounded-lg m-4'></img>
<div className='my-4'>
<h3 className='text-[16px] font-medium w-[147px]'>Connect with our social media</h3>
<div className='flex '>
<img src={postImg} className='w-[19px] h-[19px] rounded-full mr-2'></img>
<p className='text-[12px] font-normal text-[#636363]'>Shiblu Ahmad</p>
</div>
</div>
</div>
{/* post  3*/}
<div className='border-1 mt-[20px] ml-[30px] flex w-[262px] h-[100px] bg-[#FFFFFF] rounded-xl'> 
<img src={img} className='w-[70px] h-[70px] rounded-lg m-4'></img>
<div className='my-4'>
<h3 className='text-[16px] font-medium w-[147px]'>Connect with our social media</h3>
<div className='flex '>
<img src={postImg} className='w-[19px] h-[19px] rounded-full mr-2'></img>
<p className='text-[12px] font-normal text-[#636363]'>Shiblu Ahmad</p>
</div>
</div>
</div>
{/* post  4*/}
<div className='border-1 mt-[20px] ml-[30px] flex w-[262px] h-[100px] bg-[#FFFFFF] rounded-xl'> 
<img src={img} className='w-[70px] h-[70px] rounded-lg m-4'></img>
<div className='my-4'>
<h3 className='text-[16px] font-medium w-[147px]'>Connect with our social media</h3>
<div className='flex '>
<img src={postImg} className='w-[19px] h-[19px] rounded-full mr-2'></img>
<p className='text-[12px] font-normal text-[#636363]'>Shiblu Ahmad</p>
</div>
</div>
</div>
</div>
<hr className=' w-[230px] mx-auto text-[#FFFFFF] my-[30px]'></hr>
{/* popular post */}
<div>

<h1 className='text-[24px] font-semibold text-[#000000CC] ml-[30px] mt-[20px]'>Popular Post</h1>
{/* post  1*/}
<div className='border-1 mt-[20px] ml-[30px] flex w-[262px] h-[100px] bg-[#FFFFFF] rounded-xl'> 
<img src={img} className='w-[70px] h-[70px] rounded-lg m-4'></img>
<div className='my-4'>
<h3 className='text-[16px] font-medium w-[147px]'>Connect with our social media</h3>
<div className='flex '>
<img src={postImg} className='w-[19px] h-[19px] rounded-full mr-2'></img>
<p className='text-[12px] font-normal text-[#636363]'>Shiblu Ahmad</p>
</div>
</div>
</div>
{/* post  2*/}
<div className='border-1 mt-[20px] ml-[30px] flex w-[262px] h-[100px] bg-[#FFFFFF] rounded-xl'> 
<img src={img} className='w-[70px] h-[70px] rounded-lg m-4'></img>
<div className='my-4'>
<h3 className='text-[16px] font-medium w-[147px]'>Connect with our social media</h3>
<div className='flex '>
<img src={postImg} className='w-[19px] h-[19px] rounded-full mr-2'></img>
<p className='text-[12px] font-normal text-[#636363]'>Shiblu Ahmad</p>
</div>
</div>
</div>

{/* post  3*/}
<div className='border-1 mt-[20px] ml-[30px] flex w-[262px] h-[100px] bg-[#FFFFFF] rounded-xl'> 
<img src={img} className='w-[70px] h-[70px] rounded-lg m-4'></img>
<div className='my-4'>
<h3 className='text-[16px] font-medium w-[147px]'>Connect with our social media</h3>
<div className='flex '>
<img src={postImg} className='w-[19px] h-[19px] rounded-full mr-2'></img>
<p className='text-[12px] font-normal text-[#636363]'>Shiblu Ahmad</p>
</div>
</div>
</div>

</div>
</div>
               
            </div>
        </div>
    );
};

export default Card;