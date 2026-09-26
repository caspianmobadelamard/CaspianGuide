/* ============================================
   ماشین‌حساب مهندسی کاسپین مبدل آمارد
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ CaspianGuide Calculator loaded');
});

/* --------------------------------------------
   ۱. ضخامت پوسته — INSO 22156 / EN 12953
   e_cs = (P_c × d_is) / (2 × f_s × v − P_c)
   -------------------------------------------- */
function calcShell() {
  const P = parseFloat(document.getElementById('shell-p').value);
  const d = parseFloat(document.getElementById('shell-d').value);
  const f = parseFloat(document.getElementById('shell-f').value);
  const v = parseFloat(document.getElementById('shell-v').value);
  const c1 = parseFloat(document.getElementById('shell-c1').value) || 0.3;
  const c2 = parseFloat(document.getElementById('shell-c2').value) || 1;

  if (!P || !d || !f || !v) return alert('لطفاً همه فیلدها را پر کنید');

  const P_mpa = P * 0.1; // bar → MPa
  const e_cs = (P_mpa * d) / (2 * f * v - P_mpa);
  const e_sa = e_cs + c1 + c2;

  const result = document.getElementById('shell-result');
  result.innerHTML = `
    <p><strong>ضخامت محاسبه‌شده (e_cs):</strong> ${e_cs.toFixed(2)} mm</p>
    <p><strong>رواداری منفی (c₁):</strong> ${c1} mm</p>
    <p><strong>حد خوردگی (c₂):</strong> ${c2} mm</p>
    <p><strong>ضخامت نهایی (e_sa):</strong> ${e_sa.toFixed(2)} mm</p>
    <p><strong>ورق پیشنهادی:</strong> ${Math.ceil(e_sa)} mm</p>
    <hr>
    <p><small>فرمول: e_cs = (P_c × d_is) / (2 × f_s × v − P_c)</small></p>
  `;
  result.classList.add('show');
}

/* --------------------------------------------
   ۲. ضخامت پوسته — ASME VIII Div.1
   t = (P × R) / (S × E − 0.6 × P)
   -------------------------------------------- */
function calcShellASME() {
  const P = parseFloat(document.getElementById('asme-p').value);
  const R = parseFloat(document.getElementById('asme-r').value);
  const S = parseFloat(document.getElementById('asme-s').value);
  const E = parseFloat(document.getElementById('asme-e').value);
  const c = parseFloat(document.getElementById('asme-c').value) || 0;

  if (!P || !R || !S || !E) return alert('لطفاً همه فیلدها را پر کنید');

  const t = (P * R) / (S * E - 0.6 * P);
  const t_final = t + c;

  const result = document.getElementById('asme-result');
  result.innerHTML = `
    <p><strong>ضخامت حداقل (t):</strong> ${t.toFixed(2)} mm</p>
    <p><strong>با خوردگی:</strong> ${t_final.toFixed(2)} mm</p>
    <p><strong>ورق پیشنهادی:</strong> ${Math.ceil(t_final)} mm</p>
    <hr>
    <p><small>فرمول: t = (P × R) / (S × E − 0.6 × P)</small></p>
  `;
  result.classList.add('show');
}

/* --------------------------------------------
   ۳. ضخامت کوره (تقریبی)
   EN 12953-3 Section 13
   -------------------------------------------- */
function calcFurnace() {
  const P = parseFloat(document.getElementById('fur-p').value);
  const d = parseFloat(document.getElementById('fur-d').value);
  const L = parseFloat(document.getElementById('fur-l').value);
  const f = parseFloat(document.getElementById('fur-f').value);
  const u = parseFloat(document.getElementById('fur-u').value) || 1.0;

  if (!P || !d || !L || !f) return alert('لطفاً همه فیلدها را پر کنید');

  const S1 = 1.5;
  const P_mpa = P * 0.1;
  const e_cf = (P_mpa * d * S1) / (2 * f * (1 + 0.1 * d / L));

  const result = document.getElementById('fur-result');
  result.innerHTML = `
    <p><strong>ضخامت کوره (e_cf):</strong> ${e_cf.toFixed(2)} mm</p>
    <p><strong>ضخامت پیشنهادی:</strong> ${Math.ceil(e_cf)} mm</p>
    <hr>
    <p><small>⚠️ محاسبه تقریبی — برای دقت بیشتر به EN 12953-3 بخش ۱۳ مراجعه کنید.</small></p>
  `;
  result.classList.add('show');
}

/* --------------------------------------------
   ۴. قطر داخلی پوسته
   d_is = d_os − 2 × (e_s − c₁ − c₂)
   -------------------------------------------- */
function calcDiameter() {
  const dos = parseFloat(document.getElementById('dia-dos').value);
  const es = parseFloat(document.getElementById('dia-es').value);
  const c1 = parseFloat(document.getElementById('dia-c1').value) || 0.3;
  const c2 = parseFloat(document.getElementById('dia-c2').value) || 1;

  if (!dos || !es) return alert('لطفاً همه فیلدها را پر کنید');

  const dis = dos - 2 * (es - c1 - c2);
  const dm = (dos + dis) / 2;

  const result = document.getElementById('dia-result');
  result.innerHTML = `
    <p><strong>قطر داخلی (d_is):</strong> ${dis.toFixed(2)} mm</p>
    <p><strong>قطر متوسط (d_m):</strong> ${dm.toFixed(2)} mm</p>
    <hr>
    <p><small>فرمول: d_is = d_os − 2 × (e_s − c₁ − c₂)</small></p>
  `;
  result.classList.add('show');
}

