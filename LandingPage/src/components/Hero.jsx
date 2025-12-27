import hero from '/Hero.png'

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="lg:hidden">
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="space-y-6 text-center flex flex-col items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-2 justify-center">
                <div className="h-px w-8 sm:w-12 bg-gray-800" />
                <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-gray-700 font-medium">
                  PRODUCTIVITY PLATFORM
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight">
                Manage Work
                <span className="block mt-1 sm:mt-2 font-serif italic">
                  Without Chaos
                </span>
              </h1>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                A simple SaaS tool to organize tasks, track progress, and help teams
                stay focused on what matters.
              </p>
            </div>

            <a 
              href="/signup" 
              className="group inline-flex items-center gap-3 text-xs sm:text-sm tracking-wider font-medium text-gray-900 hover:gap-5 transition-all duration-300"
            >
              GET STARTED FREE
              <span className="text-lg sm:text-xl">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex relative h-[65vh] items-center justify-center overflow-hidden">
        <div className="container mx-auto px-15">
          <div className="max-w-3xl mx-auto space-y-8 text-center flex flex-col items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center">
                <div className="h-px w-12 bg-gray-800" />
                <span className="text-xs tracking-[0.3em] text-gray-700 font-medium">
                  PRODUCTIVITY PLATFORM
                </span>
                <div className="h-px w-12 bg-gray-800" />
              </div>
              
              <h1 className="text-7xl font-light text-gray-900 leading-tight">
                Manage Work
                <span className="block mt-2 font-serif italic">
                  Without Chaos
                </span>
              </h1>
              
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Plan tasks, collaborate with your team, and track progress —
                all from one clean and simple dashboard.
              </p>
            </div>

            <a 
              href="/signup" 
              className="group inline-flex items-center gap-3 text-sm tracking-wider font-medium text-gray-900 hover:gap-5 transition-all duration-300"
            >
              GET STARTED FREE
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
