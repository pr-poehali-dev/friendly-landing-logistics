import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/6d54ddf7-e637-498d-9f98-b9986345c0b8/files/7df571c0-613b-4f89-9b64-ca4687b6ad51.jpg";

const SERVICES = [
  {
    icon: "Package",
    title: "Сборный груз",
    desc: "Ваш груз едет вместе с другими — платите только за своё место. Идеально для небольших партий товара.",
    highlight: "Экономия до 50%",
  },
  {
    icon: "Truck",
    title: "Догруз",
    desc: "Занимаем свободное место в машине, которая уже едет по маршруту. Быстро, недорого, надёжно.",
    highlight: "Быстрая подача",
  },
  {
    icon: "PackageCheck",
    title: "Отдельная машина",
    desc: "Весь фургон только для вашего груза. Удобно для крупных партий, мебели и хрупкого груза.",
    highlight: "До 1,5 тонн",
  },
];

const ADVANTAGES = [
  { icon: "Car", text: "Собственный автопарк — никаких посредников" },
  { icon: "Clock", text: "Работаем круглосуточно, 7 дней в неделю" },
  { icon: "Shield", text: "На рынке более 5 лет — сотни довольных клиентов" },
  { icon: "Users", text: "Работаем с физическими лицами и организациями" },
  { icon: "Handshake", text: "Помощь при погрузке и разгрузке" },
  { icon: "Zap", text: "Быстрая подача — без долгого ожидания" },
];

