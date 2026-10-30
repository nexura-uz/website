# Ustaxona — Nexura portfolio entry

Copy for the project page on nexura.uz. Three languages (EN / UZ / RU), same structure in each.
Screenshots: `website/public/screens/<uz|ru>/` (real app, sample data).

---

## Card (projects list)

| Field | Value |
|---|---|
| Name | Ustaxona |
| Type | SaaS for repair shops · Web app + Telegram Mini App + Telegram bot |
| Year | 2026 |
| Status | Own product of Nexura |
| Links | https://ustaxona.uz · https://app.ustaxona.uz · https://t.me/ustaxonauz_bot |
| Cover image | `desk-orders.jpg` (desktop) + `phone-orders.jpg` (phone) |
| Tags | SaaS, Telegram Mini App, Telegram bot, FastAPI, React, PostgreSQL |

**EN:** One app for repair shops: orders, customers and debts in one place, and the customer follows the repair in Telegram.
**UZ:** Taʼmirxonalar uchun bitta ilova: buyurtmalar, mijozlar va qarzlar bir joyda, mijoz esa taʼmir holatini Telegramda kuzatadi.
**RU:** Одно приложение для мастерских: заказы, клиенты и долги в одном месте, а клиент следит за ремонтом в Telegram.

---

## English

### About
Ustaxona is a platform for service centers and repair shops of any kind: phones, laptops, cars, washing machines, air conditioners and more. A shop takes in an item, records the work and parts, tracks who owes what, and the customer gets every status change in Telegram, without calling to ask.

### The problem
Most repair shops in Uzbekistan still run on a notebook and a phone. Orders get lost, nobody remembers who still owes money, and customers call again and again: "Is it ready yet?"

### The solution
- **Orders with clear steps:** accepted → in progress → ready → handed over (or cancelled with a reason). Every change is stored in the order's history.
- **Telegram notifications:** the customer shares their phone number with the bot once and then gets a message on every status change, from every shop that uses Ustaxona.
- **Customers and balance:** each customer's orders, payments and debt on one page; a separate list of debtors.
- **Work and parts lines:** the order total comes from the work done and the parts used, picked from a catalog of 14 categories, ~200 brands, ~600 models and 1000+ part types.
- **Reports:** orders, money, top parts and works per day, week or month; overdue orders and debts at a glance.
- **Teams:** the owner invites masters with a link; the app records who took and who handed over each order.
- **Reviews:** after handover the customer rates the service 1–5 right in Telegram.
- **Works anywhere:** on a computer, on a phone, and inside Telegram as a Mini App. Uzbek and Russian.

### What we built
- Backend API: Python, FastAPI, SQLAlchemy (async), PostgreSQL, Alembic
- Telegram bot (aiogram 3) and Telegram Mini App with secure `initData` login
- Web app for masters, owners and admins: React, TypeScript, TanStack Router & Query, Tailwind, shadcn/ui
- Public website: Next.js
- Admin panel for the catalog: verify and merge entries typed by masters
- Brand identity: logo "Qadam" and palette "Feruza"
- Strict data isolation: one shop can never see another shop's data

### Results
- From sign-up to the first order in a minute: registration is just sharing a phone number in the bot.
- Customers stop calling to ask about status.
- Debts and payments are always accurate: the balance is computed from records, never typed by hand.

---

## Oʻzbekcha

### Loyiha haqida
Ustaxona — har qanday taʼmirxona va servis markazlari uchun platforma: telefon, noutbuk, avtomobil, kir yuvish mashinasi, konditsioner va boshqalar. Ustaxona buyumni qabul qiladi, bajarilgan ish va qismlarni yozadi, kim qancha qarz ekanini kuzatadi, mijoz esa har bir holat oʻzgarishini Telegramda oladi — qoʻngʻiroq qilib soʻrash shart emas.

### Muammo
Oʻzbekistondagi koʻp ustaxonalar hali ham daftar va telefon bilan ishlaydi. Buyurtmalar yoʻqoladi, kim qarz ekani esdan chiqadi, mijozlar esa qayta-qayta qoʻngʻiroq qiladi: "Tayyor boʻldimi?"

### Yechim
- **Aniq qadamli buyurtmalar:** qabul qilindi → taʼmirlanmoqda → tayyor → topshirildi (yoki sababi bilan bekor qilindi). Har bir oʻzgarish buyurtma tarixida saqlanadi.
- **Telegram xabarlari:** mijoz botga telefon raqamini bir marta yuboradi va Ustaxonadan foydalanadigan barcha ustaxonalardan har bir holat oʻzgarishida xabar oladi.
- **Mijozlar va balans:** har bir mijozning buyurtmalari, toʻlovlari va qarzi bitta sahifada; qarzdorlar alohida roʻyxatda.
- **Ishlar va qismlar:** buyurtma summasi bajarilgan ishlar va ishlatilgan qismlardan hisoblanadi. Katalogda 14 ta toifa, ~200 brend, ~600 model va 1000+ qism turi.
- **Hisobotlar:** kun, hafta yoki oy boʻyicha buyurtmalar, pul, eng koʻp ketgan qismlar va ishlar; muddati oʻtgan buyurtmalar va qarzlar bir qarashda.
- **Jamoa:** egasi ustalarni havola orqali taklif qiladi; kim qabul qilgani va kim topshirgani yozib boriladi.
- **Baholar:** topshirilgandan keyin mijoz xizmatni Telegramning oʻzida 1–5 yulduz bilan baholaydi.
- **Hamma joyda ishlaydi:** kompyuterda, telefonda va Telegram ichida Mini App sifatida. Oʻzbek va rus tillarida.

