import {
  Users,
  Zap,
  Lock,
  Globe,
  ShoppingCart,
  Smartphone,
  GraduationCap,
  UsersRound,
  Layers,
  CalendarRange,
  Timer,
  MessageSquareText,
  HeartHandshake,
  Coins,
  Phone,
  Instagram,
  MapPin,
  Menu,
  X,
  Sun,
  Moon,
  CheckCircle2,
  ArrowUpRight,
  Check,
  Building,
  Mail,
  Send,
  Sparkles,
  ArrowRight,
  Languages
} from 'lucide-react';

const iconMap = {
  Users,
  Zap,
  Lock,
  Globe,
  ShoppingCart,
  Smartphone,
  GraduationCap,
  UsersRound,
  Layers,
  CalendarRange,
  Timer,
  MessageSquareText,
  HeartHandshake,
  Coins,
  Phone,
  Instagram,
  MapPin,
  Menu,
  X,
  Sun,
  Moon,
  CheckCircle2,
  ArrowUpRight,
  Check,
  Building,
  Mail,
  Send,
  Sparkles,
  ArrowRight,
  Languages
};

export default function LucideIcon({ name, className = '', size = 24 }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <Globe className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
