import { Users, Building2, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DashboardStats = () => {
  const stats = [
    {
      title: "Implementadores Ativos",
      value: "12",
      description: "Profissionais especializados",
      icon: Users,
      trend: "+2.5%"
    },
    {
      title: "Empresas Clientes",
      value: "48",
      description: "Implementações em andamento",
      icon: Building2,
      trend: "+8.1%"
    },
    {
      title: "Reuniões Esta Semana",
      value: "23",
      description: "Agendamentos confirmados",
      icon: Calendar,
      trend: "+12.3%"
    },
    {
      title: "Taxa de Sucesso",
      value: "94%",
      description: "Implementações concluídas",
      icon: TrendingUp,
      trend: "+1.2%"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-corporate-navy">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </p>
            <div className="flex items-center mt-2">
              <span className="text-xs text-primary font-medium">{stat.trend}</span>
              <span className="text-xs text-muted-foreground ml-1">vs último mês</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};