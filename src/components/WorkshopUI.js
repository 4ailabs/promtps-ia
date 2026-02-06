'use client';

import React, { useState } from 'react';
import {
    BookOpen,
    Settings,
    Zap,
    MessageSquare,
    Search,
    Copy,
    ChevronRight,
    ClipboardCheck,
    ClipboardList,
    Target,
    Mail,
    Lightbulb,
    GraduationCap,
    Theater,
    Brain,
    Repeat,
    Wand2,
    Brackets,
    Workflow,
    Megaphone,
    FileText,
    CalendarCheck,
    User,
    Phone,
    ArrowRight
} from 'lucide-react';
import { workshopContent } from '@/data/workshopContent';

const WorkshopUI = () => {
    const [activeModuleId, setActiveModuleId] = useState('home');
    const [searchTerm, setSearchTerm] = useState('');

    const [copiedId, setCopiedId] = useState(null);

    const activeModule = workshopContent.modules.find(m => m.id === activeModuleId) || workshopContent.modules[0];
    const iconMap = {
        Target,
        Mail,
        Lightbulb,
        GraduationCap,
        Theater,
        Brain,
        Repeat,
        Wand2,
        Copy,
        Brackets,
        ClipboardList,
        Workflow,
        MessageSquare,
        Megaphone,
        FileText,
        CalendarCheck
    };
    const moduleIcons = {
        intro: Target,
        fundamentals: ClipboardList,
        brief6: Brackets,
        advanced: Wand2,
        templates: Mail,
        challenge: CalendarCheck
    };
    const categoryStyles = {
        Consultoría: 'badge-amber',
        Marketing: 'badge-rose',
        Negocios: 'badge-emerald',
        Servicio: 'badge-sky',
        Operaciones: 'badge-teal',
        Ventas: 'badge-violet',
        Legal: 'badge-slate',
        PR: 'badge-pink',
        Educación: 'badge-emerald',
        Comunicación: 'badge-sky',
        Aprendizaje: 'badge-amber',
        Hogar: 'badge-teal',
        Bienestar: 'badge-rose',
        Creatividad: 'badge-violet',
        Presentación: 'badge-pink',
        Finanzas: 'badge-slate'
    };

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="layout">
            <div className="bg-gradient"></div>

            {/* Sidebar */}
            <aside className="sidebar">
                <div onClick={() => setActiveModuleId('home')} style={{ cursor: 'pointer' }}>
                    <h1 className="sidebar-title">Taller 4ailabs</h1>
                </div>
                <nav className="flex-1">
                    <div
                        className={`nav-link ${activeModuleId === 'home' ? 'active' : ''} slide-in`}
                        onClick={() => setActiveModuleId('home')}
                    >
                        <Target size={18} />
                        <span>Bienvenida</span>
                    </div>
                    {workshopContent.modules.map((module, idx) => (
                        <div
                            key={module.id}
                            className={`nav-link ${activeModuleId === module.id ? 'active' : ''} slide-in`}
                            style={{ animationDelay: `${idx * 0.1}s` }}
                            onClick={() => setActiveModuleId(module.id)}
                        >
                            {(() => {
                                const ModuleIcon = moduleIcons[module.id] || BookOpen;
                                return <ModuleIcon size={18} />;
                            })()}
                            <span>{module.title}</span>
                        </div>
                    ))}
                    <div className="nav-link" onClick={() => setActiveModuleId('gallery')}>
                        <Search size={18} />
                        <span>Galería de instrucciones</span>
                    </div>
                </nav>

                <div className="sidebar-footer">
                    <div className="credit-item">
                        <User size={14} className="text-accent-primary" />
                        <span>Dr. Miguel Ojeda Rios</span>
                    </div>
                    <a href="tel:5579077726" className="credit-item hover:text-accent-secondary transition-colors">
                        <Phone size={14} className="text-accent-secondary" />
                        <span>55 79 07 7726</span>
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {activeModuleId === 'home' && (
                    <div className="fade-in home-section">
                        <div className="hero-content mb-12">
                            <span className="badge badge-amber mb-4">MÉXICO • 2026</span>
                            <h1 className="text-6xl font-black mb-6">Diseño de <br /><span className="text-accent-primary">Instrucciones</span> para IA</h1>
                            <p className="text-2xl text-secondary max-w-2xl leading-relaxed">
                                {workshopContent.welcome.text}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {workshopContent.welcome.highlights.map((highlight, i) => (
                                <div key={i} className="card concept-step slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Zap size={18} className="text-accent-primary" />
                                        <span className="font-bold text-sm uppercase tracking-wider text-accent-secondary">Beneficio</span>
                                    </div>
                                    <p className="text-secondary">{highlight}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 slide-in" style={{ animationDelay: '0.6s' }}>
                            <button
                                className="px-8 py-4 rounded-xl bg-accent-primary text-white font-bold flex items-center gap-2 hover:bg-accent-secondary transition-all transform hover:scale-105"
                                onClick={() => setActiveModuleId('intro')}
                            >
                                Comenzar Taller <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                )}

                {activeModuleId === 'gallery' ? (
                    <div className="fade-in">
                        <h2>Galería de instrucciones</h2>
                        <p>Explora una colección de instrucciones probadas para distintos casos de uso.</p>
                        <div className="card">
                            <input
                                type="text"
                                placeholder="Buscar instrucciones..."
                                className="prompt-box w-full bg-transparent border-none outline-none text-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {workshopContent.gallery.filter(item =>
                                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                item.prompt.toLowerCase().includes(searchTerm.toLowerCase())
                            ).map((item, idx) => (
                                <div key={idx} className="card scale-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                                    <span className={`badge ${categoryStyles[item.category] || 'badge-violet'}`}>{item.category}</span>
                                    <h3>{item.title}</h3>
                                    <div className="prompt-box">
                                        <code>{item.prompt}</code>
                                        <button
                                            className="copy-button"
                                            onClick={() => handleCopy(item.prompt, `gallery-${idx}`)}
                                        >
                                            {copiedId === `gallery-${idx}` ? <ClipboardCheck size={14} className="text-green-400" /> : <Copy size={14} />}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="fade-in" key={activeModule.id}>
                        <h1>{activeModule.title}</h1>
                        <p className="text-xl mb-8 opacity-80">{activeModule.goals.join(' • ')}</p>

                        {activeModule.content && activeModule.content.map((item, idx) => (
                            <div key={idx} className="mb-12">
                                {item.type === 'text' && (
                                    <div className="section-block slide-in">
                                        <p className="text-secondary leading-relaxed">{item.value}</p>
                                    </div>
                                )}

                                {item.type === 'section' && (
                                    <div className="section-block slide-in">
                                        <h3 className="flex items-center gap-2 mb-4">
                                            <div className="w-2 h-2 rounded-full bg-accent-primary" />
                                            {item.title}
                                        </h3>
                                        <p className="text-secondary leading-relaxed whitespace-pre-line">{item.text}</p>
                                    </div>
                                )}

                                {item.type === 'list' && (
                                    <div className="section-block slide-in">
                                        <h3 className="mb-6">{item.title}</h3>
                                        <div className="grid gap-4">
                                            {item.items.map((listItem, i) => (
                                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary font-bold">
                                                        {i + 1}
                                                    </div>
                                                    <p className="text-secondary">{listItem}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {item.type === 'comparison' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="card border-red-500/20">
                                            <h3 className="text-red-400 mb-4">{item.bad.title}</h3>
                                            <div className="prompt-box border-red-500/30">
                                                {item.bad.text}
                                            </div>
                                        </div>
                                        <div className="card border-green-500/20">
                                            <h3 className="text-green-400 mb-4">{item.good.title}</h3>
                                            <div className="prompt-box border-green-500/30">
                                                {item.good.text}
                                                <button className="copy-button" onClick={() => handleCopy(item.good.text, `comp-${idx}`)}>
                                                    {copiedId === `comp-${idx}` ? <ClipboardCheck size={14} className="text-green-400" /> : <Copy size={14} />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {item.type === 'formula' && (
                                    <div className="mb-20">
                                        <div className="concept-grid">
                                            {item.items.map((f, i) => (
                                                <div key={i} className="concept-step slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
                                                    <span className="step-number">{f.label}</span>
                                                    <h4 className="text-xl font-bold mb-2">{f.title || f.desc}</h4>
                                                    <p className="text-sm text-secondary leading-relaxed">{f.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {item.type === 'exercise' && (
                                    <div className="card exercise-card slide-in">
                                        <h3 className="flex items-center gap-4 text-accent-tertiary mb-6">
                                            <Lightbulb size={24} />
                                            {item.title}
                                        </h3>
                                        <p className="text-secondary mb-4 text-lg whitespace-pre-line">{item.instruction || item.description}</p>
                                    </div>
                                )}

                                {item.type === 'template' && (
                                    <div className="card scale-up">
                                        {(() => {
                                            const TemplateIcon = item.icon ? iconMap[item.icon] : null;
                                            return (
                                                <h3 className="flex items-center gap-4">
                                                    {TemplateIcon && <TemplateIcon size={18} className="text-accent-primary" />}
                                                    {item.title}
                                                </h3>
                                            );
                                        })()}
                                        <div className="prompt-box">
                                            <pre className="whitespace-pre-wrap font-mono text-sm">{item.prompt}</pre>
                                            <button className="copy-button" onClick={() => handleCopy(item.prompt, `temp-${idx}`)}>
                                                {copiedId === `temp-${idx}` ? <ClipboardCheck size={14} className="text-green-400" /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {activeModule.techniques && (
                            <div className="grid grid-cols-1 gap-8">
                                {activeModule.techniques.map((tech, idx) => (
                                    <div key={idx} className="card scale-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                                        {(() => {
                                            const TechIcon = tech.icon ? iconMap[tech.icon] : ChevronRight;
                                            return (
                                                <h3 className="flex items-center gap-4">
                                                    {TechIcon && <TechIcon size={18} className="text-accent-primary" />}
                                                    {tech.name}
                                                </h3>
                                            );
                                        })()}
                                        <p className="my-4">{tech.desc}</p>
                                        <div className="prompt-box">
                                            <code className="text-sm">{tech.prompt}</code>
                                            <button className="copy-button" onClick={() => handleCopy(tech.prompt, `tech-${idx}`)}>
                                                {copiedId === `tech-${idx}` ? <ClipboardCheck size={14} className="text-green-400" /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </main>

            <style jsx>{`
        h3 { 
          font-size: 1.25rem; 
          font-weight: 600; 
          margin-bottom: 1rem; 
          color: var(--accent-tertiary);
        }
        .text-accent-primary { color: var(--accent-primary); }
        .text-accent-secondary { color: var(--accent-secondary); }
      `}</style>
        </div>
    );
};

export default WorkshopUI;
