import React from 'react';
import logo from '../../../../public/image/Group.svg'
import calendar from '../../../../public/image/calendar-2.svg'
import heart from '../../../../public/image/heart.svg'
import box from '../../../../public/image/box.svg'
import clipboard from '../../../../public/image/clipboard-text.svg'
import group from '../../../../public/image/Group (1).svg'
import group2 from '../../../../public/image/Group (3).svg'
import layer from '../../../../public/image/layer.svg'
import dollar from '../../../../public/image/dollar-circle.svg'
import social from '../../../../public/image/personalcard.svg'
import message from '../../../../public/image/messages-2.svg'
import profile from '../../../../public/image/profile-2user.svg'
import Blog from '../Blog';
import './SidebarCss.css'


const Sidebar = () => {
    return (
        <div className='flex flex-col  lg:flex-row'>
{/* sidebar */}
        <div className='mx-[20px]  my-[30px] flex  w-[292px]  lg:h-[1280px] bg-[#FFFFFF] rounded-3xl'>
            <div>

            <img src={logo} className='w-[200px] h-[50px] mt-[40px] mx-[45px]' ></img>
           
            <hr className='w-[292px] text-[#575A611A] mt-[30px] '></hr>
            <div className='flex mt-[30px] mx-[45px]'>

            <p className='text-sm font-normal text-[#575A61B2] mr-2'>Main Menu </p>
            <hr className='w-[23px] text-[#575A611A] mt-2'></hr>
            </div>
            {/* dashboard */}
            <div className='flex mt-[30px] mx-[45px] p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10ZM17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10ZM17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22ZM5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#636363" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  <h3 className='text-[#636363] text-base font-normal w-[83px] ml-3'>Dashboard</h3>
            </div>
            {/* users */}
            <div className='flex mt-[20px] mx-[45px] p-3'>
           <img src={profile} className='w-[24px] h-[24px] text-gray-600'></img>
  <h3 className='text-[#636363] text-base font-normal w-[83px] ml-3'>Users</h3>
            </div>
            {/* chat */}
            <div className='flex mt-[20px] mx-[45px] p-3'>
           <img src={message} className='w-[24px] h-[24px] text-gray-600'></img>
  <h3 className='text-[#636363] text-base font-normal w-[83px] ml-3'>Chat</h3>
            </div>
            {/* social event */}
            <div className='flex mt-[20px] mx-[45px] p-3'>
           <img src={social} className='w-[24px] h-[24px] text-gray-600'></img>
  <h3 className='text-[#636363] text-base font-normal w-[83px] ml-3'>Be Social</h3>
            </div>
            {/* event */}
            <div className='flex mt-[20px] mx-[45px] p-3'>
                <div className='flex'>
           <img src={calendar} className='w-[24px] h-[24px] '></img>
           <img src={heart} className='w-[10px] h-[10px] text-gray-600 -ml-3.5 mt-2.5'></img>
                </div>
  <h3 className='text-[#636363] text-base font-normal w-[83px] ml-3'>Events</h3>
            </div>
{/* package */}
            <div className='flex mt-[20px] mx-[45px] p-3'>
           <img src={box} className='w-[24px] h-[24px]'></img>
  <h3 className='text-[#636363] text-base font-normal w-[83px] ml-3'>Package</h3>
            </div>
            {/* dollar circle */}
            <div className='flex mt-[20px] mx-[45px] p-3'>
           <img src={dollar} className='w-[24px] h-[24px]'></img>
  <h3 className='text-[#636363] text-base font-normal w-[83px] ml-3'>Payment</h3>
            </div>
 {/* portal management */}
            <div className='flex mt-[20px] ml-[45px] p-3'>
           <img src={layer} className='w-[24px] h-[24px]'></img>
                <div className='flex'>

  <h3 className='text-[#636363] text-base font-normal w-[83px] ml-3 w-full'>Portal Management</h3>
           <img src={group} className='w-[10px] h-[7px] mt-3 ml-3'></img>
                </div>
            </div>
            {/* clipboard */}
            <div className='ml-[45px] mt-[20px]  '>

            <svg xmlns="http://www.w3.org/2000/svg" width="232" height="50" viewBox="0 0 232 50" fill="none">
  <path d="M232 10C232 4.47715 227.523 0 222 0H10C4.47716 0 0 4.47715 0 10V40C0 45.5228 4.47716 50 10 50H222C227.523 50 232 45.5228 232 40V10Z" fill="url(#paint0_linear_1692_7008)"/>
  <defs>
    <linearGradient id="paint0_linear_1692_7008" x1="202.356" y1="81" x2="-143.393" y2="7.09339" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FD282B"/>
      <stop offset="0.430187" stopColor="#CC176A"/>
    </linearGradient>
  </defs>
</svg>
            <div className='flex mt-[20px]  p-3 -mt-16'>
           <img src={clipboard} className='w-[24px] h-[24px] -mt-[70px]'></img>
                <div className='flex'>

  <h3 className='text-[#FFFFFF] text-base font-normal -mt-[70px] w-[83px] ml-3 w-full'>Content Management

  </h3>
  <img src={group2} className='w-[24] h-[24] -mt-[110px] ml-[4px]'></img>
  

                </div>
            </div>
            </div>
            {/* Documentations */}
            <div className='flex -mt-[20px] mx-[45px] p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <circle cx="8" cy="8" r="8" fill="#636363"/>
</svg>
  <h3 className='text-[#636363] text-base font-normal w-[83px] ml-3'>Documentations</h3>
            </div>
            {/* blog */}
            <div className='flex mt-[20px] mx-[45px] p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <circle cx="8" cy="8" r="8" fill="url(#paint0_linear_1692_7070)"/>
  <defs>
    <linearGradient id="paint0_linear_1692_7070" x1="2.04444" y1="25.92" x2="26.9259" y2="24.7737" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FD282B"/>
      <stop offset="0.430187" stopColor="#CC176A"/>
    </linearGradient>
  </defs>
</svg>
  <h3 className='text-[#FD282B] text-base font-normal w-[83px] ml-3' >Blog</h3>
            </div>
            {/* support */}
            <div className='flex mt-[20px] mx-[45px] p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.08984 9.00008C9.32495 8.33175 9.789 7.76819 10.3998 7.40921C11.0106 7.05024 11.7287 6.91902 12.427 7.03879C13.1253 7.15857 13.7587 7.52161 14.2149 8.06361C14.6712 8.60561 14.9209 9.2916 14.9198 10.0001C14.9198 12.0001 11.9198 13.0001 11.9198 13.0001" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 17H12.01" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  <h3 className='text-[#636363] text-base font-normal w-[83px] ml-3'>Support</h3>
            </div>
            {/* log out */}
            <div className='flex mt-[170px] ml-[50px] p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z" fill="#F42A41"/>
</svg>
  <h3 className='text-[#F42A41] text-[18px]  font-medium w-[83px] ml-3'>Log Out</h3>
            </div>

            </div>
        </div>
        {/* blog page */}
        <Blog></Blog>
       
        </div>
    );
};

export default Sidebar;