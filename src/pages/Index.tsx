import { useState } from "react";
import { Building, Users, Calendar, TrendingUp, ArrowRight, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { DashboardStats } from "@/components/DashboardStats";
import { ImplementerProfile } from "@/components/ImplementerProfile";
import { ImplementationProgress } from "@/components/ImplementationProgress";

const mockImplementer = {
  name: "Maria Santos",
  email: "maria.santos@empresa.com",
  phone: "(11) 99999-9999",
  bio: "Especialista em implementação de sistemas empresariais com mais de 8 anos de experiência. Focada em soluções que otimizam processos e aumentam a produtividade das equipes.",
  specialties: ["ERP", "CRM", "Integração de Sistemas", "Treinamento", "Migração de Dados"],
  experience: "Consultora Sênior • 8 anos de experiência",
  rating: 4.9,
  completedProjects: 47
};

const mockSteps = [
  {
    id: "1",
    title: "Análise de Requisitos",
    description: "Levantamento completo das necessidades e mapeamento dos processos atuais.",
    status: "completed" as const,
    estimatedDate: "15/01/2024"
  },
  {
    id: "2", 
    title: "Configuração Inicial",
    description: "Setup do ambiente e configurações básicas do sistema.",
    status: "completed" as const,
    estimatedDate: "22/01/2024"
  },
  {
    id: "3",
    title: "Customizações",
    description: "Desenvolvimento e implementação das personalizações necessárias.",
    status: "current" as const,
    estimatedDate: "05/02/2024"
  },
  {
    id: "4",
    title: "Testes e Validação",
    description: "Testes completos e validação com usuários finais.",
    status: "pending" as const,
    estimatedDate: "12/02/2024"
  },
  {
    id: "5",
    title: "Treinamento",
    description: "Capacitação da equipe para utilização do sistema.",
    status: "pending" as const,
    estimatedDate: "19/02/2024"
  },
  {
    id: "6",
    title: "Go-Live",
    description: "Colocação do sistema em produção e suporte inicial.",
    status: "pending" as const,
    estimatedDate: "26/02/2024"
  }
];

const Index = () => {
  const [activeView, setActiveView] = useState<"overview" | "admin" | "implementer" | "client">("overview");

  const renderOverview = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-hero text-white rounded-2xl shadow-strong">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Portal de Integração de Implementadores
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Centralize a comunicação e acompanhe o progresso das implementações de software 
            em um só lugar. Conecte implementadores e clientes de forma eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setActiveView("admin")}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <Shield className="h-5 w-5 mr-2" />
              Área do Administrador
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setActiveView("implementer")}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <Users className="h-5 w-5 mr-2" />
              Portal do Implementador
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setActiveView("client")}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <Building className="h-5 w-5 mr-2" />
              Acesso do Cliente
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8">
        <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
          <CardHeader>
            <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl text-solarz-black">Gestão Centralizada</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Gerencie todos os implementadores, clientes e projetos em uma única plataforma integrada.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
          <CardHeader>
            <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl text-solarz-black">Agenda Integrada</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Sistema de agendamento inteligente com notificações automáticas e lembretes.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
          <CardHeader>
            <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4">
              <Target className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl text-solarz-black">Acompanhamento Real</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Visualize o progresso das implementações em tempo real com métricas detalhadas.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );

  const renderAdminView = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-solarz-black">Dashboard Administrativo</h2>
          <p className="text-muted-foreground">Visão geral de todos os projetos e implementadores</p>
        </div>
        <Button onClick={() => setActiveView("overview")} variant="outline">
          <ArrowRight className="h-4 w-4 mr-2" />
          Voltar
        </Button>
      </div>
      <DashboardStats />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ImplementationProgress 
            steps={mockSteps} 
            currentStep={3} 
            completionPercentage={40}
          />
        </div>
        <ImplementerProfile implementer={mockImplementer} />
      </div>
    </div>
  );

  const renderImplementerView = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-solarz-black">Portal do Implementador</h2>
          <p className="text-muted-foreground">Gerencie suas implementações e clientes</p>
        </div>
        <Button onClick={() => setActiveView("overview")} variant="outline">
          <ArrowRight className="h-4 w-4 mr-2" />
          Voltar
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <ImplementerProfile implementer={mockImplementer} />
        <div className="lg:col-span-2">
          <ImplementationProgress 
            steps={mockSteps} 
            currentStep={3} 
            completionPercentage={40}
          />
        </div>
      </div>
    </div>
  );

  const renderClientView = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-solarz-black">Portal do Cliente</h2>
          <p className="text-muted-foreground">Acompanhe sua implementação</p>
        </div>
        <Button onClick={() => setActiveView("overview")} variant="outline">
          <ArrowRight className="h-4 w-4 mr-2" />
          Voltar
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <ImplementerProfile implementer={mockImplementer} />
        <div className="lg:col-span-2 space-y-6">
          <ImplementationProgress 
            steps={mockSteps} 
            currentStep={3} 
            completionPercentage={40}
          />
          
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-lg text-solarz-black">Próxima Reunião</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Data: 05/02/2024 - 14:00h</p>
                  <p className="text-sm text-muted-foreground">Reunião de acompanhamento das customizações</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Preparar para a reunião:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Planilha de processos atualizada</li>
                    <li>• Feedback dos usuários sobre os testes</li>
                    <li>• Lista de customizações pendentes</li>
                  </ul>
                </div>
                <Button variant="corporate" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Confirmar Presença
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const getUserType = () => {
    switch (activeView) {
      case "admin": return "admin";
      case "implementer": return "implementer";  
      case "client": return "client";
      default: return "admin";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-solarz-gray-light to-white">
      <Header userType={getUserType()} userName="Demo User" />
      
      <main className="container mx-auto px-4 py-8">
        {activeView === "overview" && renderOverview()}
        {activeView === "admin" && renderAdminView()}
        {activeView === "implementer" && renderImplementerView()}
        {activeView === "client" && renderClientView()}
      </main>
    </div>
  );
};

export default Index;
