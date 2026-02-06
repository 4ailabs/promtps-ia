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
        Target, Mail, Lightbulb, GraduationCap, Theater, Brain, Repeat,
        Wand2, Copy, Brackets, ClipboardList, Workflow, MessageSquare,
        Megaphone, FileText, CalendarCheck
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
        Consultoría: 'badge-amber', Marketing: 'badge-rose', Negocios: 'badge-emerald',
        Servicio: 'badge-sky', Operaciones: 'badge-teal', Ventas: 'badge-violet',
        Legal: 'badge-slate', PR: 'badge-pink', Educación: 'badge-emerald',
        Comunicación: 'badge-sky', Aprendizaje: 'badge-amber', Hogar: 'badge-teal',
        Bienestar: 'badge-rose', Creatividad: 'badge-violet', Presentación: 'badge-pink',
        Finanzas: 'badge-slate'
    };

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="layout-root">
            <div className="bg-gradient"></div>

            {activeModuleId === 'home' ? (
                /* Independent Landing Page */
                <div className="landing-wrapper fade-in">
                    <div className="landing-container">
                        <div className="hero-content text-center mb-20">
                            <h1 className="brand-title mb-4">4ailabs</h1>
                            <h2 className="landing-subtitle mx-auto mb-12">
                                Diseño de Instrucciones para IA
                            </h2>
                            <p className="text-secondary max-w-xl mx-auto mb-16">
                                {workshopContent.welcome.text}
                            </p>

                            <div className="flex justify-center slide-in" style={{ animationDelay: '0.6s' }}>
                                <button
                                    className="start-button mt-8"
                                    onClick={() => setActiveModuleId('intro')}
                                >
                                    Comenzar Taller <ArrowRight size={22} />
                                </button>
                            </div>
                        </div>

                        <div className="highlight-list mb-20">
                            {workshopContent.welcome.highlights.slice(0, 3).map((highlight, i) => (
                                <div key={i} className="highlight-item slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
                                    <Zap size={18} className="text-accent-primary" />
                                    <p className="text-sm text-secondary leading-relaxed">{highlight}</p>
                                </div>
                            ))}
                        </div>

                        <footer className="landing-footer">
                            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-6">
                                <div className="credit-item">
                                    <User size={18} className="text-accent-primary" />
                                    <span className="font-medium">Dr. Miguel Ojeda Rios</span>
                                </div>
                                <a href="tel:5579077726" className="credit-item hover:text-accent-secondary transition-all">
                                    <Phone size={18} className="text-accent-secondary" />
                                    <span className="font-medium">55 79 07 7726</span>
                                </a>
                            </div>
                            <div className="text-xs uppercase tracking-[0.3em] opacity-40">4ailabs • Advanced Prompt Engineering</div>
                        </footer>
                    </div>
                </div>
            ) : (
                /* Workshop Interface with Sidebar */
                <div className="workshop-layout">
                    <aside className="sidebar">
                        <div className="sidebar-header" onClick={() => setActiveModuleId('home')}>
                            <h1 className="sidebar-title">Taller 4ailabs</h1>
                        </div>

                        <nav className="sidebar-nav">
                            <div
                                className={`nav-link ${activeModuleId === 'home' ? 'active' : ''}`}
                                onClick={() => setActiveModuleId('home')}
                            >
                                <Target size={18} />
                                <span>Bienvenida</span>
                            </div>

                            <div className="nav-separator">CONTENIDO</div>

                            {workshopContent.modules.map((module, idx) => (
                                <div
                                    key={module.id}
                                    className={`nav-link ${activeModuleId === module.id ? 'active' : ''}`}
                                    onClick={() => setActiveModuleId(module.id)}
                                >
                                    {(() => {
                                        const ModuleIcon = moduleIcons[module.id] || BookOpen;
                                        return <ModuleIcon size={18} />;
                                    })()}
                                    <span>{module.title}</span>
                                </div>
                            ))}

                            <div className="nav-separator">RECURSOS</div>

                            <div
                                className={`nav-link ${activeModuleId === 'gallery' ? 'active' : ''}`}
                                onClick={() => setActiveModuleId('gallery')}
                            >
                                <Search size={18} />
                                <span>Galería de instrucciones</span>
                            </div>
                        </nav>

                        <div className="sidebar-footer">
                            <div className="credit-item mb-2">
                                <User size={14} className="text-accent-primary" />
                                <span>Dr. Miguel Ojeda Rios</span>
                            </div>
                            <a href="tel:5579077726" className="credit-item hover:text-accent-secondary transition-colors">
                                <Phone size={14} className="text-accent-secondary" />
                                <span>55 79 07 7726</span>
                            </a>
                        </div>
                    </aside>

                    <main className="main-content">
                        {activeModuleId === 'gallery' ? (
                            <div className="fade-in">
                                <h1 className="mb-4 text-4xl">Galería de instrucciones</h1>
                                <p className="text-xl mb-12 text-secondary">Explora una colección de instrucciones probadas para distintos casos de uso.</p>

                                <div className="search-container mb-12">
                                    <input
                                        type="text"
                                        placeholder="Buscar instrucciones por cargo, tarea o contenido..."
                                        className="search-input"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Search className="search-icon" size={20} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {workshopContent.gallery.filter(item =>
                                        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        item.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        item.category.toLowerCase().includes(searchTerm.toLowerCase())
                                    ).map((item, idx) => (
                                        <div key={idx} className="card gallery-card scale-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                                            <span className={`badge ${categoryStyles[item.category] || 'badge-violet'}`}>{item.category}</span>
                                            <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
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
                                <div className="module-header mb-12">
                                    <h1 className="mb-4">{activeModule.title}</h1>
                                    <div className="flex flex-wrap gap-3">
                                        {activeModule.goals.map((goal, i) => (
                                            <span key={i} className="goal-tag">
                                                {goal}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {activeModule.id === 'intro' && (
                                    <div className="video-section mb-16 slide-in">
                                        <div className="video-container shadow-2xl">
                                            <iframe
                                                src="https://customer-qhobzy75u1p8j3tq.cloudflarestream.com/0a9ba9fd6759494a818f8bdd030390bf/iframe?poster=https%3A%2F%2Fcustomer-qhobzy75u1p8j3tq.cloudflarestream.com%2F0a9ba9fd6759494a818f8bdd030390bf%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                                loading="lazy"
                                                className="absolute top-0 left-0 w-full h-full border-none rounded-2xl"
                                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                                allowFullScreen={true}
                                            ></iframe>
                                        </div>
                                    </div>
                                )}

                                {activeModule.content && activeModule.content.map((item, idx) => (
                                    <div key={idx} className="content-item mb-16">
                                        {item.type === 'text' && (
                                            <div className="section-block slide-in">
                                                <p className="text-secondary leading-relaxed text-lg">{item.value}</p>
                                            </div>
                                        )}

                                        {item.type === 'section' && (
                                            <div className="section-block slide-in">
                                                <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold text-accent-tertiary">
                                                    <div className="w-1.5 h-6 rounded-full bg-accent-primary" />
                                                    {item.title}
                                                </h3>
                                                <p className="text-secondary leading-relaxed whitespace-pre-line text-lg">{item.text}</p>
                                            </div>
                                        )}

                                        {item.type === 'list' && (
                                            <div className="section-block slide-in">
                                                <h3 className="mb-8 text-xl font-bold">{item.title}</h3>
                                                <div className="grid gap-5">
                                                    {item.items.map((listItem, i) => (
                                                        <div key={i} className="list-item-card">
                                                            <div className="list-number">
                                                                {i + 1}
                                                            </div>
                                                            <p className="text-secondary text-lg">{listItem}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {item.type === 'comparison' && (
                                            <div className="comparison-grid mt-8">
                                                <div className="card comparison-card bad border-red-500/10">
                                                    <div className="vs-badge vs-bad mb-4">INCORRECTO</div>
                                                    <h4 className="text-red-400 mb-4 font-bold">{item.bad.title}</h4>
                                                    <div className="prompt-box prompt-box-small">
                                                        {item.bad.text}
                                                    </div>
                                                </div>
                                                <div className="card comparison-card good border-green-500/10">
                                                    <div className="vs-badge vs-good mb-4">CORRECTO</div>
                                                    <h4 className="text-green-400 mb-4 font-bold">{item.good.title}</h4>
                                                    <div className="prompt-box prompt-box-small relative">
                                                        {item.good.text}
                                                        <button className="copy-button" onClick={() => handleCopy(item.good.text, `comp-${idx}`)}>
                                                            {copiedId === `comp-${idx}` ? <ClipboardCheck size={14} className="text-green-400" /> : <Copy size={14} />}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {item.type === 'formula' && (
                                            <div className="formula-section my-16">
                                                <div className="concept-grid">
                                                    {item.items.map((f, i) => (
                                                        <div key={i} className="concept-step slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
                                                            <span className="step-number">{f.label}</span>
                                                            <h4 className="text-xl font-bold mb-3">{f.title || f.desc}</h4>
                                                            <p className="text-secondary leading-relaxed">{f.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {item.type === 'exercise' && (
                                            <div className="card exercise-card slide-in">
                                                <div className="flex items-center gap-4 text-accent-tertiary mb-6">
                                                    <div className="p-3 rounded-xl bg-accent-tertiary/10">
                                                        <Lightbulb size={28} />
                                                    </div>
                                                    <h3 className="m-0 text-2xl font-bold">{item.title}</h3>
                                                </div>
                                                <p className="text-secondary text-xl leading-relaxed whitespace-pre-line italic opacity-90">{item.instruction || item.description}</p>
                                            </div>
                                        )}

                                        {item.type === 'template' && (
                                            <div className="card template-card scale-up border-accent-primary/20">
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary">
                                                        {(() => {
                                                            const TemplateIcon = item.icon ? iconMap[item.icon] : FileText;
                                                            return <TemplateIcon size={24} />;
                                                        })()}
                                                    </div>
                                                    <h3 className="m-0 text-2xl font-bold">{item.title}</h3>
                                                </div>
                                                <div className="prompt-box prompt-box-large">
                                                    <pre className="whitespace-pre-wrap font-mono text-base">{item.prompt}</pre>
                                                    <button className="copy-button copy-button-large" onClick={() => handleCopy(item.prompt, `temp-${idx}`)}>
                                                        {copiedId === `temp-${idx}` ? <ClipboardCheck size={18} className="text-green-400" /> : <Copy size={18} />}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {activeModule.techniques && (
                                    <div className="techniques-grid mt-12">
                                        {activeModule.techniques.map((tech, idx) => (
                                            <div key={idx} className="card technique-card scale-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="p-2.5 rounded-lg bg-accent-primary/10 text-accent-primary">
                                                        {(() => {
                                                            const TechIcon = tech.icon ? iconMap[tech.icon] : ChevronRight;
                                                            return <TechIcon size={20} />;
                                                        })()}
                                                    </div>
                                                    <h3 className="m-0 text-xl font-bold">{tech.name}</h3>
                                                </div>
                                                <p className="text-secondary mb-6 leading-relaxed">{tech.desc}</p>
                                                <div className="prompt-box relative">
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
                </div>
            )}
        </div>
    );
};

export default WorkshopUI;
