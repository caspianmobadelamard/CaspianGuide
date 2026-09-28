# محاسبات ضخامت و خوردگی

**Thickness & Corrosion Calculations**

!!! tip "خلاصه"
    محاسبات ضخامت پوسته (Shell Thickness) بر اساس تنش مماسی (Hoop Stress) و محاسبات خوردگی (Corrosion) بر اساس نرخ خوردگی (Corrosion Rate) و عمر طراحی (Design Life).

---

## 📐 فرمول پایه ضخامت پوسته استوانه‌ای

### تنش مماسی (Circumferential Stress) — بحرانی

$$t_p = \frac{P \times R}{S \times E - 0.6P}$$

### تنش طولی (Longitudinal Stress)

$$t_p = \frac{P \times R}{2 \times S \times E + 0.4P}$$

| نماد | شرح | واحد |
|---|---|---|
| `t_p` | ضخامت محاسباتی برای فشار | mm |
| `P` | فشار طراحی (Design Pressure) | MPa |
| `R` | شعاع داخلی (Inside Radius) | mm |
| `S` | تنش مجاز (Allowable Stress) | MPa |
| `E` | ضریب جوش (Joint Efficiency) | — |

### ضخامت نهایی

$$t_{req} = t_p + CA$$

$$t_{nom} \geq t_{req} + \text{Mill Tolerance}$$

---

## 🧮 مثال ۱: دیگ بخار (Steam Boiler)

| پارامتر | مقدار |
|---|---|
| فشار طراحی (P) | ۱.۰ MPa (۱۰ bar) |
| قطر داخلی (D) | ۱۰۰۰ mm → R = ۵۰۰ mm |
| تنش مجاز (S) | ۱۲۰ MPa |
| ضریب جوش (E) | ۰.۸۵ |
| خوردگی مجاز (CA) | ۲ mm |

**محاسبه:**

$$t_p = \frac{1 \times 500}{120 \times 0.85 - 0.6 \times 1} = \frac{500}{101.4} \approx 4.93 \text{ mm}$$

$$t_{req} = 4.93 + 2 = 6.93 \text{ mm}$$

$$t_{nom} = 6.93 + 0.3 = 7.23 \text{ mm} \Rightarrow \text{ورق ۸ mm}$$

**کنترل تنش طولی:**

$$t_p = \frac{1 \times 500}{2 \times 120 \times 0.85 + 0.4 \times 1} = \frac{500}{204.4} \approx 2.45 \text{ mm}$$

چون ۲.۴۵ < ۴.۹۳ است، **تنش مماسی حاکم** است.

---

## 🧮 مثال ۲: دیگ آبگرم (Warm Water Boiler)

| پارامتر | مقدار |
|---|---|
| فشار طراحی (P) | ۰.۶ MPa (۶ bar) |
| قطر داخلی (D) | ۱۵۰۰ mm → R = ۷۵۰ mm |
| تنش مجاز (S) | ۱۱۰ MPa |
| ضریب جوش (E) | ۰.۸۵ |
| خوردگی مجاز (CA) | ۳ mm |

**محاسبه:**

$$t_p = \frac{0.6 \times 750}{110 \times 0.85 - 0.6 \times 0.6} = \frac{450}{93.14} \approx 4.83 \text{ mm}$$

$$t_{req} = 4.83 + 3 = 7.83 \text{ mm} \Rightarrow \text{ورق ۱۰ mm}$$

---

## 🧮 مثال ۳: دیگ روغن داغ (Thermal Oil Boiler)

| پارامتر | مقدار |
|---|---|
| فشار طراحی (P) | ۰.۸ MPa (۸ bar) |
| قطر داخلی (D) | ۸۰۰ mm → R = ۴۰۰ mm |
| تنش مجاز (S) | ۱۰۰ MPa |
| ضریب جوش (E) | ۰.۸۰ |
| خوردگی مجاز (CA) | ۱.۵ mm |

**محاسبه:**

$$t_p = \frac{0.8 \times 400}{100 \times 0.8 - 0.6 \times 0.8} = \frac{320}{79.52} \approx 4.02 \text{ mm}$$

$$t_{req} = 4.02 + 1.5 = 5.52 \text{ mm} \Rightarrow \text{ورق ۶ mm}$$

---