### Nima qildik
- Backend API: Python, FastAPI, SQLAlchemy (async), PostgreSQL, Alembic
- Telegram bot (aiogram 3) va xavfsiz `initData` orqali kiriladigan Telegram Mini App
- Ustalar, egalar va adminlar uchun veb-ilova: React, TypeScript, TanStack Router & Query, Tailwind, shadcn/ui
- Ommaviy sayt: Next.js
- Katalog uchun admin panel: ustalar yozgan yozuvlarni tasdiqlash va birlashtirish
- Brend: "Qadam" logotipi va "Feruza" ranglar palitrasi
- Qatʼiy maʼlumot ajratilishi: bir ustaxona boshqasining maʼlumotini hech qachon koʻrmaydi

### Natijalar
- Roʻyxatdan oʻtishdan birinchi buyurtmagacha bir daqiqa: roʻyxatdan oʻtish — botga raqam yuborish, xolos.
- Mijozlar holatni soʻrab qoʻngʻiroq qilmaydi.
- Qarz va toʻlovlar doim aniq: balans yozuvlardan hisoblanadi, qoʻlda kiritilmaydi.

---

## Русский

### О проекте
Ustaxona — платформа для сервисных центров и мастерских любого профиля: телефоны, ноутбуки, автомобили, стиральные машины, кондиционеры и другое. Мастерская принимает вещь, записывает работы и запчасти, следит за долгами, а клиент получает каждое изменение статуса в Telegram — звонить и спрашивать не нужно.

### Проблема
Большинство мастерских в Узбекистане до сих пор работают с тетрадью и телефоном. Заказы теряются, никто не помнит, кто сколько должен, а клиенты звонят снова и снова: «Уже готово?»

### Решение
- **Заказы с понятными шагами:** принят → в работе → готов → выдан (или отменён с причиной). Каждое изменение сохраняется в истории заказа.
- **Уведомления в Telegram:** клиент один раз отправляет боту номер телефона и получает сообщения о каждом изменении статуса от всех мастерских, работающих в Ustaxona.
- **Клиенты и баланс:** заказы, платежи и долг каждого клиента на одной странице; должники в отдельном списке.
- **Работы и запчасти:** сумма заказа складывается из выполненных работ и запчастей. В каталоге 14 категорий, ~200 брендов, ~600 моделей и 1000+ видов запчастей.
- **Отчёты:** заказы, деньги, популярные запчасти и работы за день, неделю или месяц; просроченные заказы и долги с первого взгляда.
- **Команда:** владелец приглашает мастеров по ссылке; видно, кто принял и кто выдал каждый заказ.
- **Отзывы:** после выдачи клиент оценивает обслуживание от 1 до 5 прямо в Telegram.
- **Работает везде:** на компьютере, на телефоне и внутри Telegram как Mini App. Узбекский и русский языки.

### Что мы сделали
- Backend API: Python, FastAPI, SQLAlchemy (async), PostgreSQL, Alembic
- Telegram-бот (aiogram 3) и Telegram Mini App с безопасным входом через `initData`
- Веб-приложение для мастеров, владельцев и администраторов: React, TypeScript, TanStack Router & Query, Tailwind, shadcn/ui
- Публичный сайт: Next.js
- Админ-панель каталога: проверка и объединение записей, введённых мастерами
- Фирменный стиль: логотип «Qadam» и палитра «Feruza»
- Строгая изоляция данных: одна мастерская никогда не видит данные другой

### Результаты
- От регистрации до первого заказа — минута: регистрация — это просто отправить номер боту.
- Клиенты больше не звонят узнать статус.
- Долги и платежи всегда точны: баланс считается из записей, а не вводится вручную.

---

## Gallery (suggested order)

| # | File (`uz` / `ru`) | Caption EN |
|---|---|---|
| 1 | `desk-orders.jpg` | Orders list: status, customer, total, deadline |
| 2 | `desk-order.jpg` | Order page: work, parts, deadline, who took it |
| 3 | `desk-customer.jpg` | Customer page: orders, balance, payments |
| 4 | `desk-reports.jpg` | Reports: orders, money, top parts |
| 5 | `phone-orders.jpg` | Orders on the phone / in Telegram |
| 6 | `phone-order.jpg` | Order on the phone |
| 7 | `phone-team.jpg` | Team: invite masters by link |
