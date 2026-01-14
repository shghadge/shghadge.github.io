// Predefined colors for popular technologies (brand colors where possible)
// Format: 'tech name (lowercase)': 'hex color'
const techColorMap: Record<string, string> = {
  // Languages
  'go': '#00ADD8',
  'go (golang)': '#00ADD8',
  'golang': '#00ADD8',
  'python': '#3776AB',
  'rust': '#CE422B',
  'javascript': '#F7DF1E',
  'typescript': '#3178C6',
  'java': '#ED8B00',
  'c': '#A8B9CC',
  'c++': '#00599C',
  'c#': '#239120',
  'ruby': '#CC342D',
  'php': '#777BB4',
  'swift': '#FA7343',
  'kotlin': '#7F52FF',
  'scala': '#DC322F',
  'r': '#276DC3',
  'dart': '#0175C2',
  'elixir': '#4B275F',
  'haskell': '#5D4F85',
  'lua': '#2C2D72',
  'perl': '#39457E',
  'bash': '#4EAA25',
  'shell': '#4EAA25',
  'powershell': '#5391FE',
  
  // Frontend
  'html': '#E34F26',
  'html5': '#E34F26',
  'html/css': '#E34F26',
  'css': '#1572B6',
  'css3': '#1572B6',
  'sass': '#CC6699',
  'less': '#1D365D',
  'tailwind': '#06B6D4',
  'tailwindcss': '#06B6D4',
  'bootstrap': '#7952B3',
  'react': '#61DAFB',
  'reactjs': '#61DAFB',
  'vue': '#4FC08D',
  'vuejs': '#4FC08D',
  'angular': '#DD0031',
  'svelte': '#FF3E00',
  'next.js': '#FFFFFF',
  'nextjs': '#FFFFFF',
  'nuxt': '#00DC82',
  'gatsby': '#663399',
  'webpack': '#8DD6F9',
  'vite': '#646CFF',
  
  // Backend & Frameworks
  'node': '#339933',
  'nodejs': '#339933',
  'express': '#EEEEEE',
  'flask': '#EEEEEE',
  'django': '#092E20',
  'fastapi': '#009688',
  'spring': '#6DB33F',
  'rails': '#CC0000',
  'laravel': '#FF2D20',
  '.net': '#512BD4',
  'asp.net': '#512BD4',
  
  // Databases
  'mongodb': '#47A248',
  'mysql': '#4479A1',
  'postgresql': '#4169E1',
  'postgres': '#4169E1',
  'redis': '#DC382D',
  'sqlite': '#003B57',
  'oracle': '#F80000',
  'sql server': '#CC2927',
  'elasticsearch': '#005571',
  'cassandra': '#1287B1',
  'neo4j': '#008CC1',
  'dynamodb': '#4053D6',
  'firebase': '#FFCA28',
  'supabase': '#3ECF8E',
  
  // DevOps & Cloud
  'docker': '#2496ED',
  'kubernetes': '#326CE5',
  'k8s': '#326CE5',
  'aws': '#FF9900',
  'gcp': '#4285F4',
  'google cloud': '#4285F4',
  'azure': '#0078D4',
  'heroku': '#430098',
  'vercel': '#FFFFFF',
  'netlify': '#00C7B7',
  'digitalocean': '#0080FF',
  'terraform': '#7B42BC',
  'ansible': '#EE0000',
  'jenkins': '#D24939',
  'circleci': '#343434',
  'github': '#FFFFFF',
  'github actions': '#2088FF',
  'gitlab': '#FC6D26',
  'bitbucket': '#0052CC',
  'git': '#F05032',
  'linux': '#FCC624',
  'ubuntu': '#E95420',
  'nginx': '#009639',
  'apache': '#D22128',
  'helm': '#0F1689',
  'prometheus': '#E6522C',
  'grafana': '#F46800',
  'datadog': '#632CA6',
  'splunk': '#FFFFFF',
  'openstack': '#ED1944',
  'vsphere': '#607078',
  
  // Message Queues & Streaming
  'kafka': '#A0A0A0',
  'rabbitmq': '#FF6600',
  'nats': '#27AAE1',
  'pulsar': '#188FFF',
  
  // APIs & Protocols
  'rest': '#009688',
  'rest apis': '#009688',
  'graphql': '#E10098',
  'grpc': '#244C5A',
  'websocket': '#FFFFFF',
  'websockets': '#FFFFFF',
  'openapi': '#6BA539',
  'swagger': '#85EA2D',
  
  // AI/ML
  'tensorflow': '#FF6F00',
  'pytorch': '#EE4C2C',
  'keras': '#D00000',
  'scikit-learn': '#F7931E',
  'pandas': '#150458',
  'numpy': '#013243',
  'jupyter': '#F37626',
  'opencv': '#5C3EE8',
  'huggingface': '#FFD21E',
  'langchain': '#1C3C3C',
  'openai': '#412991',
  'llms': '#10A37F',
  'rag': '#10A37F',
  'ollama': '#FFFFFF',
  'mcp': '#6366F1',
  
  // Testing
  'jest': '#C21325',
  'mocha': '#8D6748',
  'cypress': '#17202C',
  'selenium': '#43B02A',
  'playwright': '#2EAD33',
  
  // Security & Auth
  'oauth': '#EB5424',
  'oauth 2.0': '#EB5424',
  'jwt': '#FFFFFF',
  'openid': '#F78C40',
  'rbac': '#6366F1',
  'abac': '#8B5CF6',
  'xacml': '#7C3AED',
  
  // Blockchain
  'ethereum': '#3C3C3D',
  'solidity': '#363636',
  'hyperledger': '#2F3134',
  'hyperledger fabric': '#2F3134',
  'web3': '#F16822',
  
  // Observability
  'opentelemetry': '#425CC7',
  'jaeger': '#60D0E4',
  'zipkin': '#FE7139',
  'pprof': '#00ADD8',
  
  // Microservices
  'microservices': '#1890FF',
  'istio': '#466BB0',
  'envoy': '#AC6199',
  'consul': '#F24C53',
  
  // Storage
  's3': '#569A31',
  'minio': '#C72C48',
  
  // Misc
  'vim': '#019733',
  'vscode': '#007ACC',
  'intellij': '#FFFFFF',
  'postman': '#FF6C37',
  'figma': '#F24E1E',
  'jira': '#0052CC',
  'confluence': '#172B4D',
  'slack': '#4A154B',
  'discord': '#5865F2',
  
  // Soft Skills
  'teamwork': '#10B981',
  'communication': '#3B82F6',
  'collaboration': '#8B5CF6',
  'adaptability': '#F59E0B',
  'problem solving': '#EF4444',
  'leadership': '#EC4899',
  'creativity': '#F97316',
  'critical thinking': '#14B8A6',
  'time management': '#6366F1',
};

