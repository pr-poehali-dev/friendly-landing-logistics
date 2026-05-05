import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const LOGO =
  "https://cdn.poehali.dev/projects/6d54ddf7-e637-498d-9f98-b9986345c0b8/bucket/b789dd2c-c211-48ec-b000-4b7e103b31e8.png";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen warm-texture font-golos">
      <header className="bg-white border-b border-border shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={LOGO} alt="Логотип" className="h-10 w-auto" />
            <span className="font-oswald font-semibold text-lg text-foreground tracking-wide">
              СПб — Вологда
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-12">
          <h1 className="font-oswald text-3xl md:text-4xl font-bold text-foreground mb-2">
            Политика конфиденциальности
          </h1>
          <p className="text-muted-foreground mb-8">
            Последнее обновление: май 2025 года
          </p>

          <div className="prose prose-neutral max-w-none space-y-6 text-foreground">

            <section>
              <h2 className="font-oswald text-xl font-bold mb-3">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая политика конфиденциальности регулирует порядок обработки персональных данных пользователей
                сайта, осуществляемой ИП Бахтюрин Дмитрий Николаевич (ИНН 352512882720, ОГРНИП 322352500010611),
                далее — «Оператор». Использование сайта означает безоговорочное согласие с настоящей политикой.
              </p>
            </section>

            <section>
              <h2 className="font-oswald text-xl font-bold mb-3">2. Какие данные мы собираем</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                При заполнении формы заявки на сайте мы собираем следующие персональные данные:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                <li>Имя (фамилия, имя, отчество — по желанию)</li>
                <li>Номер телефона</li>
                <li>Комментарий к заявке (по желанию)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-oswald text-xl font-bold mb-3">3. Цели обработки данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                Персональные данные используются исключительно для:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2 mt-2">
                <li>Обратной связи по заявке на грузоперевозку</li>
                <li>Расчёта стоимости перевозки</li>
                <li>Заключения и исполнения договора оказания услуг</li>
              </ul>
            </section>

            <section>
              <h2 className="font-oswald text-xl font-bold mb-3">4. Хранение и защита данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор принимает необходимые организационные и технические меры для защиты персональных данных
                от несанкционированного доступа, изменения, раскрытия или уничтожения. Данные не передаются
                третьим лицам без согласия субъекта персональных данных, за исключением случаев, предусмотренных
                законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="font-oswald text-xl font-bold mb-3">5. Права субъекта данных</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                В соответствии с Федеральным законом № 152-ФЗ «О персональных данных» вы вправе:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                <li>Получить информацию об обработке ваших персональных данных</li>
                <li>Потребовать уточнения, блокирования или уничтожения данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
              </ul>
            </section>

            <section>
              <h2 className="font-oswald text-xl font-bold mb-3">6. Контактные данные оператора</h2>
              <div className="text-muted-foreground space-y-1">
                <p>ИП Бахтюрин Дмитрий Николаевич</p>
                <p>ИНН: 352512882720 · ОГРНИП: 322352500010611</p>
                <p>Юридический адрес: г. Череповец</p>
                <p>
                  Email:{" "}
                  <a href="mailto:i@mitja1386.ru" className="text-primary hover:underline">
                    i@mitja1386.ru
                  </a>
                </p>
                <p>
                  Телефон:{" "}
                  <a href="tel:89315128161" className="text-primary hover:underline">
                    8 931 512‑81‑61
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="bg-foreground text-white/50 py-6 text-center text-sm">
        <p>© 2025 ИП Бахтюрин Д.Н. Все права защищены.</p>
      </footer>
    </div>
  );
}
