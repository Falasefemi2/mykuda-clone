import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="h-[64px] md:h-[70px] fixed w-full left-0 top-0 z-[99] kuda-shadow bg-white flex items-center">
      <div className="flex justify-between items-center px-[14px] md:px-[60px] mx-auto max-w-[1500px] w-full">
        <div className="flex items-center">
          <a href="/" className="min-w-[100px] no-underline">
            <svg
              className="h-5 flex md:h-[18px]"
              width="99"
              height="22"
              viewBox="0 0 99 22"
              fill="none"
            >
              <path
                d="M58.4144 6.81538V21.764H54.0773V19.5807C53.6053 20.3675 52.9857 20.9674 52.2186 21.3804C51.4515 21.7935 50.586 22 49.6222 22C47.7537 22 46.3572 21.4788 45.4327 20.4363C44.5083 19.3938 44.046 17.8203 44.046 15.7157V6.81538H48.5011V15.8042C48.5011 17.6138 49.278 18.5186 50.8319 18.5186C51.7563 18.5186 52.5038 18.2038 53.0742 17.5744C53.6446 16.945 53.9298 16.1189 53.9298 15.0961V6.81538H58.4144ZM75.4086 0V21.764H71.0125V19.5512C70.5601 20.3183 69.9209 20.9182 69.0947 21.3509C68.2686 21.7836 67.3344 22 66.2919 22C65.0134 22 63.8726 21.6755 62.8695 21.0165C61.8663 20.3576 61.0894 19.4332 60.5288 18.2432C59.9682 17.0532 59.6929 15.696 59.6929 14.1618C59.6929 12.6276 59.9682 11.2803 60.5288 10.11C61.0894 8.93965 61.8663 8.03487 62.8596 7.39562C63.8529 6.75637 64.9937 6.44166 66.2919 6.44166C67.295 6.44166 68.2096 6.65802 69.0357 7.07108C69.8619 7.49396 70.5011 8.07421 70.9535 8.82164V0H75.4086ZM70.1274 17.4761C70.7175 16.7188 71.0125 15.637 71.0125 14.2208C71.0125 12.8243 70.7175 11.7523 70.1175 10.9951C69.5176 10.2378 68.6817 9.8641 67.5999 9.8641C66.4984 9.8641 65.6428 10.2378 65.0331 10.9852C64.4233 11.7327 64.1184 12.7948 64.1184 14.1717C64.1184 15.5878 64.4233 16.6795 65.0331 17.4564C65.6428 18.2333 66.4984 18.6169 67.5999 18.6169C68.7014 18.6071 69.5373 18.2333 70.1274 17.4761ZM92.4126 6.81538V21.764H88.0165V19.5512C87.5641 20.3183 86.9249 20.9182 86.0988 21.3509C85.2727 21.7836 84.3384 22 83.2959 22C81.9977 22 80.8569 21.6853 79.8636 21.0559C78.8703 20.4265 78.0934 19.5315 77.5328 18.3612C76.9723 17.1909 76.6969 15.8435 76.6969 14.3093C76.6969 12.7751 76.9723 11.4081 77.5328 10.2083C78.0934 9.00849 78.8703 8.08404 79.8735 7.42512C80.8766 6.7662 82.0174 6.44166 83.2959 6.44166C84.3384 6.44166 85.2727 6.66786 86.0988 7.12025C86.9249 7.57264 87.5641 8.18239 88.0165 8.94949V6.81538H92.4126ZM87.1314 17.4859C87.7215 16.7385 88.0165 15.6567 88.0165 14.2405C88.0165 12.8243 87.7215 11.7425 87.1314 10.9852C86.5413 10.228 85.6956 9.85427 84.5941 9.85427C83.4926 9.85427 82.637 10.2477 82.0272 11.0344C81.4175 11.8212 81.1126 12.9128 81.1126 14.3093C81.1126 15.7059 81.4077 16.768 82.0076 17.5056C82.6075 18.2432 83.4631 18.6071 84.5842 18.6071C85.6956 18.6071 86.5413 18.2333 87.1314 17.4859ZM43.1511 21.9803H37.624L31.6839 15.2043V21.9803H27.1797V0H31.6839V13.3456L37.3585 6.86455H42.7675L36.3455 14.1225L43.1511 21.9803Z"
                fill="#40196D"
              ></path>
              <path
                d="M14.8207 21.9803L6.17613 12.0277L10.8967 21.9803H7.62181L2.80286 11.831L4.80912 21.9803H2.79303L0.786768 11.8114V21.9803H0V0H0.786768V10.9656L2.82253 0H4.82879L2.78319 11.0148L7.70049 0H10.9361L6.04828 10.9754L14.9289 0H20.0134L10.8181 11.3491L20.0527 21.9803H14.8207Z"
                fill="#40196D"
              ></path>
              <path
                d="M96.146 21.7447C97.493 21.7447 98.585 20.6527 98.585 19.3057C98.585 17.9587 97.493 16.8667 96.146 16.8667C94.799 16.8667 93.707 17.9587 93.707 19.3057C93.707 20.6527 94.799 21.7447 96.146 21.7447Z"
                fill="#40196D"
              ></path>
            </svg>
          </a>
          <ul className="hidden md:flex items-center ml-[15%] list-none">
            <li className="relative mr-[60px] md:mr-[42px] flex items-center text-[0.875rem] font-bold text-[#40196d] cursor-pointer leading-[1.5]">
              <p className="">Features</p>
            </li>
            <li className="relative mr-[60px] md:mr-[42px] flex items-center text-[0.875rem] font-bold text-[#40196d] cursor-pointer leading-[1.5]">
              <p className="">Business</p>
            </li>
            <li className="relative mr-[60px] md:mr-[42px] flex items-center text-[0.875rem] font-bold text-[#40196d] cursor-pointer leading-[1.5]">
              <p className="">Company</p>
            </li>
            <li className="relative mr-[60px] md:mr-[42px] flex items-center text-[0.875rem] font-bold text-[#40196d] cursor-pointer leading-[1.5]">
              <p className="">Help</p>
            </li>
          </ul>
        </div>
        <div className="md:flex items-center ml-auto hidden">
          <a
            href="/"
            className="text-[0.875rem] w-full max-w-full font-bold list-none text-[#40196d] cursor-pointer"
          >
            Sign In
          </a>
          <a
            href="/"
            className="h-[43px] text-[14px] min-w-[136px] max-[136px] ml-10 font-bold leading-[1] flex items-center justify-center p-[15px] cursor-pointer bg-[#40196d] rounded-[10px] text-white duration-[0.6s] transition-transform"
          >
            Get Kuda
          </a>
        </div>
        <div className="ml-auto mr-[17px] md:mr-0 md:ml-[28px] h-[42px] relative flex items-center">
          <div className="flex items-center justify-center ml-[7px]">
            <div className="flex items-center">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjMiIGN4PSIxNC45OTkzIiBjeT0iMTUiIHI9IjE1IiBmaWxsPSIjMDA4NzUxIi8+CjxtYXNrIGlkPSJtYXNrMF80MTkxOV80NTg3IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI2IiB5PSI3IiB3aWR0aD0iMTgiIGhlaWdodD0iMTYiPgo8cmVjdCB4PSI2LjkxMzMzIiB5PSI3LjI5NzEyIiB3aWR0aD0iMTYuMTcyNCIgaGVpZ2h0PSIxNS40MDIzIiByeD0iMyIgZmlsbD0iI0U5NEQxRSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfNDE5MTlfNDU4NykiPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDE5MTlfNDU4NykiPgo8cGF0aCBkPSJNMC4zMjUxOTUgNC4xMzU1SDI5LjUxNDRWMjYuMDI3NEgwLjMyNTE5NVY0LjEzNTVaIiBmaWxsPSIjMDA4NzUxIi8+CjxwYXRoIGQ9Ik0xMS4xODk3IDQuMDU0NDRIMTkuMjk3OFYyNS45NDYzSDExLjE4OTdWNC4wNTQ0NFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MTkxOV80NTg3Ij4KPHJlY3Qgd2lkdGg9IjI5LjE4OTIiIGhlaWdodD0iMjEuODkxOSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzI1MTk1IDQuMTM1NSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                alt="9ja"
              />
            </div>
          </div>
        </div>
        <div
          onClick={handleClick}
          className="flex md:hidden  w-[23px] h-auto top-[3px]"
        >
          {nav ? <GrClose /> : <GiHamburgerMenu />}

          <div className={`${!nav ? "hidden" : "flex flex-col w-full"} absolute top-20 right-0 my-2 h-screen`}>
            <div className="flex items-center px-3 space-x-3 mx-auto left-[50%]">
              <Button buttonText="Sign In" customClass="btn-white" />
              <Button buttonText="Business" customClass="btn-color" />
            </div>
            <div className="px-5 pb-5 absolute top-[100px] overflow-y-scroll w-full bg-white flex flex-row">
              <div className="max-w-[500px] mx-auto flex flex-wrap">
                <div className="mr-0 mt-[-5px]">
                  <div>
                    <p className="text-[1.15rem] font-bold text-[#40196d] leading-[1.5]">Features</p>
                    <ul className="mt-[15px] text-[#000] list-none w-max">
                      <li className="text-[1rem] mb-5">
                        <a href="/" className="flex items-center">
                          <span className="flex mr-[15px]">
                          <svg width="37" height="38" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><rect x="9.99951" y="12.8003" width="17" height="12" rx="1.5" fill="#40196D" stroke="#DFE3FF"></rect><path d="M26.5 15H10.5V17H26.5V15Z" fill="white"></path></svg>
                          </span>
                          <span>Kuda Card</span>
                        </a>
                        </li>
                      <li className="text-[1rem] mb-5">
                        <a href="/"className="flex items-center">
                          <span className="flex mr-[15px]">
                          <svg width="37" height="38" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><path d="M14.9197 15.9512C14.9197 12.8724 17.4156 10.3765 20.4945 10.3765C23.5733 10.3765 26.0692 12.8724 26.0692 15.9512C26.0692 19.0301 23.5733 21.526 20.4945 21.526C17.4156 21.526 14.9197 19.0301 14.9197 15.9512Z" fill="white"></path><path d="M18.8958 18.1076L13.7857 22.0356L8.78735 20.0079L22.1668 14.8364L16.9954 28.2159L14.9676 23.2175L18.8958 18.1076Z" fill="#40196D"></path></svg>
                          </span>
                          <span>Spend</span>
                        </a>
                      </li>
                      <li className="text-[1rem] mb-5">
                        <a href="/"className="flex items-center">
                          <span className="flex mr-[15px]">
                          <svg width="37" height="38" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><circle cx="17.1547" cy="13.1869" r="3.18693" fill="white"></circle><path d="M25.183 18.097H24.7104C24.3784 17.0684 23.6927 16.057 22.9213 15.3056V12.9612C22.9213 12.8905 22.8469 12.8328 22.7761 12.8328C22.0923 12.8328 21.4759 13.1603 21.0895 13.6656C20.9829 15.6242 19.3516 17.1849 17.367 17.1849C16.1847 17.1849 15.1278 16.6302 14.4451 15.7685C14.1859 16.0488 13.9513 16.3531 13.748 16.6783C13.7406 16.6876 13.732 16.6957 13.7252 16.7054C13.6116 16.8734 13.4231 16.9734 13.2213 16.9734C12.8864 16.9734 12.614 16.7012 12.614 16.3664C12.614 16.1063 12.7795 15.8751 13.0257 15.7915C13.2274 15.723 13.3353 15.5042 13.2668 15.3023C13.1986 15.1009 12.9798 14.9929 12.7779 15.0614C12.2189 15.2512 11.843 15.7757 11.843 16.3662C11.843 17.1254 12.4598 17.7427 13.2184 17.7442C12.9656 18.4114 12.8053 19.1338 12.8053 19.8885C12.8053 21.7882 13.6636 23.5974 15.2065 24.742V26.164C15.2065 26.5992 15.6028 26.969 16.038 26.969H16.5887C17.024 26.969 17.3924 26.5992 17.3924 26.164V25.7688C18.421 26.0272 19.4496 26.0272 20.3497 25.7688V26.164C20.3497 26.5992 20.7787 26.969 21.2139 26.969H21.7644C22.1995 26.969 22.5355 26.5992 22.5355 26.164V24.742C23.5641 23.9714 24.3381 22.8545 24.7104 21.6973H25.183C25.6181 21.6973 26.0072 21.3101 26.0072 20.875V18.9022C26.0072 18.4668 25.6181 18.097 25.183 18.097ZM21.4121 18.8564C20.9527 18.8564 20.5802 18.4841 20.5802 18.0245C20.5802 17.5651 20.9526 17.1924 21.4121 17.1924C21.8717 17.1924 22.2443 17.565 22.2443 18.0245C22.2442 18.4842 21.8715 18.8564 21.4121 18.8564Z" fill="#40196D"></path></svg>
                          </span>
                          <span>Save</span>
                        </a>
                      </li>
                      <li className="text-[1rem] mb-5">
                        <a href="/"className="flex items-center">
                          <span className="flex mr-[15px]">
                          <svg width="37" height="38" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><g clip-path="url(#clip0_NEW_ICON_COPY)"><path d="M17.9643 11.0671C17.9643 11.3856 17.9643 11.6537 17.9643 11.9386C17.9643 14.1509 17.9643 16.38 17.9643 18.5923C17.9643 18.9107 18.0647 19.0951 18.3493 19.2459C20.2913 20.4023 22.2165 21.5755 24.1418 22.7487C24.2589 22.8157 24.3761 22.8995 24.4766 22.9666C22.6183 25.5811 18.8851 26.8549 15.4699 25.38C12.1886 23.9554 10.3639 20.3018 11.2009 16.7319C12.0714 13.0951 15.3694 11.1007 17.9643 11.0671Z" fill="#40196D"></path><path d="M18.6844 11C21.5806 11.1844 23.7737 12.4916 25.1129 15.0391C26.4187 17.5028 26.2513 20 24.8786 22.4469C23.4388 21.5754 22.0158 20.7207 20.5928 19.8492C20.0236 19.4972 19.4377 19.162 18.8853 18.7933C18.7681 18.7095 18.6509 18.5419 18.6341 18.4078C18.6174 15.9944 18.6174 13.581 18.6341 11.1676C18.6341 11.1508 18.6509 11.1006 18.6844 11Z" fill="white"></path></g><defs><clipPath id="clip0_NEW_ICON_COPY"><rect x="11" y="11" width="15" height="15" fill="white"></rect></clipPath></defs></svg>
                          </span>
                          <span>Budget</span>
                        </a>
                      </li>
                      <li className="text-[1rem] mb-5">
                        <a href="/"className="flex items-center">
                          <span className="flex mr-[15px]">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><circle cx="12.5" cy="12.5" r="12.5" fill="#DFE3FF"></circle><path d="M10.9929 9.58548C10.8072 9.58548 10.6568 9.73587 10.6568 9.9215C10.6568 10.1071 10.8072 10.2572 10.9929 10.2572H14.0258C14.2114 10.2572 14.3616 10.1071 14.3616 9.9215C14.3616 9.73587 14.2114 9.58548 14.0258 9.58548H10.9929ZM13.973 10.5446H11.0738C10.6378 11.4754 8.27963 12.6306 8.30043 15.3588C8.31796 17.6262 10.0106 18 12.5167 18C12.5189 18 12.5212 18 12.5234 18C12.5258 18 12.5279 18 12.5303 18C15.0362 18 16.7289 17.6262 16.7464 15.3588C16.7672 12.6306 14.4092 11.4754 13.973 10.5446ZM12.6841 11.9608V12.2221C12.8563 12.2401 13.0047 12.2755 13.1274 12.3283C13.2511 12.3819 13.3582 12.4618 13.4505 12.5698C13.523 12.6521 13.5791 12.737 13.6186 12.8236C13.6581 12.9109 13.6779 12.99 13.6779 13.0625C13.6779 13.1433 13.6482 13.2133 13.5897 13.2719C13.5304 13.3303 13.4594 13.36 13.3756 13.36C13.2173 13.36 13.1143 13.2743 13.0681 13.1038C13.0146 12.9027 12.8868 12.7684 12.6841 12.7024V13.7069C12.8835 13.7614 13.0433 13.8116 13.1612 13.8569C13.2798 13.9015 13.3862 13.9666 13.4794 14.0522C13.5791 14.1404 13.6564 14.2468 13.7109 14.3695C13.7644 14.493 13.7917 14.6275 13.7917 14.7741C13.7917 14.9578 13.7487 15.1292 13.6623 15.2892C13.5756 15.4499 13.4488 15.58 13.2816 15.6823C13.1135 15.7835 12.9148 15.8436 12.6841 15.8626V16.2199C12.6841 16.3146 12.6747 16.3837 12.6561 16.4275C12.6375 16.471 12.5975 16.4927 12.5341 16.4927C12.4765 16.4927 12.4358 16.4755 12.4122 16.4399C12.3888 16.4046 12.3777 16.3493 12.3777 16.2751V15.8675C12.1896 15.8469 12.0248 15.8026 11.884 15.7348C11.7431 15.6673 11.6252 15.5833 11.5313 15.4827C11.4373 15.3815 11.3672 15.2768 11.3229 15.1689C11.2775 15.0601 11.2551 14.953 11.2551 14.8481C11.2551 14.7717 11.2849 14.7015 11.3459 14.6398C11.4061 14.578 11.481 14.5467 11.5709 14.5467C11.6432 14.5467 11.7043 14.5632 11.7546 14.5969C11.8039 14.6307 11.8387 14.6785 11.8584 14.7395C11.9012 14.8713 11.9392 14.9726 11.9713 15.0427C12.0043 15.1128 12.0528 15.1771 12.118 15.2347C12.1831 15.2924 12.2696 15.337 12.3777 15.3674V14.245C12.1616 14.1849 11.982 14.119 11.8369 14.0457C11.6919 13.9723 11.5741 13.8685 11.4843 13.7334C11.3945 13.5983 11.3492 13.4243 11.3492 13.2117C11.3492 12.9348 11.4373 12.7074 11.6137 12.5311C11.79 12.3539 12.0446 12.2508 12.3777 12.2221V11.9658C12.3777 11.8305 12.4287 11.763 12.5299 11.763C12.6331 11.763 12.6841 11.829 12.6841 11.9608ZM12.3777 13.6172V12.6927C12.2424 12.7329 12.1369 12.7856 12.0611 12.8516C11.9853 12.9175 11.9475 13.018 11.9475 13.1516C11.9475 13.2784 11.9829 13.3748 12.0537 13.44C12.1247 13.5051 12.2326 13.5644 12.3777 13.6172ZM12.6841 14.3341V15.3921C12.8464 15.36 12.9717 15.2948 13.0607 15.1969C13.1489 15.0979 13.1934 14.9843 13.1934 14.8531C13.1934 14.7131 13.1506 14.6051 13.064 14.5285C12.9782 14.4518 12.8514 14.3868 12.6841 14.3341ZM11.131 9.37459H13.9517C14.3721 7.9561 15.0428 8.07195 14.5039 7.56113C13.9653 7.05015 12.1422 6.70485 10.947 7.35798C9.75192 8.01093 10.7106 7.9561 11.131 9.37459Z" fill="#40196D"></path><rect x="10.5002" y="9.50732" width="3.96" height="0.88" rx="0.44" fill="white"></rect><rect x="10.8342" y="11.761" width="3.32552" height="5.17304" fill="#40196D"></rect></svg>
                          </span>
                          <span>Borrow</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mr-0 mt-[-5px]">
                <div>
                <p className="text-[1.15rem] font-bold text-[#40196d] leading-[1.5]">Company</p>
                <ul className="mt-[15px] text-[#000] list-none w-max">
                <li className="text-[1rem] mb-5">
                  <a href="/" className="list-none">Blog</a>
                </li>
                <li className="text-[1rem] mb-5">
                  <a href="/" className="list-none">Press</a>
                </li>
                <li className="text-[1rem] mb-5">
                  <a href="/" className="list-none">Join Our Team</a>
                </li>
                <li className="text-[1rem] mb-5">
                  <a href="/" className="list-none">About Us</a>
                </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
