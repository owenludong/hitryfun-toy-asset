import en from './en';
import de from './de';
import fr from './fr';
import es from './es';

const messages = { en, de, fr, es };

export function t(key) {
  const lang = localStorage.getItem("lang") || "en";
  return messages[lang][key] || messages["en"][key] || key;
}
