
import { FaShieldAlt, FaEye, FaBolt } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="flex justify-around  gap-6 items-center p-8 text-white">

        {/* Left */}
        <div>
          {/* Heading */}
          <div className="inline-flex items-center gap-2 rounded-lg border border-gray-500/50 px-3 py-2">
            <img src="null" alt="" className="h-4 w-4" />

            <p className="text-xs font-bold">
              Built on Stellar <span className="text-green-600">•</span> Secure • Transparent • Immutable
            </p>
          </div>

          <div className="text-6xl font-extrabold leading-tight">
            <p>The Future of</p>
            <p>Land Ownership</p>
            <p>
              is <span className="text-green-800">On-Chain</span>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">GeoLedger is a decentralized land registry platform built on Stellar.</p> 
            <p className="text-sm font-semibold">We make make land ownership secure, transparent, and verifiable for everyone.</p> 
          </div>

          <div className="flex flex-row gap-3 items-center mt-4">

<div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-2xl border-[0.7px] border-green-500/30 bg-green-500/5 flex items-center justify-center">
              <FaShieldAlt className="text-green-400 text-xl" />
            </div>
      <p className="text-xs">Secure</p>
      </div>

          <div className="border-[0.1px] bg-green-900 py-4"></div>

<div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-2xl border-[0.7px] border-green-500/30 bg-green-500/5 flex items-center justify-center">
              <FaEye className="text-green-400 text-xl" />
            </div>
            <p className="text-xs">Transparent</p>
</div>


            <div className="border-[0.9px] bg-gray-50 py-4"></div>

<div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-2xl border-[0.7px] border-green-500/30 bg-green-500/5 flex items-center justify-center">
              <FaBolt className="text-green-400 text-xl" />
            </div>
            <p className="text-xs">Immutable</p>
</div>

          </div>

        </div>

        {/* Right */}
        <img
          src="/hero1.png"
          alt="GeoLedger Network Map"
          className="w-fit h-auto object-contain"
        />
      </div>
    </>
  )
}

