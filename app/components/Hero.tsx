
import Image from "next/image";
import Navbar from "./Navbar";
import Badge from "./Badge";
import Btn from "./Btn";

export default function Hero() {

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <Navbar />

      <div className="animate-float1 px-4 absolute w-68 h-21 bg-[#D9D9D9]/20 backdrop-blur-2xl rounded-2xl top-65 left-80 z-30 flex items-center justify-start gap-4">
        <svg
          width="75"
          height="80"
          viewBox="0 0 61 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="#FFF500"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint0_radial_1122_817)"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint1_radial_1122_817)"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint2_radial_1122_817)"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint3_radial_1122_817)"
            fillOpacity="0.3"
          />
          <path
            d="M31.1702 14C28.3901 14 25.6372 14.5833 23.0687 15.7165C20.5002 16.8497 18.1664 18.5107 16.2006 20.6046C14.2348 22.6985 12.6754 25.1844 11.6115 27.9202C10.5476 30.656 10 33.5883 10 36.5495C10.0088 39.0883 10.42 41.6072 11.2163 44C10.8784 42.4958 10.7038 40.9552 10.696 39.4086C10.6962 34.0531 12.6937 28.917 16.2489 25.13C19.8042 21.3431 24.6262 19.2155 29.6541 19.2153C33.4137 19.2192 37.0874 20.4137 40.2082 22.6469L43.9846 18.6244C40.3031 15.6314 35.8016 14.0069 31.1702 14ZM47.3097 20.7715C46.8656 20.7794 46.4147 20.9637 46.0417 21.3L29.8229 35.9219C29.0771 36.5946 27.3246 38.5752 29.8194 41.2327C32.3148 43.8906 34.1736 42.0197 34.8053 41.2254L48.5363 23.9572C49.168 23.1628 49.2274 22.0361 48.5363 21.3C48.1907 20.9319 47.7538 20.7635 47.3097 20.7715ZM50.5728 27.5503L47.0065 31.3489C48.0317 33.8355 48.5755 36.5168 48.6053 39.2324H52.1612C52.271 38.3427 52.3308 37.4468 52.3404 36.5495C52.3377 33.4523 51.7359 30.3889 50.5728 27.5503Z"
            fill="black"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1122_817"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-56.1477 114.821 -29.9997 -98.2685 57.8807 -76.2481)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.67589" stopColor="#FFF700" />
              <stop offset="1" stopColor="#FFC700" stopOpacity="0.38" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_1122_817"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(15.25 66.3807 -43.7642 67.3492 20.1023 -2.0551e-06)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.212469" stopColor="#DFD800" stopOpacity="0.92" />
              <stop offset="0.886241" stopColor="#FFA96A" stopOpacity="0.57" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_1122_817"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(23.9148 -22.4259 14.5464 103.91 3.46591 57.4103)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F6FB22" stopOpacity="0.51" />
              <stop offset="1" stopColor="#FF9E45" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_1122_817"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-19.0625 17.9407 -19.0625 -135.677 58.9205 17.9407)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-[#A39E91]">Performance</p>
          <p className="text-[20px]">
            98<span className="text-[#FFC700]">%</span>
          </p>
          <div className="w-full bg-linear-0 to-[#FFF500] from-[#dcd400] h-0.75 rounded-full"></div>
        </div>
      </div>

      <div className="animate-float2 px-4 absolute w-68 h-21 bg-[#D9D9D9]/20 backdrop-blur-2xl rounded-2xl bottom-65 left-70 z-30 flex items-center justify-start gap-4">
        <svg
          width="75"
          height="80"
          viewBox="0 0 61 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 13.5866C0 8.06371 4.47715 3.58655 10 3.58655H51C56.5229 3.58655 61 8.0637 61 13.5865V50.9969C61 56.5197 56.5228 60.9969 51 60.9969H10C4.47715 60.9969 0 56.5197 0 50.9969V13.5866Z"
            fill="#FFF500"
          />
          <path
            d="M0 13.5866C0 8.06371 4.47715 3.58655 10 3.58655H51C56.5229 3.58655 61 8.0637 61 13.5865V50.9969C61 56.5197 56.5228 60.9969 51 60.9969H10C4.47715 60.9969 0 56.5197 0 50.9969V13.5866Z"
            fill="url(#paint0_radial_1127_818)"
          />
          <path
            d="M0 13.5866C0 8.06371 4.47715 3.58655 10 3.58655H51C56.5229 3.58655 61 8.0637 61 13.5865V50.9969C61 56.5197 56.5228 60.9969 51 60.9969H10C4.47715 60.9969 0 56.5197 0 50.9969V13.5866Z"
            fill="url(#paint1_radial_1127_818)"
          />
          <path
            d="M0 13.5866C0 8.06371 4.47715 3.58655 10 3.58655H51C56.5229 3.58655 61 8.0637 61 13.5865V50.9969C61 56.5197 56.5228 60.9969 51 60.9969H10C4.47715 60.9969 0 56.5197 0 50.9969V13.5866Z"
            fill="url(#paint2_radial_1127_818)"
            fillOpacity="0.4"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="#FFF500"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint3_radial_1127_818)"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint4_radial_1127_818)"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint5_radial_1127_818)"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint6_radial_1127_818)"
            fillOpacity="0.3"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M17 23.5C17 18.8056 21.0294 15 26 15C30.9706 15 35 18.8056 35 23.5C35 28.1945 30.9706 32 26 32C21.0294 32 17 28.1945 17 23.5Z"
            fill="black"
          />
          <path
            d="M36.0428 28.2602C35.9624 28.4203 35.9965 28.62 36.1349 28.7277C37.1631 29.5272 38.4354 30 39.8127 30C43.2298 30 46 27.0899 46 23.5C46 19.9101 43.2298 17 39.8127 17C38.4354 17 37.1631 17.4728 36.1349 18.2724C35.9965 18.3801 35.9624 18.5796 36.0428 18.7398C36.7568 20.1612 37.161 21.781 37.161 23.5C37.161 25.219 36.7568 26.8388 36.0428 28.2602Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M17.0981 35.3986C19.4827 34.3288 22.6113 34 26.4995 34C30.3911 34 33.522 34.3294 35.9074 35.4016C38.5058 36.5694 40.0851 38.5586 40.9128 41.3672C41.3008 42.6836 40.3442 44 39.0259 44H13.9768C12.657 44 11.6984 42.6816 12.0875 41.3628C12.9164 38.5538 14.498 36.5652 17.0981 35.3986Z"
            fill="black"
          />
          <path
            d="M36.612 32.0743C35.8387 32.1257 35.7933 33.2379 36.5038 33.5686C38.4509 34.475 39.917 35.8094 40.9684 37.5125C41.8311 38.91 43.1709 40 44.7356 40H48.0615C49.3824 40 50.3462 38.5949 49.8815 37.2221C49.8548 37.1431 49.827 37.0647 49.7982 36.987C49.1587 35.2581 48.0624 33.9853 46.4393 33.1741C44.9153 32.4124 43.0075 32.0981 40.7599 32.0031L40.7229 32.0015H40.6861C39.3622 32.0015 37.9794 31.9833 36.612 32.0743Z"
            fill="black"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-56.1477 114.821 -29.9997 -98.2685 57.8807 -72.6612)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.67589" stopColor="#FFF700" />
              <stop offset="1" stopColor="#DBFF00" stopOpacity="0.38" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(8.66477 84.3214 -55.5923 38.2666 26.6875 -14.3538)"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.212469"
                stopColor="#FFF700"
                stopOpacity="0.92"
              />
              <stop
                offset="0.886241"
                stopColor="#FFA96A"
                stopOpacity="0.57"
              />
            </radialGradient>
            <radialGradient
              id="paint2_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(13.1705 -66.3807 19.836 26.3632 22.875 60.9972)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.73" />
              <stop offset="1" stopColor="white" stopOpacity="0.12" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-56.1477 114.821 -29.9997 -98.2685 57.8807 -76.2481)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.67589" stopColor="#FFF700" />
              <stop offset="1" stopColor="#FFC700" stopOpacity="0.38" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(15.25 66.3807 -43.7642 67.3492 20.1023 -2.0551e-06)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.212469" stopColor="#DFD800" stopOpacity="0.92" />
              <stop offset="0.886241" stopColor="#FFA96A" stopOpacity="0.57" />
            </radialGradient>
            <radialGradient
              id="paint5_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(23.9148 -22.4259 14.5464 103.91 3.46591 57.4103)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F6FB22" stopOpacity="0.51" />
              <stop offset="1" stopColor="#FF9E45" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint6_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-19.0625 17.9407 -19.0625 -135.677 58.9205 17.9407)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-[#A39E91]">Partners</p>
          <p className="text-[20px] font-medium">
            12,489 <span className="text-[#FFC700] text-[11px]">↑ 24%</span>
          </p>
        </div>
      </div>

      <div className="animate-float2 px-4 absolute w-68 h-21 bg-[#D9D9D9]/20 backdrop-blur-2xl rounded-2xl top-85 right-70 z-30 flex items-center justify-start gap-4">
        <svg
          width="75"
          height="80"
          viewBox="0 0 61 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 13.5866C0 8.06371 4.47715 3.58655 10 3.58655H51C56.5229 3.58655 61 8.0637 61 13.5865V50.9969C61 56.5197 56.5228 60.9969 51 60.9969H10C4.47715 60.9969 0 56.5197 0 50.9969V13.5866Z"
            fill="#FFF500"
          />
          <path
            d="M0 13.5866C0 8.06371 4.47715 3.58655 10 3.58655H51C56.5229 3.58655 61 8.0637 61 13.5865V50.9969C61 56.5197 56.5228 60.9969 51 60.9969H10C4.47715 60.9969 0 56.5197 0 50.9969V13.5866Z"
            fill="url(#paint0_radial_1127_818)"
          />
          <path
            d="M0 13.5866C0 8.06371 4.47715 3.58655 10 3.58655H51C56.5229 3.58655 61 8.0637 61 13.5865V50.9969C61 56.5197 56.5228 60.9969 51 60.9969H10C4.47715 60.9969 0 56.5197 0 50.9969V13.5866Z"
            fill="url(#paint1_radial_1127_818)"
          />
          <path
            d="M0 13.5866C0 8.06371 4.47715 3.58655 10 3.58655H51C56.5229 3.58655 61 8.0637 61 13.5865V50.9969C61 56.5197 56.5228 60.9969 51 60.9969H10C4.47715 60.9969 0 56.5197 0 50.9969V13.5866Z"
            fill="url(#paint2_radial_1127_818)"
            fillOpacity="0.4"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="#FFF500"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint3_radial_1127_818)"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint4_radial_1127_818)"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint5_radial_1127_818)"
          />
          <path
            d="M0 10C0 4.47716 4.47715 0 10 0H51C56.5229 0 61 4.47715 61 10V47.4103C61 52.9332 56.5228 57.4103 51 57.4103H10C4.47715 57.4103 0 52.9332 0 47.4103V10Z"
            fill="url(#paint6_radial_1127_818)"
            fillOpacity="0.3"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M17 23.5C17 18.8056 21.0294 15 26 15C30.9706 15 35 18.8056 35 23.5C35 28.1945 30.9706 32 26 32C21.0294 32 17 28.1945 17 23.5Z"
            fill="black"
          />
          <path
            d="M36.0428 28.2602C35.9624 28.4203 35.9965 28.62 36.1349 28.7277C37.1631 29.5272 38.4354 30 39.8127 30C43.2298 30 46 27.0899 46 23.5C46 19.9101 43.2298 17 39.8127 17C38.4354 17 37.1631 17.4728 36.1349 18.2724C35.9965 18.3801 35.9624 18.5796 36.0428 18.7398C36.7568 20.1612 37.161 21.781 37.161 23.5C37.161 25.219 36.7568 26.8388 36.0428 28.2602Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M17.0981 35.3986C19.4827 34.3288 22.6113 34 26.4995 34C30.3911 34 33.522 34.3294 35.9074 35.4016C38.5058 36.5694 40.0851 38.5586 40.9128 41.3672C41.3008 42.6836 40.3442 44 39.0259 44H13.9768C12.657 44 11.6984 42.6816 12.0875 41.3628C12.9164 38.5538 14.498 36.5652 17.0981 35.3986Z"
            fill="black"
          />
          <path
            d="M36.612 32.0743C35.8387 32.1257 35.7933 33.2379 36.5038 33.5686C38.4509 34.475 39.917 35.8094 40.9684 37.5125C41.8311 38.91 43.1709 40 44.7356 40H48.0615C49.3824 40 50.3462 38.5949 49.8815 37.2221C49.8548 37.1431 49.827 37.0647 49.7982 36.987C49.1587 35.2581 48.0624 33.9853 46.4393 33.1741C44.9153 32.4124 43.0075 32.0981 40.7599 32.0031L40.7229 32.0015H40.6861C39.3622 32.0015 37.9794 31.9833 36.612 32.0743Z"
            fill="black"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-56.1477 114.821 -29.9997 -98.2685 57.8807 -72.6612)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.67589" stopColor="#FFF700" />
              <stop offset="1" stopColor="#DBFF00" stopOpacity="0.38" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(8.66477 84.3214 -55.5923 38.2666 26.6875 -14.3538)"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.212469"
                stopColor="#FFF700"
                stopOpacity="0.92"
              />
              <stop
                offset="0.886241"
                stopColor="#FFA96A"
                stopOpacity="0.57"
              />
            </radialGradient>
            <radialGradient
              id="paint2_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(13.1705 -66.3807 19.836 26.3632 22.875 60.9972)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.73" />
              <stop offset="1" stopColor="white" stopOpacity="0.12" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-56.1477 114.821 -29.9997 -98.2685 57.8807 -76.2481)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.67589" stopColor="#FFF700" />
              <stop offset="1" stopColor="#FFC700" stopOpacity="0.38" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(15.25 66.3807 -43.7642 67.3492 20.1023 -2.0551e-06)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.212469" stopColor="#DFD800" stopOpacity="0.92" />
              <stop offset="0.886241" stopColor="#FFA96A" stopOpacity="0.57" />
            </radialGradient>
            <radialGradient
              id="paint5_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(23.9148 -22.4259 14.5464 103.91 3.46591 57.4103)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F6FB22" stopOpacity="0.51" />
              <stop offset="1" stopColor="#FF9E45" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint6_radial_1127_818"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-19.0625 17.9407 -19.0625 -135.677 58.9205 17.9407)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-[#A39E91]">Automation</p>
          <p className="text-[20px] font-medium">
               Active · Running
          </p>
        </div>
      </div>

      <Image
        src="/fly.png"
        alt="Hero"
        width={400}
        height={400}
        className="absolute z-20 left-0"
      />
      <Image
        src="/fly2.png"
        alt="Hero"
        width={300}
        height={300}
        className="absolute z-20 right-10 bottom-10"
      />
      <Image
        src="/Background.png"
        alt="Hero"
        fill
        objectFit="cover"
        quality={75}
        priority
        sizes="100vw"
      />
      <Badge text="Infrastructure For Optimization" />
      <h1 className="text-[83px] max-w-223.25 text-center z-40 font-bold leading-tight">
        We Build {" "}
        <span className="bg-linear-to-b from-[#FFE34A] from-0% to-100% to-[#B18300] bg-clip-text text-transparent">
          Digital Infrastructure
        </span>{" "}
        That Scales Your Business
      </h1>
      <p className="text-[17px] text-[#A39E91] z-40 max-w-200 text-center ">
        From high-performance websites to complex web applications and
        automation systems, IFO helps businesses grow faster with optimized
        digital solutions.
      </p>

      <div className="w-fit h-fit flex flex-row gap-4 z-40 mt-5">
        <Btn text="Start a Project" />
        <button className="text-[17px] hover:cursor-pointer font-normal px-10 py-3 bg-[#D9D9D9]/20 backdrop-blur-2xl text-white rounded-2xl ">
          View Our Work
        </button>
      </div>
    </div>
  );
}
