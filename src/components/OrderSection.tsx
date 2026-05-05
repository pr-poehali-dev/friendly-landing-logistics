import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function OrderSection() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
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
  );
}
