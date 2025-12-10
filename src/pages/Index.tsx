import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const vacancies = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      category: 'Разработка',
      location: 'Москва / Удаленно',
      salary: 'от 250 000 ₽',
      type: 'Полная занятость',
      skills: ['React', 'TypeScript', 'Next.js'],
    },
    {
      id: 2,
      title: 'Python Backend Engineer',
      category: 'Разработка',
      location: 'Санкт-Петербург',
      salary: 'от 200 000 ₽',
      type: 'Полная занятость',
      skills: ['Python', 'Django', 'PostgreSQL'],
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      category: 'Дизайн',
      location: 'Удаленно',
      salary: 'от 150 000 ₽',
      type: 'Полная занятость',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      category: 'Инфраструктура',
      location: 'Москва',
      salary: 'от 220 000 ₽',
      type: 'Полная занятость',
      skills: ['Docker', 'Kubernetes', 'AWS'],
    },
  ];

  const categories = ['Все', 'Разработка', 'Дизайн', 'Инфраструктура'];

  const filteredVacancies = selectedCategory === 'Все' 
    ? vacancies 
    : vacancies.filter(v => v.category === selectedCategory);

  const values = [
    {
      icon: 'Target',
      title: 'Фокус на результат',
      description: 'Мы ценим конкретные достижения и измеримый вклад каждого члена команды',
    },
    {
      icon: 'Users',
      title: 'Командная работа',
      description: 'Поддерживаем открытую коммуникацию и взаимопомощь между отделами',
    },
    {
      icon: 'Lightbulb',
      title: 'Инновации',
      description: 'Поощряем эксперименты и использование современных технологий',
    },
    {
      icon: 'TrendingUp',
      title: 'Рост и развитие',
      description: 'Инвестируем в обучение и карьерное развитие сотрудников',
    },
  ];

  const benefits = [
    { icon: 'Wallet', text: 'Конкурентная зарплата' },
    { icon: 'Laptop', text: 'Удаленная работа' },
    { icon: 'GraduationCap', text: 'Обучение и курсы' },
    { icon: 'Heart', text: 'ДМС и спорт' },
    { icon: 'Clock', text: 'Гибкий график' },
    { icon: 'Coffee', text: 'Офис с кофе' },
  ];

  const hiringSteps = [
    { 
      number: '01', 
      title: 'Отклик', 
      description: 'Отправьте резюме или заполните форму на сайте',
      icon: 'Send',
    },
    { 
      number: '02', 
      title: 'Созвон с HR', 
      description: 'Обсудим ваш опыт и ожидания, расскажем о компании',
      icon: 'Phone',
    },
    { 
      number: '03', 
      title: 'Техническое интервью', 
      description: 'Встреча с будущей командой, практические задачи',
      icon: 'Code',
    },
    { 
      number: '04', 
      title: 'Оффер', 
      description: 'Обсуждаем условия и готовим документы',
      icon: 'CheckCircle',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-xl">Poehali.dev</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#vacancies" className="text-sm font-medium hover:text-primary transition-colors">Вакансии</a>
            <a href="#culture" className="text-sm font-medium hover:text-primary transition-colors">Культура</a>
            <a href="#hiring" className="text-sm font-medium hover:text-primary transition-colors">Процесс найма</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            Откликнуться
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section id="about" className="py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">О нас</Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Создаем будущее<br />
                <span className="text-primary">вместе</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы — команда энтузиастов, которые создают инновационные технологические решения. 
                Наша миссия — делать разработку доступной и понятной, предоставляя инструменты 
                нового поколения.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Присоединяйтесь к нам, чтобы работать над амбициозными проектами в команде 
                профессионалов, которые ценят качество кода и пользовательский опыт.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={20} />
                  <span className="font-medium">50+ специалистов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span className="font-medium">3 офиса</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={20} />
                  <span className="font-medium">5 лет на рынке</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/f0262546-00ad-4ea2-80c8-8cab4844fcfa.jpg" 
                alt="Офис" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Вакансии</Badge>
            <h2 className="text-4xl font-bold mb-4">Открытые позиции</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ищем талантливых специалистов, готовых развиваться и создавать продукты мирового уровня
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat)}
                className="transition-all"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredVacancies.map(vacancy => (
              <Card key={vacancy.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{vacancy.title}</CardTitle>
                    <Badge variant="secondary">{vacancy.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-4 text-base">
                    <span className="flex items-center gap-1">
                      <Icon name="MapPin" size={16} />
                      {vacancy.location}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-foreground">
                      <Icon name="Wallet" size={16} />
                      {vacancy.salary}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vacancy.skills.map(skill => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                  <Button className="w-full">
                    Откликнуться
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Культура</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши ценности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создаем среду, где каждый может расти профессионально и реализовывать свой потенциал
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/9d43c361-c39f-46a2-a58d-c03b94bbf562.jpg" 
                alt="Команда" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Что мы предлагаем</h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon} className="text-primary" size={20} />
                    </div>
                    <span className="font-medium text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hiring" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Процесс найма</Badge>
            <h2 className="text-4xl font-bold mb-4">Как к нам попасть</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и понятный процесс отбора — от первого контакта до выхода на работу
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {hiringSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {idx < hiringSteps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                  )}
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors">
                      <Icon name={step.icon} className="text-primary" size={48} />
                    </div>
                    <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Отправьте ваше резюме или задайте вопрос — мы ответим в течение 24 часов
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Вакансия</label>
                    <Input placeholder="Frontend Developer" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Расскажите о себе..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                </form>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a href="mailto:hr@poehali.dev" className="text-muted-foreground hover:text-primary transition-colors">
                        hr@poehali.dev
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Телефон</div>
                      <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Адрес</div>
                      <p className="text-muted-foreground">
                        Москва, ул. Тверская, д. 1<br />
                        БЦ "Центральный", 5 этаж
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="font-medium mb-3">Мы в соцсетях</div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Icon name="Linkedin" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Icon name="Github" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Icon name="Twitter" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Icon name="Send" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="font-medium">Poehali.dev</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Poehali.dev. Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;