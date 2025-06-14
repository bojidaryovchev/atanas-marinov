import { Mail, MapPin, Phone } from "lucide-react";
import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-orange-400">Атанас Маринов</h3>
            <p className="mb-4 text-slate-300">
              Професионални довършителни ремонти и строителство с гаранция за качество.
            </p>
            <p className="text-sm text-slate-400">Над 10 години опит в строителната индустрия.</p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Услуги</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Гипсов картон</li>
              <li>Окачени тавани</li>
              <li>Шпакловки и боядисване</li>
              <li>Довършителни работи</li>
              <li>Цялостни ремонти</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Контакти</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 shrink-0 text-orange-400" />
                <span className="text-slate-300">+359 89 294 1814</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 shrink-0 text-orange-400" />
                <span className="text-slate-300">atanasmarinoveood@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-orange-400" />
                <span className="text-slate-300">Пловдив и околността</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Атанас Маринов. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
