import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black">Бюро17</h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#program" className="text-gray-600 hover:text-primary transition-colors">Программа</a>
              <a href="#tariffs" className="text-gray-600 hover:text-primary transition-colors">Тарифы</a>
              <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a>
              <Button className="bg-primary hover:bg-primary/90 text-white">Стать артистом</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              ЭВОЛЮЦИЯ <span className="text-primary">АРТИСТОВ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
              Твои песни заслуживают миллионы прослушиваний.<br />
              Я покажу, как этого добиться за 30 дней
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Я артист, который сделал результат сначала себе. Теперь твоя очередь.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl rounded-full">
              Стать артистом
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">2млн+</div>
              <div className="text-gray-600">подписчиков</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">5млн+</div>
              <div className="text-gray-600">прослушиваний</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">17+</div>
              <div className="text-gray-600">практических уроков</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Кому подходит?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <Icon name="Mic" className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl text-black">Начинающий музыкант</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ты только собираешься выпустить свой первый трек и хочешь чтобы его услышали не только друзья
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <Icon name="Music" className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl text-black">Действующий артист</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ты уже выпустил около 7 песен и сейчас готовишь новый релиз, в котором уверен на 100%
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <Icon name="Star" className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl text-black">Будущая звезда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ты уверен в том, что твой каждый трек это настоящий ХИТ, у тебя нет запасных вариантов, кроме как стать звездой
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-black">Меня зовут Денис Авантюрист</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Я занимаюсь музыкой с 2016 года. Начав с 50 прослушиваний и первых треков, я пришёл к 2млн подписчиков и набрал более 5млн прослушиваний на своих песнях, даже не смотря на свой дефект в речи
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold text-primary">Эволюция артистов</span> – это стратегия из 17+ практических уроков с примерами и заданиями. Получи весь мой опыт, все наработки и знания за 30 дней в одном продукте
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="program" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">Чему ты научишься?</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Не просто «снимать сниппеты», а управлять своей карьерой.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="CheckCircle" className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700">Соберёшь свой уникальный образ и чёткое позиционирование артиста</p>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="CheckCircle" className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700">Растить блог и набирать аудиторию через Reels, TikTok и YouTube</p>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="CheckCircle" className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700">Создавать контент-план и бесконечный поток идей</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="CheckCircle" className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700">Запускать релиз песни с контентом и промо, чтобы трек реально слушали</p>
              </div>
            </div>
          </div>

          <div className="text-center p-8 bg-white rounded-xl border-2 border-primary/20">
            <p className="text-2xl font-semibold text-primary">
              Стратегия → Трек → Сниппет → Промо → Контент → Слушатели
            </p>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">Программа курса</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            3 модуля по продвижению трека через вертикальный контент<br />
            Более 17 лекций и практических заданий, которые приведут тебя к результату
          </p>

          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-primary text-white text-lg px-4 py-2">1 модуль</Badge>
                  <CardTitle className="text-2xl text-black">Позиционирование и стратегия артиста</CardTitle>
                </div>
                <CardDescription className="text-xl text-primary font-semibold">ЗАЧЕМ СНИМАТЬ?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Icon name="ArrowRight" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">как выделяться на фоне других</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon name="ArrowRight" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">как найти свои сильные стороны</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon name="ArrowRight" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">как это поможет в генерации идей</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-primary text-white text-lg px-4 py-2">2 модуль</Badge>
                  <CardTitle className="text-2xl text-black">Контент для роста слушателей</CardTitle>
                </div>
                <CardDescription className="text-xl text-primary font-semibold">ЧТО СНИМАТЬ?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Icon name="ArrowRight" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">что снимать до и после релиза</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon name="ArrowRight" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">как найти свой формат</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon name="ArrowRight" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">источник бесконечных идей для контента</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-primary text-white text-lg px-4 py-2">3 модуль</Badge>
                  <CardTitle className="text-2xl text-black">Артист = Блогер</CardTitle>
                </div>
                <CardDescription className="text-xl text-primary font-semibold">КАК СНИМАТЬ?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Icon name="ArrowRight" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">советы по постановке кадра / света и выбора локации</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon name="ArrowRight" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">стильный и современный монтаж в CapCut</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon name="ArrowRight" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">схема популярных коротких роликов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 p-8 bg-primary/10 rounded-xl border-2 border-primary/20">
            <h3 className="text-3xl font-bold text-black mb-4">ГЛАВНЫЙ РЕЗУЛЬТАТ</h3>
            <p className="text-2xl font-semibold text-primary">РОСТ ПРОСМОТРОВ и ПРОСЛУШИВАНИЙ</p>
          </div>

          <div className="mt-12 bg-white border-2 border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6">Внутри тебя ждёт:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="FileText" className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="font-semibold text-gray-700">Схема по эффективной публикации релиза</p>
              </div>
              <div className="text-center">
                <Icon name="List" className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="font-semibold text-gray-700">Список всех существующих форматов для артиста</p>
              </div>
              <div className="text-center">
                <Icon name="Target" className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="font-semibold text-gray-700">Подробный план по эффективному выпуску своего релиза</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">ТАРИФЫ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Дебют */}
            <Card className="relative hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-black">Дебют</CardTitle>
                <div className="text-center mt-4">
                  <div className="text-4xl font-bold text-primary">17.000₽</div>
                  <div className="text-gray-500 line-through">27.000₽</div>
                  <div className="text-sm text-primary font-semibold">по промокоду БЮРО17</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 font-medium">Цель – быстро внедрить фишки по продвижению и получить ощутимый результат за короткое время.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>3 модуля по продвижению релиза</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Более 17 лекций и практических заданий</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Геймификация обучения</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Доступ в закрытое сообщество "СЦЕНА" на 3 месяца</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Полезные гайды и чек-листы</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Проверка контента и заданий от кураторов</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Артист-напарник</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Модуль по применению ИИ для артиста</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Сертификат о получении статуса АРТИСТА</span>
                  </li>
                </ul>
                <div className="space-y-2 pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">Оплатить</Button>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">В рассрочку</Button>
                </div>
              </CardContent>
            </Card>

            {/* Артист */}
            <Card className="relative hover:shadow-xl transition-all duration-300 border-2 border-primary bg-primary/5">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white px-4 py-1">ПОПУЛЯРНЫЙ</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-black">АРТИСТ</CardTitle>
                <div className="text-center mt-4">
                  <div className="text-4xl font-bold text-primary">47.000₽</div>
                  <div className="text-gray-500 line-through">57.000₽</div>
                  <div className="text-sm text-primary font-semibold">по промокоду БЮРО17</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 font-medium">Работа в группе. Старт нового потока – 10 октября</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Всё из тарифа "Дебют"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Доступ в сообщество "СЦЕНА" на 6 месяцев</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Эксклюзивные онлайн ZOOM-лекции от Авантюриста</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Личная работа с Авантюристом</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Индивидуальная стратегия и позиционирование</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Разработка личного ИИ асистента</span>
                  </li>
                </ul>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Ограниченное количество мест: 30 (осталось 19)</p>
                </div>
                <div className="space-y-2 pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">Оплатить</Button>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">В рассрочку</Button>
                </div>
              </CardContent>
            </Card>

            {/* Хитмейкер */}
            <Card className="relative hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-black">ХИТМЕЙКЕР</CardTitle>
                <div className="text-center mt-4">
                  <div className="text-4xl font-bold text-primary">117.000₽</div>
                  <div className="text-gray-500 line-through">127.000₽</div>
                  <div className="text-sm text-primary font-semibold">по промокоду БЮРО17</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Всё из тарифа "Артист"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Доступ в сообщество "СЦЕНА" навсегда</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Поддержка каждого трека в соц. сетях Авантюриста</span>
                  </li>
                </ul>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Ограниченное количество мест: 7 (осталось 6)</p>
                </div>
                <div className="space-y-2 pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">Оплатить</Button>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">В рассрочку</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Остались вопросы?</p>
            <p className="text-gray-600 mb-6">Ты можешь записаться на личную презентацию обучения и подробное обсуждение</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">Выбрать время</Button>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Ты получаешь 2 гарантии</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <Icon name="Shield" className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl text-black">Гарантия возврата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Если по итогу просмотра первого модуля ты понимаешь, что продукт тебе не подходит, мы возвращаем 100% денег, за вычетом банковской комиссии.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <Icon name="Target" className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl text-black">Гарантия результата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Если ты просмотрел все модули, выполнил все домашние задания и не сделал существенный для себя результат, мы добавим тебя в "специальную группу» — это дополнительные 14 дней усердной работы с куратором за наш счёт.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">
            «Если ты не попробуешь сейчас — через год будешь на том же месте, где сегодня. Только с ещё одной стопкой «треков» и завистью к тем, кто рискнул».
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl rounded-full">
            Стать артистом сейчас
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Частые вопросы</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-black">Подойдёт ли мне, если у меня нет ни одного трека?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Да. Так у тебя точно будет первый трек, который сразу получит оценку от слушателей.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-black">А если я стесняюсь снимать себя?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Я тоже заикался и стеснялся камеры. Сейчас у меня 2.5 млн подписчиков. Выводы делай сам.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-black">Нужен ли бюджет на рекламу?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Нет, мы делаем упор на бесплатную органику: вертикальный контент — это твой главный буст.</p>
              </CardContent>
            </Card>
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