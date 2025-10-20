import type { DepartmentItem } from '../constants/departmentData';
import Link from 'next/link';
import { DROPDOWN_STYLES } from '../constants/dropdownConstants';

type SubmenuContentProps = {
  readonly department: DepartmentItem;
};

export function SubmenuContent({ department }: SubmenuContentProps) {
  return (
    <div
      className={`${DROPDOWN_STYLES.mainContent.column} animate-in fade-in-0 slide-in-from-left-2 duration-200`}
    >
      {department.submenu.map(submenu => (
        <div key={submenu.title} className="mb-6">
          <h3 className="mb-4 text-sm font-bold text-gray-900">
            {submenu.title}
          </h3>
          <ul className="space-y-2">
            {submenu.items.map(subItem => (
              <li key={subItem}>
                <Link
                  href={`${department.href}/${subItem.toLowerCase().replaceAll(/\s+/g, '-')}`}
                  className={`text-sm ${DROPDOWN_STYLES.colors.primary} ${DROPDOWN_STYLES.colors.hover} ${DROPDOWN_STYLES.colors.underline}`}
                >
                  {subItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
