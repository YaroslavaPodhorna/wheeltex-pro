import { holidays } from "./holidays";

/**
 * Генерує часові слоти у форматі 12h (AM/PM)
 */
export function generateTimeSlots(date) {
  const selectedDate = new Date(date);
  const isoDate = selectedDate.toISOString().split("T")[0];

  // ❌ Свята та неділя
  if (holidays.includes(isoDate)) return [];
  const day = selectedDate.getDay(); // 0 = Sunday
  if (day === 0) return [];

  const startHour = 10;
  const endHour = day === 6 ? 17 : 20; // Субота до 17:00, інші до 20:00

  const slots = [];
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute of [0, 30]) {
      slots.push(to12HourFormat(hour, minute));
    }
  }
  return slots;
}

/**
 * Конвертує 24h → 12h (AM/PM)
 */
function to12HourFormat(hour, minute) {
  const ampm = hour >= 12 ? "PM" : "AM";
  let displayHour = hour % 12 || 12; // 0 → 12
  return `${displayHour}:${minute.toString().padStart(2, "0")} ${ampm}`;
}

/**
 * Конвертує 12h → 24h (для бекенду)
 */
export function to24HourFormat(time12) {
  const [time, modifier] = time12.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}
