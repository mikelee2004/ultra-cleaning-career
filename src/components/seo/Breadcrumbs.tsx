/**
 * Компонент хлебных крошек для навигации и SEO
 * Помогает пользователям и поисковым системам понять структуру сайта
 */

import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Навигация" className="py-4 px-5 max-w-[1100px] mx-auto">
      <ol
        className="flex items-center gap-2 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Главная страница */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center gap-2"
        >
          <Link
            href="/"
            itemProp="item"
            className="flex items-center gap-1 text-[#64748B] hover:text-[#A70000] transition-colors"
          >
            <Home size={16} />
            <span itemProp="name">Главная</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {/* Остальные элементы */}
        {items.map((item, index) => (
          <li
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-2"
          >
            <ChevronRight size={16} className="text-[#CBD5E1]" />
            
            {item.href ? (
              <Link
                href={item.href}
                itemProp="item"
                className="text-[#64748B] hover:text-[#A70000] transition-colors"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name" className="text-[#1C2B3A] font-semibold">
                {item.label}
              </span>
            )}
            
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
