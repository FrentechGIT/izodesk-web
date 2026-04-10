// app/page.tsx — IZODesk marketingový web

import Link from "next/link";

const APP_URL = "https://app.izodesk.cz";

// ─── Ikony ─────────────────────────────────────────────────────────────────

const Icons = {
  Clipboard: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 12h6" /><path d="M9 16h6" /><path d="M9 8h.01" /></svg>
  ),
  Dollar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
  ),
  Receipt: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 17.5V17" /><path d="M12 7V6.5" /></svg>
  ),
  File: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M9 15h6" /><path d="M9 11h6" /></svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  Smartphone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
  ),
  Palette: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.71-.74 1.71-1.67 0-.43-.16-.83-.41-1.17-.25-.33-.41-.75-.41-1.17 0-.93.78-1.7 1.71-1.7h2.6c2.94 0 5.4-2.46 5.4-5.4 0-5.02-4.75-9-10.6-9Z" /></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
  )
};

// ─── Navigace ──────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#funkce" className="hover:text-brand transition-colors">Funkce</a>
          <a href="#cenik" className="hover:text-brand transition-colors">Ceník</a>
          <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-bold text-slate-600 hover:text-brand transition-colors hidden sm:block"
          >
            Přihlásit se
          </a>
          <a
            href={`${APP_URL}/register`}
            className="bg-brand text-white text-sm font-black px-5 py-2.5 rounded-xl hover:bg-brand-dark transition-colors shadow-sm"
          >
            Vyzkoušet
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="font-black italic text-2xl tracking-tighter uppercase select-none">
      <span className="text-slate-800">IZO</span>
      <span className="font-light text-slate-400 not-italic">Desk</span>
    </div>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-red-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-brand text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
          Navrženo pro řemeslníky a stavební firmy
        </div>

        <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-slate-900 leading-none mb-6">
          Konec s tabulkami
          <br />
          <span className="text-brand">v Excelu.</span>
        </h1>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          IZODesk je profesionální aplikace pro správu zakázek, ceníků, soupisů prací
          a fakturace. Vše na jednom místě, funguje na mobilu i počítači.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${APP_URL}/register`}
            className="bg-brand text-white font-black text-base px-8 py-4 rounded-2xl hover:bg-brand-dark transition-all shadow-lg shadow-red-200 hover:shadow-red-300 hover:-translate-y-0.5 flex items-center justify-center"
          >
            Začít <Icons.ArrowRight />
          </a>
          <a
            href="#funkce"
            className="bg-white text-slate-700 font-bold text-base px-8 py-4 rounded-2xl border border-slate-200 hover:border-brand hover:text-brand transition-all"
          >
            Zobrazit funkce
          </a>
        </div>

        <p className="text-xs text-slate-400 mt-4">
          Bez kreditní karty · Zrušení kdykoliv
        </p>
      </div>

      {/* Mockup karty */}
      <div className="max-w-3xl mx-auto mt-16 bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
        <div className="bg-brand px-6 py-4 flex items-center justify-between">
          <span className="text-white font-black italic text-lg tracking-tighter uppercase">IZODesk</span>
          <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Elektroinstalace PRO</span>
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Aktivních zakázek", value: "15", sub: "(3 probíhají)", color: "text-slate-900", subColor: "text-green-600" },
            { label: "Naceněno", value: "4", color: "text-amber-600" },
            { label: "Dokončených", value: "8", color: "text-blue-600" },
          ].map((s) => (
            <div key={s.label} className="bg-slate-50 rounded-2xl p-4 text-center">
              <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
              {s.sub && <p className={`text-xs font-bold ${s.subColor} uppercase tracking-widest mt-1`}>{s.sub}</p>}
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="px-6 pb-6 flex flex-col gap-2">
          {[
            { name: "Rekonstrukce RD Novák", customer: "Jan Novák", status: "Probíhá", color: "bg-green-100 text-green-700" },
            { name: "Přípojka NN chata", customer: "Dvořák s.r.o.", status: "Naceněno", color: "bg-amber-100 text-amber-700" },
            { name: "Revize a opravy Brno", customer: "Malý Pavel", status: "Nová", color: "bg-slate-100 text-slate-500" },
          ].map((p) => (
            <div key={p.name} className="flex items-center justify-between bg-white border border-slate-100 rounded-xl px-4 py-3">
              <div>
                <p className="text-sm font-bold text-slate-800">{p.name}</p>
                <p className="text-xs text-slate-400">{p.customer}</p>
              </div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase ${p.color}`}>{p.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Logická sekce ─────────────────────────────────────────────────────────

function SocialProof() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
          Používají elektrikáři, instalatéři a stavební firmy
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-slate-300 font-black italic text-xl uppercase tracking-tighter">
          {["Elektro Novák", "Instalace CZ", "Stavby Brno", "ElektroPlus", "MontáGenius"].map((n) => (
            <span key={n} className="hover:text-brand transition-colors cursor-default">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Funkce ────────────────────────────────────────────────────────────────

const features = [
  {
    icon: <Icons.Clipboard />,
    title: "Zakázky přehledně",
    desc: "Všechny zakázky na jednom místě. Stav, zákazník, adresa stavby, poznámky — vše okamžitě po ruce. Hledání a filtry podle stavu.",
  },
  {
    icon: <Icons.Dollar />,
    title: "Ceník a nabídky",
    desc: "Importujte svůj ceník materiálů a prací. Sestavujte nabídky kliknutím — přidávejte položky, upravujte množství, kopírujte varianty.",
  },
  {
    icon: <Icons.Check />,
    title: "Soupisy provedených prací",
    desc: "Zadávejte co bylo skutečně odvedeno. Aplikace automaticky počítá Plán / Nyní / Zbývá oproti původnímu rozpočtu.",
  },
  {
    icon: <Icons.Receipt />,
    title: "Fakturace s QR kódem",
    desc: "Vystavte fakturu na pár kliknutí. PDF se QR kódem pro okamžitou platbu. Automatické číslování, sledování uhrazení.",
  },
  {
    icon: <Icons.File />,
    title: "PDF dokumenty",
    desc: "Nabídky, faktury a soupisy prací jako profesionální PDF. Odešlete zákazníkovi přímo z aplikace e-mailem.",
  },
  {
    icon: <Icons.Users />,
    title: "Více uživatelů",
    desc: "Přidejte celý tým — každý zaměstnanec se přihlásí vlastním účtem. Správce firmy spravuje přístupy.",
  },
  {
    icon: <Icons.Smartphone />,
    title: "Funguje na mobilu",
    desc: "Optimalizováno pro práci v terénu. Na stavbě zadáte soupis z telefonu za minutu.",
  },
  {
    icon: <Icons.Palette />,
    title: "Firemní identita",
    desc: "Nastavte svoji firemní barvu a logo. PDF dokumenty vypadají jako z profesionálního studia.",
  },
];

function Features() {
  return (
    <section id="funkce" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-black text-brand uppercase tracking-widest mb-3">Funkce</p>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">
            Vše co potřebujete
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Žádné zbytečné složitosti. Jen to co elektrikáři a řemeslníci opravdu používají každý den.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-red-50 text-brand rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="font-black text-slate-800 mb-2 group-hover:text-brand transition-colors">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Ceník ─────────────────────────────────────────────────────────────────

function Pricing() {
  return (
    <section id="cenik" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-black text-brand uppercase tracking-widest mb-3">Ceník</p>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">
            Jednoduché ceny
          </h2>
          <p className="text-slate-500 mt-4">Žádné skryté poplatky. Platíte měsíčně, zrušíte kdykoliv.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Basic */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Basic</p>
            <p className="text-4xl font-black text-slate-800 mb-1">
              990 Kč<span className="text-lg font-bold text-slate-400">/měs</span>
            </p>
            <p className="text-sm text-slate-500 mb-6">Vše pro menší firmy a živnostníky</p>
            <ul className="flex flex-col gap-2.5 mb-8 text-sm text-slate-600">
              {["Zakázky a zákazníci", "Ceník a nabídky", "Soupisy prací", "Fakturace", "PDF dokumenty", "Až 5 uživatelů"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-500 font-black text-base">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href={`${APP_URL}/register`}
              className="block w-full text-center bg-white border border-slate-300 text-slate-700 font-black text-sm py-3 rounded-xl hover:border-brand hover:text-brand transition-all"
            >
              Začít
            </a>
          </div>

          {/* Pro */}
          <div className="bg-slate-900 border-2 border-brand rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-brand text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
              Populární
            </div>
            <p className="text-xs font-black text-brand uppercase tracking-widest mb-2">Pro</p>
            <p className="text-4xl font-black text-white mb-1">
              1 990 Kč<span className="text-lg font-bold text-slate-400">/měs</span>
            </p>
            <p className="text-sm text-slate-400 mb-6">Pro větší firmy s více zakázkami</p>
            <ul className="flex flex-col gap-2.5 mb-8 text-sm text-slate-300">
              {[
                "Vše z Basic",
                "Fotky a dokumentace",
                "Smlouvy a protokoly",
                "Neomezení uživatelé",
                "Prioritní podpora",
                "Firemní branding PDF",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-brand font-black text-base">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href={`${APP_URL}/register`}
              className="block w-full text-center bg-brand text-white font-black text-sm py-3 rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2"
            >
              Vyzkoušet Pro <Icons.ArrowRight />
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Nejste si jistí? Napište nám na{" "}
          <a href="mailto:info@izodesk.cz" className="text-brand font-bold hover:underline">
            info@izodesk.cz
          </a>
        </p>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Musím instalovat nějaký program?",
    a: "Ne, IZODesk je webová aplikace. Funguje v prohlížeči na počítači, tabletu i mobilu. Nic neinstalujete.",
  },
  {
    q: "Jak přidám další uživatele z mé firmy?",
    a: "V admin nastavení najdete firemní kód. Ten sdílíte zaměstnancům — každý si sám vytvoří účet a je automaticky napojen na vaši firmu.",
  },
  {
    q: "Mohu importovat stávající ceník z Excelu?",
    a: "Ano. V sekci Ceník je funkce Import CSV. Stáhněte si šablonu, vyplňte podle svého ceníku a nahrajte. Položky se přidají hromadně.",
  },
  {
    q: "Jsou moje data v bezpečí?",
    a: "Data jsou uložena v zabezpečené PostgreSQL databázi na serverech v EU. Přenos je šifrován SSL/TLS. Pravidelné zálohy.",
  },
  {
    q: "Co když chci zrušit předplatné?",
    a: "Předplatné zrušíte kdykoliv v nastavení. Přístup máte do konce zaplaceného období. Data si exportujete před zrušením.",
  },
  {
    q: "Funguje aplikace bez internetu?",
    a: "IZODesk vyžaduje připojení k internetu pro práci s daty. Plánujeme offline mode pro soupisy v terénu.",
  },
];

function Faq() {
  return (
    <section id="faq" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-black text-brand uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">
            Časté dotazy
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white border border-slate-200 rounded-2xl p-6">
              <p className="font-black text-slate-800 mb-2">{faq.q}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────

function Cta() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-4">
          Přestaňte řešit papírování.
          <br />
          <span className="text-brand">Začněte vydělávat.</span>
        </h2>
        <p className="text-slate-400 mb-10 text-lg">
          Vyzkoušejte IZODesk. Bez kreditní karty.
        </p>
        <a
          href={`${APP_URL}/register`}
          className="inline-flex items-center gap-2 bg-brand text-white font-black text-lg px-10 py-5 rounded-2xl hover:bg-brand-dark transition-all shadow-xl shadow-red-500/20 hover:-translate-y-0.5"
        >
          Začít <Icons.ArrowRight />
        </a>
        <p className="text-slate-600 text-sm mt-4">
          Otázky? <a href="mailto:info@izodesk.cz" className="text-brand hover:underline">info@izodesk.cz</a>
        </p>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="font-black italic text-xl tracking-tighter uppercase text-white mb-2">
            IZO<span className="font-light text-slate-500 not-italic">Desk</span>
          </div>
          <p className="text-sm">Správa zakázek pro řemeslníky.</p>
          <p className="text-xs mt-2">© {new Date().getFullYear()} IZODesk. Všechna práva vyhrazena.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-sm">
          <a href="#funkce" className="hover:text-white transition-colors">Funkce</a>
          <a href={`${APP_URL}/login`} className="hover:text-white transition-colors">Přihlásit se</a>
          <a href="#cenik" className="hover:text-white transition-colors">Ceník</a>
          <a href={`${APP_URL}/register`} className="hover:text-white transition-colors">Registrace</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="mailto:info@izodesk.cz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}

// ─── Stránka ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <SocialProof />
      <Features />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
