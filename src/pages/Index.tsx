import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useMemo } from 'react';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroSection = useScrollAnimation();
  const targetSection = useScrollAnimation();
  const authorSection = useScrollAnimation();
  const programSection = useScrollAnimation();
  const courseSection = useScrollAnimation();
  const tariffsSection = useScrollAnimation();
  const guaranteesSection = useScrollAnimation();
  const faqSection = useScrollAnimation();

  // Мемоизация стиля кнопки для уменьшения рендеров
  const buttonGlowStyle = useMemo(() => ({
    boxShadow: '0 0 30px rgba(14, 165, 233, 0.4), 0 0 60px rgba(14, 165, 233, 0.2), 0 0 90px rgba(14, 165, 233, 0.1)'
  }), []);

  return (
    <div className="min-h-screen bg-gradient-dark overflow-x-hidden overflow-y-auto scrollbar-hide">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-blue-500/20 z-50 overflow-x-hidden">
        <div className="container mx-auto px-4 py-4 max-w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">ЭВОЛЮЦИЯ АРТИСТА</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a href="#program" className="text-gray-300 hover:text-yellow-400 transition-colors hover:scale-105 duration-300 text-sm lg:text-base">Программа</a>
              <a href="#tariffs" className="text-gray-300 hover:text-yellow-400 transition-colors hover:scale-105 duration-300 text-sm lg:text-base">Тарифы</a>
              <a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-colors hover:scale-105 duration-300 text-sm lg:text-base">FAQ</a>
              <Button asChild className="bg-gradient-gold hover:bg-gradient-gold/90 text-white border-0 hover:scale-102 transition-all duration-500 text-sm lg:text-base px-3 lg:px-4" style={buttonGlowStyle}>
                <a href="#tariffs">Стать артистом</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Открыть меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-blue-500/20">
              <div className="flex flex-col space-y-4 pt-4">
                <a 
                  href="#program" 
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-base px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Программа
                </a>
                <a 
                  href="#tariffs" 
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-base px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Тарифы
                </a>
                <a 
                  href="#faq" 
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-base px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <Button 
                  asChild
                  className="bg-gradient-gold hover:bg-gradient-gold/90 text-white border-0 transition-all duration-500 text-base w-full mt-2" 
                  style={buttonGlowStyle}
                >
                  <a href="#tariffs" onClick={() => setIsMobileMenuOpen(false)}>Стать артистом</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroSection.ref} className="pt-24 pb-16 px-4 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${heroSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-heading text-white mb-6 leading-tight hover:scale-105 transition-transform duration-300 break-words">
              ЭВОЛЮЦИЯ <span className="bg-gradient-text bg-clip-text text-transparent">АРТИСТА</span>
            </h1>
            <p className="text-subheading text-gray-300 mb-4 max-w-4xl mx-auto px-2">
              Твои песни заслуживают миллионы прослушиваний.<br className="hidden sm:block" />
              <span className="block sm:inline"> Я покажу, как этого добиться за 30 дней</span>
            </p>
            <p className="text-body text-gray-400 mb-8 px-2">
              Я артист, который сделал результат сначала себе. Теперь твоя очередь.
            </p>

            {/* YouTube Awards Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative max-w-lg w-full">
                <div className="absolute inset-0 bg-gradient-gold/20 blur-3xl scale-110"></div>
                <img 
                  src="https://cdn.poehali.dev/files/8b6cffcd-d096-4060-9ebd-56fc97d2ac84.png"
                  alt="Денис Авантюрист с наградами YouTube"
                  className="relative w-full h-auto object-contain rounded-2xl shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))' }}
                />
              </div>
            </div>

            <Button asChild size="lg" className="bg-gradient-gold hover:bg-gradient-gold/90 text-white px-8 sm:px-12 md:px-16 lg:px-20 py-5 md:py-7 lg:py-8 text-xl md:text-2xl lg:text-3xl rounded-full border-0 hover:scale-105 transition-all duration-500 font-bold shadow-2xl" style={buttonGlowStyle}>
              <a href="#tariffs">Стать артистом</a>
            </Button>
          </div>


        </div>
      </section>

      {/* Target Audience */}
      <section ref={targetSection.ref} className="py-16 bg-black/40 backdrop-blur-sm overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className={`transition-all duration-1000 ${targetSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-heading text-center mb-12 text-white">КОМУ ПОДХОДИТ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all">
                <CardHeader>
                  <Icon name="Mic" className="w-12 h-12 text-yellow-400 mb-4 hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl text-white">Начинающий музыкант</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Ты только собираешься выпустить свой первый трек и хочешь чтобы его услышали не только друзья
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all">
                <CardHeader>
                  <Icon name="Music" className="w-12 h-12 text-yellow-400 mb-4 hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl text-white">Действующий артист</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Ты уже выпустил около 7 песен и сейчас готовишь новый релиз, в котором уверен на 100%
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all">
                <CardHeader>
                  <Icon name="Star" className="w-12 h-12 text-yellow-400 mb-4 hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl text-white">Будущая звезда</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Ты уверен в том, что твой каждый трек это настоящий ХИТ, у тебя нет запасных вариантов, кроме как стать звездой
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Author */}
      <section ref={authorSection.ref} className="py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className={`transition-all duration-1000 ${authorSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-heading mb-8 text-white">МЕНЯ ЗОВУТ <span className="bg-gradient-text bg-clip-text text-transparent">ДЕНИС АВАНТЮРИСТ</span></h2>
            <p className="text-body text-gray-300 leading-relaxed mb-8">
              Я занимаюсь музыкой с 2016 года. Мои песни набирали по 50 прослушиваний, но мне удалось дойти до 2.000.000+ подписчиков и набрать более 5.000.000 прослушиваний своих треков, даже не смотря на дефекты в речи
            </p>
            
            {/* Denis Portrait with Blue Glow */}
            <div className="mb-12 flex justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl scale-110"></div>
                <img 
                  src="https://cdn.poehali.dev/files/17be61bc-8a81-4d19-87e3-41f9a2707823.png"
                  alt="Денис Авантюрист - социальные сети"
                  className="w-full max-w-4xl h-auto object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] filter brightness-105"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.3)) drop-shadow(0 0 30px rgba(59,130,246,0.4))' }}
                />
              </div>
            </div>
            <p className="text-body text-gray-300 leading-relaxed">
              <span className="font-semibold bg-gradient-text bg-clip-text text-transparent">Эволюция артиста</span> – это стратегия из 17+ практических уроков с примерами и заданиями. Получи весь мой опыт, все наработки и знания за 30 дней в одном продукте
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section ref={programSection.ref} id="program" className="py-16 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`transition-all duration-1000 ${programSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-heading text-center mb-4 text-white">ЧЕМУ ТЫ НАУЧИШЬСЯ?</h2>
            <p className="text-subheading text-center text-gray-300 mb-12">
              Не просто «снимать сниппеты», а <span className="bg-gradient-text bg-clip-text text-transparent font-semibold">управлять своей карьерой</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-body text-gray-300">Продвигать свою музыку современным способом</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-body text-gray-300">Вести блог и привлекать аудиторию через Reels, TikTok и YouTube</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-body text-gray-300">Сделаешь релиз песни с контентом и промо, чтобы трек реально слушали</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-body text-gray-300">Создавать контент-план и бесконечный поток идей</p>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h3 className="text-heading text-white mb-8">ВОТ КАК ОНА РАБОТАЕТ:</h3>
              <div className="flex flex-wrap justify-center items-center gap-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white px-4">
                <span className="bg-gradient-text bg-clip-text text-transparent">Стратегия</span>
                <span className="text-yellow-400">→</span>
                <span className="bg-gradient-text bg-clip-text text-transparent">Трек</span>
                <span className="text-yellow-400">→</span>
                <span className="bg-gradient-text bg-clip-text text-transparent">Сниппет</span>
                <span className="text-yellow-400">→</span>
                <span className="bg-gradient-text bg-clip-text text-transparent">Промо</span>
                <span className="text-yellow-400">→</span>
                <span className="bg-gradient-text bg-clip-text text-transparent">Контент</span>
                <span className="text-yellow-400">→</span>
                <span className="bg-gradient-text bg-clip-text text-transparent">Слушатели</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section ref={courseSection.ref} className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`transition-all duration-1000 ${courseSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-heading text-center mb-4 text-white">ПРОГРАММА КУРСА</h2>
            <p className="text-subheading text-center text-gray-300 mb-12">
              3 модуля по продвижению трека через вертикальный контент<br />
              Которые приведут тебя к результату
            </p>

            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <Badge className="bg-gradient-purple text-white text-lg px-4 py-2 border-0 w-fit">1 модуль</Badge>
                    <CardTitle className="text-xl sm:text-2xl text-white leading-tight">Позиционирование и стратегия артиста</CardTitle>
                  </div>
                  <CardDescription className="text-lg sm:text-xl text-yellow-400 font-semibold mt-2">ЗАЧЕМ СНИМАТЬ?</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">как выделяться на фоне других</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">как найти свои сильные стороны</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">как это поможет в генерации идей</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <Badge className="bg-gradient-purple text-white text-lg px-4 py-2 border-0 w-fit">2 модуль</Badge>
                    <CardTitle className="text-xl sm:text-2xl text-white leading-tight">Контент для роста слушателей</CardTitle>
                  </div>
                  <CardDescription className="text-lg sm:text-xl text-yellow-400 font-semibold mt-2">ЧТО СНИМАТЬ?</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">как найти СВОЙ формат</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">что снимать ДО и ПОСЛЕ релиза</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">источник бесконечных идей для контента</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <Badge className="bg-gradient-purple text-white text-lg px-4 py-2 border-0 w-fit">3 модуль</Badge>
                    <CardTitle className="text-xl sm:text-2xl text-white leading-tight">Артист = Блогер</CardTitle>
                  </div>
                  <CardDescription className="text-lg sm:text-xl text-yellow-400 font-semibold mt-2">КАК СНИМАТЬ?</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">фишки по постановке кадра / света и выбора локации</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">стильный и современный монтаж в CapCut</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">формула популярных коротких роликов</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 p-8 relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl scale-150 animate-pulse"></div>
              <div className="relative z-10">
                <h3 className="text-heading text-white mb-2" 
                    style={{ textShadow: '0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.2)' }}>
                  ГЛАВНЫЙ РЕЗУЛЬТАТ
                </h3>
                <p className="text-xl font-semibold bg-gradient-text bg-clip-text text-transparent">
                  РОСТ ПРОСМОТРОВ И ПРОСЛУШИВАНИЙ
                </p>
              </div>
            </div>

            {/* Result Images */}
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
              {/* New Image - Instagram Reels Stats */}
              <div className="relative max-w-md w-full">
                <div className="absolute inset-0 bg-gradient-gold/20 blur-3xl scale-110"></div>
                <img 
                  src="https://cdn.poehali.dev/files/26016d01-fcc6-4b18-8fb0-3a5850691c8f.png"
                  alt="Статистика видео Reels - рост просмотров"
                  className="relative w-full h-auto object-contain rounded-2xl shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))' }}
                />
              </div>
              
              {/* Existing Image - Liza Schultz Example */}
              <div className="relative max-w-md w-full">
                <div className="absolute inset-0 bg-gradient-gold/20 blur-3xl scale-110"></div>
                <img 
                  src="https://cdn.poehali.dev/files/84b79da0-5bf5-4dad-ab49-e27dcc75273a.png"
                  alt="Пример результата - 579.8 тыс. просмотров за 30 дней"
                  className="relative w-full h-auto object-contain rounded-2xl shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))' }}
                />
              </div>
            </div>
            
            {/* Third Image - YouTube Videos Stats */}
            <div className="mt-12 flex justify-center">
              <div className="relative max-w-xl w-full">
                <div className="absolute inset-0 bg-gradient-gold/20 blur-3xl scale-110"></div>
                <img 
                  src="https://cdn.poehali.dev/files/0752501a-51b4-4765-a80c-b5bc0c5edf15.png"
                  alt="Статистика видео на YouTube - миллионы просмотров"
                  className="relative w-full h-auto object-contain rounded-2xl shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))' }}
                />
              </div>
            </div>
            
            <p className="text-body text-gray-300 text-center mt-6">
              Пример того, как это повлияет на твой блог и твои прослушивания
            </p>

            <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h3 className="text-heading text-white mb-6">ВНУТРИ ТЕБЯ ЖДЁТ:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Icon name="FileText" className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <p className="font-semibold text-gray-300">Схема по эффективной публикации релиза</p>
                </div>
                <div className="text-center">
                  <Icon name="List" className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <p className="font-semibold text-gray-300">Список всех существующих форматов для артиста</p>
                </div>
                <div className="text-center">
                  <Icon name="Target" className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <p className="font-semibold text-gray-300">Подробный план по эффективному выпуску своего релиза</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section ref={tariffsSection.ref} id="tariffs" className="py-16 bg-black/40 backdrop-blur-sm overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className={`transition-all duration-1000 ${tariffsSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-heading text-center mb-12 text-white">ТАРИФЫ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:items-stretch">
              {/* Дебют */}
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">ДЕБЮТ</CardTitle>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">17.000₽</div>
                    <div className="text-gray-400 line-through">27.000₽</div>
                    <div className="text-sm text-yellow-400 font-semibold">по промокоду buro17</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-gray-300 font-medium">Цель – быстро внедрить фишки по продвижению и получить ощутимый результат за короткое время.</p>
                  </div>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">3 модуля по продвижению релиза</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Более 17 лекций от АВАНТЮРИСТА и практических заданий</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Геймификация обучения</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Доступ в закрытое сообщество "СЦЕНА" на 3 месяца</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Полезные гайды и чек-листы</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="X" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 line-through">Проверка контента и заданий от кураторов и Авантюриста</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="X" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 line-through">Артист-напарник</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="X" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 line-through">Модуль по применению ИИ для артиста</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="X" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 line-through">Сертификат о получении статуса АРТИСТА</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="X" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 line-through">Личная работа с Авантюристом</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="X" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 line-through">Индивидуальная стратегия и позиционирование</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="X" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 line-through">Разработка личного ИИ асистента</span>
                    </li>
                  </ul>
                  <div className="space-y-2 pt-4">
                    <div className="relative p-0.5 bg-gradient-gold rounded-full">
                      <Button asChild className="w-full bg-black hover:bg-gray-900 text-white border-0 rounded-full">
                        <a href="https://payform.ru/bq9kTml/" target="_blank" rel="noopener noreferrer">Оплатить</a>
                      </Button>
                    </div>
                    <div className="relative p-0.5 bg-gradient-gold rounded-full">
                      <Button asChild variant="ghost" className="w-full bg-black hover:bg-gray-900 text-white border-0 rounded-full">
                        <a href="https://payform.ru/bq9kTml/" target="_blank" rel="noopener noreferrer">В рассрочку</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Артист */}
              <Card className="bg-white/10 backdrop-blur-sm border-2 border-yellow-400/50 relative flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-text text-black px-4 py-1 font-bold">ПОПУЛЯРНЫЙ</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">АРТИСТ</CardTitle>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">47.000₽</div>
                    <div className="text-gray-400 line-through">57.000₽</div>
                    <div className="text-sm text-yellow-400 font-semibold">по промокоду buro17</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-gray-300 font-medium">Работа в группе. Старт нового потока – 10 октября</p>
                  </div>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">3 модуля по продвижению релиза</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Доступ в закрытое сообщество "СЦЕНА" на 6 месяцев</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Полезные гайды и чек-листы</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Геймификация обучения</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Проверка контента и заданий от кураторов и Авантюриста</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Артист-напарник</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Модуль по применению ИИ для артиста</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Сертификат о получении статуса "АРТИСТА"</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">2 групповые онлайн-встречи в ZOOM с АВАНТЮРИСТОМ</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="X" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 line-through">Личная работа с Авантюристом</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="X" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 line-through">Индивидуальная стратегия и позиционирование</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="X" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 line-through">Разработка личного ИИ асистента</span>
                    </li>
                  </ul>
                  <div>
                    <div className="bg-yellow-400/20 p-3 rounded-lg border border-yellow-400/30 mb-4">
                      <p className="text-sm font-semibold text-yellow-400">Ограниченное количество мест: 30 (осталось 19)</p>
                    </div>
                    <div className="space-y-2">
                    <div className="relative p-0.5 bg-gradient-gold rounded-full">
                      <Button asChild className="w-full bg-black hover:bg-gray-900 text-white border-0 rounded-full">
                        <a href="https://payform.ru/oh9kTJf/" target="_blank" rel="noopener noreferrer">Оплатить</a>
                      </Button>
                    </div>
                    <div className="relative p-0.5 bg-gradient-gold rounded-full">
                      <Button asChild variant="ghost" className="w-full bg-black hover:bg-gray-900 text-white border-0 rounded-full">
                        <a href="https://payform.ru/oh9kTJf/" target="_blank" rel="noopener noreferrer">В рассрочку</a>
                      </Button>
                    </div>
                  </div>
                  </div>
                </CardContent>
              </Card>

              {/* Хитмейкер */}
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">ХИТМЕЙКЕР</CardTitle>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">117.000₽</div>
                    <div className="text-gray-400 line-through">127.000₽</div>
                    <div className="text-sm text-yellow-400 font-semibold">по промокоду buro17</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-gray-300 font-medium">Индивидуальная работа с наставником. Максимальный результат за короткий срок.</p>
                  </div>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">3 модуля по продвижению релиза</span>
                    </li>

                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Доступ в закрытое сообщество "СЦЕНА" навсегда</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Полезные гайды и чек-листы</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Геймификация обучения</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Личная работа с Авантюристом</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Индивидуальная стратегия и позиционирование</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Разработка личного ИИ асистента</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Поддержка каждого трека в соц. сетях Авантюриста</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Сертификат о получении статуса АРТИСТА</span>
                    </li>
                  </ul>
                  <div>
                    <div className="bg-yellow-400/20 p-3 rounded-lg border border-yellow-400/30 mb-4">
                      <p className="text-sm font-semibold text-yellow-400">Ограниченное количество мест: 7 (осталось 6)</p>
                    </div>
                    <div className="space-y-2">
                    <div className="relative p-0.5 bg-gradient-gold rounded-full">
                      <Button asChild className="w-full bg-black hover:bg-gray-900 text-white border-0 rounded-full">
                        <a href="https://payform.ru/rh9kUxe/" target="_blank" rel="noopener noreferrer">Оплатить</a>
                      </Button>
                    </div>
                    <div className="relative p-0.5 bg-gradient-gold rounded-full">
                      <Button asChild variant="ghost" className="w-full bg-black hover:bg-gray-900 text-white border-0 rounded-full">
                        <a href="https://payform.ru/rh9kUxe/" target="_blank" rel="noopener noreferrer">В рассрочку</a>
                      </Button>
                    </div>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </div>


          </div>
        </div>
      </section>

      {/* Special Offer CTA */}
      <section className="py-16 bg-black/60 backdrop-blur-sm overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center space-y-8">
            <p className="text-2xl md:text-3xl text-white font-medium">
              Нажми на кнопку ниже и получи лучшие условия!
            </p>
            <div className="flex justify-center">
              <div className="relative p-0.5 bg-gradient-gold rounded-full inline-block">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-black hover:bg-gray-900 text-white border-0 rounded-full px-12 py-6 text-xl font-bold"
                >
                  <a href="https://t.me/m/VLGGMwFTMzMy" target="_blank" rel="noopener noreferrer">ХОЧУ</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section ref={guaranteesSection.ref} className="py-16 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className={`transition-all duration-1000 ${guaranteesSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-heading text-center mb-12 text-white">ТЫ ПОЛУЧАЕШЬ <span className="bg-gradient-text bg-clip-text text-transparent">2 ГАРАНТИИ</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all">
                <CardHeader>
                  <Icon name="Shield" className="w-12 h-12 text-yellow-400 mb-4" />
                  <CardTitle className="text-xl text-white">Гарантия возврата</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Если по итогу просмотра первого модуля ты понимаешь, что продукт тебе не подходит, мы возвращаем 100% денег, за вычетом банковской комиссии.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all">
                <CardHeader>
                  <Icon name="Target" className="w-12 h-12 text-yellow-400 mb-4" />
                  <CardTitle className="text-xl text-white">Гарантия результата</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Если ты просмотрел все модули, выполнил все домашние задания и не сделал существенный для себя результат, мы Добавим вас в «специальную группу»
