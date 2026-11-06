/* =========================================================
   CONFIGURAÇÃO DA LOJA — edite aqui
   ========================================================= */
window.STORE = {
  name: "Jhuann Imports",
  instagram: "jhuann.imports",
  // Número no formato internacional, só dígitos: 55 + DDD + número
  // WhatsApp da loja
  whatsapp: "5518981556782",
  linktree: "https://linktr.ee/jhuanniphoness",
  city: "Rosana — SP",
  deliveries: "+1,5 mil",
  hours: "Atendimento e encomendas pelo WhatsApp",
  warrantyNew: "Lacrados com garantia Apple",
  warrantyUsed: "100% originais e com garantia da loja.",
};

/* =========================================================
   CATÁLOGO DE MODELOS
   cam: layout da câmera usado no desenho SVG
   ========================================================= */
const C = (name, hex) => ({ name, hex });

window.MODELS = [
  // ---- Linha 18 Pro (2026) — confirmar nomes oficiais das cores/armazenamentos
  { id: "18promax", name: "iPhone 18 Pro Max", gen: "18", cam: "plateau", isNew: true, badge: "Lançamento",
    colors: [C("Azul", "#3C5A86"), C("Roxo", "#6B5A8C"), C("Preto", "#232325"), C("Cinza", "#B9BBBE")],
    storage: ["256 GB", "512 GB", "1 TB", "2 TB"] },
  { id: "18pro", name: "iPhone 18 Pro", gen: "18", cam: "plateau", isNew: true, badge: "Lançamento",
    colors: [C("Azul", "#3C5A86"), C("Roxo", "#6B5A8C"), C("Preto", "#232325"), C("Cinza", "#B9BBBE")],
    storage: ["256 GB", "512 GB", "1 TB"] },
  // ---- Linha 17 (2025)
  { id: "17promax", name: "iPhone 17 Pro Max", gen: "17", cam: "plateau", isNew: true,
    colors: [C("Laranja Cósmico", "#E8692E"), C("Azul Intenso", "#2B3A55"), C("Prateado", "#DCDDDF")],
    storage: ["256 GB", "512 GB", "1 TB", "2 TB"] },
  { id: "17pro", name: "iPhone 17 Pro", gen: "17", cam: "plateau", isNew: true,
    colors: [C("Laranja Cósmico", "#E8692E"), C("Azul Intenso", "#2B3A55"), C("Prateado", "#DCDDDF")],
    storage: ["256 GB", "512 GB", "1 TB"] },
  { id: "air", name: "iPhone Air", gen: "17", cam: "air", isNew: true,
    colors: [C("Azul Céu", "#C9D9E8"), C("Dourado Claro", "#EADCC0"), C("Branco Nuvem", "#F1F0EC"), C("Preto Espacial", "#2A2A2C")],
    storage: ["256 GB", "512 GB", "1 TB"] },
  { id: "17", name: "iPhone 17", gen: "17", cam: "pill", isNew: true,
    colors: [C("Lavanda", "#CFC3DD"), C("Sálvia", "#B9C6AE"), C("Azul Névoa", "#A9BCD0"), C("Branco", "#F2F2F0"), C("Preto", "#2C2C2E")],
    storage: ["256 GB", "512 GB"] },
  // ---- Linha 16
  { id: "16promax", name: "iPhone 16 Pro Max", gen: "16", cam: "triple",
    colors: [C("Titânio-deserto", "#BFA48F"), C("Titânio-natural", "#BAB4A9"), C("Titânio-branco", "#E9E7E2"), C("Titânio-preto", "#3B3B3D")],
    storage: ["256 GB", "512 GB", "1 TB"] },
  { id: "16pro", name: "iPhone 16 Pro", gen: "16", cam: "triple",
    colors: [C("Titânio-deserto", "#BFA48F"), C("Titânio-natural", "#BAB4A9"), C("Titânio-branco", "#E9E7E2"), C("Titânio-preto", "#3B3B3D")],
    storage: ["128 GB", "256 GB", "512 GB", "1 TB"] },
  { id: "16plus", name: "iPhone 16 Plus", gen: "16", cam: "pill",
    colors: [C("Ultramarino", "#6F82D9"), C("Verde-acinzentado", "#A7C4BE"), C("Rosa", "#F1C3D6"), C("Branco", "#F4F4F2"), C("Preto", "#2E2E30")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  { id: "16", name: "iPhone 16", gen: "16", cam: "pill", isNew: true,
    colors: [C("Ultramarino", "#6F82D9"), C("Verde-acinzentado", "#A7C4BE"), C("Rosa", "#F1C3D6"), C("Branco", "#F4F4F2"), C("Preto", "#2E2E30")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  { id: "16e", name: "iPhone 16e", gen: "16", cam: "single",
    colors: [C("Branco", "#F2F2F0"), C("Preto", "#2C2C2E")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  // ---- Linha 15
  { id: "15promax", name: "iPhone 15 Pro Max", gen: "15", cam: "triple",
    colors: [C("Titânio-natural", "#BAB4A9"), C("Titânio-azul", "#3F4A5C"), C("Titânio-branco", "#E9E7E2"), C("Titânio-preto", "#3B3B3D")],
    storage: ["256 GB", "512 GB", "1 TB"] },
  { id: "15pro", name: "iPhone 15 Pro", gen: "15", cam: "triple",
    colors: [C("Titânio-natural", "#BAB4A9"), C("Titânio-azul", "#3F4A5C"), C("Titânio-branco", "#E9E7E2"), C("Titânio-preto", "#3B3B3D")],
    storage: ["128 GB", "256 GB", "512 GB", "1 TB"] },
  { id: "15plus", name: "iPhone 15 Plus", gen: "15", cam: "diag",
    colors: [C("Rosa", "#F3D6DC"), C("Amarelo", "#F2EBC4"), C("Verde", "#D3E0CF"), C("Azul", "#CFDCE3"), C("Preto", "#3A3B3D")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  { id: "15", name: "iPhone 15", gen: "15", cam: "diag",
    colors: [C("Rosa", "#F3D6DC"), C("Amarelo", "#F2EBC4"), C("Verde", "#D3E0CF"), C("Azul", "#CFDCE3"), C("Preto", "#3A3B3D")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  // ---- Linha 14
  { id: "14promax", name: "iPhone 14 Pro Max", gen: "14", cam: "triple",
    colors: [C("Roxo-profundo", "#5A4E66"), C("Dourado", "#F2E3C6"), C("Prateado", "#E6E6E4"), C("Preto-espacial", "#38383A")],
    storage: ["128 GB", "256 GB", "512 GB", "1 TB"] },
  { id: "14pro", name: "iPhone 14 Pro", gen: "14", cam: "triple",
    colors: [C("Roxo-profundo", "#5A4E66"), C("Dourado", "#F2E3C6"), C("Prateado", "#E6E6E4"), C("Preto-espacial", "#38383A")],
    storage: ["128 GB", "256 GB", "512 GB", "1 TB"] },
  { id: "14plus", name: "iPhone 14 Plus", gen: "14", cam: "diag",
    colors: [C("Azul", "#A4B6CC"), C("Roxo", "#DCD1E6"), C("Amarelo", "#F6E39A"), C("Meia-noite", "#2C2F36"), C("Estelar", "#F0EBE3"), C("(PRODUCT)RED", "#C3192C")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  { id: "14", name: "iPhone 14", gen: "14", cam: "diag",
    colors: [C("Azul", "#A4B6CC"), C("Roxo", "#DCD1E6"), C("Amarelo", "#F6E39A"), C("Meia-noite", "#2C2F36"), C("Estelar", "#F0EBE3"), C("(PRODUCT)RED", "#C3192C")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  // ---- Linha 13
  { id: "13promax", name: "iPhone 13 Pro Max", gen: "13", cam: "triple",
    colors: [C("Azul-sierra", "#9BB5CE"), C("Verde-alpino", "#566B5A"), C("Dourado", "#F3E2C5"), C("Prateado", "#E5E5E3"), C("Grafite", "#4F4E4C")],
    storage: ["128 GB", "256 GB", "512 GB", "1 TB"] },
  { id: "13pro", name: "iPhone 13 Pro", gen: "13", cam: "triple",
    colors: [C("Azul-sierra", "#9BB5CE"), C("Verde-alpino", "#566B5A"), C("Dourado", "#F3E2C5"), C("Prateado", "#E5E5E3"), C("Grafite", "#4F4E4C")],
    storage: ["128 GB", "256 GB", "512 GB", "1 TB"] },
  { id: "13", name: "iPhone 13", gen: "13", cam: "diag",
    colors: [C("Verde", "#3F5446"), C("Rosa", "#F7DCD9"), C("Azul", "#2B4E6C"), C("Meia-noite", "#2C2F36"), C("Estelar", "#F0EBE3"), C("(PRODUCT)RED", "#C3192C")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  { id: "13mini", name: "iPhone 13 mini", gen: "13", cam: "diag",
    colors: [C("Verde", "#3F5446"), C("Rosa", "#F7DCD9"), C("Azul", "#2B4E6C"), C("Meia-noite", "#2C2F36"), C("Estelar", "#F0EBE3"), C("(PRODUCT)RED", "#C3192C")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  // ---- Linha 12
  { id: "12promax", name: "iPhone 12 Pro Max", gen: "12", cam: "triple",
    colors: [C("Azul-pacífico", "#2F4A5E"), C("Dourado", "#F2E2C7"), C("Grafite", "#55534F"), C("Prateado", "#E6E6E4")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  { id: "12pro", name: "iPhone 12 Pro", gen: "12", cam: "triple",
    colors: [C("Azul-pacífico", "#2F4A5E"), C("Dourado", "#F2E2C7"), C("Grafite", "#55534F"), C("Prateado", "#E6E6E4")],
    storage: ["128 GB", "256 GB", "512 GB"] },
  { id: "12", name: "iPhone 12", gen: "12", cam: "vert",
    colors: [C("Roxo", "#B7AFD0"), C("Azul", "#1F4E79"), C("Verde", "#D8EFD5"), C("(PRODUCT)RED", "#C3192C"), C("Branco", "#F6F6F4"), C("Preto", "#26272A")],
    storage: ["64 GB", "128 GB", "256 GB"] },
  { id: "12mini", name: "iPhone 12 mini", gen: "12", cam: "vert",
    colors: [C("Roxo", "#B7AFD0"), C("Azul", "#1F4E79"), C("Verde", "#D8EFD5"), C("(PRODUCT)RED", "#C3192C"), C("Branco", "#F6F6F4"), C("Preto", "#26272A")],
    storage: ["64 GB", "128 GB", "256 GB"] },
  // ---- Linha 11
  { id: "11promax", name: "iPhone 11 Pro Max", gen: "11", cam: "triple",
    colors: [C("Verde-meia-noite", "#4E5851"), C("Prateado", "#EBEBE6"), C("Cinza-espacial", "#4A4A4C"), C("Dourado", "#F3DFC4")],
    storage: ["64 GB", "256 GB", "512 GB"] },
  { id: "11pro", name: "iPhone 11 Pro", gen: "11", cam: "triple",
    colors: [C("Verde-meia-noite", "#4E5851"), C("Prateado", "#EBEBE6"), C("Cinza-espacial", "#4A4A4C"), C("Dourado", "#F3DFC4")],
    storage: ["64 GB", "256 GB", "512 GB"] },
  { id: "11", name: "iPhone 11", gen: "11", cam: "vert",
    colors: [C("Roxo", "#D1CDDA"), C("Amarelo", "#FFE681"), C("Verde", "#AEE1CD"), C("Preto", "#2B2B2D"), C("Branco", "#F8F8F6"), C("(PRODUCT)RED", "#BA0C2E")],
    storage: ["64 GB", "128 GB", "256 GB"] },
];

window.GENS = ["18", "17", "16", "15", "14", "13", "12", "11"];

window.CONDITIONS = [
  { id: "impecavel", label: "Impecável", desc: "Sem riscos ou marcas visíveis" },
  { id: "bom", label: "Bom estado", desc: "Marcas leves de uso, só vistas de perto" },
  { id: "marcas", label: "Marcas visíveis", desc: "Riscos ou amassados perceptíveis" },
  { id: "avariado", label: "Com avaria", desc: "Tela ou traseira trincada / defeito" },
];

window.CHECKS = [
  { id: "faceid", label: "Face ID / Touch ID funcionando" },
  { id: "original", label: "Nunca foi aberto ou reparado" },
  { id: "caixa", label: "Tenho a caixa" },
  { id: "nota", label: "Tenho nota fiscal" },
];

window.ANDROID_BRANDS = ["Samsung", "Motorola", "Xiaomi", "Realme", "Google Pixel", "Outra"];
