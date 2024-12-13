import { AppSidebar } from "@/components/shared/AppSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  createRootRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

const RootComponent = () => {
  const location = useLocation().pathname.split("/");
  console.log("location", location);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="border flex-1 p-2">
        <SidebarTrigger />
        <Breadcrumb className="absolute top-3 ml-10">
          <BreadcrumbList>
            {location.map((item, index) => (
              <React.Fragment key={item + index}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className={cn({
                        "font-medium underline": index === location.length - 1,
                      })}
                      to={item ? `/${item}` : "/"}
                    >
                      {item
                        ? `${item[0].toUpperCase() + item.slice(1)}`
                        : "Home"}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {location.length - 1 !== index && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </SidebarProvider>
  );
};
