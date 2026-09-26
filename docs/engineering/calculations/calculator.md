# 🧮 ماشین‌حساب مهندسی

**Engineering Calculator**

---

## 📐 محاسبه ضخامت پوسته — INSO 22156 / EN 12953

<div class="calculator">

<div class="calc-formula">
e_cs = (P_c × d_is) / (2 × f_s × v − P_c)
</div>

<label>فشار طراحی <span>P_c</span> (bar)</label>
<input type="number" id="shell-p" value="10" step="0.1">

<label>قطر داخلی <span>d_is</span> (mm)</label>
<input type="number" id="shell-d" value="1500" step="1">

<label>تنش طراحی <span>f_s</span> (MPa)</label>
<input type="number" id="shell-f" value="120" step="1">

<label>ضریب جوش <span>v</span></label>
<select id="shell-v">
  <option value="0.7">0.7 — بدون NDT</option>
  <option value="0.85" selected>0.85 — NDT جزئی</option>
  <option value="1.0">1.0 — NDT کامل</option>
</select>

<label>رواداری منفی <span>c₁</span> (mm)</label>
<input type="number" id="shell-c1" value="0.3" step="0.1">

<label>حد خوردگی <span>c₂</span> (mm)</label>
<input type="number" id="shell-c2" value="1" step="0.1">

<button onclick="calcShell()">⚡ محاسبه کن</button>

<div class="calc-result" id="shell-result"></div>

</div>

---

## 📐 محاسبه ضخامت پوسته — ASME VIII Div.1

<div class="calculator">

<div class="calc-formula">
t = (P × R) / (S × E − 0.6 × P)
</div>

<label>فشار طراحی <span>P</span> (MPa)</label>
<input type="number" id="asme-p" value="1.0" step="0.1">

<label>شعاع داخلی <span>R</span> (mm)</label>
<input type="number" id="asme-r" value="750" step="1">

<label>تنش مجاز <span>S</span> (MPa)</label>
<input type="number" id="asme-s" value="138" step="1">

<label>ضریب جوش <span>E</span></label>
<select id="asme-e">
  <option value="0.7">0.7</option>
  <option value="0.85">0.85</option>
  <option value="1.0" selected>1.0</option>
</select>

<label>خوردگی <span>c</span> (mm)</label>
<input type="number" id="asme-c" value="1" step="0.1">

<button onclick="calcShellASME()">⚡ محاسبه کن</button>

<div class="calc-result" id="asme-result"></div>

</div>

---

## 📐 محاسبه ضخامت کوره (تقریبی)

<div class="calculator">

<div class="calc-formula">
e_cf ≈ (P_c × d_m × S₁) / (2 × f_s × (1 + 0.1 × d_m/L))
</div>

<label>فشار طراحی <span>P</span> (bar)</label>
<input type="number" id="fur-p" value="10" step="0.1">

<label>قطر کوره <span>d</span> (mm)</label>
<input type="number" id="fur-d" value="800" step="1">

<label>طول کوره <span>L</span> (mm)</label>
<input type="number" id="fur-l" value="3000" step="1">

<label>تنش طراحی <span>f</span> (MPa)</label>
<input type="number" id="fur-f" value="120" step="1">

<label>انحراف از گردی <span>u</span> (%)</label>
<input type="number" id="fur-u" value="1" step="0.1">

<button onclick="calcFurnace()">⚡ محاسبه کن</button>

<div class="calc-result" id="fur-result"></div>

</div>

---

## 📐 محاسبه قطر داخلی پوسته

<div class="calculator">

<div class="calc-formula">
d_is = d_os − 2 × (e_s − c₁ − c₂)
</div>

<label>قطر خارجی <span>d_os</span> (mm)</label>
<input type="number" id="dia-dos" value="1520" step="1">

<label>ضخامت ورق <span>e_s</span> (mm)</label>
<input type="number" id="dia-es" value="10" step="0.1">

<label>رواداری منفی <span>c₁</span> (mm)</label>
<input type="number" id="dia-c1" value="0.3" step="0.1">

<label>حد خوردگی <span>c₂</span> (mm)</label>
<input type="number" id="dia-c2" value="1" step="0.1">

<button onclick="calcDiameter()">⚡ محاسبه کن</button>

<div class="calc-result" id="dia-result"></div>

</div>

---

## 📐 محاسبه خوردگی

<div class="calculator">

<div class="calc-formula">
c₂ = n × r_c
</div>

<label>عمر طراحی <span>n</span> (سال)</label>
<input type="number" id="corr-life" value="20" step="1">

<label>نرخ خوردگی <span>r_c</span> (mm/سال)</label>
<input type="number" id="corr-rate" value="0.05" step="0.01">

<button onclick="calcCorrosion()">⚡ محاسبه کن</button>

<div class="calc-result" id="corr-result"></div>

</div>

---

## 📐 محاسبه سطح حرارتی

<div class="calculator">

<div class="calc-formula">
A = π × D_g × (L + 0.25 × D_g)
</div>

<label>قطر کوره <span>D_g</span> (mm)</label>
<input type="number" id="heat-D" value="800" step="1">

<label>طول کوره <span>L</span> (mm)</label>
<input type="number" id="heat-L" value="3000" step="1">

<label>تعداد لوله <span>n</span> (اختیاری)</label>
<input type="number" id="heat-n" value="0" step="1">

<label>قطر لوله <span>d</span> (mm)</label>
<input type="number" id="heat-d" value="0" step="1">

<label>طول لوله <span>Lt</span> (mm)</label>
<input type="number" id="heat-Lt" value="0" step="1">

<button onclick="calcHeat()">⚡ محاسبه کن</button>

<div class="calc-result" id="heat-result"></div>

</div>

---

## 📐 محاسبه فشار طراحی

<div class="calculator">

<div class="calc-formula">
P_c = P_S + P_h
</div>

<label>فشار مجاز <span>P_S</span> (bar)</label>
<input type="number" id="dp-ps" value="10" step="0.1">

<label>ارتفاع ستون آب <span>h</span> (mm)</label>
<input type="number" id="dp-h" value="0" step="1">

<button onclick="calcDesignPressure()">⚡ محاسبه کن</button>

<div class="calc-result" id="dp-result"></div>

</div>

---

## 📐 محاسبه فشار تست هیدرواستاتیک

<div class="calculator">

<div class="calc-formula">
P_test = 1.5 × P_design
</div>

<label>فشار طراحی (bar)</label>
<input type="number" id="tp-pd" value="10" step="0.1">

<button onclick="calcTestPressure()">⚡ محاسبه کن</button>

<div class="calc-result" id="tp-result"></div>

</div>

---

## 📐 محاسبه ضخامت کلگی بیضوی — ASME VIII

<div class="calculator">

<div class="calc-formula">
t = P × D / (2 × S × E − 0.2 × P)
</div>

<label>فشار طراحی (MPa)</label>
<input type="number" id="head-p" value="1.0" step="0.1">

<label>قطر داخلی (mm)</label>
<input type="number" id="head-d" value="1500" step="1">

<label>تنش مجاز (MPa)</label>
<input type="number" id="head-s" value="138" step="1">

<label>ضریب جوش</label>
<select id="head-e">
  <option value="0.85">0.85</option>
  <option value="1.0" selected>1.0</option>
</select>

<label>خوردگی (mm)</label>
<input type="number" id="head-c" value="1" step="0.1">

<button onclick="calcHeadASME()">⚡ محاسبه کن</button>

<div class="calc-result" id="head-result"></div>

</div>