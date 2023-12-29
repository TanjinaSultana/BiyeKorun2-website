import React from 'react';
import author from '../../../public/image/Ellipse 1.svg'
import group from '../../../public/image/Group (1).svg'
import Card from './Card/Card';

const Blog = () => {
    return (
        <div>
     {/* blog nav */}
            <div className='flex   justify-between'>
             <h1 className='font-semibold text-[30px] mt-[37px]  lg:justify-start'>Blog</h1>
             <div className="lg:justify-end mt-[37px]">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator h-[50px] w-[50px] bg-[#FFFFFF] rounded-full p-3.5 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='  '>
      <path d="M5.31328 12.9153L4.56806 12.8307L4.56806 12.8307L5.31328 12.9153ZM5.76046 8.97519L6.50568 9.05977L5.76046 8.97519ZM4.44779 14.8721L3.87668 14.386H3.87668L4.44779 14.8721ZM19.4319 12.8307C19.3852 12.4191 19.0137 12.1233 18.6021 12.17C18.1906 12.2168 17.8948 12.5883 17.9415 12.9998L19.4319 12.8307ZM19.5522 14.8721L18.9811 15.3583L19.5522 14.8721ZM9.73005 4.37366L9.973 5.08322C10.2763 4.97938 10.4801 4.69424 10.4801 4.37366H9.73005ZM13.1539 3.28059C13.4237 3.59487 13.8973 3.6309 14.2115 3.36107C14.5258 3.09125 14.5618 2.61774 14.292 2.30347L13.1539 3.28059ZM15.7023 20.2632C15.8477 19.8753 15.6511 19.4431 15.2632 19.2977C14.8753 19.1523 14.4431 19.3489 14.2977 19.7368L15.7023 20.2632ZM9.7023 19.7368C9.55694 19.3489 9.12467 19.1523 8.7368 19.2977C8.34893 19.4431 8.15234 19.8753 8.2977 20.2632L9.7023 19.7368ZM17.7772 17.25H6.22281V18.75H17.7772V17.25ZM6.05849 12.9998L6.50568 9.05977L5.01525 8.89061L4.56806 12.8307L6.05849 12.9998ZM5.01889 15.3583C5.59621 14.6801 5.96028 13.8652 6.05849 12.9998L4.56806 12.8307C4.50519 13.3846 4.27067 13.9231 3.87668 14.386L5.01889 15.3583ZM17.9415 12.9998C18.0397 13.8652 18.4038 14.6801 18.9811 15.3583L20.1233 14.386C19.7293 13.9231 19.4948 13.3846 19.4319 12.8307L17.9415 12.9998ZM6.22281 17.25C5.56777 17.25 5.10443 16.926 4.89056 16.5492C4.68409 16.1854 4.68714 15.748 5.01889 15.3583L3.87668 14.386C3.11141 15.285 3.08777 16.4116 3.58598 17.2895C4.07679 18.1544 5.04947 18.75 6.22281 18.75V17.25ZM17.7772 18.75C18.9505 18.75 19.9232 18.1544 20.414 17.2895C20.9122 16.4116 20.8886 15.285 20.1233 14.386L18.9811 15.3583C19.3129 15.748 19.3159 16.1854 19.1094 16.5492C18.8956 16.926 18.4322 17.25 17.7772 17.25V18.75ZM10.4801 4.37366V4.26995H8.98005V4.37366H10.4801ZM6.50568 9.05977C6.7087 7.27101 8.05587 5.73962 9.973 5.08322L9.48711 3.6641C7.11944 4.47476 5.29449 6.43026 5.01525 8.89061L6.50568 9.05977ZM12 1.25C10.3321 1.25 8.98005 2.60208 8.98005 4.26995H10.4801C10.4801 3.4305 11.1606 2.75 12 2.75V1.25ZM12 2.75C12.4613 2.75 12.874 2.95459 13.1539 3.28059L14.292 2.30347C13.7393 1.65971 12.9171 1.25 12 1.25V2.75ZM14.2977 19.7368C13.975 20.5979 13.0846 21.25 12 21.25V22.75C13.6855 22.75 15.1516 21.7325 15.7023 20.2632L14.2977 19.7368ZM12 21.25C10.9154 21.25 10.025 20.5979 9.7023 19.7368L8.2977 20.2632C8.84835 21.7325 10.3145 22.75 12 22.75V21.25Z" fill="black" fillOpacity="0.7"/>
      <path d="M21 7C21 8.65685 19.6569 10 18 10C16.3431 10 15 8.65685 15 7C15 5.34315 16.3431 4 18 4C19.6569 4 21 5.34315 21 7Z" fill="#0BC908" stroke="#0BC908" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
          </div>
        </button>
        <div className="rounded avatar  w-[167px] h-[50px] bg-[#FFFFFF]  mx-4 p-2">
            <div className=" flex ">
              <img alt="UserImage" src={author}  className=' w-[117px] h-[78px]'/>
            </div>
          

              <h4 className='text-[12px] font-medium text-[#575A61E5]  mt-2 mx-2'>Shiblu Ahmad</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" className='mt-3'>
  <path d="M5.47108 5.20833C5.3097 5.20833 5.14833 5.14581 5.02529 5.02102L1.15347 1.09229C0.907175 0.842373 0.907175 0.437176 1.15347 0.187361C1.39967 -0.0624538 1.79892 -0.0624538 2.04524 0.187361L5.47108 3.66372L8.89694 0.187483C9.14323 -0.0623324 9.54244 -0.0623324 9.78862 0.187483C10.035 0.437298 10.035 0.842494 9.78862 1.09241L5.91686 5.02114C5.79376 5.14595 5.6324 5.20833 5.47108 5.20833Z" fill="#636363" className=''/>
</svg>
           
      </div>
    </div>
            </div>
            {/* content */}
            <div className='bg-[#FFFFFF] h-0 lg:h-[1180px] rounded-lg my-8'>
                {/* content nav */}
              

                <div className=' '>

              <div className='flex flex-col lg:flex-row justify-between my-4 mx-[10px] '>
                <h1 className='text-[24px] font-semibold justify-start mt-14 lg:mt-5'>Blog Post</h1>
               <div className='justify-end'>
                <div className='flex flex-col lg:flex-row'>
                    {/* create blog button */}
                <div className=' btn w-[176px] h-[40px] rounded lg bg-[#076A49] mt-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clipPath="url(#clip0_1944_22793)">
    <path d="M7.9987 14.6667C11.6806 14.6667 14.6654 11.6819 14.6654 8.00004C14.6654 4.31814 11.6806 1.33337 7.9987 1.33337C4.3168 1.33337 1.33203 4.31814 1.33203 8.00004C1.33203 11.6819 4.3168 14.6667 7.9987 14.6667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 5.33337V10.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33203 8H10.6654" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1944_22793">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
        <button className='text-[#FFFFFF]'>Create New Blog</button>
                </div>
                {/* search button */}
                <div className='w-[300px] h-[40px] rounded-lg border-[1px] border-[rgba(0, 0, 0, 0.10)] rounded-lg bg-[#F8F8F8] flex justify-between mx-[10px] mt-5'>
      <h4 className='text-xs font-medium text-[#00000080]  ml-2 justify-start my-3.5'>Search...</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='justify-end my-3.5 mr-4'>
  <g clipPath="url(#clip0_1692_7087)">
    <path d="M14.6654 14.6654L13.332 13.332M7.66536 13.9987C8.49707 13.9987 9.32063 13.8349 10.089 13.5166C10.8574 13.1983 11.5556 12.7318 12.1437 12.1437C12.7318 11.5556 13.1983 10.8574 13.5166 10.089C13.8349 9.32063 13.9987 8.49707 13.9987 7.66536C13.9987 6.83366 13.8349 6.0101 13.5166 5.2417C13.1983 4.47331 12.7318 3.77513 12.1437 3.18702C11.5556 2.59892 10.8574 2.13241 10.089 1.81413C9.32063 1.49585 8.49707 1.33203 7.66536 1.33203C5.98566 1.33203 4.37475 1.99929 3.18702 3.18702C1.99929 4.37475 1.33203 5.98566 1.33203 7.66536C1.33203 9.34507 1.99929 10.956 3.18702 12.1437C4.37475 13.3314 5.98566 13.9987 7.66536 13.9987V13.9987Z" stroke="#636363" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1692_7087">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
    {/* Filter */}
    <div className='btn w-[86px] h-[40px] rounded lg bg-[#076A49]  mt-4' style={{background:" linear-gradient(87deg, #FD282B 9.48%, #CC176A 73.57%)"}}>
<div className='flex gap-2 my-[14px]'>

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.6654 2H1.33203L6.66536 8.30667V12.6667L9.33203 14V8.30667L14.6654 2Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        <button className='text-[#FFFFFF] text-xs font-normal'>Filter</button>
</div>
<div>

</div>
               
                </div>

                </div>

               </div>
              </div>
                </div>
              <Card></Card>
                </div>
            </div>
       
    );
};

export default Blog;