export const workshopContent = {
  title: "Taller de Diseño de Instrucciones para IA: Guía Clara y Práctica",
  subtitle: "Domina el arte de interactuar con IA • 4ailabs",
  company: "4ailabs",
  duration: "2 horas",
  welcome: {
    title: "BIENVENIDO",
    icon: "Target",
    text: "Este manual te guía paso a paso para escribir instrucciones (prompts) efectivas. Úsalo durante la clase y consúltalo cada vez que trabajes con IA.",
    highlights: [
      "Fórmula 4C para escribir mejores instrucciones",
      "8 técnicas avanzadas explicadas con ejemplos",
      "Plantillas listas para copiar y usar",
      "Lista de verificación para revisar tu instrucción",
      "Ejemplos con contexto de México",
      "Reto práctico de 7 días"
    ]
  },
  modules: [
    {
      id: "intro",
      title: "1. El Concepto Maestro",
      goals: [
        "Entender por qué el rol y el contexto explican gran parte del resultado",
        "Diferenciar entre una instrucción genérica y una profesional",
        "Ver cómo cambia la calidad de la respuesta con ejemplos en México"
      ],
      content: [
        {
          type: "text",
          value: "La calidad de la respuesta depende, en gran medida, del CONTEXTO y del ROL que le des a la IA. Piensa en la IA como un actor profesional: necesita saber qué personaje interpretar, en qué escena está y qué objetivo tiene."
        },
        {
          type: "text",
          value: "Idea clave: mientras más claro seas sobre quién eres, qué necesitas y cómo lo quieres, más útil será la respuesta."
        },
        {
          type: "text",
          value: "Una buena instrucción responde tres preguntas: ¿quién es la IA aquí?, ¿qué debe lograr? y ¿cómo quieres el resultado? Si esas tres cosas están claras, la respuesta mejora de inmediato."
        },
        {
          type: "comparison",
          title: "Impacto del Contexto",
          bad: {
            title: "Instrucción vaga (baja utilidad)",
            text: "Dame consejos para mi tarea"
          },
          good: {
            title: "Instrucción profesional (alta utilidad)",
            text: `Actúa como asesor de comunicación con experiencia en México.

Soy estudiante de preparatoria y necesito organizar un proyecto escolar. Mi equipo tiene 4 personas y faltan 10 días.
Queremos entregar un trabajo claro y bien presentado.

Dame 5 pasos concretos para organizar el trabajo, asignar tareas y cumplir a tiempo.`
          }
        },
        {
          type: "exercise",
          title: "Ejercicio: mejora una instrucción",
          instruction: "Toma una instrucción vaga de tu estudio, trabajo o casa (1 línea) y conviértela en una instrucción clara usando rol, contexto y objetivo. Escribe tu versión en 5 a 7 líneas."
        }
      ]
    },
    {
      id: "fundamentals",
      title: "2. La Fórmula 4C",
      goals: [
        "Dominar los 4 pilares: Contexto, Claridad, Criterios y Formato",
        "Estructurar instrucciones de alto impacto paso a paso",
        "Aplicar la fórmula en un caso real cercano"
      ],
      content: [
        {
          type: "text",
          value: "La fórmula 4C te ayuda a ordenar lo que la IA necesita para responder bien. Si falta una C, la respuesta suele perder precisión."
        },
        {
          type: "text",
          value: "Puedes pensar en las 4C como un checklist rápido antes de enviar tu instrucción. Te asegura que no estás dejando huecos importantes."
        },
        {
          type: "formula",
          title: "Las 4Cs de una Instrucción Clara",
          items: [
            { label: "1. CONTEXTO", title: "Entorno", desc: "¿Quién soy? Industria, reto y qué ya intenté." },
            { label: "2. CLARIDAD", title: "Objetivo", desc: "¿Qué quiero exactamente? Audiencia, propósito y plazo." },
            { label: "3. CRITERIOS", title: "Límites", desc: "Presupuesto, tono, longitud y qué evitar." },
            { label: "4. FORMATO", title: "Salida", desc: "¿Cómo quiero la respuesta? Tabla, viñetas, pasos, etc." }
          ]
        },
        {
          type: "template",
          title: "Ejemplo de Aplicación: Apoyo familiar",
          prompt: `[CONTEXTO] Soy terapeuta y doy sesiones a adolescentes. Quiero explicar a sus familias cómo apoyar el proceso en casa.
[CLARIDAD] Necesito una guía simple con 5 recomendaciones prácticas para mejorar la comunicación familiar esta semana.
[CRITERIOS] Lenguaje claro, sin tecnicismos, tono respetuoso y empático.
[FORMATO] Entrega en viñetas con ejemplos breves.`
        },
        {
          type: "exercise",
          title: "Ejercicio: completa las 4C",
          instruction: "Elige un problema real de tu estudio, trabajo o casa. Escribe tu instrucción usando las 4C y compártela con un compañero para retroalimentación."
        }
      ]
    },
    {
      id: "brief6",
      title: "3. Método BRIEF 6",
      goals: [
        "Convertir una tarea en una instrucción clara en menos de 1 minuto",
        "Usar un mini resumen para ordenar la información",
        "Generar un primer borrador útil y accionable"
      ],
      content: [
        {
          type: "text",
          value: "BRIEF 6 es un mini resumen en 6 partes. Es fácil de recordar y sirve para transformar una idea vaga en una instrucción clara."
        },
        {
          type: "text",
          value: "Úsalo cuando no sabes por dónde empezar. En menos de un minuto puedes ordenar contexto, objetivo y formato, y evitar respuestas genéricas."
        },
        {
          type: "formula",
          title: "BRIEF 6 (mini resumen en 6 partes)",
          items: [
            { label: "BASE", title: "Contexto", desc: "Quién eres, qué haces y qué está pasando." },
            { label: "ROL", title: "Persona", desc: "Actúa como [experto] con el perfil adecuado." },
            { label: "INTENCIÓN", title: "Meta", desc: "Objetivo concreto y medible." },
            { label: "ENTREGABLE", title: "Resultado", desc: "Qué debe entregarte la IA." },
            { label: "FILTROS", title: "Estilo", desc: "Tono, longitud, estilo y qué evitar." },
            { label: "ESTRUCTURA", title: "Formato", desc: "Tabla, pasos, versiones o ejemplos." }
          ]
        },
        {
          type: "template",
          title: "Plantilla BRIEF 6",
          icon: "ClipboardList",
          prompt: `Actúa como [ROL] con experiencia en [AREA].

Base: [quién soy + contexto].
Intención: [objetivo concreto].
Entregable: [qué necesito exactamente].
Filtros: [tono, longitud, estilo, qué incluir/evitar].
Estructura: [tabla/pasos/3 versiones/ejemplos].`
        },
        {
          type: "exercise",
          title: "Ejercicio: crea tu instrucción con BRIEF 6",
          instruction: "Elige una tarea real. Escribe una instrucción con BRIEF 6 y pruébala en la IA. Luego mejora 1 elemento (rol, filtros o formato)."
        }
      ]
    },
    {
      id: "advanced",
      title: "4. Ocho técnicas avanzadas",
      goals: [
        "Aplicar roles para cambiar el tipo de respuesta",
        "Usar ejemplos y delimitadores para enseñar el patrón",
        "Pedir salidas estructuradas y conclusiones claras",
        "Encadenar instrucciones e iterar para mejorar"
      ],
      content: [
        {
          type: "text",
          value: "No necesitas usar todas las técnicas a la vez. Elige 1 o 2 según la tarea y el tipo de salida que buscas."
        },
        {
          type: "text",
          value: "Piensa en estas técnicas como herramientas. Si necesitas claridad, usa formato o delimitadores. Si necesitas creatividad, usa restricciones o variaciones."
        },
        {
          type: "text",
          value: "Terminología internacional: cuando no das ejemplos, se llama Zero-shot Prompting. Cuando das ejemplos, se llama Few-shot Prompting. El razonamiento guiado suele llamarse Chain-of-Thought (CoT)."
        },
        {
          type: "exercise",
          title: "Ejercicio: compara técnicas",
          instruction: "Elige una tarea real y escribe dos instrucciones distintas: una con delimitadores y otra con salida estructurada. Compara cuál da una respuesta más clara."
        }
      ],
      techniques: [
        {
          name: "Técnica 1: Role Prompting (Asignación de rol)",
          icon: "Theater",
          desc: "Define un rol experto para ajustar perspectiva y profundidad.",
          prompt: "Actúa como profesor de secundaria con experiencia en explicar temas complejos de forma simple. Explícame [tema] con un ejemplo de la vida diaria."
        },
        {
          name: "Técnica 2: Few-shot Prompting (Aprendizaje con ejemplos)",
          icon: "Copy",
          desc: "Muestra 2-3 ejemplos de entrada/salida para enseñar el patrón.",
          prompt: `Transforma ideas en mensajes claros para WhatsApp.
Ejemplo 1: [Necesito una cita médica] -> [Hola, ¿tienen disponibilidad esta semana?]
Ejemplo 2: [Aviso tarea] -> [Recuerda entregar la tarea de ciencias mañana.]
Ahora transforma este: [Tu idea]`
        },
        {
          name: "Técnica 3: Delimiter-based Prompting (Delimitadores y secciones)",
          icon: "Brackets",
          desc: "Separa contexto, tarea y formato con títulos o etiquetas (###, <contexto>).",
          prompt: `### CONTEXTO
Soy estudiante de preparatoria y debo estudiar para un examen de biología.
### TAREA
Propón un plan de estudio de 5 días con metas diarias.
### FORMATO
Entrega en una tabla con: Día, Tema, Actividad, Tiempo.`
        },
        {
          name: "Técnica 4: Structured Output (Salida estructurada)",
          icon: "ClipboardList",
          desc: "Define una estructura fija para facilitar lectura y evaluación.",
          prompt: "Resume este texto sobre [Tema]. Entrega en 4 campos: Idea central, 3 puntos clave, 2 dudas y 3 acciones."
        },
        {
          name: "Técnica 5: Chain-of-Thought (CoT)",
          icon: "Brain",
          desc: "Pide análisis interno y conclusiones claras sin mostrar el razonamiento completo.",
          prompt: "Tengo que decidir si tomar clases extra o estudiar en casa. Analiza pros y contras y entrega una recomendación final en viñetas."
        },
        {
          name: "Técnica 6: Prompt Chaining (Encadenamiento de instrucciones)",
          icon: "Workflow",
          desc: "Divide el problema en pasos y usa cada salida como insumo.",
          prompt: "Paso 1: Identifica 3 causas de estrés en estudiantes. Paso 2: Propón 3 soluciones por causa. Paso 3: Elige las 2 mejores y justifica en 3 viñetas."
        },
        {
          name: "Técnica 7: Iterative Refinement (Iteración y revisión)",
          icon: "Repeat",
          desc: "Genera una primera versión, revisa con criterios y mejora.",
          prompt: "Redacta un mensaje para pedir una cita médica. Luego revisa con esta lista: claridad, respeto, brevedad. Entrega la versión final."
        },
        {
          name: "Técnica 8: Constraint Prompting (Restricciones creativas)",
          icon: "Wand2",
          desc: "Más restricciones dan respuestas más útiles. Define límites claros.",
          prompt: "Dame ideas para un proyecto escolar con presupuesto máximo $500 pesos, realizable en 1 semana, sin términos en inglés y en formato tabla."
        }
      ]
    },
    {
      id: "templates",
      title: "5. Plantillas maestras",
      goals: [
        "Usar plantillas listas para correo, análisis, lluvia de ideas y aprendizaje",
        "Personalizar rápido para tu trabajo o negocio"
      ],
      content: [
        {
          type: "text",
          value: "Estas plantillas son un punto de partida. Cambia los campos entre corchetes por tu caso y ajusta el tono."
        },
        {
          type: "text",
          value: "Si una plantilla no funciona perfecto, úsala como base y aplica BRIEF 6 para hacerla más específica."
        },
        {
          type: "template",
          title: "Correo o mensaje formal",
          icon: "Mail",
          prompt: `Actúa como redactor claro y respetuoso. 
Escribe un correo o mensaje formal de seguimiento. 
Contexto: [Situación]. Destinatario: [Docente/Paciente/Cliente/Familia]. Objetivo: [Meta]. 
Tono: Respetuoso y accesible. 
Dame 3 versiones (directa, cordial, intermedia).`
        },
        {
          type: "template",
          title: "Lluvia de ideas",
          icon: "Lightbulb",
          prompt: `Actúa como consultor creativo. 
Necesito ideas para [Problema] (escuela, trabajo, hogar o proyecto creativo). 
Restricciones: [Presupuesto/Plazo/Recursos]. 
Formato: 10 ideas ordenadas por complejidad, con costo estimado y riesgo.`
        },
        {
          type: "template",
          title: "Aprendizaje Acelerado (5 Niveles)",
          icon: "GraduationCap",
          prompt: `Explícame [Concepto]. 
Nivel 1: Explicación para niños con analogía de la vida diaria. 
Nivel 2: Definición técnica. 
Nivel 3: Ejemplo práctico en mi contexto (estudio, trabajo u hogar). 
Nivel 4: Errores comunes. 
Nivel 5: Profundización.`
        },
        {
          type: "exercise",
          title: "Ejercicio: personaliza una plantilla",
          instruction: "Elige una plantilla y rellena todos los campos con un caso real. Compárala con la versión de un compañero y mejora la tuya."
        }
      ]
    },
    {
      id: "challenge",
      title: "6. Reto de 7 días",
      goals: [
        "Crear el hábito de uso diario",
        "Dominar una técnica por día",
        "Ver resultados reales en una semana"
      ],
      content: [
        {
          type: "text",
          value: "El progreso real aparece con la práctica. Este reto te ayuda a convertir la teoría en hábito."
        },
        {
          type: "text",
          value: "El objetivo no es hacerlo perfecto, sino hacerlo constante. Un pequeño ajuste diario mejora mucho tu forma de pedirle cosas a la IA."
        },
        {
          type: "text",
          value: "Instrucción general: cada día escribe una instrucción, ejecútala en la IA y guarda el resultado. Al final, compara tu día 1 con tu día 7."
        },
        {
          type: "text",
          value: "Día 1: Rol y contexto (describe quién eres y qué necesitas). Día 2: Fórmula 4C (usa las 4C completas). Día 3: Ejemplos (usa 2 ejemplos de entrada/salida). Día 4: Paso a paso (divide en 3 pasos). Día 5: Iteración (mejora con 2 rondas). Día 6: Restricciones (define límites claros). Día 7: Combinación total (mezcla 4C + formato + restricciones)."
        },
        {
          type: "exercise",
          title: "Tu Misión",
          instruction: "Cada día:\n1) Escribe una instrucción con el tema del día.\n2) Pruébala en la IA.\n3) Guarda la respuesta.\nAl final del día 7, compara tu día 1 vs día 7 y anota 3 mejoras."
        }
      ]
    }
  ],
  gallery: [
    {
      title: "Plan de estudio claro",
      category: "Educación",
      prompt: "Actúa como tutor paciente. Tengo examen de [Materia] el [Fecha]. Tengo [X] horas por día. Dame un plan de 7 días con temas y actividades. Formato: Día | Tema | Actividad | Tiempo."
    },
    {
      title: "Mensaje formal breve",
      category: "Comunicación",
      prompt: "Actúa como redactor claro y respetuoso. Escribe un mensaje formal para [Docente/Paciente/Cliente/Familia] sobre [Motivo]. Máximo 120 palabras, termina con un llamado a la acción."
    },
    {
      title: "Resumen útil de clase o consulta",
      category: "Aprendizaje",
      prompt: "Actúa como asistente. Resume este texto o transcripción. Entrega: idea central (1 línea), 5 puntos clave y 3 acciones siguientes."
    },
    {
      title: "Organización del hogar semanal",
      category: "Hogar",
      prompt: "Actúa como organizador del hogar. Necesito un plan semanal de limpieza y cocina para [n] personas. Tiempo disponible: [X] horas. Entrega tabla con día y tareas."
    },
    {
      title: "Rutina de bienestar simple",
      category: "Bienestar",
      prompt: "Actúa como guía de bienestar. Crea una rutina sencilla de 7 días para mejorar energía y descanso. Condiciones: sin equipo, 15 minutos al día. Formato lista diaria."
    },
    {
      title: "Ideas creativas para proyecto",
      category: "Creatividad",
      prompt: "Actúa como creativo. Dame 10 ideas para [cuento/cómic/proyecto artístico] con un giro original y un título."
    },
    {
      title: "Presentación breve de proyecto",
      category: "Presentación",
      prompt: "Actúa como coach de presentaciones. Ayúdame a preparar una presentación de 2 minutos sobre [Tema]. Entrega: guion + 3 puntos clave + cierre."
    },
    {
      title: "Presupuesto sencillo",
      category: "Finanzas",
      prompt: "Actúa como asesor de presupuesto. Ayúdame a organizar mis gastos mensuales con ingreso [X]. Entrega tabla: categoría, monto sugerido y un consejo de ahorro."
    }
  ]
};
