import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const LOGO =
  "https://cdn.poehali.dev/projects/6d54ddf7-e637-498d-9f98-b9986345c0b8/bucket/b789dd2c-c211-48ec-b000-4b7e103b31e8.png";

const CONTACTS = [
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
];

export default function FooterSection() {
  return (
    <>
      {/* CONTACTS */}
      <section className="py-16 warm-texture">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-oswald text-4xl font-bold text-foreground">
              Контакты
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {CONTACTS.map((c) => (
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
                  src={LOGO}
                  alt="Логотип"
                  className="h-9 w-auto brightness-0 invert"
                />
                <span className="font-oswald font-semibold text-white text-lg">
                  Грузоперевозки СПб ↔ Вологда
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Надёжные грузоперевозки по маршруту Санкт-Петербург — Вологда и обратно.
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
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-white/50 hover:text-white/80 transition-colors">
                Политика конфиденциальности
              </Link>
            </div>
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
    </>
  );
}