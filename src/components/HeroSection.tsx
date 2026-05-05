import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/6d54ddf7-e637-498d-9f98-b9986345c0b8/files/7df571c0-613b-4f89-9b64-ca4687b6ad51.jpg";

const LOGO =
  "https://cdn.poehali.dev/projects/6d54ddf7-e637-498d-9f98-b9986345c0b8/bucket/b789dd2c-c211-48ec-b000-4b7e103b31e8.png";

export default function HeroSection() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={LOGO} alt="Логотип" className="h-10 w-auto" />
            <span className="font-oswald font-semibold text-lg text-foreground tracking-wide">
              СПб ↔ Вологда
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
              <span className="text-amber-400">СПб ↔ Вологда</span>
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
    </>
  );
}