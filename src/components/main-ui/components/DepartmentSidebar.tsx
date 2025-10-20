import type { DepartmentItem } from '../constants/departmentData';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import { DROPDOWN_STYLES } from '../constants/dropdownConstants';

type DepartmentSidebarProps = {
  readonly departments: readonly DepartmentItem[];
  readonly hoveredDepartment: string | null;
  readonly onDepartmentHover: (departmentId: string) => void;
  readonly onDepartmentLeave: () => void;
};

export function DepartmentSidebar({
  departments,
  hoveredDepartment,
  onDepartmentHover,
  onDepartmentLeave,
}: DepartmentSidebarProps) {
  return (
    <div
      className={`${DROPDOWN_STYLES.sidebar.width} ${DROPDOWN_STYLES.sidebar.border} ${DROPDOWN_STYLES.sidebar.background} ${DROPDOWN_STYLES.sidebar.padding}`}
    >
      <h3 className="mb-4 text-base font-bold text-white">
        Shop by Department
      </h3>
      <ul className="space-y-3">
        {departments.map(item => (
          <li key={item.id}>
            <button
              type="button"
              onMouseEnter={() => onDepartmentHover(item.id)}
              onMouseLeave={onDepartmentLeave}
              className={`flex w-full items-center justify-between gap-3 text-sm text-white hover:text-[#C7511F] hover:underline ${DROPDOWN_STYLES.transitions} hover:bg-white/20 rounded px-2 py-1 ${
                hoveredDepartment === item.id ? 'bg-white/30' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                {item.label}
              </div>
              <ChevronRight className="h-3 w-3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
