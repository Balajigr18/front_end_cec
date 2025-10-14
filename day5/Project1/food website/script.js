// script.js - basic interactions for Savoryly site

// set current year
document.addEventListener("DOMContentLoaded", function () {
  const y = new Date().getFullYear();
  const el = document.getElementById("year");
  const el3 = document.getElementById("year3");
  if (el) el.textContent = y;
  if (el3) el3.textContent = y;

  // initialize modal totals if present
  modalCalc();
  calculateTotal();
});

// --- Modal order helpers (index.html) ---
function setDish(name, price) {
  const dishEl = document.getElementById("modalDish");
  const hidden = document.getElementById("modalDishName");
  const priceEl = document.getElementById("modalPrice");
  const qty = document.getElementById("modalQty");
  const total = document.getElementById("modalTotal");

  if (dishEl) dishEl.value = name;
  if (hidden) hidden.value = name;
  if (priceEl) priceEl.value = price;
  if (qty) qty.value = 1;
  if (total) total.value = (price * 1).toFixed(2);
}

function modalCalc() {
  const priceEl = document.getElementById("modalPrice");
  const qty = document.getElementById("modalQty");
  const total = document.getElementById("modalTotal");
  const p = parseFloat(priceEl?.value || 0);
  const q = parseInt(qty?.value || 1, 10);
  if (total) total.value = (p * q).toFixed(2);
}

function handleModalOrder(e) {
  e.preventDefault();
  const name = document.getElementById("modalDish")?.value || "";
  const qty = document.getElementById("modalQty")?.value || 1;
  const total = document.getElementById("modalTotal")?.value || "0.00";
  const email = document.getElementById("modalEmail")?.value || "";

  const summary = `Item: ${name}\nQty: ${qty}\nTotal: $${total}\nWe will contact: ${email}`;
  // show in the confirm modal (use Bootstrap modal)
  const confirmSummary = document.getElementById("confirmSummary");
  if (confirmSummary) confirmSummary.textContent = summary;

  const confirmModal = new bootstrap.Modal(document.getElementById("confirmModal"));
  confirmModal.show();

  // close order modal
  const orderModalEl = document.getElementById("orderModal");
  if (orderModalEl) {
    const bs = bootstrap.Modal.getInstance(orderModalEl);
    if (bs) bs.hide();
  }

  // reset form
  e.target.reset?.();
}

// --- Contact / booking page helpers (contact.html) ---
function updatePrice() {
  // In this simplified site, services are free to request,
  // but you can hook prices here if you want per-guest pricing.
  const select = document.getElementById("serviceSelect");
  const priceEl = document.getElementById("pricePerDay");

  if (!select || !priceEl) return;
  // Default 0
  const value = select.value || "";
  const parts = value.split("|");
  const price = parseFloat(parts[1] || 0);
  priceEl.value = price.toFixed(2);
  calculateTotal();
}

function calculateTotal() {
  const qtyEl = document.getElementById("days"); // repurposed as guests/qty
  const priceEl = document.getElementById("pricePerDay");
  const totalEl = document.getElementById("totalPrice");

  const qty = parseInt(qtyEl?.value || 1, 10);
  const price = parseFloat(priceEl?.value || 0);
  if (totalEl) totalEl.value = (qty * price).toFixed(2);
}

function submitBooking(e) {
  e.preventDefault();
  const name = document.getElementById("name")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const service = document.getElementById("serviceSelect")?.value || "";
  const parts = service.split("|");
  const serviceName = parts[0] || service;
  const qty = document.getElementById("days")?.value || "1";
  const datetime = document.getElementById("datetime")?.value || "";
  const message = document.getElementById("message")?.value || "";

  const summary = `Name: ${name}\nEmail: ${email}\nService: ${serviceName}\nGuests/Qty: ${qty}\nWhen: ${datetime}\nNotes: ${message}`;

  const confirmSummary = document.getElementById("confirmSummary");
  if (confirmSummary) confirmSummary.textContent = summary;

  const confirmModal = new bootstrap.Modal(document.getElementById("confirmModal"));
  confirmModal.show();

  // reset form
  e.target.reset?.();
}