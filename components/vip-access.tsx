export function VipAccess() {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-orange-500/20 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-12 space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              VIP EARLY ACCESS
            </h2>
            <p className="text-xl text-gray-300">
              Secure your drop before anyone else
            </p>
            
            <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-orange-500 to-amber-400 h-full"
                style={{ width: "93%" }}
              />
            </div>
            
            <p className="text-amber-400">Only 7/100 Spots Left</p>
            
            <button className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-black font-bold py-4 rounded-lg text-lg hover:opacity-90 transition-opacity">
              HOLD TO RESERVE
            </button>
          </div>
        </div>
      </section>
    )
  }