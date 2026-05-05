import logo from "figma:asset/b2b7009cfa2eb9227b1a018fd660fd95e4634e89.png";
import { ChevronDown, Brain, Target, TrendingUp, AlertCircle, Lightbulb, Database, BarChart3, Eye, Shield, Server, Monitor, Cpu, Search, DollarSign, Activity, Users, Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from 'react-i18next';
import '../i18n';
import { LanguageSelector } from "./components/LanguageSelector";

export default function App() {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020817]/90 backdrop-blur-sm border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={logo} alt="Soccer Mind Logo" className="h-12" />
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('sobre')} className="hover:text-[#a855f7] transition-colors">{t('nav.about')}</button>
              <button onClick={() => scrollToSection('solucao')} className="hover:text-[#a855f7] transition-colors">{t('nav.solution')}</button>
              <button onClick={() => scrollToSection('tecnologia')} className="hover:text-[#a855f7] transition-colors">{t('nav.technology')}</button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-[#a855f7] transition-colors">{t('nav.contact')}</button>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a855f7]/20 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06b6d4]/20 rounded-full blur-[128px] animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <img src={logo} alt="Soccer Mind" className="h-80 mx-auto mb-12 drop-shadow-[0_0_50px_rgba(168,85,247,0.3)]" />
          <p className="text-2xl md:text-3xl mb-4 text-gray-200">
            {t('hero.tagline')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-300 mb-12">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#a855f7] rounded-full"></span>
              {t('hero.data')}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#06b6d4] rounded-full"></span>
              {t('hero.context')}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#a855f7] rounded-full"></span>
              {t('hero.ai')}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-12">
            <span>{t('hero.scouting')}</span>
            <span>•</span>
            <span>{t('hero.performance')}</span>
            <span>•</span>
            <span>{t('hero.riskManagement')}</span>
          </div>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-[#a855f7]" />
          </button>
        </div>
      </section>

      {/* Intro Cards Section */}
      <section id="sobre" className="py-24 px-6 bg-gradient-to-b from-[#020817] to-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Por que surgiu */}
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-[#334155] hover:border-[#a855f7] transition-all duration-300 group">
              <h3 className="text-2xl font-bold mb-4 text-[#a855f7]">{t('intro.whyTitle')}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-3">{t('intro.whyProblem')}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {t('intro.whyProblemText')}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-3">{t('intro.whyAnswer')}</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('intro.whyAnswerText')}
                </p>
                <p className="text-[#a855f7] font-semibold">
                  {t('intro.whyConclusion')}
                </p>
              </div>
            </div>

            {/* Card 2: O que é */}
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-[#334155] hover:border-[#06b6d4] transition-all duration-300 group">
              <h3 className="text-2xl font-bold mb-4 text-[#06b6d4]">{t('intro.whatTitle')}</h3>
              
              <p className="text-gray-400 leading-relaxed mb-4">
                {t('intro.whatText')}
              </p>

              <div className="border-l-4 border-[#06b6d4] pl-4 py-2">
                <p className="text-gray-300 font-semibold mb-2">
                  {t('intro.whatNotJustNumbers')}
                </p>
                <p className="text-[#06b6d4] font-bold">
                  {t('intro.whatDeliverInsight')}
                </p>
              </div>
            </div>

            {/* Card 3: Nosso propósito */}
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-[#334155] hover:border-[#a855f7] transition-all duration-300 group">
              <h3 className="text-2xl font-bold mb-4 text-[#a855f7]">{t('intro.purposeTitle')}</h3>
              
              <p className="text-gray-400 mb-4">{t('intro.purposeHelp')}</p>
              
              <ul className="space-y-3 mb-6">
                <li className="text-gray-300">
                  {t('intro.purposeHireBetter')}
                </li>
                <li className="text-gray-300">
                  {t('intro.purposeMistakeLess')}
                </li>
                <li className="text-gray-300">
                  {t('intro.purposeDevelopMore')}
                </li>
                <li className="text-gray-300">
                  {t('intro.purposeCompeteSmarter')}
                </li>
              </ul>

              <p className="text-gray-400 leading-relaxed">
                {t('intro.purposeConclusion')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="solucao" className="py-24 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              {t('problem.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                {t('problem.subtitle')}
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t('problem.perception')}</h4>
                    <p className="text-gray-400">{t('problem.perceptionText')}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t('problem.isolated')}</h4>
                    <p className="text-gray-400">{t('problem.isolatedText')}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t('problem.comparison')}</h4>
                    <p className="text-gray-400">{t('problem.comparisonText')}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{t('problem.risk')}</h4>
                    <p className="text-gray-400">{t('problem.riskText')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-10 rounded-3xl border-2 border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.2)]">
              <p className="text-2xl text-white font-bold leading-relaxed text-center">
                {t('problem.conclusion')} <span className="text-red-500 font-extrabold">{t('problem.interpretation')}</span> {t('problem.and')} <span className="text-red-500 font-extrabold">{t('problem.integration')}</span> {t('problem.conclusionEnd')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-[#020817]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
              {t('vision.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#a855f7]/10 to-transparent p-8 rounded-2xl border border-[#a855f7]/30">
              <h3 className="text-2xl font-bold text-white mb-4">{t('vision.decisionsNeed')}</h3>
              <ul className="space-y-4">
                <li className="text-gray-300 text-lg">
                  {t('vision.contextualized')}
                </li>
                <li className="text-gray-300 text-lg">
                  {t('vision.comparable')}
                </li>
                <li className="text-gray-300 text-lg">
                  {t('vision.projectable')}
                </li>
                <li className="text-gray-300 text-lg">
                  {t('vision.measurable')}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#06b6d4]/10 to-transparent p-8 rounded-2xl border border-[#06b6d4]/30 flex items-center">
              <p className="text-xl text-gray-300 leading-relaxed">
                {t('vision.transform')} <span className="text-[#06b6d4] font-bold">{t('vision.dataToDecision')}</span>{t('vision.transformEnd')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-[#020817]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-400">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#334155] text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">1. {t('howItWorks.collection')}</h4>
              <p className="text-sm text-gray-400">{t('howItWorks.collectionText')}</p>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#334155] text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">2. {t('howItWorks.contextualization')}</h4>
              <p className="text-sm text-gray-400">{t('howItWorks.contextualizationText')}</p>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#334155] text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">3. {t('howItWorks.processing')}</h4>
              <p className="text-sm text-gray-400">{t('howItWorks.processingText')}</p>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#334155] text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">4. {t('howItWorks.ai')}</h4>
              <p className="text-sm text-gray-400">{t('howItWorks.aiText')}</p>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#334155] text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">5. {t('howItWorks.decision')}</h4>
              <p className="text-sm text-gray-400">{t('howItWorks.decisionText')}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-[#a855f7] font-bold">
              {t('howItWorks.conclusion')}
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-24 px-6 bg-gradient-to-b from-[#020817] to-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
              {t('technology.title')}
            </h2>
          </div>

          {/* Backend and Frontend - Organized Side by Side */}
          <div className="mb-24">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Backend Card */}
              <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-10 rounded-3xl border border-[#a855f7]/30">
                <Server className="w-16 h-16 text-[#a855f7] mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">{t('technology.backendTitle')}</h3>
                <p className="text-[#a855f7] font-bold text-lg mb-6">{t('technology.backendSubtitle')}</p>
                <p className="text-gray-400 mb-6">{t('technology.backendText')}</p>
                <div className="space-y-4">
                  <p className="text-gray-300">• {t('technology.backendMultipleSources')}</p>
                  <p className="text-gray-300">• {t('technology.backendNormalization')}</p>
                  <p className="text-gray-300">• {t('technology.backendHistory')}</p>
                  <p className="text-gray-300">• {t('technology.backendComparison')}</p>
                  <p className="text-gray-300">• {t('technology.backendAI')}</p>
                </div>
                <p className="text-[#a855f7] font-bold mt-6">
                  {t('technology.backendConclusion')}
                </p>
              </div>

              {/* Frontend Card */}
              <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-10 rounded-3xl border border-[#06b6d4]/30">
                <Monitor className="w-16 h-16 text-[#06b6d4] mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">{t('technology.frontendTitle')}</h3>
                <p className="text-[#06b6d4] font-bold text-lg mb-6">{t('technology.frontendSubtitle')}</p>
                <p className="text-gray-400 mb-6">{t('technology.frontendText')}</p>
                <div className="space-y-4">
                  <p className="text-gray-300">• {t('technology.frontendSimple')}</p>
                  <p className="text-gray-300">• {t('technology.frontendVisual')}</p>
                  <p className="text-gray-300">• {t('technology.frontendReports')}</p>
                  <p className="text-gray-300">• {t('technology.frontendView')}</p>
                </div>
                <p className="text-[#06b6d4] font-bold mt-6">
                  {t('technology.frontendConclusion')}
                </p>
              </div>
            </div>
          </div>

          {/* AI Section */}
          <div className="bg-gradient-to-br from-[#a855f7]/10 via-[#06b6d4]/10 to-transparent p-12 rounded-3xl border border-[#a855f7]/30 mb-24 shadow-[0_0_60px_rgba(168,85,247,0.15)]">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">{t('technology.aiTitle')}</h3>
              <p className="text-xl text-gray-300">{t('technology.aiSubtitle')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1e293b]/50 p-6 rounded-xl">
                <Shield className="w-10 h-10 text-[#a855f7] mb-4" />
                <h4 className="font-bold text-white mb-3">{t('technology.aiRisk')}</h4>
                <p className="text-gray-400 text-sm">{t('technology.aiRiskText')}</p>
              </div>
              <div className="bg-[#1e293b]/50 p-6 rounded-xl">
                <TrendingUp className="w-10 h-10 text-[#06b6d4] mb-4" />
                <h4 className="font-bold text-white mb-3">{t('technology.aiProjection')}</h4>
                <p className="text-gray-400 text-sm">{t('technology.aiProjectionText')}</p>
              </div>
              <div className="bg-[#1e293b]/50 p-6 rounded-xl">
                <BarChart3 className="w-10 h-10 text-[#a855f7] mb-4" />
                <h4 className="font-bold text-white mb-3">{t('technology.aiComparison')}</h4>
                <p className="text-gray-400 text-sm">{t('technology.aiComparisonText')}</p>
              </div>
              <div className="bg-[#1e293b]/50 p-6 rounded-xl">
                <Eye className="w-10 h-10 text-[#06b6d4] mb-4" />
                <h4 className="font-bold text-white mb-3">{t('technology.aiPatterns')}</h4>
                <p className="text-gray-400 text-sm">{t('technology.aiPatternsText')}</p>
              </div>
              <div className="bg-[#1e293b]/50 p-6 rounded-xl">
                <Users className="w-10 h-10 text-[#a855f7] mb-4" />
                <h4 className="font-bold text-white mb-3">{t('technology.aiCollective')}</h4>
                <p className="text-gray-400 text-sm">{t('technology.aiCollectiveText')}</p>
              </div>
              <div className="bg-[#1e293b]/50 p-6 rounded-xl">
                <Activity className="w-10 h-10 text-[#06b6d4] mb-4" />
                <h4 className="font-bold text-white mb-3">{t('technology.aiPhysical')}</h4>
                <p className="text-gray-400 text-sm">{t('technology.aiPhysicalText')}</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-2xl text-[#a855f7] font-bold">
                {t('technology.aiConclusion')}
              </p>
            </div>
          </div>

          {/* Scouting and Valorization - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Scouting Card */}
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-10 rounded-3xl border border-[#a855f7]/30">
              <h3 className="text-3xl font-bold text-white mb-4">{t('technology.scoutingTitle')}</h3>
              <p className="text-gray-400 mb-6">
                {t('technology.scoutingText')}
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-gray-300">{t('technology.scoutingCareer')}</p>
                <p className="text-gray-300">{t('technology.scoutingEvolution')}</p>
                <p className="text-gray-300">{t('technology.scoutingCost')}</p>
                <p className="text-gray-300">{t('technology.scoutingTrend')}</p>
              </div>
              <p className="text-[#a855f7] font-bold">
                {t('technology.scoutingConclusion')}
              </p>
            </div>

            {/* Valorization Card */}
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-10 rounded-3xl border border-[#06b6d4]/30">
              <h3 className="text-3xl font-bold text-white mb-4">{t('technology.valuationTitle')}</h3>
              <p className="text-gray-400 mb-6">{t('technology.valuationText')}</p>
              <div className="space-y-4 mb-8">
                <p className="text-gray-300">{t('technology.valuationGrowth')}</p>
                <p className="text-gray-300">{t('technology.valuationStagnation')}</p>
                <p className="text-gray-300">{t('technology.valuationProbability')}</p>
              </div>
              <p className="text-gray-400 mb-4">{t('technology.valuationAllows')}</p>
              <div className="space-y-3">
                <div className="bg-[#06b6d4]/10 px-4 py-2 rounded-lg">
                  <p className="text-gray-300">{t('technology.valuationAnticipated')}</p>
                </div>
                <div className="bg-[#06b6d4]/10 px-4 py-2 rounded-lg">
                  <p className="text-gray-300">{t('technology.valuationCostBenefit')}</p>
                </div>
                <div className="bg-[#06b6d4]/10 px-4 py-2 rounded-lg">
                  <p className="text-gray-300">{t('technology.valuationReduction')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differential Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-[#020817]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('differential.title')}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#a855f7]/10 via-[#06b6d4]/10 to-transparent p-12 rounded-3xl border border-[#a855f7]/30">
            <p className="text-2xl text-gray-300 text-center mb-12">
              {t('differential.intro')} <span className="text-[#06b6d4] font-bold">{t('differential.soccerMind')}</span> {t('differential.introEnd')}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#1e293b] p-6 rounded-xl border border-[#a855f7]">
                <h4 className="text-xl font-bold text-[#a855f7] mb-3">{t('differential.why')}</h4>
                <p className="text-gray-400 text-sm">{t('differential.whyText')}</p>
              </div>
              <div className="bg-[#1e293b] p-6 rounded-xl border border-[#06b6d4]">
                <h4 className="text-xl font-bold text-[#06b6d4] mb-3">{t('differential.repeat')}</h4>
                <p className="text-gray-400 text-sm">{t('differential.repeatText')}</p>
              </div>
              <div className="bg-[#1e293b] p-6 rounded-xl border border-[#a855f7]">
                <h4 className="text-xl font-bold text-[#a855f7] mb-3">{t('differential.fit')}</h4>
                <p className="text-gray-400 text-sm">{t('differential.fitText')}</p>
              </div>
              <div className="bg-[#1e293b] p-6 rounded-xl border border-[#06b6d4]">
                <h4 className="text-xl font-bold text-[#06b6d4] mb-3">{t('differential.worth')}</h4>
                <p className="text-gray-400 text-sm">{t('differential.worthText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#020817] to-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
              {t('forWhom.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#334155] hover:border-[#a855f7] transition-all">
              <div className="w-14 h-14 bg-[#a855f7]/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-[#a855f7]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t('forWhom.clubs')}</h4>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#334155] hover:border-[#06b6d4] transition-all">
              <div className="w-14 h-14 bg-[#06b6d4]/10 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-[#06b6d4]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t('forWhom.scouting')}</h4>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#334155] hover:border-[#a855f7] transition-all">
              <div className="w-14 h-14 bg-[#a855f7]/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-[#a855f7]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t('forWhom.technical')}</h4>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#334155] hover:border-[#06b6d4] transition-all">
              <div className="w-14 h-14 bg-[#06b6d4]/10 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-[#06b6d4]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t('forWhom.management')}</h4>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-[#334155] hover:border-[#a855f7] transition-all">
              <div className="w-14 h-14 bg-[#a855f7]/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-[#a855f7]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t('forWhom.youth')}</h4>
            </div>
          </div>

          <p className="text-center text-xl text-gray-400 mt-12">
            {t('forWhom.conclusion')}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-[#020817]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
              {t('cta.title')}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-12 rounded-3xl border border-[#a855f7]/30 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              {t('cta.readyFor')}
            </h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#a855f7]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-[#a855f7]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{t('cta.present')}</h4>
                  <p className="text-gray-400">{t('cta.presentText')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#06b6d4]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{t('cta.understand')}</h4>
                  <p className="text-gray-400">{t('cta.understandText')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#a855f7]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#a855f7]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{t('cta.adapt')}</h4>
                  <p className="text-gray-400">{t('cta.adaptText')}</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://wa.me/5511913267962" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#a855f7] to-[#9333ea] hover:from-[#9333ea] hover:to-[#a855f7] text-white px-12 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-[#a855f7]/20"
              >
                {t('cta.button')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#020817] border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={logo} alt="Soccer Mind" className="h-16 mb-6" />
              <p className="text-gray-400 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">{t('footer.navigation')}</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('sobre')} className="text-gray-400 hover:text-[#a855f7] transition-colors">
                    {t('nav.about')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('solucao')} className="text-gray-400 hover:text-[#a855f7] transition-colors">
                    {t('nav.solution')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('tecnologia')} className="text-gray-400 hover:text-[#a855f7] transition-colors">
                    {t('nav.technology')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contato')} className="text-gray-400 hover:text-[#a855f7] transition-colors">
                    {t('nav.contact')}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">{t('footer.contact')}</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-[#a855f7]" />
                  <a href="https://wa.me/5511913267962" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition-colors">
                    +55 (11) 91326-7962
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-[#a855f7]" />
                  <a href="mailto:comercial@soccermind.com.br" className="hover:text-[#a855f7] transition-colors">
                    comercial@soccermind.com.br
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Instagram className="w-5 h-5 text-[#a855f7]" />
                  <a href="https://www.instagram.com/soccermindofc/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition-colors">
                    @soccermindofc
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Linkedin className="w-5 h-5 text-[#a855f7]" />
                  <a href="https://www.linkedin.com/in/soccer-mind-br-9a81a1404/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition-colors">
                    Soccer Mind
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#a855f7]" />
                  {t('footer.location')}
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1e293b] pt-8 text-center text-gray-400">
            <p>© 2026 Soccer Mind. {t('footer.rights')}</p>
            <p className="mt-2 text-sm">{t('footer.tagline')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}