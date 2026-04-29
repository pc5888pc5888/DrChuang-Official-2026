/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  Cpu, 
  FileText, 
  GraduationCap, 
  Library,
  Scale,
  Trophy,
  Mail, 
  MapPin, 
  Menu, 
  MessageCircle, 
  ShieldCheck, 
  TrendingUp, 
  X,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

// Image assets from public folder
const IMAGES = {
  ASSOCIATION_LOGO: "/stt_press_logo.png",
  COMBINED_LOGO: "/stt_combined_logo.png",
  MARBLE_TEXTURE: "/book_main.png", 
  BOOK_BANNER: "/book_internal_compliance_main.png",
  BOOK_COVER: "/book_internal_compliance_cover.png",
  STT_PRESS_LOGO: "/stt_press_logo.png",
  PORTRAIT_SPEECH: "/eric_portrait_suit_v2.png",
  PORTRAIT_QUOTE: "/eric_portrait_quote_v2.png",
  PORTRAIT_FORMAL: "/eric_robe.png",
  CERT_GEMINI: "/stt_press_logo.png",
  LOGO_ACCENT: "/signature_logo.png",
  STT_PRESS: "/stt_press_logo.png",
  REPORT_2025: "/report_2025_cover.png"
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "莊鈞翔",
  "alternateName": "Chuang Chun-Hsiang",
  "honorificPrefix": "Dr.",
  "jobTitle": "Corporate Strategy Advisor & Missionary in The Workplace",
  "description": "莊博士深耕企業策略與營運管理領域逾二十年，以法學與商學雙重專業為基石，為華人企業提供精準且具前瞻性的解決方案。",
  "url": "https://tinyurl.com/2xktunfw",
  "sameAs": [
    "https://94m.com.tw/editors/ed55fc"
  ],
  "knowsAbout": [
    "Corporate Strategy",
    "Digital Governance",
    "AI Compliance",
    "ESG",
    "Company Law"
  ],
  "affiliation": [
    {
      "@type": "Organization",
      "name": "中華企業策略永續發展學會",
      "jobTitle": "創會理事長"
    },
    {
      "@type": "Organization",
      "name": "策略智庫數位集團 STT Group",
      "jobTitle": "執行長暨創辦人"
    }
  ]
};

