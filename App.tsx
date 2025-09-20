
import React from 'react';
import { componentCategories } from './data/componentData';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ComponentCard from './components/ui/ComponentCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-100 text-slate-800">
      <Header />
      <main className="container mx-auto px-4 py-12 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Componentes Essenciais da Web
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            Uma exploração dos blocos fundamentais de UI/UX que compõem as interfaces web modernas.
          </p>
        </div>

        {componentCategories.map((category) => (
          <section key={category.title} className="mb-16">
            <div className="mb-8">
               <h2 className="text-3xl font-bold text-slate-900 mb-3 border-b-2 border-teal-500 pb-2 inline-flex items-center gap-3">
                <span>{category.icon}</span>
                {category.title}
              </h2>
              <p className="text-slate-600 max-w-4xl">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.components.map((component) => (
                <ComponentCard
                  key={component.name}
                  name={component.name}
                  description={component.description}
                  code={component.code}
                >
                  {component.component}
                </ComponentCard>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
