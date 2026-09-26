# ASME VIII Div.2 — Design by Analysis
**ASME BPVC Section VIII, Division 2**

!!! tip "خلاصه"
    Div.2 روش پیشرفته‌تر طراحی است که اجازه استفاده از تحلیل تنش و ضخامت کمتر را می‌دهد.

---

## تفاوت Div.1 و Div.2

| معیار | Div.1 | Div.2 |
|---|---|---|
| **روش** | Design by Rule | Design by Analysis |
| **ضریب اطمینان** | 3.5 | 2.4 |
| **ضخامت** | بیشتر | کمتر |
| **تحلیل** | ساده | FEA |
| **بازرسی** | معمولی | گسترده |

---

## ساختار Part 5 (Design by Analysis)

| بند | عنوان | کاربرد |
|---|---|---|
| `5.1` | General | الزامات عمومی |
| `5.2` | Plastic Collapse | جلوگیری از فروریزش |
| `5.3` | Local Failure | جلوگیری از شکست موضعی |
| `5.4` | Buckling | کمانش |
| `5.5` | Cyclic Loading | بارگذاری سیکلیک |
| `5.6` | Nozzle Stress | تنش نازل |
| `5.7` | Bolts | پیچ |
| `5.8` | Perforated Plates | صفحات سوراخ‌دار |

---

## روش‌های تحلیل (Part 5)

### 1. Elastic Analysis (5.2.2)

| تنش | حد مجاز |
|---|---|
| `P_m` | `S` |
| `P_L` | `1.5 S` |
| `P_m + P_b` | `1.5 S` |
| `P_L + P_b` | `1.5 S` |
| `P_m + P_b + Q` | `3 S` |
| `P_L + P_b + Q` | `3 S` |

### 2. Limit-Load Analysis (5.2.3)

- ضریب بار: `β ≥ 1.5` (Class 1) یا `1.2` (Class 2)

### 3. Elastic-Plastic Analysis (5.2.4)

- کرنش حد: `ε_pe ≤ ε_L`

---

## Protection Against Cyclic Loading (5.5)

### Fatigue Screening

| شرط | نتیجه |
|---|---|
| `N < 1000` | بدون نیاز به تحلیل خستگی |
| `1000 < N < 100000` | تحلیل ساده |
| `N > 100000` | تحلیل کامل |

### Fatigue Curve (Annex 3-F)

- `Sa = f(N)` — منحنی S-N
- ضریب کاهش خستگی: `K_f = 1.5` برای جوش

---

## Part 4 — Design by Rule (Div.2)

| بند | عنوان |
|---|---|
| `4.1` | General |
| `4.2` | Welded Joints |
| `4.3` | Shells Internal Pressure |
| `4.4` | Shells External Pressure |
| `4.5` | Openings |
| `4.6` | Flat Heads |
| `4.16` | Flanges |
| `4.18` | Heat Exchangers |

---

## Stamp

- **U2 Stamp** — مخازن Div.2
- **PRT Stamp** — Parts

---

## مزایای Div.2

- ✅ **ضخامت کمتر** = صرفه‌جویی متریال
- ✅ **دقت بالاتر** = ایمنی بیشتر
- ✅ **انعطاف طراحی** = اشکال پیچیده

## معایب

- ❌ **هزینه تحلیل FEA** بالا
- ❌ **نیاز به مهندس مجرب**
- ❌ **NDT گسترده**