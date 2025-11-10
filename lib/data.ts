
import { Service, Post, Expert, Testimonial, Author } from '../types';

// --- AUTHORS DATA ---
const authors: Author[] = [
  {
    slug: 'dr-alejandro-vargas',
    name: 'Dr. Alejandro Vargas',
    role: 'Fisioterapeuta Jefe',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-7003507965b6?q=80&w=400&auto=format&fit=crop',
    shortBio: 'Con más de 15 años de experiencia, Alejandro es reconocido por sus análisis profundos y técnicas que combinan expertise profesional con pasión genuina.',
    bio: `Alejandro Vargas se graduó con honores en Fisioterapia por la Universidad Complutense de Madrid en 2008, justo en un momento en que el enfoque de la recuperación funcional comenzaba a revolucionarse. Su pasión por el deporte lo llevó a especializarse en Fisioterapia Deportiva, completando un Máster en Readaptación de Lesiones que le proporcionó las herramientas para trabajar con atletas de élite.

Durante sus primeros años en la Clínica CEMTRO, se especializó en el tratamiento de lesiones de rodilla y hombro, siendo pionero en la aplicación de técnicas de ecografía musculoesquelética para el diagnóstico y seguimiento de lesiones. Sus protocolos de recuperación para ligamento cruzado anterior (LCA) le valieron el reconocimiento de la comunidad médica.

En 2015, fundó su propio canal de divulgación en YouTube, "Fisio al Día", que rápidamente se convirtió en un referente para pacientes y profesionales. Su habilidad para explicar conceptos complejos de forma clara y accesible le ha permitido construir una comunidad de más de 200.000 suscriptores.

Actualmente, además de su rol como Fisioterapeuta Jefe en LUMENA, Alejandro colabora con el Comité Olímpico Español y es consultor para varios clubes de fútbol de primera división. Su expertise abarca desde la prevención de lesiones en deportistas de alto rendimiento hasta la rehabilitación postquirúrgica, siempre con un enfoque basado en la evidencia científica y la innovación.`,
    specialties: ['Fisioterapia Deportiva', 'Terapia Manual', 'Rehabilitación Postquirúrgica', 'Punción Seca', 'Readaptación de Lesiones', 'Ecografía Musculoesquelética'],
    availability: [
      'Consultoría técnica',
      'Charlas y ponencias',
      'Artículos patrocinados',
      'Formación a equipos',
      'Análisis de producto',
    ],
    externalPublications: [
      { title: 'El mejor SUV chino 2025: ¿Cuál elegir?', url: '#', source: 'Motor.es' },
      { title: '¿Cuál es el mejor SUV eléctrico en 2025?', url: '#', source: 'Autopista' },
      { title: '¿Cuál es el mejor coche eléctrico para ciudad en 2025?', url: '#', source: 'Car and Driver' },
      { title: 'El mejor coche del segmento C en 2025', url: '#', source: 'Coches.net' },
      { title: '¿Cuáles son los 5 mejores coches calidad-precio de 2025?', url: '#', source: 'YouTube' },
    ],
    socials: {
      instagram: '#',
      x: '#',
      tiktok: '#',
      facebook: '#',
      linkedin: '#',
      email: 'mailto:alejandro.vargas@lumena.health'
    },
  },
  {
    slug: 'dra-isabel-rios',
    name: 'Dra. Isabel Rios',
    role: 'Nutricionista Deportiva',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
    shortBio: 'Apasionada por la nutrición y el rendimiento. Ayudo a las personas a alcanzar sus metas a través de una alimentación inteligente y sostenible.',
    bio: 'Isabel es una nutricionista-dietista con una profunda especialización en nutrición deportiva y clínica. Su enfoque se basa en la ciencia para crear planes alimenticios personalizados que optimizan el rendimiento, aceleran la recuperación y promueven un estilo de vida saludable y sostenible. Colabora con atletas de diversas disciplinas para ayudarles a alcanzar su máximo potencial.',
    specialties: ['Nutrición Deportiva', 'Pérdida de Peso', 'Dietoterapia'],
    availability: ['Consultas online', 'Planes nutricionales'],
    externalPublications: [],
    socials: { linkedin: '#', email: 'mailto:isabel.rios@lumena.health' },
  },
  {
    slug: 'dr-carlos-mendoza',
    name: 'Dr. Carlos Mendoza',
    role: 'Odontólogo Senior',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da60710?q=80&w=400&auto=format&fit=crop',
    shortBio: 'Experto en estética dental y salud bucal integral. Mi objetivo es diseñar sonrisas saludables que duren toda la vida.',
    bio: 'Carlos es un odontólogo con más de 20 años de experiencia, especializado en odontología estética y restauradora. Su filosofía se centra en combinar el arte y la ciencia para crear sonrisas naturales y funcionales. Es un miembro activo de la Sociedad Española de Prótesis Estomatológica y Estética (SEPES) y un conferenciante habitual en congresos nacionales.',
    specialties: ['Estética Dental', 'Implantes', 'Ortodoncia Invisible'],
    availability: ['Diseño de sonrisa', 'Consultas'],
    externalPublications: [],
    socials: { linkedin: '#', email: 'mailto:carlos.mendoza@lumena.health' },
  },
  {
    slug: 'dra-laura-fernandez',
    name: 'Dra. Laura Fernández',
    role: 'Ginecóloga Especialista',
    imageUrl: 'https://images.unsplash.com/photo-1582750421881-542648584380?q=80&w=400&auto=format&fit=crop',
    shortBio: 'Comprometida con la salud de la mujer en todas las etapas de la vida, con un enfoque en la prevención y el cuidado integral.',
    bio: 'Laura ofrece un cuidado ginecológico compasivo y basado en la evidencia. Su práctica abarca desde la adolescencia hasta la menopausia, con un interés especial en la planificación familiar y el seguimiento de embarazos. Cree firmemente en empoderar a sus pacientes a través de la educación para que tomen decisiones informadas sobre su salud.',
    specialties: ['Obstetricia', 'Planificación Familiar', 'Salud Menopáusica'],
    availability: ['Seguimiento de embarazo', 'Consultas ginecológicas'],
    externalPublications: [],
    socials: { email: 'mailto:laura.fernandez@lumena.health' },
  },
  {
    slug: 'lic-ana-torres',
    name: 'Lic. Ana Torres',
    role: 'Psicóloga Clínica',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    shortBio: 'Ofrezco un espacio seguro para el crecimiento personal y el bienestar emocional, utilizando terapias basadas en la evidencia.',
    bio: 'Ana es una psicóloga clínica con especialización en Terapia Cognitivo-Conductual (TCC) y Mindfulness. Su objetivo es proporcionar a sus pacientes herramientas prácticas para manejar la ansiedad, el estrés y la depresión. Crea un ambiente terapéutico cálido y sin prejuicios, fomentando la autocompasión y el crecimiento personal.',
    specialties: ['Terapia Cognitivo-Conductual', 'Mindfulness', 'Ansiedad y Estrés'],
    availability: ['Terapia individual', 'Talleres grupales'],
    externalPublications: [],
    socials: { x: '#', email: 'mailto:ana.torres@lumena.health' },
  }
];


