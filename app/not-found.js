import './not-found.css'
import Link from 'next/link'
export default function NotFound() {
  return (
   <>
    <div>
<div className="main_wrapper">
  <div className="main">
    <div className="antenna">
      <div className="antenna_shadow"></div>
      <div className="a1"></div>
      <div className="a1d"></div>
      <div className="a2"></div>
      <div className="a2d"></div>
      <div className="a_base"></div>
    </div>
    <div className="tv">
      <div className="cruve">
        <svg
          className="curve_svg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 189.929 189.929"
          xmlSpace="preserve"
        >
          <path
            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
          ></path>
        </svg>
      </div>
      <div className="display_div">
        <div className="screen_out">
          <div className="screen_out1">
            <div className="screen">
              <span className="notfound_text"> NOT FOUND</span>
            </div>
            <div className="screenM">
              <span className="notfound_text"> NOT FOUND</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="buttons_div">
        <div className="b1"><div></div></div>
        <div className="b2"></div>
        <div className="speakers">
          <div className="g1">
            <div className="g11"></div>
            <div className="g12"></div>
            <div className="g13"></div>
          </div>
          <div className="g"></div>
          <div className="g"></div>
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="base1"></div>
      <div className="base2"></div>
      <div className="base3"></div>
    </div>
  </div>
  <div className="text_404">
    <div className="text_4041">4</div>
    <div className="text_4042">0</div>
    <div className="text_4043">4</div>
  </div>


<a href='/' className='goBack'>
<button
  className="bg-transparent text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
  type="button"
 
>
  <div
    className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      height="25px"
      width="25px"
    >
      <path
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        fill="#000000"
      ></path>
      <path
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        fill="#000000"
      ></path>
    </svg>
  </div>
  <p className="translate-x-2">Go Back</p>
</button>
</a>
</div>
</div>
   </>
  )
}