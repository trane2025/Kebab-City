import { useState } from 'react';
import styled from 'styled-components';

function ButtonMobileNav({ activeBtn, setActiveBtn }) {


    return (
        <ButtonWraper active={activeBtn} onClick={() => setActiveBtn(!activeBtn)}>

            <svg className={`ham hamRotate ham1 ${activeBtn && 'active'}`} viewBox="0 0 100 100" width="50">
                <path
                    className="line top"
                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                <path
                    className="line middle"
                    d="m 30,50 h 40" />
                <path
                    className="line bottom"
                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
            </svg>
        </ButtonWraper>
    )
}

export default ButtonMobileNav;

const ButtonWraper = styled.button`
    
  position: fixed;
  position: ${({ active }) => active ? 'fixed' : 'absolute'};
  right: 10px;
  top: 10px;
  z-index: 20;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: linear-gradient(0deg, #1d1f2b 0%, #1f1e20 100%);
  border-radius: 10px;
  min-width: 60px;
  min-height: 60px;
  outline: none;

  

  @media (max-width: 1000px) {
      display: flex;
  }



.ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    user-select: none;
  }
  
  .hamRotate.active {
    transform: rotate(45deg);
  }
  
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  
  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #ffffff;
    stroke-width:5.5;
    stroke-linecap:round;
  }
  
  .ham1 .top {
    stroke-dasharray: 40 139;
  }
  
  .ham1 .bottom {
    stroke-dasharray: 40 180;
  }
  
  .ham1.active .top {
    stroke-dashoffset: -98px;
  }
  
  .ham1.active .bottom {
    stroke-dashoffset: -138px;
  }
  
  .ham2 .top {
    stroke-dasharray: 40 121;
  }
  
  .ham2 .bottom {
    stroke-dasharray: 40 121;
  }
  
  .ham2.active .top {
    stroke-dashoffset: -102px;
  }
  
  .ham2.active .bottom {
    stroke-dashoffset: -102px;
  }
  
  .ham2.active {
    transform: rotate(90deg);
  }
`;