// --- SERVICES DATA ---
const services: Service[] = [
  {
    slug: 'odontologia',
    title: 'Odontología General y Estética',
    shortDescription: 'Salud bucal completa, desde revisiones hasta diseños de sonrisa.',
    longDescription: 'Ofrecemos un servicio odontológico integral que cubre todas tus necesidades, desde limpiezas y empastes hasta tratamientos estéticos avanzados como blanqueamiento dental y carillas. Nuestro objetivo es asegurar tu salud bucal y darte una sonrisa de la que te sientas orgulloso.',
    imageUrl: 'https://picsum.photos/seed/dentist/600/400',
  },
  {
    slug: 'ginecologia',
    title: 'Ginecología y Obstetricia',
    shortDescription: 'Cuidado integral de la salud femenina en todas las etapas de la vida.',
    longDescription: 'Acompañamos a la mujer en todas las fases de su vida, ofreciendo desde revisiones ginecológicas rutinarias y planificación familiar hasta seguimiento del embarazo y atención en la menopausia. Nuestro equipo se enfoca en un cuidado cercano y respetuoso.',
    imageUrl: 'https://picsum.photos/seed/gynecology/600/400',
  },
  {
    slug: 'psicologia',
    title: 'Psicología Clínica',
    shortDescription: 'Apoyo para tu bienestar emocional y salud mental.',
    longDescription: 'Ofrecemos terapia individual para adultos y adolescentes, abordando problemas como la ansiedad, la depresión, el estrés y las dificultades relacionales. Nuestro enfoque es crear un espacio seguro y de confianza para ayudarte a encontrar el equilibrio.',
    imageUrl: 'https://picsum.photos/seed/psychology/600/400',
  },
  {
    slug: 'fisioterapia-deportiva',
    title: 'Fisioterapia Deportiva',
    shortDescription: 'Recuperación y prevención de lesiones para atletas de todos los niveles.',
    longDescription: 'Nuestra fisioterapia deportiva está diseñada para ayudar a los atletas a recuperarse de lesiones, mejorar el rendimiento y prevenir futuras dolencias. Utilizamos técnicas avanzadas de terapia manual, ejercicios de rehabilitación y tecnología de vanguardia para asegurar una vuelta segura y rápida a la actividad física. Cada plan de tratamiento es personalizado para satisfacer las necesidades específicas del deportista y su disciplina.',
    imageUrl: 'https://picsum.photos/seed/sports/600/400',
    relatedServices: ['terapia-manual', 'rehabilitacion-neurologica'],
  },
  {
    slug: 'terapia-manual',
    title: 'Terapia Manual Ortopédica',
    shortDescription: 'Tratamiento especializado para dolencias musculoesqueléticas.',
    longDescription: 'La terapia manual ortopédica se enfoca en el diagnóstico y tratamiento de afecciones neuromusculoesqueléticas. A través de movilizaciones articulares, manipulaciones y técnicas de tejido blando, nuestros especialistas alivian el dolor, restauran la movilidad y mejoran la función. Es un tratamiento efectivo para problemas de espalda, cuello, articulaciones y más.',
    imageUrl: 'https://picsum.photos/seed/manual/600/400',
    relatedServices: ['fisioterapia-deportiva', 'rehabilitacion-postquirurgica'],
  },
  {
    slug: 'rehabilitacion-neurologica',
    title: 'Rehabilitación Neurológica',
    shortDescription: 'Apoyo a pacientes con condiciones neurológicas para mejorar su calidad de vida.',
    longDescription: 'Ofrecemos programas de rehabilitación para pacientes que han sufrido un accidente cerebrovascular, lesión cerebral traumática, esclerosis múltiple, Parkinson y otras condiciones neurológicas. Nuestro equipo multidisciplinario trabaja para maximizar la independencia funcional, mejorar la movilidad, el equilibrio y las habilidades cognitivas.',
    imageUrl: 'https://picsum.photos/seed/neuro/600/400',
  },
  {
    slug: 'rehabilitacion-postquirurgica',
    title: 'Rehabilitación Postquirúrgica',
    shortDescription: 'Programas personalizados para una recuperación óptima tras una cirugía.',
    longDescription: 'Una rehabilitación adecuada es crucial después de una cirugía ortopédica. Nuestros fisioterapeutas colaboran estrechamente con su cirujano para desarrollar un plan de recuperación que le ayude a recuperar fuerza, movilidad y función de manera segura y eficaz, minimizando el dolor y el riesgo de complicaciones.',
    imageUrl: 'https://picsum.photos/seed/surgery/600/400',
    relatedServices: ['terapia-manual'],
  },
];

