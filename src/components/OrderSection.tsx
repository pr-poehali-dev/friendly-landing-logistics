import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SEND_ORDER_URL = "https://functions.poehali.dev/d01c068f-d68e-4494-ba99-5fbc9cf2b04c";

export default function OrderSection() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Не удалось отправить заявку. Позвоните нам напрямую.");
      }
    } catch {
      setError("Ошибка соединения. Позвоните нам напрямую.");
    } finally {
      setLoading(false);
    }
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
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-xl hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
            >
              <Icon name={loading ? "Loader" : "Send"} size={20} className={loading ? "animate-spin" : ""} />
              {loading ? "Отправляем..." : "Отправить заявку"}
            </button>
            <p className="text-center text-muted-foreground text-xs">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <Link to="/privacy" className="underline hover:text-primary transition-colors">
                политикой конфиденциальности
              </Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}