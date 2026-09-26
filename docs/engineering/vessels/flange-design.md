# طراحی فلنج
**Flange Design — ASME VIII Div.1 Appendix 2**

!!! tip "خلاصه"
    فلنج‌ها با روش Taylor-Forge (Appendix 2) طراحی می‌شوند. تنش‌ها باید در سه حالت: Operating، Gasket Seating و Rigidity بررسی شوند.

---

## انواع فلنج

| نوع | توضیح | کاربرد |
|---|---|---|
| **Integral** | یکپارچه با پوسته | فشار بالا |
| **Loose** | جدا از پوسته | فشار پایین |
| **Lap Joint** | Stub End + Flange | نصب آسان |
| **Blind** | بسته | انتهای خط |

---

## محاسبه بار پیچ (Bolt Load)

### حالت Gasket Seating

$$W_g = \pi \cdot b \cdot G \cdot y$$

### حالت Operating

$$W_o = W_1 + W_2$$

$$W_1 = \frac{\pi \cdot G^2 \cdot P}{4}$$

$$W_2 = 2 \cdot \pi \cdot b \cdot G \cdot m \cdot P$$

| نماد | شرح |
|---|---|
| `b` | عرض نشیمنگاه گسکت |
| `G` | قطر واکنش گسکت |
| `y` | تنش نشیمنگاه گسکت |
| `m` | ضریب گسکت |

---

## تنش‌های فلنج (Appendix 2)

| تنش | فرمول | حد مجاز |
|---|---|---|
| **Longitudinal Hub** | `S_H = f · M_o / (L · g₁²)` | `1.5 S_f` |
| **Radial** | `S_R = (1.33 · t · e + 1) · M_o / (L · t²)` | `S_f` |
| **Tangential** | `S_T = (Y · M_o / (t²)) − Z · S_R` | `S_f` |

---

## مقادیر ثابت گسکت (Table 4.16.1)

| گسکت | `m` | `y (MPa)` |
|---|---|---|
| Rubber | 0.5 | 0 |
| Spiral Wound (SS) | 3.0 | 69 |
| Spiral Wound (Graphite) | 2.5 | 69 |
| Ring Joint (Soft Iron) | 5.5 | 124 |
| Ring Joint (SS) | 6.0 | 179 |

---

## جدول گام پیچ (Bolt Spacing)

| نوع | فرمول |
|---|---|
| **حداکثر** | `B_max = 2d_b + 6t / (m + 0.5)` |
| **حداقل** | `B_min = 2d_b + 6 mm` |

---

## INSO 22156-3 (بند 10-5)

- استفاده از فلنج‌های استاندارد EN 1092-1
- دما و فشار طبق جداول استاندارد
- ماشین‌کاری سطوح اتصال