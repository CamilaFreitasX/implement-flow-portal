import { Mail, Phone, Calendar, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ImplementerProfileProps {
  implementer: {
    name: string;
    email: string;
    phone: string;
    bio: string;
    avatar?: string;
    specialties: string[];
    experience: string;
    rating: number;
    completedProjects: number;
  };
}

export const ImplementerProfile = ({ implementer }: ImplementerProfileProps) => {
  return (
    <Card className="shadow-medium">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-medium">
            {implementer.avatar ? (
              <img 
                src={implementer.avatar} 
                alt={implementer.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              implementer.name.split(' ').map(n => n[0]).join('').slice(0, 2)
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-corporate-navy">{implementer.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{implementer.experience}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>{implementer.rating}/5.0</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4 text-primary" />
                <span>{implementer.completedProjects} projetos</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-corporate-navy mb-2">Sobre o Implementador</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{implementer.bio}</p>
        </div>

        <div>
          <h4 className="font-semibold text-corporate-navy mb-2">Especialidades</h4>
          <div className="flex flex-wrap gap-2">
            {implementer.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="bg-accent text-accent-foreground">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-corporate-navy">Contato</h4>
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">{implementer.email}</span>
            </Button>
            <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">{implementer.phone}</span>
            </Button>
          </div>
        </div>

        <Button variant="corporate" className="w-full">
          <Calendar className="h-4 w-4 mr-2" />
          Agendar Reunião
        </Button>
      </CardContent>
    </Card>
  );
};