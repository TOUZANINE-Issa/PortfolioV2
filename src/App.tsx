import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
  Code2,
  Database,
  GitBranch,
  Wrench,
  Network,
  FileText,
  ChevronDown,
  Send,
  User,
  Briefcase,
  GraduationCap,
  Target
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Je vous répondrai dans les plus brefs délais.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">IT</div>
            <div className="hidden md:flex space-x-8">
              {['Accueil', 'À propos', 'Parcours', 'Compétences', 'Projets', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s/g, '-').replace('à', 'a'))}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <User className="w-20 h-20 text-blue-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Issa Touzanine
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              Étudiant en BTS SIO SLAM
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Passionné par le développement web, à la recherche d'une alternance pour la période 2025–2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
              >
                Me contacter
              </button>
              <a
                href="/CV TOUZANINE Issa.pdf (2).pdf"
                download
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </a>
            </div>
            <button
              onClick={() => scrollToSection('a-propos')}
              className="mt-16 animate-bounce"
            >
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      <section id="a-propos" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">À propos</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Je m'appelle <span className="font-semibold text-blue-600">Issa Touzanine</span>, j'ai <span className="font-semibold">20 ans</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Après un BAC technologique <span className="font-semibold">STI2D option SIN</span> au lycée Paul Éluard à Saint-Denis,
              j'ai commencé un BUT GEII à Sarcelles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              J'ai ensuite choisi de me réorienter vers le <span className="font-semibold text-blue-600">BTS SIO option SLAM</span> au
              lycée Robert Schuman pour me spécialiser dans le développement web et logiciel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ce choix vient de mon envie d'allier <span className="font-semibold">logique</span>, <span className="font-semibold">création</span> et <span className="font-semibold">technique</span>.
            </p>
          </div>
        </div>
      </section>

      <section id="parcours" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Parcours</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              Formation
            </h3>
            <div className="space-y-8">
              {[
                { year: '2024', title: 'BTS SIO (option SLAM)', location: 'Lycée Robert Schuman, Paris' },
                { year: '2023', title: 'BUT GEII (technologie embarquée)', location: 'IUT Cergy-Pontoise, Sarcelles' },
                { year: '2022', title: 'Bac STI2D (option SIN)', location: 'Lycée Paul Éluard, Saint-Denis' }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.year.slice(2)}
                    </div>
                    {index < 2 && <div className="w-1 h-full bg-blue-200 mt-2"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-sm text-blue-600 font-semibold mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-600" />
              Expérience professionnelle
            </h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2025
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Stage technicien informatique</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><span className="font-semibold">Installation et configuration de matériel :</span> Aider à l'installation de postes de travail, imprimantes, périphériques, et à la configuration de logiciels de base.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><span className="font-semibold">Support technique de premier niveau :</span> Participer au diagnostic de pannes simples et proposer des solutions sous supervision.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><span className="font-semibold">Maintenance préventive :</span> Effectuer des tâches de nettoyage matériel (intérieur/extérieur), mises à jour logicielles, vérification des antivirus, etc.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Compétences techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code2 className="w-8 h-8" />,
                  title: 'Langages',
                  skills: ['PHP', 'Java', 'C', 'HTML5', 'CSS3', 'Python', 'SQL']
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: 'Frameworks',
                  skills: ['jQuery', 'Bootstrap', 'JavaFX', 'Symfony']
                },
                {
                  icon: <Wrench className="w-8 h-8" />,
                  title: 'Outils',
                  skills: ['Visual Studio Code', 'Suite JetBrains', 'XAMPP', 'Apache', 'Debian', 'VirtualBox', 'Hyper-V']
                },
                {
                  icon: <GitBranch className="w-8 h-8" />,
                  title: 'Versioning',
                  skills: ['Git', 'GitHub']
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: 'Bureautique',
                  skills: ['Suite Office']
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: 'Réseau',
                  skills: ['Administration Windows (NTFS)', 'Configuration Debian', 'Virtualisation']
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: 'Base de données',
                  skills: ['MySQL']
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-blue-600 mb-4">{category.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Compétences transversales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                'Sens de l\'organisation',
                'Travail d\'équipe',
                'Persévérance',
                'Capacité d\'analyse',
                'Autonomie'
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-600 text-white rounded-lg p-4 text-center font-semibold shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Langues</h3>
              <div className="space-y-4">
                {[
                  { lang: 'Arabe', level: 'Bilingue' },
                  { lang: 'Anglais', level: 'Niveau scolaire' },
                  { lang: 'Espagnol', level: 'Niveau scolaire' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">{item.lang}</span>
                    <span className="text-gray-600">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Centres d'intérêt</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-gray-800">Sports :</span>
                  <span className="text-gray-600"> Boxe anglaise, Basket-ball, Taekwondo, Natation, Vélo</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Passion :</span>
                  <span className="text-gray-600"> Automobile</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Voyages :</span>
                  <span className="text-gray-600"> Italie, Espagne, Maroc, Belgique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projets" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projets réalisés</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Jeux en C',
                subtitle: 'Pac-Man et Bataille navale',
                description: 'Programmation orientée logique et gestion de collisions'
              },
              {
                title: 'Cardiogramme fonctionnel',
                subtitle: '',
                description: 'Réalisation d\'un simulateur d\'activité cardiaque'
              },
              {
                title: 'Jeu en Java',
                subtitle: '',
                description: 'Programmation orientée objet et interface utilisateur'
              },
              {
                title: 'Nuit de l\'Informatique',
                subtitle: '',
                description: 'Travail en équipe sur la création d\'un site web en 24h, déploiement en ligne'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-md">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                {project.subtitle && (
                  <h4 className="text-lg text-blue-600 font-semibold mb-4">{project.subtitle}</h4>
                )}
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <Target className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Objectif professionnel</h3>
                <p className="text-lg leading-relaxed text-blue-50">
                  Mon objectif est de devenir <span className="font-bold">Tech Lead</span> dans le domaine du développement web.
                  C'est un poste exigeant mais motivant, qui me pousse à continuer d'apprendre, à renforcer mes compétences
                  techniques et à développer mes qualités de leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: <Phone className="w-6 h-6" />, label: 'Téléphone', value: '06 44 07 31 90' },
              { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'issatouzanine@gmail.com' },
              { icon: <MapPin className="w-6 h-6" />, label: 'Localisation', value: 'Paris' },
              { icon: <Briefcase className="w-6 h-6" />, label: 'Permis', value: 'Permis B' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600">{item.icon}</div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">{item.label}</div>
                  <div className="text-gray-900 font-semibold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Envoyer
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400">© 2025 Issa Touzanine — Tous droits réservés</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:issatouzanine@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