// --- BLOG POSTS DATA ---
const posts: Omit<Post, 'author' | 'readingTime'>[] = [
  {
    slug: '5-ejercicios-para-aliviar-dolor-espalda',
    title: '5 Ejercicios para Aliviar el Dolor de Espalda en Casa',
    excerpt: 'El dolor de espalda es una de las dolencias más comunes. Descubre 5 simples ejercicios que puedes hacer en casa para encontrar alivio.',
    content: `El dolor de espalda afecta a millones de personas. El sedentarismo y las malas posturas son causas frecuentes. Afortunadamente, ciertos ejercicios pueden ofrecer un gran alivio.

## Estiramientos Suaves

Aquí tienes una rutina simple para empezar.

### 1. Estiramiento de rodilla al pecho
Acostado boca arriba, lleva una rodilla hacia tu pecho, sosteniéndola con ambas manos. Mantén por 20-30 segundos y cambia de pierna.

### 2. Postura del gato-vaca
En cuatro patas, arquea la espalda hacia arriba (gato) y luego hacia abajo (vaca). Repite 10 veces de forma fluida.

## Fortalecimiento del Core

Un core fuerte es esencial para proteger tu espalda.

### 3. Puente de glúteos
Acostado boca arriba con las rodillas dobladas, levanta las caderas del suelo hasta que tu cuerpo forme una línea recta desde los hombros hasta las rodillas.

### 4. Plancha
Mantén una posición de plancha por 20-30 segundos para fortalecer el core, lo cual es vital para el soporte de la espalda.

## Conclusión

Realiza estos ejercicios con suavidad y sin causar dolor. Si el dolor persiste, consulta a un profesional.`,
    authorSlug: 'dr-alejandro-vargas',
    date: '15 de Julio, 2024',
    imageUrl: 'https://picsum.photos/seed/backpain/1200/675',
    category: 'Fisioterapia',
  },
  {
    slug: 'importancia-hidratacion-rendimiento',
    title: 'La Importancia de la Hidratación en el Rendimiento Deportivo',
    excerpt: 'El agua es esencial para la vida y más aún para los atletas. Aprende cómo una correcta hidratación puede potenciar tu rendimiento.',
    content: `## El Motor Invisible
    La hidratación es uno de los pilares del rendimiento deportivo, aunque a menudo se subestima. El agua regula la temperatura corporal, lubrica las articulaciones y transporta nutrientes para dar energía y mantener la salud. Una deshidratación de tan solo el 2% del peso corporal puede disminuir significativamente el rendimiento, afectando la fuerza, la velocidad y la concentración.
    
    ## ¿Cuándo y Cómo?
    Es crucial beber agua antes, durante y después del ejercicio. Para actividades prolongadas o intensas, las bebidas deportivas que reponen electrolitos pueden ser beneficiosas. No esperes a tener sed para beber; la sed es ya un signo de deshidratación. ¡Mantente hidratado y alcanza tu máximo potencial!`,
    authorSlug: 'dra-isabel-rios',
    date: '5 de Julio, 2024',
    imageUrl: 'https://picsum.photos/seed/hydration/1200/675',
    category: 'Fisioterapia',
  },
  {
    slug: 'prevencion-lesiones-corredores',
    title: 'Guía Completa para la Prevención de Lesiones en Corredores',
    excerpt: 'Correr es un excelente ejercicio, pero las lesiones son comunes. Sigue estos consejos para mantenerte en la pista y lejos de la clínica.',
    content: `Para evitar lesiones al correr, es fundamental un enfoque integral.
    
    ## Calentamiento y Progresión
    
    ### 1. Calentamiento adecuado
    No empieces en frío. Realiza 5-10 minutos de caminata rápida o trote suave, seguido de estiramientos dinámicos.
    
    ### 2. Aumento progresivo
    No aumentes tu kilometraje o intensidad en más de un 10% por semana. Dale tiempo a tu cuerpo para adaptarse.
    
    ## Fortalecimiento y Equipamiento
    
    ### 3. Fortalecimiento
    Un core, caderas y glúteos fuertes estabilizan tu cuerpo y mejoran la biomecánica. Incorpora ejercicios de fuerza 2-3 veces por semana.
    
    ### 4. Calzado adecuado
    Usa zapatillas específicas para correr que se ajusten a tu tipo de pie y pisada. Reemplázalas cada 500-800 km.
    
    ## Escucha a tu Cuerpo
    El dolor es una señal. No corras con dolor. Descansa y, si persiste, busca ayuda profesional. El descanso es tan importante como el entrenamiento.`,
    authorSlug: 'dr-alejandro-vargas',
    date: '28 de Junio, 2024',
    imageUrl: 'https://picsum.photos/seed/running/1200/675',
    category: 'Fisioterapia',
  },
  {
    slug: 'salud-bucal-diaria',
    title: 'Claves para una Sonrisa Radiante: Tu Rutina de Salud Bucal',
    excerpt: 'Más allá del cepillado, existen hábitos sencillos que marcan la diferencia en tu salud dental. Descúbrelos y luce tu mejor sonrisa.',
    content: `## Más Allá del Cepillo
    Mantener una sonrisa sana va más allá de cepillarse dos veces al día. El uso de hilo dental es fundamental para eliminar la placa entre los dientes, donde el cepillo no llega.
    
    ## Complementos Esenciales
    Un enjuague bucal antiséptico puede reducir las bacterias y prevenir la gingivitis. No olvides visitar a tu dentista cada seis meses para una limpieza profesional y una revisión completa. Una dieta equilibrada, baja en azúcares y ácidos, también protegerá tu esmalte. ¡Pequeños gestos para una gran sonrisa!`,
    authorSlug: 'dr-carlos-mendoza',
    date: '20 de Julio, 2024',
    imageUrl: 'https://picsum.photos/seed/dental/1200/675',
    category: 'Odontología',
  },
  {
    slug: 'revision-ginecologica-anual',
    title: 'La Revisión Ginecológica Anual: Un Acto de Amor Propio',
    excerpt: 'La prevención es la mejor herramienta para la salud de la mujer. Conoce por qué tu visita anual al ginecólogo es tan importante.',
    content: `## Prevención Activa
    La visita anual al ginecólogo es un pilar fundamental en el cuidado de la salud femenina. Permite la detección temprana de afecciones como el VPH, quistes o miomas, y es clave en la prevención del cáncer de cérvix y de mama.
    
    ## Un Espacio de Confianza
    Además, es un espacio para resolver dudas sobre anticoncepción, fertilidad, menstruación y menopausia. No esperes a tener síntomas. Tu revisión anual es una inversión en tu tranquilidad y bienestar a largo plazo.`,
    authorSlug: 'dra-laura-fernandez',
    date: '18 de Julio, 2024',
    imageUrl: 'https://picsum.photos/seed/womanhealth/1200/675',
    category: 'Ginecología',
  },
  {
    slug: 'mindfulness-ansiedad',
    title: 'Mindfulness para Principiantes: Reduce la Ansiedad en 10 Minutos',
    excerpt: 'Aprende a calmar tu mente y a conectar con el presente a través de técnicas sencillas de mindfulness que puedes practicar en cualquier lugar.',
    content: `## El Poder de la Atención Plena
    El mindfulness o atención plena es una práctica poderosa para combatir el estrés y la ansiedad del día a día.
    
    ## Primeros Pasos
    Comienza sentándote en un lugar tranquilo. Cierra los ojos y centra tu atención en tu respiración. Siente cómo el aire entra y sale de tu cuerpo. Tu mente divagará; es normal. Cuando ocurra, simplemente reconoce el pensamiento sin juzgarlo y suavemente redirige tu atención a la respiración. Practicar esto solo 10 minutos al día puede generar cambios significativos en tu estado de ánimo y tu capacidad de concentración.`,
    authorSlug: 'lic-ana-torres',
    date: '12 de Julio, 2024',
    imageUrl: 'https://picsum.photos/seed/mindful/1200/675',
    category: 'Psicología',
  },
];

