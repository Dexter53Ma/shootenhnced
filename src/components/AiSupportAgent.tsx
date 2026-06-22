"use client";

import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are ShootYourListing's AI assistant for a real estate photography agency in Morocco. Help with ANY question about services, pricing, booking, photography tips, property marketing. Always respond in the user's language. Be concise (2-4 sentences), friendly, professional.

PHOTOGRAPHY PACKAGES:
- Appartement: 1,000 MAD (20 photos, 24h delivery, apartments/studios)
- Riads: 1,500 MAD (30 photos, 12h express, traditional riads, most popular)
- Villa: 2,000 MAD (40 photos + video tour + drone, luxury villas)
- Events: 3,000-5,000 MAD (full coverage, multi-photographer)

ADD-ONS: Extra photos 300/10, Video 400/min, Rush 500, Virtual staging 200/room, 360° tour 1,200, Social media 600
DRONE: from 1,200 MAD | VIDEOGRAPHY: from 2,500 MAD
CONTACT: hello@shootyourlisting.com | WhatsApp: +212 6 21 18 94 96 | Mon-Sat 8AM-8PM Morocco Time
AREAS: Casablanca, Marrakech, Tangier, Rabat, Agadir, Fez, and all Morocco`;

const LANGUAGES: Record<string, string> = {
  en: "English", ar: "العربية", fr: "Français", es: "Español",
  de: "Deutsch", zh: "中文", ja: "日本語", ko: "한국어",
  hi: "हिन्दी", ru: "Русский", pt: "Português", tr: "Türkçe",
};

const GREETINGS: Record<string, string> = {
  en: "Hi! I'm ShootYourListing's AI assistant. I can help with our services, pricing, booking, photography tips, and more. How can I help?",
  ar: "!مرحبًا، أنا مساعد ShootYourListing الذكي. يمكنني مساعدتك في خدماتنا وتسعير والحجز ونصائح التصوير. كيف يمكنني المساعدة؟",
  fr: "Bonjour! Je suis l'assistant IA de ShootYourListing. Je peux vous aider avec nos services, tarifs, réservations, conseils photo. Comment puis-je vous aider?",
  es: "¡Hola! Soy el asistente de IA de ShootYourListing. Puedo ayudarte con servicios, precios, reservas, consejos de fotografía. ¿Cómo puedo ayudarte?",
  de: "Hallo! Ich bin der KI-Assistent von ShootYourListing. Ich kann Ihnen bei Services, Preisen, Buchungen, Fototipps helfen. Wie kann ich helfen?",
  zh: "你好！我是ShootYourListing的AI助手。我可以帮你了解服务、价格、预约、摄影技巧等。我能帮你什么？",
  ja: "こんにちは！ShootYourListingのAIアシスタントです。サービス、料金、予約、撮影のヒントなどをお手伝いします。どのようにお手伝いしましょうか？",
  ko: "안녕하세요! ShootYourListing의 AI 어시스턴트입니다. 서비스, 가격, 예약, 촬영 팁 등을 도와드릴 수 있습니다. 무엇을 도와드릴까요?",
  hi: "नमस्ते! मैं ShootYourListing का AI सहायक हूँ। सेवाओं, कीमतों, बुकिंग, फोटोग्राफी टिप्स में मदद कर सकता हूँ। आज कैसे मदद करूँ?",
  ru: "Привет! Я AI-ассистент ShootYourListing. Помогу с услугами, ценами, бронированием, советами по фотографии. Чем могу помочь?",
  pt: "Olá! Sou o assistente de IA do ShootYourListing. Posso ajudar com serviços, preços, reservas, dicas de fotografia. Como posso ajudá-lo?",
  tr: "Merhaba! ShootYourListing AI asistanıyım. Hizmetler, fiyatlar, rezervasyon, fotoğrafçılık ipuçları hakkında yardımcı olabilirim. Nasıl yardımcı olabilirim?",
};

const QUICK_REPLIES: Record<string, string[]> = {
  en: ["Photography pricing", "Drone services", "Book a shoot", "Areas you cover"],
  ar: ["أسعار التصوير", "خدمات الطائرات", "حجز جلسة", "المناطق"],
  fr: ["Tarifs photo", "Services drone", "Réserver", "Zones couvertes"],
  es: ["Precios", "Drones", "Reservar", "Áreas"],
  de: ["Preise", "Drohnen", "Buchen", "Gebiete"],
  zh: ["价格", "无人机", "预约", "覆盖地区"],
  ja: ["料金", "ドローン", "予約", "対応エリア"],
  ko: ["가격", "드론", "예약", "서비스 지역"],
  hi: ["कीमतें", "ड्रोन", "बुक करें", "क्षेत्र"],
  ru: ["Цены", "Дрон", "Запись", "Регионы"],
  pt: ["Preços", "Drone", "Agendar", "Áreas"],
  tr: ["Fiyatlar", "Drone", "Randevu", "Bölgeler"],
};

interface Message { role: "user" | "agent"; text: string; }

function playSound(type: "open" | "close" | "msg") {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    if (type === "open") {
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.15);
    } else if (type === "close") {
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.1);
    } else {
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.setValueAtTime(1000, ctx.currentTime + 0.05);
      osc.frequency.setValueAtTime(1200, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.2);
    }
  } catch {}
}

const FALLBACKS: Record<string, Record<string, string>> = {
  en: {
    pricing: "Our packages: Appartement (1,000 MAD), Riads (1,500 MAD), Villa (2,000 MAD), Events (3,000–5,000 MAD). We also have drone (from 1,200 MAD) and videography (from 2,500 MAD). Want details on a specific package?",
    drone: "Drone photography starts at MAD 1,200. Our certified pilots capture stunning aerial views. Drone shots are also included in the Villa package (weather permitting).",
    book: "Book via our contact page or WhatsApp +212 6 21 18 94 96. We schedule within 24-48 hours. Same-day delivery available for select packages!",
    contact: "Reach us at:\n📧 hello@shootyourlisting.com\n📱 WhatsApp: +212 6 21 18 94 96\n⏰ Mon–Sat, 8AM–8PM Morocco Time",
    area: "We cover all Morocco: Casablanca, Marrakech, Tangier, Rabat, Agadir, Fez, Meknes, Chefchaouen, Essaouira, and more. Contact us for other locations.",
    virtual: "360° virtual tours are 1,200 MAD per property. Perfect for remote buyers to experience your property from anywhere!",
    video: "Videography from 2,500 MAD for cinematic walkthroughs. Villa package includes a 3-5 min video tour. Events include same-day preview + full gallery in 48h.",
    staging: "Virtual staging: 200 MAD/room. Villa package includes free consultation. Staging helps properties sell faster at higher prices!",
    social: "Social media package: 600 MAD. All packages include social media ready formats for Instagram, Facebook, and portals.",
    event: "Events (3,000–5,000 MAD): 4-8h coverage, multiple photographers, video highlights, drone for outdoor, same-day preview, full gallery 48h, USB included, 6 months storage.",
    riad: "Riads package (1,500 MAD): 30 photos, architecture focus, courtyard shots, golden hour, advanced editing, 12h express delivery.",
    apartment: "Appartement (1,000 MAD): 20 photos, interior shots, natural light, basic editing, 24h delivery, gallery access, social media formats.",
    villa: "Villa (2,000 MAD): 40 photos + video tour + drone, premium editing, same-day delivery, virtual staging, 3 months free storage.",
    tip: "Tips for better property photos:\n1. Declutter rooms\n2. Open curtains for natural light\n3. Add fresh flowers\n4. Fix minor repairs\n5. Shoot during golden hour",
    thank: "You're welcome! Feel free to ask anything else. We're here to help! ✨",
    hello: "Hello! Welcome to ShootYourListing. I can help with packages, pricing, booking, services, tips, or any questions. What would you like to know?",
    default: "I can help with:\n• Photography & videography packages\n• Pricing & booking\n• Drone & virtual tours\n• Photography tips\n• Areas we cover\nAsk me anything!",
  },
  ar: {
    pricing: "باقاتنا: شقة (1,000 درهم)، رياض (1,500 درهم)، فيلا (2,000 درهم)، فعاليات (3,000–5,000 درهم). أيضاً طائرات (من 1,200) وفيديو (من 2,500).",
    drone: "تصوير الطائرات يبدأ من 1,200 درهم. طيارونا المعتمدون يلتقطون مناظر جوية مذهلة. باقة الفيلا تشمل لقطات بحرية.",
    book: "احجز عبر صفحة الاتصال أو واتساب +212 6 21 18 94 96. نحدد المواعيد خلال 24-48 ساعة. توصيل نفس اليوم متاح!",
    contact: "تواصل معنا:\n📧 hello@shootyourlisting.com\n📱 واتساب: +212 6 21 18 94 96\n⏰ الاثنين-السبت 8 صباحاً-8 مساءً",
    area: "نغطي جميع المغرب: الدار البيضاء، مراكش، طنجة، الرباط، أكادير، فاس، مكناس، شفشاون، الصويرة والمزيد.",
    default: "يمكنني المساعدة في:\n• باقات التصوير والفيديو\n• التسعير والحجز\n• الطائرات والجولات الافتراضية\n• نصائح التصوير\n• المناطق\nاسألني أي شيء!",
  },
  fr: {
    pricing: "Nos forfaits: Appartement (1 000 MAD), Riads (1 500 MAD), Villa (2 000 MAD), Événements (3 000–5 000 MAD). Drone (à partir de 1 200) et vidéo (à partir de 2 500).",
    drone: "La photo par drone commence à 1 200 MAD. Nos pilotes certifiés capturent des vues aériennes époustouflantes.",
    book: "Réservez via notre page contact ou WhatsApp +212 6 21 18 94 96. Planification en 24-48h. Livraison le jour même disponible!",
    contact: "Contactez-nous:\n📧 hello@shootyourlisting.com\n📱 WhatsApp: +212 6 21 18 94 96\n⏰ Lun-Sam 8h-20h, heure du Maroc",
    default: "Je peux aider avec:\n• Forfaits photo et vidéo\n• Tarifs et réservations\n• Drone et visites virtuelles\n• Conseils photo\n• Zones couvertes\nDemandez-moi!",
  },
  es: {
    pricing: "Nuestros paquetes: Apartamento (1.000 MAD), Riads (1.500 MAD), Villa (2.000 MAD), Eventos (3.000–5.000 MAD). Drones (desde 1.200) y video (desde 2.500).",
    book: "Reserve en nuestra página de contacto o WhatsApp +212 6 21 18 94 96. Programación en 24-48h. ¡Entrega el mismo día disponible!",
    default: "Puedo ayudar con:\n• Paquetes de foto y video\n• Precios y reservas\n• Drones y tours virtuales\n• Consejos de fotografía\n• Áreas que cubrimos\n¡Pregúntame!",
  },
  de: {
    pricing: "Unsere Pakete: Wohnung (1.000 MAD), Riads (1.500 MAD), Villa (2.000 MAD), Events (3.000–5.000 MAD). Drohnen (ab 1.200) und Video (ab 2.500).",
    book: "Buchen Sie über unsere Kontaktseite oder WhatsApp +212 6 21 18 94 96. Planung innerhalb von 24-48 Stunden. Express-Lieferung verfügbar!",
    default: "Ich kann helfen mit:\n• Foto- und Videopakete\n• Preise und Buchungen\n• Drohnen und virtuelle Toures\n• Fototipps\n• Abgedeckte Gebiete\nFragen Sie mich!",
  },
  zh: {
    pricing: "我们的套餐：公寓 (1,000 MAD)、Riads (1,500 MAD)、别墅 (2,000 MAD)、活动 (3,000–5,000 MAD)。无人机 (从1,200起) 和视频 (从2,500起)。",
    book: "通过联系页面或WhatsApp +212 6 21 18 94 96预约。24-48小时内安排。当日送达可用！",
    default: "我可以帮助：\n• 摄影和视频套餐\n• 价格和预约\n• 无人机和虚拟导览\n• 摄影技巧\n• 覆盖地区\n随时问我！",
  },
  ja: {
    pricing: "パッケージ：アパート (1,000 MAD)、Riads (1,500 MAD)、ビラ (2,000 MAD)、イベント (3,000–5,000 MAD)。ドローン (1,200から)、ビデオ (2,500から)。",
    book: "お問い合わせページまたはWhatsApp +212 6 21 18 94 96でご予約。24-48時間以内にスケジュール。当日配送可能！",
    default: "お手伝いできること：\n• フォト＆ビデオパッケージ\n• 料金と予約\n• ドローン＆バーチャルツアー\n• 撮影のヒント\n• 対応エリア\n何でもお聞きください！",
  },
  ko: {
    pricing: "패키지: 아파트 (1,000 MAD), Riads (1,500 MAD), 빌라 (2,000 MAD), 이벤트 (3,000–5,000 MAD). 드론 (1,200부터) 및 비디오 (2,500부터).",
    book: "문의 페이지 또는 WhatsApp +212 6 21 18 94 96으로 예약하세요. 24-48시간 내 일정. 당일 배송 가능!",
    default: "도와드릴 수 있는 것:\n• 사진 및 비디오 패키지\n• 가격 및 예약\n• 드론 및 가상 투어\n• 사진 팁\n• 서비스 지역\n무엇이든 물어보세요!",
  },
  hi: {
    pricing: "हमारे पैकेज: अपार्टमेंट (1,000 MAD), Riads (1,500 MAD), विला (2,000 MAD), इवेंट्स (3,000–5,000 MAD)। ड्रोन (1,200 से) और वीडियो (2,500 से)।",
    book: "संपर्क पेज या WhatsApp +212 6 21 18 94 96 से बुक करें। 24-48 घंटे में शेड्यूल। उसी दिन डिलीवरी उपलब्ध!",
    default: "मैं मदद कर सकता हूँ:\n• फोटो और वीडियो पैकेज\n• कीमतें और बुकिंग\n• ड्रोन और वर्चुअल टूर\n• फोटोग्राफी टिप्स\n• सेवा क्षेत्र\nकुछ भी पूछें!",
  },
  ru: {
    pricing: "Наши пакеты: Квартира (1 000 MAD), Riads (1 500 MAD), Вилла (2 000 MAD), Мероприятия (3 000–5 000 MAD). Дроны (от 1 200) и видео (от 2 500).",
    book: "Забронируйте через страницу контактов или WhatsApp +212 6 21 18 94 96. Расписание в течение 24-48 часов. Доставка в тот же день!",
    default: "Я могу помочь с:\n• Пакеты фото и видео\n• Цены и бронирование\n• Дроны и виртуальные туры\n• Советы по фотографии\n• Обслуживаемые районы\nСпрашивайте!",
  },
  pt: {
    pricing: "Nossos pacotes: Apartamento (1.000 MAD), Riads (1.500 MAD), Villa (2.000 MAD), Eventos (3.000–5.000 MAD). Drone (a partir de 1.200) e vídeo (a partir de 2.500).",
    book: "Agende pela página de contato ou WhatsApp +212 6 21 18 94 96. Programação em 24-48h. Entrega no mesmo dia disponível!",
    default: "Posso ajudar com:\n• Pacotes de foto e vídeo\n• Preços e reservas\n• Drone e tours virtuais\n• Dicas de fotografia\n• Áreas atendidas\nPergunte-me!",
  },
  tr: {
    pricing: "Paketlerimiz: Daire (1.000 MAD), Riads (1.500 MAD), Villa (2.000 MAD), Etkinlikler (3.000–5.000 MAD). Drone (1.200'den) ve video (2.500'den).",
    book: "İletişim sayfası veya WhatsApp +212 6 21 18 94 96 ile randevu alın. 24-48 saat içinde planlama. Aynı gün teslimat mevcut!",
    default: "Şunlarda yardımcı olabilirim:\n• Foto ve video paketleri\n• Fiyatlar ve rezervasyonlar\n• Drone ve sanal turler\n• Fotoğrafçılık ipuçları\n• Hizmet bölgeleri\nBana sorun!",
  },
};

function getFallback(lang: string, input: string): string {
  const lower = input.toLowerCase();
  const l = FALLBACKS[lang] || FALLBACKS.en;

  if (/pric|cost|how much|tarif|prix|سعر|कीमत|价格|料金|가격|preço|fiyat/i.test(lower)) return l.pricing || FALLBACKS.en.pricing;
  if (/drone|aerial|طائرات/i.test(lower)) return l.drone || FALLBACKS.en.drone;
  if (/book|schedule|appointment|حجز|موعد|预约|予約|예약|agendar|randevu/i.test(lower)) return l.book || FALLBACKS.en.book;
  if (/contact|phone|email|reach|اتصال|联系|連絡|연락|contato|iletişim/i.test(lower)) return l.contact || FALLBACKS.en.contact;
  if (/area|location|city|where|region|منطقة|地区|エリア|지역|área|bölge/i.test(lower)) return l.area || FALLBACKS.en.area;
  if (/virtual|360|tour/i.test(lower)) return l.virtual || FALLBACKS.en.virtual;
  if (/video|videography|فيديو/i.test(lower)) return l.video || FALLBACKS.en.video;
  if (/staging/i.test(lower)) return l.staging || FALLBACKS.en.staging;
  if (/social|instagram/i.test(lower)) return l.social || FALLBACKS.en.social;
  if (/event|wedding|celebration/i.test(lower)) return l.event || FALLBACKS.en.event;
  if (/riad|traditional/i.test(lower)) return l.riad || FALLBACKS.en.riad;
  if (/apartment|studio|flat/i.test(lower)) return l.apartment || FALLBACKS.en.apartment;
  if (/villa|luxury/i.test(lower)) return l.villa || FALLBACKS.en.villa;
  if (/tip|advice|suggest|improve|نصح/i.test(lower)) return l.tip || FALLBACKS.en.tip;
  if (/thank|merci|shukran|gracias|teşekkür|ありがとう|감사|धन्यवाद|谢谢|спасибо|obrigado/i.test(lower)) return l.thank || FALLBACKS.en.thank;
  if (/hello|hi|hey|مرحب|bonjour|hola|hallo|你好|こんにちは|안녕|नमस्तе|привет|olá|merhaba/i.test(lower)) return l.hello || FALLBACKS.en.hello;

  return l.default || FALLBACKS.en.default;
}

async function fetchAIReply(messages: Message[], lang: string): Promise<string> {
  const last = messages[messages.length - 1];
  if (!last) return getFallback(lang, "");

  try {
    const res = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m) => ({ role: m.role === "user" ? "user" : "assistant", content: m.text })),
        ],
        model: "openai",
        jsonMode: false,
      }),
    });
    if (!res.ok) return getFallback(lang, last.text);
    const text = await res.text();
    return text?.trim() || getFallback(lang, last.text);
  } catch {
    return getFallback(lang, last.text);
  }
}

export default function AiSupportAgent() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const greetingSent = useRef(false);

  useEffect(() => {
    if (open && !greetingSent.current) {
      greetingSent.current = true;
      setMessages([{ role: "agent", text: GREETINGS.en }]);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const switchLang = (code: string) => {
    setLang(code);
    setShowLangMenu(false);
    greetingSent.current = true;
    setMessages([{ role: "agent", text: GREETINGS[code] || GREETINGS.en }]);
  };

  const send = async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput("");
    const userMsg: Message = { role: "user", text: msg };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setTyping(true);
    try {
      const reply = await fetchAIReply(newMessages, lang);
      playSound("msg");
      setMessages((prev) => [...prev, { role: "agent", text: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "agent", text: "Something went wrong. Please try again or contact us at +212 6 21 18 94 96." }]);
    } finally {
      setTyping(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      <button
        onClick={() => { playSound(open ? "close" : "open"); setOpen(!open); }}
        aria-label="AI Support"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--dark-teal)] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[var(--teal)] md:bottom-8 md:right-8"
        style={{ boxShadow: "0 8px 32px rgba(34,42,44,0.3)" }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
        )}
      </button>

      <div
        className="fixed bottom-24 right-6 z-50 flex w-[360px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:bottom-28 md:right-8"
        style={{
          height: open ? 520 : 0, opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[var(--dark-teal)] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" /><path d="M10 21v1a2 2 0 004 0v-1" /></svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-white font-manrope">ShootYourListing</p>
              <p className="text-[11px] text-white/70 font-manrope">AI Support Agent</p>
            </div>
          </div>
          <div className="relative">
            <button onClick={() => setShowLangMenu(!showLangMenu)} className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-[12px] text-white font-manrope transition-colors hover:bg-white/25">
              {LANGUAGES[lang]?.slice(0, 2).toUpperCase() || "EN"}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2.5 3.75L5 6.25L7.5 3.75" /></svg>
            </button>
            {showLangMenu && (
              <div className="absolute right-0 top-full mt-2 max-h-[280px] w-[180px] overflow-y-auto rounded-xl border border-gray-100 bg-white py-1 shadow-xl">
                {Object.entries(LANGUAGES).map(([code, name]) => (
                  <button key={code} onClick={() => switchLang(code)} className={`flex w-full items-center gap-2 px-4 py-2 text-left text-[13px] font-manrope transition-colors hover:bg-gray-50 ${lang === code ? "font-semibold text-[var(--dark-teal)]" : "text-gray-700"}`}>
                    <span className="text-[11px] text-gray-400 w-5">{code.toUpperCase()}</span>{name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4" style={{ background: "#f8f9fa" }}>
          {messages.map((msg, i) => (
            <div key={i} className={`mb-3 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed font-manrope whitespace-pre-line ${msg.role === "user" ? "bg-[var(--dark-teal)] text-white rounded-br-md" : "bg-white text-gray-800 shadow-sm rounded-bl-md"}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="mb-3 flex justify-start">
              <div className="flex items-center gap-1 rounded-2xl bg-white px-4 py-3 shadow-sm rounded-bl-md">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "150ms" }} />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-2 border-t border-gray-100 px-4 py-3">
            {(QUICK_REPLIES[lang] || QUICK_REPLIES.en).map((q) => (
              <button key={q} onClick={() => send(q)} className="rounded-full border border-[var(--dark-teal)]/20 bg-[var(--dark-teal)]/5 px-3 py-1.5 text-[11px] font-medium text-[var(--dark-teal)] font-manrope transition-all hover:bg-[var(--dark-teal)] hover:text-white">{q}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="flex items-center gap-2 border-t border-gray-100 bg-white px-4 py-3">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKey}
            placeholder={lang === "ar" ? "اكتب رسالتك..." : "Type your message..."}
            aria-label="Type your message" disabled={typing}
            className="flex-1 rounded-full bg-gray-100 px-4 py-2.5 text-[13px] font-manrope outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--teal)]/30 disabled:opacity-60" />
          <button onClick={() => send()} disabled={!input.trim() || typing} aria-label="Send"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dark-teal)] text-white transition-all hover:bg-[var(--teal)] disabled:opacity-40">
            {typing ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
