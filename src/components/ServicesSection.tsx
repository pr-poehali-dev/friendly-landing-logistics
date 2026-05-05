import Icon from "@/components/ui/icon";

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

export default function ServicesSection() {
  return (
    <>
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
                { label: "Маршрут", value: "СПб ↔ Вологда" },
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
    </>
  );
}