const REVIEWS = [
  {
    name: "Алексей В.",
    city: "Санкт-Петербург",
    text: "Перевозили мебель из СПб в Вологду. Всё приехало целым, водитель помог затащить на этаж. Рекомендую!",
    stars: 5,
  },
  {
    name: "Марина К.",
    city: "Вологда",
    text: "Отправляла несколько коробок с товаром. Сборный груз — очень выгодно. Всё пришло в срок.",
    stars: 5,
  },
  {
    name: "ООО «СтройМат»",
    city: "Череповец",
    text: "Регулярно пользуемся для доставки стройматериалов. Надёжный партнёр, всегда на связи.",
    stars: 5,
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen warm-texture font-golos">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.poehali.dev/projects/6d54ddf7-e637-498d-9f98-b9986345c0b8/bucket/b789dd2c-c211-48ec-b000-4b7e103b31e8.png"
              alt="Логотип"
              className="h-10 w-auto"
            />
            <span className="font-oswald font-semibold text-lg text-foreground tracking-wide">
              СПб — Вологда
            </span>
          </div>
          <a
            href="tel:89315128161"
            className="flex items-center gap-2 text-primary font-semibold text-base hover:opacity-80 transition-opacity"
          >
            <Icon name="Phone" size={16} />
            8 931 512‑81‑61
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Принимаем заявки круглосуточно
              </span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in-up delay-100">
              Грузоперевозки
              <br />
              <span className="text-amber-400">СПб — Вологда</span>
            </h1>
            <p className="text-white/85 text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up delay-200">
              Свой автопарк · До 1,5 тонн · От 60 ₽/км
              <br />
              Любой груз · Без посредников
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#order"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                <Icon name="Send" size={20} />
                Оставить заявку
              </a>
              <a
                href="tel:89315128161"
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/25 transition-all"
              >
                <Icon name="Phone" size={20} />
                Позвонить сейчас
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 animate-fade-in-up delay-400">
              {[
                { icon: "Star", text: "5+ лет на рынке" },
                { icon: "MapPin", text: "Маршрут ~750 км" },
                { icon: "Clock", text: "Круглосуточно 24/7" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-white/80"
                >
                  <Icon name={item.icon} size={16} className="text-amber-400" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a
          href="#services"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <Icon name="ChevronDown" size={32} />
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Виды доставки
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-foreground mt-2">
              Выберите подходящий формат
            </h2>
            <p className="text-muted-foreground text-lg mt-3 max-w-xl mx-auto">
              Подберём вариант под ваш груз и бюджет
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group bg-secondary/40 border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={s.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-oswald text-2xl font-bold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full">
                  <Icon name="Check" size={14} />
                  {s.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE BANNER */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-primary-foreground/70 text-sm uppercase tracking-widest font-semibold mb-1">
                Стоимость перевозки
              </p>
              <div className="font-oswald text-5xl font-bold">от 60 ₽/км</div>
              <p className="text-primary-foreground/80 mt-2">
                Точная цена — после расчёта по вашему грузу
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-primary-foreground/90">
              {[
                { label: "Маршрут", value: "СПб — Вологда" },
                { label: "Расстояние", value: "≈ 750 км" },
                { label: "Грузоподъёмность", value: "до 1,5 т" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-oswald text-2xl font-bold">
                    {item.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#order"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/90 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
            >
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </a>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 warm-texture">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Почему мы
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-foreground mt-2">
              Надёжность — наш главный груз
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADVANTAGES.map((adv) => (
              <div
                key={adv.text}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={adv.icon} size={22} className="text-primary" />
                </div>
                <p className="text-foreground font-medium leading-snug pt-1">
                  {adv.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Отзывы
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-foreground mt-2">
              Нам доверяют
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="bg-secondary/30 border border-border rounded-2xl p-7 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={18}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-5 italic">
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center">
                    <Icon name="User" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {r.name}
                    </p>
                    <p className="text-muted-foreground text-xs">{r.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="py-20 bg-primary">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary-foreground/70 font-semibold text-sm uppercase tracking-widest">
              Связаться с нами
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              Оставьте заявку
            </h2>
            <p className="text-primary-foreground/75 text-lg mt-3">
              Перезвоним в течение 15 минут и рассчитаем стоимость
            </p>
          </div>
          {sent ? (
            <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={36} className="text-white" />
              </div>
              <h3 className="font-oswald text-2xl font-bold text-white mb-2">
                Заявка отправлена!
              </h3>
              <p className="text-white/75">
                Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-2xl space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-input rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-input rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Комментарий (необязательно)
                </label>
                <textarea
                  rows={3}
                  placeholder="Что везём, откуда, куда, когда..."
                  value={form.comment}
                  onChange={(e) =>
                    setForm({ ...form, comment: e.target.value })
                  }
                  className="w-full border border-input rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-xl hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={20} />
                Отправить заявку
              </button>
              <p className="text-center text-muted-foreground text-xs">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section className="py-16 warm-texture">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-oswald text-4xl font-bold text-foreground">
              Контакты
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "Phone",
                label: "Телефон",
                value: "8 931 512‑81‑61",
                link: "tel:89315128161",
              },
              {
                icon: "Mail",
                label: "Email",
                value: "i@mitja1386.ru",
                link: "mailto:i@mitja1386.ru",
              },
              {
                icon: "Clock",
                label: "Режим работы",
                value: "Круглосуточно, 24/7",
                link: null,
              },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={c.icon} size={22} className="text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">{c.label}</p>
                {c.link ? (
                  <a
                    href={c.link}
                    className="font-semibold text-foreground hover:text-primary transition-colors text-lg"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="font-semibold text-foreground text-lg">
                    {c.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white/70 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://cdn.poehali.dev/projects/6d54ddf7-e637-498d-9f98-b9986345c0b8/bucket/b789dd2c-c211-48ec-b000-4b7e103b31e8.png"
                  alt="Логотип"
                  className="h-9 w-auto brightness-0 invert"
                />
                <span className="font-oswald font-semibold text-white text-lg">
                  Грузоперевозки СПб — Вологда
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Надёжные грузоперевозки по маршруту Санкт-Петербург — Вологда.
                Собственный автопарк, опыт более 5 лет.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-3 font-oswald">
                Реквизиты
              </p>
              <div className="text-sm space-y-1.5">
                <p>ИП Бахтюрин Дмитрий Николаевич</p>
                <p>ИНН: 352512882720</p>
                <p>ОГРНИП: 322352500010611</p>
                <p>Юридический адрес: г. Череповец</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs">
            <p>© 2025 ИП Бахтюрин Д.Н. Все права защищены.</p>
            <p>Грузоперевозки по маршруту Санкт-Петербург — Вологда</p>
          </div>
        </div>
      </footer>

      {/* STICKY PHONE */}
      <a
        href="tel:89315128161"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3.5 rounded-full shadow-2xl hover:bg-primary/90 transition-all hover:scale-105"
      >
        <Icon name="Phone" size={20} />
        <span className="hidden sm:inline">8 931 512‑81‑61</span>
      </a>
    </div>
  );
}