# 🔍 فیلتر محصولات

**Product Filter**

!!! tip "راهنما"
    با استفاده از فیلترهای زیر، محصول مناسب خود را پیدا کنید. می‌توانید بر اساس **نوع محصول**، **ظرفیت**، **فشار** و **سوخت** فیلتر کنید.

---

<div class="product-filter">

<div class="filter-group">
<label>🔧 نوع محصول (Product Type)</label>
<select id="filter-type">
  <option value="">همه محصولات</option>
  <option value="steam">دیگ بخار (Steam Boiler)</option>
  <option value="warm">دیگ آبگرم (Warm Water Boiler)</option>
  <option value="hot">دیگ آب داغ (Hot Water Boiler)</option>
  <option value="oil">دیگ روغن داغ (Thermal Oil Boiler)</option>
  <option value="tank">مخازن و منابع (Tanks)</option>
</select>
</div>

<div class="filter-group">
<label>📊 ظرفیت (Capacity)</label>
<select id="filter-capacity">
  <option value="">همه ظرفیت‌ها</option>
  <option value="small">کم (تا ۱ تن / ۵۰۰,۰۰۰ kcal/h)</option>
  <option value="medium">متوسط (۱ تا ۱۰ تن / ۵۰۰,۰۰۰ تا ۲,۰۰۰,۰۰۰ kcal/h)</option>
  <option value="large">بالا (بالای ۱۰ تن / ۲,۰۰۰,۰۰۰ kcal/h)</option>
</select>
</div>

<div class="filter-group">
<label>⚡ فشار (Pressure)</label>
<select id="filter-pressure">
  <option value="">همه فشارها</option>
  <option value="low">کم (تا ۵ bar)</option>
  <option value="medium">متوسط (۵ تا ۱۰ bar)</option>
  <option value="high">بالا (بالای ۱۰ bar)</option>
</select>
</div>

<div class="filter-group">
<label>🔥 سوخت (Fuel)</label>
<select id="filter-fuel">
  <option value="">همه سوخت‌ها</option>
  <option value="gas">گاز طبیعی (Natural Gas)</option>
  <option value="diesel">گازوئیل (Diesel)</option>
  <option value="dual">دوگانه‌سوز (Dual Fuel)</option>
  <option value="mazut">مازوت (Heavy Oil)</option>
</select>
</div>

<button onclick="resetFilters()" class="filter-reset">🔄 پاک کردن فیلترها</button>

</div>

---

<div id="filter-results" class="filter-results">

<div class="product-grid">

<div class="product-card" data-type="steam" data-capacity="medium" data-pressure="medium" data-fuel="gas">
<h3>🔥 دیگ بخار افقی سه‌پاس</h3>
<p><strong>Horizontal Three-Pass Steam Boiler</strong></p>
<p>ظرفیت: ۱ تا ۲۵ ton/hr | فشار: ۳ تا ۲۰ bar</p>
<span class="badge">INSO 22156 / EN 12953</span>
</div>

<div class="product-card" data-type="steam" data-capacity="small" data-pressure="low" data-fuel="gas">
<h3>🔥 دیگ بخار عمودی</h3>
<p><strong>Vertical Steam Boiler</strong></p>
<p>ظرفیت: ۰.۱ تا ۲ ton/hr | فشار: ۴ تا ۱۰ bar</p>
<span class="badge">INSO 22156 / BS 855</span>
</div>

<div class="product-card" data-type="warm" data-capacity="medium" data-pressure="low" data-fuel="gas">
<h3>💧 دیگ آبگرم</h3>
<p><strong>Warm Water Boiler</strong></p>
<p>ظرفیت: تا ۲,۵۰۰,۰۰۰ kcal/h | دمای < ۱۰۰°C</p>
<span class="badge">BS 855 / ISIRI 7911</span>
</div>

<div class="product-card" data-type="hot" data-capacity="medium" data-pressure="high" data-fuel="gas">
<h3>♨️ دیگ آب داغ</h3>
<p><strong>Hot Water Boiler</strong></p>
<p>فشار > ۸ bar | دمای > ۱۱۰°C | طراحی ۲۵۰°C</p>
<span class="badge">INSO 22156 / EN 12953</span>
</div>

<div class="product-card" data-type="oil" data-capacity="large" data-pressure="low" data-fuel="gas">
<h3>🛢️ دیگ روغن داغ</h3>
<p><strong>Thermal Oil Boiler</strong></p>
<p>ظرفیت: تا ۵,۰۰۰,۰۰۰ kcal/h | دمای تا ۳۰۰°C</p>
<span class="badge">INSO 22156 / EN 12953</span>
</div>

<div class="product-card" data-type="tank" data-capacity="small" data-pressure="low" data-fuel="">
<h3>🌀 منبع اسپیرال</h3>
<p><strong>Spiral Tank</strong></p>
<p>حجم: ۱۰۰ تا ۵۰۰۰ لیتر | فشار: ۳ تا ۱۰ bar</p>
<span class="badge">ASME VIII</span>
</div>

<div class="product-card" data-type="tank" data-capacity="small" data-pressure="low" data-fuel="">
<h3>💦 مخزن کندانس</h3>
<p><strong>Condensate Tank</strong></p>
<p>حجم: ۵۰۰ تا ۲۰,۰۰۰ لیتر | فشار اتمسفر</p>
<span class="badge">ASME VIII</span>
</div>

<div class="product-card" data-type="tank" data-capacity="small" data-pressure="medium" data-fuel="">
<h3>🔃 منبع کوئلی</h3>
<p><strong>Coil Tank</strong></p>
<p>حجم: ۲۰۰ تا ۱۰,۰۰۰ لیتر | فشار: ۳ تا ۱۰ bar</p>
<span class="badge">ASME VIII</span>
</div>

</div>

<p id="no-results" style="display:none; text-align:center; color: var(--neon-pink);">
    ⚠️ محصولی با این مشخصات یافت نشد. لطفاً فیلترها را تغییر دهید.
</p>

</div>