// Fallback colors for unknown techs
const fallbackColors = [
  '#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EC4899',
  '#06B6D4', '#EAB308', '#EF4444', '#6366F1', '#14B8A6',
];

const getColorFromHash = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return fallbackColors[Math.abs(hash) % fallbackColors.length];
};

interface TechBadgeProps {
  tech: string;
  size?: 'sm' | 'md';
  color?: string; // Hex color like '#FF5733'
}

const TechBadge = ({ tech, size = 'sm', color }: TechBadgeProps) => {
  // Priority: explicit color > mapped color > hash-based fallback
  const techLower = tech.toLowerCase();
  const hexColor = color || techColorMap[techLower] || getColorFromHash(techLower);
  
  const sizeClasses = size === 'sm' 
    ? 'text-[10px] px-1.5 py-0.5 gap-1' 
    : 'text-xs px-2 py-1 gap-1.5';
  
  return (
    <span 
      className={`${sizeClasses} rounded border inline-flex items-center lowercase font-mono transition-all duration-300 hover:bg-opacity-10`}
      style={{
        borderColor: `${hexColor}40`, // 25% opacity border
        color: hexColor,
        backgroundColor: `${hexColor}0d`, // 5% opacity background
      }}
    >
      {tech}
    </span>
  );
};

export default TechBadge;
export { techColorMap };

