import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const services = [
  {
    title: 'Расклады Таро',
    description: 'Глубокое погружение в ситуацию через древние арканы',
    price: 'от 1000 ₽',
    icon: 'Sparkles',
    features: ['Расклад на любовь', 'Карьерный путь', 'Финансы', 'Духовный рост']
  },
  {
    title: 'Программные Свечи',
    description: 'Энергетическая работа с намерением и силой огня',
    price: '1500 ₽',
    icon: 'Flame',
    features: ['Привлечение любви', 'Защита', 'Благополучие', 'Исцеление']
  },
  {
    title: 'Магические Ритуалы',
    description: 'Индивидуальные церемонии для трансформации жизни',
    price: 'от 3000 ₽',
    icon: 'Moon',
    features: ['Привязка', 'Присушка', 'Отсушка', 'Очищение']
  }
];

const testimonials = [
  {
    name: 'Елена К.',
    text: 'Расклад на любовь помог понять истинные чувства партнера. Всё сбылось в течение месяца!',
    service: 'Расклад Таро'
  },
  {
    name: 'Дмитрий М.',
    text: 'После ритуала на финансы появились новые возможности. Бизнес пошёл в гору.',
    service: 'Магический ритуал'
  },
  {
    name: 'Анна П.',
    text: 'Программная свеча на защиту действительно работает. Чувствую себя спокойнее и увереннее.',
    service: 'Программная свеча'
  }
];

const timeSlots = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Заявка отправлена!\nДата: ${selectedDate ? format(selectedDate, 'dd MMMM yyyy', { locale: ru }) : 'не выбрана'}\nВремя: ${selectedTime || 'не выбрано'}`);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="bg-stars fixed inset-0 opacity-60 animate-sparkle"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-purple-900/20"></div>

      <nav className="relative z-10 border-b border-border/50 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold glow flex items-center gap-2">
              <Icon name="Sparkles" size={32} className="text-accent" />
              <span>Mystic Arts</span>
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">О практике</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#booking" className="hover:text-primary transition-colors">Записаться</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="py-24 px-4 text-center animate-fade-in">
          <div className="container mx-auto max-w-4xl">
            <div className="flex justify-center mb-6 gap-4">
              <Icon name="Moon" size={48} className="text-primary animate-float" />
              <Icon name="Sparkles" size={48} className="text-accent animate-float" style={{ animationDelay: '0.5s' }} />
              <Icon name="Stars" size={48} className="text-primary animate-float" style={{ animationDelay: '1s' }} />
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 glow">
              Путь к магическим
              <br />
              <span className="text-primary">трансформациям</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Древние знания Таро, сила программных свечей и мощь магических ритуалов для изменения вашей реальности
            </p>
            <Button size="lg" className="glow-strong text-lg px-8 py-6" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Calendar" size={24} className="mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </section>

        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <h3 className="text-5xl font-bold text-center mb-12 glow">Магические услуги</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all hover:scale-105 glow-strong">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name={service.icon as any} size={32} className="text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-accent text-center mb-4">{service.price}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-5xl font-bold text-center mb-12 glow">О магической практике</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Более 15 лет я изучаю древние эзотерические традиции и помогаю людям найти ответы на важнейшие вопросы жизни. 
                Моя практика основана на глубоком понимании символизма Таро, энергетических законов Вселенной и силе ритуальной магии.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="text-center">
                  <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">15+ лет</h4>
                  <p className="text-muted-foreground">практики и обучения</p>
                </div>
                <div className="text-center">
                  <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">500+</h4>
                  <p className="text-muted-foreground">довольных клиентов</p>
                </div>
                <div className="text-center">
                  <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2">Сертификаты</h4>
                  <p className="text-muted-foreground">международные дипломы</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Я работаю индивидуально с каждым клиентом, учитывая уникальность его ситуации и энергетики. 
                Мои консультации проходят в атмосфере доверия и уважения к личным границам.
              </p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-5xl font-bold text-center mb-12 glow">Отзывы клиентов</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-accent/30">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription className="text-primary">{testimonial.service}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <h3 className="text-5xl font-bold text-center mb-12 glow">Записаться на консультацию</h3>
            <Card className="bg-card/70 backdrop-blur-md border-primary/50 glow-strong">
              <CardHeader>
                <CardTitle className="text-2xl">Выберите удобное время</CardTitle>
                <CardDescription>Заполните форму, и я свяжусь с вами для подтверждения</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Выберите дату</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left">
                            <Icon name="Calendar" size={20} className="mr-2" />
                            {selectedDate ? format(selectedDate, 'dd MMMM yyyy', { locale: ru }) : 'Выбрать дату'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            locale={ru}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Выберите время</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? 'default' : 'outline'}
                            className="w-full"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Опишите вашу ситуацию</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, с чем вы хотите поработать..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full glow-strong">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="py-12 px-4 border-t border-border/50 backdrop-blur-sm bg-background/80">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h4 className="font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Mail" size={20} className="text-primary" />
                  Email
                </h4>
                <p className="text-muted-foreground">mystic@tarot.ru</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Phone" size={20} className="text-primary" />
                  Телефон
                </h4>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                  Telegram
                </h4>
                <p className="text-muted-foreground">@mystic_arts</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border/30 text-center text-muted-foreground">
              <p>© 2024 Mystic Arts. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}