14 дней усердной работы с куратором за наш счёт.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Рассрочка */}
      <section className="py-16 bg-black/60 backdrop-blur-sm overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Title and Button */}
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Рассрочка
                </span>
              </h2>
              <h3 className="text-xl md:text-2xl text-white font-medium">
                Мы платим процент за вас
              </h3>
              

              
              <div className="pt-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-gold hover:bg-gradient-gold/90 text-white px-8 py-4 text-lg rounded-full border-0 font-semibold hover:scale-105 transition-all duration-500 shadow-2xl"
                  style={{boxShadow: '0 0 30px rgba(14, 165, 233, 0.4), 0 0 60px rgba(14, 165, 233, 0.2), 0 0 90px rgba(14, 165, 233, 0.1)'}}
                >
                  <a href="#tariffs">ОФОРМИТЬ РАССРОЧКУ</a>
                </Button>
              </div>
            </div>

            {/* Right Column - Benefits List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg" style={{boxShadow: '0 0 10px rgba(14, 165, 233, 0.3)'}}>
                  <Icon name="Check" className="w-4 h-4 text-white font-bold" />
                </div>
                <span className="text-white text-lg">Без процентов на 3, 6 или 12 месяцев</span>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg" style={{boxShadow: '0 0 10px rgba(14, 165, 233, 0.3)'}}>
                  <Icon name="Check" className="w-4 h-4 text-white font-bold" />
                </div>
                <span className="text-white text-lg">Первый взнос <span className="font-semibold text-yellow-400">только через месяц</span>, сейчас ничего не платите</span>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg" style={{boxShadow: '0 0 10px rgba(14, 165, 233, 0.3)'}}>
                  <Icon name="Check" className="w-4 h-4 text-white font-bold" />
                </div>
                <span className="text-white text-lg">Мы платим <span className="font-semibold text-yellow-400">проценты за вас</span></span>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/30 transition-all">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg" style={{boxShadow: '0 0 10px rgba(14, 165, 233, 0.3)'}}>
                  <Icon name="Check" className="w-4 h-4 text-white font-bold" />
                </div>
                <span className="text-white text-lg">По паспорту, <span className="font-semibold text-yellow-400">18+</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-black overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl mb-8 text-white leading-relaxed">
            «Если сейчас не попробуешь — через год ты останешься на том же месте, где сегодня. Только с ещё одной стопкой треков и завистью к тем, кто <span className="bg-gradient-text bg-clip-text text-transparent">рискнул</span>»
          </h2>
          <Button asChild size="lg" className="bg-gradient-gold hover:bg-gradient-gold/90 text-white px-12 py-6 text-xl rounded-full border-0 hover:scale-102 transition-all duration-500" style={{boxShadow: '0 0 30px rgba(14, 165, 233, 0.4), 0 0 60px rgba(14, 165, 233, 0.2), 0 0 90px rgba(14, 165, 233, 0.1)'}}>
            <a href="#tariffs">Стать артистом сейчас</a>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqSection.ref} id="faq" className="py-16 bg-black/40 backdrop-blur-sm overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className={`transition-all duration-1000 ${faqSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-heading text-center mb-12 text-white">ЧАСТЫЕ ВОПРОСЫ</h2>
            
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-gradient-gold transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Подойдёт ли мне, если у меня нет ни одного трека?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Да. Так у тебя точно будет первый трек, который сразу получит оценку от слушателей.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-gradient-gold transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <CardHeader>
                  <CardTitle className="text-lg text-white">А если я стесняюсь снимать себя?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Я тоже заикался и стеснялся камеры. Сейчас у меня 2.5 млн подписчиков. Выводы делай сам.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-gradient-gold transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Нужен ли бюджет на рекламу?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Нет, мы делаем упор на бесплатную органику: вертикальный контент — это твой главный буст.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-black/60 backdrop-blur-sm overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Остались вопросы?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Запишись на личную консультацию с Авантюристом
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-gold hover:bg-gradient-gold/90 text-white px-10 py-6 text-lg rounded-full border-0 font-semibold hover:scale-105 transition-all duration-500 shadow-2xl"
            style={{boxShadow: '0 0 30px rgba(14, 165, 233, 0.4), 0 0 60px rgba(14, 165, 233, 0.2), 0 0 90px rgba(14, 165, 233, 0.1)'}}
          >
            <a href="https://t.me/m/tIGFNfyIMDFi" target="_blank" rel="noopener noreferrer">
              ОТКРЫТЬ ЧАТ
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white overflow-x-hidden">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <h2 className="text-heading mb-4">EVOLUTION OF THE ARTIST</h2>
            <p className="text-body text-gray-300">Эволюция артиста - твой путь к миллионам прослушиваний</p>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">© Лыков Денис</h3>
              <p className="text-gray-300 text-sm">ИНН: 236803016740</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center justify-center md:justify-start">
                <Icon name="Mail" className="w-4 h-4 mr-2" />
                E-mail:
              </h3>
              <a href="mailto:buro17.commerce@yandex.ru" className="text-gray-300 text-sm hover:text-yellow-400 transition-colors">
                buro17.commerce@yandex.ru
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center justify-center md:justify-start">
                <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                Тех. поддержка в TG:
              </h3>
              <a href="https://t.me/by_avanturistt" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-yellow-400 transition-colors">
                https://t.me/by_avanturistt
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <div className="text-center text-sm text-gray-400 space-y-3">
              <p>
                © Лыков Денис, 2025. Все права защищены. Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с письменного разрешения правообладателя и только со ссылкой на источник: 
                <a href={window.location.href} className="text-yellow-400 hover:text-yellow-300 transition-colors ml-1">
                  {window.location.href}
                </a>
              </p>
              <p className="text-xs text-gray-500">
                * Meta признана экстремистской организацией в России
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;