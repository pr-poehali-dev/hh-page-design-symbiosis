import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = [
    'Все',
    'Разработка',
    'Дизайн',
    'Маркетинг',
    'HR',
    'Финансы',
    'Продажи',
  ];

  const advantages = [
    {
      number: '10 лет',
      description: 'успешной работы, лидер в индустрии гостеприимства',
      color: 'bg-secondary',
    },
    {
      number: '2500+',
      description: 'сотрудников уже работают в компании',
      color: 'bg-primary',
    },
    {
      number: '4,3',
      description: 'средняя оценка компании как работодателя',
      color: 'bg-primary',
    },
  ];

  const benefits = [
    {
      icon: 'Award',
      title: 'Лидер рынка',
      description: 'Работаем с лучшими проектами и технологиями',
    },
    {
      icon: 'Building',
      title: 'Инфраструктура',
      description: 'Уникальная инфраструктура, аналогов которой нет в мире',
    },
    {
      icon: 'Users',
      title: 'Команда профессионалов',
      description: 'Окружение единомышленников для роста и развития',
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Прозрачная система развития и повышения',
    },
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/9d43c361-c39f-46a2-a58d-c03b94bbf562.jpg',
    'https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/44b94bdc-1cd6-44ae-897a-7364279d1276.jpg',
    'https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/632f8c9b-f626-4564-9528-f8671591caa5.jpg',
    'https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/8625ceb6-90c1-49f3-bb1b-2a7d42d1473d.jpg',
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">О компании</h1>
            <nav className="hidden md:flex gap-6">
              <a href="#vacancies" className="text-sm hover:text-primary transition-colors">
                Вакансии <span className="text-muted-foreground">353</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-4xl leading-tight">
            Poehali.dev — ведущий мировой tech-проект премиум-класса
          </h2>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            <Card className="p-8 bg-secondary text-white rounded-3xl flex flex-col justify-between min-h-[200px]">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <p className="text-lg leading-relaxed">
                Poehali.dev — лидер в России, удостоенный более 100 престижных международных и
                российских наград
              </p>
            </Card>

            <Card className="p-8 bg-primary text-white rounded-3xl flex flex-col justify-between min-h-[200px]">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Building" size={32} className="text-white" />
              </div>
              <p className="text-lg leading-relaxed">
                Уникальная инфраструктура, аналогов которой нет в мире
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-5xl">
            {advantages.map((item, idx) => (
              <Card
                key={idx}
                className={`p-8 ${item.color} text-white rounded-3xl min-h-[180px] flex flex-col justify-between`}
              >
                <h3 className="text-5xl font-bold mb-4">{item.number}</h3>
                <p className="text-base leading-relaxed opacity-90">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold mb-6">Создаем мир, в который хочется вернуться</h2>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/f0262546-00ad-4ea2-80c8-8cab4844fcfa.jpg"
                alt="Видео о компании"
                className="w-full aspect-video object-cover"
                style={{ filter: 'blur(4px)' }}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Play" size={32} className="text-primary ml-1" />
                </div>
              </div>
            </div>
            <p className="text-lg text-foreground/80 mt-8 leading-relaxed max-w-3xl">
              Poehali.dev — это надежное место для твоего роста и развития в окружении таких же
              профессионалов, готовых делиться опытом и поддерживать на каждом этапе карьеры.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold mb-8">Найди свою вакансию</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat)}
                  size="lg"
                  className="rounded-full text-base px-6"
                >
                  {cat}
                  {cat === 'Все' && (
                    <span className="ml-2 bg-background text-foreground px-2 py-0.5 rounded-full text-sm">
                      353
                    </span>
                  )}
                </Button>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Senior Frontend Developer',
                  location: 'Москва',
                  salary: 'от 250 000 ₽',
                },
                {
                  title: 'Python Backend Engineer',
                  location: 'Санкт-Петербург',
                  salary: 'от 200 000 ₽',
                },
                {
                  title: 'UI/UX Designer',
                  location: 'Удаленно',
                  salary: 'от 150 000 ₽',
                },
                {
                  title: 'DevOps Engineer',
                  location: 'Москва',
                  salary: 'от 220 000 ₽',
                },
              ].map((vacancy, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-all cursor-pointer">
                  <h3 className="text-xl font-bold mb-3">{vacancy.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="MapPin" size={16} />
                      {vacancy.location}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-foreground">
                      <Icon name="Wallet" size={16} />
                      {vacancy.salary}
                    </span>
                  </div>
                  <Button className="w-full">Откликнуться</Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold mb-8">Наша команда</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <img
                    src={img}
                    alt={`Команда ${idx + 1}`}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl flex items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2024 Poehali.dev</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Github" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;