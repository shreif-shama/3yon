const products = [
  {
    id: 1,
    title: "مكنسة كهربائية ذكية 2200W",
    price: 3499,
    specs: "قوة شفط عالية، فلتر HEPA، ضمان سنتين",
    phone: "+201001112233",
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1523419409543-4f6de4e9f35d?auto=format&fit=crop&w=500&q=80",
    ],
  },
  {
    id: 2,
    title: "غلاية كهربائية ستانلس 1.7 لتر",
    price: 899,
    specs: "إيقاف تلقائي، قاعدة دوران 360°، حماية من الجفاف",
    phone: "+201009998877",
    images: [
      "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=500&q=80",
    ],
  },
  {
    id: 3,
    title: "خلاط مطبخ 5 سرعات",
    price: 1599,
    specs: "وعاء زجاجي، شفرات ستانلس، زر نبضي",
    phone: "+201223334455",
    images: [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=500&q=80",
    ],
  },
];

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
let cartItems = 0;
let total = 0;

products.forEach((product) => {
  const card = document.createElement("article");
  card.className = "product-card hero-card";

  const gallery = product.images
    .map((img) => `<img src="${img}" alt="${product.title}" loading="lazy" />`)
    .join("");

  const whatsappMessage = encodeURIComponent(
    `مرحباً، أريد الاستفسار عن المنتج: ${product.title}`
  );

  card.innerHTML = `
      <div class="gallery">${gallery}</div>
      <h3>${product.title}</h3>
      <p class="price">${product.price} جنيه</p>
      <p class="specs">${product.specs}</p>
      <div class="contact-actions">
        <a class="btn btn-outline" href="tel:${product.phone}">اتصال بالبائع</a>
        <a class="btn btn-outline" target="_blank" href="https://wa.me/${product.phone.replace(
          "+",
          ""
        )}?text=${whatsappMessage}">واتساب</a>
        <button class="btn btn-primary" data-price="${product.price}">أضف للسلة</button>
      </div>
    `;

  card.querySelector("button").addEventListener("click", (event) => {
    cartItems += 1;
    total += Number(event.target.dataset.price);
    cartCount.textContent = cartItems;
    cartTotal.textContent = total.toLocaleString("ar-EG");
  });

  productGrid.appendChild(card);
});

const signupForm = document.getElementById("vendorSignupForm");
const signupStatus = document.getElementById("signupStatus");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(signupForm);
  signupStatus.textContent = `تم تسجيل ${data.get(
    "store"
  )} بنجاح على خطة ${data.get("plan")}.`; 
  signupForm.reset();
});