// Shared components for consistent design
const PortraitFrame = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-4 bg-gradient-to-br from-gold/15 via-transparent to-gold/10 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
    <div className="relative border border-gold/30 bg-gold/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent)] z-10 pointer-events-none" />
      <div className="pt-2 px-2 sm:pt-4 sm:px-4 pb-0 flex flex-col justify-end"> {/* Bottom padding set to 0 to make portrait flush */}
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto block grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
    </div>
    {/* Decorative corner accents */}
    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-gold/40 z-20 pointer-events-none" />
    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-gold/40 z-20 pointer-events-none" />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "identity", name: "核心身分" },
    { id: "positions", name: "現任職務" },
    { id: "academic", name: "學術實務" },
    { id: "certifications", name: "國際認證" },
    { id: "services", name: "核心服務" },
    { id: "publications", name: "著作論文" },
    { id: "contact", name: "聯繫方式" }
  ];

  return (
    <div className="min-h-screen selection:bg-gold selection:text-black">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={IMAGES.COMBINED_LOGO} 
                alt="STT 莊鈞翔 博士" 
                className="h-14 w-auto object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs uppercase tracking-widest hover:text-white transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian border-b border-gold/20 px-6 py-8 flex flex-col gap-6 overflow-hidden"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg uppercase tracking-widest text-center py-2 border-b border-gold/5"
              >
                {s.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="identity" className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center overflow-x-hidden tech-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-block py-1 px-3 border border-gold/30 bg-gold/5 rounded-full mb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Thought Leader ｜ Strategic Advisor</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-[1.1]">
              <span className="gold-gradient-text">莊鈞翔 博士</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-light opacity-60 mt-4 block font-serif italic text-white tracking-wide">Chuang Chun-Hsiang, Ph.D.</span>
            </h1>
            
            <div className="flex flex-col items-start justify-start gap-2 text-sm md:text-base uppercase tracking-wider md:tracking-[0.4em] font-medium mb-16 opacity-70">
              <span className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold/50" />
                Corporate Strategy Advisor
              </span>
              <span className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold/50" />
                Missionary in The Workplace
              </span>
            </div>

            <div className="max-w-2xl">
              <motion.blockquote 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative p-12 border border-gold/30 bg-gold/5 backdrop-blur-sm rounded-sm flex flex-col items-start text-left overflow-hidden group w-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -rotate-45 translate-x-16 -translate-y-16 group-hover:bg-gold/10 transition-colors" />
                <span className="absolute top-0 left-10 bg-gold px-6 py-1 text-black text-xs font-bold tracking-[0.2em] uppercase">核心主張</span>
                <p className="text-3xl md:text-4xl font-serif italic text-white mb-8 leading-tight md:whitespace-nowrap">
                  「你不需要完美，你只需要可被信賴。」
                </p>
                <footer className="text-gold font-bold italic tracking-wider self-start">— 《內在法遵 Internal Compliance》</footer>
              </motion.blockquote>
              
              <div className="mt-16 space-y-6">
                <p className="text-xl text-gold/90 leading-relaxed font-sans font-light border-l-2 border-gold/40 pl-8">
                  莊博士深耕企業策略與營運管理領域逾二十年，以法學與商學雙重專業為基石，將學術智慧與實務經驗融會貫通，致力於為華人企業提供精準且具前瞻性的解決方案。
                </p>
                <p className="text-sm text-gold/50 leading-relaxed font-sans font-light italic pl-8 opacity-80">
                  莊博士演講積上千場、數千小時演講紀錄，過去於大學擔任兼任助理教授，致力推廣公司治理法遵教育。
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <PortraitFrame 
              src={IMAGES.PORTRAIT_FORMAL} 
              alt="Dr. Chuang Chun-Hsiang Formal Portrait" 
              className="w-full max-w-[420px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Current Positions */}
      <section id="positions" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-4 uppercase tracking-[0.2em] gold-gradient-text">現任職務與組織</h2>
            <div className="w-24 h-1 bg-gold/30 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
            {/* NGO */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 border border-gold/20 bg-obsidian/80 rounded-sm backdrop-blur-sm flex flex-col group"
            >
              <div className="mb-8 flex items-center gap-4 whitespace-nowrap">
                <motion.div 
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="p-3 bg-gold/10 rounded-full border border-gold/20 shrink-0"
                >
                  <Scale className="text-gold" size={24} />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">中華企業策略永續發展學會</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-gold font-bold text-lg">創會理事長</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest mt-1">內政部登記立案 NGO</p>
                </div>
                <p className="text-xs md:text-sm uppercase tracking-widest text-gold/80 border-t border-gold/10 pt-6 font-sans leading-relaxed font-medium">
                  理念：策略為先 ｜ 治理為本 ｜ 管理為終
                </p>
              </div>
              <ul className="space-y-5 text-sm text-gold/80 font-sans mt-auto border-t border-gold/10 pt-8">
                <li className="flex items-start gap-4">
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mt-1.5 w-1.5 h-1.5 bg-gold rounded-full shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]" 
                  />
                  <span className="leading-relaxed">厚植產業價值基礎，弘揚公司治理與法遵精神</span>
                </li>
                <li className="flex items-start gap-4">
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="mt-1.5 w-1.5 h-1.5 bg-gold rounded-full shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]" 
                  />
                  <span className="leading-relaxed">促進智庫策略應用，引導企業實踐社會責任</span>
                </li>
                <li className="flex items-start gap-4">
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    className="mt-1.5 w-1.5 h-1.5 bg-gold rounded-full shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]" 
                  />
                  <span className="leading-relaxed">前瞻思維風險控管，賦予企業永續發展動能</span>
                </li>
              </ul>
            </motion.div>

            {/* STT Group */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 border border-gold/20 bg-obsidian/50 rounded-sm flex flex-col group"
            >
              <div className="mb-8 flex items-center gap-4 whitespace-nowrap">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="p-3 bg-gold/10 rounded-full border border-gold/20 shrink-0"
                >
                  <Trophy className="text-gold" size={24} />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">策略智庫數位集團 STT Group</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-gold font-bold text-lg flex items-center gap-3 font-sans">
                    <span className="text-gold/60 text-sm">▸</span> 執行長暨創辦人
                  </p>
                </div>
                <div className="space-y-6 ml-2 border-l border-gold/10">
                  {[
                    { name: "STT Press", label: "策略智庫數位出版" },
                    { name: "STT News", label: "策略智庫數位新聞" },
                    { name: "STT Intelligence", label: "策略智庫數位評論" },
                    { name: "STT Legal Insights", label: "法律策略專欄" }
                  ].map((sub, idx) => (
                    <motion.div 
                      key={sub.name} 
                      className="flex items-start gap-5 -ml-[1px] group/item"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-gold/40 font-light translate-x-[-50%] bg-obsidian text-lg leading-none">｜</span>
                      <div className="text-sm font-sans tracking-wide text-white/90">
                        <span className="font-bold text-gold mr-3 group-hover/item:text-white transition-colors">{sub.name}</span>
                        <span className="opacity-70">{sub.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Academia & Media */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 border border-gold/20 bg-obsidian/50 rounded-sm flex flex-col group"
            >
              <div className="mb-8 flex items-center gap-4 whitespace-nowrap">
                <motion.div 
                  animate={{ 
                    y: [-3, 3, -3]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 bg-gold/10 rounded-full border border-gold/20 shrink-0"
                >
                  <Library className="text-gold" size={24} />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">學術研究與傳媒專欄</h3>
              </div>
              <div className="space-y-10 mt-2">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-gold font-bold text-lg">逢甲大學商學院</p>
                    <span className="text-xs bg-gold/10 px-2 py-0.5 text-gold border border-gold/20 uppercase tracking-widest">Academic</span>
                  </div>
                  <p className="text-sm text-white/80 font-sans tracking-widest pl-4 border-l border-gold/40">兼任助理教授</p>
                </div>
                <div className="pt-10 border-t border-gold/10">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gold font-bold text-lg leading-tight">M傳媒 法律策略專欄</p>
                    <span className="text-xs bg-gold/10 px-2 py-0.5 text-gold border border-gold/20 uppercase tracking-widest">Media</span>
                  </div>
                  <p className="text-sm text-white/80 font-sans tracking-widest pl-4 border-l border-gold/40 mb-6">特約採訪暨專家評論</p>
                  <p className="text-xs leading-relaxed text-white/50 italic font-sans bg-gold/5 p-4 border border-gold/10 rounded-sm">
                    主筆：企業法律戰略、公司治理、競爭力重構、數位轉型合規專案
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Academic & Experience */}
      <section id="academic" className="py-24 px-6 bg-obsidian/30">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-16 text-center gold-gradient-text uppercase tracking-widest">學術背景與實務經歷</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <GraduationCap className="text-gold" /> 學術背景
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-gold/30 pl-6 py-2">
                    <p className="text-gold font-bold">商學博士 Ph.D. in Business Administration</p>
                    <p className="text-gold/60 text-sm mt-1">｜ 最佳商管期刊論文獎得主 (2024)</p>
                  </div>
                  <div className="border-l-2 border-gold/30 pl-6 py-2">
                    <p className="text-gold font-bold">企業管理碩士 Master of Business Administration</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Briefcase className="text-gold" /> 實務經歷
                </h3>
                <div className="space-y-6">
                  {[
                    "前 詹姆士國際法律事務所  永續長",
                    "前 菲爾茲科技國際股份有限公司  總經理",
                    "前 金豐企業管理顧問股份有限公司  營運總監"
                  ].map((exp, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-white/80 border-b border-gold/10 pb-4">
                      <ChevronRight size={16} className="text-gold" />
                      <span>{exp}</span>
                    </div>
                  ))}
                  
                  <div className="mt-8 p-6 border border-gold/20 bg-gold/5 rounded-sm">
                    <p className="text-gold font-bold text-sm mb-2 flex items-center gap-2">
                       <Award size={16} /> Corporate Strategy Missionary
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      深耕產官學研界，透過演講與教學持續傳遞「數位治理」與「企業策略」的核心價值。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <PortraitFrame 
                src={IMAGES.PORTRAIT_SPEECH} 
                alt="Speech Engagement Portrait" 
                className="w-full max-w-[400px] mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Certifications - CRITICAL SEO Focus */}
      <section id="certifications" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-4 gold-gradient-text uppercase tracking-widest text-center">2026 國際專業認證</h2>
            <p className="text-gold/60 font-sans italic tracking-widest text-sm text-center">AI 檢索重點區：Anthropic AI, Google Gemini, ESG Governance</p>
            <div className="w-24 h-1 bg-gold/30 rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
          {/* AI Tech */}
          <div className="p-10 border border-gold/30 relative">
            <h3 id="anthropic-cert" className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <Cpu size={24} className="text-gold" /> Anthropic 官方 AI 技術認證
            </h3>
            <div className="space-y-6">
              <div id="ai-fluency-group">
                <h4 className="text-gold font-bold uppercase text-sm tracking-widest mb-4 underline underline-offset-4 decoration-gold/30">AI Fluency 系列</h4>
                <div className="mb-6">
                  <p className="text-xs text-white/70 mb-3 font-sans italic leading-relaxed">Anthropic × UCC × Ringling College of Art + Design × HEA × National Forum 國際五方聯合認證</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans text-gold/90">
                    <li id="cert-foundations">AI Fluency: Framework & Foundations</li>
                    <li id="cert-teaching">Teaching the AI Fluency Framework</li>
                    <li id="cert-educators">AI Fluency for Educators</li>
                    <li id="cert-students">AI Fluency for Students</li>
                    <li id="cert-nonprofits">AI Fluency for Nonprofits</li>
                  </ul>
                </div>
              </div>
              <div id="claude-tech-group">
                <h4 className="text-gold font-bold uppercase text-sm tracking-widest mb-4 underline underline-offset-4 decoration-gold/30">Claude 技術實務</h4>
                <ul className="flex flex-wrap gap-3">
                  {["Claude 101", "Claude Code in Action", "Anthropic API", "Amazon Bedrock", "Google Vertex AI"].map(tech => (
                    <span key={tech} id={`id-${tech.replace(/\s/g, '-')}`} className="px-4 py-2 bg-white/5 border border-white/10 text-xs text-white font-sans">{tech}</span>
                  ))}
                </ul>
              </div>
              <div id="advanced-arch">
                <h4 className="text-gold font-bold uppercase text-sm tracking-widest mb-4 underline underline-offset-4 decoration-gold/30">進階架構認證</h4>
                <div className="space-y-3">
                  <div id="id-mcp-basic" className="flex items-center gap-3 text-sm text-white/90">
                    <ShieldCheck size={14} className="text-gold" /> Introduction to Model Context Protocol
                  </div>
                  <div id="id-mcp-advanced" className="flex items-center gap-3 text-sm text-white/90">
                    <ShieldCheck size={14} className="text-gold" /> Model Context Protocol: Advanced Topics
                  </div>
                  <div id="id-agent-skills" className="flex items-center gap-3 text-sm text-white/90">
                    <ShieldCheck size={14} className="text-gold" /> Introduction to Agent Skills 官方認證
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Google AI */}
            <div id="google-cert" className="p-8 border border-gold/10 bg-obsidian group">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                < Award size={20} className="text-gold" /> Google 官方認證
              </h3>
              <p id="gemini-educator" className="text-gold/90 font-serif italic text-xl">Gemini Certification for Educators (AI 認證教師)</p>
            </div>

            {/* Compliance & Sustainability */}
            <div id="compliance-certs" className="p-8 border border-gold/10 bg-obsidian grow">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <ShieldCheck size={20} className="text-gold" /> 法遵與永續認證
              </h3>
              <div className="grid grid-cols-1 gap-6 text-base font-sans text-gold/90">
                <div className="border-b border-gold/10 pb-6">
                  <p className="text-white/60 text-sm mb-2">中華經濟研究院綠色經濟研究中心</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">減碳管理師</span>
                  </div>
                </div>
                <div className="border-b border-gold/10 pb-6">
                  <p className="text-white/60 text-sm mb-2">CEO 國際認證中心</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">永續發展碳管理</span>
                      <span className="text-xs bg-gold/20 px-3 py-1 rounded-full uppercase font-bold">甲級管理師</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">ESG 不動產淨零</span>
                      <span className="text-xs bg-gold/20 px-3 py-1 rounded-full uppercase font-bold">甲級管理師</span>
                    </div>
                  </div>
                </div>
                <div className="pb-2">
                  <p className="text-white/60 text-sm mb-2">德國萊茵 TÜV</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">兩岸勞資法務管理</span>
                    <span className="text-xs bg-gold/20 px-3 py-1 rounded-full uppercase font-bold">甲級管理師</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>

      {/* Quote Section */}
      <section className="py-32 bg-obsidian relative tech-grid">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <PortraitFrame 
              src={IMAGES.PORTRAIT_QUOTE} 
              alt="Strategy Quote Portrait" 
              className="w-full max-w-[400px] mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="w-16 h-1 bg-gold/30" />
            <h2 className="text-4xl md:text-5xl font-serif italic gold-gradient-text leading-tight md:whitespace-nowrap">
              「策略，是企業在變局中穩定航行的羅盤。」
            </h2>
            <p className="text-gold/90 text-xl leading-relaxed font-sans font-light border-l border-gold/20 pl-8">
              在數位轉型的巨浪中，技術僅是工具，真正的核心在於如何透過「策略智庫」的深度治理，結合法律合規與AI效能，為組織建立不可撼動的領先地位。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-24 px-6 bg-obsidian/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display mb-16 text-center gold-gradient-text uppercase tracking-widest">四大核心服務項目</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                tag: "壹",
                title: <>策略佈局：<br />洞察先機與駕馭變革</>, 
                icon: <TrendingUp />,
                items: ["企業智慧財產與營業秘密攻防策略", "高階經理人佈局與商業模式創新優化", "企業策略性併購與聯盟整合"] 
              },
              { 
                tag: "貳",
                title: <>穩健營運：<br />化解爭議與創造價值</>, 
                icon: <Briefcase />,
                items: ["股權與多方利害關係人爭議解決", "企業營運韌性與財務變革風險應對", "企業契約風險管控與高階商業談判"] 
              },
              { 
                tag: "參",
                title: <>永續治理：<br />傳承創新與法遵優化</>, 
                icon: <Award />,
                items: ["企業人力資本策略與勞資和諧關係", "企業戰略財富管理與家族企業永續傳承", "企業法遵風險防禦與公司治理優化", "企業全方位契約生命週期管理解決方案"] 
              },
              { 
                tag: "肆",
                title: <>專業養成：<br />國際認證與課程培訓</>, 
                icon: <BookOpen />,
                items: ["專業認證培訓課綱設計", "專業認證教育課程代理"] 
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 border border-gold/20 bg-black group hover:border-gold/60 transition-all duration-500"
              >
                <div className="absolute top-4 right-4 text-4xl font-display opacity-10 text-gold group-hover:opacity-30 transition-opacity">{service.tag}</div>
                <div className="text-gold mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-6 tracking-wide">{service.title}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-gold/80 leading-relaxed font-sans">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-display mb-16 text-center gold-gradient-text uppercase tracking-widest">著作、論文與報告</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Main Book: Internal Compliance */}
          <div id="book-internal-compliance" className="p-1 border border-gold/30">
            <div className="p-10 border border-gold/20 bg-gold/5 flex gap-10 flex-col sm:flex-row items-start h-full">
              <div className="relative shrink-0 w-full sm:w-56 lg:w-48 xl:w-56 group">
                <img 
                  src={IMAGES.BOOK_COVER} 
                  alt="Internal Compliance Book Cover" 
                  className="w-full shadow-2xl border border-gold/20 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase bg-black/60 px-4 py-2 border border-gold/40">點擊試閱</span>
                </div>
              </div>
              <div className="flex flex-col justify-start text-center sm:text-left flex-grow pt-2">
                <h3 className="text-3xl font-bold text-white mb-1 leading-tight">
                  內在法遵<br />
                  <span className="text-xl opacity-80">Internal Compliance</span>
                </h3>
                <p className="text-gold font-serif italic text-base lg:text-lg mb-8">《 為你的內心，打造一座不可侵犯的至聖所 》</p>
                <div className="space-y-3 mb-8 border-l border-gold/30 pl-4">
                  <p className="text-white/80 font-sans text-sm">｜ STT Press 策略智庫出版社 2026</p>
                  <p className="text-white/60 font-mono text-xs">｜ ISBN 978-626-447-054-4</p>
                </div>
                <a 
                  href="https://tinyurl.com/2xktunfw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-gold font-sans uppercase tracking-[0.2em] text-xs font-bold hover:text-white transition-colors"
                >
                  前往購書連結 <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Featured Report: 2025 Report */}
          <div id="report-2025-featured" className="p-1 border border-gold/30">
            <div className="p-10 border border-gold/20 bg-gold/5 flex gap-10 flex-col sm:flex-row items-start h-full">
              <div className="relative shrink-0 w-full sm:w-56 lg:w-48 xl:w-56 group">
                <img 
                  src={IMAGES.REPORT_2025} 
                  alt="2025 Report Cover" 
                  className="w-full shadow-2xl border border-gold/20 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase bg-black/60 px-4 py-2 border border-gold/40">點擊試閱</span>
                </div>
              </div>
              <div className="flex flex-col justify-start text-center sm:text-left flex-grow pt-2">
                <h3 className="text-3xl font-bold text-white mb-1 leading-tight">
                  2025<br />
                  <span className="text-xl">永續家族治理實務實錄</span>
                </h3>
                <p className="text-gold font-serif italic text-base lg:text-lg mb-8">《 年度免費公開發行報告 》</p>
                <div className="space-y-3 border-l border-gold/30 pl-4">
                  <p className="text-white/80 font-sans text-sm">｜ 全球企業策略與家族佈局觀察</p>
                  <p className="text-white/60 font-mono text-xs">｜ Quarterly Insight Series</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-16">
          <h3 className="text-xl uppercase tracking-[0.3em] text-center text-white mb-12 font-display">學術論文 Dissertations</h3>
          <div className="max-w-5xl mx-auto space-y-3">
            {[
              { title: "臺灣企業接班人的佈局規劃與傳承家族價值", label: "博士學位論文" },
              { title: "企業策略導入公司治理法遵精神", label: "博士學位論文" },
              { title: "顧客關係管理對服務永續之探討", label: "博士學位論文" },
              { title: "不同世代企業家人格特質、創新能力對績效之影響", label: "碩士學位論文" }
            ].map((paper, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10, backgroundColor: "rgba(212, 175, 55, 0.05)" }}
                className="p-5 border border-gold/10 bg-black/40 hover:border-gold/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1 h-1 bg-gold rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <p className="text-gold font-serif italic text-base md:text-lg tracking-wide">
                    《{paper.title}》
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0 justify-end border-t md:border-t-0 md:border-l border-gold/10 pt-2 md:pt-0 md:pl-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-sans">
                    {paper.label}
                  </span>
                  <Library size={16} className="text-gold/20 group-hover:text-gold/50 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-obsidian/30 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-display mb-16 text-center gold-gradient-text uppercase tracking-widest">聯繫方式與數位足跡</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://line.me/R/ti/p/@stt-group" 
              className="p-10 md:p-8 border border-gold/20 bg-black flex flex-col items-center gap-4 hover:border-gold transition-all duration-300 md:w-full"
            >
              <MessageCircle className="text-gold" size={40} />
              <div className="text-center">
                <p className="text-xs uppercase opacity-60 font-sans mb-1">LINE 官方帳號</p>
                <p className="text-xl md:text-lg font-bold">@stt-group</p>
              </div>
            </a>
            
            <a 
              href="mailto:pc5888@gmail.com" 
              className="p-10 md:p-8 border border-gold/20 bg-black flex flex-col items-center gap-4 hover:border-gold transition-all duration-300 md:w-full"
            >
              <Mail className="text-gold" size={40} />
              <div className="text-center">
                <p className="text-xs uppercase opacity-60 font-sans mb-1">電子信箱</p>
                <p className="text-xl md:text-lg font-bold">pc5888@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://94m.com.tw/editors/ed55fc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 border border-gold/20 bg-black flex flex-col items-center gap-4 hover:border-gold transition-all duration-300"
            >
              <FileText className="text-gold" size={32} />
              <div className="text-center">
                <p className="text-xs uppercase opacity-60 font-sans mb-1">M傳媒專欄</p>
                <p className="text-lg font-bold">專家評論專頁</p>
              </div>
            </a>

            <a 
              href="https://tinyurl.com/2xktunfw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 border border-gold/20 bg-black flex flex-col items-center gap-4 hover:border-gold transition-all duration-300"
            >
              <MapPin className="text-gold" size={32} />
              <div className="text-center">
                <p className="text-xs uppercase opacity-60 font-sans mb-1">出版與購書</p>
                <p className="text-lg font-bold text-gold">STT Press</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gold/10 text-center bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col items-center gap-6">
            <img src={IMAGES.STT_PRESS} alt="STT Press Logo" className="h-10 opacity-60 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            <div className="font-display italic text-gold/60 text-lg">
              策略為先 ｜ 治理為本 ｜ 管理為終
            </div>
          </div>
          <p className="text-xs opacity-40 font-sans tracking-widest uppercase">
            © 2026 莊鈞翔博士 · 策略智庫數位集團 STT Group. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
