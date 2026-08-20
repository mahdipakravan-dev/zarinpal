"use client";
import { useState } from "react";

type Page = "transactions" | "discounts" | "links";
const nav = [
  ["dashboard","پیشخوان","▦"],["transactions","تراکنش‌ها","⇅"],["settlements","تسویه‌حساب","▤"],
  ["discounts","کدهای تخفیف","◇"],["links","لینک‌های پرداخت","↗"],
];
const linkRows = [
  ["منتورشیپ کدریویو","۶۷۳۹۹","۲,۰۰۰,۰۰۰","۰۹ بهمن ۱۴۰۳، ۱۴:۵۰"],
  ["منتورشیپ فوری","۶۷۳۹۹","۵,۰۰۰,۰۰۰","۰۷ بهمن ۱۴۰۳، ۱۹:۱۷"],
  ["منتورشیپ آموزشی","۶۷۳۹۲","۱۰,۰۰۰,۰۰۰","۰۷ بهمن ۱۴۰۳، ۱۹:۱۳"],
];

function Filter({children,active=false}:{children:React.ReactNode;active?:boolean}) { return <button className={`filter ${active?"active":""}`}>{children}<span>{active?"×":"⌄"}</span></button> }
function Search(){return <label className="search"><span>⌕</span><input aria-label="جستجو" placeholder="جستجو"/><kbd>/</kbd></label>}
function Heading({title,subtitle,action}:{title:string;subtitle?:string;action?:React.ReactNode}){return <div className="heading"><div><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div>{action}</div>}

function Transactions(){return <><Heading title="تراکنش‌ها" action={<button className="btn secondary">↗ <span>ایجاد خروجی</span></button>}/><section className="card transaction-card"><div className="toolbar"><div className="filters"><Filter active>وضعیت: موفق</Filter><Filter>روش پرداخت</Filter><Filter>تاریخ</Filter><Filter>مبلغ</Filter></div><Search/></div><div className="empty"><div className="art"><b>✓</b><i/><i/><em/></div><h2>آخرین تراکنش‌های درگاه</h2><p>تاکنون تراکنشی در این درگاه انجام نشده است</p></div></section></>}

function Discounts(){return <><Heading title="کدهای تخفیف" subtitle="ایجاد و مدیریت کدهای تخفیف برای لینک‌های پرداخت" action={<button className="btn primary">＋ <span>ایجاد کد تخفیف</span></button>}/><section className="card"><div className="toolbar single"><Filter>وضعیت</Filter></div><div className="table-wrap"><table><thead><tr><th>کد تخفیف</th><th>دفعات استفاده شده</th><th>حداکثر قابل استفاده</th><th>تاریخ و ساعت انقضا</th><th>وضعیت</th><th/></tr></thead><tbody><tr><td><code>webinar30</code><small>۳۰ درصد · تمام لینک‌های پرداخت</small></td><td>۰</td><td>نامحدود</td><td>–</td><td><span className="status on">فعال</span></td><td>•••</td></tr><tr><td><code>webinar_30</code><small>۳۰ درصد · تمام لینک‌های پرداخت</small></td><td>۰</td><td>نامحدود</td><td>۱۲ بهمن ۱۴۰۳، ۱۸:۲۰</td><td><span className="status">غیرفعال</span></td><td>•••</td></tr></tbody></table></div><Footer count="۲ نتیجه"/></section></>}

function Links(){const [copied,setCopied]=useState(false);return <><Heading title="لینک‌های پرداخت" subtitle="ایجاد و مدیریت لینک‌های پرداخت"/><section className="card"><div className="quick"><div className="quick-url"><span className="product-icon">▱</span><b>لینک پرداخت سریع:</b><span dir="ltr">https://zarinp.al/mahdipakravan</span></div><div><button aria-label="کپی" onClick={()=>{navigator.clipboard?.writeText("https://zarinp.al/mahdipakravan");setCopied(true);setTimeout(()=>setCopied(false),1500)}}>{copied?"✓":"▣"}</button><button aria-label="اشتراک‌گذاری">⌯</button></div></div><div className="toolbar links-toolbar"><div className="filters"><Filter>نوع</Filter><Filter>وضعیت</Filter><Filter>مبلغ</Filter></div><Search/></div><div className="table-wrap"><table><thead><tr><th>عنوان</th><th>مبلغ <small>ریال</small></th><th>موجودی/ظرفیت</th><th>تاریخ ایجاد</th><th>وضعیت</th><th/></tr></thead><tbody>{linkRows.map(r=><tr key={r[0]}><td><div className="title-cell"><span className="product-icon">▱</span><div><b>{r[0]}</b><small>{r[1]} · لینک فروش محصول</small></div></div></td><td>{r[2]}</td><td className="muted">تعیین نشده</td><td>{r[3]}</td><td><span className="status">غیرفعال</span></td><td>•••</td></tr>)}</tbody></table></div><Footer count="۳ نتیجه"/></section></>}
function Footer({count}:{count:string}){return <div className="table-footer"><div>تعداد سطر در صفحه: <button>۱۵⌄</button></div><span>{count}</span></div>}

export default function Home(){const [page,setPage]=useState<Page>("transactions");const[open,setOpen]=useState(false);return <div dir="rtl"><header><button className="menu" onClick={()=>setOpen(true)} aria-label="باز کردن منو">☰</button><div className="logo">زرین‌پال<i/></div><div className="header-actions" dir="ltr"><button className="avatar">م</button><button className="bell">♧<span>۱۳</span></button><button>▤ <b>تیکت‌ها</b></button></div></header>{open&&<button className="backdrop" onClick={()=>setOpen(false)} aria-label="بستن منو"/>}<aside className={open?"open":""}><div className="account"><span>▱</span><div><b>مهدی پاکروان نوعیابی</b><small dir="ltr">zarinp.al/mahdipakravan</small></div><em>‹</em></div><nav>{nav.map(([id,label,icon])=><button key={id} onClick={()=>{if(["transactions","discounts","links"].includes(id))setPage(id as Page);setOpen(false)}} className={page===id?"selected":""}><span>{icon}</span>{label}</button>)}<hr/><button><span>⚙</span>تنظیمات زرین‌لینک</button></nav></aside><main><div className="container">{page==="transactions"?<Transactions/>:page==="discounts"?<Discounts/>:<Links/>}</div></main></div>}