export const BLOG_CATEGORIES = ['Odontología', 'Ginecología', 'Psicología', 'Fisioterapia'];

const experts: Expert[] = [
  {
    name: 'M Rongila Rongs',
    specialty: 'Medicine Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Dr Moshur Gulati',
    specialty: 'Medicine Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-7003507965b6?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Mk Jonty Dhoni',
    specialty: 'Medicine Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Dra. Sofia Vera',
    specialty: 'Cardiologist',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da60710?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Dr. Mateo Campos',
    specialty: 'Pediatrician',
    imageUrl: 'https://images.unsplash.com/photo-1582750421881-542648584380?q=80&w=800&auto=format&fit=crop',
  }
];

const testimonials: Testimonial[] = [
  {
    name: 'Tamar Mendelson',
    title: 'Paciente de Fisioterapia',
    quote: 'Quedé impresionada con el trato. Realmente se nota que utilizan técnicas de alta calidad. El personal fue amable y atento. ¡Definitivamente volveré!',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Carlos Jiménez',
    title: 'Paciente de Odontología',
    quote: 'El resultado de mi tratamiento dental fue increíble. El equipo fue muy profesional y me hicieron sentir cómodo durante todo el proceso. ¡Mi sonrisa nunca se ha visto mejor!',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Ana Sofía Rojas',
    title: 'Paciente de Ginecología',
    quote: 'La Dra. me brindó una atención excepcional y muy humana. Resolvió todas mis dudas con paciencia y profesionalismo. Me sentí en las mejores manos.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Javier Morales',
    title: 'Paciente de Psicología',
    quote: 'La terapia me ha ayudado enormemente a gestionar el estrés. Es un espacio seguro donde me siento escuchado y comprendido. Recomiendo totalmente sus servicios.',
    imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=800&auto=format&fit=crop'
  }
];


