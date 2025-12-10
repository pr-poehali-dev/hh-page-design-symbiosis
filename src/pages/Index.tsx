import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = [
    'Все',
    'Гостиничный сервис',
    'Кухня',
    'Администрация',
    'HR',
    'Финансы',
    'Маркетинг',
  ];

  const advantages = [
    {
      number: '10 лет',
      description: 'успешной работы, лидер в индустрии гостеприимства',
      color: 'bg-secondary',
    },
    {
      number: '2500+',
      description: 'сотрудников уже работают в городе-отеле',
      color: 'bg-primary',
    },
    {
      number: '4,3',
      description: 'средняя оценка компании как работодателя',
      color: 'bg-primary',
    },
  ];

  const loyaltyProgram = [
    { icon: 'Heart', title: 'Центр здоровья', description: 'ДМС и wellness программы' },
    { icon: 'Waves', title: 'Бассейн', description: 'Бесплатный доступ для сотрудников' },
    { icon: 'Dumbbell', title: 'Спортзал', description: 'Фитнес-центр на территории' },
    { icon: 'Sparkles', title: 'Развлечения', description: 'Корпоративные мероприятия' },
    { icon: 'Tag', title: 'Скидки', description: 'Специальные тарифы и предложения' },
  ];

  const trainingTypes = [
    {
      icon: 'Users',
      title: 'Уникальные тренинги',
      description: 'Авторские программы для развития навыков',
    },
    {
      icon: 'Briefcase',
      title: 'Авторские бизнес-игры',
      description: 'Практическое обучение в игровом формате',
    },
    {
      icon: 'GraduationCap',
      title: 'Внешнее обучение',
      description: 'Оплата курсов и профессиональных программ',
    },
    {
      icon: 'BookOpen',
      title: 'Обучение с нуля',
      description: 'Программы для специалистов без опыта',
    },
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/d6d33866-6ee4-4d33-95f9-5408e574c9f0.jpg',
    'https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/44b94bdc-1cd6-44ae-897a-7364279d1276.jpg',
    'https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/632f8c9b-f626-4564-9528-f8671591caa5.jpg',
    'https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/8625ceb6-90c1-49f3-bb1b-2a7d42d1473d.jpg',
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">О компании</h1>
            <nav className="hidden md:flex gap-6">
              <a href="#vacancies" className="text-sm hover:text-primary transition-colors">
                Вакансии <span className="text-muted-foreground">120</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/9cfb4803-b3c7-47d6-9926-aa2c83e89736.jpg"
          alt="Город-отель Бархатные сезоны"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Город-отель<br />
              <span className="text-white/90">&quot;Бархатные сезоны&quot;</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl">
              Ведущий курорт премиум-класса на Южном берегу
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F6F6F6]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            <Card className="p-8 bg-[#2563EB] text-white rounded-3xl flex flex-col justify-between min-h-[200px] shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <p className="text-lg leading-relaxed">
                Город-отель &quot;Бархатные сезоны&quot; — лидер индустрии гостеприимства, удостоенный
                более 100 престижных наград
              </p>
            </Card>

            <Card className="p-8 bg-[#2056AE] text-white rounded-3xl flex flex-col justify-between min-h-[200px] shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Building" size={32} className="text-white" />
              </div>
              <p className="text-lg leading-relaxed">
                Уникальная инфраструктура, аналогов которой нет в России
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-5xl">
            <Card className="p-8 bg-[#2056AE] text-white rounded-3xl min-h-[180px] flex flex-col justify-between shadow-lg">
              <h3 className="text-5xl font-bold mb-4">10 лет</h3>
              <p className="text-base leading-relaxed opacity-90">успешной работы, лидер в индустрии гостеприимства</p>
            </Card>
            <Card className="p-8 bg-[#2563EB] text-white rounded-3xl min-h-[180px] flex flex-col justify-between shadow-lg">
              <h3 className="text-5xl font-bold mb-4">2500+</h3>
              <p className="text-base leading-relaxed opacity-90">сотрудников уже работают в городе-отеле</p>
            </Card>
            <Card className="p-8 bg-[#2563EB] text-white rounded-3xl min-h-[180px] flex flex-col justify-between shadow-lg">
              <h3 className="text-5xl font-bold mb-4">4,3</h3>
              <p className="text-base leading-relaxed opacity-90">средняя оценка компании как работодателя</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F6F6F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold mb-6 text-[#1E3A8A]">Создаем мир, в который хочется вернуться</h2>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/f0262546-00ad-4ea2-80c8-8cab4844fcfa.jpg"
                alt="Видео о компании"
                className="w-full aspect-video object-cover"
                style={{ filter: 'blur(4px)' }}
              />
              <div className="absolute inset-0 bg-[#2563EB]/30 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Play" size={32} className="text-[#2563EB] ml-1" />
                </div>
              </div>
            </div>
            <p className="text-lg text-foreground/80 mt-8 leading-relaxed max-w-3xl">
              &quot;Бархатные сезоны&quot; — это надежное место для роста и развития в окружении
              профессионалов индустрии гостеприимства.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F6F6F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold mb-3 text-[#1E3A8A]">Программа лояльности</h2>
            <p className="text-lg text-muted-foreground mb-8">
              У сотрудников специальные тарифы и минимальные цены
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              {loyaltyProgram.map((item, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-[#2563EB] text-white hover:bg-[#2563EB]/90 transition-all shadow-lg"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={item.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-center mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-center opacity-90">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold mb-8 text-[#1E3A8A]">Корпоративные мероприятия</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {gallery.slice(0, 2).map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <img
                    src={img}
                    alt={`Мероприятие ${idx + 1}`}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2563EB] text-white rounded-3xl mx-4 md:mx-auto max-w-6xl shadow-2xl">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-3">Внутреннее и внешнее обучение</h2>
          <p className="text-lg mb-8 opacity-90">
            Наша Академия &quot;Бархатные сезоны&quot; помогает сотрудникам раскрыть свой потенциал,
            развивая профессиональные и личностные качества
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {trainingTypes.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name={item.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#EE5F0F] to-[#2563EB] rounded-3xl mx-4 md:mx-auto max-w-6xl mt-8 shadow-2xl">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-3 text-white text-center">Карьерный рост</h2>
          <p className="text-lg text-white/90 mb-12 text-center">
            Вертикальное и горизонтальное развитие
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/0793f4e4-1c2f-4ec8-886c-e8b2d658ea1f.jpg"
                  alt="Мария"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/30"
                />
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Мария</h3>
                  <p className="text-white/80">специалист отдела персонала</p>
                </div>
              </div>
              <div className="space-y-3 text-white">
                <p className="text-sm opacity-90">В компании с 2023 года</p>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="ArrowRight" size={16} />
                  </div>
                  <div>
                    <p className="font-bold">Горизонтальное развитие</p>
                    <p className="text-sm opacity-90">сменила профессию</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="ArrowUp" size={16} />
                  </div>
                  <div>
                    <p className="font-bold">Вертикальное развитие</p>
                    <p className="text-sm opacity-90">4 повышения в двух отделах</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://cdn.poehali.dev/projects/f5f859bf-034e-42fc-886d-78fd0dcd5998/files/c25d4c7e-f245-4535-a5ca-9ed04c311a35.jpg"
                  alt="Рустам"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/30"
                />
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Рустам</h3>
                  <p className="text-white/80">главный специалист</p>
                </div>
              </div>
              <div className="space-y-3 text-white">
                <p className="text-sm opacity-90">В компании с 2021 года</p>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="ArrowUp" size={16} />
                  </div>
                  <div>
                    <p className="font-bold">Вертикальный рост</p>
                    <p className="text-sm opacity-90">
                      от рабочего до главного специалиста по эксплуатации участков
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-16 bg-[#F6F6F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold mb-8 text-[#1E3A8A]">Найди свою вакансию</h2>
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
                      120
                    </span>
                  )}
                </Button>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Администратор отеля',
                  location: 'Южный берег Крыма',
                  salary: 'от 80 000 ₽',
                },
                {
                  title: 'Шеф-повар',
                  location: 'Южный берег Крыма',
                  salary: 'от 120 000 ₽',
                },
                {
                  title: 'Менеджер по работе с гостями',
                  location: 'Южный берег Крыма',
                  salary: 'от 70 000 ₽',
                },
                {
                  title: 'Специалист HR отдела',
                  location: 'Южный берег Крыма',
                  salary: 'от 65 000 ₽',
                },
              ].map((vacancy, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-all cursor-pointer bg-white">
                  <h3 className="text-xl font-bold mb-3 text-[#111827]">{vacancy.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-[#4B5563] mb-4">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold mb-8 text-[#1E3A8A]">Наша команда</h2>
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
            <p className="text-sm text-muted-foreground">
              © 2024 Город-отель &quot;Бархатные сезоны&quot;
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;