import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      icon: 'Sparkles',
      title: 'Керамическое покрытие',
      description: 'Долговременная защита кузова на 2-5 лет. Гидрофобный эффект, блеск и защита от царапин.',
      price: 'от 25 000 ₽'
    },
    {
      icon: 'Droplet',
      title: 'Полировка кузова',
      description: 'Удаление мелких царапин, восстановление блеска и глубины цвета автомобиля.',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Wind',
      title: 'Химчистка салона',
      description: 'Глубокая очистка всех поверхностей салона, удаление пятен и неприятных запахов.',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Shield',
      title: 'Антигравийная пленка',
      description: 'Защита кузова от сколов, царапин и повреждений. Прозрачная полиуретановая пленка.',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Car',
      title: 'Комплексная мойка',
      description: 'Бесконтактная мойка кузова, дисков, арок. Очистка салона и багажника.',
      price: 'от 1 500 ₽'
    },
    {
      icon: 'Zap',
      title: 'Нанокерамика фар',
      description: 'Восстановление прозрачности фар и защита от помутнения и царапин.',
      price: 'от 3 000 ₽'
    }
  ];

  const portfolio = [
    { id: 1, title: 'BMW X5 - Керамика', image: 'https://cdn.poehali.dev/projects/749cd786-b146-4786-b241-9ea0e3126400/files/48dd1788-4a81-41b0-87e5-d52fb372e81c.jpg' },
    { id: 2, title: 'Mercedes E-Class', image: 'https://cdn.poehali.dev/projects/749cd786-b146-4786-b241-9ea0e3126400/files/e592155c-e062-4c46-806b-09161f17e2da.jpg' },
    { id: 3, title: 'Audi Q7 - Полировка', image: 'https://cdn.poehali.dev/projects/749cd786-b146-4786-b241-9ea0e3126400/files/23d6f150-afd8-46b6-a5ab-0c3a40c36e79.jpg' },
    { id: 4, title: 'Porsche 911', image: 'https://cdn.poehali.dev/projects/749cd786-b146-4786-b241-9ea0e3126400/files/48dd1788-4a81-41b0-87e5-d52fb372e81c.jpg' },
    { id: 5, title: 'Tesla Model S', image: 'https://cdn.poehali.dev/projects/749cd786-b146-4786-b241-9ea0e3126400/files/e592155c-e062-4c46-806b-09161f17e2da.jpg' },
    { id: 6, title: 'Range Rover', image: 'https://cdn.poehali.dev/projects/749cd786-b146-4786-b241-9ea0e3126400/files/23d6f150-afd8-46b6-a5ab-0c3a40c36e79.jpg' }
  ];

  const testimonials = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Отличная работа! Керамическое покрытие держится уже год, машина как новая. Рекомендую!',
      car: 'BMW X5'
    },
    {
      name: 'Дмитрий К.',
      rating: 5,
      text: 'Профессиональный подход, качественные материалы. Результат превзошел ожидания.',
      car: 'Mercedes E-Class'
    },
    {
      name: 'Сергей П.',
      rating: 5,
      text: 'Лучший детейлинг в городе! Сделали полировку и химчистку — машина преобразилась.',
      car: 'Audi A6'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">AUTO DETAILING</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <Button asChild>
                <a href="#contact">Записаться</a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              Премиальный детейлинг автомобилей
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Идеальная защита<br />для вашего авто
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Керамическое покрытие премиум-класса с гарантией до 5 лет. 
              Защита, блеск и безупречный внешний вид вашего автомобиля.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg" asChild>
                <a href="#contact">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на услугу
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30" asChild>
                <a href="#services">
                  <Icon name="Info" className="mr-2" size={20} />
                  Узнать больше
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Довольных клиентов' },
              { number: '5 лет', label: 'Гарантия на керамику' },
              { number: '100%', label: 'Оригинальные материалы' },
              { number: '24/7', label: 'Поддержка клиентов' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Полный спектр детейлинга</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная забота о вашем автомобиле с использованием премиальных материалов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Прозрачные цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Пакеты услуг</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '8 500',
                features: ['Комплексная мойка', 'Химчистка салона', 'Чернение резины и пластика', 'Уборка багажника']
              },
              {
                name: 'Премиум',
                price: '25 000',
                popular: true,
                features: ['Всё из базового', 'Полировка кузова', 'Нанокерамика фар', 'Защита стекол', 'Озонирование салона']
              },
              {
                name: 'Керамика',
                price: '45 000',
                features: ['Всё из премиум', 'Керамическое покрытие 9H', 'Гарантия 5 лет', 'Защита дисков', 'Консервация']
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши работы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">
              Примеры выполненных работ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {portfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/40 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">О нас</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Почему выбирают нас</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: 'Award',
                  title: 'Опыт и мастерство',
                  text: 'Более 7 лет в сфере детейлинга. Сертифицированные специалисты с постоянным повышением квалификации.'
                },
                {
                  icon: 'Gem',
                  title: 'Премиум материалы',
                  text: 'Работаем только с проверенными брендами: Gyeon, Kamikaze Collection, CARPRO. 100% оригинальная продукция.'
                },
                {
                  icon: 'Clock',
                  title: 'Соблюдение сроков',
                  text: 'Четко придерживаемся согласованных сроков. Возможность экспресс-услуг за 3-4 часа.'
                },
                {
                  icon: 'BadgeCheck',
                  title: 'Гарантия качества',
                  text: 'Документированная гарантия на все виды работ. Страхование автомобиля на время обслуживания.'
                }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.text}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.car}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Записаться</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Онлайн запись</h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму и мы свяжемся с вами в течение 15 минут
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <Input
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон</label>
                      <Input
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Интересующая услуга</label>
                    <Input
                      placeholder="Керамическое покрытие"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Комментарий</label>
                    <Textarea
                      placeholder="Расскажите о своем автомобиле и пожеланиях..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              {[
                { icon: 'MapPin', title: 'Адрес', text: 'г. Москва, ул. Примерная, 15' },
                { icon: 'Phone', title: 'Телефон', text: '+7 (999) 123-45-67' },
                { icon: 'Mail', title: 'Email', text: 'info@autodetailing.ru' }
              ].map((contact, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={contact.icon} className="text-primary" size={24} />
                  </div>
                  <div className="font-semibold">{contact.title}</div>
                  <div className="text-muted-foreground">{contact.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AUTO DETAILING</h3>
              <p className="text-white/70">
                Премиальный детейлинг и защита автомобилей с 2017 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Керамическое покрытие</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Полировка</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Химчистка</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Защитные пленки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>г. Москва, ул. Примерная, 15</li>
                <li>+7 (999) 123-45-67</li>
                <li>info@autodetailing.ru</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>© 2024 Auto Detailing. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;