// --- NEW DATA FOR CONTACT FORM ---

export const serviceSpecialties = [
  {
    name: "Odontología",
    slug: "odontologia",
    services: [
      { name: "Limpieza Dental" },
      { name: "Ortodoncia" },
      { name: "Endodoncia" },
      { name: "Extracción" },
      { name: "Implantes" },
      { name: "Blanqueamiento" }
    ]
  },
  {
    name: "Ginecología",
    slug: "ginecologia",
    services: [
      { name: "Consulta General" },
      { name: "Citología (Papanicolau)" },
      { name: "Ecografía" },
      { name: "Mamografía" },
      { name: "Seguimiento de Embarazo" },
    ]
  },
  {
    name: "Psicología",
    slug: "psicologia",
    services: [
      { name: "Primera Consulta" },
      { name: "Terapia Individual" },
      { name: "Terapia de Pareja" },
      { name: "Evaluación Psicológica" },
    ]
  },
  {
    name: "Fisioterapia",
    slug: "fisioterapia",
    services: [
      { name: "Fisioterapia Deportiva" },
      { name: "Terapia Manual" },
      { name: "Rehabilitación Neurológica" },
      { name: "Rehabilitación Postquirúrgica" },
    ]
  }
];

// Mock function to simulate fetching available times
export const getAvailableTimes = async (date: Date): Promise<{ morning: string[], afternoon: string[] }> => {
  await sleep(300); // Simulate network delay
  const day = date.getDay();

  // No appointments on weekends
  if (day === 0 || day === 6) {
    return { morning: [], afternoon: [] };
  }

  // Generate some random available slots
  const morningSlots = ["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"];
  const afternoonSlots = ["15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00"];

  const randomFilter = () => Math.random() > 0.4;

  return {
    morning: morningSlots.filter(randomFilter),
    afternoon: afternoonSlots.filter(randomFilter)
  };
};

