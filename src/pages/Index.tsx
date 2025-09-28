import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const heroSection = useScrollAnimation();
  const targetSection = useScrollAnimation();
  const authorSection = useScrollAnimation();
  const programSection = useScrollAnimation();
  const courseSection = useScrollAnimation();
  const tariffsSection = useScrollAnimation();
  const guaranteesSection = useScrollAnimation();
  const faqSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-blue-500/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent bg-size-200 animate-text-shimmer">Бюро17</h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#program" className="text-gray-300 hover:text-yellow-400 transition-colors hover:scale-105 duration-300">Программа</a>
              <a href="#tariffs" className="text-gray-300 hover:text-yellow-400 transition-colors hover:scale-105 duration-300">Тарифы</a>
              <a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-colors hover:scale-105 duration-300">FAQ</a>
              <Button className="bg-gradient-gold hover:bg-gradient-gold/90 text-white border-0 hover:scale-105 transition-all duration-300 animate-pulse-glow">Стать артистом</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroSection.ref} className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${heroSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight hover:scale-105 transition-transform duration-300">
              ЭВОЛЮЦИЯ <span className="bg-gradient-text bg-clip-text text-transparent bg-size-200 animate-text-shimmer">АРТИСТОВ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
              Твои песни заслуживают миллионы прослушиваний.<br />
              Я покажу, как этого добиться за 30 дней
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Я артист, который сделал результат сначала себе. Теперь твоя очередь.
            </p>
            <Button size="lg" className="bg-gradient-gold hover:bg-gradient-gold/90 text-white px-12 py-6 text-xl rounded-full border-0 hover:scale-110 transition-all duration-300 animate-float">
              Стать артистом
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent mb-2">2млн+</div>
              <div className="text-gray-300">подписчиков</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent mb-2">5млн+</div>
              <div className="text-gray-300">прослушиваний</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent mb-2">17+</div>
              <div className="text-gray-300">практических уроков</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section ref={targetSection.ref} className="py-16 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`transition-all duration-1000 ${targetSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Кому подходит?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h2 className="text-4xl font-bold mb-8 text-white">Меня зовут <span className="bg-gradient-text bg-clip-text text-transparent">Денис Авантюрист</span></h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Я занимаюсь музыкой с 2016 года. Начав с 50 прослушиваний и первых треков, я пришёл к 2млн подписчиков и набрал более 5млн прослушиваний на своих песнях, даже не смотря на свой дефект в речи
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="font-semibold bg-gradient-text bg-clip-text text-transparent">Эволюция артистов</span> – это стратегия из 17+ практических уроков с примерами и заданиями. Получи весь мой опыт, все наработки и знания за 30 дней в одном продукте
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section ref={programSection.ref} id="program" className="py-16 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`transition-all duration-1000 ${programSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Чему ты научишься?</h2>
            <p className="text-xl text-center text-gray-300 mb-12">
              Не просто «снимать сниппеты», а <span className="bg-gradient-text bg-clip-text text-transparent font-semibold">управлять своей карьерой</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Соберёшь свой уникальный образ и чёткое позиционирование артиста</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Растить блог и набирать аудиторию через Reels, TikTok и YouTube</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Создавать контент-план и бесконечный поток идей</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="CheckCircle" className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Запускать релиз песни с контентом и промо, чтобы трек реально слушали</p>
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-yellow-400/20">
              <p className="text-2xl font-semibold bg-gradient-text bg-clip-text text-transparent">
                Стратегия → Трек → Сниппет → Промо → Контент → Слушатели
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section ref={courseSection.ref} className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`transition-all duration-1000 ${courseSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Программа курса</h2>
            <p className="text-xl text-center text-gray-300 mb-12">
              3 модуля по продвижению трека через вертикальный контент<br />
              Более 17 лекций и практических заданий, которые приведут тебя к результату
            </p>

            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-gradient-purple text-white text-lg px-4 py-2 border-0">1 модуль</Badge>
                    <CardTitle className="text-2xl text-white">Позиционирование и стратегия артиста</CardTitle>
                  </div>
                  <CardDescription className="text-xl text-yellow-400 font-semibold">ЗАЧЕМ СНИМАТЬ?</CardDescription>
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
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-gradient-purple text-white text-lg px-4 py-2 border-0">2 модуль</Badge>
                    <CardTitle className="text-2xl text-white">Контент для роста слушателей</CardTitle>
                  </div>
                  <CardDescription className="text-xl text-yellow-400 font-semibold">ЧТО СНИМАТЬ?</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">что снимать до и после релиза</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">как найти свой формат</span>
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
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-gradient-purple text-white text-lg px-4 py-2 border-0">3 модуль</Badge>
                    <CardTitle className="text-2xl text-white">Артист = Блогер</CardTitle>
                  </div>
                  <CardDescription className="text-xl text-yellow-400 font-semibold">КАК СНИМАТЬ?</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">советы по постановке кадра / света и выбора локации</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">стильный и современный монтаж в CapCut</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="ArrowRight" className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">схема популярных коротких роликов</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-yellow-400/20">
              <h3 className="text-3xl font-bold text-white mb-4">ГЛАВНЫЙ РЕЗУЛЬТАТ</h3>
              <p className="text-2xl font-semibold bg-gradient-text bg-clip-text text-transparent">РОСТ ПРОСМОТРОВ и ПРОСЛУШИВАНИЙ</p>
            </div>

            <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Внутри тебя ждёт:</h3>
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
      <section ref={tariffsSection.ref} id="tariffs" className="py-16 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`transition-all duration-1000 ${tariffsSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">ТАРИФЫ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Дебют */}
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">Дебют</CardTitle>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">17.000₽</div>
                    <div className="text-gray-400 line-through">27.000₽</div>
                    <div className="text-sm text-yellow-400 font-semibold">по промокоду БЮРО17</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 font-medium">Цель – быстро внедрить фишки по продвижению и получить ощутимый результат за короткое время.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">3 модуля по продвижению релиза</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Более 17 лекций и практических заданий</span>
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
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Проверка контента и заданий от кураторов</span>
                    </li>
                  </ul>
                  <div className="space-y-2 pt-4">
                    <Button className="w-full bg-gradient-purple hover:bg-gradient-purple/90 border-0">Оплатить</Button>
                    <Button variant="outline" className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">В рассрочку</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Артист */}
              <Card className="bg-white/10 backdrop-blur-sm border-2 border-yellow-400/50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-text text-black px-4 py-1 font-bold">ПОПУЛЯРНЫЙ</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">АРТИСТ</CardTitle>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">47.000₽</div>
                    <div className="text-gray-400 line-through">57.000₽</div>
                    <div className="text-sm text-yellow-400 font-semibold">по промокоду БЮРО17</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 font-medium">Работа в группе. Старт нового потока – 10 октября</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Всё из тарифа "Дебют"</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Доступ в сообщество "СЦЕНА" на 6 месяцев</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Эксклюзивные онлайн ZOOM-лекции от Авантюриста</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Личная работа с Авантюристом</span>
                    </li>
                  </ul>
                  <div className="bg-yellow-400/20 p-3 rounded-lg border border-yellow-400/30">
                    <p className="text-sm font-semibold text-yellow-400">Ограниченное количество мест: 30 (осталось 19)</p>
                  </div>
                  <div className="space-y-2 pt-4">
                    <Button className="w-full bg-gradient-purple hover:bg-gradient-purple/90 border-0">Оплатить</Button>
                    <Button variant="outline" className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">В рассрочку</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Хитмейкер */}
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">ХИТМЕЙКЕР</CardTitle>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">117.000₽</div>
                    <div className="text-gray-400 line-through">127.000₽</div>
                    <div className="text-sm text-yellow-400 font-semibold">по промокоду БЮРО17</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Всё из тарифа "Артист"</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Доступ в сообщество "СЦЕНА" навсегда</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Поддержка каждого трека в соц. сетях Авантюриста</span>
                    </li>
                  </ul>
                  <div className="bg-yellow-400/20 p-3 rounded-lg border border-yellow-400/30">
                    <p className="text-sm font-semibold text-yellow-400">Ограниченное количество мест: 7 (осталось 6)</p>
                  </div>
                  <div className="space-y-2 pt-4">
                    <Button className="w-full bg-gradient-purple hover:bg-gradient-purple/90 border-0">Оплатить</Button>
                    <Button variant="outline" className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">В рассрочку</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 mb-6">Остались вопросы?</p>
              <p className="text-gray-300 mb-6">Ты можешь записаться на личную презентацию обучения и подробное обсуждение</p>
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">Выбрать время</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section ref={guaranteesSection.ref} className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className={`transition-all duration-1000 ${guaranteesSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Ты получаешь <span className="bg-gradient-text bg-clip-text text-transparent">2 гарантии</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    Если ты просмотрел все модули, выполнил все домашние задания и не сделал существенный для себя результат, мы добавим тебя в "специальную группу» — это дополнительные 14 дней усердной работы с куратором за наш счёт.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            «Если ты не попробуешь сейчас — через год будешь на том же месте, где сегодня. Только с ещё одной стопкой «треков» и завистью к тем, кто <span className="bg-gradient-text bg-clip-text text-transparent">рискнул</span>».
          </h2>
          <Button size="lg" className="bg-gradient-purple hover:bg-gradient-purple/90 text-white px-12 py-6 text-xl rounded-full border-0">
            Стать артистом сейчас
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqSection.ref} id="faq" className="py-16 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className={`transition-all duration-1000 ${faqSection.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Частые вопросы</h2>
            
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Подойдёт ли мне, если у меня нет ни одного трека?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Да. Так у тебя точно будет первый трек, который сразу получит оценку от слушателей.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">А если я стесняюсь снимать себя?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Я тоже заикался и стеснялся камеры. Сейчас у меня 2.5 млн подписчиков. Выводы делай сам.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
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

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Бюро17</h2>
          <p className="text-gray-300">Эволюция артистов - твой путь к миллионам прослушиваний</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;