import React, { useState } from 'react';
import { 
  Hand, 
  MessageSquare, 
  BookOpen, 
  Cpu, 
  Users, 
  Camera, 
  Send, 
  Accessibility,
  Menu,
  X,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  Info,
  ExternalLink,
  Globe,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Sou o assistente de IA da LibrasTech. Como posso ajudar na sua inclusão digital hoje?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const userMsg = { id: Date.now(), text: chatInput, sender: 'user' };
    setMessages([...messages, userMsg]);
    setChatInput('');
    setIsTyping(true);

    // Simula de resposta da IA
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: `Identifiquei o termo "${userMsg.text}". No contexto de TI, a tradução para Libras está disponível. Gostaria de ver o vídeo demonstrativo ou o diagrama de sinalização?`,
        sender: 'bot'
      }]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] font-sans text-slate-900 flex flex-col">
      {/* Barra de Navegação Superior */}
      <nav className="bg-[var(--header-bg)] text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl shadow-inner">
              <Accessibility className="w-6 h-6 text-indigo-700" />
            </div>
            <div>
              <h1 className="text-xl font-black leading-none tracking-tight">LibrasTech IA</h1>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-80 mt-1">Uninter Extensão II</p>
            </div>
          </div>
          <div className="hidden md:flex gap-2 font-semibold text-sm">
            <NavButton active={activeTab === 'inicio'} onClick={() => setActiveTab('inicio')} label="Início" />
            <NavButton active={activeTab === 'projeto'} onClick={() => setActiveTab('projeto')} label="Relatório Projeto" />
            <NavButton active={activeTab === 'ia'} onClick={() => setActiveTab('ia')} label="Protótipo IA" />
            <NavButton active={activeTab === 'aprendizado'} onClick={() => setActiveTab('aprendizado')} label="Cursos" />
          </div>

          <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile Animado */}
      {isMenuOpen && (
        <div className="bg-[var(--header-bg)] text-white md:hidden p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 shadow-2xl">
          {['inicio', 'projeto', 'ia', 'aprendizado'].map((tab) => (
            <button 
              key={tab}
              className={`text-left py-4 px-4 rounded-xl border-l-4 transition-all ${activeTab === tab ? 'bg-white/10 border-white font-bold' : 'border-transparent opacity-80'}`}
              onClick={() => {setActiveTab(tab); setIsMenuOpen(false)}}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('ia', 'Protótipo IA').replace('projeto', 'Relatório do Projeto').replace('inicio', 'Início')}
            </button>
          ))}
        </div>
      )}

      {/* ABA: INÍCIO */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-8">
        {activeTab === 'inicio' && (
          <div className="space-y-16 animate-in fade-in duration-700">
            <section className="text-center py-12 space-y-8">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-2">
                <Globe className="w-4 h-4" /> ODS 09: Indústria, Inovação e Infraestrutura
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Tecnologia, Inteligência Artificial e Libras: <br/> 
                
                <span className="text-indigo-600">Inovação e Acessibilidade para a Inclusão Digital da Comunidade Surda.</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
                Projeto desenvolvido para a disciplina de Atividade Extensionista II por <span className="text-slate-900 font-bold underline decoration-indigo-300 decoration-4">Poliane Fernandes de Godoy</span>. 
                Uma ponte entre inteligência artificial e acessibilidade em Campinas-SP.
              </p>
              <div className="flex flex-wrap justify-center gap-5 pt-4">
                <button onClick={() => setActiveTab('ia')} className="group bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 shadow-2xl shadow-indigo-200 transition-all flex items-center gap-3 active:scale-95">
                  Iniciar Protótipo <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </button>
                <button onClick={() => setActiveTab('projeto')} className="bg-white text-indigo-700 border-2 border-slate-200 px-10 py-4 rounded-2xl font-bold hover:border-indigo-600 transition-all active:scale-95 shadow-sm">
                  Documentação Completa
                </button>
              </div>
            </section>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Cpu className="w-6 h-6 text-indigo-600" />} 
                title="IA & Libras" 
                desc="Algoritmos de Deep Learning para interpretação de sinais via câmera em tempo real."
              />
              <FeatureCard 
                icon={<BookOpen className="w-6 h-6 text-indigo-600" />} 
                title="Educação de TI" 
                desc="Trilhas de Java e Spring Boot adaptadas com suporte e glossário técnico em Libras."
              />
              <FeatureCard 
                icon={<Users className="w-6 h-6 text-indigo-600" />} 
                title="Foco em Campinas" 
                desc="Aplicação prática em escolas e centros comunitários da região de Campinas-SP."
              />
            </div>
          </div>
        )}

        {/* ABA: RELATÓRIO DO PROJETO */}
        {activeTab === 'projeto' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-2 bg-indigo-600 rounded-full"></div>
                <h2 className="text-4xl font-black text-slate-900">Relatório da Proposta</h2>
              </div>
              
              <div className="space-y-10">
                <section>
                  <h3 className="text-xl font-bold flex items-center gap-3 text-slate-800 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500" /> Objetivos Centrais
                  </h3>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-slate-600 leading-relaxed text-lg">
                    Desenvolver uma proposta de inclusão digital voltada à comunidade surda, utilizando Tecnologia da Informação, Inteligência Artificial e Libras como ferramentas de acessibilidade, comunicação e aprendizado, com foco no futuro desenvolvimento de soluções tecnológicas e robôs com IA para Libras.
                  </div>
                </section>

                <div className="grid md:grid-cols-2 gap-6">
                  <InfoItem label="Local de Aplicação" value="Instituições de ensino e hubs de tecnologia de Campinas – SP." icon={<Globe className="w-5 h-5"/>} />
                  <InfoItem label="ODS Relacionado" value="09 - Indústria, Inovação e Infraestrutura (Foco em Inclusão Digital)." icon={<Zap className="w-5 h-5"/>} />
                </div>

                <section>
                  <h3 className="text-xl font-bold flex items-center gap-3 text-slate-800 mb-4">
                    <ShieldCheck className="w-6 h-6 text-indigo-500" /> Fundamentação Acadêmica
                  </h3>
                  <div className="grid gap-4">
                    <div className="p-4 border-l-4 border-indigo-200 bg-indigo-50/30 rounded-r-xl">
                      <p className="text-sm font-semibold text-indigo-900 italic">"A tecnologia assistiva baseada em IA não é apenas um luxo, mas uma infraestrutura essencial para garantir que a inovação seja democrática e acessível a todos os cidadãos, independentemente de sua condição sensorial."</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {/* ABA: PROTÓTIPO IA */}
        {activeTab === 'ia' && (
          <div className="grid lg:grid-cols-2 gap-8 h-full min-h-[600px] animate-in slide-in-from-bottom-8 duration-700">
            {/* Simulador de Câmera/IA */}
            <div className="bg-slate-950 rounded-[2rem] flex flex-col items-center justify-center text-white relative overflow-hidden shadow-2xl group border-4 border-slate-800">
              <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
                <div className="bg-red-600 px-3 py-1 rounded-full text-[10px] font-black animate-pulse flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div> LIVE: IA VISION
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white/80">
                  FPS: 60.0
                </div>
              </div>

              {/* Grid de Escaneamento Visual */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" 
                   style={{backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <Hand className="w-40 h-40 text-indigo-500 mb-6 drop-shadow-[0_0_25px_rgba(79,70,229,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out" />
                  {/* Pontos de Trackamento Mock */}
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-10 left-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-150"></div>
                  <div className="absolute bottom-10 right-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-300"></div>
                </div>
                <p className="text-indigo-400 font-mono text-sm tracking-widest animate-pulse">PROCESSANDO SINAIS...</p>
              </div>

              {/* Overlay de Status Inferior */}
              <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                <div className="bg-indigo-600/20 backdrop-blur-xl p-5 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-indigo-300 font-black uppercase tracking-tighter">Predição de Confiança</p>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[92%] h-full bg-indigo-500"></div>
                      </div>
                      <span className="text-xs font-bold font-mono">92.4%</span>
                    </div>
                  </div>
                  <button className="bg-white text-slate-950 p-3 rounded-xl hover:scale-110 transition-transform active:scale-95 shadow-lg">
                    <Camera className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Interface de Chat/Tradução */}
            <div className="bg-white rounded-[2rem] shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
              <div className="p-6 border-b bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-indigo-600" /> 
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 leading-none">Glossário TI Interativo</h3>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-widest">Motor de Tradução v1.2</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-white custom-scrollbar">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-5 rounded-2xl shadow-sm leading-relaxed ${
                      m.sender === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-indigo-100' 
                      : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200 shadow-slate-50'
                    }`}>
                      <p className="text-sm font-medium">{m.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start animate-pulse">
                    <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-200">
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Pergunte sobre Java, APIs, SQL..."
                    className="flex-1 bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-inner"
                  />
                  <button 
                    onClick={handleSendMessage}
                    disabled={!chatInput.trim()}
                    className="bg-indigo-600 text-white px-6 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 disabled:opacity-50 active:scale-95 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-[10px] text-center text-slate-400 mt-4 font-semibold uppercase tracking-widest">IA em fase de treinamento extensionista</p>
              </div>
            </div>
          </div>
        )}

        {/* ABA: CURSOS */}
        {activeTab === 'aprendizado' && (
          <div className="space-y-10 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl font-black text-slate-900">Academia LibrasTech</h2>
                <p className="text-slate-500 font-medium text-lg">Trilhas de conhecimento desenhadas para a comunidade surda.</p>
              </div>
              <button className="flex items-center gap-2 text-indigo-600 font-bold hover:underline">
                Acessar Portal do Aluno <ExternalLink className="w-4 h-4"/>
              </button>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Java Fundamentos', level: 'Iniciante', modules: 12, color: 'bg-orange-500' },
                { name: 'Arquitetura Spring', level: 'Intermediário', modules: 8, color: 'bg-indigo-500' },
                { name: 'Interfaces React', level: 'Avançado', modules: 10, color: 'bg-cyan-500' },
                { name: 'Dados e SQL', level: 'Iniciante', modules: 6, color: 'bg-emerald-500' },
                { name: 'Libras para Devs', level: 'Especial', modules: 15, color: 'bg-purple-500' },
                { name: 'Futuro da Robótica', level: 'Avançado', modules: 5, color: 'bg-rose-500' }
              ].map((curso, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-1 hover:border-indigo-500 hover:shadow-2xl transition-all cursor-pointer group">
                  <div className="p-6">
                    <div className={`w-14 h-14 ${curso.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-200 group-hover:rotate-6 transition-transform`}>
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-bold text-xl text-slate-900 leading-tight">{curso.name}</h4>
                      <span className="text-[9px] bg-slate-100 px-2 py-1 rounded-full font-black text-slate-500 uppercase tracking-tighter">{curso.level}</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 font-medium leading-relaxed">Vídeo-aulas com intérpretes de Libras e glossário técnico visual dinâmico.</p>
                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{curso.modules} Aulas</span>
                      <div className="text-indigo-600 group-hover:translate-x-2 transition-transform">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Rodapé Informativo */}
      <footer className="bg-[var(--footer-bg)] text-slate-300 p-12 md:p-20 mt-auto border-t border-slate-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Accessibility className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">LibrasTech IA</span>
            </div>
            <p className="text-base leading-relaxed max-w-sm font-medium">
              Um projeto de vanguarda social focado em reduzir o abismo tecnológico entre a comunidade surda e o mercado de TI de Campinas e região.
            </p>
            <div className="flex gap-4">
               {/* Placeholders para ícones sociais */}
               <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                 <span className="text-white text-xs font-bold">In</span>
               </div>
               <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                 <span className="text-white text-xs font-bold">Gh</span>
               </div>
            </div>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-[2rem] border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="font-black text-white text-xs uppercase tracking-[0.2em] mb-4">Autoria</p>
              <p className="text-white font-bold">Poliane Fernandes de Godoy</p>
              <p className="text-xs">RU: 1126202</p>
              <p className="text-xs">Campinas - SP</p>
            </div>
            <div className="space-y-3">
              <p className="font-black text-white text-xs uppercase tracking-[0.2em] mb-4">Academia</p>
              <p className="text-indigo-400 font-bold">Uninter Centro Universitário</p>
              <p className="text-xs">Análise e Desenv. de Sistemas</p>
              <p className="text-xs">Extensão II (2026)</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-900/50 text-center text-[9px] font-bold uppercase tracking-[0.4em] opacity-40">
          TECNOLOGIA A SERVIÇO DA ACESSIBILIDADE • © 2026
        </div>
      </footer>
    </div>
  );
}

function NavButton({ active, onClick, label }) {
  return (
    <button 
      onClick={onClick} 
      className={`px-5 py-2 rounded-xl transition-all duration-300 ${
        active 
        ? 'bg-white text-indigo-700 font-black shadow-lg shadow-black/20 scale-105' 
        : 'text-indigo-100 hover:text-white hover:bg-white/10 font-bold'
      }`}
    >
      {label}
    </button>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function InfoItem({ label, value, icon }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
      <div className="text-indigo-600 p-2 bg-indigo-50 rounded-xl">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-indigo-700 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-slate-900 font-bold leading-tight">{value}</p>
      </div>
    </div>
  );
}