// Mock function to simulate checking patient existence
export const verifyPatient = async (identifier: string): Promise<{ name: string } | null> => {
    await sleep(1000); // Simulate network delay
    if (identifier.includes('test') || identifier.includes('123')) {
        return { name: "Elena García" };
    }
    return null;
}


// --- UTILITY FUNCTIONS ---
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 220;
  // This regex finds image tags, we assume 12 seconds (0.2 minutes) per image
  const imageCount = (content.match(/<img/g) || []).length; 
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  
  const readingTime = (wordCount / wordsPerMinute) + (imageCount * 0.2);
  return Math.ceil(readingTime);
};

// --- DATA ACCESS FUNCTIONS ---

export const getServices = async (): Promise<Service[]> => {
  await sleep(200);
  return services;
};

export const getServiceBySlug = async (slug: string): Promise<Service | undefined> => {
  await sleep(200);
  return services.find(service => service.slug === slug);
};

export const getPosts = async (): Promise<Post[]> => {
  await sleep(200);
  // Enrich posts with author and reading time
  return posts.map(p => {
    const author = authors.find(a => a.slug === p.authorSlug);
    return {
      ...p,
      author,
      readingTime: calculateReadingTime(p.content)
    };
  });
};

export const getLatestPosts = async (limit: number = 5): Promise<Post[]> => {
  await sleep(200);
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sortedPosts.slice(0, limit).map(p => {
    const author = authors.find(a => a.slug === p.authorSlug);
    return { ...p, author };
  });
};


export const getPostBySlug = async (slug: string): Promise<Post | undefined> => {
  await sleep(200);
  const post = posts.find(p => p.slug === slug);
  if (!post) return undefined;

  const author = authors.find(a => a.slug === post.authorSlug);
  return {
    ...post,
    author,
    readingTime: calculateReadingTime(post.content),
  };
};

export const getExperts = async (): Promise<Expert[]> => {
  await sleep(200);
  return experts;
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  await sleep(200);
  return testimonials;
}

export const getAuthors = async (): Promise<Author[]> => {
  await sleep(200);
  return authors;
};

export const getAuthorBySlug = async (slug: string): Promise<Author | undefined> => {
  await sleep(200);
  return authors.find(author => author.slug === slug);
};

export const getPostsByAuthorSlug = async (authorSlug: string, limit?: number): Promise<Post[]> => {
  await sleep(200);
  const authorPosts = posts.filter(p => p.authorSlug === authorSlug);
  
  const enrichedPosts = authorPosts.map(p => {
    const author = authors.find(a => a.slug === p.authorSlug);
    return {
      ...p,
      author,
      readingTime: calculateReadingTime(p.content)
    };
  });
  
  if (limit) {
      return enrichedPosts.slice(0, limit);
  }
  return enrichedPosts;
};
