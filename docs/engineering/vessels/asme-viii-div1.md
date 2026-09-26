# ASME VIII Div.1 — Design by Rule
**ASME BPVC Section VIII, Division 1**

!!! tip "خلاصه"
    Div.1 ساده‌ترین و رایج‌ترین روش طراحی مخازن تحت فشار است. بر اساس قوانین محافظه‌کارانه و ضریب اطمینان بالا.

---

## ساختار

| بخش | عنوان | کاربرد |
|---|---|---|
| `UG` | General | الزامات عمومی |
| `UW` | Welded | جوشکاری |
| `UCS` | Carbon Steel | فولاد کربنی |
| `UHA` | High Alloy | آلیاژی |
| `UHT` | Heat Treated | عملیات حرارتی |
| `UB` | Bolted Flanges | فلنج |
| `UF` | Fabricated | ساخت |

---

## فرمول‌های اصلی

### پوسته استوانه‌ای (UG-27)

$$t = \frac{P \cdot R}{S \cdot E - 0.6P}$$

### کلگی بیضوی (UG-32)

$$t = \frac{P \cdot D}{2 \cdot S \cdot E - 0.2P}$$

### کلگی بشقابی (UG-32)

$$t = \frac{0.885 \cdot P \cdot L}{S \cdot E - 0.1P}$$

### کلگی نیم‌کره (UG-32)

$$t = \frac{P \cdot R}{2 \cdot S \cdot E - 0.2P}$$

---

## ضریب جوش (E)

| نوع جوش | E |
|---|---|
| **Type 1 — Full RT** | 1.0 |
| **Type 1 — Spot RT** | 0.85 |
| **Type 1 — No RT** | 0.70 |
| **Type 2 — Full RT** | 0.90 |
| **Type 2 — No RT** | 0.65 |

---

## تنش مجاز (S)

از `ASME Section II, Part D`:

- `S = min(UTS/3.5, YS/1.5, Creep/1.0)`

---

## MAWP

$$MAWP = \frac{S \cdot E \cdot t}{R + 0.6t}$$

---

## الزامات NDT

| ضخامت | RT | MT/PT |
|---|---|---|
| `≤ 10 mm` | Spot | 100% |
| `10–25 mm` | Full | 100% |
| `> 25 mm` | Full | 100% |

---

## Stamp

- **U Stamp** — مخازن تحت فشار
- **UM Stamp** — مخازن کوچک
- **UV Stamp** — شیر اطمینان
- **U2 Stamp** — Div.2

---

## مستندات

- `Form A-1` — Manufacturer's Data Report
- `Form A-2` — Partial Data Report
- `Form A-3` — Supplementary Sheet