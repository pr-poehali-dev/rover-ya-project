
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Испытайте Будущее Уже Сегодня
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Наши передовые роботы-доставщики созданы для трансформации того, 
            как мы взаимодействуем с технологиями в повседневной среде.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/pp-uploads/0b48b14b-7a27-49c0-ac07-8ba8e76e330c.png"
              alt="Передовые роботы-доставщики Яндекс нового поколения" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Робототехника Нового Поколения</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Созданные с прецизионной инженерией и продвинутым ИИ, наши роботы 
              бесшовно интегрируются в различные среды, от домов до больниц, 
              предоставляя помощь и обогащая человеческий опыт.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
