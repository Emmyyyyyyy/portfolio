/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import axios from 'axios'

import flower from './images/Group 15.png'
import flower2 from './images/Group 44.png'
import water from './images/Group 22.png'
import dada from './images/dada-logo-horizontal-white.png'
import weatherApp from './images/WeatherApp.png'
import discord from './images/discord (2).png'
import linkedin from './images/linkedin.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = 'service_9x3qjrx';
    const templateId = 'template_cwjhw32';
    const publicKey = 'eKtWnvL6NpswzSJq8';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Apinya Suthisophaarporn(Emmy)',
        message: message,
      }
    };

    try {
      setLoading(true)
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);

      setLoading(false)
      setDone(true)

      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => {
        setDone(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="overflow-x-hidden">
      {/* navbar sticky top-0 bg-[#FAF0E4] z-10*/}
      {!isMenuOpen && (
        <div className="text-[#FF8551] flex items-center py-[30px] px-[62px] lg:px-[25px] lg:py-[20px]">
          <a href='#Greeting'>
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="53" viewBox="0 0 49 53" fill="none">
              <path d="M19.5694 9.85831C10.3701 11.7866 10.7384 20.6144 12.0725 24.7872C14.0453 32.0184 23.5339 33.4777 27.879 30.564C33.9878 26.4678 33.4914 20.741 32.2844 16.9949C31.4671 14.458 28.7686 7.93 19.5694 9.85831Z" stroke="#FF8551" stroke-width="1.5"/>
              <path d="M12.3151 15.5818C10.754 12.9389 4.68315 7.51606 1.67512 14.5216C-1.32483 21.5082 6.37297 22.1756 11.031 21.5082C7.45565 21.6417 0.712873 23.078 2.34443 27.755C4.38387 33.6014 9.97348 32.9607 13.0704 27.755" stroke="#FF8551" stroke-width="1.5"/>
              <path d="M12.0857 15.3377C11.2952 12.5703 5.66124 4.67991 12.0857 2.52158C17.6043 0.667554 19.4967 6.98208 19.7662 9.51007C20.0716 6.52971 20.8761 0.597521 25.6752 1.02158C32.3761 1.61367 28.6708 8.07313 28.3474 10.4681" stroke="#FF8551" stroke-width="1.5"/>
              <path d="M27.7005 11.1455C30.1176 7.88866 34.9309 3.90964 38.3754 8.90708C41.8198 13.9045 36.0952 17.804 33.1997 19.5393C35.7175 18.685 40.5997 18.486 40.7206 23.4835C40.8414 28.4809 33.7194 28.4607 30.7736 28.1136" stroke="#FF8551" stroke-width="1.5"/>
              <path d="M13.3934 28.0279C12.5871 31.8636 13.0323 40.0216 22.6752 40.0216C29.4159 40.0216 29.8188 34.3382 29.399 30.0857M29.399 30.0857C29.2719 28.7992 30.9729 29.0302 30.6296 28.0279C36.2069 35.8591 45.0534 51.5216 35.8205 51.5216C24.2795 51.5216 24.3299 46.5671 26.7994 45.768C29.2688 44.9689 34.688 47.0868 35.8205 47.0868C36.7556 47.0868 37.0805 46.3274 35.8205 43.2908C34.8126 40.8615 30.4548 32.9892 29.399 30.0857Z" stroke="#FF8551" stroke-width="1.5"/>
              <path d="M46.3059 28.3865C37.766 27.0146 36.1948 33.5198 36.2757 37.0353C44.3603 39.9393 47.5166 32.9493 47.5166 29.6613C47.5166 29.0498 47.1146 28.5008 46.3059 28.3865Z" stroke="#FF8551" stroke-width="1.5"/>
            </svg>
          </a>
          <div className="ml-auto flex gap-[35px]">
            <a className='md:hidden' href="#About">
              About
            </a>
            <a className='md:hidden' href="#Work">
              Works
            </a>
            <a className='md:hidden' href="#Projects">
              Projects
            </a>
            <a className='md:hidden' href="#Awards">
              Awards
            </a>
            <a className='md:hidden' href="https://drive.google.com/file/d/1qGsc7dzmzc0DwLpPlW1EJ2ZTxCwwBM4b/view?usp=sharing" target='_blank' rel="noreferrer">
              Portfolio
            </a>
            <a className='md:hidden' href="#Contact">
              Contact
            </a>
            <svg 
              onClick={() => {setIsMenuOpen(!isMenuOpen);}} 
              className='hidden md:block' 
              xmlns="http://www.w3.org/2000/svg" 
              width="25" height="23" viewBox="0 0 25 23" fill="none"
            >
              <rect y="4" width="20" height="3" rx="1.5" fill="#AFC8AD"/>
              <rect y="12" width="20" height="3" rx="1.5" fill="#FF8551"/>
              <rect y="20" width="20" height="3" rx="1.5" fill="#FF8551"/>
              <path d="M14.8855 3.10204C14.8236 3.3114 14.7218 3.51506 14.5946 3.69678C14.4343 4.1776 13.3028 4.21615 12.9137 4.21615C12.4323 4.21615 12 4.64978 12 5.12984C12 5.81669 12.3358 6.23207 12.9137 6.60354C13.4558 6.95204 14.0691 7.08169 14.0691 7.81197C14.0691 8.29673 13.8814 8.90453 14.1103 9.3623C14.4565 10.0546 15.3271 9.99893 15.9908 9.99893C16.7715 9.99893 17.8352 9.62534 18.1659 8.84356C18.4325 8.21347 19.1647 8.30587 19.6809 8.50166C20.1799 8.69093 20.6134 9.13732 21.1369 9.2444C21.5576 9.33045 22.0385 9.22297 22.3866 8.99092C22.5868 8.85746 22.9359 8.42707 22.982 8.18334C23.0564 7.78974 22.864 7.14509 22.8228 6.81575C22.8057 6.5081 22.7691 6.0921 22.9289 5.81953C23.1908 5.37274 23.5299 5.00446 23.8426 4.58752C24.2626 4.02751 24.6198 3.07253 24.043 2.4654C23.6992 2.10345 23.2864 1.82876 22.7816 1.82876C22.1688 1.82876 21.6448 2.06294 21.0839 2.29445C20.0186 2.73406 18.6381 2.1863 18.0186 1.25697C17.775 0.8916 17.3746 0.253933 16.9339 0.119276C16.607 0.0193798 16.0973 -0.075447 15.7668 0.0898019C15.2142 0.366084 15.1501 0.95768 15.0898 1.5136L15.0889 1.52223C15.032 2.04663 15.0361 2.5923 14.8855 3.10204Z" fill="#FFDEDE"/>
              <path d="M17.3756 5.84024C17.7828 6.06929 18.1696 5.98219 18.6216 5.98219C18.9253 5.98219 19.7625 5.88946 19.9149 5.58474C19.9865 5.44162 19.8497 4.95646 19.7572 4.84662C19.5638 4.61693 19.4711 4.39276 19.1579 4.27883C18.5074 4.04232 17.4108 4.17296 17.0634 4.81823C16.8964 5.12835 17.0763 5.67184 17.3756 5.84024Z" fill="#FCB766"/>
            </svg>
          </div>
        </div>
      )}
      {isMenuOpen && (
        <div className={`flex flex-col text-center gap-[40px] items-center justify-center w-full h-screen bg-[#FAF0E4] text-[#FF8551] fixed top-0 right-0 left-0 bottom-0 z-20 ${isMenuOpen ? 'show' : 'hide'}`}>
          <svg onClick={() => {setIsMenuOpen(false);}} className='absolute top-[50px] right-[50px]' xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path d="M5.64478 8.9131C5.66009 9.11973 5.64478 9.33315 5.64478 9.54031C5.43453 10.2236 2.76805 12.7566 2.30852 13.2997C2.06462 13.5262 0.453028 14.8725 0.277505 15.1845C0.128272 15.4498 -3.85627e-05 15.5561 0 16.1221C8.69393e-09 16.9177 0.799927 16.7342 1.32615 16.7342C1.67471 16.7342 1.51388 17.2732 1.53018 17.5504C1.56902 18.2106 2.55564 18.1201 3.0264 18.0907C3.52141 18.0597 3.83321 17.7739 4.19768 17.4823C4.65568 17.1159 5.2302 16.8352 5.64478 16.4206C6.07004 15.9954 6.44358 15.5517 6.91808 15.17C7.29468 14.8671 7.57798 14.4699 8.00623 14.233C8.47223 13.9752 9.34969 14.0235 9.85761 14.1196C10.37 14.2166 10.9762 14.3935 11.3878 14.7279C12.1857 15.3762 12.9706 16.101 13.6511 16.8703C14.2558 17.5539 15.0625 18.2448 15.8803 18.6536C16.0916 18.7593 17.1706 19.4078 17.3765 18.6007C17.3765 18.0711 17.2409 18.1219 17.1705 17.5978C17.1302 17.2976 17.5166 17.1361 17.7468 17.1423C18.3297 17.1581 19.1447 16.9264 19.1447 16.1939C19.1447 15.2346 18.7512 14.664 17.9886 14.1159C16.9726 13.3856 15.8226 12.8603 14.7921 12.1473C14.2224 11.7532 13.2426 11.2856 13.2279 10.4773C13.2158 9.8134 13.3653 9.19677 13.6699 8.61084C13.9352 8.10076 14.3258 7.86086 14.7921 7.55291C15.704 6.95069 16.711 6.51059 17.5012 5.72042C18.0813 5.14031 18.8423 3.94758 18.9805 3.11806C18.9805 3.11806 19.1661 2.38427 18.9805 1.91142C18.7859 1.41564 18.4918 1.40596 17.9886 1.44713C17.4949 1.48752 17.0714 1.5942 16.6019 1.73051C16.4914 1.76259 16.134 1.84093 16.0314 1.75695C15.898 1.64784 16.014 1.1307 15.8463 0.925722C15.6367 0.669612 15.1493 0.728719 14.8526 0.755698C13.8312 0.848549 12.9936 1.87118 12.4798 2.6562C12.0808 3.26579 11.9046 3.96743 11.5314 4.58314C11.1316 5.2429 10.598 5.71816 10.0465 6.24561C9.26549 6.99269 8.27426 6.03933 7.8551 5.41059C6.76599 3.77693 5.85142 1.86365 4.44016 0.486815C3.92783 -0.0130177 3.35778 -0.101581 2.6908 0.101413C2.43806 0.178332 2.08747 1.01666 2.08747 1.30808C2.08747 2.0043 2.26004 2.00057 2.27829 2.69398C2.27976 2.74997 1.9619 2.58819 1.79844 2.58819C0.905709 2.58819 0.510035 2.99788 0.510035 3.86526C0.510035 5.15815 1.94443 6.08567 2.84882 6.83502C3.26138 7.17686 5.70744 7.94465 5.64478 8.9131Z" fill="#FF8551"/>
            <path d="M7.53262 11.2515C8.20215 11.7047 8.8381 11.5324 9.58131 11.5324C10.0806 11.5324 11.4573 11.3489 11.7078 10.7459C11.8255 10.4627 11.6006 9.50265 11.4485 9.28531C11.1304 8.83079 10.9782 8.38721 10.463 8.16178C9.39357 7.69377 7.59045 7.95228 7.01915 9.22913C6.74458 9.84278 7.04035 10.9182 7.53262 11.2515Z" fill="#FCB766"/>
          </svg>
          <a onClick={() => {setIsMenuOpen(false);}}  href="#About">
            About
          </a>
          <a onClick={() => {setIsMenuOpen(false);}}  href="#Work">
            Works
          </a>
          <a onClick={() => {setIsMenuOpen(false);}}  href="#Projects">
            Projects
          </a>
          <a onClick={() => {setIsMenuOpen(false);}}  href="#Awards">
            Awards
          </a>
          <a onClick={() => {setIsMenuOpen(false);}}  href="https://drive.google.com/file/d/1qGsc7dzmzc0DwLpPlW1EJ2ZTxCwwBM4b/view?usp=sharing" target='_blank' rel="noreferrer">
            Portfolio
          </a>
          <a onClick={() => {setIsMenuOpen(false);}}  href="#Contact">
            Contact
          </a>
        </div>
      )}

      {/* greeting */}
      {/* style={{height: 'calc(100vh - 139.5px)'}} */}
      <div id='Greeting' className="text-[#FF8551] text-center relative pb-[20px]"> 
        <div className='px-[25px]'>
          <h1 className="mt-[26.5px]">Hi! I’m EMMY.</h1>
          <h2 className="font-normal">Full-stack Developer and Designer</h2>
          <p className="w-[719px] md:w-full mx-auto mt-[25px] leading-[45px]">In my digital garden, I sow the seeds of creativity and harvest websites and web applications that bloom with elegance and functionality.</p>
        </div>
        <div className="absolute top-0 -z-10 bf-xs:top-[350px]">
          <svg id='cloud-1' className="absolute" xmlns="http://www.w3.org/2000/svg" width="343" height="215" viewBox="0 0 343 257" fill="none">
            <path d="M-144.324 241.943C-537.493 185.474 -381.439 106.794 -381.439 106.794C-347.086 90.7314 -304.706 45.3356 -196.598 9.85754C-61.4639 -34.49 156.531 88.205 224.932 36.4661C293.333 -15.2728 452.38 187.544 224.932 182.518C-2.51657 177.491 248.845 298.413 -144.324 241.943Z" fill="#9BCDD2"/>
          </svg>
          <svg id='outline-cloud-1' className="absolute top-[20px]" xmlns="http://www.w3.org/2000/svg" width="353" height="235" viewBox="0 0 353 235" fill="none">
            <path d="M-2.70104 226.58C5.07765 218.802 16.4878 213.399 27.0614 210.756C43.3767 206.677 57.6408 208.995 72.5959 215.839C98.1963 227.554 135.352 243.843 161.412 224.641C175.124 214.538 186.32 198.607 194.633 183.928C202.191 170.58 206.9 156.991 206.684 141.694C206.459 125.678 185.686 125.988 174.616 126.603C170.144 126.852 171.787 140.188 171.787 142.533C171.787 151.79 172.133 158.857 180.799 164.331C189.789 170.008 202.875 172.271 213.077 168.627C228.713 163.043 240.944 149.741 256.725 144.105C271.265 138.912 286.723 139.787 301.316 135.092C317.879 129.763 329.801 110.599 338.991 97.2078C346.805 85.8213 355.573 68.4344 350.152 54.0836C345.526 41.8372 332.035 28.3153 321.071 21.4392C306.653 12.3979 288.598 6.81996 271.606 6.81996C266.893 6.81996 261.508 6.14368 256.882 7.23915C251.617 8.48616 245.197 14.6194 241.267 17.9285C234.776 23.3952 228.608 29.5826 222.666 35.6393C215.052 43.3991 206.9 47.9093 197.2 52.6165C170.483 65.582 138.639 69.8792 109.013 67.4977C91.5776 66.0961 74.745 60.8693 58.3959 54.8696C48.341 51.1797 37.9683 46.3116 29.367 39.8312C21.9902 34.2733 20.8784 29.6926 20.8784 20.9152C20.8784 15.2959 30.4924 9.1517 34.5021 6.61037C41.8057 1.98129 50.8872 0.43542 59.4439 1.2133C66.3829 1.84412 73.5789 14.6135 75.1111 20.1292C76.3912 24.7375 77.7043 31.339 76.3162 36.0585C74.915 40.8225 67.6774 45.4435 63.793 47.8482C57.418 51.7945 50.7415 54.7902 43.0955 54.922C33.5191 55.0871 23.2231 54.6802 14.3285 50.6777C10.5252 48.9662 7.08311 49.2629 2.95802 49.2629C-3.34225 49.2629 -6.20145 50.6534 -11.1896 53.9788" stroke="#679DA2" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div className="absolute right-[351px] top-[22px] -z-10 md:right-[210px] bf-xs:top-[375px] bf-xs:right-[205px]">
          <svg id='cloud-2' className="absolute" xmlns="http://www.w3.org/2000/svg" width="351" height="280" viewBox="0 0 351 280" fill="none">
            <path d="M247.084 277.083C-149.854 261.627 50.627 165 50.627 165C97.6271 137.5 96.4082 21.1395 194.81 44.997C333.031 78.5088 309.007 58.3785 377.408 6.63962C445.81 -45.0992 843.789 222.683 616.34 217.657C388.892 212.631 643.037 292.5 247.084 277.083Z" fill="#9BCDD2"/>
          </svg>
          <svg id='outline-cloud-2' className="absolute left-[16px] top-[16.02px]" xmlns="http://www.w3.org/2000/svg" width="335" height="214" viewBox="0 0 335 214" fill="none">
            <path d="M409.256 7.16653C408.588 1.15903 386.82 2.78446 382.293 1.80549C371.301 -0.571078 360.872 2.53365 352.807 10.3201C341.134 21.5907 331.22 31.7384 316.699 39.8058C296.405 51.08 264.347 55.6123 241.881 50.2914C227.557 46.899 217.677 39.667 217.677 24.9053C217.677 17.7985 230.323 23.4922 232.972 24.5111C242.032 27.9958 243.221 41.5947 243.221 49.4242C243.221 60.9205 240.87 63.6826 231.789 70.9472C214.632 84.6729 185.643 83.7979 165.249 83.7979C144.565 83.7979 124.083 82.3788 103.44 82.3788C86.895 82.3788 70.4242 82.3655 59.4475 95.7815C51.7976 105.131 49.3875 113.421 47.0698 125.267C45.0567 135.556 44.9344 146.813 44.5469 157.276C44.1635 167.628 35.2755 176.796 28.3849 183.687C22.3159 189.756 14.4405 193.374 8.35986 199.455C3.97201 203.842 4.4153 208.053 1.97391 212.936" stroke="#679DA2" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg id='outline-cloud-2-2' className="absolute top-[216.32px]" xmlns="http://www.w3.org/2000/svg" width="351" height="103" viewBox="0 0 351 103" fill="none">
            <path d="M414.178 80.9903C414.178 72.6352 407.289 68.844 401.249 64.6785C388.333 55.7711 371.151 48.6194 355.771 45.7357C309.927 37.1399 261.903 47.9173 219.263 65.4302C188.698 77.9836 155.784 87.9645 123.271 93.6189C91.9601 99.0643 54.4408 109.134 24.7991 92.8672C9.98191 84.7358 3.72088 70.6886 1.79715 54.2299C0.549136 43.5525 0.193386 30.8773 8.26174 22.809C19.9479 11.1228 48.6038 -8.56084 64.3383 7.17368C69.9405 12.7758 81.4121 29.6912 76.591 38.3691C71.5975 47.3574 56.8316 49.0659 47.5003 48.517C42.1506 48.2023 40.5868 30.9273 50.2064 30.9273" stroke="#679DA2" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div className='mx-auto w-fit'>
          <img src={flower} alt='flower' className='mt-[70px] bf-xs:mt-[310px] md:w-[230px]' />
          <div className='opacity-0 w-fit mx-auto flex mt-[20px] gap-[15px] bf-xs:gap-[10px] text-[#679DA2] items-center'>
            <img src={water} alt='water' className='bf-xs:w-[16px]' />
            <p>23 times</p>
          </div>
        </div>
      </div>
      
      {/* about */}
      <div id='About' className='text-[#FAF0E4] min-h-screen bg-[#9BCDD2] w-full py-[45px] pl-[85px] pr-[65px] md:px-[30px] md:py-[30px] relative'>
        <div className='h-full'>
          <svg className='absolute top-[115px] left-0 md:-left-[50px] bf-xs:-left-[190px] xs:-left-[170px]' xmlns="http://www.w3.org/2000/svg" width="683" height="584" viewBox="0 0 683 584" fill="none">
            <path d="M321.684 37.1746C196.884 -52.8254 -20.8163 43.8411 -53.3163 83.6744C-146.816 193.674 -85.8163 507.174 -15.3163 534.674C72.2335 568.825 262.081 442.144 321.684 482.675C396.684 533.675 360.684 615.674 574.684 570.674C745.884 534.674 675.351 414.341 618.684 358.675C600.517 338.675 562.5 295.153 613 277C685.816 250.825 722.684 37.1746 574.684 23.1746C426.684 9.17461 477.684 149.675 321.684 37.1746Z" fill="#679DA2"/>
          </svg>
          <h1 className='text-center mb-[40px] md:mb-[60px]'>Welcome :)</h1>
          <div className='flex gap-[115px] md:gap-[95px] lg:flex-col relative'>
            <div className='w-[520px] screen-580:w-full'>
              <h2>About me</h2>
              <p className='mt-[20px] leading-[45px]'>Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
            </div>
            <div className='flex-1'>
              <h2>Skills</h2>
              <div className='flex flex-col gap-[20px] mt-[20px]'>
                <div className='bg-[#FAF0E4] rounded-[20px] text-[#679DA2] px-[22px] py-[17px] leading-[30px]'>
                  <p className='font-bold'>Frontend</p>
                  <p>ReactJS  NextJS  JavaScript  TypeScript  Styled Components  Tailwind  Bootstrap  HTML  CSS</p>
                </div>
                <div className='bg-[#FAF0E4] rounded-[20px] text-[#679DA2] px-[22px] py-[17px] leading-[30px]'>
                  <p className='font-bold'>Backend</p>
                  <p>Node.js  MySQL  SQL  MongoDB</p>
                </div>
                <div className='bg-[#FAF0E4] rounded-[20px] text-[#679DA2] px-[22px] py-[17px] leading-[30px]'>
                  <p className='font-bold'>Mobile Development</p>
                  <p>Flutter</p>
                </div>
                <div className='bg-[#FAF0E4] rounded-[20px] text-[#679DA2] px-[22px] py-[17px] leading-[30px]'>
                  <p className='font-bold'>Tools and others</p>
                  <p>GitHub Actions  Netlify  Figma  Unity  Jira  Python  C  C++  C#</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* work */}
      <div id='Work' className='text-[#FF8551] min-h-screen w-full py-[45px] px-[85px] md:px-[30px] md:py-[30px]'>
        <div className='h-full'>
          <h1 className='mb-[10px]'>Work Experience</h1>
          <h2 className='mb-[10px]'>Internship<span className='text-[20px]'> Frontend Developer and UX/UI Designer Intern <a href='https://www.linkedin.com/company/echoplusstudio/'  target='_blank' rel="noreferrer">@Echoplus Studio, Bangkok, Thailand</a></span></h2>
          <ul className='mb-[16px] pl-[20px]'>
            <li className='pl-[5px]'>Designed and developed<a href='https://echoplus.io/' target='_blank' className='font-bold' rel="noreferrer"> Echoplus Studio website </a>using Next.js, TypeScript and Styled Components for development, and Figma for design.</li>
            <li className='pl-[5px]'>Collaborated in developing<a href='https://codesekai.com/' target='_blank' rel="noreferrer" className='font-bold'> Codesekai website </a>with React.js and Styled Components, a centralized platform for the Codesekai game where users can mint characters, manage game databases, stay updated with game events and announcements, and offers various additional features and functionalities.</li>
          </ul>
          <h2 className='mb-[20px]'>Recent Work</h2>
          <div className='overflow-x-scroll'>
            <div className='flex gap-[40px]'>
              <a href='https://www.dadafn.com/' target='_blank' rel="noreferrer" className='bg-[#FF8551] flex rounded-[20px] h-[275px] w-[300px] min-w-[300px] text-[#FAF0E4] relative overflow-hidden'>
                <img src={dada} alt='dada' className='my-auto' />
                <div className='box-animation bg-[#FF8551] w-full h-full opacity-0 hover:opacity-100 absolute top-0 py-[25px] bf-xs:py-[30px] px-[35px] text-center font-bold'>
                  <p>One-Stop Shop for Exclusive Fortnite Gear</p>
                  <p className='mt-[50px] bf-xs:mt-[75px]'>dadafn.com</p>
                  <a id="button" href='https://www.figma.com/file/l6QXUloaKbzY0xqLBCWa2u/Untitled?type=design&mode=design&t=DHlpzpKsjMdD6Lsq-0' target='_blank' rel="noreferrer" className='text-[#FF8551] rounded-[20px] flex relative mx-auto mt-[7px] z-10 w-fit'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="141" height="49" viewBox="0 0 141 49" fill="none">
                      <path d="M95.6147 45.4948C44.8454 54.5776 31.1029 43.8828 30.5778 37.4001C-11.955 35.2976 -3.40347 14.2724 15.9501 4.07527C31.4329 -4.08246 60.5083 1.86764 73.1106 5.86241C78.4365 2.35822 96.2898 -2.90507 125.095 4.07527C153.9 11.0556 137.097 21.421 125.095 25.7311C136.422 28.5345 146.384 36.4119 95.6147 45.4948Z" fill="#FFDEDE"/>
                    </svg>
                    <p className='absolute font-bold top-[6px] left-[36px]'>Design</p>
                  </a>
                </div>
              </a>
              <a href='https://www.linkedin.com/in/apinya-suthisophaarporn/' target='_blank' rel="noreferrer" className='flex items-center relative'>
                <img src={flower2} alt='flower2' className='absolute -z-10 left-[80px] bottom-[20px]' /> 
                <p className='text-[32px] font-bold whitespace-nowrap'>More on LINKEDIN</p>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      {/* projects */}
      <div id='Projects' className='text-[#FAF0E4] w-full'>
        <div className='bg-[#9BCDD2] h-screen w-full absolute -z-10'></div>
        <div className='pt-[45px] px-[85px] md:px-[30px] md:pt-[30px]'>
          <h1 className='mb-[20px]'>Technical Projects</h1>
          <div className=' mb-[28px] overflow-x-scroll'>
            <div className='w-fit flex gap-[40px]'>
              <a href='https://emmyyyyyyy.github.io/WeatherApp/' target='_blank' rel="noreferrer" className='bg-[#FAF0E4] text-[#679DA2] rounded-[20px] h-[275px] w-[300px] min-w-[300px] flex relative overflow-hidden'>
                <img src={weatherApp} alt='weatherApp' className='object-cover h-full object-[-112px]' />
                <div className='box-animation bg-[#FAF0E4] w-full h-full opacity-0 hover:opacity-100 absolute top-0 py-[25px] px-[35px] text-center font-bold'>
                  <h2>Weather app</h2>
                  <p className='text-[20px] mt-[10px]'>Provide real-time weather information</p>
                  {/* <p className='mt-[15px]'>Visit Website</p> */}
                  <a id="button" href='https://www.figma.com/file/g01JDwTJZTl7B2Ux4mtanT/Weather-website?type=design&mode=design&t=DHlpzpKsjMdD6Lsq-0' target='_blank' rel="noreferrer" className='text-[#FF8551] flex relative mx-auto mt-[60px] z-10 w-fit rounded-[20px]'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="141" height="49" viewBox="0 0 141 49" fill="none">
                      <path d="M95.6147 45.4948C44.8454 54.5776 31.1029 43.8828 30.5778 37.4001C-11.955 35.2976 -3.40347 14.2724 15.9501 4.07527C31.4329 -4.08246 60.5083 1.86764 73.1106 5.86241C78.4365 2.35822 96.2898 -2.90507 125.095 4.07527C153.9 11.0556 137.097 21.421 125.095 25.7311C136.422 28.5345 146.384 36.4119 95.6147 45.4948Z" fill="#FFDEDE"/>
                    </svg>
                    <p className='absolute font-bold top-[6px] left-[36px]'>Design</p>
                  </a>
                </div>
              </a>
              <div className='bg-[#FAF0E4] rounded-[20px] h-[275px] w-[300px] min-w-[300px] p-[35px]'>
                <p className='text-center text-[#679DA2] font-bold'>Ai for detecting and censoring offensive words in text and audio</p>
                <p className='text-center text-[#FF8551] font-bold mt-[60px]'>Coming soon!</p>
              </div>
              <a href='https://github.com/Emmyyyyyyy/' target='_blank' rel="noreferrer" className='flex items-center relative'>
                <img src={flower2} alt='flower2' className='absolute -z-10 left-[80px] bottom-[20px]' /> 
                <p className='text-[32px] font-bold whitespace-nowrap'>More on <span className='text-[#679DA2]'>GITHUB</span></p>
              </a>
            </div>
          </div>
          <h2 className='mb-[28px]'>Bruen-Bruen in town</h2>
          <div className='w-full overflow-x-hidden h-[640px] rounded-[20px]'>
            <iframe frameborder="0" src="https://itch.io/embed-upload/6844958?color=333333 " allowfullscreen="" style={{ width: '100%', height: '640px' }}>
              <a href="https://eemmyy.itch.io/bruen-bruen-in-town">Play Bruen-Bruen In Town on itch.io</a>
            </iframe>
          </div>
        </div>
        
      </div>

      {/* awards */}
      <div id='Awards' className='text-[#FF8551] w-full pt-[45px] px-[85px] md:px-[30px] md:pt-[30px]'>
          <h1 className='mb-[20px]'>Awards</h1>
          <h2 className='mb-[20px]'>First Place Winner: KU Hackathon</h2>
          <p className='leading-[45px]'>Led the winning team at KU Hackathon 2023, surpassing over 20 teams and 120 participants. Innovatively enhanced the Kasetsart University application with a new website and additional features.</p>
          <a href='https://drive.google.com/file/d/1qGsc7dzmzc0DwLpPlW1EJ2ZTxCwwBM4b/view?usp=sharing' target="_blank" id="button" className=' mt-[30px] screen-422:mt-[20px] relative flex w-fit mx-auto' rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="389" height="131" viewBox="0 0 389 131" fill="none">
              <path d="M263.788 121.629C134.644 144.018 92.3421 121.457 85.395 104.217C84.4575 101.89 82.3904 99.8975 79.8865 99.7452C-32.3684 92.9208 -8.70056 37.805 44.0041 10.8951C85.8478 -10.4694 163.677 4.35977 199.518 15.0132C200.923 15.4308 202.39 15.2153 203.673 14.5055C220.465 5.21107 268.893 -7.00533 345.121 10.8951C412.301 26.6709 389.562 48.9139 360.919 62.3774C356.4 64.5013 356.752 72.1043 361.206 74.3618C380.788 84.2875 377.622 101.894 263.788 121.629Z" fill="#FFDEDE"/>
            </svg>
            <p className='text-center absolute font-bold top-[43px] screen-437:top-[38px] px-[40px] bf-xs:top-[43px] bf-xs:px-[47px] screen-422:top-[38px]'>Checkout my full PORTFOLIO</p>
          </a>
      </div>

      {/* contact */}
      <div id='Contact' className='text-[#FAF0E4] w-full pt-[45px] pb-[85px] px-[85px] md:px-[30px] md:py-[30px] relative'>
        <div className='bg-[#9BCDD2] rounded-[20px] px-[45px] py-[30px] md:px-[30px] md:pt-[20px] md:pb-[25px]'>
          <h1 className='mb-[20px]'>Contact</h1>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col mb-[20px]'>
              <label className='font-bold text-[32px]' htmlFor="">Name</label>
              <input 
                className='pb-[10px] border-b-2 bg-transparent placeholder-[#FAF0E4] placeholder-opacity-75 focus:placeholder-opacity-0' 
                placeholder="Enter your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col mb-[20px]'>
              <label className='font-bold text-[32px]' htmlFor="">Email Address</label>
              <input 
                className='pb-[10px] border-b-2 bg-transparent placeholder-[#FAF0E4] placeholder-opacity-75 focus:placeholder-opacity-0' 
                placeholder="Enter your email address" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col mb-[30px]'>
              <label className='font-bold text-[32px]' htmlFor="">Message</label>
              <textarea
                className='pb-[10px] border-b-2 bg-transparent placeholder-[#FAF0E4] placeholder-opacity-75 focus:placeholder-opacity-0' 
                cols="30"
                rows="8"
                value={message}
                placeholder="Hi!" 
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className='flex gap-[15px] font-bold text-[32px] items-center mt-[25px] hover:text-[#FFDEDE]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="130" height="41" viewBox="0 0 130 41" fill="none">
                <path d="M1 17.551C8.63924 18.3149 16.7971 22.3204 24.2076 24.3789C37.575 28.0921 55.4324 34.0297 68.5334 26.2818C76.1081 21.8021 81.5593 15.5938 80.8834 6.46953C80.7708 4.94872 80.213 2.20826 78.2343 2.10411C77.6345 2.07254 75.1259 1.73407 74.9136 2.47722C72.8821 9.58743 76.602 15.3975 81.9281 19.5658C88.0547 24.3605 97.1791 26.8749 104.875 26.9534C110.719 27.013 115.416 26.0695 120.844 23.9312C122.44 23.3024 125.135 22.4759 125.918 20.909" stroke="#FAF0E4" stroke-width="2" stroke-linecap="round"/>
                <path d="M108.136 10.0894C114.78 10.0894 118.767 13.7827 124.128 16.9508C125.353 17.6746 126.352 18.4703 127.603 19.0961C129.546 20.0674 127.747 21.8368 126.965 23.2448C126.258 24.518 119.731 41.1164 116.753 39.1307" stroke="#FAF0E4" stroke-width="2" stroke-linecap="round"/>
                <path d="M46.6143 29C43.5211 28.8895 35.0912 25.7218 34.2165 22.7226C33.6956 20.9368 34.2537 18.8282 34.0515 16.9834C33.7803 14.5087 33.75 12.037 33.4151 9.55881C33.2401 8.26402 32.762 7.2559 32.0952 6.16474C31.3136 4.88575 30.4848 3.23287 29.3257 2.25212C28.9815 1.96084 28.1698 1.39676 29.2196 1.75715C30.3628 2.14958 31.5138 2.50635 32.6255 2.98279C35.1014 4.0439 37.5372 5.1785 39.6258 6.91898C42.2402 9.0977 44.6752 11.4184 45.9779 14.6028C46.6076 16.1422 47.4879 19.7286 46.6143 22C46.0552 23.4536 45.7658 23.4943 45.7658 25.0443C45.7658 26.2105 46.6143 29.6045 46.6143 28.4384" stroke="#FAF0E4" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Send
            </button>
          </form>
        </div>
        {loading && (
          <div className='bg-[#FFDEDE80]  w-screen h-screen fixed top-0 left-0'>
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <p className='font-bold text-[#FF8551]'>Sending . . .</p>
              <div className='flex gap-[15px] mt-[20px]'>
                <div className='h-6 w-6 bg-[#FF8551] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-6 w-6 bg-[#FF8551] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-6 w-6 bg-[#FF8551] rounded-full animate-bounce'></div>
              </div>
            </div>
          </div>
        )}
        {done && (
          <div className='bg-[#FFDEDE80]  w-screen h-screen fixed top-0 left-0'>
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <p className='font-bold text-[#FF8551]'>Sent !</p>
            </div>
          </div>
        )}
      </div>

      {/* footer */}
      <div id='Footer' className='bg-[#FF8551] text-[#FAF0E4] w-full py-[36px] px-[85px] lg:px-[25px] lg:py-[20px]'>
        {/* <div className='flex items-center' >
          <a href='#Greeting'>
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="53" viewBox="0 0 49 53" fill="none">
              <path d="M19.5694 9.85837C10.3701 11.7867 10.7384 20.6144 12.0725 24.7873C14.0453 32.0185 23.5339 33.4777 27.879 30.5641C33.9878 26.4678 33.4914 20.741 32.2844 16.995C31.4671 14.458 28.7686 7.93006 19.5694 9.85837Z" stroke="#FAF0E4" stroke-width="1.5"/>
              <path d="M12.3151 15.5818C10.754 12.9389 4.68315 7.51606 1.67512 14.5216C-1.32483 21.5082 6.37297 22.1756 11.031 21.5082C7.45565 21.6417 0.712873 23.078 2.34443 27.755C4.38387 33.6014 9.97348 32.9607 13.0704 27.755" stroke="#FAF0E4" stroke-width="1.5"/>
              <path d="M12.0857 15.3377C11.2952 12.5703 5.66124 4.67991 12.0857 2.52158C17.6043 0.667554 19.4967 6.98208 19.7662 9.51007C20.0716 6.52971 20.8761 0.597521 25.6752 1.02158C32.3761 1.61367 28.6708 8.07313 28.3474 10.4681" stroke="#FAF0E4" stroke-width="1.5"/>
              <path d="M27.7005 11.1455C30.1176 7.88866 34.9309 3.90964 38.3754 8.90708C41.8198 13.9045 36.0952 17.804 33.1997 19.5393C35.7175 18.685 40.5997 18.486 40.7206 23.4835C40.8414 28.4809 33.7194 28.4607 30.7736 28.1136" stroke="#FAF0E4" stroke-width="1.5"/>
              <path d="M13.3934 28.0278C12.5871 31.8635 13.0323 40.0215 22.6752 40.0215C29.4159 40.0215 29.8188 34.3382 29.399 30.0857M29.399 30.0857C29.2719 28.7992 30.9729 29.0301 30.6296 28.0278C36.2069 35.8591 45.0534 51.5215 35.8205 51.5215C24.2795 51.5215 24.3299 46.5671 26.7994 45.768C29.2688 44.9689 34.688 47.0867 35.8205 47.0867C36.7556 47.0867 37.0805 46.3273 35.8205 43.2907C34.8126 40.8615 30.4548 32.9891 29.399 30.0857Z" stroke="#FAF0E4" stroke-width="1.5"/>
              <path d="M46.3059 28.3863C37.766 27.0144 36.1948 33.5197 36.2757 37.0351C44.3603 39.9391 47.5166 32.9492 47.5166 29.6612C47.5166 29.0497 47.1146 28.5007 46.3059 28.3863Z" stroke="#FAF0E4" stroke-width="1.5"/>
            </svg>
          </a>
          
          <div className="ml-auto flex gap-[35px]">
            <a href="#About">
              About
            </a>
            <a href="#Work">
              Works
            </a>
            <a href="#Projects">
              Projects
            </a>
            <a href="#Awards">
              Awards
            </a>
            <a href="#">
              Portfolio
            </a>
            <a href="#Contact">
              Contact
            </a>
          </div>
        </div> */}
        {!isMenuOpen && (
        <div className="flex items-center">
          <a href='#Greeting'>
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="53" viewBox="0 0 49 53" fill="none">
              <path d="M19.5694 9.85837C10.3701 11.7867 10.7384 20.6144 12.0725 24.7873C14.0453 32.0185 23.5339 33.4777 27.879 30.5641C33.9878 26.4678 33.4914 20.741 32.2844 16.995C31.4671 14.458 28.7686 7.93006 19.5694 9.85837Z" stroke="#FAF0E4" stroke-width="1.5"/>
              <path d="M12.3151 15.5818C10.754 12.9389 4.68315 7.51606 1.67512 14.5216C-1.32483 21.5082 6.37297 22.1756 11.031 21.5082C7.45565 21.6417 0.712873 23.078 2.34443 27.755C4.38387 33.6014 9.97348 32.9607 13.0704 27.755" stroke="#FAF0E4" stroke-width="1.5"/>
              <path d="M12.0857 15.3377C11.2952 12.5703 5.66124 4.67991 12.0857 2.52158C17.6043 0.667554 19.4967 6.98208 19.7662 9.51007C20.0716 6.52971 20.8761 0.597521 25.6752 1.02158C32.3761 1.61367 28.6708 8.07313 28.3474 10.4681" stroke="#FAF0E4" stroke-width="1.5"/>
              <path d="M27.7005 11.1455C30.1176 7.88866 34.9309 3.90964 38.3754 8.90708C41.8198 13.9045 36.0952 17.804 33.1997 19.5393C35.7175 18.685 40.5997 18.486 40.7206 23.4835C40.8414 28.4809 33.7194 28.4607 30.7736 28.1136" stroke="#FAF0E4" stroke-width="1.5"/>
              <path d="M13.3934 28.0278C12.5871 31.8635 13.0323 40.0215 22.6752 40.0215C29.4159 40.0215 29.8188 34.3382 29.399 30.0857M29.399 30.0857C29.2719 28.7992 30.9729 29.0301 30.6296 28.0278C36.2069 35.8591 45.0534 51.5215 35.8205 51.5215C24.2795 51.5215 24.3299 46.5671 26.7994 45.768C29.2688 44.9689 34.688 47.0867 35.8205 47.0867C36.7556 47.0867 37.0805 46.3273 35.8205 43.2907C34.8126 40.8615 30.4548 32.9891 29.399 30.0857Z" stroke="#FAF0E4" stroke-width="1.5"/>
              <path d="M46.3059 28.3863C37.766 27.0144 36.1948 33.5197 36.2757 37.0351C44.3603 39.9391 47.5166 32.9492 47.5166 29.6612C47.5166 29.0497 47.1146 28.5007 46.3059 28.3863Z" stroke="#FAF0E4" stroke-width="1.5"/>
            </svg>
          </a>
          <div className="ml-auto flex gap-[35px]">
            <a className='md:hidden' href="#About">
              About
            </a>
            <a className='md:hidden' href="#Work">
              Works
            </a>
            <a className='md:hidden' href="#Projects">
              Projects
            </a>
            <a className='md:hidden' href="#Awards">
              Awards
            </a>
            <a className='md:hidden' href="https://drive.google.com/file/d/1qGsc7dzmzc0DwLpPlW1EJ2ZTxCwwBM4b/view?usp=sharing" target='_blank' rel="noreferrer">
              Portfolio
            </a>
            <a className='md:hidden' href="#Contact">
              Contact
            </a>
            <svg 
              onClick={() => {setIsMenuOpen(!isMenuOpen);}} 
              className='hidden md:block' 
              xmlns="http://www.w3.org/2000/svg" 
              width="25" height="23" viewBox="0 0 25 23" fill="none"
            >
              <rect y="4" width="20" height="3" rx="1.5" fill="#AFC8AD"/>
              <rect y="12" width="20" height="3" rx="1.5" fill="#FAF0E4"/>
              <rect y="20" width="20" height="3" rx="1.5" fill="#FAF0E4"/>
              <path d="M14.8855 3.10204C14.8236 3.3114 14.7218 3.51506 14.5946 3.69678C14.4343 4.1776 13.3028 4.21615 12.9137 4.21615C12.4323 4.21615 12 4.64978 12 5.12984C12 5.81669 12.3358 6.23207 12.9137 6.60354C13.4558 6.95204 14.0691 7.08169 14.0691 7.81197C14.0691 8.29673 13.8814 8.90453 14.1103 9.3623C14.4565 10.0546 15.3271 9.99893 15.9908 9.99893C16.7715 9.99893 17.8352 9.62534 18.1659 8.84356C18.4325 8.21347 19.1647 8.30587 19.6809 8.50166C20.1799 8.69093 20.6134 9.13732 21.1369 9.2444C21.5576 9.33045 22.0385 9.22297 22.3866 8.99092C22.5868 8.85746 22.9359 8.42707 22.982 8.18334C23.0564 7.78974 22.864 7.14509 22.8228 6.81575C22.8057 6.5081 22.7691 6.0921 22.9289 5.81953C23.1908 5.37274 23.5299 5.00446 23.8426 4.58752C24.2626 4.02751 24.6198 3.07253 24.043 2.4654C23.6992 2.10345 23.2864 1.82876 22.7816 1.82876C22.1688 1.82876 21.6448 2.06294 21.0839 2.29445C20.0186 2.73406 18.6381 2.1863 18.0186 1.25697C17.775 0.8916 17.3746 0.253933 16.9339 0.119276C16.607 0.0193798 16.0973 -0.075447 15.7668 0.0898019C15.2142 0.366084 15.1501 0.95768 15.0898 1.5136L15.0889 1.52223C15.032 2.04663 15.0361 2.5923 14.8855 3.10204Z" fill="#FFDEDE"/>
              <path d="M17.3756 5.84024C17.7828 6.06929 18.1696 5.98219 18.6216 5.98219C18.9253 5.98219 19.7625 5.88946 19.9149 5.58474C19.9865 5.44162 19.8497 4.95646 19.7572 4.84662C19.5638 4.61693 19.4711 4.39276 19.1579 4.27883C18.5074 4.04232 17.4108 4.17296 17.0634 4.81823C16.8964 5.12835 17.0763 5.67184 17.3756 5.84024Z" fill="#FCB766"/>
            </svg>
          </div>
        </div>
      )}
      {isMenuOpen && (
        <div className='flex flex-col text-center gap-[40px] items-center justify-center  w-full h-screen bg-[#FAF0E4] text-[#FF8551] fixed top-0 right-0 left-0 bottom-0 z-20'>
          <svg onClick={() => {setIsMenuOpen(false);}} className='absolute top-[50px] right-[50px]' 
          xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path d="M5.64478 8.9131C5.66009 9.11973 5.64478 9.33315 5.64478 9.54031C5.43453 10.2236 2.76805 12.7566 2.30852 13.2997C2.06462 13.5262 0.453028 14.8725 0.277505 15.1845C0.128272 15.4498 -3.85627e-05 15.5561 0 16.1221C8.69393e-09 16.9177 0.799927 16.7342 1.32615 16.7342C1.67471 16.7342 1.51388 17.2732 1.53018 17.5504C1.56902 18.2106 2.55564 18.1201 3.0264 18.0907C3.52141 18.0597 3.83321 17.7739 4.19768 17.4823C4.65568 17.1159 5.2302 16.8352 5.64478 16.4206C6.07004 15.9954 6.44358 15.5517 6.91808 15.17C7.29468 14.8671 7.57798 14.4699 8.00623 14.233C8.47223 13.9752 9.34969 14.0235 9.85761 14.1196C10.37 14.2166 10.9762 14.3935 11.3878 14.7279C12.1857 15.3762 12.9706 16.101 13.6511 16.8703C14.2558 17.5539 15.0625 18.2448 15.8803 18.6536C16.0916 18.7593 17.1706 19.4078 17.3765 18.6007C17.3765 18.0711 17.2409 18.1219 17.1705 17.5978C17.1302 17.2976 17.5166 17.1361 17.7468 17.1423C18.3297 17.1581 19.1447 16.9264 19.1447 16.1939C19.1447 15.2346 18.7512 14.664 17.9886 14.1159C16.9726 13.3856 15.8226 12.8603 14.7921 12.1473C14.2224 11.7532 13.2426 11.2856 13.2279 10.4773C13.2158 9.8134 13.3653 9.19677 13.6699 8.61084C13.9352 8.10076 14.3258 7.86086 14.7921 7.55291C15.704 6.95069 16.711 6.51059 17.5012 5.72042C18.0813 5.14031 18.8423 3.94758 18.9805 3.11806C18.9805 3.11806 19.1661 2.38427 18.9805 1.91142C18.7859 1.41564 18.4918 1.40596 17.9886 1.44713C17.4949 1.48752 17.0714 1.5942 16.6019 1.73051C16.4914 1.76259 16.134 1.84093 16.0314 1.75695C15.898 1.64784 16.014 1.1307 15.8463 0.925722C15.6367 0.669612 15.1493 0.728719 14.8526 0.755698C13.8312 0.848549 12.9936 1.87118 12.4798 2.6562C12.0808 3.26579 11.9046 3.96743 11.5314 4.58314C11.1316 5.2429 10.598 5.71816 10.0465 6.24561C9.26549 6.99269 8.27426 6.03933 7.8551 5.41059C6.76599 3.77693 5.85142 1.86365 4.44016 0.486815C3.92783 -0.0130177 3.35778 -0.101581 2.6908 0.101413C2.43806 0.178332 2.08747 1.01666 2.08747 1.30808C2.08747 2.0043 2.26004 2.00057 2.27829 2.69398C2.27976 2.74997 1.9619 2.58819 1.79844 2.58819C0.905709 2.58819 0.510035 2.99788 0.510035 3.86526C0.510035 5.15815 1.94443 6.08567 2.84882 6.83502C3.26138 7.17686 5.70744 7.94465 5.64478 8.9131Z" fill="#FF8551"/>
            <path d="M7.53262 11.2515C8.20215 11.7047 8.8381 11.5324 9.58131 11.5324C10.0806 11.5324 11.4573 11.3489 11.7078 10.7459C11.8255 10.4627 11.6006 9.50265 11.4485 9.28531C11.1304 8.83079 10.9782 8.38721 10.463 8.16178C9.39357 7.69377 7.59045 7.95228 7.01915 9.22913C6.74458 9.84278 7.04035 10.9182 7.53262 11.2515Z" fill="#FCB766"/>
          </svg>
          <a onClick={() => {setIsMenuOpen(false);}}  href="#About">
            About
          </a>
          <a onClick={() => {setIsMenuOpen(false);}}  href="#Work">
            Works
          </a>
          <a onClick={() => {setIsMenuOpen(false);}}  href="#Projects">
            Projects
          </a>
          <a onClick={() => {setIsMenuOpen(false);}}  href="#Awards">
            Awards
          </a>
          <a onClick={() => {setIsMenuOpen(false);}}  href="https://drive.google.com/file/d/1qGsc7dzmzc0DwLpPlW1EJ2ZTxCwwBM4b/view?usp=sharing" target='_blank' rel="noreferrer">
            Portfolio
          </a>
          <a onClick={() => {setIsMenuOpen(false);}}  href="#Contact">
            Contact
          </a>
        </div>
      )}
        <div className='flex gap-[30px] bf-xs:gap-[20px] mx-auto w-fit mt-[35px]'>
          <a href='https://github.com/Emmyyyyyyy/' target='_blank' rel="noreferrer">
            <img src={discord} alt='discord' className='w-[40px] h-[40px] bf-xs:w-[30px] bf-xs:h-[30px] opacity-75 hover:opacity-100' />
          </a>
          <a href='https://www.linkedin.com/in/apinya-suthisophaarporn' target='_blank' rel="noreferrer">
            <img src={linkedin} alt='linkedin' className='w-[40px] h-[40px]  bf-xs:w-[30px] bf-xs:h-[30px] opacity-75 hover:opacity-100' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
