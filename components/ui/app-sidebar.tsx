// components/ui/app-sidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Sprout,
  BarChart3,
  Settings,
  Spotlight,
  HelpCircle,
  File,
  Phone,
  Zap,
  Handshake,
  ClipboardList,
  
} from "lucide-react";
import Link from "next/link";

const items = [
  { title: "Act", url: "/work/#act", icon: Zap },
  { title: "Partner", url: "/advocacy/#partners", icon: Handshake },
  { title: "Apply", url: "/programs/#enroll", icon: ClipboardList },
  
];

export function AppSidebar() {
  return (
    <Sidebar className="hidden md:flex h-full border-r ">
      <SidebarContent className="mt-20 bg-teal-900 text-background">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary-foreground text-md font-bold px-4 py-4 mb-4">
            Future Farms Initiative
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 px-4 py-2 mb-2 rounded-lg transition-all duration-300 
                      hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:text-white
                      hover:shadow-lg hover:shadow-black/5"
                              >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
