import React from "react";
const SpecsSection = () => {
  return <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
              <span>Характеристики</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center font-medium">
              Ровер работает вместе с вашей командой, а не вместо неё. Автоматизируя рутинные задачи, улучшая условия безопасности и обучаясь на каждом взаимодействии, Ровер помогает людям сосредоточиться на том, что они умеют лучше всего: создавать, решать и внедрять инновации.
            </span>
          </h2>
        </div>
      </div>
    </section>;
};
export default SpecsSection;