# محاسبات تکمیلی دیگ

**Supplementary Boiler Calculations**

!!! tip "خلاصه"
    محاسبات مصرف سوخت، راندمان، ظرفیت مشعل، سطح حرارتی، و محاسبات جانبی دیگ.

---

## 🔥 ۱. محاسبه مصرف سوخت (Fuel Consumption)

$$F = \frac{H_{boiler}}{\eta \times LCV}$$

| نماد | شرح | واحد |
|---|---|---|
| `F` | مصرف سوخت | kg/hr یا m³/hr |
| `H_boiler` | ظرفیت حرارتی دیگ | kcal/h |
| `η` | راندمان دیگ | — |
| `LCV` | ارزش حرارتی پایین سوخت | kcal/kg یا kcal/m³ |

**مثال — دیگ بخار ۱۰ ton/hr:**

- ظرفیت حرارتی: ۱۰ ton/hr × ۶۰۰,۰۰۰ = ۶,۰۰۰,۰۰۰ kcal/h
- راندمان: ۰.۹۰
- LCV گاز طبیعی: ۹,۵۰۰ kcal/m³

$$F = \frac{6,000,000}{0.90 \times 9,500} = 702 \text{ m}^3/\text{hr}$$

---

## ⚡ ۲. محاسبه راندمان (Boiler Efficiency)

### روش مستقیم (Direct Method)

$$\eta = \frac{H_{output}}{H_{input}} \times 100$$

### روش غیرمستقیم (Indirect Method — Heat Loss)

$$\eta = 100 - (\text{اتلاف‌ها})$$

**اتلاف‌ها:**
- اتلاف دود خشک (Dry Flue Gas Loss): ۵-۱۵٪
- اتلاف تبخیر آب (Moisture Loss): ۲-۸٪
- اتلاف تشعشع (Radiation Loss): ۱-۳٪
- اتلاف ناقص‌سوزی (Unburned Loss): ۰-۲٪

---

## 📏 ۳. محاسبه سطح حرارتی (Heating Surface)

$$A = \pi \times D \times L + \frac{\pi \times D^2}{2}$$

**مثال:** کوره با قطر ۸۰۰ mm و طول ۳۰۰۰ mm:

$$A = \pi \times 0.8 \times 3 + \frac{\pi \times 0.8^2}{2} = 7.54 + 1.01 = 8.55 \text{ m}^2$$

---

## 💧 ۴. محاسبه دبی آب تغذیه (Feedwater Flow)

$$\dot{m}_{fw} = \dot{m}_{steam} \times (1 + BD)$$

- `BD` = نرخ بلودان (Blowdown) — معمولاً ۲-۵٪

**مثال:** دیگ ۱۰ ton/hr با BD = ۳٪:
$$\dot{m}_{fw} = 10 \times 1.03 = 10.3 \text{ ton/hr}$$

---

## 🌡️ ۵. محاسبه دمای اشباع (Saturation Temperature)

| فشار (bar) | دمای اشباع (°C) |
|---|---|
| ۱ | ۱۰۰ |
| ۵ | ۱۵۲ |
| ۱۰ | ۱۸۴ |
| ۱۵ | ۱۹۸ |
| ۲۰ | ۲۱۲ |

---

## 🔄 ۶. محاسبه بلودان (Blowdown)

$$BD = \frac{X_{fw}}{X_{max} - X_{fw}} \times 100$$

- `X_fw` = TDS آب تغذیه
- `X_max` = TDS مجاز در دیگ

**مثال:** X_fw = ۲۰۰ ppm، X_max = ۳۵۰۰ ppm:
$$BD = \frac{200}{3500 - 200} \times 100 = 6\%$$

---

## 📦 ۷. محاسبه حجم منبع انبساط (Expansion Tank)

$$V_{exp} = V_{system} \times \frac{\Delta T \times e}{1}$$

- `e` = ضریب انبساط آب (۰.۰۰۰۲ در ۸۰°C)
- `ΔT` = تغییر دما

---

## 🛡️ ۸. محاسبه ظرفیت شیر اطمینان (Safety Valve Sizing)

$$A = \frac{W}{C \times K \times P \times \sqrt{M/T}}$$

طبق `ISO 4126-1` و `ASME Section I`.

---

## 📊 خلاصه فرمول‌ها

| محاسبه | فرمول |
|---|---|
| ضخامت پوسته | `t = PR/(SE - 0.6P) + CA` |
| مصرف سوخت | `F = H/η × LCV` |
| راندمان | `η = H_out/H_in × 100` |
| سطح حرارتی | `A = πDL + πD²/2` |
| دبی تغذیه | `ṁ_fw = ṁ_steam × (1 + BD)` |
| بلودان | `BD = X_fw/(X_max - X_fw) × 100` |

---

## 📚 استانداردهای مرجع

- `ASME PTC 4` — Fired Steam Generators
- `ASME Section I` — Power Boilers
- `EN 12953` — Shell Boilers
- `ISO 4126-1` — Safety Valves