import { User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  userType?: "admin" | "implementer" | "client";
  userName?: string;
}

export const Header = ({ userType = "admin", userName = "Usuario" }: HeaderProps) => {
  const getUserTypeLabel = () => {
    switch (userType) {
      case "admin":
        return "Administrador";
      case "implementer":
        return "Implementador";
      case "client":
        return "Cliente";
      default:
        return "Usuário";
    }
  };

  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-solarz-black tracking-tight">
              solar<span className="text-primary">Z</span>
            </div>
          </div>
          <div className="border-l border-border pl-3">
            <h1 className="text-lg font-bold text-solarz-black">Portal de Implementação</h1>
            <p className="text-xs text-muted-foreground">Gestão Integrada de Projetos</p>
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-medium text-solarz-black">{userName}</span>
            <span className="text-xs text-muted-foreground">{getUserTypeLabel()}</span>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};