## 💧 محاسبات خوردگی (Corrosion Calculations)

### الف) نرخ خوردگی یکنواخت (Uniform Corrosion Rate)

$$CR = \frac{t_0 - t_c}{T}$$

| نماد | شرح | واحد |
|---|---|---|
| `CR` | نرخ خوردگی (Corrosion Rate) | mm/year |
| `t_0` | ضخامت اولیه | mm |
| `t_c` | ضخامت فعلی | mm |
| `T` | مدت زمان | سال |

**مثال:**
- ضخامت اولیه: ۱۰ mm
- ضخامت بعد از ۵ سال: ۹.۲ mm
- نرخ خوردگی: CR = (۱۰ - ۹.۲) / ۵ = **۰.۱۶ mm/year**

### ب) خوردگی مجاز (Corrosion Allowance)

$$CA = CR \times n$$

- `n` = عمر طراحی (سال)

**مثال:** با CR = ۰.۱۶ و عمر ۲۰ سال → CA = **۳.۲ mm**

### پ) عمر باقی‌مانده (Remaining Life)

$$RL = \frac{t_c - t_{min}}{CR}$$

- `t_min` = حداقل ضخامت لازم برای فشار

**مثال:** با t_c = ۹.۲، t_min = ۵.۵، CR = ۰.۱۶ → RL = **۲۳.۱ سال**

### ت) فاصله بازرسی (Inspection Interval)

$$T_{insp} = \frac{RL}{SF}$$

- `SF` = ضریب اطمینان (معمولاً ۲)

**مثال:** RL = ۲۳.۱، SF = ۲ → T_insp = **۱۱.۵ سال** (محدود به ۱۰ سال طبق استاندارد)

### ث) خوردگی حفره‌ای (Pitting Corrosion)

$$CR_{pit} = \frac{d_2 - d_1}{T}$$

**مثال:** عمق حفره بعد از ۵ سال ۱.۲ mm → CR_pit = **۰.۲۴ mm/year**

برای ۲۰ سال: CA_pit = **۴.۸ mm** (ممکن است بحرانی‌تر از خوردگی یکنواخت باشد).

---

## 📊 جدول خلاصه خوردگی

| نوع سیال | حد خوردگی معمول | نرخ خوردگی |
|---|---|---|
| آب تمیز (Clean Water) | ۱ mm | ۰.۰۵ mm/year |
| بخار (Steam) | ۱ mm | ۰.۰۵ mm/year |
| آب دریا (Sea Water) | ۳ mm | ۰.۱۵ mm/year |
| اسید (Acid) | ۳-۶ mm | ۰.۳ mm/year |
| هیدروکربن (Hydrocarbon) | ۱.۵-۳ mm | ۰.۱ mm/year |
| گاز خشک (Dry Gas) | ۰ mm | ۰ mm/year |

---

## 🛡️ نکات اجرایی

!!! warning "توجه"
    - برای لوله‌های آتش‌خان (Furnace Tubes) که تحت **فشار خارجی** هستند، از فرمول‌های **کمانش (Buckling)** استفاده می‌شود.
    - در دیگ‌های بخار و آبگرم، خوردگی از **هر دو طرف** (آب و آتش) رخ می‌دهد:
      $$CA_{total} = CA_{water} + CA_{fire}$$
    - ضخامت اسمی باید **تلورانس نورد** (Mill Tolerance) را هم شامل شود.
    - برای ارزیابی دقیق‌تر، از `API 510` و `API 579` استفاده کنید.

---

## 📚 استانداردهای مرجع

| استاندارد | کاربرد |
|---|---|
| `ASME BPVC Section I` | Power Boilers |
| `ASME BPVC Section IV` | Heating Boilers |
| `ASME BPVC Section VIII Div.1` | Pressure Vessels |
| `EN 12953` | Shell Boilers |
| `API 510` | Pressure Vessel Inspection |
| `API 579` | Fitness-for-Service |

---

## 📞 نکته فروش

!!! success "پاسخ به مشتری"
    «حد خوردگی (Corrosion Allowance) معمولاً ۱ تا ۳ میلی‌متر به ضخامت اضافه می‌شه تا در طول عمر دیگ (۱۵-۲۰ سال)، ضخامت واقعی از حد مجاز کمتر نشه.»