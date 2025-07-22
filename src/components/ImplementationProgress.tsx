import { CheckCircle2, Clock, AlertCircle, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ImplementationStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "current" | "pending" | "blocked";
  estimatedDate?: string;
}

interface ImplementationProgressProps {
  steps: ImplementationStep[];
  currentStep: number;
  completionPercentage: number;
}

export const ImplementationProgress = ({ 
  steps, 
  currentStep, 
  completionPercentage 
}: ImplementationProgressProps) => {
  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "current":
        return <Clock className="h-5 w-5 text-primary" />;
      case "blocked":
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Concluído</Badge>;
      case "current":
        return <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Em Andamento</Badge>;
      case "blocked":
        return <Badge variant="destructive">Bloqueado</Badge>;
      default:
        return <Badge variant="secondary">Pendente</Badge>;
    }
  };

  return (
    <Card className="shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-bold text-corporate-navy">
            Progresso da Implementação
          </span>
          <span className="text-2xl font-bold text-primary">
            {completionPercentage}%
          </span>
        </CardTitle>
        <Progress value={completionPercentage} className="h-2" />
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-4 p-3 rounded-lg bg-gradient-card">
              <div className="flex-shrink-0 mt-1">
                {getStepIcon(step.status)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-medium text-corporate-navy text-sm">
                    {step.title}
                  </h4>
                  {getStatusBadge(step.status)}
                </div>
                
                <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                  {step.description}
                </p>
                
                {step.estimatedDate && (
                  <p className="text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 inline mr-1" />
                    Prazo estimado: {step.estimatedDate}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};