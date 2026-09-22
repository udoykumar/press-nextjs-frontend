"use client";
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  User,
  Settings,
  CreditCard,
  Bell,
  LogOut,
  Sun,
  Moon,
  Sparkles,
  LayoutDashboard,
  Layers,
  Tag,
  BarChart3,
  Home,
} from "lucide-react";
import { logout } from "@/service/Logout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";

const NAV_ITEMS = [
  { label: "Home", href: "#home", icon: Home },

  { label: "About", href: "about", icon: Layers },
  { label: "Service", href: "service", icon: Tag },
  { label: "Contact", href: "#contact", icon: BarChart3 },
  { label: "News", href: "news", icon: BarChart3 },
  { label: "Premium", href: "premium", icon: BarChart3 },
];

const MOCK_USER = {
  name: "Alex Rivera",
  email: "alex.rivera@example.com",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
  role: "Pro Member",
};
type IUser = {
  success: boolean;
  message: string;
  data: {
    profile: {
      id: string;
      name: string;
      email: string;
      activeStatus: string;
      role: string;
      createdAt: string;
      updatedAt: string;
      profile: {
        id: string;
        profilePhoto: string;
        bio: string;
        userId: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};
type NavbarProps = {
  user: IUser;
};

export default function Navbar({ user }: NavbarProps) {
  // console.log(user, "username");
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notificationsCount, setNotificationsCount] = useState(3);
  const router = useRouter();
  // Close dropdowns on mobile nav toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isUserDropdownOpen) setIsUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleUserMenuAction = async (action: string) => {
    if (action === "logout") {
      await logout();
      toast.success("User Logged out successfully");
      router.push("/login");
    }
  };

  return (
    <div
      className={` ${isDarkMode ? "dark bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"} transition-colors duration-300 font-sans`}
    >
      {}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {}
            <div className="flex items-center space-x-3">
              <a href="#" className="flex items-center space-x-2.5 group">
                <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-600 via-violet-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </div>
                <span className="font-extrabold text-xl tracking-tight bg-linear-to-r from-indigo-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                  ApexUI
                </span>
              </a>
            </div>

            {}
            <nav className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveTab(item.label)}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1.5 ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {}
            <div className="hidden md:flex items-center space-x-3">
              {/* Dark / Light Mode Toggle Button */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </button>

              {/* Notification Bell */}
              <button
                className="relative p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                onClick={() => setNotificationsCount(0)}
              >
                <Bell className="w-5 h-5" />
                {notificationsCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-950" />
                )}
              </button>

              {/* <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 mx-1 " /> */}

              {user.success && (
                <div className="relative cursor-pointer">
                  <button
                    onClick={toggleUserDropdown}
                    className="flex items-center space-x-2.5 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <img
                      src={MOCK_USER.avatarUrl}
                      alt={MOCK_USER.name}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/30"
                    />
                    <div className="text-left hidden lg:block">
                      <div className="text-xs font-semibold leading-tight text-slate-900 dark:text-slate-100">
                        {user?.data?.profile?.name}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">
                        {user?.data?.profile?.email}
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isUserDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown Content */}
                </div>
              )}
              {user.success ? (
                isUserDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsUserDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-73 w-64 z-50 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 py-2 transition-all animate-in fade-in zoom-in-95 duration-150">
                      {/* User Header */}
                      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Signed in as
                        </p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                          {user.data?.profile.email}
                        </p>
                      </div>

                      {/* Dropdown Links */}
                      <div className="py-1">
                        <a
                          href="#profile"
                          className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          <User className="w-4 h-4 mr-3 text-slate-400" />
                          Your Profile
                        </a>
                        <a
                          href="#settings"
                          className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          <Settings className="w-4 h-4 mr-3 text-slate-400" />
                          Settings
                        </a>
                        <a
                          href="#billing"
                          className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          <CreditCard className="w-4 h-4 mr-3 text-slate-400" />
                          Billing & Subscription
                        </a>
                      </div>

                      <div className="border-t border-slate-100 dark:border-slate-800 my-1" />

                      {/* Logout Action */}
                      <button
                        onClick={async () => {
                          setIsUserDropdownOpen(false);
                          await handleUserMenuAction("logout");
                        }}
                        className="w-full flex items-center px-4 py-2 text-sm text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                      >
                        <LogOut className="w-4 h-4  text-rose-500" />
                        Log out
                      </button>
                    </div>
                  </>
                )
              ) : (
                <>
                  <Link href={"/login"}>
                    <Button variant={"default"}>Login</Button>
                  </Link>
                  <Link href={"/register"}>
                    <Button variant={"default"}>SignIn</Button>
                  </Link>
                </>
              )}
            </div>

            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </button>

              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
            {/* User Info Bar in Mobile View */}
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
              <img
                src={MOCK_USER.avatarUrl}
                alt={MOCK_USER.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/30"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                  {user?.data?.profile?.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  {user?.data?.profile?.email}
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.label);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-3 space-y-1">
              <a
                href="#profile"
                className="flex items-center space-x-3 px-3.5 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                <span>Profile Settings</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  alert("Logged out!");
                }}
                className="w-full flex items-center space-x-3 px-3.5 py-2 rounded-lg text-sm text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30"
              >
                <LogOut className="w-4 h-4" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {}
      {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
            Active Section:{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {activeTab}
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-6">
            This navbar features standard Shadcn/Tailwind aesthetics, responsive
            mobile drawer menu, light/dark mode toggling, and interactive user
            dropdown.
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-sm font-medium border border-emerald-200 dark:border-emerald-800">
            <Check className="w-4 h-4" />
            <span>Ready for Next.js App Router & Tailwind CSS</span>
          </div>
        </div>
      </main> */}
    </div>
  );
}
