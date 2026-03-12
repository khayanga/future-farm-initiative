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
  
} from "lucide-react";
import Link from "next/link";

const items = [
  { title: "About Us", url: "/", icon: LayoutDashboard },
  { title: "Services", url: "/service", icon: Sprout },
  { title: "Our Work", url: "/work", icon: BarChart3 },
  { title: "Our Advocacy", url: "/advocacy", icon: Spotlight },
  {title:"Our Programs", url:"/programs", icon: File},
  { title: "News & Updates", url: "/news", icon: HelpCircle },
  { title: "Contact Us", url: "/contact", icon: Phone },
];

export function AppSidebar() {
  return (
    <Sidebar className="hidden md:flex h-full border-r ">
      <SidebarContent className="mt-20 bg-primary text-background">
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
                      className="flex items-center gap-3 px-4 py-2 mb-4 rounded-lg transition-all duration-300 
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