/* --------------------------------------------
   ۵. خوردگی
   c₂ = n × r_c
   -------------------------------------------- */
function calcCorrosion() {
  const life = parseFloat(document.getElementById('corr-life').value);
  const rate = parseFloat(document.getElementById('corr-rate').value);

  if (!life || !rate) return alert('لطفاً همه فیلدها را پر کنید');

  const c2 = life * rate;

  const result = document.getElementById('corr-result');
  result.innerHTML = `
    <p><strong>حد مجاز خوردگی (c₂):</strong> ${c2.toFixed(2)} mm</p>
    <p><strong>عمر طراحی:</strong> ${life} سال</p>
    <p><strong>نرخ خوردگی:</strong> ${rate} mm/سال</p>
    <hr>
    <p><small>فرمول: c₂ = n × r_c</small></p>
  `;
  result.classList.add('show');
}

/* --------------------------------------------
   ۶. سطح حرارتی کوره
   A = π × D_g × (L + 0.25 × D_g)
   -------------------------------------------- */
function calcHeat() {
  const D = parseFloat(document.getElementById('heat-D').value);
  const L = parseFloat(document.getElementById('heat-L').value);
  const n = parseFloat(document.getElementById('heat-n').value) || 0;
  const d = parseFloat(document.getElementById('heat-d').value) || 0;
  const Lt = parseFloat(document.getElementById('heat-Lt').value) || 0;

  if (!D || !L) return alert('لطفاً D و L را وارد کنید');

  const A_mm2 = Math.PI * D * (L + 0.25 * D);
  const A_m2 = A_mm2 / 1e6;
  const A_tubes = n * Math.PI * d * Lt / 1e6;

  const result = document.getElementById('heat-result');
  result.innerHTML = `
    <p><strong>سطح حرارتی کوره:</strong> ${A_m2.toFixed(3)} m²</p>
    ${A_tubes > 0 ? `<p><strong>سطح حرارتی لوله‌ها:</strong> ${A_tubes.toFixed(3)} m²</p>
    <p><strong>سطح کل:</strong> ${(A_m2 + A_tubes).toFixed(3)} m²</p>` : ''}
    <hr>
    <p><small>فرمول: A = π × D_g × (L + 0.25 × D_g)</small></p>
  `;
  result.classList.add('show');
}

/* --------------------------------------------
   ۷. فشار طراحی
   P_c = P_S + P_h
   -------------------------------------------- */
function calcDesignPressure() {
  const Ps = parseFloat(document.getElementById('dp-ps').value);
  const h = parseFloat(document.getElementById('dp-h').value) || 0;

  if (!Ps) return alert('لطفاً فشار مجاز را وارد کنید');

  const Ph = h * 0.0981 / 10; // mm water → bar (تقریبی)
  const Pc = Ps + Ph;
  const negligible = Ph < 0.03 * Ps;

  const result = document.getElementById('dp-result');
  result.innerHTML = `
    <p><strong>فشار ستون آب (P_h):</strong> ${Ph.toFixed(4)} bar</p>
    <p><strong>فشار طراحی (P_c):</strong> ${Pc.toFixed(4)} bar</p>
    ${negligible ? '<p style="color: var(--neon-green);">✓ فشار ستون آب ناچیز است (کمتر از ۳٪)</p>' : ''}
    <hr>
    <p><small>فرمول: P_c = P_S + P_h</small></p>
  `;
  result.classList.add('show');
}

/* --------------------------------------------
   ۸. فشار تست هیدرواستاتیک
   P_test = 1.5 × P_design
   -------------------------------------------- */
function calcTestPressure() {
  const Pd = parseFloat(document.getElementById('tp-pd').value);

  if (!Pd) return alert('لطفاً فشار طراحی را وارد کنید');

  const Ptest = 1.5 * Pd;

  const result = document.getElementById('tp-result');
  result.innerHTML = `
    <p><strong>فشار طراحی:</strong> ${Pd} bar</p>
    <p><strong>فشار تست هیدرواستاتیک:</strong> ${Ptest.toFixed(2)} bar</p>
    <hr>
    <p><small>فرمول: P_test = 1.5 × P_design</small></p>
  `;
  result.classList.add('show');
}

/* --------------------------------------------
   ۹. ضخامت کلگی بیضوی — ASME VIII Div.1
   t = P × D / (2 × S × E − 0.2 × P)
   -------------------------------------------- */
function calcHeadASME() {
  const P = parseFloat(document.getElementById('head-p').value);
  const D = parseFloat(document.getElementById('head-d').value);
  const S = parseFloat(document.getElementById('head-s').value);
  const E = parseFloat(document.getElementById('head-e').value);
  const c = parseFloat(document.getElementById('head-c').value) || 0;

  if (!P || !D || !S || !E) return alert('لطفاً همه فیلدها را پر کنید');

  const t = (P * D) / (2 * S * E - 0.2 * P);
  const t_final = t + c;

  const result = document.getElementById('head-result');
  result.innerHTML = `
    <p><strong>ضخامت حداقل:</strong> ${t.toFixed(2)} mm</p>
    <p><strong>با خوردگی:</strong> ${t_final.toFixed(2)} mm</p>
    <p><strong>ورق پیشنهادی:</strong> ${Math.ceil(t_final)} mm</p>
    <hr>
    <p><small>فرمول: t = P × D / (2 × S × E − 0.2 × P)</small></p>
  `;
  result.classList.add('show');
}